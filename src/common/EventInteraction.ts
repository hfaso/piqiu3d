import { Vector2 } from '../math/vector2';

export enum EInputEventType
{
    MOUSEVENT,    //总类，表示鼠标事件  
    MOUSEDOWN,     //鼠标按下事件
    MOUSEUP,       //鼠标弹起事件
    MOUSEMOVE,     //鼠标移动事件, move事件发生在当前鼠标指针之下的ISprite对象
    MOUSEDRAG,     //鼠标拖动事件, drag事件发生在mouseDown选中的ISprite对象上
    KEYBOARDEVENT, //键盘事件
    KEYUP,         //总类，键按下事件
    KEYDOWN,       //键弹起事件
    KEYPRESS        //按键事件
};

// CanvasKeyboardEvent和CanvasMouseEvent都继承自本类
// 基类定义了共同的属性，keyboard或mouse事件都能使用组合键
// 例如你可以按着ctrl键的同时点击鼠标左键做某些事情
// 当然你也可以按着alt + a 键做另外一些事情
export class CanvasInputEvent
{
    // 三个boolean变量，用来指示alt / ctrl / shift是否被按下
    public altKey: boolean;
    public ctrlKey: boolean;
    public shiftKey: boolean;

    // type是一个枚举对象，用来表示当前的事件类型
    public type: EInputEventType;

    // 构造函数， 使用了default参数
    public constructor( type: EInputEventType, altKey: boolean = false, ctrlKey: boolean = false, shiftKey: boolean = false )
    {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.type = type;
    }

}

// 回调函数类型别名
// 回调函数需要第三方实现和设置, 所有导出该回调函数
export type TimerCallback = ( id: number, data: any ) => void;

// 纯数据类
// 不需要导出Timer类，因为只是作为内部使用
class Timer
{
    public id: number = -1;
    
    // 标记当前计时器是否有效
    public enable: boolean = false;
    
    public callback: TimerCallback; // 回调函数，到时间会自动调用
    public callbackData: any = undefined;
    
    public countdown: number = 0;
    public timeout: number = 0;
    public onlyOnce: boolean = false; 

    consturctor ( callback:TimerCallback )
    {
        this.callback = callback;
    }
}

export class CanvasMouseEvent extends CanvasInputEvent
{
    // button表示当前按下鼠标的哪个键
    // [ 0: 鼠标左键 ，1： 鼠标中键，2：鼠标右键]
    public button: number;

    // 基于canvas坐标系的表示
    public canvasPosition: Vector2;

    public constructor ( type: EInputEventType, canvasPos: Vector2, button: number, altKey: boolean = false, ctrlKey: boolean = false, shiftKey: boolean = false)
    {
        super( type, altKey, ctrlKey, shiftKey );
        this.canvasPosition = canvasPos;
        this.button = button;
        console.log( this.button );
    }
}

export class CanvasKeyboardEvent extends CanvasInputEvent
{
    // 当前按下的键的ascii字符
    public key: string;
    // 当前按下的键的ascii码 （数字）
    public keyCode: number;
    // 当前按下的键是否不停的触发事件
    public repeat: boolean;

    public constructor ( type:EInputEventType, key:string, keyCode: number, repeat: boolean, altKey: boolean = false, ctrlKey: boolean = false, shiftKey: boolean = false )
    {
        super( type, altKey, ctrlKey, shiftKey );
        this.key = key;
        this.keyCode = keyCode;
        this.repeat = repeat;
    }
}

export class EventInteraction implements EventListenerObject
{
    public timers: Timer[] = [];
    private _timeId: number = -1;
    private _fps: number = 0;

    public isFlipYcoord: boolean = false;

    // EventInteraction主要是canvas2D和webgl应用
    // canvas2D和webGl context都是从HTMLCanvasElement元素获取的
    public canvas: HTMLCanvasElement;
    
    // 对mousemove事件提供一个开关变量
    // 设置为true，则每次鼠标移动都会触发mousemove事件
    public isSupportMouseMove: boolean;

    protected _isMouseDown: boolean;
    protected _isRightMouseDown: boolean = false; // 为了支持鼠标按下的drag事件

    // _start成员变量用于标记当前EventInteraction是否进入不间断的循环状态
    protected _start: boolean = false;
    // 由windows对象的requestAnimationFrame返回的大雨0的id号
    // 我们可以使用cancelAnimationFrame ( this .requestId )来取消动画循环状态
    protected _requestId: number = -1;

    // 用于计算当前更新 与上一次更新之间的时间差
    // 用于基于时间的更新
    protected _lastTime !: number;
    protected _startTime !: number;

    // 声明每帧的回调函数
    public frameCallback: ((app: EventInteraction) => void) | null;

    public constructor ( canvas: HTMLCanvasElement )
    {
        // EventInteraction基类拥有一个HTMLCanvasElement对象
        // 子类可以分别从该HTMLCanvasElement中获取Canvas2D或WebGl上下文对象
        this.canvas = canvas;

        // canvas元素能够监听鼠标事件
        this.canvas.addEventListener( 'mousedown', this, false );
        this.canvas.addEventListener( 'mouseup', this, false );
        this.canvas.addEventListener( 'mousemove', this, false );

        // 键盘事件不能在canvas中触发，但是能在全局的windows对象中触发
        // 因此我们能在window对象中监听键盘事件
        window.addEventListener('keydown', this, false);
        window.addEventListener('keyup', this, false);
        window.addEventListener('keypress', this, false);

        // 初始化时， mouseDown为false
        this._isMouseDown = false;
        
        // 默认状态下，不支持mousemove事件
        this.isSupportMouseMove = false;

        this.frameCallback = null;

        document.oncontextmenu = function() { return false; } // 禁止右键上下文菜单
    }

    // 判断当前EventInteraction是否一直在调用requestAnimationFrame
    public isRunning (): boolean
    {
        return this._start;
    }

    // 计算当前的fps ()
    public get fps ()
    {
        return this._fps;
    }

    // 启动动画循环
    public start (): void
    {
        if ( this._start === false )
        {
            this._start = true;
            // this._requestId = -1 // 将_requestId设置为-1
            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            // 启动更新渲染循环

            this._requestId = requestAnimationFrame( ( msec: number ): void =>
            {
                this.step( msec );
            } );

            //注释掉上述代码，使用下面代码来启动step方法
            //this . _requestId = requestAnimationFrame ( this . step . bind ( this ) ) ;
        }
    }

    // 不停的周而复始运动
    protected step ( timeStamp: number ): void
    {
        // 第一次掉用函数时，设置start和lastTime为timestamp
        if ( this._startTime === -1 ) this._startTime = timeStamp;
        if ( this._lastTime === -1 ) this._lastTime = timeStamp;

        // 计算当前时间点与上一次调用step时间点的差(可以理解为两帧之间的时间差）
        // 此时intervalSec实际是毫秒表示
        let intervalSec = ( timeStamp - this._lastTime );

        // 第一帧的时候，intervalSec为0，防止0作分母
        if ( intervalSec !== 0)
        {
            // 计算fps
            this._fps = 1000.0 / intervalSec;
        }

        // update使用的是秒为单位， 因此转换为秒表示
        intervalSec /= 1000.0;

        // 记录上一次的时间戳
        this._lastTime = timeStamp;

        this._handleTimers( intervalSec );
        // console.log (" elapsedTime = " + elapsedMsec + " diffTime = " + intervalSec);
        // 先更新
        this.update( elapsedMsec, intervalSec );
        // 后渲染
        this.render();

        if ( this.frameCallback !== null )
        {
            this.frameCallback( this );
        } 
        // 递归调用，形成周而复始的前进
        requestAnimationFrame((elapsedMsec: number): void =>{
            this.step( elapsedMsec );
        });
    }

    // 停止动画循环
    public stop (): void
    {
        if ( this._start )
        {
            // cancelAnimatioinFrame函数用于：
            // 取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求
            // alert(this._requestId);
            cancelAnimationFrame( this._requestId );
            // this._requestId = -1; // 将_requestId设置为-1

            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false;
        }
    }

    // 
}