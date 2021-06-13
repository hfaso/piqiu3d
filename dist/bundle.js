/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/RotatingCubeApplication.ts":
/*!*****************************************!*\
  !*** ./demo/RotatingCubeApplication.ts ***!
  \*****************************************/
/*! exports provided: RotatingCubeApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatingCubeApplication", function() { return RotatingCubeApplication; });
/* harmony import */ var _src_webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/webgl/WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _src_webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/webgl/WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _src_lib_CameraApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/lib/CameraApplication */ "./src/lib/CameraApplication.ts");
/* harmony import */ var _src_math_vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _src_math_matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/math/matrix4 */ "./src/math/matrix4.ts");
/* harmony import */ var _src_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils/HttpRequest */ "./src/utils/HttpRequest.ts");
/* harmony import */ var _src_webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/webgl/WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _src_webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/webgl/WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _src_lib_DrawHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/lib/DrawHelper */ "./src/lib/DrawHelper.ts");
/* harmony import */ var _src_math_MathHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/math/MathHelper */ "./src/math/MathHelper.ts");
/* harmony import */ var _src_lib_Primitives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/lib/Primitives */ "./src/lib/Primitives.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class RotatingCubeApplication extends _src_lib_CameraApplication__WEBPACK_IMPORTED_MODULE_2__["CameraApplication"] {
    constructor(canvas) {
        super(canvas, { premultipliedAlpha: false }, true); // 调用基类构造函数
        // 初始化角位移和角速度
        this.cubeAngle = 0;
        this.triAngle = 0;
        this.cubeSpeed = 100;
        this.triSpeed = 1;
        this.triTimerId = -1;
        this.currTexIdx = 0;
        this.textures = [];
        this.textures.push(_src_webgl_WebGLTextureCache__WEBPACK_IMPORTED_MODULE_6__["GLTextureCache"].instance.getMust("default"));
        // 创建封装后的GLProgram类
        this.textureProgram = _src_webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_7__["GLProgramCache"].instance.getMust("texture");
        this.colorProgram = _src_webgl_WebGLProgramCache__WEBPACK_IMPORTED_MODULE_7__["GLProgramCache"].instance.getMust("color");
        this.cube = new _src_lib_Primitives__WEBPACK_IMPORTED_MODULE_10__["Cube"](0.5, 0.5, 0.5);
        let data = this.cube.makeGeometryData();
        this.cubeVAO = data.makeStaticVAO(this.gl);
        this._hitAxis = _src_math_MathHelper__WEBPACK_IMPORTED_MODULE_9__["EAxisType"].NONE; // 初始化时没选中任何一条坐标轴
        // 初始化时，世界矩阵都为归一化矩阵
        this.cubeMatrix = new _src_math_matrix4__WEBPACK_IMPORTED_MODULE_4__["Matrix4"]();
        this.triMatrix = new _src_math_matrix4__WEBPACK_IMPORTED_MODULE_4__["Matrix4"]();
        // 调整摄像机的位置
        this.camera.z = 8;
    }
    _renderCube() {
        // 绑定要绘制的texutre和program
        this.textures[this.currTexIdx].bind();
        this.textureProgram.bind();
        this.textureProgram.loadSampler();
        // 绘制立方体
        this.matStack.loadIdentity();
        // 第一个渲染堆栈操作
        {
            this.matStack.pushMatrix(); // 矩阵进栈
            this.matStack.rotate(this.cubeAngle, _src_math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"].up, false); // 以角度(非弧度)为单位，每帧旋转
            // 合成modelViewProjection矩阵
            _src_math_matrix4__WEBPACK_IMPORTED_MODULE_4__["Matrix4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.cubeMatrix);
            // 将合成的矩阵给GLProgram对象
            this.textureProgram.setMatrix4(_src_webgl_WebGLProgram__WEBPACK_IMPORTED_MODULE_0__["GLProgram"].MVPMatrix, this.cubeMatrix);
            this.cubeVAO.draw(); // 使用当前绑定的texture和program绘制cubeVao对象
            // 使用辅助方法绘制坐标系
            _src_lib_DrawHelper__WEBPACK_IMPORTED_MODULE_8__["DrawHelper"].drawCoordSystem(this.builder, this.cubeMatrix, this._hitAxis, 1);
            this.matStack.popMatrix(); // 矩阵出栈
        }
        // 解除绑定的texture和program
        this.textureProgram.unbind();
        this.textures[this.currTexIdx].unbind();
    }
    _renderTriangle() {
        // 禁止渲染三角形时启用背面剔除功能
        this.gl.disable(this.gl.CULL_FACE);
        // 由于三角形使用颜色+位置信息进行绘制，因此要绑定当前的GPU Program为colorProgram
        this.colorProgram.bind();
        {
            this.matStack.pushMatrix(); // 新产生一个矩阵
            // 立方体绘制在Canvas的中心
            // 而三角形则绘制在向左（负号）平移2个单位处的位置
            this.matStack.translate(new _src_math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"](-2, 0, 0));
            // 使用弧度，绕Z轴进行Roll旋转
            this.matStack.rotate(this.triAngle, _src_math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"].forward, true);
            // 使用类似OpenGL1.1的立即绘制模式
            this.builder.begin(); // 开始绘制，defatul使用gl.TRIANGLES方式绘制
            this.builder.color(1, 0, 0).vertex(-0.5, 0, 0); // 三角形第一个点的颜色与坐标
            this.builder.color(0, 1, 0).vertex(0.5, 0, 0); // 三角形第二个点的颜色与坐标
            this.builder.color(0, 0, 1).vertex(0, 0.5, 0); // 三角形第三个点的颜色与坐标
            // 合成model-view-projection matrix
            _src_math_matrix4__WEBPACK_IMPORTED_MODULE_4__["Matrix4"].product(this.camera.viewProjectionMatrix, this.matStack.modelViewMatrix, this.triMatrix);
            // 将mvpMatrix传递给GLMeshBuilder的end方法，该方法会正确的显示图形
            this.builder.end(this.triMatrix);
            this.matStack.popMatrix(); // 删除一个矩阵
        }
        this.colorProgram.unbind();
        // 恢复背面剔除功能
        this.gl.enable(this.gl.CULL_FACE);
    }
    // 关于Canvas2D的详细应用，可以参考本书的姐妹篇：TypeScript图形渲染实战：2D架构设计与实现
    _renderText(text, x = this.canvas.width * 0.5, y = 150) {
        if (this.ctx2D !== null) {
            this.ctx2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx2D.save(); // 渲染状态进栈
            this.ctx2D.fillStyle = "red"; // 红色
            this.ctx2D.textAlign = "center"; // X轴居中对齐
            this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
            this.ctx2D.font = "30px Arial"; // 使用大一点的Arial字体对象
            this.ctx2D.fillText(text, x, y); // 进行文字绘制
            this.ctx2D.restore(); // 恢复原来的渲染状态
        }
    }
    drawText(pos, axis, mvp, inverse = false) {
        if (this.ctx2D === null) {
            return;
        }
        let out = new _src_math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"]();
        // 调用 MathHelper.obj2ScreenSpace这个核心函数，将局部坐标系标示的一个点变换到屏幕坐标系上
        if (_src_math_MathHelper__WEBPACK_IMPORTED_MODULE_9__["MathHelper"].obj2GLViewportSpace(pos, mvp, this.camera.getViewport(), out)) {
            out.y = this.canvas.height - out.y; // 变换到屏幕坐标系，左手系，原点在左上角，x向右，y向下
            this.ctx2D.save(); // 渲染状态进栈
            this.ctx2D.font = "30px Arial"; // 使用大一点的Arial字体对象
            if (axis === _src_math_MathHelper__WEBPACK_IMPORTED_MODULE_9__["EAxisType"].XAXIS) {
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                this.ctx2D.fillStyle = "red"; // 红色
                if (inverse === true) {
                    this.ctx2D.textAlign = "right";
                    this.ctx2D.fillText("-X", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("X", out.x, out.y); // 进行文字绘制
                }
            }
            else if (axis === _src_math_MathHelper__WEBPACK_IMPORTED_MODULE_9__["EAxisType"].YAXIS) {
                this.ctx2D.textAlign = "center"; // X轴居中对齐
                this.ctx2D.fillStyle = "green"; // 绿色
                if (inverse === true) {
                    this.ctx2D.textBaseline = 'top'; // -Y轴为top对齐
                    this.ctx2D.fillText("-Y", out.x, out.y); // 行文字绘制
                }
                else {
                    this.ctx2D.textBaseline = 'bottom'; // Y轴为bottom对齐
                    this.ctx2D.fillText("Y", out.x, out.y); // 进行文字绘制
                }
            }
            else {
                this.ctx2D.fillStyle = "blue"; // 绿色
                this.ctx2D.textBaseline = 'top'; // Y轴为top对齐
                if (inverse === true) {
                    this.ctx2D.textAlign = "right"; // X轴居中对齐
                    this.ctx2D.fillText("-Z", out.x, out.y); // 进行文字绘制
                }
                else {
                    this.ctx2D.textAlign = "left"; // X轴居中对齐
                    this.ctx2D.fillText("Z", out.x, out.y); // 进行文字绘制
                }
            }
            this.ctx2D.restore(); // 恢复原来的渲染状态
        }
    }
    render() {
        this._renderCube();
        this._renderTriangle();
        this._renderText("第一个WebGL Demo");
    }
    update(elapsedMsec, intervalSec) {
        // s = vt，根据两帧间隔更新角速度和角位移
        this.cubeAngle += this.cubeSpeed * intervalSec;
        // 我们在CameraApplication中也覆写（override）的update方法
        // CameraApplication的update方法用来计算摄像机的投影矩阵以及视图矩阵
        // 所以我们必须要调用基类方法，用于控制摄像机更新
        // 否则你将什么都看不到，切记！
        super.update(elapsedMsec, intervalSec);
    }
    // 资源同步方法
    run() {
        const _super = Object.create(null, {
            run: { get: () => super.run }
        });
        return __awaiter(this, void 0, void 0, function* () {
            // await必须要用于async声明的函数中
            let img = yield _src_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"].loadImageAsync("data/pic0.png");
            let tex = new _src_webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](this.gl);
            tex.upload(img, 0, true);
            tex.filter();
            this.textures.push(tex);
            console.log("1、第一个纹理载入成功！");
            // await必须要用于async声明的函数中
            img = yield _src_utils_HttpRequest__WEBPACK_IMPORTED_MODULE_5__["HttpRequest"].loadImageAsync("data/pic1.jpg");
            tex = new _src_webgl_WebGLTexture__WEBPACK_IMPORTED_MODULE_1__["GLTexture"](this.gl);
            tex.upload(img, 0, true);
            tex.filter();
            this.textures.push(tex);
            console.log("2、第二个纹理载入成功！");
            // 在资源同步加载完成后，直接启动换肤的定时器，每隔2秒，将立方体的皮肤进行周而复始的替换
            this.addTimer(this.cubeTimeCallback.bind(this), 2, false);
            console.log("3、启动Application程序");
            _super.run.call(this); // 调用基类的run方法，基类run方法内部调用了start方法
        });
    }
    cubeTimeCallback(id, data) {
        this.currTexIdx++; // 定时让计数器+1
        // 取模操作，让currTexIdx的取值范围为[ 0, 2 ]之间（当前有3个纹理）
        this.currTexIdx %= this.textures.length;
    }
    triTimeCallback(id, data) {
        this.triAngle += this.triSpeed;
    }
    onKeyDown(evt) {
        if (evt.key === "q") {
            if (this.triTimerId === -1) {
                this.triTimerId = this.addTimer(this.triTimeCallback.bind(this), 0.25, false);
            }
        }
        else if (evt.key === "e") {
            if (this.triTimerId !== -1) {
                if (this.removeTimer(this.triTimerId)) {
                    this.triTimerId = -1;
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/common/EventInteraction.ts":
/*!****************************************!*\
  !*** ./src/common/EventInteraction.ts ***!
  \****************************************/
/*! exports provided: EInputEventType, CanvasInputEvent, CanvasMouseEvent, CanvasKeyBoardEvent, EventInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EInputEventType", function() { return EInputEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasInputEvent", function() { return CanvasInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMouseEvent", function() { return CanvasMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasKeyBoardEvent", function() { return CanvasKeyBoardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventInteraction", function() { return EventInteraction; });
/* harmony import */ var _math_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector2 */ "./src/math/vector2.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var EInputEventType;
(function (EInputEventType) {
    EInputEventType[EInputEventType["MOUSEEVENT"] = 0] = "MOUSEEVENT";
    EInputEventType[EInputEventType["MOUSEDOWN"] = 1] = "MOUSEDOWN";
    EInputEventType[EInputEventType["MOUSEUP"] = 2] = "MOUSEUP";
    EInputEventType[EInputEventType["MOUSEMOVE"] = 3] = "MOUSEMOVE";
    EInputEventType[EInputEventType["MOUSEDRAG"] = 4] = "MOUSEDRAG";
    EInputEventType[EInputEventType["KEYBOARDEVENT"] = 5] = "KEYBOARDEVENT";
    EInputEventType[EInputEventType["KEYUP"] = 6] = "KEYUP";
    EInputEventType[EInputEventType["KEYDOWN"] = 7] = "KEYDOWN";
    EInputEventType[EInputEventType["KEYPRESS"] = 8] = "KEYPRESS"; //按键事件
})(EInputEventType || (EInputEventType = {}));
;
// CanvasKeyboardEvent和CanvasMouseEvent都继承自本类
// 基类定义了共同的属性，keyboard或mouse事件都能使用组合键
// 例如你可以按着ctrl键的同时点击鼠标左键做某些事情
// 当然你也可以按着alt + a 键做另外一些事情
class CanvasInputEvent {
    // 构造函数，使用了default参数
    constructor(type, altKey = false, ctrlKey = false, shiftKey = false) {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.type = type;
    }
}
// 纯数据类
// 我们不需要导出Timer类，因为只是作为内部类使用
class Timer {
    constructor(callback) {
        this.id = -1; // 计时器的id号 
        // 标记当前计时器是否有效，很重要的一个变量，具体看后续代码
        this.enabled = false;
        this.callbackData = undefined; // 用作回调函数的参数
        this.countdown = 0; // 倒计时器，每次update时会倒计时
        this.timeout = 0; // 
        this.onlyOnce = false;
        this.callback = callback;
    }
}
class CanvasMouseEvent extends CanvasInputEvent {
    constructor(type, canvasPos, button, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.canvasPosition = canvasPos;
        this.button = button;
        console.log(this.button);
    }
}
class CanvasKeyBoardEvent extends CanvasInputEvent {
    constructor(type, key, keyCode, repeat, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.key = key;
        this.keyCode = keyCode;
        this.repeat = repeat;
    }
}
class EventInteraction {
    constructor(canvas) {
        this.timers = [];
        this._timeId = -1;
        this._fps = 0;
        this.isFlipYCoord = false;
        this._isRightMouseDown = false; // 为了支持鼠标按下drag事件
        // _start成员变量用于标记当前EventInteraction是否进入不间断的循环状态
        this._start = false;
        // 由Window对象的requestAnimationFrame返回的大于0的id号
        // 我们可以使用cancelAnimationFrame ( this ._requestId )来取消动画循环
        this._requestId = -1;
        // EventInteraction基类拥有一个HTMLCanvasElement对象
        // 这样子类可以分别从该HTMLCanvasElement中获取Canvas2D或WebGL上下文对象
        this.canvas = canvas;
        // canvas元素能够监听鼠标事件
        this.canvas.addEventListener("mousedown", this, false);
        this.canvas.addEventListener("mouseup", this, false);
        this.canvas.addEventListener("mousemove", this, false);
        // 很重要一点，键盘事件不能在canvas中触发，但是能在全局的window对象中触发
        // 因此我们能在window对象中监听键盘事件
        window.addEventListener("keydown", this, false);
        window.addEventListener("keyup", this, false);
        window.addEventListener("keypress", this, false);
        // 初始化时，mouseDown为false
        this._isMouseDown = false;
        // 默认状态下，不支持mousemove事件
        this.isSupportMouseMove = false;
        this.frameCallback = null;
        document.oncontextmenu = function () { return false; }; // 禁止右键上下文菜单
    }
    // 判断当前EventInteraction是否一直在调用requestAnimationFrame
    isRunning() {
        return this._start;
    }
    // 计算当前的FPS（Frame Per Second）
    get fps() {
        return this._fps;
    }
    // 启动动画循环
    start() {
        if (this._start === false) {
            this._start = true;
            //this . _requestId = -1 ; // 将_requestId设置为-1
            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            // 启动更新渲染循环
            this._requestId = requestAnimationFrame((msec) => {
                // 启动step方法
                this.step(msec);
            });
            //注释掉上述代码，使用下面代码来启动step方法
            //this . _requestId = requestAnimationFrame ( this . step . bind ( this ) ) ;
        }
    }
    // 不停的周而复始运动
    step(timeStamp) {
        //第一次调用本函数时，设置start和lastTime为timestamp
        if (this._startTime === -1)
            this._startTime = timeStamp;
        if (this._lastTime === -1)
            this._lastTime = timeStamp;
        //计算当前时间点与第一次调用step时间点的差
        let elapsedMsec = timeStamp - this._startTime;
        //计算当前时间点与上一次调用step时间点的差(可以理解为两帧之间的时间差)
        // 此时intervalSec实际是毫秒表示
        let intervalSec = (timeStamp - this._lastTime);
        // 第一帧的时候,intervalSec为0,防止0作分母
        if (intervalSec !== 0) {
            // 计算fps
            this._fps = 1000.0 / intervalSec;
        }
        // 我们update使用的是秒为单位，因此转换为秒表示
        intervalSec /= 1000.0;
        //记录上一次的时间戳
        this._lastTime = timeStamp;
        this._handleTimers(intervalSec);
        // console.log (" elapsedTime = " + elapsedMsec + " diffTime = " + intervalSec);
        // 先更新
        this.update(elapsedMsec, intervalSec);
        // 后渲染
        this.render();
        if (this.frameCallback !== null) {
            this.frameCallback(this);
        }
        // 递归调用，形成周而复始的前进
        requestAnimationFrame((elapsedMsec) => {
            this.step(elapsedMsec);
        });
    }
    // 停止动画循环
    stop() {
        if (this._start) {
            // cancelAnimationFrame函数用于:
            //取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求
            //alert(this._requestId);
            cancelAnimationFrame(this._requestId);
            //this . _requestId = -1 ; // 将_requestId设置为-1
            // 在start和stop函数中，_lastTime和_startTime都设置为-1
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false;
        }
    }
    //虚方法，子类能覆写（override），用于更新
    //注意: 第二个参数是秒为单位，第一参数是毫秒为单位
    update(elapsedMsec, intervalSec) { }
    //虚方法，子类能覆写（override），用于渲染
    render() { }
    // 虚函数，子类覆写（overide），用于同步各种资源后启动EventInteraction
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            // 调用start方法，该方法会启动requestAnimationFrame
            // 然后不停的进行回调
            this.start();
        });
    }
    // 调用dispatchXXXX虚方法进行事件分发
    // handleEvent是接口EventListenerObject定义的协议分发，必须要实现
    handleEvent(evt) {
        switch (evt.type) {
            case "mousedown":
                this._isMouseDown = true;
                this.onMouseDown(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDOWN));
                break;
            case "mouseup":
                this._isMouseDown = false;
                this.onMouseUp(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEUP));
                break;
            case "mousemove":
                // 如果isSupportMouseMove为true，才会每次鼠标移动触发mouseMove事件
                if (this.isSupportMouseMove) {
                    this.onMouseMove(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEMOVE));
                }
                // 同时，如果当前鼠标任意一个键处于按下状态并拖动时，触发drag事件
                if (this._isMouseDown) {
                    this.onMouseDrag(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDRAG));
                }
                break;
            case "keypress":
                this.onKeyPress(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYPRESS));
                break;
            case "keydown":
                this.onKeyDown(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYDOWN));
                break;
            case "keyup":
                this.onKeyUp(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYUP));
                break;
        }
    }
    onMouseDown(evt) {
        return;
    }
    onMouseUp(evt) {
        return;
    }
    onMouseMove(evt) {
        return;
    }
    onMouseDrag(evt) {
        return;
    }
    onKeyDown(evt) {
        return;
    }
    onKeyUp(evt) {
        return;
    }
    onKeyPress(evt) {
        return;
    }
    getMouseCanvas() {
        return this.canvas;
    }
    // 将鼠标事件发生时鼠标指针的位置变换为相对当前canvas元素的偏移表示
    // 这是一个私有方法，意味着只能在本类中使用,子类和其他类都无法调用本方法
    // 只要是鼠标事件（down / up / move / drag .....）都需要调用本方法
    // 将相对于浏览器viewport表示的点变换到相对于canvas表示的点
    viewportToCanvasCoordinate(evt) {
        // 切记，很重要一点：
        // getBoundingClientRect方法返回的ClientRect
        let rect = this.getMouseCanvas().getBoundingClientRect();
        // 获取触发鼠标事件的target元素，这里总是HTMLCanvasElement
        if (evt.target) {
            let x = evt.clientX - rect.left;
            let y = 0;
            y = evt.clientY - rect.top; // 相对于canvas左上的偏移
            if (this.isFlipYCoord) {
                y = this.getMouseCanvas().height - y;
            }
            // 变成矢量表示
            let pos = new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](x, y);
            return pos;
        }
        alert("evt . target为null");
        throw new Error("evt . target为null");
    }
    // 将DOM Event对象信息转换为我们自己定义的CanvasMouseEvent事件
    _toCanvasMouseEvent(evt, type) {
        // 向下转型，将Event转换为MouseEvent
        let event = evt;
        if (type === EInputEventType.MOUSEDOWN && event.button === 2) {
            this._isRightMouseDown = true;
        }
        else if (type === EInputEventType.MOUSEUP && event.button === 2) {
            this._isRightMouseDown = false;
        }
        let buttonNum = event.button;
        if (this._isRightMouseDown && type === EInputEventType.MOUSEDRAG) {
            buttonNum = 2;
        }
        // 将客户区的鼠标pos变换到Canvas坐标系中表示
        let mousePosition = this.viewportToCanvasCoordinate(event);
        // 将Event一些要用到的信息传递给CanvasMouseEvent并返回
        let canvasMouseEvent = new CanvasMouseEvent(type, mousePosition, buttonNum, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasMouseEvent;
    }
    // 将DOM Event对象信息转换为我们自己定义的Keyboard事件
    _toCanvasKeyBoardEvent(evt, type) {
        let event = evt;
        // 将Event一些要用到的信息传递给CanvasKeyBoardEvent并返回
        let canvasKeyboardEvent = new CanvasKeyBoardEvent(type, event.key, event.keyCode, event.repeat, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasKeyboardEvent;
    }
    // 初始化时，timers是空列表
    // 为了减少内存析构，我们在removeTimer时，并不从timers中删除掉timer，而是设置enabled为false
    // 这样让内存使用量和析构达到相对平衡状态
    // 每次添加一个计时器时，先查看timers列表中是否有没有时候用的timer，有的话，返回该timer的id号
    // 如果没有可用的timer，就重新new一个timer，并设置其id号以及其他属性
    addTimer(callback, timeout = 1.0, onlyOnce = false, data = undefined) {
        let timer;
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            if (timer.enabled === false) {
                timer.callback = callback;
                timer.callbackData = data;
                timer.timeout = timeout;
                timer.countdown = timeout;
                timer.enabled = true;
                timer.onlyOnce = onlyOnce;
                return timer.id;
            }
        }
        // 不存在，就新创建一个Timer对象
        timer = new Timer(callback);
        timer.callbackData = data;
        timer.timeout = timeout;
        timer.countdown = timeout;
        timer.enabled = true;
        timer.id = ++this._timeId; // 由于初始化时id为-1,所以前++
        timer.onlyOnce = onlyOnce; //设置是否是一次回调还是重复回调
        // 添加到timers列表中去
        this.timers.push(timer);
        // 返回新添加的timer的id号
        return timer.id;
    }
    // 根据id在timers列表中查找
    // 如果找到，则设置timer的enabled为false，并返回true
    // 如没找到，返回false
    removeTimer(id) {
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].id === id) {
                let timer = this.timers[i];
                timer.enabled = false; // 只是enabled设置为false，并没有从数组中删除掉
                found = true;
                break;
            }
        }
        return found;
    }
    // _handleTimers私有方法被EventInteraction的update函数调用
    // update函数第二个参数是以秒表示的前后帧时间差
    // 正符合_handleTimers参数要求
    // 我们的计时器依赖于requestAnimationFrame回调
    // 如果当前EventInteraction没有调用start的话
    // 则计时器不会生效
    _handleTimers(intervalSec) {
        // 遍历整个timers列表
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            // 如果当前timer enabled为false，那么继续循环
            if (timer.enabled === false) {
                continue;
            }
            // countdown初始化时 = timeout
            // 每次调用本函数，会减少上下帧的时间间隔
            // 从而形成倒计时的效果
            timer.countdown -= intervalSec;
            // 如果countdown 小于 0.0，那么说明时间到了
            // 要触发回调了
            // 从这里看到，实际上timer并不是很精确的
            // 举个例子，假设我们update每次0.16秒
            // 我们的timer设置0.3秒回调一次
            // 那么实际上是 ( 0.3 - 0.32 ) < 0 ,触发回调
            if (timer.countdown < 0.0) {
                // 调用回调函数
                timer.callback(timer.id, timer.callbackData);
                // 如果该计时器需要重复触发
                if (timer.onlyOnce === false) {
                    // 我们重新将countdown设置为timeout
                    // 由此可见，timeout不会更改，它规定了触发的时间间隔
                    // 每次更新的是countdown倒计时器
                    timer.countdown = timer.timeout; //很精妙的一个技巧
                }
                else { // 如果该计时器只需要触发一次，那么我们就删除掉该计时器
                    this.removeTimer(timer.id);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/common/container/Dictionary.ts":
/*!********************************************!*\
  !*** ./src/common/container/Dictionary.ts ***!
  \********************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
class Dictionary {
    constructor(useES6Map = true) {
        this._count = 0;
        if (useES6Map === true) {
            this._items = new Map();
        }
        else {
            this._items = {};
        }
    }
    get length() {
        return this._count;
    }
    contains(key) {
        if (this._items instanceof Map) {
            return this._items.has(key);
        }
        else {
            return (this._items[key] !== undefined);
        }
    }
    find(key) {
        if (this._items instanceof Map) {
            return this._items.get(key);
        }
        else {
            return this._items[key];
        }
    }
    insert(key, value) {
        if (this._items instanceof Map) {
            this._items.set(key, value);
        }
        else {
            this._items[key] = value;
        }
        this._count++;
    }
    remove(key) {
        let ret = this.find(key);
        if (ret === undefined) {
            return false;
        }
        if (this._items instanceof Map) {
            this._items.delete(key);
        }
        else {
            delete this._items[key];
        }
        this._count--;
        return true;
    }
    get keys() {
        let keys = [];
        if (this._items instanceof Map) {
            let keyArray = this._items.keys();
            for (let key of keyArray) {
                keys.push(key);
            }
        }
        else {
            for (var prop in this._items) {
                if (this._items.hasOwnProperty(prop)) {
                    keys.push(prop);
                }
            }
        }
        return keys;
    }
    get values() {
        let values = [];
        if (this._items instanceof Map) {
            // 一定要用of，否则出错
            let vArray = this._items.values();
            for (let value of vArray) {
                values.push(value);
            }
        }
        else {
            for (let prop in this._items) {
                if (this._items.hasOwnProperty(prop)) {
                    values.push(this._items[prop]);
                }
            }
        }
        return values;
    }
}


/***/ }),

/***/ "./src/common/container/TypedArrayList.ts":
/*!************************************************!*\
  !*** ./src/common/container/TypedArrayList.ts ***!
  \************************************************/
/*! exports provided: TypedArrayList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedArrayList", function() { return TypedArrayList; });
class TypedArrayList {
    constructor(typedArrayConstructor, capacity = 8) {
        this._typedArrayConstructor = typedArrayConstructor;
        this._capacity = capacity; // 而预先分配内存的个数为capacity
        // 确保初始化时至少有8个元素的容量
        if (this._capacity === 0) {
            this._capacity = 8; // 默认分配8个元素内存
        }
        this._array = new this._typedArrayConstructor(this._capacity); // 预先分配capacity个元素的内存
        this._length = 0; // 初始化时，其_length为0
        this.capacityChangedCallback = null; //默认情况下，回调函数为null
    }
    get length() {
        return this._length;
    }
    get capacity() {
        return this._capacity;
    }
    get typeArray() {
        return this._array;
    }
    // 最简单高效的处理方式，直接设置_length为0，重用整个类型数组
    clear() {
        this._length = 0;
    }
    pushArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i]);
        }
    }
    push(num) {
        // 如果当前的length超过了预先分配的内存容量
        // 那就需要进行内存扩容
        if (this._length >= this._capacity) {
            //如果最大容量数>0
            if (this._capacity > 0) {
                //增加当前的最大容量数(每次翻倍增加)
                this._capacity += this._capacity;
                console.log("curr capacity = " + this._capacity);
            }
            let oldArray = this._array;
            this._array = new this._typedArrayConstructor(this._capacity);
            // 将oldArray中的数据复制到新建的array中
            this._array.set(oldArray);
            // 如果有回调函数，则调用回调函数
            if (this.capacityChangedCallback) {
                this.capacityChangedCallback(this);
            }
        }
        this._array[this._length] = num;
        return this._length++;
    }
    at(idx) {
        if (idx < 0 || idx >= this.length) {
            throw new Error("索引越界！");
        }
        // 都是number类型
        let ret = this._array[idx];
        return ret;
    }
    subArray(start = 0, end = this.length) {
        return this._array.subarray(start, end);
    }
    slice(start = 0, end = this.length) {
        return this._array.slice(start, end);
    }
}


/***/ }),

/***/ "./src/lib/Camera.ts":
/*!***************************!*\
  !*** ./src/lib/Camera.ts ***!
  \***************************/
/*! exports provided: ECameraType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECameraType", function() { return ECameraType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _math_matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/matrix4 */ "./src/math/matrix4.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/MathHelper */ "./src/math/MathHelper.ts");
/* harmony import */ var _Frustum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Frustum */ "./src/lib/Frustum.ts");




var ECameraType;
(function (ECameraType) {
    ECameraType[ECameraType["FPSCAMERA"] = 0] = "FPSCAMERA";
    ECameraType[ECameraType["FLYCAMERA"] = 1] = "FLYCAMERA";
})(ECameraType || (ECameraType = {}));
class Camera {
    constructor(gl, width, height, fovY = 45.0, zNear = 1, zFar = 1000) {
        this._type = ECameraType.FLYCAMERA;
        this._position = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this._xAxis = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 0, 0);
        this._yAxis = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0);
        this._zAxis = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1);
        this.gl = gl;
        this._aspectRatio = width / height;
        this._fovY = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(fovY);
        this._near = zNear;
        this._far = zFar;
        this._top = this._near * Math.tan(this._fovY * 0.5),
            this._right = this._top * this._aspectRatio;
        this._bottom = -this._top;
        this._left = -this._right;
        this._frustum = new _Frustum__WEBPACK_IMPORTED_MODULE_3__["Frustum"]();
        this._projectionMatrix = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this._viewMatrix = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this._invViewMatrix = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this._viewProjMatrix = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this._invViewProjMatrix = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this.controlByMouse = false;
    }
    get fovY() {
        return this._fovY;
    }
    set fovY(value) {
        this._fovY = value;
    }
    get near() {
        return this._near;
    }
    set near(value) {
        this._near = value;
    }
    get far() {
        return this._far;
    }
    set far(value) {
        this._far = value;
    }
    get aspectRatio() {
        return this._aspectRatio;
    }
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    setViewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
        this.gl.scissor(x, y, width, height);
        this.aspectRatio = width / height;
    }
    getViewport() {
        return this.gl.getParameter(this.gl.VIEWPORT);
    }
    //千万别用this.position.x = xxx，因为无法设置this._viewDirty
    //请用下面的三个set方法
    set x(value) {
        this._position.x = value;
    }
    set y(value) {
        this._position.y = value;
    }
    set z(value) {
        this._position.z = value;
    }
    get x() {
        return this._position.x;
    }
    get y() {
        return this._position.y;
    }
    get z() {
        return this._position.z;
    }
    get xAxis() {
        return this._xAxis;
    }
    get yAxis() {
        return this._yAxis;
    }
    get zAxis() {
        return this._zAxis;
    }
    get type() {
        return this._type;
    }
    //比较特别，需要重新修正一些内容，或者直接禁止修改type
    set type(value) {
        this._type = value;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    get bottom() {
        return this._bottom;
    }
    get top() {
        return this._top;
    }
    update(intervalSec) {
        this._projectionMatrix = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].perspective(this.fovY, this.aspectRatio, this.near, this.far);
        this._calcViewMatrix();
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].product(this._projectionMatrix, this._viewMatrix, this._viewProjMatrix);
        this._viewProjMatrix.copy(this._invViewProjMatrix);
        this._viewProjMatrix.getInverse(this._invViewProjMatrix);
    }
    //局部坐标系下的前后运动
    moveForward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.x += this._zAxis.x * speed;
            this._position.z += this._zAxis.z * speed;
        }
        else {
            this._position.x += this._zAxis.x * speed;
            this._position.y += this._zAxis.y * speed;
            this._position.z += this._zAxis.z * speed;
        }
    }
    //局部坐标系下的左右运动
    moveRightward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.x += this._xAxis.x * speed;
            this._position.z += this._xAxis.z * speed;
        }
        else {
            this._position.x += this._xAxis.x * speed;
            this._position.y += this._xAxis.y * speed;
            this._position.z += this._xAxis.z * speed;
        }
    }
    //局部坐标系下的上下运动
    moveUpward(speed) {
        if (this._type === ECameraType.FPSCAMERA) {
            this._position.y += speed;
        }
        else {
            this._position.x += this._yAxis.x * speed;
            this._position.y += this._yAxis.y * speed;
            this._position.z += this._yAxis.z * speed;
        }
    }
    //局部坐标轴的左右旋转
    yaw(angle) {
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.setIdentity();
        angle = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(angle);
        if (this._type === ECameraType.FPSCAMERA) {
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.rotate(angle, _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].up);
        }
        else {
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.rotate(angle, this._yAxis);
        }
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._zAxis, this._zAxis);
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._xAxis, this._xAxis);
    }
    //局部坐标轴的上下旋转
    pitch(angle) {
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.setIdentity();
        angle = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(angle);
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.rotate(angle, this._xAxis);
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._yAxis, this._yAxis);
        _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._zAxis, this._zAxis);
    }
    //局部坐标轴的滚转
    roll(angle) {
        if (this._type === ECameraType.FLYCAMERA) {
            angle = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(angle);
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.setIdentity();
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.rotate(angle, this._zAxis);
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._xAxis, this._xAxis);
            _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].m0.multiplyVec3(this._yAxis, this._yAxis);
        }
    }
    //从当前postition和target获得view矩阵
    //并且从view矩阵抽取forward,up,right方向矢量
    lookAt(target, up = _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].up) {
        this._viewMatrix = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].lookAt(this._position, target, up);
        this._xAxis.x = this._viewMatrix.values[0];
        this._yAxis.x = this._viewMatrix.values[1];
        this._zAxis.x = this._viewMatrix.values[2];
        this._xAxis.y = this._viewMatrix.values[4];
        this._yAxis.y = this._viewMatrix.values[5];
        this._zAxis.y = this._viewMatrix.values[6];
        this._xAxis.z = this._viewMatrix.values[8];
        this._yAxis.z = this._viewMatrix.values[9];
        this._zAxis.z = this._viewMatrix.values[10];
    }
    get viewMatrix() {
        return this._viewMatrix;
    }
    get invViewMatrix() {
        return this._invViewMatrix;
    }
    get projectionMatrix() {
        return this._projectionMatrix;
    }
    get viewProjectionMatrix() {
        return this._viewProjMatrix;
    }
    get invViewProjectionMatrix() {
        return this._invViewProjMatrix;
    }
    get frustum() {
        return this._frustum;
    }
    //从当前轴以及postion合成view矩阵
    _calcViewMatrix() {
        //固定forward方向
        this._zAxis.normalize();
        //forward cross right = up
        _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(this._zAxis, this._xAxis, this._yAxis);
        this._yAxis.normalize();
        //up cross forward = right
        _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(this._yAxis, this._zAxis, this._xAxis);
        this._xAxis.normalize();
        let x = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(this._xAxis, this._position);
        let y = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(this._yAxis, this._position);
        let z = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(this._zAxis, this._position);
        this._viewMatrix.values[0] = this._xAxis.x;
        this._viewMatrix.values[1] = this._yAxis.x;
        this._viewMatrix.values[2] = this._zAxis.x;
        this._viewMatrix.values[3] = 0.0;
        this._viewMatrix.values[4] = this._xAxis.y;
        this._viewMatrix.values[5] = this._yAxis.y;
        this._viewMatrix.values[6] = this._zAxis.y;
        this._viewMatrix.values[7] = 0.0;
        this._viewMatrix.values[8] = this._xAxis.z;
        this._viewMatrix.values[9] = this._yAxis.z;
        this._viewMatrix.values[10] = this._zAxis.z;
        this._viewMatrix.values[11] = 0.0;
        this._viewMatrix.values[12] = x;
        this._viewMatrix.values[13] = y;
        this._viewMatrix.values[14] = z;
        this._viewMatrix.values[15] = 1.0;
        //求view的逆矩阵，也就是世界矩阵
        this._viewMatrix.getInverse(this._invViewMatrix);
        this._frustum.buildFromCamera(this);
    }
}


/***/ }),

/***/ "./src/lib/CameraApplication.ts":
/*!**************************************!*\
  !*** ./src/lib/CameraApplication.ts ***!
  \**************************************/
/*! exports provided: CameraApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraApplication", function() { return CameraApplication; });
/* harmony import */ var _webgl_WebGLApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/WebGLApplication */ "./src/webgl/WebGLApplication.ts");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ "./src/lib/Camera.ts");


class CameraApplication extends _webgl_WebGLApplication__WEBPACK_IMPORTED_MODULE_0__["WebGLApplication"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2d = false) {
        super(canvas, contextAttributes, need2d);
        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.gl, canvas.width, canvas.height, 45, 1, 2000);
        this.camera.z = 4;
    }
    //子类override update函数时必须要调用基类本方法
    update(elapsedMsec, intervalSec) {
        // 调用Camera对象的update，这样就能实时的计算camera的投影和视图矩阵
        // 这样才能保证摄像机正确运行
        // 如果CameraApplication的子类覆写（override）本函数
        // 那么必须在函数的最后一句代码调用: super.update(elapsedMsec,intervalSec)
        this.camera.update(intervalSec);
    }
    // 内置一个通用的摄像机按键事件响应操作
    // 覆写（）
    onKeyPress(evt) {
        if (evt.key === "w") {
            this.camera.moveForward(-1); // 摄像机向前运行        
        }
        else if (evt.key === "s") {
            this.camera.moveForward(1); // 摄像机向后运行
        }
        else if (evt.key === "a") {
            this.camera.moveRightward(1); // 摄像机向右运行
        }
        else if (evt.key === "d") {
            this.camera.moveRightward(-1); // 摄像机向左运行
        }
        else if (evt.key === "z") {
            this.camera.moveUpward(1); // 摄像机向上运行
        }
        else if (evt.key === "x") {
            this.camera.moveUpward(-1); // 摄像机向下运行
        }
        else if (evt.key === "y") {
            this.camera.yaw(1); // 摄像机绕本身的Y轴旋转
        }
        else if (evt.key === "r") {
            this.camera.roll(1); // 摄像机绕本身的Z轴旋转
        }
        else if (evt.key == "p") {
            this.camera.pitch(1); // 摄像机绕本身的X轴旋转
        }
    }
}


/***/ }),

/***/ "./src/lib/DrawHelper.ts":
/*!*******************************!*\
  !*** ./src/lib/DrawHelper.ts ***!
  \*******************************/
/*! exports provided: CoordSystem, DrawHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordSystem", function() { return CoordSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawHelper", function() { return DrawHelper; });
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _math_vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector4 */ "./src/math/vector4.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/MathHelper */ "./src/math/MathHelper.ts");



class CoordSystem {
    constructor(viewport, pos = _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].zero, axis = _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].up, angle = 0, isDrawAxis = false, isD3D = false) {
        this.viewport = []; // 当前坐标系被绘制在哪个视口中
        this.viewport = viewport;
        this.angle = angle;
        this.axis = axis;
        this.pos = pos;
        this.isDrawAxis = isDrawAxis;
        this.isD3D = isD3D;
    }
}
class DrawHelper {
    static getCirclePointsOnXYPlane(pts, radius, segment = 32) {
        pts.clear();
        let step = Math.PI / segment;
        let ang = 0;
        for (let i = 0; i <= segment; i++) {
            ang = i * step;
            pts.push(Math.cos(ang));
            pts.push(Math.sin(ang));
            pts.push(0.0);
        }
    }
    static drawFullCoordSystem(builder, mat, len = 1, rotateAxis = null) {
        builder.gl.lineWidth(5); // 用5个像素大小的直径绘制线段，但目前仅Safari浏览器实现
        builder.gl.disable(builder.gl.DEPTH_TEST); // 关闭帧缓存深度测试
        builder.begin(builder.gl.LINES);
        // 正x轴
        {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(len, 0, 0);
        }
        // 负x轴
        {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(-len, 0, 0);
        }
        // 正y轴
        {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, len, 0.0);
        }
        // 负y轴
        {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, -len, 0.0);
        }
        // 正z轴
        {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, len);
        }
        // 负z轴
        {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, -len);
        }
        if (rotateAxis !== null) {
            // 如果要绘制旋转轴，则绘制出来
            let scale = rotateAxis.scale(len);
            builder.color(0.0, 0.0, 0.0).vertex(0, 0, 0);
            builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, scale.z);
        }
        builder.end(mat); // 将渲染数据提交给GPU进行渲染
        builder.gl.lineWidth(1); // 恢复线宽为1个像素
        builder.gl.enable(builder.gl.DEPTH_TEST); // 恢复开始帧缓存深度测试
    }
    static drawCoordSystem(builder, mat, hitAxis, len = 5, rotateAxis = null, isLeftHandness = false) {
        builder.gl.lineWidth(5);
        builder.gl.disable(builder.gl.DEPTH_TEST);
        builder.begin(builder.gl.LINES);
        if (hitAxis === _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["EAxisType"].XAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(len, 0, 0);
        }
        else {
            builder.color(1.0, 0.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(1.0, 0.0, 0.0).vertex(len, 0, 0);
        }
        if (hitAxis === _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["EAxisType"].YAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, len, 0);
        }
        else {
            builder.color(0.0, 1.0, 0.0).vertex(0.0, 0.0, 0.0);
            builder.color(0.0, 1.0, 0.0).vertex(0.0, len, 0.0);
        }
        if (hitAxis === _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["EAxisType"].ZAXIS) {
            builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0.0, 0.0, 0.0);
            if (isLeftHandness === true) {
                builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, 0, -len);
            }
            else {
                builder.color(DrawHelper.defaultHitCollor.r, DrawHelper.defaultHitCollor.g, DrawHelper.defaultHitCollor.b).vertex(0, 0, len);
            }
        }
        else {
            builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, 0.0);
            if (isLeftHandness === true) {
                builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, -len);
            }
            else {
                builder.color(0.0, 0.0, 1.0).vertex(0.0, 0.0, len);
            }
        }
        if (rotateAxis !== null) {
            let scale = rotateAxis.scale(len);
            builder.color(0.0, 0.0, 0).vertex(0, 0, 0);
            if (isLeftHandness === true) {
                builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, -scale.z);
            }
            else {
                builder.color(0.0, 0.0, 0.0).vertex(scale.x, scale.y, scale.z);
            }
        }
        builder.end(mat);
        builder.gl.lineWidth(1);
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
    /*
        /3--------/7  |
        / |       /   |
        /  |      /   |
        1---------5   |
        |  /2- - -|- -6
        | /       |  /
        |/        | /
        0---------4/
    */
    // 根据mins点（上图中的顶点2，左下后）和maxs（上图中的顶点5，右上前）点的坐标，使用参数指定的颜色绘制线框绑定盒，它是一个立方体
    // GLMeshBuilder的begin / end被调用了三次
    static drawBoundBox(builder, mat, mins, maxs, color = _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"].red) {
        builder.gl.disable(builder.gl.DEPTH_TEST);
        // 使用LINE_LOOP绘制底面，注意顶点顺序，逆时针方向，根据右手螺旋定则可知，法线朝外
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, mins.z); // 2  - - -
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, maxs.z); // 0  - - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, maxs.z); // 4  + - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, mins.z); // 6  + - -
            builder.end(mat);
        }
        // 使用LINE_LOOP绘制顶面，注意顶点顺序，逆时针方向，根据右手螺旋定则可知，法线朝外
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, mins.z); // 3  - + -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, mins.z); // 7  + + -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, maxs.z); // 5  + + +
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, maxs.z); // 1  - + +
            builder.end(mat);
        }
        // 使用LINES绘制
        builder.begin(builder.gl.LINES); // 使用的是LINES图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, mins.z); // 2  - - -
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, mins.z); // 3  - + -
            builder.color(color.r, color.g, color.b).vertex(mins.x, mins.y, maxs.z); // 0  - - +
            builder.color(color.r, color.g, color.b).vertex(mins.x, maxs.y, maxs.z); // 1  - + +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, maxs.z); // 4  + - +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, maxs.z); // 5  + + +
            builder.color(color.r, color.g, color.b).vertex(maxs.x, mins.y, mins.z); // 6  + - -
            builder.color(color.r, color.g, color.b).vertex(maxs.x, maxs.y, mins.z); // 7  + + -
            builder.end(mat);
        }
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
    static drawWireFrameCubeBox(builder, mat, halfLen = 0.2, color = _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"].red) {
        let mins = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-halfLen, -halfLen, -halfLen);
        let maxs = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](halfLen, halfLen, halfLen);
        DrawHelper.drawBoundBox(builder, mat, mins, maxs, color);
    }
    /*
       /3--------/7  |
       / |       /   |
       /  |      /   |
       1---------5   |
       |  /2- - -|- -6
       | /       |  /
       |/        | /
       0---------4/
   */
    static drawTextureCubeBox(builder, mat, halfLen = 0.2, tc = [
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
        0, 0, 1, 0, 1, 1, 0, 1,
    ]) {
        // 前面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[0], tc[1]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[2], tc[3]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.texcoord(tc[4], tc[5]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.texcoord(tc[6], tc[7]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.end(mat);
        // 右面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[8], tc[9]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.texcoord(tc[10], tc[11]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[12], tc[13]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.texcoord(tc[14], tc[15]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.end(mat);
        // 后面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[16], tc[17]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[18], tc[19]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[20], tc[21]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.texcoord(tc[22], tc[23]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.end(mat);
        // 左面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[24], tc[25]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[26], tc[27]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[28], tc[29]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.texcoord(tc[30], tc[31]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.end(mat);
        // 上面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[32], tc[33]).vertex(-halfLen, halfLen, halfLen); // 1  - + +
        builder.texcoord(tc[34], tc[35]).vertex(halfLen, halfLen, halfLen); // 5  + + +
        builder.texcoord(tc[36], tc[37]).vertex(halfLen, halfLen, -halfLen); // 7  + + -
        builder.texcoord(tc[38], tc[39]).vertex(-halfLen, halfLen, -halfLen); // 3  - + -
        builder.end(mat);
        // 下面
        builder.begin(builder.gl.TRIANGLE_FAN);
        builder.texcoord(tc[40], tc[41]).vertex(-halfLen, -halfLen, halfLen); // 0  - - +
        builder.texcoord(tc[42], tc[43]).vertex(-halfLen, -halfLen, -halfLen); // 2  - - -
        builder.texcoord(tc[44], tc[45]).vertex(halfLen, -halfLen, -halfLen); // 6  + - -
        builder.texcoord(tc[46], tc[47]).vertex(halfLen, -halfLen, halfLen); // 4  + - +
        builder.end(mat);
    }
    // 其中参数pts是Frustum.points返回的包含8个顶点的数组
    static drawWireFrameFrustum(builder, mat, pts, color = _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"].red) {
        builder.gl.disable(builder.gl.DEPTH_TEST);
        // 使用LINE_LOOP绘制近平面的四边形
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[0].x, pts[0].y, pts[0].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[1].x, pts[1].y, pts[1].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[2].x, pts[2].y, pts[2].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[3].x, pts[3].y, pts[3].z); // 
            builder.end(mat);
        }
        // 使用LINE_LOOP绘制远平面的四边形
        builder.begin(builder.gl.LINE_LOOP); // 使用的是LINE_LOOP图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[4].x, pts[4].y, pts[4].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[5].x, pts[5].y, pts[5].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[6].x, pts[6].y, pts[6].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[7].x, pts[7].y, pts[7].z); // 
            builder.end(mat);
        }
        // 使用LINES绘制绘制近平面与远平面的四条边
        builder.begin(builder.gl.LINES); // 使用的是LINES图元绘制模式
        {
            builder.color(color.r, color.g, color.b).vertex(pts[0].x, pts[0].y, pts[0].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[4].x, pts[4].y, pts[4].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[1].x, pts[1].y, pts[1].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[5].x, pts[5].y, pts[5].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[2].x, pts[2].y, pts[2].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[6].x, pts[6].y, pts[6].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[3].x, pts[3].y, pts[3].z); // 
            builder.color(color.r, color.g, color.b).vertex(pts[7].x, pts[7].y, pts[7].z); // 
            builder.end(mat);
        }
        builder.gl.enable(builder.gl.DEPTH_TEST);
    }
}
DrawHelper.defaultHitCollor = new _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1, 0);


/***/ }),

/***/ "./src/lib/Frustum.ts":
/*!****************************!*\
  !*** ./src/lib/Frustum.ts ***!
  \****************************/
/*! exports provided: Frustum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frustum", function() { return Frustum; });
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _math_vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector4 */ "./src/math/vector4.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/MathHelper */ "./src/math/MathHelper.ts");



class Frustum {
    constructor(orgin = null, points8 = null) {
        //预先内存分配8个点
        if (orgin !== null) {
            this._origin = orgin;
        }
        else {
            this._origin = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        }
        if (points8 !== null && points8.length === 8) {
            this._points = points8;
        }
        else {
            this._points = new Array(8);
            for (let i = 0; i < this._points.length; i++) {
                this._points[i] = new _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
            }
        }
        this._planes = new Array(6);
        for (let i = 0; i < this._planes.length; i++) {
            this._planes[i] = new _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }
    }
    // 由代码可知，Frustum中的origin,points和planes都是在世界坐标系中的表示
    buildFromCamera(camera) {
        let left = camera.left * camera.far / camera.near;
        let right = camera.right * camera.far / camera.near;
        let bottom = camera.bottom * camera.far / camera.near;
        let top = camera.top * camera.far / camera.near;
        //计算出近平面4个点
        this.points[0].x = left;
        this.points[0].y = bottom;
        this.points[0].z = -camera.near;
        this.points[1].x = right;
        this.points[1].y = bottom;
        this.points[1].z = -camera.near;
        this.points[2].x = right;
        this.points[2].y = top;
        this.points[2].z = -camera.near;
        this.points[3].x = left;
        this.points[3].y = top;
        this.points[3].z = -camera.near;
        //计算出远平面4个点
        this.points[4].x = left;
        this.points[4].y = bottom;
        this.points[4].z = -camera.far;
        this.points[5].x = right;
        this.points[5].y = bottom;
        this.points[5].z = -camera.far;
        this.points[6].x = right;
        this.points[6].y = top;
        this.points[6].z = -camera.far;
        this.points[7].x = left;
        this.points[7].y = top;
        this.points[7].z = -camera.far;
        //记住，此时的摄像机和8个cornor是在view坐标系中表示
        //将摄像机的原点和8个cornor点变换到世界坐标系
        this._origin.x = 0;
        this._origin.y = 0;
        this._origin.z = 0;
        // 摄像机的原点在view坐标系中是[ 0 , 0 , 0 ],通过invViewMatrix * _origin，得到了_origin在世界坐标系的表示
        this._origin = camera.invViewMatrix.multiplyVec3(this.origin);
        // 将view坐标系中表示的8个顶点也变换到世界坐标系中
        for (let i = 0; i < this._points.length; i++) {
            this._points[i] = camera.invViewMatrix.multiplyVec3(this.points[i]);
        }
        //构建世界坐标系表示的6个平面，法线朝内
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._origin, this._points[0], this._points[3], this._planes[0]);
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._origin, this._points[2], this._points[1], this._planes[1]);
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._origin, this._points[3], this._points[2], this._planes[2]);
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._origin, this._points[1], this._points[0], this._planes[3]);
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._points[0], this._points[2], this._points[1], this._planes[4]);
        _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeFromPoints(this._points[5], this._points[7], this._points[4], this._planes[5]);
        // 将6个平面单位化
        for (let i = 0; i < this._planes.length; i++) {
            _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeNormalize(this._planes[i]);
        }
    }
    isSphereVisible(center, radius) {
        radius = -radius;
        for (let i = 0; i < this._planes.length; i++) {
            if (_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeDistanceFromPoint(this._planes[i], center) < radius) {
                return false;
            }
        }
        return true;
    }
    isBoundBoxVisible(mins, maxs) {
        for (let i = 0; i < this._planes.length; i++) {
            let current = this._planes[i];
            _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].v0.x = (current.x > 0.0) ? maxs.x : mins.x;
            _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].v0.y = (current.y > 0.0) ? maxs.y : mins.y;
            _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].v0.z = (current.z > 0.0) ? maxs.z : mins.z;
            if (_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeDistanceFromPoint(current, _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].v0) < 0.0) {
                return false;
            }
        }
        return true;
    }
    isTriangleVisible(a, b, c) {
        for (let i = 0; i < this._planes.length; i++) {
            let current = this._planes[i];
            if (_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeDistanceFromPoint(current, a) >= 0.0) {
                continue;
            }
            if (_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeDistanceFromPoint(current, b) >= 0.0) {
                continue;
            }
            if (_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].planeDistanceFromPoint(current, c) >= 0.0) {
                continue;
            }
            return false;
        }
        return true;
    }
    get origin() {
        return this._origin;
    }
    get points() {
        return this._points;
    }
    get planes() {
        return this._planes;
    }
}


/***/ }),

/***/ "./src/lib/Primitives.ts":
/*!*******************************!*\
  !*** ./src/lib/Primitives.ts ***!
  \*******************************/
/*! exports provided: GeometryData, Cube, GridPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryData", function() { return GeometryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPlane", function() { return GridPlane; });
/* harmony import */ var _math_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector2 */ "./src/math/vector2.ts");
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/MathHelper */ "./src/math/MathHelper.ts");





class GeometryData {
    constructor() {
        // 输入顶点属性数据
        this.positions = [];
        this.uvs = [];
        this.normals = [];
        this.colors = [];
        this.tangents = [];
        this.indices = [];
    }
    makeStaticVAO(gl, needNormals = false, needUV = true) {
        let bits = this.getAttribBits();
        if (needNormals === false) {
            bits &= ~_webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].NORMAL_BIT;
        }
        if (needUV === false) {
            bits &= ~_webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT;
        }
        let stride = _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].getVertexByteStride(bits);
        let step = stride / Float32Array.BYTES_PER_ELEMENT;
        let arrayBuffer = new ArrayBuffer(stride * this.positions.length);
        let buffer = new Float32Array(arrayBuffer);
        for (let i = 0; i < this.positions.length; i++) {
            // 位置
            let j = i * step;
            let idx = 0;
            buffer[j + (idx++)] = this.positions[i].x;
            buffer[j + (idx++)] = this.positions[i].y;
            buffer[j + (idx++)] = this.positions[i].z;
            //法线(用了bits后，不能用length来判断了！！！)
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].NORMAL_BIT) {
                buffer[j + (idx++)] = this.normals[i].x;
                buffer[j + (idx++)] = this.normals[i].y;
                buffer[j + (idx++)] = this.normals[i].z;
            }
            //纹理
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT) {
                buffer[j + (idx++)] = this.uvs[i].x;
                buffer[j + (idx++)] = this.uvs[i].y;
            }
            //颜色
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].COLOR_BIT) {
                buffer[j + (idx++)] = this.colors[i].x;
                buffer[j + (idx++)] = this.colors[i].y;
                buffer[j + (idx++)] = this.colors[i].z;
                buffer[j + (idx++)] = this.colors[i].w;
            }
            //切线
            if (bits & _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TANGENT_BIT) {
                buffer[j + (idx++)] = this.tangents[i].x;
                buffer[j + (idx++)] = this.tangents[i].y;
                buffer[j + (idx++)] = this.tangents[i].z;
                buffer[j + (idx++)] = this.tangents[i].w;
            }
        }
        let mesh = new _webgl_WebGLMesh__WEBPACK_IMPORTED_MODULE_3__["GLStaticMesh"](gl, bits, buffer, this.indices.length > 0 ? new Uint16Array(this.indices) : null);
        this.buildBoundingBoxTo(mesh.mins, mesh.maxs);
        return mesh;
    }
    buildBoundingBoxTo(mins, maxs) {
        for (let i = 0; i < this.positions.length; i++) {
            _math_MathHelper__WEBPACK_IMPORTED_MODULE_4__["MathHelper"].boundBoxAddPoint(this.positions[i], mins, maxs);
        }
    }
    getAttribBits() {
        if (this.positions.length === 0) {
            throw new Error("必须要有顶数据!!!");
        }
        let bits = _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].POSITION_BIT;
        if (this.uvs.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TEXCOORD_BIT;
        }
        if (this.normals.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].NORMAL_BIT;
        }
        if (this.colors.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].COLOR_BIT;
        }
        if (this.tangents.length > 0) {
            bits |= _webgl_WebGLAttribState__WEBPACK_IMPORTED_MODULE_2__["GLAttribState"].TANGENT_BIT;
        }
        return bits;
    }
}
class Cube {
    constructor(halfWidth = 0.2, halfHeight = 0.2, halfDepth = 0.2) {
        this.halfWidth = halfWidth;
        this.halfHeight = halfHeight;
        this.halfDepth = halfDepth;
    }
    /*
            /3--------/7  |
            / |       /   |
            /  |      /   |
            1---------5   |
            |  /2- - -|- -6
            | /       |  /
            |/        | /
            0---------4/

    */
    makeGeometryDataWithTextureCooord() {
        let data = new GeometryData();
        data.positions = [
            new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-this.halfWidth, -this.halfHeight, this.halfDepth),
            new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, -this.halfHeight, this.halfDepth),
            new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, this.halfHeight, this.halfDepth),
        ];
        data.uvs = [
            new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 0),
            new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 0),
            new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 1),
        ];
        return data;
    }
    makeGeometryData() {
        let data = new GeometryData();
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-this.halfWidth, -this.halfHeight, this.halfDepth)); // 0
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 0));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-this.halfWidth, this.halfHeight, this.halfDepth)); // 1
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 1));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-this.halfWidth, -this.halfHeight, -this.halfDepth)); // 2
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 0));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](-this.halfWidth, this.halfHeight, -this.halfDepth)); // 3
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 1));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, -this.halfHeight, this.halfDepth)); // 4
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 0));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, this.halfHeight, this.halfDepth)); // 5
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 1));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, -this.halfHeight, -this.halfDepth)); // 6
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 0));
        data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.halfWidth, this.halfHeight, -this.halfDepth)); // 7
        data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 1));
        // 法线朝外
        data.indices.push(0, 1, 3, 0, 3, 2); // 左面
        data.indices.push(3, 7, 6, 3, 6, 2); // 后面
        data.indices.push(6, 7, 5, 6, 5, 4); // 右面
        data.indices.push(5, 1, 0, 5, 0, 4); // 前面
        data.indices.push(1, 5, 7, 1, 7, 3); // 上面
        data.indices.push(2, 6, 4, 2, 4, 0); // 下面
        return data;
    }
}
class GridPlane {
    constructor(sx = 10, sy = 10, nx = 10, ny = 10) {
        this.sx = sx;
        this.sy = sy;
        this.nx = nx;
        this.ny = ny;
    }
    makeGeometryData() {
        let data = new GeometryData();
        for (let iy = 0; iy <= this.ny; iy++) {
            for (let ix = 0; ix <= this.nx; ix++) {
                let u = ix / this.nx;
                let v = iy / this.ny;
                let x = -this.sx / 2 + u * this.sx; // starts on the left
                let y = this.sy / 2 - v * this.sy; // starts at the top
                data.positions.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](x, y, 0));
                data.uvs.push(new _math_vector2__WEBPACK_IMPORTED_MODULE_0__["Vector2"](u, 1.0 - v));
                data.normals.push(new _math_vector3__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 1));
                if (iy < this.ny && ix < this.nx) {
                    {
                        data.indices.push(iy * (this.nx + 1) + ix, (iy + 1) * (this.nx + 1) + ix + 1, iy * (this.nx + 1) + ix + 1);
                        data.indices.push((iy + 1) * (this.nx + 1) + ix + 1, iy * (this.nx + 1) + ix, (iy + 1) * (this.nx + 1) + ix);
                    }
                }
            }
        }
        return data;
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_RotatingCubeApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo/RotatingCubeApplication */ "./demo/RotatingCubeApplication.ts");

// 获得HTMLSelectElement对象，用来切换要运行的Application
let select = document.getElementById('select');
// 获取用于获得webgl上下文对象的HTMLCanvasElement元素
let canvas = document.getElementById('webgl');
let appNames = [
    "第3章：RotatingCubeApplication"
];
function addItem(select, value) {
    select.options.add(new Option(value, value));
}
function addItemes(select) {
    if (canvas === null) {
        return;
    }
    for (let i = 0; i < appNames.length; i++) {
        addItem(select, appNames[i]);
    }
}
var EAPPName;
(function (EAPPName) {
    EAPPName[EAPPName["ROTATINGCUBE"] = 0] = "ROTATINGCUBE";
    EAPPName[EAPPName["ASYNCLOAD"] = 1] = "ASYNCLOAD";
    EAPPName[EAPPName["BASICWEBGL"] = 2] = "BASICWEBGL";
    EAPPName[EAPPName["MESHBUILDER"] = 3] = "MESHBUILDER";
    EAPPName[EAPPName["COORDSYSTEM"] = 4] = "COORDSYSTEM";
    EAPPName[EAPPName["Q3BSP"] = 5] = "Q3BSP";
    EAPPName[EAPPName["DOOM3PROC"] = 6] = "DOOM3PROC";
    EAPPName[EAPPName["DOOM3MD5"] = 7] = "DOOM3MD5";
})(EAPPName || (EAPPName = {}));
function runApplication(name) {
    // 获取用于获得webgl上下文对象的HTMLCanvasElement元素
    let canvas = document.getElementById('webgl');
    if (name === EAPPName.ROTATINGCUBE) {
        let app = new _demo_RotatingCubeApplication__WEBPACK_IMPORTED_MODULE_0__["RotatingCubeApplication"](canvas);
        app.frameCallback = frameCallback;
        app.run();
    }
}
function createText(tagName) {
    let elem = document.getElementById(tagName);
    let text = document.createTextNode("");
    elem.appendChild(text);
    return text;
}
let fps = createText("fps");
let tris = createText("tris");
let verts = createText("verts");
function frameCallback(app) {
    fps.nodeValue = String(app.fps.toFixed(0));
    tris.nodeValue = "0";
    verts.nodeValue = "0";
}
runApplication(EAPPName.ROTATINGCUBE);


/***/ }),

/***/ "./src/math/MathHelper.ts":
/*!********************************!*\
  !*** ./src/math/MathHelper.ts ***!
  \********************************/
/*! exports provided: EAxisType, EPlaneLoc, MathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAxisType", function() { return EAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlaneLoc", function() { return EPlaneLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathHelper", function() { return MathHelper; });
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector4 */ "./src/math/vector4.ts");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix4 */ "./src/math/matrix4.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/math/constants.ts");




var EAxisType;
(function (EAxisType) {
    EAxisType[EAxisType["NONE"] = -1] = "NONE";
    EAxisType[EAxisType["XAXIS"] = 0] = "XAXIS";
    EAxisType[EAxisType["YAXIS"] = 1] = "YAXIS";
    EAxisType[EAxisType["ZAXIS"] = 2] = "ZAXIS";
})(EAxisType || (EAxisType = {}));
var EPlaneLoc;
(function (EPlaneLoc) {
    EPlaneLoc[EPlaneLoc["FRONT"] = 0] = "FRONT";
    EPlaneLoc[EPlaneLoc["BACK"] = 1] = "BACK";
    EPlaneLoc[EPlaneLoc["COPLANAR"] = 2] = "COPLANAR"; // 与平面共面
})(EPlaneLoc || (EPlaneLoc = {}));
class MathHelper {
    // 角度/弧度互转函数
    static toRadian(degree) {
        return degree * Math.PI / 180;
    }
    static toDegree(radian) {
        return radian / Math.PI * 180;
    }
    // 浮点数容差相等函数
    static numberEquals(left, right) {
        if (Math.abs(left - right) > _constants__WEBPACK_IMPORTED_MODULE_3__["EPSILON"]) {
            return false;
        }
        return true;
    }
    static clamp(x, min, max) {
        return (x < min) ? min : (x > max) ? max : x;
    }
    // 判断一个整数是否是2的n次方(1,2,4,8,16,32,64,128,258,512,1024,2048,....)
    // 用于2的n次方纹理判断
    static isPowerOfTwo(value) {
        return ((value & (value - 1)) == 0);
    }
    static obj2GLViewportSpace(localPt, mvp, viewport, viewportPt) {
        let v = new _vector4__WEBPACK_IMPORTED_MODULE_1__["default"](localPt.x, localPt.y, localPt.z, 1.0);
        mvp.multiplyVec4(v, v); // 将顶点从local坐标系变换到投影坐标系，或裁剪坐标系
        if (v.w === 0.0) // 如果变换后的w为0，则返回false
         {
            return false;
        }
        // 将裁剪坐标系的点的x / y / z分量除以w，得到normalized坐标值[ -1 , 1 ]之间
        v.x /= v.w;
        v.y /= v.w;
        v.z /= v.w;
        // [-1 , 1]标示的点变换到视口坐标系
        v.x = v.x * 0.5 + 0.5;
        v.y = v.y * 0.5 + 0.5;
        v.z = v.z * 0.5 + 0.5;
        // 视口坐标系再变换到屏幕坐标系
        viewportPt.x = v.x * viewport[2] + viewport[0];
        viewportPt.y = v.y * viewport[3] + viewport[1];
        viewportPt.z = v.z;
        return true;
    }
    // 计算三角形的法向量
    static computeNormal(a, b, c, result) {
        if (!result)
            result = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        let l0 = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        let l1 = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].difference(b, a, l0);
        _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].difference(c, a, l1);
        _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(l0, l1, result);
        result.normalize();
        return result;
    }
    // 下面四个函数是平面相关函数
    //ax+by+cz-d=0
    static planeFromPoints(a, b, c, result = null) {
        if (!result)
            result = new _vector4__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let normal = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.computeNormal(a, b, c, normal);
        let d = -_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(normal, a);
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = d;
        return result;
    }
    static planeFromPointNormal(point, normal, result = null) {
        if (!result)
            result = new _vector4__WEBPACK_IMPORTED_MODULE_1__["default"]();
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = -_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(normal, point);
        return result;
    }
    static planeFromPolygon(polygon) {
        if (polygon.length < 3) {
            throw new Error("多变形的顶点数必须大于或等于3!!!");
        }
        return MathHelper.planeFromPoints(polygon[0], polygon[1], polygon[2]);
    }
    static planeDistanceFromPoint(plane, point) {
        return (point.x * plane.x + point.y * plane.y + point.z * plane.z + plane.w);
    }
    static planeTestPoint(plane, point) {
        let num = MathHelper.planeDistanceFromPoint(plane, point);
        if (num > _constants__WEBPACK_IMPORTED_MODULE_3__["EPSILON"]) {
            return EPlaneLoc.FRONT;
        }
        else if (num < -_constants__WEBPACK_IMPORTED_MODULE_3__["EPSILON"]) {
            return EPlaneLoc.BACK;
        }
        else {
            return EPlaneLoc.COPLANAR;
        }
    }
    static planeNormalize(plane) {
        let length, ilength;
        length = Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
        if (length === 0) {
            throw new Error("面积为0的平面!!!");
        }
        ilength = 1.0 / length;
        plane.x = plane.x * ilength;
        plane.y = plane.y * ilength;
        plane.z = plane.z * ilength;
        plane.w = plane.w * ilength;
        return length;
    }
    static boundBoxAddPoint(v, mins, maxs) {
        if (v.x < mins.x) {
            mins.x = v.x;
        }
        ;
        if (v.x > maxs.x) {
            maxs.x = v.x;
        }
        ;
        if (v.y < mins.y) {
            mins.y = v.y;
        }
        ;
        if (v.y > maxs.y) {
            maxs.y = v.y;
        }
        ;
        if (v.z < mins.z) {
            mins.z = v.z;
        }
        ;
        if (v.z > maxs.z) {
            maxs.z = v.z;
        }
        ;
    }
    static boundBoxClear(mins, maxs, value = Infinity) {
        mins.x = mins.y = mins.z = value; // 初始化时，让mins表示浮点数的最大范围
        maxs.x = maxs.y = maxs.z = -value; // 初始化是，让maxs表示浮点数的最小范围
    }
    // 获得AABB包围盒的中心点坐标
    static boundBoxGetCenter(mins, maxs, out = null) {
        if (out === null) {
            out = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        }
        // (maxs + mins) * 0.5
        _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].sum(mins, maxs, out);
        out.scale(0.5);
        return out;
    }
    static boundBoxGet8Points(mins, maxs, pts8) {
        /*
        /3--------/7  |
        / |       /   |
        /  |      /   |
        1---------5   |
        |  /2- - -|- -6
        | /       |  /
        |/        | /
        0---------4/
        */
        let center = MathHelper.boundBoxGetCenter(mins, maxs); // 获取中心点
        let maxs2center = _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].difference(center, maxs); // 获取最大点到中心点之间的距离向量
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x + maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z)); // 0
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x + maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z)); // 1
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x + maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z)); // 2
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x + maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z)); // 3
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x - maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z)); // 4
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x - maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z)); // 5
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x - maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z)); // 6
        pts8.push(new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](center.x - maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z)); // 7
    }
    static boundBoxTransform(mat, mins, maxs) {
        let pts = []; // 分配数组内存，类型为Vector3
        MathHelper.boundBoxGet8Points(mins, maxs, pts); // 获得局部坐标系表示的AABB的8个顶点坐标
        let out = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // 变换后的顶点
        // 遍历局部坐标系的8个AABB包围盒的顶点坐标
        for (let i = 0; i < pts.length; i++) {
            // 将局部坐标表示的顶点变换到mat坐标空间中去，变换后的结果放在out变量中
            mat.multiplyVec3(pts[i], out);
            // 重新构造新的，与世界坐标系轴对称的AABB包围盒
            this.boundBoxAddPoint(out, mins, maxs);
        }
    }
    static boundBoxContainsPoint(point, mins, maxs) {
        return (point.x >= mins.x && point.x <= maxs.x && point.y >= mins.y && point.y <= maxs.y && point.z >= mins.z && point.z <= maxs.z);
    }
    static boundBoxBoundBoxOverlap(min1, max1, min2, max2) {
        if (min1.x > max2.x)
            return false;
        if (max1.x < min2.x)
            return false;
        if (min1.y > max2.y)
            return false;
        if (max1.y < min2.y)
            return false;
        if (min1.z > max2.z)
            return false;
        if (max1.z < min2.z)
            return false;
        return true;
    }
    static convertVec3IDCoord2GLCoord(v, scale = 10.0) {
        let f = v.y; // opengl right = dooom3 x
        v.y = v.z; //opengl up = doom3 z
        v.z = -f; //opengl forward = doom3 -y
        if (!MathHelper.numberEquals(scale, 0) && !MathHelper.numberEquals(scale, 1.0)) {
            v.x /= scale;
            v.y /= scale;
            v.z /= scale;
        }
    }
    static convertVec2IDCoord2GLCoord(v) {
        v.y = 1.0 - v.y;
    }
    static matrixFrom(pos, q, dest = null) {
        if (dest === null) {
            dest = new _matrix4__WEBPACK_IMPORTED_MODULE_2__["Matrix4"]();
        }
        q.toMat4(dest);
        dest.values[12] = pos.x;
        dest.values[13] = pos.y;
        dest.values[14] = pos.z;
        return dest;
    }
}


/***/ }),

/***/ "./src/math/constants.ts":
/*!*******************************!*\
  !*** ./src/math/constants.ts ***!
  \*******************************/
/*! exports provided: EPSILON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
let EPSILON = 0.0001;


/***/ }),

/***/ "./src/math/matrix4.ts":
/*!*****************************!*\
  !*** ./src/math/matrix4.ts ***!
  \*****************************/
/*! exports provided: Matrix4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return Matrix4; });
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector4 */ "./src/math/vector4.ts");


// Matrix4类
class Matrix4 {
    constructor(values) {
        this.values = new Float32Array(16);
        if (values !== undefined) {
            // for (let i = 0; i < 16; i++){
            //     this.values[i] = values[i];
            // }
            this.setIdentity();
        }
    }
    init(values) {
        for (let i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    // static readonly identity = new Matrix4().identity();
    setIdentity() {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;
        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;
        return this;
    }
    at(index) {
        return this.values[index];
    }
    set(values) {
        for (let i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    reset() {
        for (let i = 0; i < 16; i++) {
            this.values[i] = 0;
        }
    }
    copy(dest) {
        if (!dest) {
            dest = new Matrix4();
        }
        for (let i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    transpose() {
        const temp10 = this.values[1];
        const temp20 = this.values[2];
        const temp30 = this.values[3];
        const temp21 = this.values[6];
        const temp31 = this.values[7];
        const temp32 = this.values[11];
        this.values[1] = this.values[4];
        this.values[2] = this.values[8];
        this.values[3] = this.values[12];
        this.values[6] = this.values[9];
        this.values[7] = this.values[13];
        this.values[11] = this.values[14];
        this.values[4] = temp10;
        this.values[8] = temp20;
        this.values[12] = temp30;
        this.values[9] = temp21;
        this.values[13] = temp31;
        this.values[14] = temp32;
        return this;
    }
    determinant() {
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a02 = this.values[2];
        const a03 = this.values[3];
        const a10 = this.values[4];
        const a11 = this.values[5];
        const a12 = this.values[6];
        const a13 = this.values[7];
        const a20 = this.values[8];
        const a21 = this.values[9];
        const a22 = this.values[10];
        const a23 = this.values[11];
        const a30 = this.values[12];
        const a31 = this.values[13];
        const a32 = this.values[14];
        const a33 = this.values[15];
        const A00 = a00 * (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a11 * a23 * a32 - a12 * a21 * a33 - a13 * a22 * a31);
        const A01 = -a01 * (a10 * a22 * a33 + a12 * a23 * a30 + a13 * a20 * a32 - a10 * a23 * a32 - a12 * a20 * a33 - a13 * a22 * a30);
        const A02 = a02 * (a10 * a21 * a33 + a11 * a23 * a30 + a13 * a20 * a31 - a10 * a23 * a31 - a11 * a20 * a33 - a13 * a21 * a30);
        const A03 = -a03 * (a10 * a21 * a32 + a11 * a22 * a30 + a12 * a20 * a31 - a10 * a22 * a31 - a11 * a20 * a32 - a12 * a21 * a30);
        return (A00 + A01 + A02 + A03);
    }
    inverse() {
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a02 = this.values[2];
        const a03 = this.values[3];
        const a10 = this.values[4];
        const a11 = this.values[5];
        const a12 = this.values[6];
        const a13 = this.values[7];
        const a20 = this.values[8];
        const a21 = this.values[9];
        const a22 = this.values[10];
        const a23 = this.values[11];
        const a30 = this.values[12];
        const a31 = this.values[13];
        const a32 = this.values[14];
        const a33 = this.values[15];
        const A00 = a00 * (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a11 * a23 * a32 - a12 * a21 * a33 - a13 * a22 * a31);
        const A01 = -a01 * (a10 * a22 * a33 + a12 * a23 * a30 + a13 * a20 * a32 - a10 * a23 * a32 - a12 * a20 * a33 - a13 * a22 * a30);
        const A02 = a02 * (a10 * a21 * a33 + a11 * a23 * a30 + a13 * a20 * a31 - a10 * a23 * a31 - a11 * a20 * a33 - a13 * a21 * a30);
        const A03 = -a03 * (a10 * a21 * a32 + a11 * a22 * a30 + a12 * a20 * a31 - a10 * a22 * a31 - a11 * a20 * a32 - a12 * a21 * a30);
        let det = A00 + A01 + A02 + A03;
        if (det === 0) {
            return this;
        }
        const detInv = 1 / det;
        this.values[0] = A00 * detInv;
        this.values[1] = A01 * detInv;
        this.values[2] = A02 * detInv;
        this.values[3] = A03 * detInv;
        this.values[4] = -a10 * (a01 * a22 * a33 + a02 * a23 * a31 + a03 * a21 * a32 - a01 * a23 * a32 - a02 * a21 * a33 - a03 * a22 * a31) * detInv;
        this.values[5] = a11 * (a00 * a22 * a33 + a02 * a23 * a30 + a03 * a20 * a32 - a00 * a23 * a32 - a02 * a20 * a33 - a03 * a22 * a30) * detInv;
        this.values[6] = -a12 * (a00 * a21 * a33 + a01 * a23 * a30 + a03 * a20 * a31 - a00 * a23 * a31 - a01 * a20 * a33 - a03 * a21 * a30) * detInv;
        this.values[7] = a13 * (a00 * a21 * a32 + a01 * a22 * a32 + a02 * a20 * a31 - a00 * a22 * a31 - a01 * a20 * a32 - a02 * a21 * a30) * detInv;
        this.values[8] = a20 * (a01 * a12 * a33 + a02 * a13 * a31 + a03 * a11 * a32 - a01 * a13 * a32 - a02 * a11 * a33 - a03 * a12 * a31) * detInv;
        this.values[9] = -a21 * (a00 * a12 * a33 + a02 * a13 * a30 + a03 * a10 * a32 - a00 * a13 * a32 - a02 * a10 * a33 - a03 * a12 * a30) * detInv;
        this.values[10] = a22 * (a00 * a11 * a33 + a01 * a13 * a30 + a03 * a10 * a31 - a00 * a13 * a31 - a01 * a10 * a33 - a03 * a11 * a30) * detInv;
        this.values[11] = -a23 * (a00 * a11 * a32 + a01 * a12 * a30 + a02 * a10 * a31 - a00 * a12 * a31 - a01 * a10 * a32 - a02 * a11 * a30) * detInv;
        this.values[12] = -a30 * (a01 * a12 * a23 + a02 * a13 * a21 + a03 * a11 * a22 - a01 * a13 * a22 - a02 * a11 * a23 - a03 * a12 * a21) * detInv;
        this.values[13] = a31 * (a00 * a12 * a23 + a02 * a13 * a20 + a03 * a10 * a22 - a00 * a13 * a22 - a02 * a10 * a23 - a03 * a12 * a20) * detInv;
        this.values[14] = -a32 * (a00 * a11 * a23 + a01 * a13 * a20 + a03 * a10 * a21 - a00 * a13 * a21 - a01 * a10 * a23 - a03 * a11 * a20) * detInv;
        this.values[15] = a33 * (a00 * a11 * a22 + a01 * a12 * a20 + a02 * a10 * a10 - a00 * a12 * a21 - a01 * a10 * a22 - a02 * a11 * a20) * detInv;
        return this;
    }
    getInverse(out) {
        this.copy(out);
        let a00 = out.values[0], a01 = out.values[1], a02 = out.values[2], a03 = out.values[3], a10 = out.values[4], a11 = out.values[5], a12 = out.values[6], a13 = out.values[7], a20 = out.values[8], a21 = out.values[9], a22 = out.values[10], a23 = out.values[11], a30 = out.values[12], a31 = out.values[13], a32 = out.values[14], a33 = out.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        let det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        if (!det)
            return false;
        det = 1.0 / det;
        out.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
        out.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
        out.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
        out.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
        out.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
        out.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
        out.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
        out.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
        out.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
        out.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
        out.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
        out.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
        out.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
        out.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
        out.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
        out.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
        return true;
    }
    multiply(matrix) {
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a02 = this.values[2];
        const a03 = this.values[3];
        const a10 = this.values[4];
        const a11 = this.values[5];
        const a12 = this.values[6];
        const a13 = this.values[7];
        const a20 = this.values[8];
        const a21 = this.values[9];
        const a22 = this.values[10];
        const a23 = this.values[11];
        const a30 = this.values[12];
        const a31 = this.values[13];
        const a32 = this.values[14];
        const a33 = this.values[15];
        const b00 = matrix.values[0];
        const b01 = matrix.values[1];
        const b02 = matrix.values[2];
        const b03 = matrix.values[3];
        const b10 = matrix.values[4];
        const b11 = matrix.values[5];
        const b12 = matrix.values[6];
        const b13 = matrix.values[7];
        const b20 = matrix.values[8];
        const b21 = matrix.values[9];
        const b22 = matrix.values[10];
        const b23 = matrix.values[11];
        const b30 = matrix.values[12];
        const b31 = matrix.values[13];
        const b32 = matrix.values[14];
        const b33 = matrix.values[15];
        this.values[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
        this.values[1] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
        this.values[2] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
        this.values[3] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;
        this.values[4] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
        this.values[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
        this.values[6] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
        this.values[7] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;
        this.values[8] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
        this.values[9] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
        this.values[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
        this.values[11] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;
        this.values[12] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
        this.values[13] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
        this.values[14] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
        this.values[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
        return this;
    }
    static product(m1, m2, result) {
        let a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2), a03 = m1.at(3), a10 = m1.at(4), a11 = m1.at(5), a12 = m1.at(6), a13 = m1.at(7), a20 = m1.at(8), a21 = m1.at(9), a22 = m1.at(10), a23 = m1.at(11), a30 = m1.at(12), a31 = m1.at(13), a32 = m1.at(14), a33 = m1.at(15);
        let b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2), b03 = m2.at(3), b10 = m2.at(4), b11 = m2.at(5), b12 = m2.at(6), b13 = m2.at(7), b20 = m2.at(8), b21 = m2.at(9), b22 = m2.at(10), b23 = m2.at(11), b30 = m2.at(12), b31 = m2.at(13), b32 = m2.at(14), b33 = m2.at(15);
        if (result) {
            result.set([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
            return result;
        }
        else {
            return new Matrix4([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
        }
    }
    // public multiplyVec3(vec3: Vector3): Vector3 {
    //     return new Vector3(
    //         this.values[0] * vec3.x + this.values[4] * vec3.y + this.values[8] * vec3.z + this.values[12],
    //         this.values[1] * vec3.x + this.values[5] * vec3.y + this.values[9] * vec3.z + this.values[13],
    //         this.values[2] * vec3.x + this.values[6] * vec3.y + this.values[10] * vec3.z + this.values[14]
    //         )
    // }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        let x = vector.x, y = vector.y, z = vector.z;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12];
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13];
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14];
        return dest;
    }
    multiplyVec4(vector, dest = null) {
        if (!dest)
            dest = new _vector4__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let x = vector.x, y = vector.y, z = vector.z, w = vector.w;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
        return dest;
    }
    // 矩阵变换
    translate(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
        return this;
    }
    // public scale(x: number, y: number, z:number): Matrix4{
    //     this.values[0] = x;
    //     this.values[1] = 0;
    //     this.values[2] = 0;
    //     this.values[3] = 0;
    //     this.values[4] = 0;
    //     this.values[5] = y;
    //     this.values[6] = 0;
    //     this.values[7] = 0;
    //     this.values[8] = 0;
    //     this.values[9] = 0;
    //     this.values[10] = z;
    //     this.values[11] = 0;
    //     this.values[12] = 0;
    //     this.values[13] = 0;
    //     this.values[14] = 0;
    //     this.values[15] = 1;
    //     return this;
    // }
    scale(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[0] *= x;
        this.values[1] *= x;
        this.values[2] *= x;
        this.values[3] *= x;
        this.values[4] *= y;
        this.values[5] *= y;
        this.values[6] *= y;
        this.values[7] *= y;
        this.values[8] *= z;
        this.values[9] *= z;
        this.values[10] *= z;
        this.values[11] *= z;
        return this;
    }
    rotate(angle, axis) {
        let x = axis.x, y = axis.y, z = axis.z;
        let length = Math.sqrt(x * x + y * y + z * z);
        if (!length)
            return null;
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        let s = Math.sin(angle);
        let c = Math.cos(angle);
        let t = 1.0 - c;
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return this;
    }
    // 视矩阵和投影矩阵
    static frustum(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new Matrix4([
            (near * 2) / rl,
            0,
            0,
            0,
            0,
            (near * 2) / tb,
            0,
            0,
            (right + left) / rl,
            (top + bottom) / tb,
            -(far + near) / fn,
            -1,
            0,
            0,
            -(far * near * 2) / fn,
            0
        ]);
    }
    static perspective(fov, aspect, near, far) {
        let top = near * Math.tan(fov * 0.5), right = top * aspect;
        return Matrix4.frustum(-right, right, -top, top, near, far);
    }
    static orthographic(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new Matrix4([
            2 / rl,
            0,
            0,
            0,
            0,
            2 / tb,
            0,
            0,
            0,
            0,
            -2 / fn,
            0,
            -(left + right) / rl,
            -(top + bottom) / tb,
            -(far + near) / fn,
            1
        ]);
    }
    static lookAt(position, target, up = _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].up) {
        if (position.equals(target)) {
            return this.identity;
        }
        let z = _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].difference(position, target).normalize();
        let x = _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(up, z).normalize();
        let y = _vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(z, x).normalize();
        return new Matrix4([
            x.x,
            y.x,
            z.x,
            0,
            x.y,
            y.y,
            z.y,
            0,
            x.z,
            y.z,
            z.z,
            0,
            -_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(x, position),
            -_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(y, position),
            -_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(z, position),
            1
        ]);
    }
}
Matrix4.identity = new Matrix4().setIdentity();
Matrix4.m0 = new Matrix4();
Matrix4.m1 = new Matrix4();


/***/ }),

/***/ "./src/math/vector2.ts":
/*!*****************************!*\
  !*** ./src/math/vector2.ts ***!
  \*****************************/
/*! exports provided: Vector2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
class Vector2 {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get xy() {
        return [
            this._x,
            this._y,
        ];
    }
    set xy(values) {
        this._x = values[0];
        this._y = values[1];
    }
    static get zero() {
        return new Vector2();
    }
    static get one() {
        return new Vector2(1, 1);
    }
    static distance(a, b) {
        let diff = a.subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    }
    set(x, y, z) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
    }
    equals(v) {
        return (this._x === v._x && this._y === v._y);
    }
    toArray() {
        return [this._x, this._y];
    }
    toFloat32Array() {
        return new Float32Array(this.toArray());
    }
    copyFrom(vector) {
        this._x = vector._x;
        this._y = vector._y;
    }
    add(v) {
        this._x += v._x;
        this._y += v._y;
        return this;
    }
    subtract(v) {
        this._x -= v._x;
        this._y -= v._y;
        return this;
    }
    multiply(v) {
        this._x *= v._x;
        this._y *= v._y;
        return this;
    }
    divide(v) {
        this._x /= v._x;
        this._y /= v._y;
        return this;
    }
    clone() {
        return new Vector2(this._x, this._y);
    }
}


/***/ }),

/***/ "./src/math/vector3.ts":
/*!*****************************!*\
  !*** ./src/math/vector3.ts ***!
  \*****************************/
/*! exports provided: Vector3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return Vector3; });
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._x;
    }
    set y(value) {
        this._y = value;
    }
    get z() {
        return this._x;
    }
    set z(value) {
        this._z = value;
    }
    get xyz() {
        return [
            this._x,
            this._y,
            this._z,
        ];
    }
    set xyz(values) {
        this._x = values[0];
        this._y = values[1];
        this._z = values[2];
    }
    static get zero() {
        return new Vector3();
    }
    static get one() {
        return new Vector3(1, 1, 1);
    }
    static distance(a, b) {
        let diff = a.subtract(b);
        return Math.sqrt(diff.x * diff.x + diff.y * diff.y + diff.z * diff.z);
    }
    set(x, y, z) {
        if (x !== undefined) {
            this._x = x;
        }
        if (y !== undefined) {
            this._y = y;
        }
        if (z !== undefined) {
            this._z = z;
        }
    }
    equals(v) {
        return (this._x === v._x && this._y === v._y && this._z === v._z);
    }
    toArray() {
        return [this._x, this._y, this._z];
    }
    toFloat32Array() {
        return new Float32Array(this.toArray());
    }
    copyFrom(vector) {
        this._x = vector._x;
        this._y = vector._y;
        this._z = vector._z;
    }
    add(v) {
        this._x += v._x;
        this._y += v._y;
        this._z += v._z;
        return this;
    }
    subtract(v) {
        this._x -= v._x;
        this._y -= v._y;
        this._z -= v._z;
        return this;
    }
    multiply(v) {
        this._x *= v._x;
        this._y *= v._y;
        this._z *= v._z;
        return this;
    }
    divide(v) {
        this._x /= v._x;
        this._y /= v._y;
        this._z /= v._z;
        return this;
    }
    clone() {
        return new Vector3(this._x, this._y, this._z);
    }
    copy(dest = null) {
        if (!dest)
            dest = new Vector3();
        dest._x = this.x;
        dest._y = this.y;
        dest._z = this.z;
        return dest;
    }
    get length() {
        return Math.sqrt(this.length2);
    }
    get length2() {
        let x = this._x, y = this._y, z = this._z;
        return (x * x + y * y + z * z);
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let length = this.length;
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest._x = 0;
            dest._y = 0;
            dest._z = 0;
            return dest;
        }
        length = 1.0 / length;
        dest._x *= length;
        dest._y *= length;
        dest._z *= length;
        return dest;
    }
    static difference(vector, vector2, dest = null) {
        if (!dest)
            dest = new Vector3();
        dest._x = vector.x - vector2.x;
        dest._y = vector.y - vector2.y;
        dest._z = vector.z - vector2.z;
        return dest;
    }
    static sum(vector, vector2, dest = null) {
        if (!dest)
            dest = new Vector3();
        dest._x = vector.x + vector2.x;
        dest._y = vector.y + vector2.y;
        dest._z = vector.z + vector2.z;
        return dest;
    }
    scale(value, dest = null) {
        if (!dest) {
            dest = this;
        }
        else {
            this.copy(dest);
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    static dot(vector, vector2) {
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        return (x * x2 + y * y2 + z * z2);
    }
    static cross(vector, vector2, dest = null) {
        if (!dest)
            dest = new Vector3();
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        dest._x = y * z2 - z * y2;
        dest._y = z * x2 - x * z2;
        dest._z = x * y2 - y * x2;
        return dest;
    }
}
Vector3.up = new Vector3(0, 1, 0);
Vector3.down = new Vector3(0, -1, 0);
Vector3.right = new Vector3(1, 0, 0);
Vector3.left = new Vector3(-1, 0, 0);
Vector3.forward = new Vector3(0, 0, 1);
Vector3.backward = new Vector3(0, 0, -1);
Vector3.v0 = new Vector3(0, 0, 0);
Vector3.v1 = new Vector3(0, 0, 0);
Vector3.v2 = new Vector3(0, 0, 0);


/***/ }),

/***/ "./src/math/vector4.ts":
/*!*****************************!*\
  !*** ./src/math/vector4.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector4; });
class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
    }
    get x() {
        // return this.values[0]
        return this._x;
    }
    get y() {
        // return this.values[1]
        return this._y;
    }
    get z() {
        // return this.values[1]
        return this._z;
    }
    get w() {
        return this._w;
    }
    set x(x) {
        // this.values[0] = value
        this._x = x;
    }
    set y(y) {
        // this.values[0] = value
        this._y = y;
    }
    set z(z) {
        // this.values[0] = value
        this._z = z;
    }
    set w(w) {
        // this.values[0] = value
        this._w = w;
    }
    get r() {
        return this._x;
    }
    get g() {
        return this._y;
    }
    get b() {
        return this._z;
    }
    get a() {
        return this._w;
    }
    set r(value) {
        this._x = value;
    }
    set g(value) {
        this._y = value;
    }
    set b(value) {
        this._z = value;
    }
    set a(value) {
        this._w = value;
    }
    copy(dest) {
        if (!dest) {
            dest = new Vector4();
        }
        dest.x = this._x;
        dest.y = this._y;
        dest.z = this._z;
        dest.w = this._w;
        return dest;
    }
    add(vec4) {
        this._x += vec4.x;
        this._y += vec4.y;
        this._z += vec4.z;
        this._w += vec4.w;
        return this;
    }
    subtract(vec4) {
        this._x -= vec4.x;
        this._y -= vec4.y;
        this._z -= vec4.z;
        this._w -= vec4.w;
        return this;
    }
    scale(value, dest) {
        if (!dest) {
            dest = this;
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        dest.w *= value;
        return dest;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    normalize(dest) {
        if (!dest) {
            dest = this;
        }
        const length = this.length();
        dest.x /= length;
        dest.y /= length;
        dest.z /= length;
        dest.w /= length;
        return dest;
    }
}
Vector4.red = new Vector4(1.0, 0.0, 0.0, 1.0);
Vector4.green = new Vector4(0.0, 1.0, 0.0, 1.0);
Vector4.blue = new Vector4(0.0, 0.0, 1.0, 1.0);
Vector4.black = new Vector4(0, 0, 0, 0);


/***/ }),

/***/ "./src/utils/HttpRequest.ts":
/*!**********************************!*\
  !*** ./src/utils/HttpRequest.ts ***!
  \**********************************/
/*! exports provided: ImageInfo, HttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInfo", function() { return ImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
// 有时我们在完成时需要按名称查询对应的HTMLImageElement对象
// 此时就需要ImageInfo结构了
class ImageInfo {
    constructor(path, image) {
        this.name = path;
        this.image = image;
    }
}
class HttpRequest {
    //这个函数要起作用，必须要在tsconfig.json中将default的es5改成ES2015
    static loadImageAsync(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function () {
                reject(new Error('Could not load image at ' + url));
            };
            image.src = url;
        });
    }
    //这个函数要起作用，必须要在tsconfig.json中将default的es5改成ES2015
    static loadImageAsyncSafe(url, name = url) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = function () {
                let info = new ImageInfo(name, image);
                resolve(info);
            };
            image.onerror = function () {
                resolve(null);
            };
            image.src = url;
        });
    }
    static loadTextFileAsync(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = (ev) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            };
            xhr.open("get", url, true, null, null);
            xhr.send();
        });
    }
    static loadArrayBufferAsync(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = "arraybuffer";
            xhr.onreadystatechange = (ev) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
            };
            xhr.open("get", url, true, null, null);
            xhr.send();
        });
    }
}


/***/ }),

/***/ "./src/webgl/WebGLApplication.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLApplication.ts ***!
  \***************************************/
/*! exports provided: WebGLApplication, WebGL2Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLApplication", function() { return WebGLApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGL2Application", function() { return WebGL2Application; });
/* harmony import */ var _common_EventInteraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventInteraction */ "./src/common/EventInteraction.ts");
/* harmony import */ var _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLMatrixStack */ "./src/webgl/WebGLMatrixStack.ts");
/* harmony import */ var _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebGLTexture */ "./src/webgl/WebGLTexture.ts");
/* harmony import */ var _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebGLTextureCache */ "./src/webgl/WebGLTextureCache.ts");
/* harmony import */ var _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebGLProgramCache */ "./src/webgl/WebGLProgramCache.ts");
/* harmony import */ var _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebGLProgram */ "./src/webgl/WebGLProgram.ts");
/* harmony import */ var _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebGLMesh */ "./src/webgl/WebGLMesh.ts");
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _WebGLHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebGLHelper */ "./src/webgl/WebGLHelper.ts");









class WebGLApplication extends _common_EventInteraction__WEBPACK_IMPORTED_MODULE_0__["EventInteraction"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2D = false) {
        super(canvas);
        // 为了在3D环境中同时支持Canvas2D绘制，特别是为了实现文字绘制
        this.canvas2D = null;
        this.ctx2D = null;
        let ctx = this.canvas.getContext("webgl", contextAttributes);
        if (ctx === null) {
            alert(" 无法创建WebGLRenderingContext上下文对象 ");
            throw new Error(" 无法创建WebGLRenderingContext上下文对象 ");
        }
        this.gl = ctx;
        if (need2D === true) {
            let canvasElem = document.createElement("canvas");
            canvasElem.width = this.canvas.width;
            canvasElem.height = this.canvas.height;
            canvasElem.style.backgroundColor = "transparent";
            canvasElem.style.position = "absolute";
            canvasElem.style.left = "0px";
            canvasElem.style.top = "0px";
            let parent = this.canvas.parentElement;
            if (parent === null) {
                throw new Error("canvas元素必须要有父亲!!");
            }
            parent.appendChild(canvasElem);
            this.ctx2D = canvasElem.getContext("2d");
            canvasElem.addEventListener("mousedown", this, false);
            canvasElem.addEventListener("mouseup", this, false);
            canvasElem.addEventListener("mousemove", this, false);
            this.canvas.removeEventListener("mousedown", this);
            this.canvas.removeEventListener("mouseup", this);
            this.canvas.removeEventListener("mousemove", this);
            this.canvas2D = canvasElem;
        }
        this.matStack = new _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__["GLWorldMatrixStack"]();
        // 初始化渲染状态
        _WebGLHelper__WEBPACK_IMPORTED_MODULE_8__["GLHelper"].setDefaultState(this.gl);
        // 由于Canvas是左手系，而webGL是右手系，需要FilpYCoord
        this.isFlipYCoord = true;
        // 初始化时，创建default纹理
        _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__["GLTextureCache"].instance.set("default", _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__["GLTexture"].createDefaultTexture(this.gl));
        // 初始化时，创建颜色和纹理Program
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("color", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultColorProgram(this.gl));
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("texture", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultTextureProgram(this.gl));
        // 初始化时，创建颜色GLMeshBuilder对象
        this.builder = new _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__["GLMeshBuilder"](this.gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].POSITION_BIT | _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].COLOR_BIT, _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.getMust("color"));
    }
    getMouseCanvas() {
        if (this.canvas2D !== null && this.ctx2D !== null) {
            return this.canvas2D;
        }
        else {
            return this.canvas;
        }
    }
}
class WebGL2Application extends _common_EventInteraction__WEBPACK_IMPORTED_MODULE_0__["EventInteraction"] {
    constructor(canvas, contextAttributes = { premultipliedAlpha: false }, need2D = false) {
        super(canvas);
        this.canvas2D = null;
        this.ctx2D = null;
        let ctx = this.canvas.getContext("webgl", contextAttributes);
        if (ctx === null) {
            alert(" 无法创建WebGLRenderingContext上下文对象 ");
            throw new Error(" 无法创建WebGLRenderingContext上下文对象 ");
        }
        this.gl = ctx;
        if (need2D === true) {
            let canvasElem = document.createElement("canvas");
            canvasElem.width = this.canvas.width;
            canvasElem.height = this.canvas.height;
            canvasElem.style.backgroundColor = "transparent";
            canvasElem.style.position = "absolute";
            canvasElem.style.left = "0px";
            canvasElem.style.top = "0px";
            let parent = this.canvas.parentElement;
            if (parent === null) {
                throw new Error("canvas元素必须要有父亲!!");
            }
            parent.appendChild(canvasElem);
            this.ctx2D = canvasElem.getContext("2d");
            canvasElem.addEventListener("mousedown", this, false);
            canvasElem.addEventListener("mouseup", this, false);
            canvasElem.addEventListener("mousemove", this, false);
            this.canvas.removeEventListener("mousedown", this);
            this.canvas.removeEventListener("mouseup", this);
            this.canvas.removeEventListener("mousemove", this);
            this.canvas2D = canvasElem;
        }
        // 初始化渲染状态
        _WebGLHelper__WEBPACK_IMPORTED_MODULE_8__["GLHelper"].setDefaultState(this.gl);
        // 内置一个矩阵堆栈
        this.matStack = new _WebGLMatrixStack__WEBPACK_IMPORTED_MODULE_1__["GLMatrixStack"]();
        this.matStack.perspective(45, canvas.width / canvas.height, 0.1, 1000);
        // 由于Canvas是左手系，而webGL是右手系，需要FilpYCoord
        this.isFlipYCoord = true;
        // 初始化时，创建default纹理
        _WebGLTextureCache__WEBPACK_IMPORTED_MODULE_3__["GLTextureCache"].instance.set("default", _WebGLTexture__WEBPACK_IMPORTED_MODULE_2__["GLTexture"].createDefaultTexture(this.gl));
        // 初始化时，创建颜色和纹理Program
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("color", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultColorProgram(this.gl));
        _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.set("texture", _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].createDefaultTextureProgram(this.gl));
        // 初始化时，创建颜色GLMeshBuilder对象
        this.builder = new _WebGLMesh__WEBPACK_IMPORTED_MODULE_6__["GLMeshBuilder"](this.gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].POSITION_BIT | _WebGLAttribState__WEBPACK_IMPORTED_MODULE_7__["GLAttribState"].COLOR_BIT, _WebGLProgramCache__WEBPACK_IMPORTED_MODULE_4__["GLProgramCache"].instance.getMust("color"));
    }
    getMouseCanvas() {
        if (this.canvas2D !== null && this.ctx2D !== null) {
            return this.canvas2D;
        }
        else {
            return this.canvas;
        }
    }
}


/***/ }),

/***/ "./src/webgl/WebGLAttribState.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLAttribState.ts ***!
  \***************************************/
/*! exports provided: GLAttribState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLAttribState", function() { return GLAttribState; });
class GLAttribState {
    static makeVertexAttribs(useTexcoord0, useTexcoord1, useNormal, useTangent, useColor) {
        // 不管如何，总是使用位置坐标属性
        let bits = GLAttribState.POSITION_BIT;
        // 使用 |= 操作符添加标记位
        if (useTexcoord0 === true) {
            bits |= GLAttribState.TEXCOORD_BIT;
        }
        if (useTexcoord1 === true) {
            bits |= GLAttribState.TEXCOORD1_BIT;
        }
        if (useNormal === true) {
            bits |= GLAttribState.NORMAL_BIT;
        }
        if (useTangent === true) {
            bits |= GLAttribState.TANGENT_BIT;
        }
        if (useColor === true) {
            bits |= GLAttribState.COLOR_BIT;
        }
        return bits;
    }
    // 使用按位与（&）操作符来测试否是包含某个位标记值
    static hasPosition(attribBits) { return (attribBits & GLAttribState.POSITION_BIT) !== 0; }
    static hasNormal(attribBits) { return (attribBits & GLAttribState.NORMAL_BIT) !== 0; }
    static hasTexCoord_0(attribBits) { return (attribBits & GLAttribState.TEXCOORD_BIT) !== 0; }
    static hasTexCoord_1(attribBits) { return (attribBits & GLAttribState.TEXCOORD1_BIT) !== 0; }
    static hasColor(attribBits) { return (attribBits & GLAttribState.COLOR_BIT) !== 0; }
    static hasTangent(attribBits) { return (attribBits & GLAttribState.TANGENT_BIT) !== 0; }
    static setAttribVertexArrayPointer(gl, offsetMap) {
        let stride = offsetMap[GLAttribState.ATTRIBSTRIDE];
        if (stride === 0) {
            throw new Error("vertex Array有问题！！");
        }
        // sequenced的话stride为0
        if (stride !== offsetMap[GLAttribState.ATTRIBBYTELENGTH]) {
            stride = 0;
        }
        if (stride === undefined) {
            stride = 0;
        }
        let offset = offsetMap[GLAttribState.POSITION_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.POSITION_LOCATION, GLAttribState.POSITION_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.NORMAL_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.NORMAL_LOCATION, GLAttribState.NORMAL_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TEXCOORD_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TEXCOORD_LOCATION, GLAttribState.TEXCOORD_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TEXCOORD1_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TEXCOORD1_LOCATION, GLAttribState.TEXCOORD1_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.COLOR_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.COLOR_LOCATION, GLAttribState.COLOR_COMPONENT, gl.FLOAT, false, stride, offset);
        }
        offset = offsetMap[GLAttribState.TANGENT_NAME];
        if (offset !== undefined) {
            gl.vertexAttribPointer(GLAttribState.TANGENT_LOCATION, GLAttribState.TANGENT_COMPONENT, gl.FLOAT, false, stride, offset);
        }
    }
    static setAttribVertexArrayState(gl, attribBits, enable = true) {
        if (GLAttribState.hasPosition(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.POSITION_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.POSITION_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.POSITION_LOCATION);
        }
        if (GLAttribState.hasNormal(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.NORMAL_LOCATION);
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TEXCOORD_LOCATION);
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TEXCOORD1_LOCATION);
        }
        if (GLAttribState.hasColor(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.COLOR_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.COLOR_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.COLOR_LOCATION);
        }
        if (GLAttribState.hasTangent(attribBits)) {
            if (enable) {
                gl.enableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
            }
            else {
                gl.disableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
            }
        }
        else {
            gl.disableVertexAttribArray(GLAttribState.TANGENT_LOCATION);
        }
    }
    static getVertexByteStride(attribBits) {
        let byteOffset = 0;
        if (GLAttribState.hasPosition(attribBits)) {
            byteOffset += GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            byteOffset += GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            byteOffset += GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            byteOffset += GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            byteOffset += GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            byteOffset += GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        return byteOffset;
    }
    static getSequencedLayoutAttribOffsetMap(attribBits, vertCount) {
        let offsets = {}; // 初始化顶点属性偏移表
        let byteOffset = 0; // 初始化时的首地址为0
        if (GLAttribState.hasPosition(attribBits)) {
            // 记录位置坐标的首地址
            offsets[GLAttribState.POSITION_NAME] = 0;
            // 位置坐标由3个float值组成，因此下一个属性的首地址位 3 * 4 * 顶点数量
            byteOffset += vertCount * GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = byteOffset;
            byteOffset += vertCount * GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        //SequencedLayout具有ATTRIBSTRIDE和ATTRIBSTRIDE属性
        offsets[GLAttribState.ATTRIBSTRIDE] = byteOffset / vertCount; // 总的字节数 / 顶点数量  = 每个顶点的stride，实际上顺序存储时不需要这个值
        offsets[GLAttribState.ATTRIBBYTELENGTH] = byteOffset; // 总的字节数
        return offsets;
    }
    static getInterleavedLayoutAttribOffsetMap(attribBits) {
        let offsets = {}; // 初始化顶点属性偏移表
        let byteOffset = 0; // 初始化时的首地址为0
        if (GLAttribState.hasPosition(attribBits)) {
            // 记录位置坐标的首地址
            offsets[GLAttribState.POSITION_NAME] = 0;
            // 位置坐标由3个float值组成，因此下一个属性的首地址位 3 * 4 = 12个字节处
            byteOffset += GLAttribState.POSITION_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        // 下面各个属性偏移计算算法同上，唯一区别是分量的不同而已
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = byteOffset;
            byteOffset += GLAttribState.NORMAL_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = byteOffset;
            byteOffset += GLAttribState.TEXCOORD_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = byteOffset;
            byteOffset += GLAttribState.TEXCOORD1_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = byteOffset;
            byteOffset += GLAttribState.COLOR_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = byteOffset;
            byteOffset += GLAttribState.TANGENT_COMPONENT * GLAttribState.FLOAT32_SIZE;
        }
        // stride和length相等
        offsets[GLAttribState.ATTRIBSTRIDE] = byteOffset; // 间隔数组方法存储的话，顶点的stride非常重要
        offsets[GLAttribState.ATTRIBBYTELENGTH] = byteOffset;
        return offsets;
    }
    static getSepratedLayoutAttribOffsetMap(attribBits) {
        // 每个顶点属性使用一个vbo的话，每个offsets中的顶点属性的偏移都是为0
        // 并且offsets的length = vbo的个数，不需要顶点stride和byteLenth属性
        let offsets = {};
        let byteOffset = 0;
        if (GLAttribState.hasPosition(attribBits)) {
            offsets[GLAttribState.POSITION_NAME] = 0;
        }
        if (GLAttribState.hasNormal(attribBits)) {
            offsets[GLAttribState.NORMAL_NAME] = 0;
        }
        if (GLAttribState.hasTexCoord_0(attribBits)) {
            offsets[GLAttribState.TEXCOORD_NAME] = 0;
        }
        if (GLAttribState.hasTexCoord_1(attribBits)) {
            offsets[GLAttribState.TEXCOORD1_NAME] = 0;
        }
        if (GLAttribState.hasColor(attribBits)) {
            offsets[GLAttribState.COLOR_NAME] = 0;
        }
        if (GLAttribState.hasTangent(attribBits)) {
            offsets[GLAttribState.TANGENT_NAME] = 0;
        }
        return offsets;
    }
    static isAttribStateValid(attribBits) {
        // 一定要有位置向量
        if (!GLAttribState.hasPosition(attribBits)) {
            return false;
        }
        //计算tangent space必须要有uv坐标和法线向量
        if (GLAttribState.hasTangent(attribBits)) {
            if (!GLAttribState.hasTexCoord_0(attribBits)) {
                return false;
            }
            if (!GLAttribState.hasNormal(attribBits)) {
                return false;
            }
        }
        return true;
    }
}
// 顶点属性
GLAttribState.POSITION_BIT = (1 << 0);
GLAttribState.POSITION_COMPONENT = 3; //xyz
GLAttribState.POSITION_NAME = "aPosition";
GLAttribState.POSITION_LOCATION = 0;
GLAttribState.TEXCOORD_BIT = (1 << 1);
GLAttribState.TEXCOORD_COMPONENT = 2; //st
GLAttribState.TEXCOORD_NAME = "aTexCoord";
GLAttribState.TEXCOORD_LOCATION = 1;
GLAttribState.TEXCOORD1_BIT = (1 << 2);
GLAttribState.TEXCOORD1_COMPONENT = 2;
GLAttribState.TEXCOORD1_NAME = "aTexCoord1";
GLAttribState.TEXCOORD1_LOCATION = 2;
GLAttribState.NORMAL_BIT = (1 << 3);
GLAttribState.NORMAL_COMPONENT = 3; //xyz
GLAttribState.NORMAL_NAME = "aNormal";
GLAttribState.NORMAL_LOCATION = 3;
GLAttribState.TANGENT_BIT = (1 << 4);
GLAttribState.TANGENT_COMPONENT = 4; //xyzw
GLAttribState.TANGENT_NAME = "aTangent";
GLAttribState.TANGENT_LOCATION = 4;
GLAttribState.COLOR_BIT = (1 << 5);
GLAttribState.COLOR_COMPONENT = 4;
GLAttribState.COLOR_NAME = "aColor";
GLAttribState.COLOR_LOCATION = 5;
/*
public static readonly WEIGHT0_BIT: number = (1 << 7);
public static readonly WEIGHT1_BIT: number = (1 << 8);
public static readonly WEIGHT2_BIT: number = (1 << 9);
public static readonly WEIGHT3_BIT: number = (1 << 10);
*/
GLAttribState.ATTRIBSTRIDE = "STRIDE";
GLAttribState.ATTRIBBYTELENGTH = "BYTELENGTH";
GLAttribState.FLOAT32_SIZE = Float32Array.BYTES_PER_ELEMENT;
GLAttribState.UINT16_SIZE = Uint16Array.BYTES_PER_ELEMENT;


/***/ }),

/***/ "./src/webgl/WebGLHelper.ts":
/*!**********************************!*\
  !*** ./src/webgl/WebGLHelper.ts ***!
  \**********************************/
/*! exports provided: EShaderType, EGLSLESDataType, GLUniformInfo, GLAttribInfo, GLHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShaderType", function() { return EShaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGLSLESDataType", function() { return EGLSLESDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLUniformInfo", function() { return GLUniformInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLAttribInfo", function() { return GLAttribInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLHelper", function() { return GLHelper; });
// 枚举类
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["VS_SHADER"] = 0] = "VS_SHADER";
    EShaderType[EShaderType["FS_SHADER"] = 1] = "FS_SHADER";
})(EShaderType || (EShaderType = {}));
var EGLSLESDataType;
(function (EGLSLESDataType) {
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EGLSLESDataType[EGLSLESDataType["INT_VEC2"] = 35667] = "INT_VEC2";
    EGLSLESDataType[EGLSLESDataType["INT_VEC3"] = 35668] = "INT_VEC3";
    EGLSLESDataType[EGLSLESDataType["INT_VEC4"] = 35669] = "INT_VEC4";
    EGLSLESDataType[EGLSLESDataType["BOOL"] = 35670] = "BOOL";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_2D"] = 35677] = "SAMPLER_2D";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_CUBE"] = 35678] = "SAMPLER_CUBE";
    EGLSLESDataType[EGLSLESDataType["FLOAT"] = 5126] = "FLOAT";
    EGLSLESDataType[EGLSLESDataType["INT"] = 5124] = "INT";
})(EGLSLESDataType || (EGLSLESDataType = {}));
class GLUniformInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class GLAttribInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class GLHelper {
    static printStates(gl) {
        // 所有的boolean状态变量，共9个
        console.log("1. isBlendEnable = " + gl.isEnabled(gl.BLEND));
        console.log("2. isCullFaceEnable = " + gl.isEnabled(gl.CULL_FACE));
        console.log("3. isDepthTestEnable = " + gl.isEnabled(gl.DEPTH_TEST));
        console.log("4. isDitherEnable = " + gl.isEnabled(gl.DITHER));
        console.log("5. isPolygonOffsetFillEnable = " + gl.isEnabled(gl.POLYGON_OFFSET_FILL));
        console.log("6. isSampleAlphtToCoverageEnable = " + gl.isEnabled(gl.SAMPLE_ALPHA_TO_COVERAGE));
        console.log("7. isSampleCoverageEnable = " + gl.isEnabled(gl.SAMPLE_COVERAGE));
        console.log("8. isScissorTestEnable = " + gl.isEnabled(gl.SCISSOR_TEST));
        console.log("9. isStencilTestEnable = " + gl.isEnabled(gl.STENCIL_TEST));
    }
    static printWebGLInfo(gl) {
        console.log("renderer = " + gl.getParameter(gl.RENDERER));
        console.log("version = " + gl.getParameter(gl.VERSION));
        console.log("vendor = " + gl.getParameter(gl.VENDOR));
        console.log("glsl version = " + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    }
    static printWebGLTextureInfo(gl) {
        console.log("MAX_COMBINED_TEXTURE_IMAGE_UNITS = ", gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
        console.log("MAX_TEXTURE_IMAGE_UNITS = ", gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
        console.log("MAX_TEXTURE_SIZE = ", gl.getParameter(gl.MAX_TEXTURE_SIZE));
        console.log("MAX_CUBE_MAP_TEXTURE_SIZE = ", gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
    }
    static triggerContextLostEvent(gl) {
        let ret = gl.getExtension('WEBGL_lose_context');
        if (ret !== null) {
            ret.loseContext();
        }
    }
    static checkGLError(gl) {
        let err = gl.getError();
        if (err === 0) {
            return false;
        }
        else {
            console.log("WebGL Error NO: ", err);
            return true;
        }
    }
    static setDefaultState(gl) {
        // default [r=0,g=0,b=0,a=0]
        gl.clearColor(0.0, 0.0, 0.0, 0.0); // 每次清屏时，将颜色缓冲区设置为全透明黑色
        gl.clearDepth(1.0); // 每次清屏时，将深度缓冲区设置为1.0
        gl.enable(gl.DEPTH_TEST); //开启深度测试
        gl.enable(gl.CULL_FACE); //开启背面剔除
        gl.enable(gl.SCISSOR_TEST); // 开启裁剪测试
    }
    static setViewport(gl, v) {
        gl.viewport(v[0], v[1], v[2], v[3]);
    }
    static createShader(gl, type) {
        let shader = null;
        if (type === EShaderType.VS_SHADER) {
            shader = gl.createShader(gl.VERTEX_SHADER);
        }
        else {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }
        if (shader === null) {
            // 如果创建WebGLShader对象失败，我们采取抛错错误的处理方式
            throw new Error("WebGLShader创建失败！");
        }
        return shader;
    }
    static compileShader(gl, code, shader) {
        gl.shaderSource(shader, code); // 载入shader源码
        gl.compileShader(shader); // 编译shader源码
        // 检查编译错误
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
            // 如果编译出现错误，则弹出对话框，了解错误的原因
            alert(gl.getShaderInfoLog(shader));
            // 然后将shader删除掉，防止内存泄漏
            gl.deleteShader(shader);
            // 编译错误返回false
            return false;
        }
        // 编译成功返回true
        return true;
    }
    static createProgram(gl) {
        let program = gl.createProgram();
        if (program === null) {
            // 直接抛出错误
            throw new Error("WebGLProgram创建失败！");
        }
        return program;
    }
    static linkProgram(gl, // 渲染上下文对象
    program, // 链接器对象
    vsShader, // 要链接的顶点着色器
    fsShader, // 要链接的片段着色器
    beforeProgramLink = null, afterProgramLink = null) {
        // 1、使用attachShader方法将顶点和片段着色器与当前的连接器相关联
        gl.attachShader(program, vsShader);
        gl.attachShader(program, fsShader);
        // 2、在调用linkProgram方法之前，按需触发beforeProgramLink回调函数
        if (beforeProgramLink !== null) {
            beforeProgramLink(gl, program);
        }
        // 3、调用linkProgram进行链接操作
        gl.linkProgram(program);
        // 4、使用带gl.LINK_STATUS参数的getProgramParameter方法，进行链接状态检查
        if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
            // 4.1 如果链接出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 4.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 4.3 返回链接失败状态
            return false;
        }
        // 5、使用validateProgram进行链接验证
        gl.validateProgram(program);
        // 6、使用带gl.VALIDATE_STATUS参数的getProgramParameter方法，进行验证状态检查
        if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
            // 6.1 如果验证出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 6.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 6.3 返回链接失败状态
            return false;
        }
        // 7、全部正确，按需调用afterProgramLink回调函数
        if (afterProgramLink !== null) {
            afterProgramLink(gl, program);
        }
        // 8、返回链接正确表示
        return true;
    }
    static getProgramActiveAttribs(gl, program, out) {
        //获取当前active状态的attribute和uniform的数量
        //很重要一点，active_attributes/uniforms必须在link后才能获得
        let attributsCount = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        //很重要一点，所谓active是指uniform已经被使用的，否则不属于uniform,uniform在shader中必须是读取，不能赋值
        //很重要一点，attribute在shader中只能读取，不能赋值,如果没有被使用的话，也是不算入activeAttrib中去的
        for (let i = 0; i < attributsCount; i++) {
            let info = gl.getActiveAttrib(program, i);
            if (info) {
                out[info.name] = new GLAttribInfo(info.size, info.type, gl.getAttribLocation(program, info.name));
            }
        }
    }
    static getProgramAtciveUniforms(gl, program, out) {
        let uniformsCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformsCount; i++) {
            let info = gl.getActiveUniform(program, i);
            if (info) {
                let loc = gl.getUniformLocation(program, info.name);
                if (loc !== null) {
                    out[info.name] = new GLUniformInfo(info.size, info.type, loc);
                }
            }
        }
    }
    static createBuffer(gl) {
        let buffer = gl.createBuffer();
        if (buffer === null) {
            throw new Error("WebGLBuffer创建失败！");
        }
        return buffer;
    }
    static getColorBufferData(gl) {
        let pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
        gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels;
    }
}


/***/ }),

/***/ "./src/webgl/WebGLMatrixStack.ts":
/*!***************************************!*\
  !*** ./src/webgl/WebGLMatrixStack.ts ***!
  \***************************************/
/*! exports provided: EMatrixMode, GLMatrixStack, GLWorldMatrixStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMatrixMode", function() { return EMatrixMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMatrixStack", function() { return GLMatrixStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLWorldMatrixStack", function() { return GLWorldMatrixStack; });
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _math_matrix4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/matrix4 */ "./src/math/matrix4.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/MathHelper */ "./src/math/MathHelper.ts");



var EMatrixMode;
(function (EMatrixMode) {
    EMatrixMode[EMatrixMode["MODELVIEW"] = 0] = "MODELVIEW";
    EMatrixMode[EMatrixMode["PROJECTION"] = 1] = "PROJECTION";
    EMatrixMode[EMatrixMode["TEXTURE"] = 2] = "TEXTURE";
})(EMatrixMode || (EMatrixMode = {}));
class GLMatrixStack {
    constructor() {
        //初始化时每个矩阵栈都先添加一个正交归一化后的矩阵
        this._mvStack = [];
        this._mvStack.push(new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]());
        this._projStack = [];
        this._projStack.push(new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]());
        this._texStack = [];
        this._texStack.push(new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]());
        this.matrixMode = EMatrixMode.MODELVIEW;
    }
    get modelViewMatrix() {
        if (this._mvStack.length <= 0) {
            throw new Error("model view matrix stack为空！");
        }
        return this._mvStack[this._mvStack.length - 1];
    }
    get projectionMatrix() {
        if (this._projStack.length <= 0) {
            throw new Error("projection matrix stack为空！");
        }
        return this._projStack[this._projStack.length - 1];
    }
    get modelViewProjectionMatrix() {
        let ret = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this.projectionMatrix.copy(ret);
        ret.multiply(this.modelViewMatrix);
        return ret;
    }
    get normalMatrix() {
        let ret = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this.modelViewMatrix.copy(ret);
        this.modelViewMatrix.inverse();
        ret.transpose();
        return ret;
    }
    get textureMatrix() {
        if (this._texStack.length <= 0) {
            throw new Error("projection matrix stack为空！");
        }
        return this._texStack[this._texStack.length - 1];
    }
    pushMatrix() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                let mv = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
                this.modelViewMatrix.copy(mv);
                this._mvStack.push(mv);
                break;
            case EMatrixMode.PROJECTION:
                let proj = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
                this.projectionMatrix.copy(proj);
                this._projStack.push(proj);
                break;
            case EMatrixMode.TEXTURE:
                let tex = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
                this.textureMatrix.copy(tex);
                this._texStack.push(tex);
                break;
        }
        return this;
    }
    popMatrix() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this._mvStack.pop();
                break;
            case EMatrixMode.PROJECTION:
                this._projStack.pop();
                break;
            case EMatrixMode.TEXTURE:
                this._texStack.pop();
                break;
        }
        return this;
    }
    loadIdentity() {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.setIdentity();
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.setIdentity();
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.setIdentity();
                break;
        }
        return this;
    }
    loadMatrix(mat) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                mat.copy(this.modelViewMatrix);
                break;
            case EMatrixMode.PROJECTION:
                mat.copy(this.projectionMatrix);
                break;
            case EMatrixMode.TEXTURE:
                mat.copy(this.textureMatrix);
                break;
        }
        return this;
    }
    perspective(fov, aspect, near, far, isRadians = false) {
        this.matrixMode = EMatrixMode.PROJECTION;
        if (isRadians == false) {
            fov = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(fov);
        }
        let mat = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].perspective(fov, aspect, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    frustum(left, right, bottom, top, near, far) {
        this.matrixMode = EMatrixMode.PROJECTION;
        let mat = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].frustum(left, right, bottom, top, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    ortho(left, right, bottom, top, near, far) {
        this.matrixMode = EMatrixMode.PROJECTION;
        let mat = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].orthographic(left, right, bottom, top, near, far);
        this.loadMatrix(mat);
        this.matrixMode = EMatrixMode.MODELVIEW;
        // 是否要调用loadIdentity方法???
        this.loadIdentity();
        return this;
    }
    lookAt(pos, target, up = _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].up) {
        this.matrixMode = EMatrixMode.MODELVIEW;
        let mat = _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"].lookAt(pos, target, up);
        this.loadMatrix(mat);
        return this;
    }
    makeView(pos, xAxis, yAxis, zAxis) {
        zAxis.normalize();
        //forward cross right = up
        _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(zAxis, xAxis, yAxis);
        yAxis.normalize();
        //up cross forward = right
        _math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].cross(yAxis, zAxis, xAxis);
        xAxis.normalize();
        let x = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(xAxis, pos);
        let y = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(yAxis, pos);
        let z = -_math_vector3__WEBPACK_IMPORTED_MODULE_0__["Vector3"].dot(zAxis, pos);
        let mat = this._mvStack[this._mvStack.length - 1];
        mat.values[0] = xAxis.x;
        mat.values[1] = yAxis.x;
        mat.values[2] = zAxis.x;
        mat.values[3] = 0.0;
        mat.values[4] = xAxis.y;
        mat.values[5] = yAxis.y;
        mat.values[6] = zAxis.y;
        mat.values[7] = 0.0;
        mat.values[8] = xAxis.z;
        mat.values[9] = yAxis.z;
        mat.values[10] = zAxis.z;
        mat.values[11] = 0.0;
        mat.values[12] = x;
        mat.values[13] = y;
        mat.values[14] = z;
        mat.values[15] = 1.0;
        return this;
    }
    multMatrix(mat) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.multiply(mat);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.multiply(mat);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.multiply(mat);
                break;
        }
        return this;
    }
    translate(pos) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.translate(pos);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.translate(pos);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.translate(pos);
                break;
        }
        return this;
    }
    rotate(angle, axis, isRadians = false) {
        if (isRadians === false) {
            angle = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(angle);
        }
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.rotate(angle, axis);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.rotate(angle, axis);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.rotate(angle, axis);
                break;
        }
        return this;
    }
    scale(s) {
        switch (this.matrixMode) {
            case EMatrixMode.MODELVIEW:
                this.modelViewMatrix.scale(s);
                break;
            case EMatrixMode.PROJECTION:
                this.projectionMatrix.scale(s);
                break;
            case EMatrixMode.TEXTURE:
                this.textureMatrix.scale(s);
                break;
        }
        return this;
    }
}
class GLWorldMatrixStack {
    constructor() {
        //初始化时每个矩阵栈都先添加一个正交归一化后的矩阵
        this._worldMatrixStack = [];
        this._worldMatrixStack.push(new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]());
    }
    get modelViewMatrix() {
        if (this._worldMatrixStack.length <= 0) {
            throw new Error(" model matrix stack为空！");
        }
        return this._worldMatrixStack[this._worldMatrixStack.length - 1];
    }
    pushMatrix() {
        let mv = new _math_matrix4__WEBPACK_IMPORTED_MODULE_1__["Matrix4"]();
        this.modelViewMatrix.copy(mv);
        this._worldMatrixStack.push(mv);
        return this;
    }
    popMatrix() {
        this._worldMatrixStack.pop();
        return this;
    }
    loadIdentity() {
        this.modelViewMatrix.setIdentity();
        return this;
    }
    loadMatrix(mat) {
        mat.copy(this.modelViewMatrix);
        return this;
    }
    multMatrix(mat) {
        this.modelViewMatrix.multiply(mat);
        return this;
    }
    translate(pos) {
        this.modelViewMatrix.translate(pos);
        return this;
    }
    rotate(angle, axis, isRadians = false) {
        if (isRadians === false) {
            angle = _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(angle);
        }
        this.modelViewMatrix.rotate(angle, axis);
        return this;
    }
    scale(s) {
        this.modelViewMatrix.scale(s);
        return this;
    }
}


/***/ }),

/***/ "./src/webgl/WebGLMesh.ts":
/*!********************************!*\
  !*** ./src/webgl/WebGLMesh.ts ***!
  \********************************/
/*! exports provided: GLMeshBase, GLStaticMesh, GLIndexedStaticMesh, EVertexLayout, GLMeshBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMeshBase", function() { return GLMeshBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLStaticMesh", function() { return GLStaticMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLIndexedStaticMesh", function() { return GLIndexedStaticMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVertexLayout", function() { return EVertexLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMeshBuilder", function() { return GLMeshBuilder; });
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _math_vector4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/vector4 */ "./src/math/vector4.ts");
/* harmony import */ var _math_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/vector2 */ "./src/math/vector2.ts");
/* harmony import */ var _math_vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/vector3 */ "./src/math/vector3.ts");
/* harmony import */ var _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");
/* harmony import */ var _WebGLProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebGLProgram */ "./src/webgl/WebGLProgram.ts");






// 使用abstract声明抽象类
class GLMeshBase {
    constructor(gl, attribState, drawMode = gl.TRIANGLES) {
        this.gl = gl;
        // 获取VAO的步骤：
        // 1、使用gl.getExtension( "OES_vertex_array_object" )方式获取VAO扩展
        let vao = this.gl.getExtension("OES_vertex_array_object");
        if (vao === null) {
            throw new Error("Not Support OES_vertex_array_object");
        }
        this._vao = vao;
        // 2、调用createVertexArrayOES获取VAO对象
        let vaoTarget = this._vao.createVertexArrayOES();
        if (vaoTarget === null) {
            throw new Error("Not Support WebGLVertexArrayObjectOES");
        }
        this._vaoTarget = vaoTarget;
        // 顶点属性格式，和绘制当前网格时使用的GLProgram具有一致的attribBits
        this._attribState = attribState;
        // 调用GLAttribState的getVertexByteStride方法，根据attribBits计算出顶点的stride字节数
        this._attribStride = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getVertexByteStride(this._attribState);
        // 设置当前绘制时使用的基本几何图元类型，默认为三角形集合
        this.drawMode = drawMode;
    }
    bind() {
        // 绑定VAO对象
        this._vao.bindVertexArrayOES(this._vaoTarget);
    }
    unbind() {
        // 解绑VAO
        this._vao.bindVertexArrayOES(null);
    }
    get vertexStride() {
        return this._attribStride;
    }
}
class GLStaticMesh extends GLMeshBase {
    constructor(gl, attribState, vbo, ibo = null, drawMode = gl.TRIANGLES) {
        // 调用基类的构造函数
        super(gl, attribState, drawMode);
        this._vertCount = 0; // 顶点的数量
        // GLStaticMesh内置了一个可选的索引缓冲区
        this._ibo = null;
        this._indexCount = 0; // 索引的数量
        // 关键的操作：
        // 要使用VAO来管理VBO和EBO的话，必须要在VBO和EBO创建绑定之前先绑定VAO对象，这个顺序不能搞错！！！
        // 先绑定VAO后，那么后续创建的VBO和EBO对象都归属VAO管辖！！！
        this.bind();
        // 在创建并绑定vbo
        let vb = gl.createBuffer();
        if (vb === null) {
            throw new Error("vbo creation fail");
        }
        this._vbo = vb;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._vbo); // 绑定VBO
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vbo, this.gl.STATIC_DRAW); // 将顶点数据载入到VBO中
        // 然后计算出交错存储的顶点属性attribOffsetMap相关的值
        let offsetMap = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getInterleavedLayoutAttribOffsetMap(this._attribState);
        // 计算出顶点的数量
        this._vertCount = vbo.byteLength / offsetMap[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].ATTRIBSTRIDE];
        // 使用VAO后，我们只要初始化时设置一次setAttribVertexArrayPointer和setAttribVertexArrayState就行了
        // 当我们后续调用基类的bind方法绑定VAO对象后，VAO会自动处理顶点地址绑定和顶点属性寄存器开启相关操作，这就简化了很多操作
        _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(gl, offsetMap);
        _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(gl, this._attribState);
        // 再创建IBO（IBO表示Index Buffer Object,EBO表示Element Buffer Object，表示一样的概念）
        this.setIBO(ibo);
        // 必须放在这里
        this.unbind();
        this.mins = new _math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"]();
        this.maxs = new _math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"]();
    }
    setIBO(ibo) {
        if (ibo === null) {
            return; // 按需创建IBO
        }
        // 创建ibo
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        // 绑定ibo
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        // 将索引数据上传到ibo中
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, ibo, this.gl.STATIC_DRAW);
        // 计算出索引个数
        this._indexCount = ibo.length;
    }
    draw() {
        this.bind(); // 绘制前先要绑定VAO
        if (this._ibo !== null) {
            // 如果有IBO，使用drawElements方法绘制静态网格对象
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            // 如果没有IBO，则使用drawArrays方法绘制静态网格对象
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind(); // 绘制好后解除VAO绑定
    }
    // 很重要的几点说明：
    // drawElements中的offset是以字节为单位！！！！！
    // 而count是以索引个数为单位
    // drawRange绘制从offset偏移的字节数开始，绘制count个索引
    // drawRange内部并没有调用bind和unbind方法，因此要调用drawRange方法的话，必须如下方式：
    /*
        mesh.bind(); // 绑定VAO
        mesh.drawRange( 2, 5); // 调用drawRange方法
        mesh.unbind(); // 解绑VAO
    */
    drawRange(offset, count) {
        if (this._ibo !== null) {
            this.gl.drawElements(this.drawMode, count, this.gl.UNSIGNED_SHORT, offset);
        }
        else {
            this.gl.drawArrays(this.drawMode, offset, count);
        }
    }
}
class GLIndexedStaticMesh extends GLStaticMesh {
    constructor(gl, attribState, vbo, drawMode = gl.TRIANGLES) {
        super(gl, attribState, vbo, null, drawMode);
        this._indices = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Uint16Array, 90);
    }
    addIndex(idx) {
        this._indices.push(idx);
        this._indexCount = this._indices.length;
        return this;
    }
    clearIndices() {
        this._indices.clear();
        this._indexCount = 0;
        return this;
    }
    setIBO(ibo) {
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
    }
    draw() {
        this.bind();
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount);
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind();
    }
    // 很重要的一点
    // drawElements中的offset是以字节为单位！！！！！
    // 而count是以索引个数为单位
    // 所以偏移的寻址方式是 : offset 
    // count的字节数:        sizeof (gl . UNSIGNED_SHORT) * count
    drawRange(offset, count) {
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount);
            this.gl.drawElements(this.drawMode, count, this.gl.UNSIGNED_SHORT, offset);
        }
        else {
            this.gl.drawArrays(this.drawMode, offset, count);
        }
    }
}
var EVertexLayout;
(function (EVertexLayout) {
    EVertexLayout[EVertexLayout["INTERLEAVED"] = 0] = "INTERLEAVED";
    EVertexLayout[EVertexLayout["SEQUENCED"] = 1] = "SEQUENCED";
    EVertexLayout[EVertexLayout["SEPARATED"] = 2] = "SEPARATED";
})(EVertexLayout || (EVertexLayout = {}));
class GLMeshBuilder extends GLMeshBase {
    constructor(gl, state, program, texture = null, layout = EVertexLayout.INTERLEAVED) {
        super(gl, state); // 调用基类的构造方法
        // 为了简单起见，只支持顶点的位置坐标、纹理0坐标、颜色和法线这四种顶点属性格式
        // 表示当前正在输入的顶点属性值
        this._color = new _math_vector4__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0, 0);
        this._texCoord = new _math_vector2__WEBPACK_IMPORTED_MODULE_2__["Vector2"](0, 0);
        this._normal = new _math_vector3__WEBPACK_IMPORTED_MODULE_3__["Vector3"](0, 0, 1);
        // 渲染的数据源
        this._lists = {};
        // 渲染用的VBO
        this._buffers = {};
        // 要渲染的顶点数量
        this._vertCount = 0;
        this._indexCount = -1;
        // 根据attribBits，测试是否使用了下面几种类型的顶点属性格式
        this._hasColor = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasColor(this._attribState);
        this._hasTexcoord = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_0(this._attribState);
        this._hasNormal = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasNormal(this._attribState);
        this._ibo = null;
        // 默认情况下，使用INTERLEAVED存储顶点
        this._layout = layout;
        // 设置当前使用的GLProgram和GLTexture2D对象
        this.program = program;
        this.texture = texture;
        // 先绑定VAO对象
        this.bind();
        // 生成索引缓存
        let buffer = this.gl.createBuffer();
        buffer = this.gl.createBuffer();
        if (buffer === null) {
            throw new Error("WebGLBuffer创建不成功!");
        }
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // interleaved的话：
            // 使用一个arraylist,一个顶点缓存
            // 调用的是GLAttribState.getInterleavedLayoutAttribOffsetMap方法
            this._lists[GLMeshBuilder.INTERLEAVED] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            this._buffers[GLMeshBuilder.INTERLEAVED] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            let map = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getInterleavedLayoutAttribOffsetMap(this._attribState);
            // 调用如下两个方法
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(this.gl, map);
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(this.gl, this._attribState);
        }
        else if (this._layout === EVertexLayout.SEQUENCED) {
            // sequenced的话：
            // 使用n个arraylist,一个顶点缓存
            // 无法在初始化时调用的是getSequencedLayoutAttribOffsetMap方法
            // 无法使用GLAttribState.setAttribVertexArrayPointer方法预先固定地址
            // 能够使用GLAttribState.setAttribVertexArrayState开启顶点属性寄存器
            this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            if (this._hasColor) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            }
            if (this._hasTexcoord) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            }
            if (this._hasNormal) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            }
            buffer = this.gl.createBuffer();
            if (buffer === null) {
                throw new Error("WebGLBuffer创建不成功!");
            }
            this._buffers[GLMeshBuilder.SEQUENCED] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            // sequenced没法预先设置指针，因为是动态的
            // 但是可以预先设置顶点属性状态
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayState(this.gl, this._attribState);
        }
        else {
            // seperated的话：
            // 使用n个arraylist,n个顶点缓存
            // 调用的是getSepratedLayoutAttribOffsetMap方法
            // 能够使用能够使用GLAttribState.setAttribVertexArrayPointer方法预先固定地址
            // 能够使用GLAttribState.setAttribVertexArrayState开启顶点属性寄存器
            // 肯定要有的是位置数据
            this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
            this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME] = buffer;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION, 3, gl.FLOAT, false, 0, 0);
            this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION);
            if (this._hasColor) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
                buffer = this.gl.createBuffer();
                if (buffer === null) {
                    throw new Error("WebGLBuffer创建不成功!");
                }
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION, 4, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION);
            }
            if (this._hasTexcoord) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_BIT, 2, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_BIT);
            }
            if (this._hasNormal) {
                this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = new _common_container_TypedArrayList__WEBPACK_IMPORTED_MODULE_4__["TypedArrayList"](Float32Array);
                buffer = this.gl.createBuffer();
                if (buffer === null) {
                    throw new Error("WebGLBuffer创建不成功!");
                }
                this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME] = buffer;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.vertexAttribPointer(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION, 3, gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION);
            }
            //GLAttribState.setAttribVertexArrayPointer( this.gl, map );
            //GLAttribState.setAttribVertexArrayState( this.gl, this._attribState );
        }
        this.unbind();
    }
    setTexture(tex) {
        this.texture = tex.texture;
    }
    setIBO(data) {
        // 创建ibo
        this._ibo = this.gl.createBuffer();
        if (this._ibo === null) {
            throw new Error("IBO creation fail");
        }
        // 绑定ibo
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
        // 将索引数据上传到ibo中
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
        this._indexCount = data.length;
    }
    // 输入rgba颜色值，取值范围为[ 0 , 1 ]之间,返回this,都是链式操作
    color(r, g, b, a = 1.0) {
        if (this._hasColor) {
            this._color.r = r;
            this._color.g = g;
            this._color.b = b;
            this._color.a = a;
        }
        return this;
    }
    // 输入uv纹理坐标值，返回this,都是链式操作
    texcoord(u, v) {
        if (this._hasTexcoord) {
            this._texCoord.x = u;
            this._texCoord.y = v;
        }
        return this;
    }
    // 输入法线值xyz，返回this,都是链式操作
    normal(x, y, z) {
        if (this._hasNormal) {
            this._normal.x = x;
            this._normal.y = y;
            this._normal.z = z;
        }
        return this;
    }
    // vertex必须要最后调用，输入xyz,返回this,都是链式操作
    vertex(x, y, z) {
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // 针对interleaved存储方式的操作
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            // position
            list.push(x);
            list.push(y);
            list.push(z);
            // texcoord
            if (this._hasTexcoord) {
                list.push(this._texCoord.x);
                list.push(this._texCoord.y);
            }
            // normal
            if (this._hasNormal) {
                list.push(this._normal.x);
                list.push(this._normal.y);
                list.push(this._normal.z);
            }
            // color
            if (this._hasColor) {
                list.push(this._color.r);
                list.push(this._color.g);
                list.push(this._color.b);
                list.push(this._color.a);
            }
        }
        else { // sequenced和separated都是具有多个ArrayList
            // 针对除interleaved存储方式外的操作
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            list.push(x);
            list.push(y);
            list.push(z);
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list.push(this._texCoord.x);
                list.push(this._texCoord.y);
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list.push(this._normal.x);
                list.push(this._normal.y);
                list.push(this._normal.z);
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list.push(this._color.r);
                list.push(this._color.g);
                list.push(this._color.b);
                list.push(this._color.a);
            }
        }
        // 记录更新后的顶点数量
        this._vertCount++;
        return this;
    }
    // 每次调用上述几个添加顶点属性的方法之前，必须要先调用begin方法，返回this指针，链式操作
    begin(drawMode = this.gl.TRIANGLES) {
        this.drawMode = drawMode; // 设置要绘制的mode，7种基本几何图元
        this._vertCount = 0; // 清空顶点数为0
        if (this._layout === EVertexLayout.INTERLEAVED) {
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            list.clear(); // 使用自己实现的动态类型数组，重用
        }
        else {
            // 使用自己实现的动态类型数组，重用
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            list.clear();
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list.clear();
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list.clear();
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list.clear();
            }
        }
        return this;
    }
    // end方法用于渲染操作
    end(mvp) {
        this.program.bind(); // 绑定GLProgram
        this.program.setMatrix4(_WebGLProgram__WEBPACK_IMPORTED_MODULE_5__["GLProgram"].MVPMatrix, mvp); // 载入MVPMatrix uniform变量
        if (this.texture !== null) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            this.program.loadSampler();
        }
        this.bind(); // 绑定VAO
        if (this._layout === EVertexLayout.INTERLEAVED) {
            // 获取数据源
            let list = this._lists[GLMeshBuilder.INTERLEAVED];
            // 获取VBO
            let buffer = this._buffers[GLMeshBuilder.INTERLEAVED];
            // 绑定VBO
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            // 上传渲染数据到VBO中
            this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
        }
        else if (this._layout === EVertexLayout.SEQUENCED) {
            // 针对sequenced存储方式的渲染处理
            let buffer = this._buffers[GLMeshBuilder.SEQUENCED];
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            //用的是预先分配显存机制
            this.gl.bufferData(this.gl.ARRAY_BUFFER, this._attribStride * this._vertCount, this.gl.DYNAMIC_DRAW);
            let map = _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].getSequencedLayoutAttribOffsetMap(this._attribState, this._vertCount);
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, list.subArray());
            if (this._hasTexcoord) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME], list.subArray());
            }
            if (this._hasNormal) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME], list.subArray());
            }
            if (this._hasColor) {
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                this.gl.bufferSubData(this.gl.ARRAY_BUFFER, map[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME], list.subArray());
            }
            // 每次都要重新计算和绑定顶点属性数组的首地址
            _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].setAttribVertexArrayPointer(this.gl, map);
        }
        else {
            // 针对seperated存储方式的渲染数据处理
            // 需要每个VBO都绑定一次
            // position
            let buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            let list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME];
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            // texture
            if (this._hasTexcoord) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
            // normal
            if (this._hasNormal) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
            // color
            if (this._hasColor) {
                buffer = this._buffers[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                list = this._lists[_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME];
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                this.gl.bufferData(this.gl.ARRAY_BUFFER, list.subArray(), this.gl.DYNAMIC_DRAW);
            }
        }
        // GLMeshBuilder不使用索引缓冲区绘制方式，因此调用drawArrays方法
        if (this._ibo !== null) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            //this.gl.bufferData( this.gl.ELEMENT_ARRAY_BUFFER, this._indices.subArray(), this._indexCount );
            this.gl.drawElements(this.drawMode, this._indexCount, this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMode, 0, this._vertCount);
        }
        this.unbind(); // 解绑VAO
        this.program.unbind(); // 解绑GLProgram
    }
}
// 字符串常量key
GLMeshBuilder.SEQUENCED = "SEQUENCED";
GLMeshBuilder.INTERLEAVED = "INTERLEAVED";


/***/ }),

/***/ "./src/webgl/WebGLProgram.ts":
/*!***********************************!*\
  !*** ./src/webgl/WebGLProgram.ts ***!
  \***********************************/
/*! exports provided: GLProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLProgram", function() { return GLProgram; });
/* harmony import */ var _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLAttribState */ "./src/webgl/WebGLAttribState.ts");
/* harmony import */ var _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGLShaderSource */ "./src/webgl/WebGLShaderSource.ts");
/* harmony import */ var _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebGLHelper */ "./src/webgl/WebGLHelper.ts");



/*
比较特别的是Texture Unit
glActiveTexture 激活某个TextureUnit
glBindTexture   激活的TextureUnit中放入纹理
glUniform1i     将unit所绑定的纹理sampler传输到GPU

绘制时，不需要ActiveTexture了，只要bingTexture就可以了
*/
// camera相关transform uniform可以预先设定
// texture相关，固定化，可以预先设定
// 其他需要每帧更新
class GLProgram {
    constructor(context, attribState, vsShader = null, fsShader = null) {
        this._vsShaderDefineStrings = [];
        this._fsShaderDefineStrings = [];
        this.gl = context;
        this._attribState = attribState; //最好从shader中抽取
        this.bindCallback = null;
        this.unbindCallback = null;
        let shader = _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createShader(this.gl, _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["EShaderType"].VS_SHADER);
        if (shader === null) {
            throw new Error("Create Vertex Shader Object Fail!!!");
        }
        this.vsShader = shader;
        shader = null;
        shader = _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createShader(this.gl, _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["EShaderType"].FS_SHADER);
        if (shader === null) {
            throw new Error("Create Fragment Shader Object Fail!!!");
        }
        this.fsShader = shader;
        let program = _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].createProgram(this.gl);
        if (program === null) {
            throw new Error("Create WebGLProgram Object Fail!!!");
        }
        this.program = program;
        this.attribMap = {};
        this.uniformMap = {};
        if (vsShader !== null && fsShader !== null) {
            this.loadShaders(vsShader, fsShader);
        }
        this.name = name;
    }
    get attribState() {
        return this._attribState;
    }
    progromBeforeLink(gl, program) {
        //链接前才能使用bindAttribLocation函数
        //1 attrib名字必须和shader中的命名要一致
        //2 数量必须要和mesh中一致
        //3 mesh中的数组的component必须固定
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasPosition(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].POSITION_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasNormal(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].NORMAL_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_0(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTexCoord_1(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD1_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TEXCOORD1_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasColor(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].COLOR_NAME);
        }
        if (_WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].hasTangent(this._attribState)) {
            gl.bindAttribLocation(program, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TANGENT_LOCATION, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].TANGENT_NAME);
        }
    }
    // 链接后的回调函数实际上在本类中是多余的
    // 因为我们已经固定了attribue的索引号以及getUniformLocation方法获取某个uniform变量
    // 这里只是为了输出当前Program相关的uniform和attribute变量的信息
    progromAfterLink(gl, program) {
        //获取当前active状态的attribute和uniform的数量
        //很重要一点，active_attributes/uniforms必须在link后才能获得
        _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].getProgramActiveAttribs(gl, program, this.attribMap);
        _WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].getProgramAtciveUniforms(gl, program, this.uniformMap);
        console.log(JSON.stringify(this.attribMap));
        console.log(JSON.stringify(this.uniformMap));
    }
    // 在Vertex Shader中动态添加宏
    addVSShaderMacro(str) {
        if (str.indexOf("#define ") === -1) {
            str = "#define " + str;
        }
        this._vsShaderDefineStrings.push(str);
    }
    // 在Fragment Shader中动态添加宏
    addFSShaderMacro(str) {
        if (str.indexOf("#define ") === -1) {
            str = "#define " + str;
        }
        this._fsShaderDefineStrings.push(str);
    }
    // vs fs都要添加的宏，例如在VS / FS中添加如下宏：
    // #ifdef GL_ES
    //   precision highp float;
    // #endif
    addShaderMacro(str) {
        this.addVSShaderMacro(str);
        this.addFSShaderMacro(str);
    }
    loadShaders(vs, fs) {
        if (this._vsShaderDefineStrings.length > 0) {
            let join = this._vsShaderDefineStrings.join("\n");
            vs = join + vs;
        }
        if (this._fsShaderDefineStrings.length > 0) {
            let join = this._fsShaderDefineStrings.join("\n");
            fs = join + fs;
        }
        if (_WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].compileShader(this.gl, vs, this.vsShader) === false) {
            throw new Error(" WebGL顶点Shader链接不成功! ");
        }
        if (_WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].compileShader(this.gl, fs, this.fsShader) === false) {
            throw new Error(" WebGL像素片段Shader链接不成功! ");
        }
        if (_WebGLHelper__WEBPACK_IMPORTED_MODULE_2__["GLHelper"].linkProgram(this.gl, this.program, this.vsShader, this.fsShader, this.progromBeforeLink.bind(this), this.progromAfterLink.bind(this)) === false) {
            throw new Error(" WebGLProgram链接不成功! ");
        }
        console.log(JSON.stringify(this.attribMap));
    }
    bind() {
        this.gl.useProgram(this.program);
        if (this.bindCallback !== null) {
            this.bindCallback(this);
        }
    }
    unbind() {
        if (this.unbindCallback !== null) {
            this.unbindCallback(this);
        }
        this.gl.useProgram(null);
    }
    getUniformLocation(name) {
        return this.gl.getUniformLocation(this.program, name);
    }
    getAttributeLocation(name) {
        return this.gl.getAttribLocation(this.program, name);
    }
    setAttributeLocation(name, loc) {
        this.gl.bindAttribLocation(this.program, loc, name);
    }
    setInt(name, i) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1i(loc, i);
            return true;
        }
        return false;
    }
    setFloat(name, f) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1f(loc, f);
            return true;
        }
        return false;
    }
    setVector2(name, v2) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            // this.gl.uniform2fv( loc, v2.values );
            this.gl.uniform2fv(loc, [v2.x, v2.y]);
            return true;
        }
        return false;
    }
    setVector3(name, v3) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            // this.gl.uniform3fv( loc, v3.values );
            this.gl.uniform3fv(loc, [v3.x, v3.y, v3.z]);
            return true;
        }
        return false;
    }
    setVector4(name, v4) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            // this.gl.uniform4fv( loc, v4.values );
            this.gl.uniform4fv(loc, [v4.x, v4.y, v4.z, v4.w]);
            return true;
        }
        return false;
    }
    setQuat(name, q) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform4fv(loc, q.values);
            return true;
        }
        return false;
    }
    setMatrix3(name, mat) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniformMatrix3fv(loc, false, mat.values);
            return true;
        }
        return false;
    }
    setMatrix4(name, mat) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniformMatrix4fv(loc, false, mat.values);
            return true;
        }
        return false;
    }
    setSampler(name, sampler) {
        let loc = this.getUniformLocation(name);
        if (loc) {
            this.gl.uniform1i(loc, sampler);
            return true;
        }
        return false;
    }
    loadModeViewMatrix(mat) {
        return this.setMatrix4(GLProgram.MVMatrix, mat);
    }
    loadSampler(unit = 0) {
        return this.setSampler(GLProgram.Sampler, unit);
    }
    /*
    public static createDefaultTextureProgram ( gl: WebGLRenderingContext ): GLProgram
    {
        let pro: GLProgram = new GLProgram( gl, GLAttribState.POSITION_BIT | GLAttribState.TEXCOORD_BIT,
            GLShaderSource.textureShader.vs, GLShaderSource.textureShader.fs );
        return pro;
    }

    public static createDefaultColorProgram ( gl: WebGLRenderingContext ): GLProgram
    {
        let pro: GLProgram = new GLProgram( gl, GLAttribState.POSITION_BIT | GLAttribState.COLOR_BIT,
            GLShaderSource.colorShader.vs, GLShaderSource.colorShader.fs );
        return pro;
    }
    */
    static createDefaultTextureProgram(gl) {
        let pro = new GLProgram(gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].makeVertexAttribs(true, false, false, false, false), _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].textureShader.vs, _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].textureShader.fs);
        return pro;
    }
    static createDefaultColorProgram(gl) {
        let pro = new GLProgram(gl, _WebGLAttribState__WEBPACK_IMPORTED_MODULE_0__["GLAttribState"].makeVertexAttribs(false, false, false, false, true), _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].colorShader.vs, _WebGLShaderSource__WEBPACK_IMPORTED_MODULE_1__["GLShaderSource"].colorShader.fs);
        return pro;
    }
}
// uniforms相关定义
//vs常用的uniform命名
GLProgram.MVMatrix = "uMVMatrix"; // 模型视图矩阵
GLProgram.ModelMatrix = "uModelMatrix"; // 模型矩阵
GLProgram.ViewMatrix = "uViewMatrix"; // 视矩阵
GLProgram.ProjectMatrix = "uProjectMatrix"; // 投影矩阵
GLProgram.NormalMatrix = "uNormalMatrix"; // 法线矩阵                  
GLProgram.MVPMatrix = "uMVPMatrix"; // 模型_视图_投影矩阵
GLProgram.Color = "uColor"; // 颜色值
//ps常用的uniform命名
GLProgram.Sampler = "uSampler"; // 纹理取样器
GLProgram.DiffuseSampler = "uDiffuseSampler"; // 漫反射取样器
GLProgram.NormalSampler = "uNormalSampler"; // 法线取样器
GLProgram.SpecularSampler = "uSpecularSampler"; // 高光取样器
GLProgram.DepthSampler = "uDepthSampler"; // 深度取样器


/***/ }),

/***/ "./src/webgl/WebGLProgramCache.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLProgramCache.ts ***!
  \****************************************/
/*! exports provided: GLProgramCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLProgramCache", function() { return GLProgramCache; });
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");

// 单例设计模式
class GLProgramCache {
    // 私有构造函数
    constructor() {
        this._dict = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
        console.log("create new GLProgramCache!!");
    }
    set(key, value) {
        this._dict.insert(key, value);
    }
    // 可能返回undefined类型
    getMaybe(key) {
        let ret = this._dict.find(key);
        return ret;
    }
    // 如果返回undefined，直接抛错
    getMust(key) {
        let ret = this._dict.find(key);
        if (ret === undefined) {
            throw new Error(key + "对应的Program不存在!!!");
        }
        return ret;
    }
    remove(key) {
        return this._dict.remove(key);
    }
}
// 只初始化一次，使用的是public static readonly声明方式
GLProgramCache.instance = new GLProgramCache();


/***/ }),

/***/ "./src/webgl/WebGLShaderSource.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLShaderSource.ts ***!
  \****************************************/
/*! exports provided: GLShaderSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLShaderSource", function() { return GLShaderSource; });
const GLShaderSource = {
    colorShader: {
        vs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        attribute vec3 aPosition;
        attribute vec4 aColor;
    
        uniform mat4 uMVPMatrix;
    
        varying vec4 vColor;
    
        void main(void){
            gl_Position = uMVPMatrix * vec4(aPosition,1.0);
            vColor = aColor;
        }
        `,
        fs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        varying  vec4 vColor;
        void main(void){
            gl_FragColor = vColor;
        }        
        `
    },
    textureShader: {
        vs: `
        #ifdef GL_ES
            precision highp float;
        #endif

        attribute vec3 aPosition;
        attribute vec2 aTexCoord;
        uniform mat4 uMVPMatrix;
        varying vec2 vTextureCoord;
        void main(void) {
           gl_Position = uMVPMatrix * vec4(aPosition,1.0);;
           vTextureCoord = aTexCoord;
        }
    `,
        fs: `
      #ifdef GL_ES
      precision highp float;
      #endif

      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      void main(void) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
      }
    `
    }
};


/***/ }),

/***/ "./src/webgl/WebGLTexture.ts":
/*!***********************************!*\
  !*** ./src/webgl/WebGLTexture.ts ***!
  \***********************************/
/*! exports provided: EGLTexWrapType, GLTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGLTexWrapType", function() { return EGLTexWrapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTexture", function() { return GLTexture; });
/* harmony import */ var _WebGLHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGLHelper */ "./src/webgl/WebGLHelper.ts");

var EGLTexWrapType;
(function (EGLTexWrapType) {
    EGLTexWrapType[EGLTexWrapType["GL_REPEAT"] = 0] = "GL_REPEAT";
    EGLTexWrapType[EGLTexWrapType["GL_MIRRORED_REPEAT"] = 1] = "GL_MIRRORED_REPEAT";
    EGLTexWrapType[EGLTexWrapType["GL_CLAMP_TO_EDGE"] = 2] = "GL_CLAMP_TO_EDGE";
})(EGLTexWrapType || (EGLTexWrapType = {}));
class GLTexture {
    constructor(gl, name = '') {
        this.gl = gl;
        this.isMipmap = false;
        this.width = this.height = 0;
        this.format = gl.RGBA;
        this.type = gl.UNSIGNED_BYTE;
        let tex = gl.createTexture();
        if (tex === null) {
            throw new Error("WebGLTexture创建不成功!");
        }
        this.texture = tex;
        this.target = gl.TEXTURE_2D;
        this.name = name;
        this.wrap();
        this.filter();
    }
    // 下面三个静态辅助方法用于生成纹理的mipmap使用
    // 1、静态辅助数学方法，判断参数x（必须是4）是否是2的n次方，即x是不是1、2、4、8、16、32、64、.....
    static isPowerOfTwo(x) {
        return (x & (x - 1)) == 0;
    }
    // 2、静态辅助数学方法，给定整数参数x，取下一个2的n次方数
    // 如果x为3，则返回4
    // 如果x为4，则返回4
    // 如果x为5，则返回8
    // 依次类推
    static getNextPowerOfTwo(x) {
        if (x <= 0) {
            throw new Error("参数必须要大于0!");
        }
        --x;
        for (var i = 1; i < 32; i <<= 1) {
            x = x | x >> i;
        }
        return x + 1;
    }
    // 3、将非2的n次方的srcImage转换成2的n次方的CanvasRenderingContext2D对象
    // 然后后续用来生成mipmap纹理
    static createPowerOfTwoCanvas(srcImage) {
        let canvas = document.createElement("canvas");
        canvas.width = GLTexture.getNextPowerOfTwo(srcImage.width);
        canvas.height = GLTexture.getNextPowerOfTwo(srcImage.height);
        let ctx = canvas.getContext("2d");
        if (ctx === null) {
            throw new Error("未能成功创建CanvasRenderingContext2D对象");
        }
        ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height, 0, 0, canvas.width, canvas.height);
        return canvas;
    }
    // 下面的静态方法和成员变量用来创建默认的2的n方的纹理对象
    static createDefaultTexture(gl) {
        let step = 4;
        let canvas = document.createElement('canvas');
        canvas.width = 32 * step;
        canvas.height = 32 * step;
        let context = canvas.getContext("2d");
        if (context === null) {
            alert("离屏Canvas获取渲染上下文失败！");
            throw new Error("离屏Canvas获取渲染上下文失败！");
        }
        for (let i = 0; i < step; i++) {
            for (let j = 0; j < step; j++) {
                let idx = step * i + j;
                context.save();
                context.fillStyle = GLTexture.Colors[idx];
                context.fillRect(i * 32, j * 32, 32, 32);
                context.restore();
            }
        }
        let tex = new GLTexture(gl);
        tex.wrap();
        tex.upload(canvas);
        return tex;
    }
    bind(unit = 0) {
        if (this.texture !== null) {
            this.gl.activeTexture(this.gl.TEXTURE0 + unit);
            this.gl.bindTexture(this.target, this.texture);
        }
    }
    unbind() {
        if (this.texture) {
            this.gl.bindTexture(this.target, null);
        }
    }
    //TEXTURE_MIN_FILTER: NEAREST_MIPMAP_LINEAR(默认)
    //TEXTURE_MAG_FILTER: LINEAR(默认)
    filter(minLinear = true, magLinear = true) {
        // 在设置filter时先要绑定当前的纹理目标
        this.gl.bindTexture(this.target, this.texture);
        if (this.isMipmap) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, minLinear ? this.gl.LINEAR_MIPMAP_LINEAR : this.gl.NEAREST_MIPMAP_NEAREST);
        }
        else {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, minLinear ? this.gl.LINEAR : this.gl.NEAREST);
        }
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, magLinear ? this.gl.LINEAR : this.gl.NEAREST);
    }
    wrap(mode = EGLTexWrapType.GL_REPEAT) {
        this.gl.bindTexture(this.target, this.texture);
        if (mode === EGLTexWrapType.GL_CLAMP_TO_EDGE) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        }
        else if (mode === EGLTexWrapType.GL_REPEAT) {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
        }
        else {
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.gl.MIRRORED_REPEAT);
            this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.gl.MIRRORED_REPEAT);
        }
    }
    destory() {
        this.gl.deleteTexture(this.texture);
    }
    upload(source, unit = 0, mipmap = false) {
        this.bind(unit); // 先绑定当前要操作的WebGLTexture对象，默认为0
        //否则贴图会倒过来
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1);
        this.width = source.width;
        this.height = source.height;
        if (mipmap === true) // 使用mipmap生成纹理
         {
            let isWidthPowerOfTwo = GLTexture.isPowerOfTwo(this.width);
            let isHeightPowerOfTwo = GLTexture.isPowerOfTwo(this.height);
            // 如果源图像的宽度和高度都是2的n次方格式的，则直接载入像素数据然后调用generateMipmap方法
            if (isWidthPowerOfTwo === true && isHeightPowerOfTwo === true) {
                this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, source);
                this.gl.generateMipmap(this.target);
            }
            else // 否则说明至少有一个不是2的n次方的，需要特别处理
             {
                let canvas = GLTexture.createPowerOfTwoCanvas(source);
                this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, canvas);
                _WebGLHelper__WEBPACK_IMPORTED_MODULE_0__["GLHelper"].checkGLError(this.gl);
                this.gl.generateMipmap(this.target);
                _WebGLHelper__WEBPACK_IMPORTED_MODULE_0__["GLHelper"].checkGLError(this.gl);
                this.width = canvas.width;
                this.height = canvas.height;
            }
            this.isMipmap = true;
        }
        else {
            this.isMipmap = false;
            this.gl.texImage2D(this.target, 0, this.format, this.format, this.type, source);
        }
        console.log("当前纹理尺寸为: ", this.width, this.height);
        this.unbind(); //// 解绑当前要操作的WebGLTexture对象
    }
}
// css标准色字符串
GLTexture.Colors = [
    'aqua',
    'black',
    'blue',
    'fuchsia',
    'gray',
    'green',
    'lime',
    'maroon',
    'navy',
    'olive',
    'orange',
    'purple',
    'red',
    'silver',
    'teal',
    'yellow',
    'white' //白色
];


/***/ }),

/***/ "./src/webgl/WebGLTextureCache.ts":
/*!****************************************!*\
  !*** ./src/webgl/WebGLTextureCache.ts ***!
  \****************************************/
/*! exports provided: GLTextureCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTextureCache", function() { return GLTextureCache; });
/* harmony import */ var _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/container/Dictionary */ "./src/common/container/Dictionary.ts");

class GLTextureCache {
    // 私有构造函数
    constructor() {
        this._dict = new _common_container_Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"]();
    }
    set(key, value) {
        this._dict.insert(key, value);
    }
    getMaybe(key) {
        let ret = this._dict.find(key);
        return ret;
    }
    getMust(key) {
        let ret = this._dict.find(key);
        if (ret === undefined) {
            throw new Error(key + "对应的Program不存在!!!");
        }
        return ret;
    }
    remove(key) {
        return this._dict.remove(key);
    }
}
GLTextureCache.instance = new GLTextureCache();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9Sb3RhdGluZ0N1YmVBcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0V2ZW50SW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb250YWluZXIvRGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnRhaW5lci9UeXBlZEFycmF5TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0NhbWVyYUFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvRHJhd0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0ZydXN0dW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9QcmltaXRpdmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL01hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeDQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h0dHBSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEF0dHJpYlN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xNYXRyaXhTdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFByb2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL1dlYkdMUHJvZ3JhbUNhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFNoYWRlclNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xUZXh0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFRleHR1cmVDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGc0Q7QUFDQTtBQUVXO0FBQ25CO0FBQ0E7QUFDUztBQUNTO0FBQ0E7QUFDYjtBQUNZO0FBQ0o7QUFHcEQsTUFBTSx1QkFBd0IsU0FBUSw0RUFBaUI7SUEyQjFELFlBQXFCLE1BQXlCO1FBRTFD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SyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV4QiwwQkFBMEI7UUFDMUIscURBQU8sQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQVcsQ0FBQyxxREFBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBVyxDQUFDLHFEQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVwQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFF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RUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRyxXQUFXO1FBQzFGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUksV0FBVztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsV0FBVztRQUMxRixPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQyxNQUFNLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLFdBQVc7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsV0FBVztRQUMxRixPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQyxNQUFNLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUcsV0FBVztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFHLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFJLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUcsV0FBVztRQUMzRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFJLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUMsQ0FBSyxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBSSxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFHLFdBQVc7UUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNuQixLQUFLO1FBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFFLFdBQVc7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENB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Q0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUM5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBRTlGLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFHLEdBQUc7WUFDOUYsT0FBTyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUU5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBQzlGLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFHLEdBQUc7WUFFOUYsT0FBTyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUM5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBRTlGLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7U0FDdEI7UUFDRCxPQUFPLENBQUMsRUFBRSxD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R0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFdBQVc7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixnQ0FBZ0M7UUFDaEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCw2QkFBNkI7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QscUJBQXFCO1FBQ3JCLDJEQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RiwyREFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsMkRBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLDJEQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RiwyREFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsMkRBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLFdBQVc7UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDOUMsMkRBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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SSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJO1lBQ0osSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxTQUFTLEVBQ25DO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJO1lBQ0osSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxXQUFXLEVBQ3JDO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FB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U0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFFLENBQUMsQ0FBRSxJQUFJO1FBQzVGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxJQUFJLHFEQUFPLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLE9BQU87UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFFTSxNQUFNLFNBQVM7SUFPbEIsWUFBcUIsS0FBYSxFQUFFLEVBQUUsS0FBYSxFQUFFLEVB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QUMsQ0FBQyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDL0csSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLGdEQUFPLENBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSTtRQUUvRyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksZ0RBQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUMsQ0FBRSxJQUFJO1FBQy9HLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxnREFBTyxDQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFFL0csSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLGdEQUFPLENBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSTtRQUMvRyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksZ0RBQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdB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QUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUk7SUFDZixDQUFDO0lBR0QsdURBQXVEO0lBRWhELFdBQVc7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENB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RyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUUzQixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNuRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ3BHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ25HLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFFcEcsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRU0sT0FBTztRQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDckcsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLElBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNoSCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRSxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUMvRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDO1FBQ2hILElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNqSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDO1FBQ2pILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDbEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNqSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDbEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUVqSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sVUFBVSxDQUFHLEdBQVk7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUMxRixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDMUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQzVGLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRW5HLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQyxJQUFJLEdBQUcsR0FBRyxDQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFFLENBQUM7UUFFNUcsSUFBSyxDQUFDLEdBQUc7WUFDTCxPQUFPLEtBQUssQ0FBQztRQUVqQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDdEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxRQUFRLENBQUMsTUFBZTtRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUUzQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBRS9ELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTSxNQUFNLENBQUMsT0FBTyxDQUFFLEVBQVcsRUFBRSxFQUFXLEVBQUUsTUFBc0I7UUFDbkUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ3RFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUN4RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUUvRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQ3hFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRS9FLElBQUssTUFBTSxFQUNYO1lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBRTtnQkFDUixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBRTdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRzthQUNoRCxDQUFFLENBQUM7WUFF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LE1BQWU7UUFFMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFHLEtBQWEsRUFBRSxJQUFhO1FBRXhDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFaEQsSUFBSyxDQUFDLE1BQU07WUFDUixPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLE1BQU0sS0FBSyxDQUFDLEVBQ2pCO1lBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDcEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNaLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDWixDQUFDLElBQUksTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDOUYsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFH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S0FBSyxDQUFFLENBQUM7UUFDckMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBRTNDLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENB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QUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO1lBRWxGLFVBQVU7WUFDVixJQUFLLElBQUksQ0FBQyxZQUFZLEVBQ3RCO2dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLCtEQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ3RELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLCtEQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUUsQ0FBQzthQUNyRjtZQUVELFNBQVM7WUFDVCxJQUFLLElBQUksQ0FBQyxVQUFVLEVBQ3BCO2dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLCtEQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7Z0JBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLCtEQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUUsQ0FBQzthQUNyRjtZQUVELFFBQVE7WUFDUixJQUFLLElBQUksQ0FBQyxTQUFTLEVBQ25CO2dCQUNJLE1BQU0sR0FBRyxJQUFJLENB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Ozs7Ozs7Ozs7O0FDcElOO0FBQUE7QUFBQTtBQUE0RDtBQUVyRCxNQUFNLGNBQWM7SUF5QnZCLFNBQVM7SUFDVDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1RUFBVSxFQUFhLENBQUM7SUFDN0MsQ0FBQztJQXpCTSxHQUFHLENBQUMsR0FBVSxFQUFDLEtBQWU7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxRQUFRLENBQUMsR0FBVTtRQUN0QixJQUFJLEdBQUcsR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVU7UUFDckIsSUFBSSxHQUFHLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUcsR0FBRyxLQUFLLFNBQVMsRUFBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOztBQXJCc0IsdUJBQVEsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBHTFByb2dyYW0gfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMUHJvZ3JhbVwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBHTFN0YXRpY01lc2ggfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5pbXBvcnQgeyBDYW1lcmFBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvbGliL0NhbWVyYUFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vc3JjL21hdGgvdmVjdG9yM1wiO1xyXG5pbXBvcnQgeyBNYXRyaXg0IH0gZnJvbSBcIi4uL3NyYy9tYXRoL21hdHJpeDRcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiLi4vc3JjL3V0aWxzL0h0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZUNhY2hlIH0gZnJvbSBcIi4uL3NyYy93ZWJnbC9XZWJHTFRleHR1cmVDYWNoZVwiO1xyXG5pbXBvcnQgeyBHTFByb2dyYW1DYWNoZSB9IGZyb20gXCIuLi9zcmMvd2ViZ2wvV2ViR0xQcm9ncmFtQ2FjaGVcIjtcclxuaW1wb3J0IHsgRHJhd0hlbHBlciB9IGZyb20gXCIuLi9zcmMvbGliL0RyYXdIZWxwZXJcIjtcclxuaW1wb3J0IHsgRUF4aXNUeXBlLCBNYXRoSGVscGVyIH0gZnJvbSBcIi4uL3NyYy9tYXRoL01hdGhIZWxwZXJcIjtcclxuaW1wb3J0IHsgQ3ViZSwgR2VvbWV0cnlEYXRhIH0gZnJvbSBcIi4uL3NyYy9saWIvUHJpbWl0aXZlc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNLZXlCb2FyZEV2ZW50IH0gZnJvbSBcIi4uL3NyYy9jb21tb24vRXZlbnRJbnRlcmFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uIGV4dGVuZHMgQ2FtZXJhQXBwbGljYXRpb25cclxue1xyXG4gICAgLy8gR1BV5Y+v57yW56iL566h57q/5a+56LGh77yM5ZCO6Z2i56ug6IqC6K+m6KejXHJcbiAgICBjb2xvclByb2dyYW06IEdMUHJvZ3JhbTsgICAvLyDkvb/nlKjnurnnkIZHUFUgUHJvZ3JhbeWvueixoVxyXG4gICAgdGV4dHVyZVByb2dyYW06IEdMUHJvZ3JhbTsgLy8g5L2/55So6aKc6ImyR1BVIFByb2dyYW3lr7nosaFcclxuXHJcbiAgICAvLyDnurnnkIblr7nosaFcclxuICAgIGN1cnJUZXhJZHg6IG51bWJlcjsgLy8g55Sx5LqOY3ViZeS8mui/m+ihjOWRqOiAjOWkjeWni+eahOaNoue6ueeQhuaTjeS9nO+8jOWboOatpOmcgOimgeiusOW9leW9k+WJjee6ueeQhueahOe0ouW8leWPt1xyXG4gICAgdGV4dHVyZXM6IEdMVGV4dHVyZVtdOyAvLyDpnIDopoHkuIDkuKrmlbDnu4Tkv53lrZjlpJrkuKrnurnnkIZcclxuXHJcbiAgICAvLyDnq4vmlrnkvZPmuLLmn5PmlbDmja7vvIzlkI7nu63nq6DoioLor6bop6NcclxuICAgIGN1YmU6IEN1YmU7ICAgLy8g5Yeg5L2V5L2T55qE5pWw5o2u6KGo6L6+5byPXHJcbiAgICBjdWJlVkFPOiBHTFN0YXRpY01lc2g7IC8vIOWHoOS9leS9k+eahOa4suafk+aVsOaNrua6kFxyXG5cclxuICAgIC8vIOeri+aWueS9k+eahOinkui/kOWKqOebuOWFs+WPmOmHj1xyXG4gICAgY3ViZUFuZ2xlOiBudW1iZXI7ICAvLyBjdWJl55qE6KeS5L2N56e7XHJcbiAgICBjdWJlU3BlZWQ6IG51bWJlcjsgIC8vIGN1YmXnmoTop5LpgJ/luqZcclxuICAgIGN1YmVNYXRyaXg6IE1hdHJpeDQ7ICAgLy8g5ZCI5oiQ55qEY3ViZeeahOS4lueVjOefqemYtVxyXG5cclxuICAgIC8vIOS4ieinkuW9olxyXG4gICAgdHJpQW5nbGU6IG51bWJlcjsgIC8vIOS4ieinkuW9oueahOinkuS9jeenu1xyXG4gICAgdHJpU3BlZWQ6IG51bWJlcjsgIC8vIOS4ieinkuW9oueahOinkumAn+W6plxyXG4gICAgdHJpVGltZXJJZDogbnVtYmVyOyAvLyDnlLHkuo7kuInop5LlvaLkvb/nlKjplK7nm5jmjqfliLbnmoTmm7TmlrDmlrnlvI/vvIzpnIDopoHmt7vliqDlkozliKDpmaTmk43kvZzvvIzpnIDopoHlrprml7blmahpZFxyXG4gICAgdHJpTWF0cml4OiBNYXRyaXg0OyAvLyDlkIjmiJDnmoTkuInop5LlvaLnmoTkuJbnlYznn6npmLVcclxuXHJcbiAgICBwcml2YXRlIF9oaXRBeGlzOiBFQXhpc1R5cGU7ICAvLyDkuLrkuobmlK/mjIHpvKDmoIfngrnpgInvvIzorrDlvZXpgInkuK3nmoTlnZDmoIfovbTnmoRlbnVt5YC8XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcywgeyBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlIH0sIHRydWUgKTsgLy8g6LCD55So5Z+657G75p6E6YCg5Ye95pWwXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluinkuS9jeenu+WSjOinkumAn+W6plxyXG4gICAgICAgIHRoaXMuY3ViZUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLnRyaUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmN1YmVTcGVlZCA9IDEwMDtcclxuICAgICAgICB0aGlzLnRyaVNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLnRyaVRpbWVySWQgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyVGV4SWR4ID0gMDtcclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKCBHTFRleHR1cmVDYWNoZS5pbnN0YW5jZS5nZXRNdXN0KCBcImRlZmF1bHRcIiApICk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuWwgeijheWQjueahEdMUHJvZ3Jhbeexu1xyXG4gICAgICAgIHRoaXMudGV4dHVyZVByb2dyYW0gPSBHTFByb2dyYW1DYWNoZS5pbnN0YW5jZS5nZXRNdXN0KCBcInRleHR1cmVcIiApO1xyXG4gICAgICAgIHRoaXMuY29sb3JQcm9ncmFtID0gR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2UuZ2V0TXVzdCggXCJjb2xvclwiICk7XHJcblxyXG4gICAgICAgIHRoaXMuY3ViZSA9IG5ldyBDdWJlKCAwLjUsIDAuNSwgMC41ICk7XHJcbiAgICAgICAgbGV0IGRhdGE6IEdlb21ldHJ5RGF0YSA9IHRoaXMuY3ViZS5tYWtlR2VvbWV0cnlEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5jdWJlVkFPID0gZGF0YS5tYWtlU3RhdGljVkFPKCB0aGlzLmdsICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hpdEF4aXMgPSBFQXhpc1R5cGUuTk9ORTsgLy8g5Yid5aeL5YyW5pe25rKh6YCJ5Lit5Lu75L2V5LiA5p2h5Z2Q5qCH6L20XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOS4lueVjOefqemYtemDveS4uuW9kuS4gOWMluefqemYtVxyXG4gICAgICAgIHRoaXMuY3ViZU1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy50cmlNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG5cclxuICAgICAgICAvLyDosIPmlbTmkYTlg4/mnLrnmoTkvY3nva5cclxuICAgICAgICB0aGlzLmNhbWVyYS56ID0gODtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW5kZXJDdWJlICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g57uR5a6a6KaB57uY5Yi255qEdGV4dXRyZeWSjHByb2dyYW1cclxuICAgICAgICB0aGlzLnRleHR1cmVzWyB0aGlzLmN1cnJUZXhJZHggXS5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlUHJvZ3JhbS5sb2FkU2FtcGxlcigpO1xyXG5cclxuICAgICAgICAvLyDnu5jliLbnq4vmlrnkvZNcclxuICAgICAgICB0aGlzLm1hdFN0YWNrLmxvYWRJZGVudGl0eSgpO1xyXG5cclxuICAgICAgICAvLyDnrKzkuIDkuKrmuLLmn5PloIbmoIjmk43kvZxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucHVzaE1hdHJpeCgpOyAvLyDnn6npmLXov5vmoIhcclxuICAgICAgICAgICAgdGhpcy5tYXRTdGFjay5yb3RhdGUoIHRoaXMuY3ViZUFuZ2xlLCBWZWN0b3IzLnVwLCBmYWxzZSApOyAvLyDku6Xop5LluqYo6Z2e5byn5bqmKeS4uuWNleS9je+8jOavj+W4p+aXi+i9rFxyXG4gICAgICAgICAgICAvLyDlkIjmiJBtb2RlbFZpZXdQcm9qZWN0aW9u55+p6Zi1XHJcbiAgICAgICAgICAgIE1hdHJpeDQucHJvZHVjdCggdGhpcy5jYW1lcmEudmlld1Byb2plY3Rpb25NYXRyaXgsIHRoaXMubWF0U3RhY2subW9kZWxWaWV3TWF0cml4LCB0aGlzLmN1YmVNYXRyaXggKTtcclxuICAgICAgICAgICAgLy8g5bCG5ZCI5oiQ55qE55+p6Zi157uZR0xQcm9ncmFt5a+56LGhXHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZVByb2dyYW0uc2V0TWF0cml4NCggR0xQcm9ncmFtLk1WUE1hdHJpeCwgdGhpcy5jdWJlTWF0cml4ICk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZVZBTy5kcmF3KCk7IC8vIOS9v+eUqOW9k+WJjee7keWumueahHRleHR1cmXlkoxwcm9ncmFt57uY5Yi2Y3ViZVZhb+WvueixoVxyXG4gICAgICAgICAgICAvLyDkvb/nlKjovoXliqnmlrnms5Xnu5jliLblnZDmoIfns7tcclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3Q29vcmRTeXN0ZW0oIHRoaXMuYnVpbGRlciwgdGhpcy5jdWJlTWF0cml4LCB0aGlzLl9oaXRBeGlzLCAxICk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucG9wTWF0cml4KCk7IC8vIOefqemYteWHuuagiFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Kej6Zmk57uR5a6a55qEdGV4dHVyZeWSjHByb2dyYW1cclxuICAgICAgICB0aGlzLnRleHR1cmVQcm9ncmFtLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXNbIHRoaXMuY3VyclRleElkeCBdLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbmRlclRyaWFuZ2xlICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g56aB5q2i5riy5p+T5LiJ6KeS5b2i5pe25ZCv55So6IOM6Z2i5YmU6Zmk5Yqf6IO9XHJcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKCB0aGlzLmdsLkNVTExfRkFDRSApO1xyXG4gICAgICAgIC8vIOeUseS6juS4ieinkuW9ouS9v+eUqOminOiJsivkvY3nva7kv6Hmga/ov5vooYznu5jliLbvvIzlm6DmraTopoHnu5HlrprlvZPliY3nmoRHUFUgUHJvZ3JhbeS4umNvbG9yUHJvZ3JhbVxyXG4gICAgICAgIHRoaXMuY29sb3JQcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucHVzaE1hdHJpeCgpOyAvLyDmlrDkuqfnlJ/kuIDkuKrnn6npmLVcclxuICAgICAgICAgICAgLy8g56uL5pa55L2T57uY5Yi25ZyoQ2FudmFz55qE5Lit5b+DXHJcbiAgICAgICAgICAgIC8vIOiAjOS4ieinkuW9ouWImee7mOWItuWcqOWQkeW3pu+8iOi0n+WPt++8ieW5s+enuzLkuKrljZXkvY3lpITnmoTkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5tYXRTdGFjay50cmFuc2xhdGUoIG5ldyBWZWN0b3IzKCAtMiwgMCwgMCApICk7XHJcblxyXG4gICAgICAgICAgICAvLyDkvb/nlKjlvKfluqbvvIznu5Va6L206L+b6KGMUm9sbOaXi+i9rFxyXG4gICAgICAgICAgICB0aGlzLm1hdFN0YWNrLnJvdGF0ZSggdGhpcy50cmlBbmdsZSwgVmVjdG9yMy5mb3J3YXJkLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAvLyDkvb/nlKjnsbvkvLxPcGVuR0wxLjHnmoTnq4vljbPnu5jliLbmqKHlvI9cclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmJlZ2luKCk7IC8vIOW8gOWni+e7mOWItu+8jGRlZmF0dWzkvb/nlKhnbC5UUklBTkdMRVPmlrnlvI/nu5jliLZcclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmNvbG9yKCAxLCAwLCAwICkudmVydGV4KCAtMC41LCAwLCAwICk7ICAvLyDkuInop5LlvaLnrKzkuIDkuKrngrnnmoTpopzoibLkuI7lnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmNvbG9yKCAwLCAxLCAwICkudmVydGV4KCAwLjUsIDAsIDAgKTsgLy8g5LiJ6KeS5b2i56ys5LqM5Liq54K555qE6aKc6Imy5LiO5Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5jb2xvciggMCwgMCwgMSApLnZlcnRleCggMCwgMC41LCAwICk7IC8vIOS4ieinkuW9ouesrOS4ieS4queCueeahOminOiJsuS4juWdkOagh1xyXG4gICAgICAgICAgICAvLyDlkIjmiJBtb2RlbC12aWV3LXByb2plY3Rpb24gbWF0cml4XHJcbiAgICAgICAgICAgIE1hdHJpeDQucHJvZHVjdCggdGhpcy5jYW1lcmEudmlld1Byb2plY3Rpb25NYXRyaXgsIHRoaXMubWF0U3RhY2subW9kZWxWaWV3TWF0cml4LCB0aGlzLnRyaU1hdHJpeCApO1xyXG4gICAgICAgICAgICAvLyDlsIZtdnBNYXRyaXjkvKDpgJLnu5lHTE1lc2hCdWlsZGVy55qEZW5k5pa55rOV77yM6K+l5pa55rOV5Lya5q2j56Gu55qE5pi+56S65Zu+5b2iXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5lbmQoIHRoaXMudHJpTWF0cml4ICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdFN0YWNrLnBvcE1hdHJpeCgpOyAvLyDliKDpmaTkuIDkuKrnn6npmLVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xvclByb2dyYW0udW5iaW5kKCk7XHJcbiAgICAgICAgLy8g5oGi5aSN6IOM6Z2i5YmU6Zmk5Yqf6IO9XHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUoIHRoaXMuZ2wuQ1VMTF9GQUNFICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YWz5LqOQ2FudmFzMkTnmoTor6bnu4blupTnlKjvvIzlj6/ku6Xlj4LogIPmnKzkuabnmoTlp5Dlprnnr4fvvJpUeXBlU2NyaXB05Zu+5b2i5riy5p+T5a6e5oiY77yaMkTmnrbmnoTorr7orqHkuI7lrp7njrBcclxuICAgIHByaXZhdGUgX3JlbmRlclRleHQgKCB0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciA9IHRoaXMuY2FudmFzLndpZHRoICogMC41LCB5OiBudW1iZXIgPSAxNTAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5jdHgyRCAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN0eDJELmNsZWFyUmVjdCggMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eDJELnNhdmUoKTsgLy8g5riy5p+T54q25oCB6L+b5qCIXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFN0eWxlID0gXCJyZWRcIjsgIC8vIOe6ouiJslxyXG4gICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwiY2VudGVyXCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ3RvcCc7IC8vIFnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgdGhpcy5jdHgyRC5mb250ID0gXCIzMHB4IEFyaWFsXCI7IC8vIOS9v+eUqOWkp+S4gOeCueeahEFyaWFs5a2X5L2T5a+56LGhXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIHRleHQsIHgsIHkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQucmVzdG9yZSgpOyAvLyDmgaLlpI3ljp/mnaXnmoTmuLLmn5PnirbmgIFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZHJhd1RleHQgKCBwb3M6IFZlY3RvcjMsIGF4aXM6IEVBeGlzVHlwZSwgbXZwOiBNYXRyaXg0LCBpbnZlcnNlOiBib29sZWFuID0gZmFsc2UgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5jdHgyRCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3V0OiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAvLyDosIPnlKggTWF0aEhlbHBlci5vYmoyU2NyZWVuU3BhY2Xov5nkuKrmoLjlv4Plh73mlbDvvIzlsIblsYDpg6jlnZDmoIfns7vmoIfnpLrnmoTkuIDkuKrngrnlj5jmjaLliLDlsY/luZXlnZDmoIfns7vkuIpcclxuICAgICAgICBpZiAoIE1hdGhIZWxwZXIub2JqMkdMVmlld3BvcnRTcGFjZSggcG9zLCBtdnAsIHRoaXMuY2FtZXJhLmdldFZpZXdwb3J0KCksIG91dCApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG91dC55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gb3V0Lnk7IC8vIOWPmOaNouWIsOWxj+W5leWdkOagh+ezu++8jOW3puaJi+ezu++8jOWOn+eCueWcqOW3puS4iuinku+8jHjlkJHlj7PvvIx55ZCR5LiLXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuc2F2ZSgpOyAvLyDmuLLmn5PnirbmgIHov5vmoIhcclxuICAgICAgICAgICAgdGhpcy5jdHgyRC5mb250ID0gXCIzMHB4IEFyaWFsXCI7IC8vIOS9v+eUqOWkp+S4gOeCueeahEFyaWFs5a2X5L2T5a+56LGhXHJcbiAgICAgICAgICAgIGlmICggYXhpcyA9PT0gRUF4aXNUeXBlLlhBWElTIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QmFzZWxpbmUgPSAndG9wJzsgLy8gWei9tOS4unRvcOWvuem9kFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsU3R5bGUgPSBcInJlZFwiOyAgLy8g57qi6ImyXHJcbiAgICAgICAgICAgICAgICBpZiAoIGludmVyc2UgPT09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIFwiLVhcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QWxpZ24gPSBcImxlZnRcIjsgIC8vIFjovbTlsYXkuK3lr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIlhcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBheGlzID09PSBFQXhpc1R5cGUuWUFYSVMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwiY2VudGVyXCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjsgIC8vIOe7v+iJslxyXG4gICAgICAgICAgICAgICAgaWYgKCBpbnZlcnNlID09PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRCYXNlbGluZSA9ICd0b3AnOyAgLy8gLVnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIi1ZXCIsIG91dC54LCBvdXQueSApOyAvLyDooYzmloflrZfnu5jliLZcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ2JvdHRvbSc7IC8vIFnovbTkuLpib3R0b23lr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIllcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsU3R5bGUgPSBcImJsdWVcIjsgIC8vIOe7v+iJslxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ3RvcCc7IC8vIFnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgICAgIGlmICggaW52ZXJzZSA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsVGV4dCggXCItWlwiLCBvdXQueCwgb3V0LnkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwibGVmdFwiOyAgLy8gWOi9tOWxheS4reWvuem9kFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIFwiWlwiLCBvdXQueCwgb3V0LnkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQucmVzdG9yZSgpOyAvLyDmgaLlpI3ljp/mnaXnmoTmuLLmn5PnirbmgIFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlciAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckN1YmUoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUcmlhbmdsZSgpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRleHQoIFwi56ys5LiA5LiqV2ViR0wgRGVtb1wiICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSAoIGVsYXBzZWRNc2VjOiBudW1iZXIsIGludGVydmFsU2VjOiBudW1iZXIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHMgPSB2dO+8jOagueaNruS4pOW4p+mXtOmalOabtOaWsOinkumAn+W6puWSjOinkuS9jeenu1xyXG4gICAgICAgIHRoaXMuY3ViZUFuZ2xlICs9IHRoaXMuY3ViZVNwZWVkICogaW50ZXJ2YWxTZWM7XHJcblxyXG4gICAgICAgIC8vIOaIkeS7rOWcqENhbWVyYUFwcGxpY2F0aW9u5Lit5Lmf6KaG5YaZ77yIb3ZlcnJpZGXvvInnmoR1cGRhdGXmlrnms5VcclxuICAgICAgICAvLyBDYW1lcmFBcHBsaWNhdGlvbueahHVwZGF0ZeaWueazleeUqOadpeiuoeeul+aRhOWDj+acuueahOaKleW9seefqemYteS7peWPiuinhuWbvuefqemYtVxyXG4gICAgICAgIC8vIOaJgOS7peaIkeS7rOW/hemhu+imgeiwg+eUqOWfuuexu+aWueazle+8jOeUqOS6juaOp+WItuaRhOWDj+acuuabtOaWsFxyXG4gICAgICAgIC8vIOWQpuWImeS9oOWwhuS7gOS5iOmDveeci+S4jeWIsO+8jOWIh+iusO+8gVxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSggZWxhcHNlZE1zZWMsIGludGVydmFsU2VjICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6LWE5rqQ5ZCM5q2l5pa55rOVXHJcbiAgICBwdWJsaWMgYXN5bmMgcnVuICgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXdhaXTlv4XpobvopoHnlKjkuo5hc3luY+WjsOaYjueahOWHveaVsOS4rVxyXG4gICAgICAgIGxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBhd2FpdCBIdHRwUmVxdWVzdC5sb2FkSW1hZ2VBc3luYyggXCJkYXRhL3BpYzAucG5nXCIgKTtcclxuICAgICAgICBsZXQgdGV4OiBHTFRleHR1cmUgPSBuZXcgR0xUZXh0dXJlKCB0aGlzLmdsICk7XHJcbiAgICAgICAgdGV4LnVwbG9hZCggaW1nLDAsdHJ1ZSApO1xyXG4gICAgICAgIHRleC5maWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goIHRleCApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjHjgIHnrKzkuIDkuKrnurnnkIbovb3lhaXmiJDlip/vvIFcIiApO1xyXG5cclxuICAgICAgICAvLyBhd2FpdOW/hemhu+imgeeUqOS6jmFzeW5j5aOw5piO55qE5Ye95pWw5LitXHJcbiAgICAgICAgaW1nID0gYXdhaXQgSHR0cFJlcXVlc3QubG9hZEltYWdlQXN5bmMoIFwiZGF0YS9waWMxLmpwZ1wiICk7XHJcbiAgICAgICAgdGV4ID0gbmV3IEdMVGV4dHVyZSggdGhpcy5nbCApO1xyXG4gICAgICAgIHRleC51cGxvYWQoIGltZywwLHRydWUpO1xyXG4gICAgICAgIHRleC5maWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goIHRleCApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjLjgIHnrKzkuozkuKrnurnnkIbovb3lhaXmiJDlip/vvIFcIiApO1xyXG5cclxuXHJcbiAgICAgICAgLy8g5Zyo6LWE5rqQ5ZCM5q2l5Yqg6L295a6M5oiQ5ZCO77yM55u05o6l5ZCv5Yqo5o2i6IKk55qE5a6a5pe25Zmo77yM5q+P6ZqUMuenku+8jOWwhueri+aWueS9k+eahOearuiCpOi/m+ihjOWRqOiAjOWkjeWni+eahOabv+aNolxyXG4gICAgICAgIHRoaXMuYWRkVGltZXIoIHRoaXMuY3ViZVRpbWVDYWxsYmFjay5iaW5kKCB0aGlzICksIDIsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjPjgIHlkK/liqhBcHBsaWNhdGlvbueoi+W6j1wiICk7XHJcbiAgICAgICAgc3VwZXIucnVuKCk7IC8vIOiwg+eUqOWfuuexu+eahHJ1buaWueazle+8jOWfuuexu3J1buaWueazleWGhemDqOiwg+eUqOS6hnN0YXJ05pa55rOVXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGN1YmVUaW1lQ2FsbGJhY2sgKCBpZDogbnVtYmVyLCBkYXRhOiBhbnkgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3VyclRleElkeCsrOyAvLyDlrprml7borqnorqHmlbDlmagrMVxyXG4gICAgICAgIC8vIOWPluaooeaTjeS9nO+8jOiuqWN1cnJUZXhJZHjnmoTlj5blgLzojIPlm7TkuLpbIDAsIDIgXeS5i+mXtO+8iOW9k+WJjeaciTPkuKrnurnnkIbvvIlcclxuICAgICAgICB0aGlzLmN1cnJUZXhJZHggJT0gdGhpcy50ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaVRpbWVDYWxsYmFjayAoIGlkOiBudW1iZXIsIGRhdGE6IGFueSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlBbmdsZSArPSB0aGlzLnRyaVNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbktleURvd24gKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZXZ0LmtleSA9PT0gXCJxXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRyaVRpbWVySWQgPT09IC0xIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlUaW1lcklkID0gdGhpcy5hZGRUaW1lciggdGhpcy50cmlUaW1lQ2FsbGJhY2suYmluZCggdGhpcyApLCAwLjI1LCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJlXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRyaVRpbWVySWQgIT09IC0xIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnJlbW92ZVRpbWVyKCB0aGlzLnRyaVRpbWVySWQgKSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlUaW1lcklkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuXHJcbmV4cG9ydCBlbnVtIEVJbnB1dEV2ZW50VHlwZVxyXG57XHJcbiAgICBNT1VTRUVWRU5ULCAgICAvL+aAu+exu++8jOihqOekuum8oOagh+S6i+S7tiAgXHJcbiAgICBNT1VTRURPV04sICAgICAvL+m8oOagh+aMieS4i+S6i+S7tlxyXG4gICAgTU9VU0VVUCwgICAgICAgLy/pvKDmoIflvLnotbfkuovku7ZcclxuICAgIE1PVVNFTU9WRSwgICAgIC8v6byg5qCH56e75Yqo5LqL5Lu2LCBtb3Zl5LqL5Lu25Y+R55Sf5Zyo5b2T5YmN6byg5qCH5oyH6ZKI5LmL5LiL55qESVNwcml0ZeWvueixoVxyXG4gICAgTU9VU0VEUkFHLCAgICAgLy/pvKDmoIfmi5bliqjkuovku7YsIGRyYWfkuovku7blj5HnlJ/lnKhtb3VzZURvd27pgInkuK3nmoRJU3ByaXRl5a+56LGh5LiKXHJcbiAgICBLRVlCT0FSREVWRU5ULCAvL+mUruebmOS6i+S7tlxyXG4gICAgS0VZVVAsICAgICAgICAgLy/mgLvnsbvvvIzplK7mjInkuIvkuovku7ZcclxuICAgIEtFWURPV04sICAgICAgIC8v6ZSu5by56LW35LqL5Lu2XHJcbiAgICBLRVlQUkVTUyAgICAgICAgLy/mjInplK7kuovku7ZcclxufTtcclxuXHJcbi8vIENhbnZhc0tleWJvYXJkRXZlbnTlkoxDYW52YXNNb3VzZUV2ZW506YO957un5om/6Ieq5pys57G7XHJcbi8vIOWfuuexu+WumuS5ieS6huWFseWQjOeahOWxnuaAp++8jGtleWJvYXJk5oiWbW91c2Xkuovku7bpg73og73kvb/nlKjnu4TlkIjplK5cclxuLy8g5L6L5aaC5L2g5Y+v5Lul5oyJ552AY3RybOmUrueahOWQjOaXtueCueWHu+m8oOagh+W3pumUruWBmuafkOS6m+S6i+aDhVxyXG4vLyDlvZPnhLbkvaDkuZ/lj6/ku6XmjInnnYBhbHQgKyBhIOmUruWBmuWPpuWkluS4gOS6m+S6i+aDhVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzSW5wdXRFdmVudFxyXG57XHJcbiAgICAvLyDkuInkuKpib29sZWFu5Y+Y6YeP77yM55So5p2l5oyH56S6YWx0IC8gY3RybCAvIHNoaWZ05piv5ZCm6KKr5oyJ5LiLXHJcbiAgICBwdWJsaWMgYWx0S2V5OiBib29sZWFuO1xyXG4gICAgcHVibGljIGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2hpZnRLZXk6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gdHlwZeaYr+S4gOS4quaemuS4vuWvueixoe+8jOeUqOadpeihqOekuuW9k+WJjeeahOS6i+S7tuexu+Wei1xyXG4gICAgcHVibGljIHR5cGU6IEVJbnB1dEV2ZW50VHlwZTtcclxuXHJcbiAgICAvLyDmnoTpgKDlh73mlbDvvIzkvb/nlKjkuoZkZWZhdWx05Y+C5pWwXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGFsdEtleTogYm9vbGVhbiA9IGZhbHNlLCBjdHJsS2V5OiBib29sZWFuID0gZmFsc2UsIHNoaWZ0S2V5OiBib29sZWFuID0gZmFsc2UgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWx0S2V5ID0gYWx0S2V5O1xyXG4gICAgICAgIHRoaXMuY3RybEtleSA9IGN0cmxLZXk7XHJcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWbnuiwg+WHveaVsOexu+Wei+WIq+WQjVxyXG4vLyDlm57osIPlh73mlbDpnIDopoHnrKzkuInmlrnlrp7njrDlkozorr7nva7vvIzmiYDmnInlr7zlh7ror6Xlm57osIPlh73mlbBcclxuZXhwb3J0IHR5cGUgVGltZXJDYWxsYmFjayA9ICggaWQ6IG51bWJlciwgZGF0YTogYW55ICkgPT4gdm9pZDtcclxuXHJcbi8vIOe6r+aVsOaNruexu1xyXG4vLyDmiJHku6zkuI3pnIDopoHlr7zlh7pUaW1lcuexu++8jOWboOS4uuWPquaYr+S9nOS4uuWGhemDqOexu+S9v+eUqFxyXG5jbGFzcyBUaW1lclxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlciA9IC0xOyAvLyDorqHml7blmajnmoRpZOWPtyBcclxuXHJcbiAgICAvLyDmoIforrDlvZPliY3orqHml7blmajmmK/lkKbmnInmlYjvvIzlvojph43opoHnmoTkuIDkuKrlj5jph4/vvIzlhbfkvZPnnIvlkI7nu63ku6PnoIFcclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrOyAgLy8g5Zue6LCD5Ye95pWw77yM5Yiw5pe26Ze05Lya6Ieq5Yqo6LCD55SoXHJcbiAgICBwdWJsaWMgY2FsbGJhY2tEYXRhOiBhbnkgPSB1bmRlZmluZWQ7IC8vIOeUqOS9nOWbnuiwg+WHveaVsOeahOWPguaVsFxyXG5cclxuICAgIHB1YmxpYyBjb3VudGRvd246IG51bWJlciA9IDA7IC8vIOWAkuiuoeaXtuWZqO+8jOavj+asoXVwZGF0ZeaXtuS8muWAkuiuoeaXtlxyXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciA9IDA7ICAvLyBcclxuICAgIHB1YmxpYyBvbmx5T25jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICggY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2sgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc01vdXNlRXZlbnQgZXh0ZW5kcyBDYW52YXNJbnB1dEV2ZW50XHJcbntcclxuICAgIC8vIGJ1dHRvbuihqOekuuW9k+WJjeaMieS4i+m8oOagh+WTquS4qumUrlxyXG4gICAgLy8gWyAwIDog6byg5qCH5bem6ZSuIO+8jDEg77yaIOm8oOagh+S4remUru+8jDIg77yaIOm8oOagh+WPs+mUrl1cclxuICAgIHB1YmxpYyBidXR0b246IG51bWJlcjtcclxuXHJcbiAgICAvLyDln7rkuo5jYW52YXPlnZDmoIfns7vnmoTooajnpLpcclxuICAgIHB1YmxpYyBjYW52YXNQb3NpdGlvbjogVmVjdG9yMjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGNhbnZhc1BvczogVmVjdG9yMiwgYnV0dG9uOiBudW1iZXIsIGFsdEtleTogYm9vbGVhbiA9IGZhbHNlLCBjdHJsS2V5OiBib29sZWFuID0gZmFsc2UsIHNoaWZ0S2V5OiBib29sZWFuID0gZmFsc2UgKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0eXBlLCBhbHRLZXksIGN0cmxLZXksIHNoaWZ0S2V5ICk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNQb3NpdGlvbiA9IGNhbnZhc1BvcztcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5idXR0b24gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc0tleUJvYXJkRXZlbnQgZXh0ZW5kcyBDYW52YXNJbnB1dEV2ZW50XHJcbntcclxuICAgIC8vIOW9k+WJjeaMieS4i+eahOmUrueahGFzY2lp5a2X56ymXHJcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XHJcbiAgICAvLyDlvZPliY3mjInkuIvnmoTplK7nmoRhc2Npaeegge+8iOaVsOWtl++8iVxyXG4gICAgcHVibGljIGtleUNvZGU6IG51bWJlcjtcclxuICAgIC8vIOW9k+WJjeaMieS4i+eahOmUruaYr+WQpuS4jeWBnOeahOinpuWPkeS6i+S7tlxyXG4gICAgcHVibGljIHJlcGVhdDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGtleTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHJlcGVhdDogYm9vbGVhbiwgYWx0S2V5OiBib29sZWFuID0gZmFsc2UsIGN0cmxLZXk6IGJvb2xlYW4gPSBmYWxzZSwgc2hpZnRLZXk6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHR5cGUsIGFsdEtleSwgY3RybEtleSwgc2hpZnRLZXkgKTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmtleUNvZGUgPSBrZXlDb2RlO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRJbnRlcmFjdGlvbiBpbXBsZW1lbnRzIEV2ZW50TGlzdGVuZXJPYmplY3Rcclxue1xyXG4gICAgcHVibGljIHRpbWVyczogVGltZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3RpbWVJZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHJpdmF0ZSBfZnBzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpc0ZsaXBZQ29vcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDmiJHku6znmoRFdmVudEludGVyYWN0aW9u5Li76KaB5pivY2FudmFzMkTlkox3ZWJHTOW6lOeUqFxyXG4gICAgLy8g6ICMY2FudmFzMkTlkox3ZWJHTCBjb250ZXh06YO95piv5LuOSFRNTENhbnZhc0VsZW1lbnTlhYPntKDojrflj5bnmoRcclxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIC8vIOacrOS5puS4reeahERlbW/ku6XmtY/op4jlmajkuLrkuLtcclxuICAgIC8vIOaIkeS7rOWvueS6jm1vdXNlbW92ZeS6i+S7tuaPkOS+m+S4gOS4quW8gOWFs+WPmOmHj1xyXG4gICAgLy8g5aaC5p6c5LiL6Z2i5Y+Y6YeP6K6+572u5Li6dHJ1Ze+8jOWImeavj+asoem8oOagh+enu+WKqOmDveS8muinpuWPkW1vdXNlbW92ZeS6i+S7tlxyXG4gICAgLy8g5ZCm5YiZ5oiR5Lus5bCx5LiN5Lya6Kem5Y+RbVxyXG4gICAgcHVibGljIGlzU3VwcG9ydE1vdXNlTW92ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvLyDmiJHku6zkvb/nlKjkuIvpnaLlj5jph4/mnaXmoIforrDlvZPliY3pvKDmoIfmmK/lkKbmjInkuIvnirbmgIFcclxuICAgIC8vIOebrueahOaYr+aPkOS+m21vdXNlZHJhZ+S6i+S7tlxyXG4gICAgcHJvdGVjdGVkIF9pc01vdXNlRG93bjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfaXNSaWdodE1vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlOyAvLyDkuLrkuobmlK/mjIHpvKDmoIfmjInkuItkcmFn5LqL5Lu2XHJcblxyXG4gICAgLy8gX3N0YXJ05oiQ5ZGY5Y+Y6YeP55So5LqO5qCH6K6w5b2T5YmNRXZlbnRJbnRlcmFjdGlvbuaYr+WQpui/m+WFpeS4jemXtOaWreeahOW+queOr+eKtuaAgVxyXG4gICAgcHJvdGVjdGVkIF9zdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8g55SxV2luZG935a+56LGh55qEcmVxdWVzdEFuaW1hdGlvbkZyYW1l6L+U5Zue55qE5aSn5LqOMOeahGlk5Y+3XHJcbiAgICAvLyDmiJHku6zlj6/ku6Xkvb/nlKhjYW5jZWxBbmltYXRpb25GcmFtZSAoIHRoaXMgLl9yZXF1ZXN0SWQgKeadpeWPlua2iOWKqOeUu+W+queOr1xyXG4gICAgcHJvdGVjdGVkIF9yZXF1ZXN0SWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8vIOeUseS6juiuoeeul+W9k+WJjeabtOaWsOS4juS4iuS4gOasoeabtOaWsOS5i+mXtOeahOaXtumXtOW3rlxyXG4gICAgLy8g55So5LqO5Z+65LqO5pe26Ze055qE54mp55CG5pu05pawXHJcbiAgICBwcm90ZWN0ZWQgX2xhc3RUaW1lICE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfc3RhcnRUaW1lICE6IG51bWJlcjtcclxuXHJcbiAgICAvLyDlo7DmmI7mr4/luKflm57osIPlh73mlbBcclxuICAgIHB1YmxpYyBmcmFtZUNhbGxiYWNrOiAoICggYXBwOiBFdmVudEludGVyYWN0aW9uICkgPT4gdm9pZCApIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IClcclxuICAgIHtcclxuICAgICAgICAvLyBFdmVudEludGVyYWN0aW9u5Z+657G75oul5pyJ5LiA5LiqSFRNTENhbnZhc0VsZW1lbnTlr7nosaFcclxuICAgICAgICAvLyDov5nmoLflrZDnsbvlj6/ku6XliIbliKvku47or6VIVE1MQ2FudmFzRWxlbWVudOS4reiOt+WPlkNhbnZhczJE5oiWV2ViR0zkuIrkuIvmloflr7nosaFcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgLy8gY2FudmFz5YWD57Sg6IO95aSf55uR5ZCs6byg5qCH5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAvLyDlvojph43opoHkuIDngrnvvIzplK7nm5jkuovku7bkuI3og73lnKhjYW52YXPkuK3op6blj5HvvIzkvYbmmK/og73lnKjlhajlsYDnmoR3aW5kb3flr7nosaHkuK3op6blj5FcclxuICAgICAgICAvLyDlm6DmraTmiJHku6zog73lnKh3aW5kb3flr7nosaHkuK3nm5HlkKzplK7nm5jkuovku7ZcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMsIGZhbHNlICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlwcmVzc1wiLCB0aGlzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIxtb3VzZURvd27kuLpmYWxzZVxyXG4gICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOm7mOiupOeKtuaAgeS4i++8jOS4jeaUr+aMgW1vdXNlbW92ZeS6i+S7tlxyXG4gICAgICAgIHRoaXMuaXNTdXBwb3J0TW91c2VNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSAvLyDnpoHmraLlj7PplK7kuIrkuIvmlofoj5zljZVcclxuICAgIH1cclxuXHJcbiAgICAvLyDliKTmlq3lvZPliY1FdmVudEludGVyYWN0aW9u5piv5ZCm5LiA55u05Zyo6LCD55SocmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICBwdWJsaWMgaXNSdW5uaW5nICgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuoeeul+W9k+WJjeeahEZQU++8iEZyYW1lIFBlciBTZWNvbmTvvIlcclxuICAgIHB1YmxpYyBnZXQgZnBzICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDlkK/liqjliqjnlLvlvqrnjq9cclxuICAgIHB1YmxpYyBzdGFydCAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhcnQgPT09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzIC4gX3JlcXVlc3RJZCA9IC0xIDsgLy8g5bCGX3JlcXVlc3RJZOiuvue9ruS4ui0xXHJcbiAgICAgICAgICAgIC8vIOWcqHN0YXJ05ZKMc3RvcOWHveaVsOS4re+8jF9sYXN0VGltZeWSjF9zdGFydFRpbWXpg73orr7nva7kuLotMVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgLy8g5ZCv5Yqo5pu05paw5riy5p+T5b6q546vXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICggbXNlYzogbnVtYmVyICk6IHZvaWQgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g5ZCv5Yqoc3RlcOaWueazlVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwKCBtc2VjICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIC8v5rOo6YeK5o6J5LiK6L+w5Luj56CB77yM5L2/55So5LiL6Z2i5Luj56CB5p2l5ZCv5Yqoc3RlcOaWueazlVxyXG4gICAgICAgICAgICAvL3RoaXMgLiBfcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggdGhpcyAuIHN0ZXAgLiBiaW5kICggdGhpcyApICkgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuI3lgZznmoTlkajogIzlpI3lp4vov5DliqhcclxuICAgIHByb3RlY3RlZCBzdGVwICggdGltZVN0YW1wOiBudW1iZXIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v56ys5LiA5qyh6LCD55So5pys5Ye95pWw5pe277yM6K6+572uc3RhcnTlkoxsYXN0VGltZeS4unRpbWVzdGFtcFxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhcnRUaW1lID09PSAtMSApIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWVTdGFtcDtcclxuICAgICAgICBpZiAoIHRoaXMuX2xhc3RUaW1lID09PSAtMSApIHRoaXMuX2xhc3RUaW1lID0gdGltZVN0YW1wO1xyXG5cclxuICAgICAgICAvL+iuoeeul+W9k+WJjeaXtumXtOeCueS4juesrOS4gOasoeiwg+eUqHN0ZXDml7bpl7TngrnnmoTlt65cclxuICAgICAgICBsZXQgZWxhcHNlZE1zZWMgPSB0aW1lU3RhbXAgLSB0aGlzLl9zdGFydFRpbWU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5b2T5YmN5pe26Ze054K55LiO5LiK5LiA5qyh6LCD55Soc3RlcOaXtumXtOeCueeahOW3rijlj6/ku6XnkIbop6PkuLrkuKTluKfkuYvpl7TnmoTml7bpl7Tlt64pXHJcbiAgICAgICAgLy8g5q2k5pe2aW50ZXJ2YWxTZWPlrp7pmYXmmK/mr6vnp5LooajnpLpcclxuICAgICAgICBsZXQgaW50ZXJ2YWxTZWMgPSAoIHRpbWVTdGFtcCAtIHRoaXMuX2xhc3RUaW1lICk7XHJcblxyXG4gICAgICAgIC8vIOesrOS4gOW4p+eahOaXtuWAmSxpbnRlcnZhbFNlY+S4ujAs6Ziy5q2iMOS9nOWIhuavjVxyXG4gICAgICAgIGlmICggaW50ZXJ2YWxTZWMgIT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6K6h566XZnBzXHJcbiAgICAgICAgICAgIHRoaXMuX2ZwcyA9IDEwMDAuMCAvIGludGVydmFsU2VjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5oiR5LusdXBkYXRl5L2/55So55qE5piv56eS5Li65Y2V5L2N77yM5Zug5q2k6L2s5o2i5Li656eS6KGo56S6XHJcbiAgICAgICAgaW50ZXJ2YWxTZWMgLz0gMTAwMC4wO1xyXG5cclxuICAgICAgICAvL+iusOW9leS4iuS4gOasoeeahOaXtumXtOaIs1xyXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZVN0YW1wO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVUaW1lcnMoIGludGVydmFsU2VjICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cgKFwiIGVsYXBzZWRUaW1lID0gXCIgKyBlbGFwc2VkTXNlYyArIFwiIGRpZmZUaW1lID0gXCIgKyBpbnRlcnZhbFNlYyk7XHJcbiAgICAgICAgLy8g5YWI5pu05pawXHJcbiAgICAgICAgdGhpcy51cGRhdGUoIGVsYXBzZWRNc2VjLCBpbnRlcnZhbFNlYyApO1xyXG4gICAgICAgIC8vIOWQjua4suafk1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5mcmFtZUNhbGxiYWNrICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayggdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpgJLlvZLosIPnlKjvvIzlvaLmiJDlkajogIzlpI3lp4vnmoTliY3ov5tcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICggZWxhcHNlZE1zZWM6IG51bWJlciApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAoIGVsYXBzZWRNc2VjICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWBnOatouWKqOeUu+W+queOr1xyXG4gICAgcHVibGljIHN0b3AgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YXJ0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNhbmNlbEFuaW1hdGlvbkZyYW1l5Ye95pWw55So5LqOOlxyXG4gICAgICAgICAgICAvL+WPlua2iOS4gOS4quWFiOWJjemAmui/h+iwg+eUqHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKeaWueazlea3u+WKoOWIsOiuoeWIkuS4reeahOWKqOeUu+W4p+ivt+axglxyXG4gICAgICAgICAgICAvL2FsZXJ0KHRoaXMuX3JlcXVlc3RJZCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9yZXF1ZXN0SWQgKTtcclxuICAgICAgICAgICAgLy90aGlzIC4gX3JlcXVlc3RJZCA9IC0xIDsgLy8g5bCGX3JlcXVlc3RJZOiuvue9ruS4ui0xXHJcblxyXG4gICAgICAgICAgICAvLyDlnKhzdGFydOWSjHN0b3Dlh73mlbDkuK3vvIxfbGFzdFRpbWXlkoxfc3RhcnRUaW1l6YO96K6+572u5Li6LTFcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Jma5pa55rOV77yM5a2Q57G76IO96KaG5YaZ77yIb3ZlcnJpZGXvvInvvIznlKjkuo7mm7TmlrBcclxuICAgIC8v5rOo5oSPOiDnrKzkuozkuKrlj4LmlbDmmK/np5LkuLrljZXkvY3vvIznrKzkuIDlj4LmlbDmmK/mr6vnp5LkuLrljZXkvY1cclxuICAgIHB1YmxpYyB1cGRhdGUgKCBlbGFwc2VkTXNlYzogbnVtYmVyLCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWQgeyB9XHJcblxyXG4gICAgLy/omZrmlrnms5XvvIzlrZDnsbvog73opoblhpnvvIhvdmVycmlkZe+8ie+8jOeUqOS6jua4suafk1xyXG4gICAgcHVibGljIHJlbmRlciAoKTogdm9pZCB7IH1cclxuXHJcbiAgICAvLyDomZrlh73mlbDvvIzlrZDnsbvopoblhpnvvIhvdmVyaWRl77yJ77yM55So5LqO5ZCM5q2l5ZCE56eN6LWE5rqQ5ZCO5ZCv5YqoRXZlbnRJbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGFzeW5jIHJ1biAoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIC8vIOiwg+eUqHN0YXJ05pa55rOV77yM6K+l5pa55rOV5Lya5ZCv5YqocmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgLy8g54S25ZCO5LiN5YGc55qE6L+b6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiwg+eUqGRpc3BhdGNoWFhYWOiZmuaWueazlei/m+ihjOS6i+S7tuWIhuWPkVxyXG4gICAgLy8gaGFuZGxlRXZlbnTmmK/mjqXlj6NFdmVudExpc3RlbmVyT2JqZWN05a6a5LmJ55qE5Y2P6K6u5YiG5Y+R77yM5b+F6aG76KaB5a6e546wXHJcbiAgICBwdWJsaWMgaGFuZGxlRXZlbnQgKCBldnQ6IEV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKCBldnQudHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc01vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRE9XTiApICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1vdXNldXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VVcCggdGhpcy5fdG9DYW52YXNNb3VzZUV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5NT1VTRVVQICkgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpxpc1N1cHBvcnRNb3VzZU1vdmXkuLp0cnVl77yM5omN5Lya5q+P5qyh6byg5qCH56e75Yqo6Kem5Y+RbW91c2VNb3Zl5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNTdXBwb3J0TW91c2VNb3ZlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFTU9WRSApICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlkIzml7bvvIzlpoLmnpzlvZPliY3pvKDmoIfku7vmhI/kuIDkuKrplK7lpITkuo7mjInkuIvnirbmgIHlubbmi5bliqjml7bvvIzop6blj5FkcmFn5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX2lzTW91c2VEb3duIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEcmFnKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRFJBRyApICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoIHRoaXMuX3RvQ2FudmFzS2V5Qm9hcmRFdmVudCggZXZ0LCBFSW5wdXRFdmVudFR5cGUuS0VZUFJFU1MgKSApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93biggdGhpcy5fdG9DYW52YXNLZXlCb2FyZEV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5LRVlET1dOICkgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwia2V5dXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlVcCggdGhpcy5fdG9DYW52YXNLZXlCb2FyZEV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5LRVlVUCApICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duICggZXZ0OiBDYW52YXNNb3VzZUV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcCAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlTW92ZSAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlRHJhZyAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbktleURvd24gKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25LZXlVcCAoIGV2dDogQ2FudmFzS2V5Qm9hcmRFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbktleVByZXNzICggZXZ0OiBDYW52YXNLZXlCb2FyZEV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE1vdXNlQ2FudmFzICgpOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDlsIbpvKDmoIfkuovku7blj5HnlJ/ml7bpvKDmoIfmjIfpkojnmoTkvY3nva7lj5jmjaLkuLrnm7jlr7nlvZPliY1jYW52YXPlhYPntKDnmoTlgY/np7vooajnpLpcclxuICAgIC8vIOi/meaYr+S4gOS4quengeacieaWueazle+8jOaEj+WRs+edgOWPquiDveWcqOacrOexu+S4reS9v+eUqCzlrZDnsbvlkozlhbbku5bnsbvpg73ml6Dms5XosIPnlKjmnKzmlrnms5VcclxuICAgIC8vIOWPquimgeaYr+m8oOagh+S6i+S7tu+8iGRvd24gLyB1cCAvIG1vdmUgLyBkcmFnIC4uLi4u77yJ6YO96ZyA6KaB6LCD55So5pys5pa55rOVXHJcbiAgICAvLyDlsIbnm7jlr7nkuo7mtY/op4jlmah2aWV3cG9ydOihqOekuueahOeCueWPmOaNouWIsOebuOWvueS6jmNhbnZhc+ihqOekuueahOeCuVxyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFRvQ2FudmFzQ29vcmRpbmF0ZSAoIGV2dDogTW91c2VFdmVudCApOiBWZWN0b3IyXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5YiH6K6w77yM5b6I6YeN6KaB5LiA54K577yaXHJcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN05pa55rOV6L+U5Zue55qEQ2xpZW50UmVjdFxyXG4gICAgICAgIGxldCByZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5nZXRNb3VzZUNhbnZhcygpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bop6blj5HpvKDmoIfkuovku7bnmoR0YXJnZXTlhYPntKDvvIzov5nph4zmgLvmmK9IVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgICAgIGlmICggZXZ0LnRhcmdldCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgeDogbnVtYmVyID0gZXZ0LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB5ID0gZXZ0LmNsaWVudFkgLSByZWN0LnRvcDsgLy8g55u45a+55LqOY2FudmFz5bem5LiK55qE5YGP56e7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0ZsaXBZQ29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5nZXRNb3VzZUNhbnZhcygpLmhlaWdodCAtIHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5Y+Y5oiQ55+i6YeP6KGo56S6XHJcbiAgICAgICAgICAgIGxldCBwb3M6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMiggeCwgeSApO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWxlcnQoIFwiZXZ0IC4gdGFyZ2V05Li6bnVsbFwiICk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcImV2dCAuIHRhcmdldOS4um51bGxcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWwhkRPTSBFdmVudOWvueixoeS/oeaBr+i9rOaNouS4uuaIkeS7rOiHquW3seWumuS5ieeahENhbnZhc01vdXNlRXZlbnTkuovku7ZcclxuICAgIHByaXZhdGUgX3RvQ2FudmFzTW91c2VFdmVudCAoIGV2dDogRXZlbnQsIHR5cGU6IEVJbnB1dEV2ZW50VHlwZSApOiBDYW52YXNNb3VzZUV2ZW50XHJcbiAgICB7XHJcbiAgICAgICAgLy8g5ZCR5LiL6L2s5Z6L77yM5bCGRXZlbnTovazmjaLkuLpNb3VzZUV2ZW50XHJcbiAgICAgICAgbGV0IGV2ZW50OiBNb3VzZUV2ZW50ID0gZXZ0IGFzIE1vdXNlRXZlbnQ7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VET1dOICYmIGV2ZW50LmJ1dHRvbiA9PT0gMiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1JpZ2h0TW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VVUCAmJiBldmVudC5idXR0b24gPT09IDIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNSaWdodE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbk51bTogbnVtYmVyID0gZXZlbnQuYnV0dG9uO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX2lzUmlnaHRNb3VzZURvd24gJiYgdHlwZSA9PT0gRUlucHV0RXZlbnRUeXBlLk1PVVNFRFJBRyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidXR0b25OdW0gPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bCG5a6i5oi35Yy655qE6byg5qCHcG9z5Y+Y5o2i5YiwQ2FudmFz5Z2Q5qCH57O75Lit6KGo56S6XHJcbiAgICAgICAgbGV0IG1vdXNlUG9zaXRpb246IFZlY3RvcjIgPSB0aGlzLnZpZXdwb3J0VG9DYW52YXNDb29yZGluYXRlKCBldmVudCApO1xyXG4gICAgICAgIC8vIOWwhkV2ZW505LiA5Lqb6KaB55So5Yiw55qE5L+h5oGv5Lyg6YCS57uZQ2FudmFzTW91c2VFdmVudOW5tui/lOWbnlxyXG4gICAgICAgIGxldCBjYW52YXNNb3VzZUV2ZW50OiBDYW52YXNNb3VzZUV2ZW50ID0gbmV3IENhbnZhc01vdXNlRXZlbnQoIHR5cGUsIG1vdXNlUG9zaXRpb24sIGJ1dHRvbk51bSwgZXZlbnQuYWx0S2V5LCBldmVudC5jdHJsS2V5LCBldmVudC5zaGlmdEtleSApO1xyXG4gICAgICAgIHJldHVybiBjYW52YXNNb3VzZUV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWwhkRPTSBFdmVudOWvueixoeS/oeaBr+i9rOaNouS4uuaIkeS7rOiHquW3seWumuS5ieeahEtleWJvYXJk5LqL5Lu2XHJcbiAgICBwcml2YXRlIF90b0NhbnZhc0tleUJvYXJkRXZlbnQgKCBldnQ6IEV2ZW50LCB0eXBlOiBFSW5wdXRFdmVudFR5cGUgKTogQ2FudmFzS2V5Qm9hcmRFdmVudFxyXG4gICAge1xyXG4gICAgICAgIGxldCBldmVudDogS2V5Ym9hcmRFdmVudCA9IGV2dCBhcyBLZXlib2FyZEV2ZW50O1xyXG4gICAgICAgIC8vIOWwhkV2ZW505LiA5Lqb6KaB55So5Yiw55qE5L+h5oGv5Lyg6YCS57uZQ2FudmFzS2V5Qm9hcmRFdmVudOW5tui/lOWbnlxyXG4gICAgICAgIGxldCBjYW52YXNLZXlib2FyZEV2ZW50OiBDYW52YXNLZXlCb2FyZEV2ZW50ID0gbmV3IENhbnZhc0tleUJvYXJkRXZlbnQoIHR5cGUsIGV2ZW50LmtleSwgZXZlbnQua2V5Q29kZSwgZXZlbnQucmVwZWF0LCBldmVudC5hbHRLZXksIGV2ZW50LmN0cmxLZXksIGV2ZW50LnNoaWZ0S2V5ICk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0tleWJvYXJkRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5pe277yMdGltZXJz5piv56m65YiX6KGoXHJcbiAgICAvLyDkuLrkuoblh4/lsJHlhoXlrZjmnpDmnoTvvIzmiJHku6zlnKhyZW1vdmVUaW1lcuaXtu+8jOW5tuS4jeS7jnRpbWVyc+S4reWIoOmZpOaOiXRpbWVy77yM6ICM5piv6K6+572uZW5hYmxlZOS4umZhbHNlXHJcbiAgICAvLyDov5nmoLforqnlhoXlrZjkvb/nlKjph4/lkozmnpDmnoTovr7liLDnm7jlr7nlubPooaHnirbmgIFcclxuICAgIC8vIOavj+asoea3u+WKoOS4gOS4quiuoeaXtuWZqOaXtu+8jOWFiOafpeeci3RpbWVyc+WIl+ihqOS4reaYr+WQpuacieayoeacieaXtuWAmeeUqOeahHRpbWVy77yM5pyJ55qE6K+d77yM6L+U5Zue6K+ldGltZXLnmoRpZOWPt1xyXG4gICAgLy8g5aaC5p6c5rKh5pyJ5Y+v55So55qEdGltZXLvvIzlsLHph43mlrBuZXfkuIDkuKp0aW1lcu+8jOW5tuiuvue9ruWFtmlk5Y+35Lul5Y+K5YW25LuW5bGe5oCnXHJcbiAgICBwdWJsaWMgYWRkVGltZXIgKCBjYWxsYmFjazogVGltZXJDYWxsYmFjaywgdGltZW91dDogbnVtYmVyID0gMS4wLCBvbmx5T25jZTogYm9vbGVhbiA9IGZhbHNlLCBkYXRhOiBhbnkgPSB1bmRlZmluZWQgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRpbWVyOiBUaW1lclxyXG4gICAgICAgIGxldCBmb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMudGltZXJzLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcjogVGltZXIgPSB0aGlzLnRpbWVyc1sgaSBdO1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyLmVuYWJsZWQgPT09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNhbGxiYWNrRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aW1lci50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNvdW50ZG93biA9IHRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICB0aW1lci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRpbWVyLm9ubHlPbmNlID0gb25seU9uY2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZXIuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4jeWtmOWcqO+8jOWwseaWsOWIm+W7uuS4gOS4qlRpbWVy5a+56LGhXHJcbiAgICAgICAgdGltZXIgPSBuZXcgVGltZXIoIGNhbGxiYWNrICk7XHJcbiAgICAgICAgdGltZXIuY2FsbGJhY2tEYXRhID0gZGF0YTtcclxuICAgICAgICB0aW1lci50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aW1lci5jb3VudGRvd24gPSB0aW1lb3V0O1xyXG4gICAgICAgIHRpbWVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRpbWVyLmlkID0gKyt0aGlzLl90aW1lSWQ7IC8vIOeUseS6juWIneWni+WMluaXtmlk5Li6LTEs5omA5Lul5YmNKytcclxuICAgICAgICB0aW1lci5vbmx5T25jZSA9IG9ubHlPbmNlOyAvL+iuvue9ruaYr+WQpuaYr+S4gOasoeWbnuiwg+i/mOaYr+mHjeWkjeWbnuiwg1xyXG4gICAgICAgIC8vIOa3u+WKoOWIsHRpbWVyc+WIl+ihqOS4reWOu1xyXG4gICAgICAgIHRoaXMudGltZXJzLnB1c2goIHRpbWVyICk7XHJcbiAgICAgICAgLy8g6L+U5Zue5paw5re75Yqg55qEdGltZXLnmoRpZOWPt1xyXG4gICAgICAgIHJldHVybiB0aW1lci5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja5pZOWcqHRpbWVyc+WIl+ihqOS4reafpeaJvlxyXG4gICAgLy8g5aaC5p6c5om+5Yiw77yM5YiZ6K6+572udGltZXLnmoRlbmFibGVk5Li6ZmFsc2XvvIzlubbov5Tlm550cnVlXHJcbiAgICAvLyDlpoLmsqHmib7liLDvvIzov5Tlm55mYWxzZVxyXG4gICAgcHVibGljIHJlbW92ZVRpbWVyICggaWQ6IG51bWJlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy50aW1lcnMubGVuZ3RoOyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRpbWVyc1sgaSBdLmlkID09PSBpZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcjogVGltZXIgPSB0aGlzLnRpbWVyc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgdGltZXIuZW5hYmxlZCA9IGZhbHNlOyAvLyDlj6rmmK9lbmFibGVk6K6+572u5Li6ZmFsc2XvvIzlubbmsqHmnInku47mlbDnu4TkuK3liKDpmaTmjolcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBfaGFuZGxlVGltZXJz56eB5pyJ5pa55rOV6KKrRXZlbnRJbnRlcmFjdGlvbueahHVwZGF0ZeWHveaVsOiwg+eUqFxyXG4gICAgLy8gdXBkYXRl5Ye95pWw56ys5LqM5Liq5Y+C5pWw5piv5Lul56eS6KGo56S655qE5YmN5ZCO5bin5pe26Ze05beuXHJcbiAgICAvLyDmraPnrKblkIhfaGFuZGxlVGltZXJz5Y+C5pWw6KaB5rGCXHJcbiAgICAvLyDmiJHku6znmoTorqHml7blmajkvp3otZbkuo5yZXF1ZXN0QW5pbWF0aW9uRnJhbWXlm57osINcclxuICAgIC8vIOWmguaenOW9k+WJjUV2ZW50SW50ZXJhY3Rpb27msqHmnInosIPnlKhzdGFydOeahOivnVxyXG4gICAgLy8g5YiZ6K6h5pe25Zmo5LiN5Lya55Sf5pWIXHJcbiAgICBwcml2YXRlIF9oYW5kbGVUaW1lcnMgKCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyDpgY3ljobmlbTkuKp0aW1lcnPliJfooahcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbWVycy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGltZXI6IFRpbWVyID0gdGhpcy50aW1lcnNbIGkgXTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjXRpbWVyIGVuYWJsZWTkuLpmYWxzZe+8jOmCo+S5iOe7p+e7reW+queOr1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyLmVuYWJsZWQgPT09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvdW50ZG93buWIneWni+WMluaXtiA9IHRpbWVvdXRcclxuICAgICAgICAgICAgLy8g5q+P5qyh6LCD55So5pys5Ye95pWw77yM5Lya5YeP5bCR5LiK5LiL5bin55qE5pe26Ze06Ze06ZqUXHJcbiAgICAgICAgICAgIC8vIOS7juiAjOW9ouaIkOWAkuiuoeaXtueahOaViOaenFxyXG4gICAgICAgICAgICB0aW1lci5jb3VudGRvd24gLT0gaW50ZXJ2YWxTZWM7XHJcblxyXG4gICAgICAgICAgICAvLyDlpoLmnpxjb3VudGRvd24g5bCP5LqOIDAuMO+8jOmCo+S5iOivtOaYjuaXtumXtOWIsOS6hlxyXG4gICAgICAgICAgICAvLyDopoHop6blj5Hlm57osIPkuoZcclxuICAgICAgICAgICAgLy8g5LuO6L+Z6YeM55yL5Yiw77yM5a6e6ZmF5LiKdGltZXLlubbkuI3mmK/lvojnsr7noa7nmoRcclxuICAgICAgICAgICAgLy8g5Li+5Liq5L6L5a2Q77yM5YGH6K6+5oiR5LusdXBkYXRl5q+P5qyhMC4xNuenklxyXG4gICAgICAgICAgICAvLyDmiJHku6znmoR0aW1lcuiuvue9rjAuM+enkuWbnuiwg+S4gOasoVxyXG4gICAgICAgICAgICAvLyDpgqPkuYjlrp7pmYXkuIrmmK8gKCAwLjMgLSAwLjMyICkgPCAwICzop6blj5Hlm57osINcclxuICAgICAgICAgICAgaWYgKCB0aW1lci5jb3VudGRvd24gPCAwLjAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyDosIPnlKjlm57osIPlh73mlbBcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNhbGxiYWNrKCB0aW1lci5pZCwgdGltZXIuY2FsbGJhY2tEYXRhICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c6K+l6K6h5pe25Zmo6ZyA6KaB6YeN5aSN6Kem5Y+RXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRpbWVyLm9ubHlPbmNlID09PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oiR5Lus6YeN5paw5bCGY291bnRkb3du6K6+572u5Li6dGltZW91dFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeUseatpOWPr+inge+8jHRpbWVvdXTkuI3kvJrmm7TmlLnvvIzlroPop4Tlrprkuobop6blj5HnmoTml7bpl7Tpl7TpmpRcclxuICAgICAgICAgICAgICAgICAgICAvLyDmr4/mrKHmm7TmlrDnmoTmmK9jb3VudGRvd27lgJLorqHml7blmahcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci5jb3VudGRvd24gPSB0aW1lci50aW1lb3V0OyAvL+W+iOeyvuWmmeeahOS4gOS4quaKgOW3p1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7ICAvLyDlpoLmnpzor6XorqHml7blmajlj6rpnIDopoHop6blj5HkuIDmrKHvvIzpgqPkuYjmiJHku6zlsLHliKDpmaTmjonor6XorqHml7blmahcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRpbWVyKCB0aW1lci5pZCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERpY3Rpb25hcnk8VD4ge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHVzZUVTNk1hcDogYm9vbGVhbiA9IHRydWUgKSB7XHJcbiAgICAgICAgaWYgKCB1c2VFUzZNYXAgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGggKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyAoIGtleTogc3RyaW5nICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICggdGhpcy5faXRlbXMgaW5zdGFuY2VvZiBNYXAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoIGtleSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMuX2l0ZW1zWyBrZXkgXSAhPT0gdW5kZWZpbmVkICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kICgga2V5OiBzdHJpbmcgKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIE1hcCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmdldCgga2V5ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc2VydCAoIGtleTogc3RyaW5nLCB2YWx1ZTogVCApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zIGluc3RhbmNlb2YgTWFwICkge1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5zZXQoIGtleSwgdmFsdWUgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zWyBrZXkgXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUgKCBrZXk6IHN0cmluZyApOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmV0OiBUIHwgdW5kZWZpbmVkID0gdGhpcy5maW5kKCBrZXkgKTtcclxuICAgICAgICBpZiAoIHJldCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdGhpcy5faXRlbXMgaW5zdGFuY2VvZiBNYXAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZSgga2V5ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2l0ZW1zWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY291bnQtLTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtleXMgKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQga2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zIGluc3RhbmNlb2YgTWFwICkge1xyXG4gICAgICAgICAgICBsZXQga2V5QXJyYXkgPSB0aGlzLl9pdGVtcy5rZXlzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBrZXkgb2Yga2V5QXJyYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goIGtleSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICggdmFyIHByb3AgaW4gdGhpcy5faXRlbXMgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKCBwcm9wICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2YWx1ZXMgKCk6IFRbXSB7XHJcbiAgICAgICAgbGV0IHZhbHVlczogVFtdID0gW107XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIE1hcCApIHtcclxuICAgICAgICAgICAgLy8g5LiA5a6a6KaB55Sob2bvvIzlkKbliJnlh7rplJlcclxuICAgICAgICAgICAgbGV0IHZBcnJheSA9IHRoaXMuX2l0ZW1zLnZhbHVlcygpO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgdmFsdWUgb2YgdkFycmF5ICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goIHZhbHVlIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBwcm9wIGluIHRoaXMuX2l0ZW1zICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9pdGVtcy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKCB0aGlzLl9pdGVtc1sgcHJvcCBdICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtczogKCB7IFsgazogc3RyaW5nIF06IFQgfSApIHwgTWFwPHN0cmluZywgVD47XHJcbiAgICBwcml2YXRlIF9jb3VudDogbnVtYmVyID0gMDtcclxuXHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgVHlwZWRBcnJheUxpc3Q8VCBleHRlbmRzIFVpbnQxNkFycmF5IHwgRmxvYXQzMkFycmF5IHwgVWludDhBcnJheT4ge1xyXG4gICAgLy8g5YaF6YOo5L2/55So57G75Z6L5pWw57uE77yM57G75Z6L5pWw57uE5b+F6aG75pivVWludDE2QXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBVaW50OEFycmF55LmL5LiAXHJcbiAgICBwcml2YXRlIF9hcnJheTogVDtcclxuXHJcbiAgICAvLyDlpoLmnpzpnIDopoHlnKhBcnJheUxpc3Q8VD7nmoTmnoTpgKDlh73mlbDkuK1uZXfkuIDkuKrnsbvlnovmlbDnu4TvvIzlv4XpobvopoHmj5Dkvpvor6XnsbvlnovmlbDnu4TnmoTmnoTpgKDlh73mlbDnrb7lkI1cclxuICAgIHByaXZhdGUgX3R5cGVkQXJyYXlDb25zdHJ1Y3RvcjogKCBuZXcgKCBsZW5ndGg6IG51bWJlciApID0+IFQgKTtcclxuXHJcbiAgICAvLyBfbGVuZ3Ro6KGo56S65b2T5YmN5bey57uP5L2/55So6L+H55qE5YWD57Sg5Liq5pWw77yM6ICMX2NhcGFjaXR55piv5oyH5b2T5YmN5bey57uP6aKE5YWI5YaF5a2Y5YiG6YWN5aW955qE55qE5YWD57Sg5Liq5pWwXHJcbiAgICBwcml2YXRlIF9sZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NhcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gICAgLy8g5o+Q5L6b5LiA5Liq5Zue6LCD5Ye95pWw77yM5b2TX2NhcGFjaXR55Y+R55Sf5pS55Y+Y5pe277yM6LCD55So6K+l5Zue6LCD5Ye95pWwXHJcbiAgICBwdWJsaWMgY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2s6ICggKCBhcnJheUxpc3Q6IFR5cGVkQXJyYXlMaXN0PFQ+ICkgPT4gdm9pZCApIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlZEFycmF5Q29uc3RydWN0b3I6IG5ldyAoIGNhcGFjaXR5OiBudW1iZXIgKSA9PiBULCBjYXBhY2l0eTogbnVtYmVyID0gOCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdHlwZWRBcnJheUNvbnN0cnVjdG9yID0gdHlwZWRBcnJheUNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5OyAvLyDogIzpooTlhYjliIbphY3lhoXlrZjnmoTkuKrmlbDkuLpjYXBhY2l0eVxyXG5cclxuICAgICAgICAvLyDnoa7kv53liJ3lp4vljJbml7boh7PlsJHmnIk45Liq5YWD57Sg55qE5a656YePXHJcbiAgICAgICAgaWYgKCB0aGlzLl9jYXBhY2l0eSA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IDg7IC8vIOm7mOiupOWIhumFjTjkuKrlhYPntKDlhoXlrZhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IHRoaXMuX3R5cGVkQXJyYXlDb25zdHJ1Y3RvciggdGhpcy5fY2FwYWNpdHkgKTsgLy8g6aKE5YWI5YiG6YWNY2FwYWNpdHnkuKrlhYPntKDnmoTlhoXlrZhcclxuXHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDsgIC8vIOWIneWni+WMluaXtu+8jOWFtl9sZW5ndGjkuLowXHJcblxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsOyAvL+m7mOiupOaDheWGteS4i++8jOWbnuiwg+WHveaVsOS4um51bGxcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCAoKTogbnVtYmVyIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYXBhY2l0eSAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZUFycmF5ICgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacgOeugOWNlemrmOaViOeahOWkhOeQhuaWueW8j++8jOebtOaOpeiuvue9rl9sZW5ndGjkuLow77yM6YeN55So5pW05Liq57G75Z6L5pWw57uEXHJcbiAgICBwdWJsaWMgY2xlYXIgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoQXJyYXkobnVtczpudW1iZXJbXSk6dm9pZHtcclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyPTA7IGkgPCBudW1zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2gobnVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoICggbnVtOiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qEbGVuZ3Ro6LaF6L+H5LqG6aKE5YWI5YiG6YWN55qE5YaF5a2Y5a656YePXHJcbiAgICAgICAgLy8g6YKj5bCx6ZyA6KaB6L+b6KGM5YaF5a2Y5omp5a65XHJcbiAgICAgICAgaWYgKCB0aGlzLl9sZW5ndGggPj0gdGhpcy5fY2FwYWNpdHkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmnIDlpKflrrnph4/mlbA+MFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2NhcGFjaXR5ID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v5aKe5Yqg5b2T5YmN55qE5pyA5aSn5a656YeP5pWwKOavj+asoee/u+WAjeWinuWKoClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ICs9IHRoaXMuX2NhcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiY3VyciBjYXBhY2l0eSA9IFwiICsgdGhpcy5fY2FwYWNpdHkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgb2xkQXJyYXk6IFQgPSB0aGlzLl9hcnJheTtcclxuICAgICAgICAgICAgdGhpcy5fYXJyYXkgPSBuZXcgdGhpcy5fdHlwZWRBcnJheUNvbnN0cnVjdG9yKCB0aGlzLl9jYXBhY2l0eSApO1xyXG4gICAgICAgICAgICAvLyDlsIZvbGRBcnJheeS4reeahOaVsOaNruWkjeWItuWIsOaWsOW7uueahGFycmF55LitXHJcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnNldCggb2xkQXJyYXkgKTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5Zue6LCD5Ye95pWw77yM5YiZ6LCD55So5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jYXBhY2l0eUNoYW5nZWRDYWxsYmFjayApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2soIHRoaXMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYXJyYXlbIHRoaXMuX2xlbmd0aCBdID0gbnVtO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpZHg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIGlkeCA8IDAgfHwgaWR4ID49IHRoaXMubGVuZ3RoIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLntKLlvJXotornlYzvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpg73mmK9udW1iZXLnsbvlnotcclxuICAgICAgICBsZXQgcmV0OiBudW1iZXIgPSB0aGlzLl9hcnJheVsgaWR4IF07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViQXJyYXkgKCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLmxlbmd0aCApOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LnN1YmFycmF5KCBzdGFydCwgZW5kICkgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2xpY2UgKCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLmxlbmd0aCApOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCBzdGFydCwgZW5kICkgYXMgVDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IE1hdGhIZWxwZXIgfSBmcm9tIFwiLi4vbWF0aC9NYXRoSGVscGVyXCI7XHJcbmltcG9ydCB7IEZydXN0dW19IGZyb20gXCIuL0ZydXN0dW1cIjtcclxuZXhwb3J0IGVudW0gRUNhbWVyYVR5cGUge1xyXG4gICAgRlBTQ0FNRVJBLFxyXG4gICAgRkxZQ0FNRVJBXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFcclxue1xyXG4gICAgcHVibGljIGdldCBmb3ZZICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm92WTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZvdlkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9mb3ZZID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuZWFyICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5lYXIgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9uZWFyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmYXIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmYXIgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9mYXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFzcGVjdFJhdGlvICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXNwZWN0UmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhc3BlY3RSYXRpbyAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwb3NpdGlvbiAoKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBvc2l0aW9uICggdmFsdWU6IFZlY3RvcjMgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZpZXdwb3J0ICggeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5nbC5zY2lzc29yKHgseSx3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Vmlld3BvcnQgKCk6IEludDMyQXJyYXlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nbC5nZXRQYXJhbWV0ZXIoIHRoaXMuZ2wuVklFV1BPUlQgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WNg+S4h+WIq+eUqHRoaXMucG9zaXRpb24ueCA9IHh4eO+8jOWboOS4uuaXoOazleiuvue9rnRoaXMuX3ZpZXdEaXJ0eVxyXG4gICAgLy/or7fnlKjkuIvpnaLnmoTkuInkuKpzZXTmlrnms5VcclxuICAgIHB1YmxpYyBzZXQgeCAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi55ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB6ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24ueiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb24ueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHogKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeEF4aXMgKCk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feEF4aXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5QXhpcyAoKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl95QXhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHpBeGlzICgpOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pBeGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSAoKTogRUNhbWVyYVR5cGVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+avlOi+g+eJueWIq++8jOmcgOimgemHjeaWsOS/ruato+S4gOS6m+WGheWuue+8jOaIluiAheebtOaOpeemgeatouS/ruaUuXR5cGVcclxuICAgIHB1YmxpYyBzZXQgdHlwZSAoIHZhbHVlOiBFQ2FtZXJhVHlwZSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVmdCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByaWdodCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm90dG9tICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm90dG9tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdG9wICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIHB1YmxpYyBjb250cm9sQnlNb3VzZTogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGZvdlk6IG51bWJlciA9IDQ1LjAsIHpOZWFyOiBudW1iZXIgPSAxLCB6RmFyOiBudW1iZXIgPSAxMDAwIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICAgICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgICB0aGlzLl9mb3ZZID0gTWF0aEhlbHBlci50b1JhZGlhbiggZm92WSApO1xyXG5cclxuICAgICAgICB0aGlzLl9uZWFyID0gek5lYXI7XHJcbiAgICAgICAgdGhpcy5fZmFyID0gekZhcjtcclxuXHJcbiAgICAgICAgdGhpcy5fdG9wID0gdGhpcy5fbmVhciAqIE1hdGgudGFuKCB0aGlzLl9mb3ZZICogMC41ICksXHJcbiAgICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl90b3AgKiB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgICB0aGlzLl9ib3R0b20gPSAtdGhpcy5fdG9wO1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSAtdGhpcy5fcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5fZnJ1c3R1bSA9IG5ldyBGcnVzdHVtKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX2ludlZpZXdNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdQcm9qTWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICB0aGlzLl9pbnZWaWV3UHJvak1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnlNb3VzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUgKCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0aW9uTWF0cml4ID0gTWF0cml4NC5wZXJzcGVjdGl2ZSggdGhpcy5mb3ZZLCB0aGlzLmFzcGVjdFJhdGlvLCB0aGlzLm5lYXIsIHRoaXMuZmFyICk7XHJcbiAgICAgICAgdGhpcy5fY2FsY1ZpZXdNYXRyaXgoKTtcclxuICAgICAgICBNYXRyaXg0LnByb2R1Y3QoIHRoaXMuX3Byb2plY3Rpb25NYXRyaXgsIHRoaXMuX3ZpZXdNYXRyaXgsIHRoaXMuX3ZpZXdQcm9qTWF0cml4ICk7XHJcbiAgICAgICAgdGhpcy5fdmlld1Byb2pNYXRyaXguY29weSggdGhpcy5faW52Vmlld1Byb2pNYXRyaXggKTtcclxuICAgICAgICB0aGlzLl92aWV3UHJvak1hdHJpeC5nZXRJbnZlcnNlKCB0aGlzLl9pbnZWaWV3UHJvak1hdHJpeCApO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5bGA6YOo5Z2Q5qCH57O75LiL55qE5YmN5ZCO6L+Q5YqoXHJcbiAgICBwdWJsaWMgbW92ZUZvcndhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3pBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueiArPSB0aGlzLl96QXhpcy56ICogc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3pBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueSArPSB0aGlzLl96QXhpcy55ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogKz0gdGhpcy5fekF4aXMueiAqIHNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+ezu+S4i+eahOW3puWPs+i/kOWKqFxyXG4gICAgcHVibGljIG1vdmVSaWdodHdhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3hBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueiArPSB0aGlzLl94QXhpcy56ICogc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3hBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueSArPSB0aGlzLl94QXhpcy55ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogKz0gdGhpcy5feEF4aXMueiAqIHNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+ezu+S4i+eahOS4iuS4i+i/kOWKqFxyXG4gICAgcHVibGljIG1vdmVVcHdhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi55ICs9IHNwZWVkO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueCArPSB0aGlzLl95QXhpcy54ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKz0gdGhpcy5feUF4aXMueSAqIHNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi56ICs9IHRoaXMuX3lBeGlzLnogKiBzcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsYDpg6jlnZDmoIfovbTnmoTlt6blj7Pml4vovaxcclxuICAgIHB1YmxpYyB5YXcgKCBhbmdsZTogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBNYXRyaXg0Lm0wLnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgYW5nbGUgPSBNYXRoSGVscGVyLnRvUmFkaWFuKCBhbmdsZSApO1xyXG4gICAgICAgIGlmICggdGhpcy5fdHlwZSA9PT0gRUNhbWVyYVR5cGUuRlBTQ0FNRVJBIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAucm90YXRlKCBhbmdsZSwgVmVjdG9yMy51cCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTWF0cml4NC5tMC5yb3RhdGUoIGFuZ2xlLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWF0cml4NC5tMC5tdWx0aXBseVZlYzMoIHRoaXMuX3pBeGlzLCB0aGlzLl96QXhpcyApO1xyXG4gICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl94QXhpcywgdGhpcy5feEF4aXMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+i9tOeahOS4iuS4i+aXi+i9rFxyXG4gICAgcHVibGljIHBpdGNoICggYW5nbGU6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTWF0cml4NC5tMC5zZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIGFuZ2xlID0gTWF0aEhlbHBlci50b1JhZGlhbiggYW5nbGUgKTtcclxuICAgICAgICBNYXRyaXg0Lm0wLnJvdGF0ZSggYW5nbGUsIHRoaXMuX3hBeGlzICk7XHJcbiAgICAgICAgTWF0cml4NC5tMC5tdWx0aXBseVZlYzMoIHRoaXMuX3lBeGlzLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl96QXhpcywgdGhpcy5fekF4aXMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+i9tOeahOa7mui9rFxyXG4gICAgcHVibGljIHJvbGwgKCBhbmdsZTogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZMWUNBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGhIZWxwZXIudG9SYWRpYW4oIGFuZ2xlICk7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAuc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgTWF0cml4NC5tMC5yb3RhdGUoIGFuZ2xlLCB0aGlzLl96QXhpcyApO1xyXG4gICAgICAgICAgICBNYXRyaXg0Lm0wLm11bHRpcGx5VmVjMyggdGhpcy5feEF4aXMsIHRoaXMuX3hBeGlzICk7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl95QXhpcywgdGhpcy5feUF4aXMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47lvZPliY1wb3N0aXRpb27lkox0YXJnZXTojrflvpd2aWV355+p6Zi1XHJcbiAgICAvL+W5tuS4lOS7jnZpZXfnn6npmLXmir3lj5Zmb3J3YXJkLHVwLHJpZ2h05pa55ZCR55+i6YePXHJcbiAgICBwdWJsaWMgbG9va0F0ICggdGFyZ2V0OiBWZWN0b3IzLCB1cDogVmVjdG9yMyA9IFZlY3RvcjMudXAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBNYXRyaXg0Lmxvb2tBdCggdGhpcy5fcG9zaXRpb24sIHRhcmdldCwgdXAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5feEF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAwIF07XHJcbiAgICAgICAgdGhpcy5feUF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxIF07XHJcbiAgICAgICAgdGhpcy5fekF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAyIF07XHJcblxyXG4gICAgICAgIHRoaXMuX3hBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNCBdO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNSBdO1xyXG4gICAgICAgIHRoaXMuX3pBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNiBdO1xyXG5cclxuICAgICAgICB0aGlzLl94QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDggXTtcclxuICAgICAgICB0aGlzLl95QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDkgXTtcclxuICAgICAgICB0aGlzLl96QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDEwIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnZWaWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludlZpZXdNYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwcm9qZWN0aW9uTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Rpb25NYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3UHJvamVjdGlvbk1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3UHJvak1hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludlZpZXdQcm9qZWN0aW9uTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludlZpZXdQcm9qTWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZnJ1c3R1bSAoKTogRnJ1c3R1bVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mcnVzdHVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5b2T5YmN6L205Lul5Y+KcG9zdGlvbuWQiOaIkHZpZXfnn6npmLVcclxuICAgIHByaXZhdGUgX2NhbGNWaWV3TWF0cml4ICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lm7rlrppmb3J3YXJk5pa55ZCRXHJcbiAgICAgICAgdGhpcy5fekF4aXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vZm9yd2FyZCBjcm9zcyByaWdodCA9IHVwXHJcbiAgICAgICAgVmVjdG9yMy5jcm9zcyggdGhpcy5fekF4aXMsIHRoaXMuX3hBeGlzLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvL3VwIGNyb3NzIGZvcndhcmQgPSByaWdodFxyXG4gICAgICAgIFZlY3RvcjMuY3Jvc3MoIHRoaXMuX3lBeGlzLCB0aGlzLl96QXhpcywgdGhpcy5feEF4aXMgKTtcclxuICAgICAgICB0aGlzLl94QXhpcy5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHg6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5feEF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5feUF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcbiAgICAgICAgbGV0IHo6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5fekF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAwIF0gPSB0aGlzLl94QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxIF0gPSB0aGlzLl95QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAyIF0gPSB0aGlzLl96QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAzIF0gPSAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA0IF0gPSB0aGlzLl94QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA1IF0gPSB0aGlzLl95QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA2IF0gPSB0aGlzLl96QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA3IF0gPSAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA4IF0gPSB0aGlzLl94QXhpcy56O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA5IF0gPSB0aGlzLl95QXhpcy56O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxMCBdID0gdGhpcy5fekF4aXMuejtcclxuICAgICAgICB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgMTEgXSA9IDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDEyIF0gPSB4O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxMyBdID0geTtcclxuICAgICAgICB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgMTQgXSA9IHo7XHJcbiAgICAgICAgdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDE1IF0gPSAxLjA7XHJcblxyXG4gICAgICAgIC8v5rGCdmlld+eahOmAhuefqemYte+8jOS5n+WwseaYr+S4lueVjOefqemYtVxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXguZ2V0SW52ZXJzZSggdGhpcy5faW52Vmlld01hdHJpeCApO1xyXG4gICAgICAgIHRoaXMuX2ZydXN0dW0uYnVpbGRGcm9tQ2FtZXJhKCB0aGlzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogRUNhbWVyYVR5cGUgPSBFQ2FtZXJhVHlwZS5GTFlDQU1FUkE7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgcHJpdmF0ZSBfeEF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgcHJpdmF0ZSBfeUF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMCwgMSwgMCApO1xyXG4gICAgcHJpdmF0ZSBfekF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMCwgMCwgMSApO1xyXG5cclxuICAgIHByaXZhdGUgX25lYXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2ZhcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZm92WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9wcm9qZWN0aW9uTWF0cml4OiBNYXRyaXg0O1xyXG4gICAgcHJpdmF0ZSBfdmlld01hdHJpeDogTWF0cml4NDtcclxuICAgIHByaXZhdGUgX2ludlZpZXdNYXRyaXg6IE1hdHJpeDQ7XHJcbiAgICBwcml2YXRlIF92aWV3UHJvak1hdHJpeDogTWF0cml4NDtcclxuICAgIHByaXZhdGUgX2ludlZpZXdQcm9qTWF0cml4OiBNYXRyaXg0O1xyXG5cclxuICAgIHByaXZhdGUgX2ZydXN0dW06IEZydXN0dW07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV2ViR0xBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi93ZWJnbC9XZWJHTEFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IENhbnZhc0tleUJvYXJkRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50SW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQXBwbGljYXRpb24gZXh0ZW5kcyBXZWJHTEFwcGxpY2F0aW9uXHJcbntcclxuICAgIHB1YmxpYyBjYW1lcmE6IENhbWVyYTsgIC8vIOWcqFdlYkdMQXBwbGljYXRpb27nmoTln7rnoYDkuIrlop7liqDkuoblr7nmkYTlg4/mnLrns7vnu5/nmoTmlK/mjIFcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0QXR0cmlidXRlczogV2ViR0xDb250ZXh0QXR0cmlidXRlcyA9IHsgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSB9LCBuZWVkMmQ6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcywgY29udGV4dEF0dHJpYnV0ZXMsIG5lZWQyZCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSggdGhpcy5nbCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCA0NSwgMSwgMjAwMCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnogPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5a2Q57G7b3ZlcnJpZGUgdXBkYXRl5Ye95pWw5pe25b+F6aG76KaB6LCD55So5Z+657G75pys5pa55rOVXHJcbiAgICBwdWJsaWMgdXBkYXRlICggZWxhcHNlZE1zZWM6IG51bWJlciwgaW50ZXJ2YWxTZWM6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g6LCD55SoQ2FtZXJh5a+56LGh55qEdXBkYXRl77yM6L+Z5qC35bCx6IO95a6e5pe255qE6K6h566XY2FtZXJh55qE5oqV5b2x5ZKM6KeG5Zu+55+p6Zi1XHJcbiAgICAgICAgLy8g6L+Z5qC35omN6IO95L+d6K+B5pGE5YOP5py65q2j56Gu6L+Q6KGMXHJcbiAgICAgICAgLy8g5aaC5p6cQ2FtZXJhQXBwbGljYXRpb27nmoTlrZDnsbvopoblhpnvvIhvdmVycmlkZe+8ieacrOWHveaVsFxyXG4gICAgICAgIC8vIOmCo+S5iOW/hemhu+WcqOWHveaVsOeahOacgOWQjuS4gOWPpeS7o+eggeiwg+eUqDogc3VwZXIudXBkYXRlKGVsYXBzZWRNc2VjLGludGVydmFsU2VjKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZSggaW50ZXJ2YWxTZWMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhoXnva7kuIDkuKrpgJrnlKjnmoTmkYTlg4/mnLrmjInplK7kuovku7blk43lupTmk43kvZxcclxuICAgIC8vIOimhuWGme+8iO+8iVxyXG4gICAgcHVibGljIG9uS2V5UHJlc3MgKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZXZ0LmtleSA9PT0gXCJ3XCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUZvcndhcmQoIC0xICk7ICAgLy8g5pGE5YOP5py65ZCR5YmN6L+Q6KGMICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcInNcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRm9yd2FyZCggMSApOyAgICAvLyDmkYTlg4/mnLrlkJHlkI7ov5DooYxcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcImFcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlUmlnaHR3YXJkKCAxICk7ICAgLy8g5pGE5YOP5py65ZCR5Y+z6L+Q6KGMXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJkXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZVJpZ2h0d2FyZCggLTEgKTsgICAvLyDmkYTlg4/mnLrlkJHlt6bov5DooYxcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcInpcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlVXB3YXJkKCAxICk7ICAgICAgIC8vIOaRhOWDj+acuuWQkeS4iui/kOihjFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2dC5rZXkgPT09IFwieFwiIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVVcHdhcmQoIC0xICk7ICAgICAgLy8g5pGE5YOP5py65ZCR5LiL6L+Q6KGMXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJ5XCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEueWF3KCAxICk7ICAgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRZ6L205peL6L2sXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJyXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucm9sbCggMSApOyAgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRa6L205peL6L2sXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PSBcInBcIiApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucGl0Y2goIDEgKTsgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRY6L205peL6L2sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtWZWN0b3IzfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCJcclxuaW1wb3J0IHtNYXRyaXg0fSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCJcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiXHJcbmltcG9ydCB7IFR5cGVkQXJyYXlMaXN0IH0gZnJvbSBcIi4uL2NvbW1vbi9jb250YWluZXIvVHlwZWRBcnJheUxpc3RcIjtcclxuaW1wb3J0IHsgRUF4aXNUeXBlIH0gZnJvbSBcIi4uL21hdGgvTWF0aEhlbHBlclwiO1xyXG5pbXBvcnQgeyBHTE1lc2hCdWlsZGVyIH0gZnJvbSBcIi4uL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5leHBvcnQgY2xhc3MgQ29vcmRTeXN0ZW1cclxue1xyXG4gICAgcHVibGljIHZpZXdwb3J0OiBudW1iZXJbXSA9IFtdOyAvLyDlvZPliY3lnZDmoIfns7vooqvnu5jliLblnKjlk6rkuKrop4blj6PkuK1cclxuICAgIHB1YmxpYyBheGlzOiBWZWN0b3IzOyAvLyDlvZPliY3lnZDmoIfns7vnu5Xlk6rkuKrovbTml4vovaxcclxuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyOyAvLyDlvZPliY3lnZDmoIfns7vnmoTml4vovaznmoTop5LluqYo5LiN5piv5byn5bqm77yBKVxyXG4gICAgcHVibGljIHBvczogVmVjdG9yMzsgLy8g5b2T5YmN5Z2Q5qCH57O755qE5L2N572u77yM5aaC5p6c5piv5aSa6KeG5Y+j5riy5p+T55qE6K+d77yM5bCx5Li6WzAsMCwwXVxyXG4gICAgcHVibGljIGlzRHJhd0F4aXM6IGJvb2xlYW47IC8vIOaYr+WQpue7mOWItuaXi+i9rOi9tFxyXG4gICAgcHVibGljIGlzRDNEOiBib29sZWFuOyAvLyDmmK/lkKbnu5jliLbkuLpcYkQzROW3puaJi+ezu1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHZpZXdwb3J0OiBudW1iZXJbXSwgcG9zOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvLCBheGlzOiBWZWN0b3IzID0gVmVjdG9yMy51cCwgYW5nbGU6IG51bWJlciA9IDAsIGlzRHJhd0F4aXM6IGJvb2xlYW4gPSBmYWxzZSwgaXNEM0Q6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuaXNEcmF3QXhpcyA9IGlzRHJhd0F4aXM7XHJcbiAgICAgICAgdGhpcy5pc0QzRCA9IGlzRDNEO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd0hlbHBlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRIaXRDb2xsb3I6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCggMSwgMSwgMCApO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2lyY2xlUG9pbnRzT25YWVBsYW5lICggcHRzOiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+LCByYWRpdXM6IG51bWJlciwgc2VnbWVudDogbnVtYmVyID0gMzIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHB0cy5jbGVhcigpO1xyXG4gICAgICAgIGxldCBzdGVwOiBudW1iZXIgPSBNYXRoLlBJIC8gc2VnbWVudDtcclxuICAgICAgICBsZXQgYW5nOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAoIGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHNlZ21lbnQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmcgPSBpICogc3RlcDtcclxuICAgICAgICAgICAgcHRzLnB1c2goIE1hdGguY29zKCBhbmcgKSApO1xyXG4gICAgICAgICAgICBwdHMucHVzaCggTWF0aC5zaW4oIGFuZyApICk7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKCAwLjAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3RnVsbENvb3JkU3lzdGVtICggYnVpbGRlcjogR0xNZXNoQnVpbGRlciwgbWF0OiBNYXRyaXg0LCBsZW46IG51bWJlciA9IDEsIHJvdGF0ZUF4aXM6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgYnVpbGRlci5nbC5saW5lV2lkdGgoIDUgKTsgLy8g55SoNeS4quWDj+e0oOWkp+Wwj+eahOebtOW+hOe7mOWItue6v+aute+8jOS9huebruWJjeS7hVNhZmFyaea1j+iniOWZqOWunueOsFxyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZGlzYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7IC8vIOWFs+mXreW4p+e8k+WtmOa3seW6pua1i+ivlVxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTtcclxuICAgICAgICAvLyDmraN46L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDEuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIGxlbiwgMCwgMCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDotJ946L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDEuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIC1sZW4sIDAsIDAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2jeei9tFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAxLjAsIDAuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDEuMCwgMC4wICkudmVydGV4KCAwLjAsIGxlbiwgMC4wICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi0n3novbRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMS4wLCAwLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAxLjAsIDAuMCApLnZlcnRleCggMC4wLCAtbGVuLCAwLjAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2jeui9tFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAwLjAsIDEuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgbGVuICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDotJ966L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAtbGVuICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHJvdGF0ZUF4aXMgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c6KaB57uY5Yi25peL6L2s6L2077yM5YiZ57uY5Yi25Ye65p2lXHJcbiAgICAgICAgICAgIGxldCBzY2FsZTogVmVjdG9yMyA9IHJvdGF0ZUF4aXMuc2NhbGUoIGxlbiApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLCAwLCAwICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIHNjYWxlLngsIHNjYWxlLnksIHNjYWxlLnogKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApOyAvLyDlsIbmuLLmn5PmlbDmja7mj5DkuqTnu5lHUFXov5vooYzmuLLmn5NcclxuICAgICAgICBidWlsZGVyLmdsLmxpbmVXaWR0aCggMSApOyAvLyDmgaLlpI3nur/lrr3kuLox5Liq5YOP57SgXHJcbiAgICAgICAgYnVpbGRlci5nbC5lbmFibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApOyAvLyDmgaLlpI3lvIDlp4vluKfnvJPlrZjmt7HluqbmtYvor5VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRyYXdDb29yZFN5c3RlbSAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgaGl0QXhpczogRUF4aXNUeXBlLCBsZW46IG51bWJlciA9IDUsIHJvdGF0ZUF4aXM6IFZlY3RvcjMgfCBudWxsID0gbnVsbCwgaXNMZWZ0SGFuZG5lc3M6IGJvb2xlYW4gPSBmYWxzZSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgYnVpbGRlci5nbC5saW5lV2lkdGgoIDUgKTtcclxuICAgICAgICBidWlsZGVyLmdsLmRpc2FibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTtcclxuICAgICAgICBpZiAoIGhpdEF4aXMgPT09IEVBeGlzVHlwZS5YQVhJUyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuciwgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmcsIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5iICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIGxlbiwgMCwgMCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMS4wLCAwLjAsIDAuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCBsZW4sIDAsIDAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaGl0QXhpcyA9PT0gRUF4aXNUeXBlLllBWElTIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLnIsIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5nLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuYiApLnZlcnRleCggMCwgbGVuLCAwICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDEuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMS4wLCAwLjAgKS52ZXJ0ZXgoIDAuMCwgbGVuLCAwLjAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaGl0QXhpcyA9PT0gRUF4aXNUeXBlLlpBWElTIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAsIDAsIC1sZW4gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAsIDAsIGxlbiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAtbGVuICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgbGVuICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggcm90YXRlQXhpcyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGU6IFZlY3RvcjMgPSByb3RhdGVBeGlzLnNjYWxlKCBsZW4gKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAwLjAsIDAgKS52ZXJ0ZXgoIDAsIDAsIDAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIHNjYWxlLngsIHNjYWxlLnksIC1zY2FsZS56ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMC4wICkudmVydGV4KCBzY2FsZS54LCBzY2FsZS55LCBzY2FsZS56ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICBidWlsZGVyLmdsLmxpbmVXaWR0aCggMSApO1xyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZW5hYmxlKCBidWlsZGVyLmdsLkRFUFRIX1RFU1QgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgICAvIHwgICAgICAgLyAgIHxcclxuICAgICAgICAvICB8ICAgICAgLyAgIHxcclxuICAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgICB8ICAvMi0gLSAtfC0gLTZcclxuICAgICAgICB8IC8gICAgICAgfCAgL1xyXG4gICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgICAwLS0tLS0tLS0tNC9cclxuICAgICovXHJcbiAgICAvLyDmoLnmja5taW5z54K577yI5LiK5Zu+5Lit55qE6aG254K5Mu+8jOW3puS4i+WQju+8ieWSjG1heHPvvIjkuIrlm77kuK3nmoTpobbngrk177yM5Y+z5LiK5YmN77yJ54K555qE5Z2Q5qCH77yM5L2/55So5Y+C5pWw5oyH5a6a55qE6aKc6Imy57uY5Yi257q/5qGG57uR5a6a55uS77yM5a6D5piv5LiA5Liq56uL5pa55L2TXHJcbiAgICAvLyBHTE1lc2hCdWlsZGVy55qEYmVnaW4gLyBlbmTooqvosIPnlKjkuobkuInmrKFcclxuICAgIHB1YmxpYyBzdGF0aWMgZHJhd0JvdW5kQm94ICggYnVpbGRlcjogR0xNZXNoQnVpbGRlciwgbWF0OiBNYXRyaXg0LCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBjb2xvcjogVmVjdG9yNCA9IFZlY3RvcjQucmVkICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBidWlsZGVyLmdsLmRpc2FibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgICAgIC8vIOS9v+eUqExJTkVfTE9PUOe7mOWItuW6lemdou+8jOazqOaEj+mhtueCuemhuuW6j++8jOmAhuaXtumSiOaWueWQke+8jOagueaNruWPs+aJi+ieuuaXi+WumuWImeWPr+efpe+8jOazlee6v+acneWkllxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORV9MT09QICk7IC8vIOS9v+eUqOeahOaYr0xJTkVfTE9PUOWbvuWFg+e7mOWItuaooeW8j1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWlucy54LCBtaW5zLnksIG1pbnMueiApOyAgLy8gMiAgLSAtIC1cclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWlucy54LCBtaW5zLnksIG1heHMueiApOyAgLy8gMCAgLSAtICtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWF4cy54LCBtaW5zLnksIG1heHMueiApOyAgLy8gNCAgKyAtICtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWF4cy54LCBtaW5zLnksIG1pbnMueiApOyAgLy8gNiAgKyAtIC1cclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26aG26Z2i77yM5rOo5oSP6aG254K56aG65bqP77yM6YCG5pe26ZKI5pa55ZCR77yM5qC55o2u5Y+z5omL6J665peL5a6a5YiZ5Y+v55+l77yM5rOV57q/5pyd5aSWXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWlucy56ICk7ICAvLyAzICAtICsgLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWlucy56ICk7ICAvLyA3ICArICsgLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWF4cy56ICk7ICAvLyA1ICArICsgK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWF4cy56ICk7ICAvLyAxICAtICsgK1xyXG4gICAgICAgICAgICBidWlsZGVyLmVuZCggbWF0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkvb/nlKhMSU5FU+e7mOWItlxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTsgLy8g5L2/55So55qE5pivTElORVPlm77lhYPnu5jliLbmqKHlvI9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1pbnMueCwgbWlucy55LCBtaW5zLnogKTsgICAvLyAyICAtIC0gLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWlucy56ICk7ICAgLy8gMyAgLSArIC1cclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1pbnMueCwgbWlucy55LCBtYXhzLnogKTsgICAvLyAwICAtIC0gK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWF4cy56ICk7ICAgLy8gMSAgLSArICtcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1heHMueCwgbWlucy55LCBtYXhzLnogKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWF4cy56ICk7ICAgLy8gNSAgKyArICtcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1heHMueCwgbWlucy55LCBtaW5zLnogKTsgICAvLyA2ICArIC0gLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWlucy56ICk7ICAgLy8gNyAgKyArIC1cclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGVyLmdsLmVuYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3V2lyZUZyYW1lQ3ViZUJveCAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgaGFsZkxlbjogbnVtYmVyID0gMC4yLCBjb2xvcjogVmVjdG9yNCA9IFZlY3RvcjQucmVkICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWluczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCAtaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7XHJcbiAgICAgICAgbGV0IG1heHM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApO1xyXG4gICAgICAgIERyYXdIZWxwZXIuZHJhd0JvdW5kQm94KCBidWlsZGVyLCBtYXQsIG1pbnMsIG1heHMsIGNvbG9yICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgIC8gfCAgICAgICAvICAgfFxyXG4gICAgICAgLyAgfCAgICAgIC8gICB8XHJcbiAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgIHwgIC8yLSAtIC18LSAtNlxyXG4gICAgICAgfCAvICAgICAgIHwgIC9cclxuICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgIDAtLS0tLS0tLS00L1xyXG4gICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3VGV4dHVyZUN1YmVCb3ggKCBidWlsZGVyOiBHTE1lc2hCdWlsZGVyLCBtYXQ6IE1hdHJpeDQsIGhhbGZMZW46IG51bWJlciA9IDAuMiwgdGM6IG51bWJlcltdID0gW1xyXG4gICAgICAgIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsICAvLyDliY3pnaJcclxuICAgICAgICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAgLy8g5Y+z6Z2iXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgIC8vIOWQjumdolxyXG4gICAgICAgIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsICAvLyDlt6bpnaJcclxuICAgICAgICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAgLy8g5LiK6Z2iXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgIC8vIOS4i+mdolxyXG4gICAgXSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5YmN6Z2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5UUklBTkdMRV9GQU4gKTtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMCBdLCB0Y1sgMSBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDIgXSwgdGNbIDMgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyA0IF0sIHRjWyA1IF0gKS52ZXJ0ZXgoIGhhbGZMZW4sIGhhbGZMZW4sIGhhbGZMZW4gKTsgICAgLy8gNSAgKyArICtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgNiBdLCB0Y1sgNyBdICkudmVydGV4KCAtaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDEgIC0gKyArXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIC8vIOWPs+mdolxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuVFJJQU5HTEVfRkFOICk7XHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDggXSwgdGNbIDkgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxMCBdLCB0Y1sgMTEgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyA2ICArIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxMiBdLCB0Y1sgMTMgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAvLyA3ICArICsgLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxNCBdLCB0Y1sgMTUgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgICAvLyA1ICArICsgK1xyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICAvLyDlkI7pnaJcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLlRSSUFOR0xFX0ZBTiApO1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxNiBdLCB0Y1sgMTcgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyA2ICArIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxOCBdLCB0Y1sgMTkgXSApLnZlcnRleCggLWhhbGZMZW4sIC1oYWxmTGVuLCAtaGFsZkxlbiApOyAvLyAyICAtIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyMCBdLCB0Y1sgMjEgXSApLnZlcnRleCggLWhhbGZMZW4sIGhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyAzICAtICsgLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyMiBdLCB0Y1sgMjMgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAvLyA3ICArICsgLVxyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICAvLyDlt6bpnaJcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLlRSSUFOR0xFX0ZBTiApO1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyNCBdLCB0Y1sgMjUgXSApLnZlcnRleCggLWhhbGZMZW4sIC1oYWxmTGVuLCAtaGFsZkxlbiApOyAgLy8gMiAgLSAtIC1cclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMjYgXSwgdGNbIDI3IF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCAtaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDI4IF0sIHRjWyAyOSBdICkudmVydGV4KCAtaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgICAvLyAxICAtICsgK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAzMCBdLCB0Y1sgMzEgXSApLnZlcnRleCggLWhhbGZMZW4sIGhhbGZMZW4sIC1oYWxmTGVuICk7ICAgLy8gMyAgLSArIC1cclxuICAgICAgICBidWlsZGVyLmVuZCggbWF0ICk7XHJcbiAgICAgICAgLy8g5LiK6Z2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5UUklBTkdMRV9GQU4gKTtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMzIgXSwgdGNbIDMzIF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCBoYWxmTGVuLCBoYWxmTGVuICk7ICAgIC8vIDEgIC0gKyArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDM0IF0sIHRjWyAzNSBdICkudmVydGV4KCBoYWxmTGVuLCBoYWxmTGVuLCBoYWxmTGVuICk7ICAgICAvLyA1ICArICsgK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAzNiBdLCB0Y1sgMzcgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAgLy8gNyAgKyArIC1cclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMzggXSwgdGNbIDM5IF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCBoYWxmTGVuLCAtaGFsZkxlbiApOyAgIC8vIDMgIC0gKyAtXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIC8vIOS4i+mdolxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuVFJJQU5HTEVfRkFOICk7XHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQwIF0sIHRjWyA0MSBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQyIF0sIHRjWyA0MyBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7IC8vIDIgIC0gLSAtXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQ0IF0sIHRjWyA0NSBdICkudmVydGV4KCBoYWxmTGVuLCAtaGFsZkxlbiwgLWhhbGZMZW4gKTsgIC8vIDYgICsgLSAtXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQ2IF0sIHRjWyA0NyBdICkudmVydGV4KCBoYWxmTGVuLCAtaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDQgICsgLSArXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIOWFtuS4reWPguaVsHB0c+aYr0ZydXN0dW0ucG9pbnRz6L+U5Zue55qE5YyF5ZCrOOS4qumhtueCueeahOaVsOe7hFxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3V2lyZUZyYW1lRnJ1c3R1bSAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgcHRzOiBWZWN0b3IzW10sIGNvbG9yOiBWZWN0b3I0ID0gVmVjdG9yNC5yZWQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZGlzYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7XHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26L+R5bmz6Z2i55qE5Zub6L655b2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDAgXS54LCBwdHNbIDAgXS55LCBwdHNbIDAgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyAxIF0ueCwgcHRzWyAxIF0ueSwgcHRzWyAxIF0ueiApOyAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgMiBdLngsIHB0c1sgMiBdLnksIHB0c1sgMiBdLnogKTsgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDMgXS54LCBwdHNbIDMgXS55LCBwdHNbIDMgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26L+c5bmz6Z2i55qE5Zub6L655b2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDQgXS54LCBwdHNbIDQgXS55LCBwdHNbIDQgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyA1IF0ueCwgcHRzWyA1IF0ueSwgcHRzWyA1IF0ueiApOyAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNiBdLngsIHB0c1sgNiBdLnksIHB0c1sgNiBdLnogKTsgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDcgXS54LCBwdHNbIDcgXS55LCBwdHNbIDcgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORVPnu5jliLbnu5jliLbov5HlubPpnaLkuI7ov5zlubPpnaLnmoTlm5vmnaHovrlcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLkxJTkVTICk7IC8vIOS9v+eUqOeahOaYr0xJTkVT5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDAgXS54LCBwdHNbIDAgXS55LCBwdHNbIDAgXS56ICk7ICAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNCBdLngsIHB0c1sgNCBdLnksIHB0c1sgNCBdLnogKTsgICAvLyBcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgMSBdLngsIHB0c1sgMSBdLnksIHB0c1sgMSBdLnogKTsgICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyA1IF0ueCwgcHRzWyA1IF0ueSwgcHRzWyA1IF0ueiApOyAgIC8vIFxyXG5cclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyAyIF0ueCwgcHRzWyAyIF0ueSwgcHRzWyAyIF0ueiApOyAgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDYgXS54LCBwdHNbIDYgXS55LCBwdHNbIDYgXS56ICk7ICAgLy8gXHJcblxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDMgXS54LCBwdHNbIDMgXS55LCBwdHNbIDMgXS56ICk7ICAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNyBdLngsIHB0c1sgNyBdLnksIHB0c1sgNyBdLnogKTsgICAvLyBcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRlci5nbC5lbmFibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiO1xyXG5pbXBvcnQgeyBNYXRyaXg0IH0gZnJvbSBcIi4uL21hdGgvbWF0cml4NFwiO1xyXG5pbXBvcnQgeyBNYXRoSGVscGVyIH0gZnJvbSBcIi4uL21hdGgvTWF0aEhlbHBlclwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRnJ1c3R1bSB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9yZ2luOlZlY3RvcjMgfCBudWxsID0gbnVsbCxwb2ludHM4OlZlY3RvcjNbXSB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgLy/pooTlhYjlhoXlrZjliIbphY045Liq54K5XHJcbiAgICAgICAgaWYob3JnaW4gIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW4gPSBvcmdpbjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9pbnRzOCAhPT0gbnVsbCAmJiBwb2ludHM4Lmxlbmd0aCA9PT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IHBvaW50czg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IG5ldyBBcnJheSg4KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvaW50c1tpXSA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxhbmVzID0gbmV3IEFycmF5KDYpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGxhbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1tpXSA9IG5ldyBWZWN0b3I0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOeUseS7o+eggeWPr+efpe+8jEZydXN0dW3kuK3nmoRvcmlnaW4scG9pbnRz5ZKMcGxhbmVz6YO95piv5Zyo5LiW55WM5Z2Q5qCH57O75Lit55qE6KGo56S6XHJcbiAgICBwdWJsaWMgYnVpbGRGcm9tQ2FtZXJhKGNhbWVyYTogQ2FtZXJhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxlZnQ6bnVtYmVyID0gY2FtZXJhLmxlZnQgKiBjYW1lcmEuZmFyIC8gY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgbGV0IHJpZ2h0Om51bWJlciA9IGNhbWVyYS5yaWdodCAqIGNhbWVyYS5mYXIgLyBjYW1lcmEubmVhcjtcclxuICAgICAgICBsZXQgYm90dG9tOm51bWJlciA9IGNhbWVyYS5ib3R0b20gKiBjYW1lcmEuZmFyIC8gY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgbGV0IHRvcDpudW1iZXIgPSBjYW1lcmEudG9wICogY2FtZXJhLmZhciAvIGNhbWVyYS5uZWFyO1xyXG4gICAgICAgIC8v6K6h566X5Ye66L+R5bmz6Z2iNOS4queCuVxyXG4gICAgICAgIHRoaXMucG9pbnRzWzBdLnggPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzBdLnkgPSBib3R0b207XHJcbiAgICAgICAgdGhpcy5wb2ludHNbMF0ueiA9IC1jYW1lcmEubmVhcjtcclxuICAgICAgICB0aGlzLnBvaW50c1sxXS54ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbMV0ueSA9IGJvdHRvbTtcclxuICAgICAgICB0aGlzLnBvaW50c1sxXS56ID0gLWNhbWVyYS5uZWFyO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzJdLnggPSByaWdodDtcclxuICAgICAgICB0aGlzLnBvaW50c1syXS55ID0gdG9wO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzJdLnogPSAtY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbM10ueCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbM10ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1szXS56ID0gLWNhbWVyYS5uZWFyO1xyXG4gICAgICAgIC8v6K6h566X5Ye66L+c5bmz6Z2iNOS4queCuVxyXG4gICAgICAgIHRoaXMucG9pbnRzWzRdLnggPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzRdLnkgPSBib3R0b207XHJcbiAgICAgICAgdGhpcy5wb2ludHNbNF0ueiA9IC1jYW1lcmEuZmFyO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzVdLnggPSByaWdodDtcclxuICAgICAgICB0aGlzLnBvaW50c1s1XS55ID0gYm90dG9tO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzVdLnogPSAtY2FtZXJhLmZhcjtcclxuICAgICAgICB0aGlzLnBvaW50c1s2XS54ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbNl0ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1s2XS56ID0gLWNhbWVyYS5mYXI7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbN10ueCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbN10ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1s3XS56ID0gLWNhbWVyYS5mYXI7XHJcbiAgICAgICAgLy/orrDkvY/vvIzmraTml7bnmoTmkYTlg4/mnLrlkow45LiqY29ybm9y5piv5Zyodmlld+WdkOagh+ezu+S4reihqOekulxyXG4gICAgICAgIC8v5bCG5pGE5YOP5py655qE5Y6f54K55ZKMOOS4qmNvcm5vcueCueWPmOaNouWIsOS4lueVjOWdkOagh+ezu1xyXG4gICAgICAgIHRoaXMuX29yaWdpbi54ID0gMDtcclxuICAgICAgICB0aGlzLl9vcmlnaW4ueSA9IDA7XHJcbiAgICAgICAgdGhpcy5fb3JpZ2luLnogPSAwO1xyXG4gICAgICAgIC8vIOaRhOWDj+acuueahOWOn+eCueWcqHZpZXflnZDmoIfns7vkuK3mmK9bIDAgLCAwICwgMCBdLOmAmui/h2ludlZpZXdNYXRyaXggKiBfb3JpZ2lu77yM5b6X5Yiw5LqGX29yaWdpbuWcqOS4lueVjOWdkOagh+ezu+eahOihqOekulxyXG4gICAgICAgIHRoaXMuX29yaWdpbiA9IGNhbWVyYS5pbnZWaWV3TWF0cml4Lm11bHRpcGx5VmVjMyh0aGlzLm9yaWdpbik7IFxyXG4gICAgICAgIC8vIOWwhnZpZXflnZDmoIfns7vkuK3ooajnpLrnmoQ45Liq6aG254K55Lmf5Y+Y5o2i5Yiw5LiW55WM5Z2Q5qCH57O75LitXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnRzW2ldID0gY2FtZXJhLmludlZpZXdNYXRyaXgubXVsdGlwbHlWZWMzKHRoaXMucG9pbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mnoTlu7rkuJbnlYzlnZDmoIfns7vooajnpLrnmoQ25Liq5bmz6Z2i77yM5rOV57q/5pyd5YaFXHJcbiAgICAgICAgTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHModGhpcy5fb3JpZ2luLCB0aGlzLl9wb2ludHNbMF0sIHRoaXMuX3BvaW50c1szXSwgdGhpcy5fcGxhbmVzWzBdKTtcclxuICAgICAgICBNYXRoSGVscGVyLnBsYW5lRnJvbVBvaW50cyh0aGlzLl9vcmlnaW4sIHRoaXMuX3BvaW50c1syXSwgdGhpcy5fcG9pbnRzWzFdLCB0aGlzLl9wbGFuZXNbMV0pO1xyXG4gICAgICAgIE1hdGhIZWxwZXIucGxhbmVGcm9tUG9pbnRzKHRoaXMuX29yaWdpbiwgdGhpcy5fcG9pbnRzWzNdLCB0aGlzLl9wb2ludHNbMl0sIHRoaXMuX3BsYW5lc1syXSk7XHJcbiAgICAgICAgTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHModGhpcy5fb3JpZ2luLCB0aGlzLl9wb2ludHNbMV0sIHRoaXMuX3BvaW50c1swXSwgdGhpcy5fcGxhbmVzWzNdKTtcclxuICAgICAgICBNYXRoSGVscGVyLnBsYW5lRnJvbVBvaW50cyh0aGlzLl9wb2ludHNbMF0sIHRoaXMuX3BvaW50c1syXSwgdGhpcy5fcG9pbnRzWzFdLCB0aGlzLl9wbGFuZXNbNF0pO1xyXG4gICAgICAgIE1hdGhIZWxwZXIucGxhbmVGcm9tUG9pbnRzKHRoaXMuX3BvaW50c1s1XSwgdGhpcy5fcG9pbnRzWzddLCB0aGlzLl9wb2ludHNbNF0sIHRoaXMuX3BsYW5lc1s1XSk7XHJcbiAgICAgICAgLy8g5bCGNuS4quW5s+mdouWNleS9jeWMllxyXG4gICAgICAgIGZvcihsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fcGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLnBsYW5lTm9ybWFsaXplKHRoaXMuX3BsYW5lc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NwaGVyZVZpc2libGUoY2VudGVyOiBWZWN0b3IzLCByYWRpdXM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJhZGl1cyA9IC1yYWRpdXM7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3BsYW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KHRoaXMuX3BsYW5lc1tpXSwgY2VudGVyKSA8IHJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0JvdW5kQm94VmlzaWJsZShtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wbGFuZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9wbGFuZXNbaV07XHJcbiAgICAgICAgICAgIFZlY3RvcjMudjAueCA9IChjdXJyZW50LnggPiAwLjApID8gbWF4cy54IDogbWlucy54O1xyXG4gICAgICAgICAgICBWZWN0b3IzLnYwLnkgPSAoY3VycmVudC55ID4gMC4wKSA/IG1heHMueSA6IG1pbnMueTtcclxuICAgICAgICAgICAgVmVjdG9yMy52MC56ID0gKGN1cnJlbnQueiA+IDAuMCkgPyBtYXhzLnogOiBtaW5zLno7XHJcbiAgICAgICAgICAgIGlmIChNYXRoSGVscGVyLnBsYW5lRGlzdGFuY2VGcm9tUG9pbnQoY3VycmVudCwgVmVjdG9yMy52MCkgPCAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUcmlhbmdsZVZpc2libGUoYTogVmVjdG9yMywgYjogVmVjdG9yMywgYzogVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9wbGFuZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IFZlY3RvcjQgPSB0aGlzLl9wbGFuZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChNYXRoSGVscGVyLnBsYW5lRGlzdGFuY2VGcm9tUG9pbnQoY3VycmVudCwgYSkgPj0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KGN1cnJlbnQsIGIpID49IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGhIZWxwZXIucGxhbmVEaXN0YW5jZUZyb21Qb2ludChjdXJyZW50LCBjKSA+PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcmlnaW4oKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcG9pbnRzKCk6IFZlY3RvcjNbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcGxhbmVzKCk6IFZlY3RvcjRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvcjM7ICAvLyDljp/ngrnlnZDmoIdcclxuICAgIHByaXZhdGUgX3BvaW50czogVmVjdG9yM1tdOyAvLyAwLTPooajnpLrov5HlubPpnaLlm5vovrnlvaLnmoTlnZDmoIfvvIw0LTfooajnpLrov5zlubPpnaLnmoTlm5vovrnlvaLlnZDmoIfvvIzov5nkupvpobbngrnlnZDmoIfnmoTluIPlsYDvvIzor7flj4LogIPlm745LjVcclxuICAgIHByaXZhdGUgX3BsYW5lczogVmVjdG9yNFtdOyAvLyDku47kuIrov7A55Liq6aG254K55LiN5ZCM5o6S5YiX57uE5ZCI5ZCO55Sf5oiQ55qE5LiKL+S4iy/lt6Yv5Y+zL+i/nC/ov5Hlha3kuKrlubPpnaLvvIzlhbbms5XlkJHph4/pg73mmK/mnJ1GcnVzdHVt5YaF6YOo77yM5YiH6K6wXHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiO1xyXG5pbXBvcnQgeyBHTEF0dHJpYkJpdHMsIEdMQXR0cmliU3RhdGUgfSBmcm9tIFwiLi4vd2ViZ2wvV2ViR0xBdHRyaWJTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHTFN0YXRpY01lc2ggfSBmcm9tIFwiLi4vd2ViZ2wvV2ViR0xNZXNoXCJcclxuaW1wb3J0IHsgTWF0aEhlbHBlciB9IGZyb20gXCIuLi9tYXRoL01hdGhIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeURhdGFcclxue1xyXG4gICAgLy8g6L6T5YWl6aG254K55bGe5oCn5pWw5o2uXHJcbiAgICBwdWJsaWMgcG9zaXRpb25zOiBWZWN0b3IzW10gPSBbXTtcclxuICAgIHB1YmxpYyB1dnM6IFZlY3RvcjJbXSA9IFtdO1xyXG4gICAgcHVibGljIG5vcm1hbHM6IFZlY3RvcjNbXSA9IFtdO1xyXG4gICAgcHVibGljIGNvbG9yczogVmVjdG9yNFtdID0gW107XHJcbiAgICBwdWJsaWMgdGFuZ2VudHM6IFZlY3RvcjRbXSA9IFtdO1xyXG4gICAgcHVibGljIGluZGljZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIG1ha2VTdGF0aWNWQU8gKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBuZWVkTm9ybWFsczogYm9vbGVhbiA9IGZhbHNlLCBuZWVkVVY6IGJvb2xlYW4gPSB0cnVlICk6IEdMU3RhdGljTWVzaFxyXG4gICAge1xyXG4gICAgICAgIGxldCBiaXRzOiBHTEF0dHJpYkJpdHMgPSB0aGlzLmdldEF0dHJpYkJpdHMoKTtcclxuICAgICAgICBpZiAoIG5lZWROb3JtYWxzID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzICY9IH5HTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggbmVlZFVWID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzICY9IH5HTEF0dHJpYlN0YXRlLlRFWENPT1JEX0JJVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJpZGU6IG51bWJlciA9IEdMQXR0cmliU3RhdGUuZ2V0VmVydGV4Qnl0ZVN0cmlkZSggYml0cyApO1xyXG4gICAgICAgIGxldCBzdGVwOiBudW1iZXIgPSBzdHJpZGUgLyBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgICAgICAgbGV0IGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlciggc3RyaWRlICogdGhpcy5wb3NpdGlvbnMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIGFycmF5QnVmZmVyICk7XHJcbiAgICAgICAgZm9yICggbGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDkvY3nva5cclxuICAgICAgICAgICAgbGV0IGo6IG51bWJlciA9IGkgKiBzdGVwO1xyXG4gICAgICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMucG9zaXRpb25zWyBpIF0ueDtcclxuICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLnBvc2l0aW9uc1sgaSBdLnk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy5wb3NpdGlvbnNbIGkgXS56O1xyXG4gICAgICAgICAgICAvL+azlee6vyjnlKjkuoZiaXRz5ZCO77yM5LiN6IO955SobGVuZ3Ro5p2l5Yik5pat5LqG77yB77yB77yBKVxyXG4gICAgICAgICAgICBpZiAoIGJpdHMgJiBHTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLnk7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nurnnkIZcclxuICAgICAgICAgICAgaWYgKCBiaXRzICYgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMudXZzWyBpIF0ueDtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy51dnNbIGkgXS55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6aKc6ImyXHJcbiAgICAgICAgICAgIGlmICggYml0cyAmIEdMQXR0cmliU3RhdGUuQ09MT1JfQklUIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLmNvbG9yc1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMuY29sb3JzWyBpIF0ueTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy5jb2xvcnNbIGkgXS56O1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLmNvbG9yc1sgaSBdLnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liIfnur9cclxuICAgICAgICAgICAgaWYgKCBiaXRzICYgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0JJVCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy50YW5nZW50c1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMudGFuZ2VudHNbIGkgXS55O1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLnRhbmdlbnRzWyBpIF0uejtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy50YW5nZW50c1sgaSBdLnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lc2g6IEdMU3RhdGljTWVzaCA9IG5ldyBHTFN0YXRpY01lc2goIGdsLCBiaXRzLCBidWZmZXIsIHRoaXMuaW5kaWNlcy5sZW5ndGggPiAwID8gbmV3IFVpbnQxNkFycmF5KCB0aGlzLmluZGljZXMgKSA6IG51bGwgKTtcclxuICAgICAgICB0aGlzLmJ1aWxkQm91bmRpbmdCb3hUbyggbWVzaC5taW5zLCBtZXNoLm1heHMgKTtcclxuICAgICAgICByZXR1cm4gbWVzaDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVpbGRCb3VuZGluZ0JveFRvICggbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICggbGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLmJvdW5kQm94QWRkUG9pbnQoIHRoaXMucG9zaXRpb25zWyBpIF0sIG1pbnMsIG1heHMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF0dHJpYkJpdHMgKCk6IEdMQXR0cmliQml0c1xyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5wb3NpdGlvbnMubGVuZ3RoID09PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLlv4XpobvopoHmnInpobbmlbDmja4hISFcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJpdHM6IEdMQXR0cmliQml0cyA9IEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUO1xyXG4gICAgICAgIGlmICggdGhpcy51dnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRoaXMubm9ybWFscy5sZW5ndGggPiAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpdHMgfD0gR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRoaXMuY29sb3JzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLnRhbmdlbnRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYml0cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1YmVcclxue1xyXG4gICAgcHVibGljIGhhbGZXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhhbGZIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoYWxmRGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBoYWxmV2lkdGg6IG51bWJlciA9IDAuMiwgaGFsZkhlaWdodDogbnVtYmVyID0gMC4yLCBoYWxmRGVwdGg6IG51bWJlciA9IDAuMiApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oYWxmV2lkdGggPSBoYWxmV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oYWxmSGVpZ2h0ID0gaGFsZkhlaWdodDtcclxuICAgICAgICB0aGlzLmhhbGZEZXB0aCA9IGhhbGZEZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgICAgICAgLyB8ICAgICAgIC8gICB8XHJcbiAgICAgICAgICAgIC8gIHwgICAgICAvICAgfFxyXG4gICAgICAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgICAgICAgfCAgLzItIC0gLXwtIC02XHJcbiAgICAgICAgICAgIHwgLyAgICAgICB8ICAvXHJcbiAgICAgICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgICAgICAgMC0tLS0tLS0tLTQvXHJcblxyXG4gICAgKi9cclxuXHJcbiAgICBwdWJsaWMgbWFrZUdlb21ldHJ5RGF0YVdpdGhUZXh0dXJlQ29vb3JkICgpOiBHZW9tZXRyeURhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogR2VvbWV0cnlEYXRhID0gbmV3IEdlb21ldHJ5RGF0YSgpO1xyXG4gICAgICAgIGRhdGEucG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCB0aGlzLmhhbGZEZXB0aCApLCAvLyAwXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKCB0aGlzLmhhbGZXaWR0aCwgLXRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSwgIC8vIDRcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoIHRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsIHRoaXMuaGFsZkRlcHRoICksICAvLyA1XHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZGF0YS51dnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAwLCAwICksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAxLCAwICksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAxLCAxICksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZUdlb21ldHJ5RGF0YSAoKTogR2VvbWV0cnlEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IEdlb21ldHJ5RGF0YSA9IG5ldyBHZW9tZXRyeURhdGEoKTtcclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCB0aGlzLmhhbGZEZXB0aCApICk7IC8vIDBcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMSwgMCApICk7XHJcblxyXG4gICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCAtdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAvLyAxXHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDEsIDEgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCAtdGhpcy5oYWxmRGVwdGggKSApOyAvLyAyXHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDAsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsIC10aGlzLmhhbGZEZXB0aCApICk7IC8vIDNcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMCwgMSApICk7XHJcblxyXG4gICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCB0aGlzLmhhbGZXaWR0aCwgLXRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAvLyA0XHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDAsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAgLy8gNVxyXG4gICAgICAgIGRhdGEudXZzLnB1c2goIG5ldyBWZWN0b3IyKCAwLCAxICkgKTtcclxuXHJcbiAgICAgICAgZGF0YS5wb3NpdGlvbnMucHVzaCggbmV3IFZlY3RvcjMoIHRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCAtdGhpcy5oYWxmRGVwdGggKSApOyAvLyA2XHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDEsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgLXRoaXMuaGFsZkRlcHRoICkgKTsgIC8vIDdcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMSwgMSApICk7XHJcblxyXG4gICAgICAgIC8vIOazlee6v+acneWkllxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAwLCAxLCAzLCAwLCAzLCAyICk7IC8vIOW3pumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAzLCA3LCA2LCAzLCA2LCAyICk7IC8vIOWQjumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCA2LCA3LCA1LCA2LCA1LCA0ICk7IC8vIOWPs+mdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCA1LCAxLCAwLCA1LCAwLCA0ICk7IC8vIOWJjemdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAxLCA1LCA3LCAxLCA3LCAzICk7IC8vIOS4iumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAyLCA2LCA0LCAyLCA0LCAwICk7IC8vIOS4i+mdolxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFBsYW5lXHJcbntcclxuICAgIHB1YmxpYyBzeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHN5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbng6IG51bWJlcjtcclxuICAgIHB1YmxpYyBueTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHN4OiBudW1iZXIgPSAxMCwgc3k6IG51bWJlciA9IDEwLCBueDogbnVtYmVyID0gMTAsIG55OiBudW1iZXIgPSAxMCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zeCA9IHN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBzeTtcclxuICAgICAgICB0aGlzLm54ID0gbng7XHJcbiAgICAgICAgdGhpcy5ueSA9IG55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlR2VvbWV0cnlEYXRhICgpOiBHZW9tZXRyeURhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogR2VvbWV0cnlEYXRhID0gbmV3IEdlb21ldHJ5RGF0YSgpO1xyXG4gICAgICAgIGZvciAoIGxldCBpeTogbnVtYmVyID0gMDsgaXkgPD0gdGhpcy5ueTsgaXkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaXg6IG51bWJlciA9IDA7IGl4IDw9IHRoaXMubng7IGl4KysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdTogbnVtYmVyID0gaXggLyB0aGlzLm54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IG51bWJlciA9IGl5IC8gdGhpcy5ueTtcclxuICAgICAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSAtdGhpcy5zeCAvIDIgKyB1ICogdGhpcy5zeDsgLy8gc3RhcnRzIG9uIHRoZSBsZWZ0XHJcbiAgICAgICAgICAgICAgICBsZXQgeTogbnVtYmVyID0gdGhpcy5zeSAvIDIgLSB2ICogdGhpcy5zeTsgLy8gc3RhcnRzIGF0IHRoZSB0b3BcclxuICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCB4LCB5LCAwICkgKTtcclxuICAgICAgICAgICAgICAgIGRhdGEudXZzLnB1c2goIG5ldyBWZWN0b3IyKCB1LCAxLjAgLSB2ICkgKTtcclxuICAgICAgICAgICAgICAgIGRhdGEubm9ybWFscy5wdXNoKCBuZXcgVmVjdG9yMyggMCwgMCwgMSApICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl5IDwgdGhpcy5ueSAmJiBpeCA8IHRoaXMubnggKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmRpY2VzLnB1c2goIGl5ICogKCB0aGlzLm54ICsgMSApICsgaXgsICggaXkgKyAxICkgKiAoIHRoaXMubnggKyAxICkgKyBpeCArIDEsIGl5ICogKCB0aGlzLm54ICsgMSApICsgaXggKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAoIGl5ICsgMSApICogKCB0aGlzLm54ICsgMSApICsgaXggKyAxLCBpeSAqICggdGhpcy5ueCArIDEgKSArIGl4LCAoIGl5ICsgMSApICogKCB0aGlzLm54ICsgMSApICsgaXggKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRJbnRlcmFjdGlvbiB9IGZyb20gXCIuL2NvbW1vbi9FdmVudEludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4uL2RlbW8vUm90YXRpbmdDdWJlQXBwbGljYXRpb25cIjtcclxuXHJcbi8vIOiOt+W+l0hUTUxTZWxlY3RFbGVtZW505a+56LGh77yM55So5p2l5YiH5o2i6KaB6L+Q6KGM55qEQXBwbGljYXRpb25cclxubGV0IHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdCcgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbi8vIOiOt+WPlueUqOS6juiOt+W+l3dlYmds5LiK5LiL5paH5a+56LGh55qESFRNTENhbnZhc0VsZW1lbnTlhYPntKBcclxubGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3ZWJnbCcgKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmxldCBhcHBOYW1lczogc3RyaW5nW10gPSBbXHJcbiAgICBcIuesrDPnq6DvvJpSb3RhdGluZ0N1YmVBcHBsaWNhdGlvblwiXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtICggc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCwgdmFsdWU6IHN0cmluZyApOiB2b2lkXHJcbntcclxuICAgIHNlbGVjdC5vcHRpb25zLmFkZCggbmV3IE9wdGlvbiggdmFsdWUsIHZhbHVlICkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSXRlbWVzICggc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCApOiB2b2lkXHJcbntcclxuICAgIGlmICggY2FudmFzID09PSBudWxsIClcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFwcE5hbWVzLmxlbmd0aDsgaSsrIClcclxuICAgIHtcclxuICAgICAgICBhZGRJdGVtKCBzZWxlY3QsIGFwcE5hbWVzWyBpIF0gKTtcclxuICAgIH1cclxufVxyXG5cclxuZW51bSBFQVBQTmFtZXtcclxuICAgIFJPVEFUSU5HQ1VCRSxcclxuICAgIEFTWU5DTE9BRCxcclxuICAgIEJBU0lDV0VCR0wsXHJcbiAgICBNRVNIQlVJTERFUixcclxuICAgIENPT1JEU1lTVEVNLFxyXG4gICAgUTNCU1AsXHJcbiAgICBET09NM1BST0MsXHJcbiAgICBET09NM01ENVxyXG59XHJcbmZ1bmN0aW9uIHJ1bkFwcGxpY2F0aW9uKG5hbWU6RUFQUE5hbWUpOnZvaWR7XHJcbiAgICAvLyDojrflj5bnlKjkuo7ojrflvpd3ZWJnbOS4iuS4i+aWh+WvueixoeeahEhUTUxDYW52YXNFbGVtZW505YWD57SgXHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dlYmdsJyApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKCBuYW1lID09PSBFQVBQTmFtZS5ST1RBVElOR0NVQkUgKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhcHA6IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uID0gbmV3IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uKCBjYW52YXMgKTtcclxuICAgICAgICBhcHAuZnJhbWVDYWxsYmFjayA9IGZyYW1lQ2FsbGJhY2s7XHJcbiAgICAgICAgYXBwLnJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0ICggdGFnTmFtZTogc3RyaW5nICk6IFRleHRcclxue1xyXG4gICAgbGV0IGVsZW06IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0YWdOYW1lICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgbGV0IHRleHQ6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggXCJcIiApO1xyXG4gICAgZWxlbS5hcHBlbmRDaGlsZCggdGV4dCApO1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmxldCBmcHM6IFRleHQgPSBjcmVhdGVUZXh0KCBcImZwc1wiICk7XHJcbmxldCB0cmlzOiBUZXh0ID0gY3JlYXRlVGV4dCggXCJ0cmlzXCIgKTtcclxubGV0IHZlcnRzOiBUZXh0ID0gY3JlYXRlVGV4dCggXCJ2ZXJ0c1wiICk7XHJcblxyXG5mdW5jdGlvbiBmcmFtZUNhbGxiYWNrICggYXBwOiBFdmVudEludGVyYWN0aW9uICk6IHZvaWRcclxue1xyXG4gICAgZnBzLm5vZGVWYWx1ZSA9IFN0cmluZyggYXBwLmZwcy50b0ZpeGVkKCAwICkgKTtcclxuICAgIHRyaXMubm9kZVZhbHVlID0gXCIwXCI7XHJcbiAgICB2ZXJ0cy5ub2RlVmFsdWUgPSBcIjBcIjtcclxufVxyXG5cclxucnVuQXBwbGljYXRpb24oRUFQUE5hbWUuUk9UQVRJTkdDVUJFKTsiLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vdmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4vdmVjdG9yM1wiO1xyXG5pbXBvcnQgVmVjdG9yNCBmcm9tIFwiLi92ZWN0b3I0XCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IEVQU0lMT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgcXVhdCBmcm9tIFwiLi9xdWF0XCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5RGF0YSB9IGZyb20gXCIuLi9saWIvUHJpbWl0aXZlc1wiO1xyXG5pbXBvcnQgeyBHTE1lc2hCdWlsZGVyIH0gZnJvbSBcIi4uL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRUF4aXNUeXBlXHJcbntcclxuICAgIE5PTkUgPSAtMSxcclxuICAgIFhBWElTLFxyXG4gICAgWUFYSVMsXHJcbiAgICBaQVhJU1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFUGxhbmVMb2Ncclxue1xyXG4gICAgRlJPTlQsICAgICAgICAgLy8g5Zyo5bmz6Z2i55qE5q2j6Z2iXHJcbiAgICBCQUNLLCAgICAgICAgICAvLyDlnKjlubPpnaLnmoTog4zpnaJcclxuICAgIENPUExBTkFSICAgICAgIC8vIOS4juW5s+mdouWFsemdolxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0aEhlbHBlclxyXG57XHJcblxyXG4gICAgLy8g6KeS5bqmL+W8p+W6puS6kui9rOWHveaVsFxyXG4gICAgcHVibGljIHN0YXRpYyB0b1JhZGlhbiAoIGRlZ3JlZTogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9EZWdyZWUgKCByYWRpYW46IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcmFkaWFuIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmta7ngrnmlbDlrrnlt67nm7jnrYnlh73mlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyRXF1YWxzICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKCBsZWZ0IC0gcmlnaHQgKSA+IEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYW1wICggeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggeCA8IG1pbiApID8gbWluIDogKCB4ID4gbWF4ICkgPyBtYXggOiB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreS4gOS4quaVtOaVsOaYr+WQpuaYrzLnmoRu5qyh5pa5KDEsMiw0LDgsMTYsMzIsNjQsMTI4LDI1OCw1MTIsMTAyNCwyMDQ4LC4uLi4pXHJcbiAgICAvLyDnlKjkuo4y55qEbuasoeaWuee6ueeQhuWIpOaWrVxyXG4gICAgcHVibGljIHN0YXRpYyBpc1Bvd2VyT2ZUd28gKCB2YWx1ZTogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCAoIHZhbHVlICYgKCB2YWx1ZSAtIDEgKSApID09IDAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iajJHTFZpZXdwb3J0U3BhY2UgKCBsb2NhbFB0OiBWZWN0b3IzLCBtdnA6IE1hdHJpeDQsIHZpZXdwb3J0OiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCB2aWV3cG9ydFB0OiBWZWN0b3IzICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgdjogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCBsb2NhbFB0LngsIGxvY2FsUHQueSwgbG9jYWxQdC56LCAxLjAgKTtcclxuICAgICAgICBtdnAubXVsdGlwbHlWZWM0KCB2LCB2ICk7IC8vIOWwhumhtueCueS7jmxvY2Fs5Z2Q5qCH57O75Y+Y5o2i5Yiw5oqV5b2x5Z2Q5qCH57O777yM5oiW6KOB5Ymq5Z2Q5qCH57O7XHJcbiAgICAgICAgaWYgKCB2LncgPT09IDAuMCApIC8vIOWmguaenOWPmOaNouWQjueahHfkuLow77yM5YiZ6L+U5ZueZmFsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bCG6KOB5Ymq5Z2Q5qCH57O755qE54K555qEeCAvIHkgLyB65YiG6YeP6Zmk5Luld++8jOW+l+WIsG5vcm1hbGl6ZWTlnZDmoIflgLxbIC0xICwgMSBd5LmL6Ze0XHJcbiAgICAgICAgdi54IC89IHYudztcclxuICAgICAgICB2LnkgLz0gdi53O1xyXG4gICAgICAgIHYueiAvPSB2Lnc7XHJcbiAgICAgICAgLy8gWy0xICwgMV3moIfnpLrnmoTngrnlj5jmjaLliLDop4blj6PlnZDmoIfns7tcclxuICAgICAgICB2LnggPSB2LnggKiAwLjUgKyAwLjU7XHJcbiAgICAgICAgdi55ID0gdi55ICogMC41ICsgMC41O1xyXG4gICAgICAgIHYueiA9IHYueiAqIDAuNSArIDAuNTtcclxuICAgICAgICAvLyDop4blj6PlnZDmoIfns7vlho3lj5jmjaLliLDlsY/luZXlnZDmoIfns7tcclxuICAgICAgICB2aWV3cG9ydFB0LnggPSB2LnggKiB2aWV3cG9ydFsgMiBdICsgdmlld3BvcnRbIDAgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnkgPSB2LnkgKiB2aWV3cG9ydFsgMyBdICsgdmlld3BvcnRbIDEgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnogPSB2Lno7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h566X5LiJ6KeS5b2i55qE5rOV5ZCR6YePXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOb3JtYWwgKCBhOiBWZWN0b3IzLCBiOiBWZWN0b3IzLCBjOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjMgfCBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFyZXN1bHQgKSByZXN1bHQgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGxldCBsMDogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgbGV0IGwxOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBWZWN0b3IzLmRpZmZlcmVuY2UoIGIsIGEsIGwwICk7XHJcbiAgICAgICAgVmVjdG9yMy5kaWZmZXJlbmNlKCBjLCBhLCBsMSApO1xyXG4gICAgICAgIFZlY3RvcjMuY3Jvc3MoIGwwLCBsMSwgcmVzdWx0ICk7XHJcbiAgICAgICAgcmVzdWx0Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL6Z2i5Zub5Liq5Ye95pWw5piv5bmz6Z2i55u45YWz5Ye95pWwXHJcbiAgICAvL2F4K2J5K2N6LWQ9MFxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2ludHMgKCBhOiBWZWN0b3IzLCBiOiBWZWN0b3IzLCBjOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjQgfCBudWxsID0gbnVsbCApOiBWZWN0b3I0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICBsZXQgbm9ybWFsOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWwoIGEsIGIsIGMsIG5vcm1hbCApO1xyXG4gICAgICAgIGxldCBkOiBudW1iZXIgPSAtVmVjdG9yMy5kb3QoIG5vcm1hbCwgYSApO1xyXG4gICAgICAgIHJlc3VsdC54ID0gbm9ybWFsLng7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBub3JtYWwueTtcclxuICAgICAgICByZXN1bHQueiA9IG5vcm1hbC56O1xyXG4gICAgICAgIHJlc3VsdC53ID0gZDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVGcm9tUG9pbnROb3JtYWwgKCBwb2ludDogVmVjdG9yMywgbm9ybWFsOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjQgfCBudWxsID0gbnVsbCApOiBWZWN0b3I0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICByZXN1bHQueCA9IG5vcm1hbC54O1xyXG4gICAgICAgIHJlc3VsdC55ID0gbm9ybWFsLnk7XHJcbiAgICAgICAgcmVzdWx0LnogPSBub3JtYWwuejtcclxuICAgICAgICByZXN1bHQudyA9IC1WZWN0b3IzLmRvdCggbm9ybWFsLCBwb2ludCApO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2x5Z29uICggcG9seWdvbjogVmVjdG9yM1tdICk6IFZlY3RvcjRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHBvbHlnb24ubGVuZ3RoIDwgMyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi5aSa5Y+Y5b2i55qE6aG254K55pWw5b+F6aG75aSn5LqO5oiW562J5LqOMyEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHMoIHBvbHlnb25bIDAgXSwgcG9seWdvblsgMSBdLCBwb2x5Z29uWyAyIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYW5lRGlzdGFuY2VGcm9tUG9pbnQgKCBwbGFuZTogVmVjdG9yNCwgcG9pbnQ6IFZlY3RvcjMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggcG9pbnQueCAqIHBsYW5lLnggKyBwb2ludC55ICogcGxhbmUueSArIHBvaW50LnogKiBwbGFuZS56ICsgcGxhbmUudyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVUZXN0UG9pbnQgKCBwbGFuZTogVmVjdG9yNCwgcG9pbnQ6IFZlY3RvcjMgKTogRVBsYW5lTG9jXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG51bTogbnVtYmVyID0gTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KCBwbGFuZSwgcG9pbnQgKTtcclxuICAgICAgICBpZiAoIG51bSA+IEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5GUk9OVDtcclxuICAgICAgICB9IGVsc2UgaWYgKCBudW0gPCAtIEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5CQUNLO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5DT1BMQU5BUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZU5vcm1hbGl6ZSAoIHBsYW5lOiBWZWN0b3I0ICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBsZW5ndGg6IG51bWJlciwgaWxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoIHBsYW5lLnggKiBwbGFuZS54ICsgcGxhbmUueSAqIHBsYW5lLnkgKyBwbGFuZS56ICogcGxhbmUueiApO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi6Z2i56ev5Li6MOeahOW5s+mdoiEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbGVuZ3RoID0gMS4wIC8gbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLnggPSBwbGFuZS54ICogaWxlbmd0aDtcclxuICAgICAgICBwbGFuZS55ID0gcGxhbmUueSAqIGlsZW5ndGg7XHJcbiAgICAgICAgcGxhbmUueiA9IHBsYW5lLnogKiBpbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLncgPSBwbGFuZS53ICogaWxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvdW5kQm94QWRkUG9pbnQgKCB2OiBWZWN0b3IzLCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHYueCA8IG1pbnMueCApIHsgbWlucy54ID0gdi54IH07ICBcclxuICAgICAgICBpZiAoIHYueCA+IG1heHMueCApIHsgbWF4cy54ID0gdi54IH07XHJcblxyXG4gICAgICAgIGlmICggdi55IDwgbWlucy55ICkgeyBtaW5zLnkgPSB2LnkgfTtcclxuICAgICAgICBpZiAoIHYueSA+IG1heHMueSApIHsgbWF4cy55ID0gdi55IH07XHJcblxyXG4gICAgICAgIGlmICggdi56IDwgbWlucy56ICkgeyBtaW5zLnogPSB2LnogfTtcclxuICAgICAgICBpZiAoIHYueiA+IG1heHMueiApIHsgbWF4cy56ID0gdi56IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveENsZWFyICggbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMywgdmFsdWU6IG51bWJlciA9IEluZmluaXR5ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBtaW5zLnggPSBtaW5zLnkgPSBtaW5zLnogPSB2YWx1ZTsgICAvLyDliJ3lp4vljJbml7bvvIzorqltaW5z6KGo56S65rWu54K55pWw55qE5pyA5aSn6IyD5Zu0XHJcbiAgICAgICAgbWF4cy54ID0gbWF4cy55ID0gbWF4cy56ID0gLXZhbHVlOyAgLy8g5Yid5aeL5YyW5piv77yM6K6pbWF4c+ihqOekuua1rueCueaVsOeahOacgOWwj+iMg+WbtFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+W+l0FBQkLljIXlm7Tnm5LnmoTkuK3lv4PngrnlnZDmoIdcclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hHZXRDZW50ZXIgKCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBvdXQ6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBvdXQgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3V0ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gKG1heHMgKyBtaW5zKSAqIDAuNVxyXG4gICAgICAgIFZlY3RvcjMuc3VtKCBtaW5zLCBtYXhzLCBvdXQgKTtcclxuICAgICAgICBvdXQuc2NhbGUoIDAuNSApO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveEdldDhQb2ludHMgKCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBwdHM4OiBWZWN0b3IzW10gKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgLzMtLS0tLS0tLS83ICB8XHJcbiAgICAgICAgLyB8ICAgICAgIC8gICB8XHJcbiAgICAgICAgLyAgfCAgICAgIC8gICB8XHJcbiAgICAgICAgMS0tLS0tLS0tLTUgICB8XHJcbiAgICAgICAgfCAgLzItIC0gLXwtIC02XHJcbiAgICAgICAgfCAvICAgICAgIHwgIC9cclxuICAgICAgICB8LyAgICAgICAgfCAvXHJcbiAgICAgICAgMC0tLS0tLS0tLTQvXHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgY2VudGVyOiBWZWN0b3IzID0gTWF0aEhlbHBlci5ib3VuZEJveEdldENlbnRlciggbWlucywgbWF4cyApOyAvLyDojrflj5bkuK3lv4PngrlcclxuICAgICAgICBsZXQgbWF4czJjZW50ZXI6IFZlY3RvcjMgPSBWZWN0b3IzLmRpZmZlcmVuY2UoIGNlbnRlciwgbWF4cyApOyAvLyDojrflj5bmnIDlpKfngrnliLDkuK3lv4PngrnkuYvpl7TnmoTot53nprvlkJHph49cclxuXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiApICk7ICAvLyAwXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSAtIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiApICk7ICAvLyAxXHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IFZlY3RvcjMoIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgKyBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogKSApOyAgLy8gMlxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IFZlY3RvcjMoIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogKSApOyAgLy8gM1xyXG5cclxuICAgICAgICBwdHM4LnB1c2goIG5ldyBWZWN0b3IzKCBjZW50ZXIueCAtIG1heHMyY2VudGVyLngsIGNlbnRlci55ICsgbWF4czJjZW50ZXIueSwgY2VudGVyLnogKyBtYXhzMmNlbnRlci56ICkgKTsgIC8vIDRcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyBWZWN0b3IzKCBjZW50ZXIueCAtIG1heHMyY2VudGVyLngsIGNlbnRlci55IC0gbWF4czJjZW50ZXIueSwgY2VudGVyLnogKyBtYXhzMmNlbnRlci56ICkgKTsgIC8vIDVcclxuXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiApICk7ICAvLyA2XHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSAtIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiApICk7ICAvLyA3XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveFRyYW5zZm9ybSAoIG1hdDogTWF0cml4NCwgbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHB0czpWZWN0b3IzW10gPSBbXTsgLy8g5YiG6YWN5pWw57uE5YaF5a2Y77yM57G75Z6L5Li6VmVjdG9yM1xyXG4gICAgICAgIE1hdGhIZWxwZXIuYm91bmRCb3hHZXQ4UG9pbnRzKG1pbnMsbWF4cyxwdHMpOyAvLyDojrflvpflsYDpg6jlnZDmoIfns7vooajnpLrnmoRBQUJC55qEOOS4qumhtueCueWdkOagh1xyXG4gICAgICAgIGxldCBvdXQ6VmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7IC8vIOWPmOaNouWQjueahOmhtueCuVxyXG4gICAgICAgIC8vIOmBjeWOhuWxgOmDqOWdkOagh+ezu+eahDjkuKpBQUJC5YyF5Zu055uS55qE6aG254K55Z2Q5qCHXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7IGkgPCBwdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vIOWwhuWxgOmDqOWdkOagh+ihqOekuueahOmhtueCueWPmOaNouWIsG1hdOWdkOagh+epuumXtOS4reWOu++8jOWPmOaNouWQjueahOe7k+aenOaUvuWcqG91dOWPmOmHj+S4rVxyXG4gICAgICAgICAgICBtYXQubXVsdGlwbHlWZWMzKHB0c1tpXSxvdXQpOyBcclxuICAgICAgICAgICAgLy8g6YeN5paw5p6E6YCg5paw55qE77yM5LiO5LiW55WM5Z2Q5qCH57O76L205a+556ew55qEQUFCQuWMheWbtOebklxyXG4gICAgICAgICAgICB0aGlzLmJvdW5kQm94QWRkUG9pbnQob3V0LG1pbnMsbWF4cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hDb250YWluc1BvaW50ICggcG9pbnQ6IFZlY3RvcjMsIG1pbnM6IFZlY3RvcjMsIG1heHM6IFZlY3RvcjMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoIHBvaW50LnggPj0gbWlucy54ICYmIHBvaW50LnggPD0gbWF4cy54ICYmIHBvaW50LnkgPj0gbWlucy55ICYmIHBvaW50LnkgPD0gbWF4cy55ICYmIHBvaW50LnogPj0gbWlucy56ICYmIHBvaW50LnogPD0gbWF4cy56ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveEJvdW5kQm94T3ZlcmxhcCAoIG1pbjE6IFZlY3RvcjMsIG1heDE6IFZlY3RvcjMsIG1pbjI6IFZlY3RvcjMsIG1heDI6IFZlY3RvcjMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICggbWluMS54ID4gbWF4Mi54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICggbWF4MS54IDwgbWluMi54ICkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIG1pbjEueSA+IG1heDIueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIG1heDEueSA8IG1pbjIueSApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBtaW4xLnogPiBtYXgyLnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCBtYXgxLnogPCBtaW4yLnogKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFZlYzNJRENvb3JkMkdMQ29vcmQgKCB2OiBWZWN0b3IzLCBzY2FsZTogbnVtYmVyID0gMTAuMCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGY6IG51bWJlciA9IHYueTsgLy8gb3BlbmdsIHJpZ2h0ID0gZG9vb20zIHhcclxuICAgICAgICB2LnkgPSB2Lno7ICAgICAgICAgIC8vb3BlbmdsIHVwID0gZG9vbTMgelxyXG4gICAgICAgIHYueiA9IC1mOyAgICAgICAgICAgLy9vcGVuZ2wgZm9yd2FyZCA9IGRvb20zIC15XHJcbiAgICAgICAgaWYgKCAhTWF0aEhlbHBlci5udW1iZXJFcXVhbHMoIHNjYWxlLCAwICkgJiYgIU1hdGhIZWxwZXIubnVtYmVyRXF1YWxzKCBzY2FsZSwgMS4wICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdi54IC89IHNjYWxlO1xyXG4gICAgICAgICAgICB2LnkgLz0gc2NhbGU7XHJcbiAgICAgICAgICAgIHYueiAvPSBzY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VmVjMklEQ29vcmQyR0xDb29yZCAoIHY6IFZlY3RvcjIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHYueSA9IDEuMCAtIHYueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hdHJpeEZyb20gKCBwb3M6IFZlY3RvcjMsIHE6IHF1YXQsIGRlc3Q6IE1hdHJpeDQgfCBudWxsID0gbnVsbCApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxLnRvTWF0NCggZGVzdCApO1xyXG4gICAgICAgIGRlc3QudmFsdWVzWyAxMiBdID0gcG9zLng7XHJcbiAgICAgICAgZGVzdC52YWx1ZXNbIDEzIF0gPSBwb3MueTtcclxuICAgICAgICBkZXN0LnZhbHVlc1sgMTQgXSA9IHBvcy56O1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBsZXQgRVBTSUxPTjogbnVtYmVyID0gMC4wMDAxOyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi92ZWN0b3IzXCI7XHJcbmltcG9ydCBWZWN0b3I0IGZyb20gXCIuL3ZlY3RvcjRcIjtcclxuXHJcbi8vIE1hdHJpeDTnsbtcclxuZXhwb3J0IGNsYXNzIE1hdHJpeDR7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlcz86bnVtYmVyW10pIHtcclxuICAgICAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudmFsdWVzW2ldID0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCh2YWx1ZXM6IG51bWJlcltdKTogTWF0cml4NCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gdmFsdWVzW2ldXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcclxuICAgIC8vIHN0YXRpYyByZWFkb25seSBpZGVudGl0eSA9IG5ldyBNYXRyaXg0KCkuaWRlbnRpdHkoKTtcclxuXHJcbiAgICBwdWJsaWMgc2V0SWRlbnRpdHkoKTpNYXRyaXg0IHtcclxuICAgICAgICB0aGlzLnZhbHVlc1swXSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMV0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzJdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1szXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNF0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzVdID0gMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1s2XSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbN10gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzhdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1s5XSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTBdID0gMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxMV0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEyXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTNdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxNF0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzE1XSA9IDE7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdCAoIGluZGV4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyBpbmRleCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgKCB2YWx1ZXM6IG51bWJlcltdICk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAxNjsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWyBpIF0gPSB2YWx1ZXNbIGkgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpOnZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcHkoZGVzdD86TWF0cml4NCk6TWF0cml4NCB7XHJcbiAgICAgICAgaWYoIWRlc3QpIHtcclxuICAgICAgICAgICAgZGVzdCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCAxNjsgaSsrKXtcclxuICAgICAgICAgICAgZGVzdC52YWx1ZXNbaV0gPSB0aGlzLnZhbHVlc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc3Bvc2UoKTogTWF0cml4NCB7XHJcbiAgICAgICAgY29uc3QgdGVtcDEwID0gdGhpcy52YWx1ZXNbMV1cclxuICAgICAgICBjb25zdCB0ZW1wMjAgPSB0aGlzLnZhbHVlc1syXVxyXG4gICAgICAgIGNvbnN0IHRlbXAzMCA9IHRoaXMudmFsdWVzWzNdXHJcbiAgICAgICAgY29uc3QgdGVtcDIxID0gdGhpcy52YWx1ZXNbNl1cclxuICAgICAgICBjb25zdCB0ZW1wMzEgPSB0aGlzLnZhbHVlc1s3XVxyXG4gICAgICAgIGNvbnN0IHRlbXAzMiA9IHRoaXMudmFsdWVzWzExXVxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sxXSA9IHRoaXMudmFsdWVzWzRdXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMl0gPSB0aGlzLnZhbHVlc1s4XVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzNdID0gdGhpcy52YWx1ZXNbMTJdXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNl0gPSB0aGlzLnZhbHVlc1s5XVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzddID0gdGhpcy52YWx1ZXNbMTNdXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTFdID0gdGhpcy52YWx1ZXNbMTRdXHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWzRdID0gdGVtcDEwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbOF0gPSB0ZW1wMjBcclxuICAgICAgICB0aGlzLnZhbHVlc1sxMl0gPSB0ZW1wMzBcclxuICAgICAgICB0aGlzLnZhbHVlc1s5XSA9IHRlbXAyMVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzEzXSA9IHRlbXAzMVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzE0XSA9IHRlbXAzMlxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRlcm1pbmFudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGEwMCA9IHRoaXMudmFsdWVzWzBdXHJcbiAgICAgICAgY29uc3QgYTAxID0gdGhpcy52YWx1ZXNbMV1cclxuICAgICAgICBjb25zdCBhMDIgPSB0aGlzLnZhbHVlc1syXVxyXG4gICAgICAgIGNvbnN0IGEwMyA9IHRoaXMudmFsdWVzWzNdXHJcbiAgICAgICAgY29uc3QgYTEwID0gdGhpcy52YWx1ZXNbNF1cclxuICAgICAgICBjb25zdCBhMTEgPSB0aGlzLnZhbHVlc1s1XVxyXG4gICAgICAgIGNvbnN0IGExMiA9IHRoaXMudmFsdWVzWzZdXHJcbiAgICAgICAgY29uc3QgYTEzID0gdGhpcy52YWx1ZXNbN11cclxuICAgICAgICBjb25zdCBhMjAgPSB0aGlzLnZhbHVlc1s4XVxyXG4gICAgICAgIGNvbnN0IGEyMSA9IHRoaXMudmFsdWVzWzldXHJcbiAgICAgICAgY29uc3QgYTIyID0gdGhpcy52YWx1ZXNbMTBdXHJcbiAgICAgICAgY29uc3QgYTIzID0gdGhpcy52YWx1ZXNbMTFdXHJcbiAgICAgICAgY29uc3QgYTMwID0gdGhpcy52YWx1ZXNbMTJdXHJcbiAgICAgICAgY29uc3QgYTMxID0gdGhpcy52YWx1ZXNbMTNdXHJcbiAgICAgICAgY29uc3QgYTMyID0gdGhpcy52YWx1ZXNbMTRdXHJcbiAgICAgICAgY29uc3QgYTMzID0gdGhpcy52YWx1ZXNbMTVdXHJcblxyXG4gICAgICAgIGNvbnN0IEEwMCA9IGEwMCooYTExKmEyMiphMzMgKyBhMTIqYTIzKmEzMSArIGExMyphMjEqYTMyIC0gYTExKmEyMyphMzIgLSBhMTIqYTIxKmEzMyAtIGExMyphMjIqYTMxKVxyXG4gICAgICAgIGNvbnN0IEEwMSA9IC1hMDEqKGExMCphMjIqYTMzICsgYTEyKmEyMyphMzAgKyBhMTMqYTIwKmEzMiAtIGExMCphMjMqYTMyIC0gYTEyKmEyMCphMzMgLSBhMTMqYTIyKmEzMClcclxuICAgICAgICBjb25zdCBBMDIgPSBhMDIqKGExMCphMjEqYTMzICsgYTExKmEyMyphMzAgKyBhMTMqYTIwKmEzMSAtIGExMCphMjMqYTMxIC0gYTExKmEyMCphMzMgLSBhMTMqYTIxKmEzMClcclxuICAgICAgICBjb25zdCBBMDMgPSAtYTAzKihhMTAqYTIxKmEzMiArIGExMSphMjIqYTMwICsgYTEyKmEyMCphMzEgLSBhMTAqYTIyKmEzMSAtIGExMSphMjAqYTMyIC0gYTEyKmEyMSphMzApXHJcblxyXG4gICAgICAgIHJldHVybiAoQTAwICsgQTAxICsgQTAyICsgQTAzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZlcnNlKCk6IE1hdHJpeDQge1xyXG4gICAgICAgIGNvbnN0IGEwMCA9IHRoaXMudmFsdWVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGEwMSA9IHRoaXMudmFsdWVzWzFdO1xyXG4gICAgICAgIGNvbnN0IGEwMiA9IHRoaXMudmFsdWVzWzJdO1xyXG4gICAgICAgIGNvbnN0IGEwMyA9IHRoaXMudmFsdWVzWzNdO1xyXG4gICAgICAgIGNvbnN0IGExMCA9IHRoaXMudmFsdWVzWzRdO1xyXG4gICAgICAgIGNvbnN0IGExMSA9IHRoaXMudmFsdWVzWzVdO1xyXG4gICAgICAgIGNvbnN0IGExMiA9IHRoaXMudmFsdWVzWzZdO1xyXG4gICAgICAgIGNvbnN0IGExMyA9IHRoaXMudmFsdWVzWzddO1xyXG4gICAgICAgIGNvbnN0IGEyMCA9IHRoaXMudmFsdWVzWzhdO1xyXG4gICAgICAgIGNvbnN0IGEyMSA9IHRoaXMudmFsdWVzWzldO1xyXG4gICAgICAgIGNvbnN0IGEyMiA9IHRoaXMudmFsdWVzWzEwXTtcclxuICAgICAgICBjb25zdCBhMjMgPSB0aGlzLnZhbHVlc1sxMV07XHJcbiAgICAgICAgY29uc3QgYTMwID0gdGhpcy52YWx1ZXNbMTJdO1xyXG4gICAgICAgIGNvbnN0IGEzMSA9IHRoaXMudmFsdWVzWzEzXTtcclxuICAgICAgICBjb25zdCBhMzIgPSB0aGlzLnZhbHVlc1sxNF07XHJcbiAgICAgICAgY29uc3QgYTMzID0gdGhpcy52YWx1ZXNbMTVdO1xyXG5cclxuICAgICAgICBjb25zdCBBMDAgPSBhMDAqKGExMSphMjIqYTMzICsgYTEyKmEyMyphMzEgKyBhMTMqYTIxKmEzMiAtIGExMSphMjMqYTMyIC0gYTEyKmEyMSphMzMgLSBhMTMqYTIyKmEzMSk7XHJcbiAgICAgICAgY29uc3QgQTAxID0gLWEwMSooYTEwKmEyMiphMzMgKyBhMTIqYTIzKmEzMCArIGExMyphMjAqYTMyIC0gYTEwKmEyMyphMzIgLSBhMTIqYTIwKmEzMyAtIGExMyphMjIqYTMwKTtcclxuICAgICAgICBjb25zdCBBMDIgPSBhMDIqKGExMCphMjEqYTMzICsgYTExKmEyMyphMzAgKyBhMTMqYTIwKmEzMSAtIGExMCphMjMqYTMxIC0gYTExKmEyMCphMzMgLSBhMTMqYTIxKmEzMCk7XHJcbiAgICAgICAgY29uc3QgQTAzID0gLWEwMyooYTEwKmEyMSphMzIgKyBhMTEqYTIyKmEzMCArIGExMiphMjAqYTMxIC0gYTEwKmEyMiphMzEgLSBhMTEqYTIwKmEzMiAtIGExMiphMjEqYTMwKTtcclxuXHJcbiAgICAgICAgbGV0IGRldCA9IEEwMCArIEEwMSArIEEwMiArIEEwMztcclxuICAgICAgICBcclxuICAgICAgICBpZihkZXQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRldEludiA9IDEvZGV0O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1swXSA9IEEwMCAqIGRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxXSA9IEEwMSAqIGRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1syXSA9IEEwMiAqIGRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1szXSA9IEEwMyAqIGRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s0XSA9IC1hMTAqKGEwMSphMjIqYTMzICsgYTAyKmEyMyphMzEgKyBhMDMqYTIxKmEzMiAtIGEwMSphMjMqYTMyIC0gYTAyKmEyMSphMzMgLSBhMDMqYTIyKmEzMSkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzVdID0gYTExKihhMDAqYTIyKmEzMyArIGEwMiphMjMqYTMwICsgYTAzKmEyMCphMzIgLSBhMDAqYTIzKmEzMiAtIGEwMiphMjAqYTMzIC0gYTAzKmEyMiphMzApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s2XSA9IC1hMTIqKGEwMCphMjEqYTMzICsgYTAxKmEyMyphMzAgKyBhMDMqYTIwKmEzMSAtIGEwMCphMjMqYTMxIC0gYTAxKmEyMCphMzMgLSBhMDMqYTIxKmEzMCkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzddID0gYTEzKihhMDAqYTIxKmEzMiArIGEwMSphMjIqYTMyICsgYTAyKmEyMCphMzEgLSBhMDAqYTIyKmEzMSAtIGEwMSphMjAqYTMyLSBhMDIqYTIxKmEzMCkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzhdID0gYTIwKihhMDEqYTEyKmEzMyArIGEwMiphMTMqYTMxICsgYTAzKmExMSphMzIgLSBhMDEqYTEzKmEzMiAtIGEwMiphMTEqYTMzIC0gYTAzKmExMiphMzEpKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s5XSA9IC1hMjEqKGEwMCphMTIqYTMzICsgYTAyKmExMyphMzAgKyBhMDMqYTEwKmEzMiAtIGEwMCphMTMqYTMyIC0gYTAyKmExMCphMzMgLSBhMDMqYTEyKmEzMCkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEwXSA9IGEyMiooYTAwKmExMSphMzMgKyBhMDEqYTEzKmEzMCArIGEwMyphMTAqYTMxIC0gYTAwKmExMyphMzEgLSBhMDEqYTEwKmEzMyAtIGEwMyphMTEqYTMwKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTFdID0gLWEyMyooYTAwKmExMSphMzIgKyBhMDEqYTEyKmEzMCArIGEwMiphMTAqYTMxIC0gYTAwKmExMiphMzEgLSBhMDEqYTEwKmEzMiAtIGEwMiphMTEqYTMwKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTJdID0gLWEzMCooYTAxKmExMiphMjMgKyBhMDIqYTEzKmEyMSArIGEwMyphMTEqYTIyIC0gYTAxKmExMyphMjIgLSBhMDIqYTExKmEyMyAtIGEwMyphMTIqYTIxKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTNdID0gYTMxKihhMDAqYTEyKmEyMyArIGEwMiphMTMqYTIwICsgYTAzKmExMCphMjIgLSBhMDAqYTEzKmEyMiAtIGEwMiphMTAqYTIzIC0gYTAzKmExMiphMjApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxNF0gPSAtYTMyKihhMDAqYTExKmEyMyArIGEwMSphMTMqYTIwICsgYTAzKmExMCphMjEgLSBhMDAqYTEzKmEyMSAtIGEwMSphMTAqYTIzIC0gYTAzKmExMSphMjApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxNV0gPSBhMzMqKGEwMCphMTEqYTIyICsgYTAxKmExMiphMjAgKyBhMDIqYTEwKmExMCAtIGEwMCphMTIqYTIxIC0gYTAxKmExMCphMjIgLSBhMDIqYTExKmEyMCkqZGV0SW52O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW52ZXJzZSAoIG91dDogTWF0cml4NCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb3B5KCBvdXQgKTtcclxuICAgICAgICBsZXQgYTAwID0gb3V0LnZhbHVlc1sgMCBdLCBhMDEgPSBvdXQudmFsdWVzWyAxIF0sIGEwMiA9IG91dC52YWx1ZXNbIDIgXSwgYTAzID0gb3V0LnZhbHVlc1sgMyBdLFxyXG4gICAgICAgICAgICBhMTAgPSBvdXQudmFsdWVzWyA0IF0sIGExMSA9IG91dC52YWx1ZXNbIDUgXSwgYTEyID0gb3V0LnZhbHVlc1sgNiBdLCBhMTMgPSBvdXQudmFsdWVzWyA3IF0sXHJcbiAgICAgICAgICAgIGEyMCA9IG91dC52YWx1ZXNbIDggXSwgYTIxID0gb3V0LnZhbHVlc1sgOSBdLCBhMjIgPSBvdXQudmFsdWVzWyAxMCBdLCBhMjMgPSBvdXQudmFsdWVzWyAxMSBdLFxyXG4gICAgICAgICAgICBhMzAgPSBvdXQudmFsdWVzWyAxMiBdLCBhMzEgPSBvdXQudmFsdWVzWyAxMyBdLCBhMzIgPSBvdXQudmFsdWVzWyAxNCBdLCBhMzMgPSBvdXQudmFsdWVzWyAxNSBdO1xyXG5cclxuICAgICAgICBsZXQgZGV0MDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXHJcbiAgICAgICAgICAgIGRldDA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxyXG4gICAgICAgICAgICBkZXQwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcclxuICAgICAgICAgICAgZGV0MDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXHJcbiAgICAgICAgICAgIGRldDEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxyXG4gICAgICAgICAgICBkZXQxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgICAgbGV0IGRldCA9ICggZGV0MDAgKiBkZXQxMSAtIGRldDAxICogZGV0MTAgKyBkZXQwMiAqIGRldDA5ICsgZGV0MDMgKiBkZXQwOCAtIGRldDA0ICogZGV0MDcgKyBkZXQwNSAqIGRldDA2ICk7XHJcblxyXG4gICAgICAgIGlmICggIWRldCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgICBvdXQudmFsdWVzWyAwIF0gPSAoIGExMSAqIGRldDExIC0gYTEyICogZGV0MTAgKyBhMTMgKiBkZXQwOSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEgXSA9ICggLWEwMSAqIGRldDExICsgYTAyICogZGV0MTAgLSBhMDMgKiBkZXQwOSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDIgXSA9ICggYTMxICogZGV0MDUgLSBhMzIgKiBkZXQwNCArIGEzMyAqIGRldDAzICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMyBdID0gKCAtYTIxICogZGV0MDUgKyBhMjIgKiBkZXQwNCAtIGEyMyAqIGRldDAzICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNCBdID0gKCAtYTEwICogZGV0MTEgKyBhMTIgKiBkZXQwOCAtIGExMyAqIGRldDA3ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNSBdID0gKCBhMDAgKiBkZXQxMSAtIGEwMiAqIGRldDA4ICsgYTAzICogZGV0MDcgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA2IF0gPSAoIC1hMzAgKiBkZXQwNSArIGEzMiAqIGRldDAyIC0gYTMzICogZGV0MDEgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA3IF0gPSAoIGEyMCAqIGRldDA1IC0gYTIyICogZGV0MDIgKyBhMjMgKiBkZXQwMSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDggXSA9ICggYTEwICogZGV0MTAgLSBhMTEgKiBkZXQwOCArIGExMyAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgOSBdID0gKCAtYTAwICogZGV0MTAgKyBhMDEgKiBkZXQwOCAtIGEwMyAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTAgXSA9ICggYTMwICogZGV0MDQgLSBhMzEgKiBkZXQwMiArIGEzMyAqIGRldDAwICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTEgXSA9ICggLWEyMCAqIGRldDA0ICsgYTIxICogZGV0MDIgLSBhMjMgKiBkZXQwMCApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEyIF0gPSAoIC1hMTAgKiBkZXQwOSArIGExMSAqIGRldDA3IC0gYTEyICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxMyBdID0gKCBhMDAgKiBkZXQwOSAtIGEwMSAqIGRldDA3ICsgYTAyICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxNCBdID0gKCAtYTMwICogZGV0MDMgKyBhMzEgKiBkZXQwMSAtIGEzMiAqIGRldDAwICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTUgXSA9ICggYTIwICogZGV0MDMgLSBhMjEgKiBkZXQwMSArIGEyMiAqIGRldDAwICkgKiBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseShtYXRyaXg6IE1hdHJpeDQpOiBNYXRyaXg0IHtcclxuICAgICAgICBjb25zdCBhMDAgPSB0aGlzLnZhbHVlc1swXVxyXG4gICAgICAgIGNvbnN0IGEwMSA9IHRoaXMudmFsdWVzWzFdXHJcbiAgICAgICAgY29uc3QgYTAyID0gdGhpcy52YWx1ZXNbMl1cclxuICAgICAgICBjb25zdCBhMDMgPSB0aGlzLnZhbHVlc1szXVxyXG4gICAgICAgIGNvbnN0IGExMCA9IHRoaXMudmFsdWVzWzRdXHJcbiAgICAgICAgY29uc3QgYTExID0gdGhpcy52YWx1ZXNbNV1cclxuICAgICAgICBjb25zdCBhMTIgPSB0aGlzLnZhbHVlc1s2XVxyXG4gICAgICAgIGNvbnN0IGExMyA9IHRoaXMudmFsdWVzWzddXHJcbiAgICAgICAgY29uc3QgYTIwID0gdGhpcy52YWx1ZXNbOF1cclxuICAgICAgICBjb25zdCBhMjEgPSB0aGlzLnZhbHVlc1s5XVxyXG4gICAgICAgIGNvbnN0IGEyMiA9IHRoaXMudmFsdWVzWzEwXVxyXG4gICAgICAgIGNvbnN0IGEyMyA9IHRoaXMudmFsdWVzWzExXVxyXG4gICAgICAgIGNvbnN0IGEzMCA9IHRoaXMudmFsdWVzWzEyXVxyXG4gICAgICAgIGNvbnN0IGEzMSA9IHRoaXMudmFsdWVzWzEzXVxyXG4gICAgICAgIGNvbnN0IGEzMiA9IHRoaXMudmFsdWVzWzE0XVxyXG4gICAgICAgIGNvbnN0IGEzMyA9IHRoaXMudmFsdWVzWzE1XVxyXG5cclxuICAgICAgICBjb25zdCBiMDAgPSBtYXRyaXgudmFsdWVzWzBdXHJcbiAgICAgICAgY29uc3QgYjAxID0gbWF0cml4LnZhbHVlc1sxXVxyXG4gICAgICAgIGNvbnN0IGIwMiA9IG1hdHJpeC52YWx1ZXNbMl1cclxuICAgICAgICBjb25zdCBiMDMgPSBtYXRyaXgudmFsdWVzWzNdXHJcbiAgICAgICAgY29uc3QgYjEwID0gbWF0cml4LnZhbHVlc1s0XVxyXG4gICAgICAgIGNvbnN0IGIxMSA9IG1hdHJpeC52YWx1ZXNbNV1cclxuICAgICAgICBjb25zdCBiMTIgPSBtYXRyaXgudmFsdWVzWzZdXHJcbiAgICAgICAgY29uc3QgYjEzID0gbWF0cml4LnZhbHVlc1s3XVxyXG4gICAgICAgIGNvbnN0IGIyMCA9IG1hdHJpeC52YWx1ZXNbOF1cclxuICAgICAgICBjb25zdCBiMjEgPSBtYXRyaXgudmFsdWVzWzldXHJcbiAgICAgICAgY29uc3QgYjIyID0gbWF0cml4LnZhbHVlc1sxMF1cclxuICAgICAgICBjb25zdCBiMjMgPSBtYXRyaXgudmFsdWVzWzExXVxyXG4gICAgICAgIGNvbnN0IGIzMCA9IG1hdHJpeC52YWx1ZXNbMTJdXHJcbiAgICAgICAgY29uc3QgYjMxID0gbWF0cml4LnZhbHVlc1sxM11cclxuICAgICAgICBjb25zdCBiMzIgPSBtYXRyaXgudmFsdWVzWzE0XVxyXG4gICAgICAgIGNvbnN0IGIzMyA9IG1hdHJpeC52YWx1ZXNbMTVdXHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWzBdID0gYTAwICogYjAwICsgYTAxICogYjEwICsgYTAyICogYjIwICsgYTAzICogYjMwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMV0gPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjEgKyBhMDMgKiBiMzFcclxuICAgICAgICB0aGlzLnZhbHVlc1syXSA9IGEwMCAqIGIwMiArIGEwMSAqIGIxMiArIGEwMiAqIGIyMiArIGEwMyAqIGIzMlxyXG4gICAgICAgIHRoaXMudmFsdWVzWzNdID0gYTAwICogYjAzICsgYTAxICogYjEzICsgYTAyICogYjIzICsgYTAzICogYjMzXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNF0gPSBhMTAgKiBiMDAgKyBhMTEgKiBiMTAgKyBhMTIgKiBiMjAgKyBhMTMgKiBiMzBcclxuICAgICAgICB0aGlzLnZhbHVlc1s1XSA9IGExMCAqIGIwMSArIGExMSAqIGIxMSArIGExMiAqIGIyMSArIGExMyAqIGIzMVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzZdID0gYTEwICogYjAyICsgYTExICogYjEyICsgYTEyICogYjIyICsgYTEzICogYjMyXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbN10gPSBhMTAgKiBiMDMgKyBhMTEgKiBiMTMgKyBhMTIgKiBiMjMgKyBhMTMgKiBiMzNcclxuICAgICAgICB0aGlzLnZhbHVlc1s4XSA9IGEyMCAqIGIwMCArIGEyMSAqIGIxMCArIGEyMiAqIGIyMCArIGEyMyAqIGIzMFxyXG4gICAgICAgIHRoaXMudmFsdWVzWzldID0gYTIwICogYjAxICsgYTIxICogYjExICsgYTIyICogYjIxICsgYTIzICogYjMxXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTBdID0gYTIwICogYjAyICsgYTIxICogYjEyICsgYTIyICogYjIyICsgYTIzICogYjMyXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTFdID0gYTIwICogYjAzICsgYTIxICogYjEzICsgYTIyICogYjIzICsgYTIzICogYjMzXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTJdID0gYTMwICogYjAwICsgYTMxICogYjEwICsgYTMyICogYjIwICsgYTMzICogYjMwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTNdID0gYTMwICogYjAxICsgYTMxICogYjExICsgYTMyICogYjIxICsgYTMzICogYjMxXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTRdID0gYTMwICogYjAyICsgYTMxICogYjEyICsgYTMyICogYjIyICsgYTMzICogYjMyXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTVdID0gYTMwICogYjAzICsgYTMxICogYjEzICsgYTMyICogYjIzICsgYTMzICogYjMzXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByb2R1Y3QgKG0xOiBNYXRyaXg0LCBtMjogTWF0cml4NCwgcmVzdWx0OiBNYXRyaXg0IHwgbnVsbCk6IE1hdHJpeDR7XHJcbiAgICAgICAgbGV0IGEwMCA9IG0xLmF0KCAwICksIGEwMSA9IG0xLmF0KCAxICksIGEwMiA9IG0xLmF0KCAyICksIGEwMyA9IG0xLmF0KCAzICksXHJcbiAgICAgICAgICAgIGExMCA9IG0xLmF0KCA0ICksIGExMSA9IG0xLmF0KCA1ICksIGExMiA9IG0xLmF0KCA2ICksIGExMyA9IG0xLmF0KCA3ICksXHJcbiAgICAgICAgICAgIGEyMCA9IG0xLmF0KCA4ICksIGEyMSA9IG0xLmF0KCA5ICksIGEyMiA9IG0xLmF0KCAxMCApLCBhMjMgPSBtMS5hdCggMTEgKSxcclxuICAgICAgICAgICAgYTMwID0gbTEuYXQoIDEyICksIGEzMSA9IG0xLmF0KCAxMyApLCBhMzIgPSBtMS5hdCggMTQgKSwgYTMzID0gbTEuYXQoIDE1ICk7XHJcblxyXG4gICAgICAgIGxldCBiMDAgPSBtMi5hdCggMCApLCBiMDEgPSBtMi5hdCggMSApLCBiMDIgPSBtMi5hdCggMiApLCBiMDMgPSBtMi5hdCggMyApLFxyXG4gICAgICAgICAgICBiMTAgPSBtMi5hdCggNCApLCBiMTEgPSBtMi5hdCggNSApLCBiMTIgPSBtMi5hdCggNiApLCBiMTMgPSBtMi5hdCggNyApLFxyXG4gICAgICAgICAgICBiMjAgPSBtMi5hdCggOCApLCBiMjEgPSBtMi5hdCggOSApLCBiMjIgPSBtMi5hdCggMTAgKSwgYjIzID0gbTIuYXQoIDExICksXHJcbiAgICAgICAgICAgIGIzMCA9IG0yLmF0KCAxMiApLCBiMzEgPSBtMi5hdCggMTMgKSwgYjMyID0gbTIuYXQoIDE0ICksIGIzMyA9IG0yLmF0KCAxNSApO1xyXG5cclxuICAgICAgICBpZiAoIHJlc3VsdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0KCBbXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzNcclxuICAgICAgICAgICAgXSApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KCBbXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwICsgYjEzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxICsgYjEzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjEwICogYTAzICsgYjExICogYTEzICsgYjEyICogYTIzICsgYjEzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzNcclxuICAgICAgICAgICAgXSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgbXVsdGlwbHlWZWMzKHZlYzM6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAvLyAgICAgICAgIHRoaXMudmFsdWVzWzBdICogdmVjMy54ICsgdGhpcy52YWx1ZXNbNF0gKiB2ZWMzLnkgKyB0aGlzLnZhbHVlc1s4XSAqIHZlYzMueiArIHRoaXMudmFsdWVzWzEyXSxcclxuICAgIC8vICAgICAgICAgdGhpcy52YWx1ZXNbMV0gKiB2ZWMzLnggKyB0aGlzLnZhbHVlc1s1XSAqIHZlYzMueSArIHRoaXMudmFsdWVzWzldICogdmVjMy56ICsgdGhpcy52YWx1ZXNbMTNdLFxyXG4gICAgLy8gICAgICAgICB0aGlzLnZhbHVlc1syXSAqIHZlYzMueCArIHRoaXMudmFsdWVzWzZdICogdmVjMy55ICsgdGhpcy52YWx1ZXNbMTBdICogdmVjMy56ICsgdGhpcy52YWx1ZXNbMTRdXHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlwbHlWZWMzICggdmVjdG9yOiBWZWN0b3IzLCBkZXN0OiBWZWN0b3IzIHwgbnVsbCA9IG51bGwgKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBsZXQgeCA9IHZlY3Rvci54LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLnksXHJcbiAgICAgICAgICAgIHogPSB2ZWN0b3IuejtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIDAgXSAqIHggKyB0aGlzLnZhbHVlc1sgNCBdICogeSArIHRoaXMudmFsdWVzWyA4IF0gKiB6ICsgdGhpcy52YWx1ZXNbIDEyIF07XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIDEgXSAqIHggKyB0aGlzLnZhbHVlc1sgNSBdICogeSArIHRoaXMudmFsdWVzWyA5IF0gKiB6ICsgdGhpcy52YWx1ZXNbIDEzIF07XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIDIgXSAqIHggKyB0aGlzLnZhbHVlc1sgNiBdICogeSArIHRoaXMudmFsdWVzWyAxMCBdICogeiArIHRoaXMudmFsdWVzWyAxNCBdO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlwbHlWZWM0ICggdmVjdG9yOiBWZWN0b3I0LCBkZXN0OiBWZWN0b3I0IHwgbnVsbCA9IG51bGwgKTogVmVjdG9yNFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjQoKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLnosXHJcbiAgICAgICAgICAgIHcgPSB2ZWN0b3IudztcclxuXHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIDAgXSAqIHggKyB0aGlzLnZhbHVlc1sgNCBdICogeSArIHRoaXMudmFsdWVzWyA4IF0gKiB6ICsgdGhpcy52YWx1ZXNbIDEyIF0gKiB3O1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyAxIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDUgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOSBdICogeiArIHRoaXMudmFsdWVzWyAxMyBdICogdztcclxuICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgMiBdICogeCArIHRoaXMudmFsdWVzWyA2IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDEwIF0gKiB6ICsgdGhpcy52YWx1ZXNbIDE0IF0gKiB3O1xyXG4gICAgICAgIGRlc3QudyA9IHRoaXMudmFsdWVzWyAzIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDcgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTEgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTUgXSAqIHc7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOefqemYteWPmOaNolxyXG4gICAgcHVibGljIHRyYW5zbGF0ZSAoIHZlY3RvcjogVmVjdG9yMyApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMiBdICs9IHRoaXMudmFsdWVzWyAwIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDQgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOCBdICogejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTMgXSArPSB0aGlzLnZhbHVlc1sgMSBdICogeCArIHRoaXMudmFsdWVzWyA1IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDkgXSAqIHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE0IF0gKz0gdGhpcy52YWx1ZXNbIDIgXSAqIHggKyB0aGlzLnZhbHVlc1sgNiBdICogeSArIHRoaXMudmFsdWVzWyAxMCBdICogejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTUgXSArPSB0aGlzLnZhbHVlc1sgMyBdICogeCArIHRoaXMudmFsdWVzWyA3IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDExIF0gKiB6O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc2NhbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6bnVtYmVyKTogTWF0cml4NHtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1swXSA9IHg7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMV0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzJdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1szXSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbNF0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzVdID0geTtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1s2XSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbN10gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzhdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1s5XSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMTBdID0gejtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1sxMV0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzEyXSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMTNdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1sxNF0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzE1XSA9IDE7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzY2FsZSAoIHZlY3RvcjogVmVjdG9yMyApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gKj0geDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdICo9IHg7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSAqPSB4O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gKj0geDtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDQgXSAqPSB5O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA1IF0gKj0geTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdICo9IHk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDcgXSAqPSB5O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdICo9IHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDkgXSAqPSB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMCBdICo9IHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gKj0gejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZSAoIGFuZ2xlOiBudW1iZXIsIGF4aXM6IFZlY3RvcjMgKTogTWF0cml4NCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IGF4aXMueCxcclxuICAgICAgICAgICAgeSA9IGF4aXMueSxcclxuICAgICAgICAgICAgeiA9IGF4aXMuejtcclxuXHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguc3FydCggeCAqIHggKyB5ICogeSArIHogKiB6ICk7XHJcblxyXG4gICAgICAgIGlmICggIWxlbmd0aCApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCAhPT0gMSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZW5ndGggPSAxIC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICB4ICo9IGxlbmd0aDtcclxuICAgICAgICAgICAgeSAqPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHogKj0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLnNpbiggYW5nbGUgKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKCBhbmdsZSApO1xyXG5cclxuICAgICAgICBsZXQgdCA9IDEuMCAtIGM7XHJcblxyXG4gICAgICAgIGxldCBhMDAgPSB0aGlzLnZhbHVlc1sgMCBdLCBhMDEgPSB0aGlzLnZhbHVlc1sgMSBdLCBhMDIgPSB0aGlzLnZhbHVlc1sgMiBdLCBhMDMgPSB0aGlzLnZhbHVlc1sgMyBdLFxyXG4gICAgICAgICAgICBhMTAgPSB0aGlzLnZhbHVlc1sgNCBdLCBhMTEgPSB0aGlzLnZhbHVlc1sgNSBdLCBhMTIgPSB0aGlzLnZhbHVlc1sgNiBdLCBhMTMgPSB0aGlzLnZhbHVlc1sgNyBdLFxyXG4gICAgICAgICAgICBhMjAgPSB0aGlzLnZhbHVlc1sgOCBdLCBhMjEgPSB0aGlzLnZhbHVlc1sgOSBdLCBhMjIgPSB0aGlzLnZhbHVlc1sgMTAgXSwgYTIzID0gdGhpcy52YWx1ZXNbIDExIF07XHJcblxyXG4gICAgICAgIGxldCBiMDAgPSB4ICogeCAqIHQgKyBjLCBiMDEgPSB5ICogeCAqIHQgKyB6ICogcywgYjAyID0geiAqIHggKiB0IC0geSAqIHMsXHJcbiAgICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLCBiMTEgPSB5ICogeSAqIHQgKyBjLCBiMTIgPSB6ICogeSAqIHQgKyB4ICogcyxcclxuICAgICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLCBiMjIgPSB6ICogeiAqIHQgKyBjO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgNCBdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA1IF0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDYgXSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNyBdID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA5IF0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEwIF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOinhuefqemYteWSjOaKleW9seefqemYtVxyXG4gICAgcHVibGljIHN0YXRpYyBmcnVzdHVtICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCBybCA9ICggcmlnaHQgLSBsZWZ0ICksXHJcbiAgICAgICAgICAgIHRiID0gKCB0b3AgLSBib3R0b20gKSxcclxuICAgICAgICAgICAgZm4gPSAoIGZhciAtIG5lYXIgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KCBbXHJcbiAgICAgICAgICAgICggbmVhciAqIDIgKSAvIHJsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgKCBuZWFyICogMiApIC8gdGIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAoIHJpZ2h0ICsgbGVmdCApIC8gcmwsXHJcbiAgICAgICAgICAgICggdG9wICsgYm90dG9tICkgLyB0YixcclxuICAgICAgICAgICAgLSggZmFyICsgbmVhciApIC8gZm4sXHJcbiAgICAgICAgICAgIC0xLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgLSggZmFyICogbmVhciAqIDIgKSAvIGZuLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGVyc3BlY3RpdmUgKCBmb3Y6IG51bWJlciwgYXNwZWN0OiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3AgPSBuZWFyICogTWF0aC50YW4oIGZvdiAqIDAuNSApLFxyXG4gICAgICAgICAgICByaWdodCA9IHRvcCAqIGFzcGVjdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQuZnJ1c3R1bSggLXJpZ2h0LCByaWdodCwgLXRvcCwgdG9wLCBuZWFyLCBmYXIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyAoIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyICk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmwgPSAoIHJpZ2h0IC0gbGVmdCApLFxyXG4gICAgICAgICAgICB0YiA9ICggdG9wIC0gYm90dG9tICksXHJcbiAgICAgICAgICAgIGZuID0gKCBmYXIgLSBuZWFyICk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NCggW1xyXG4gICAgICAgICAgICAyIC8gcmwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyIC8gdGIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAtMiAvIGZuLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgLSggbGVmdCArIHJpZ2h0ICkgLyBybCxcclxuICAgICAgICAgICAgLSggdG9wICsgYm90dG9tICkgLyB0YixcclxuICAgICAgICAgICAgLSggZmFyICsgbmVhciApIC8gZm4sXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9va0F0ICggcG9zaXRpb246IFZlY3RvcjMsIHRhcmdldDogVmVjdG9yMywgdXA6IFZlY3RvcjMgPSBWZWN0b3IzLnVwICk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHBvc2l0aW9uLmVxdWFscyggdGFyZ2V0ICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgeiA9IFZlY3RvcjMuZGlmZmVyZW5jZSggcG9zaXRpb24sIHRhcmdldCApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCB4ID0gVmVjdG9yMy5jcm9zcyggdXAsIHogKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgeSA9IFZlY3RvcjMuY3Jvc3MoIHosIHggKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KCBbXHJcbiAgICAgICAgICAgIHgueCxcclxuICAgICAgICAgICAgeS54LFxyXG4gICAgICAgICAgICB6LngsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICB4LnksXHJcbiAgICAgICAgICAgIHkueSxcclxuICAgICAgICAgICAgei55LFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgeC56LFxyXG4gICAgICAgICAgICB5LnosXHJcbiAgICAgICAgICAgIHoueixcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIC1WZWN0b3IzLmRvdCggeCwgcG9zaXRpb24gKSxcclxuICAgICAgICAgICAgLVZlY3RvcjMuZG90KCB5LCBwb3NpdGlvbiApLFxyXG4gICAgICAgICAgICAtVmVjdG9yMy5kb3QoIHosIHBvc2l0aW9uICksXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpZGVudGl0eSA9IG5ldyBNYXRyaXg0KCkuc2V0SWRlbnRpdHkoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG0wID0gbmV3IE1hdHJpeDQoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbTEgPSBuZXcgTWF0cml4NCgpO1xyXG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjJ7XHJcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlcj0wLCB5OiBudW1iZXI9MCl7XHJcbiAgICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHgodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5KCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHh5KCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3gsXHJcbiAgICAgICAgICAgIHRoaXMuX3ksXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHNldCB4eSh2YWx1ZXM6IFtudW1iZXIsIG51bWJlcl0pIHtcclxuICAgICAgICB0aGlzLl94ID0gdmFsdWVzWzBdXHJcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlc1sxXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHplcm8oKTpWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBvbmUoKTpWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0YW5jZShhOlZlY3RvcjIsYjpWZWN0b3IyKTpudW1iZXJ7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBhLnN1YnRyYWN0KGIpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoIGRpZmYueCAqIGRpZmYueCArIGRpZmYueSAqIGRpZmYueSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoeD86bnVtYmVyLHk/Om51bWJlcix6PzpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYoeCE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeSE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVxdWFscyh2OlZlY3RvcjIpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5feCA9PT0gdi5feCAmJiB0aGlzLl95ID09PSB2Ll95KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOm51bWJlcltde1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5feCx0aGlzLl95XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6RmxvYXQzMkFycmF5IHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6VmVjdG9yMik6dm9pZHtcclxuICAgICAgICB0aGlzLl94ID0gdmVjdG9yLl94O1xyXG4gICAgICAgIHRoaXMuX3kgPSB2ZWN0b3IuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2OlZlY3RvcjIpOlZlY3RvcjJ7XHJcbiAgICAgICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgKz0gdi5feTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnRyYWN0KHY6VmVjdG9yMik6VmVjdG9yMntcclxuICAgICAgICB0aGlzLl94IC09IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSAtPSB2Ll95O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlwbHkodjpWZWN0b3IyKTpWZWN0b3Iye1xyXG4gICAgICAgIHRoaXMuX3ggKj0gdi5feDtcclxuICAgICAgICB0aGlzLl95ICo9IHYuX3k7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpdmlkZSh2OlZlY3RvcjIpOlZlY3RvcjJ7XHJcbiAgICAgICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgLz0gdi5feTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6VmVjdG9yMntcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5feCwgdGhpcy5feSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yM3tcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3o6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyPTAsIHk6IG51bWJlcj0wLCB6OiBudW1iZXI9MCl7XHJcbiAgICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICAgICAgdGhpcy5feiA9IHo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHgodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl94ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5KCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl95ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB6KCk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHoodmFsdWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl96ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHh5eigpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuX3gsXHJcbiAgICAgICAgICAgIHRoaXMuX3ksXHJcbiAgICAgICAgICAgIHRoaXMuX3osXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHNldCB4eXoodmFsdWVzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcclxuICAgICAgICB0aGlzLl94ID0gdmFsdWVzWzBdXHJcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlc1sxXVxyXG4gICAgICAgIHRoaXMuX3ogPSB2YWx1ZXNbMl1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB6ZXJvKCk6VmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6VmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsMSwxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlKGE6VmVjdG9yMyxiOlZlY3RvcjMpOm51bWJlcntcclxuICAgICAgICBsZXQgZGlmZiA9IGEuc3VidHJhY3QoYik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkaWZmLngqZGlmZi54K2RpZmYueSpkaWZmLnkrZGlmZi56KmRpZmYueik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh4PzpudW1iZXIseT86bnVtYmVyLHo/Om51bWJlcik6dm9pZHtcclxuICAgICAgICBpZih4IT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih5IT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih6IT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5feiA9IHo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZXF1YWxzKHY6VmVjdG9yMyk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl94ID09PSB2Ll94ICYmIHRoaXMuX3kgPT09IHYuX3kgJiYgdGhpcy5feiA9PT0gdi5feik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvQXJyYXkoKTpudW1iZXJbXXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuX3gsdGhpcy5feSx0aGlzLl96XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHRvRmxvYXQzMkFycmF5KCk6RmxvYXQzMkFycmF5IHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnRvQXJyYXkoKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5RnJvbSh2ZWN0b3I6VmVjdG9yMyk6dm9pZHtcclxuICAgICAgICB0aGlzLl94ID0gdmVjdG9yLl94O1xyXG4gICAgICAgIHRoaXMuX3kgPSB2ZWN0b3IuX3k7XHJcbiAgICAgICAgdGhpcy5feiA9IHZlY3Rvci5fejtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHY6VmVjdG9yMyk6VmVjdG9yM3tcclxuICAgICAgICB0aGlzLl94ICs9IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSArPSB2Ll95O1xyXG4gICAgICAgIHRoaXMuX3ogKz0gdi5fejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnRyYWN0KHY6VmVjdG9yMyk6VmVjdG9yM3tcclxuICAgICAgICB0aGlzLl94IC09IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSAtPSB2Ll95O1xyXG4gICAgICAgIHRoaXMuX3ogLT0gdi5fejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5KHY6VmVjdG9yMyk6VmVjdG9yM3tcclxuICAgICAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSAqPSB2Ll95O1xyXG4gICAgICAgIHRoaXMuX3ogKj0gdi5fejtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGl2aWRlKHY6VmVjdG9yMyk6VmVjdG9yM3tcclxuICAgICAgICB0aGlzLl94IC89IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSAvPSB2Ll95O1xyXG4gICAgICAgIHRoaXMuX3ogLz0gdi5fejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6VmVjdG9yM3tcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy5feCwgdGhpcy5feSwgdGhpcy5feik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcHkgKCBkZXN0OiBWZWN0b3IzIHwgbnVsbCA9IG51bGwgKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgZGVzdC5feCA9IHRoaXMueDtcclxuICAgICAgICBkZXN0Ll95ID0gdGhpcy55O1xyXG4gICAgICAgIGRlc3QuX3ogPSB0aGlzLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLmxlbmd0aDIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aDIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5feCxcclxuICAgICAgICAgICAgeSA9IHRoaXMuX3ksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLl96O1xyXG5cclxuICAgICAgICByZXR1cm4gKCB4ICogeCArIHkgKiB5ICsgeiAqIHogKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbm9ybWFsaXplICggZGVzdDogVmVjdG9yMyB8IG51bGwgPSBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKCBsZW5ndGggPT09IDEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0Ll94ID0gMDtcclxuICAgICAgICAgICAgZGVzdC5feSA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QuX3ogPSAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZW5ndGggPSAxLjAgLyBsZW5ndGg7XHJcblxyXG4gICAgICAgIGRlc3QuX3ggKj0gbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QuX3kgKj0gbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QuX3ogKj0gbGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpZmZlcmVuY2UgKCB2ZWN0b3I6IFZlY3RvcjMsIHZlY3RvcjI6IFZlY3RvcjMsIGRlc3Q6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgICAgICBkZXN0Ll94ID0gdmVjdG9yLnggLSB2ZWN0b3IyLng7XHJcbiAgICAgICAgZGVzdC5feSA9IHZlY3Rvci55IC0gdmVjdG9yMi55O1xyXG4gICAgICAgIGRlc3QuX3ogPSB2ZWN0b3IueiAtIHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0gKCB2ZWN0b3I6IFZlY3RvcjMsIHZlY3RvcjI6IFZlY3RvcjMsIGRlc3Q6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgICAgICBkZXN0Ll94ID0gdmVjdG9yLnggKyB2ZWN0b3IyLng7XHJcbiAgICAgICAgZGVzdC5feSA9IHZlY3Rvci55ICsgdmVjdG9yMi55O1xyXG4gICAgICAgIGRlc3QuX3ogPSB2ZWN0b3IueiArIHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYWxlICggdmFsdWU6IG51bWJlciwgZGVzdDogVmVjdG9yMyB8IG51bGwgPSBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSB0aGlzO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb3B5KCBkZXN0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZXN0LnggKj0gdmFsdWU7XHJcbiAgICAgICAgZGVzdC55ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueiAqPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb3QgKCB2ZWN0b3I6IFZlY3RvcjMsIHZlY3RvcjI6IFZlY3RvcjMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGxldCB4MiA9IHZlY3RvcjIueCxcclxuICAgICAgICAgICAgeTIgPSB2ZWN0b3IyLnksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi56O1xyXG5cclxuICAgICAgICByZXR1cm4gKCB4ICogeDIgKyB5ICogeTIgKyB6ICogejIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyb3NzICggdmVjdG9yOiBWZWN0b3IzLCB2ZWN0b3IyOiBWZWN0b3IzLCBkZXN0OiBWZWN0b3IzIHwgbnVsbCA9IG51bGwgKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGxldCB4MiA9IHZlY3RvcjIueCxcclxuICAgICAgICAgICAgeTIgPSB2ZWN0b3IyLnksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi56O1xyXG5cclxuICAgICAgICBkZXN0Ll94ID0geSAqIHoyIC0geiAqIHkyO1xyXG4gICAgICAgIGRlc3QuX3kgPSB6ICogeDIgLSB4ICogejI7XHJcbiAgICAgICAgZGVzdC5feiA9IHggKiB5MiAtIHkgKiB4MjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IHVwID0gbmV3IFZlY3RvcjMoIDAsIDEsIDAgKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBkb3duID0gbmV3IFZlY3RvcjMoIDAsIC0xLCAwICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgcmlnaHQgPSBuZXcgVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGxlZnQgPSBuZXcgVmVjdG9yMyggLTEsIDAsIDAgKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBmb3J3YXJkID0gbmV3IFZlY3RvcjMoIDAsIDAsIDEgKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBiYWNrd2FyZCA9IG5ldyBWZWN0b3IzKCAwLCAwLCAtMSApO1xyXG5cclxuICAgIHN0YXRpYyB2MCA9IG5ldyBWZWN0b3IzKCAwLCAwLCAwICk7XHJcbiAgICBzdGF0aWMgdjEgPSBuZXcgVmVjdG9yMyggMCwgMCwgMCApO1xyXG4gICAgc3RhdGljIHYyID0gbmV3IFZlY3RvcjMoIDAsIDAsIDAgKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjQge1xuXG4gICAgLy8gcHJpdmF0ZSB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gICAgcHJpdmF0ZSBfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcbiAgICBwcml2YXRlIF96OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdzogbnVtYmVyO1xuXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLnZhbHVlc1swXVxuICAgICAgICByZXR1cm4gdGhpcy5feFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy52YWx1ZXNbMV1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3lcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHooKTogbnVtYmVyIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudmFsdWVzWzFdXG4gICAgICAgIHJldHVybiB0aGlzLl96XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl93XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB4KHg6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuX3ggPSB4XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB5KHk6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuX3kgPSB5XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB6KHo6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuX3ogPSB6XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB3KHc6IG51bWJlcikge1xuICAgICAgICAvLyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlXG4gICAgICAgIHRoaXMuX3cgPSB3XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByICgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl94O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZyAoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5feTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGIgKCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3o7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhICgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl93O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgciAoIHZhbHVlOiBudW1iZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZyAoIHZhbHVlOiBudW1iZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYiAoIHZhbHVlOiBudW1iZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5feiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYSAoIHZhbHVlOiBudW1iZXIgKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXI9MCwgeTpudW1iZXI9MCwgejpudW1iZXI9MCwgdzpudW1iZXI9MCkge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuX3ogPSB6O1xuICAgICAgICB0aGlzLl93ID0gdztcbiAgICB9XG5cbiAgICBwdWJsaWMgY29weShkZXN0PzpWZWN0b3I0KTogVmVjdG9yNCB7XG4gICAgICAgIGlmKCFkZXN0KSB7ZGVzdCA9IG5ldyBWZWN0b3I0KCl9XG4gICAgICAgIGRlc3QueCA9IHRoaXMuX3g7XG4gICAgICAgIGRlc3QueSA9IHRoaXMuX3k7XG4gICAgICAgIGRlc3QueiA9IHRoaXMuX3o7XG4gICAgICAgIGRlc3QudyA9IHRoaXMuX3c7XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQodmVjNDpWZWN0b3I0KTogVmVjdG9yNCB7XG4gICAgICAgIHRoaXMuX3ggKz0gdmVjNC54XG4gICAgICAgIHRoaXMuX3kgKz0gdmVjNC55XG4gICAgICAgIHRoaXMuX3ogKz0gdmVjNC56XG4gICAgICAgIHRoaXMuX3cgKz0gdmVjNC53XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VidHJhY3QodmVjNDogVmVjdG9yNCk6IFZlY3RvcjQge1xuICAgICAgICB0aGlzLl94IC09IHZlYzQueDtcbiAgICAgICAgdGhpcy5feSAtPSB2ZWM0Lnk7XG4gICAgICAgIHRoaXMuX3ogLT0gdmVjNC56O1xuICAgICAgICB0aGlzLl93IC09IHZlYzQudztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NhbGUodmFsdWU6IG51bWJlciwgZGVzdD86VmVjdG9yNCk6IFZlY3RvcjQge1xuICAgICAgICBpZighZGVzdCkgeyBkZXN0ID0gdGhpcyB9XG4gICAgICAgIGRlc3QueCAqPSB2YWx1ZTtcbiAgICAgICAgZGVzdC55ICo9IHZhbHVlO1xuICAgICAgICBkZXN0LnogKj0gdmFsdWU7XG4gICAgICAgIGRlc3QudyAqPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53KVxuICAgIH1cblxuICAgIHB1YmxpYyBub3JtYWxpemUoZGVzdD86IFZlY3RvcjQpOiBWZWN0b3I0IHtcbiAgICAgICAgaWYoIWRlc3QpIHsgZGVzdCA9IHRoaXMgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoKClcblxuICAgICAgICBkZXN0LnggLz0gbGVuZ3RoXG4gICAgICAgIGRlc3QueSAvPSBsZW5ndGhcbiAgICAgICAgZGVzdC56IC89IGxlbmd0aFxuICAgICAgICBkZXN0LncgLz0gbGVuZ3RoXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGVzdFxuICAgIH1cblxuICAgIHN0YXRpYyByZWQ6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCggMS4wLCAwLjAsIDAuMCwgMS4wICk7XG4gICAgc3RhdGljIGdyZWVuOiBWZWN0b3I0ID0gbmV3IFZlY3RvcjQoIDAuMCwgMS4wLCAwLjAsIDEuMCApO1xuICAgIHN0YXRpYyBibHVlOiBWZWN0b3I0ID0gbmV3IFZlY3RvcjQoIDAuMCwgMC4wLCAxLjAsIDEuMCApO1xuICAgIHN0YXRpYyBibGFjazogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCAwLDAsMCwwICk7XG59IiwiLy8g5pyJ5pe25oiR5Lus5Zyo5a6M5oiQ5pe26ZyA6KaB5oyJ5ZCN56ew5p+l6K+i5a+55bqU55qESFRNTEltYWdlRWxlbWVudOWvueixoVxyXG4vLyDmraTml7blsLHpnIDopoFJbWFnZUluZm/nu5PmnoTkuoZcclxuZXhwb3J0IGNsYXNzIEltYWdlSW5mb1xyXG57XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHBhdGg6IHN0cmluZywgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3Rcclxue1xyXG4gICAgLy/ov5nkuKrlh73mlbDopoHotbfkvZznlKjvvIzlv4XpobvopoHlnKh0c2NvbmZpZy5qc29u5Lit5bCGZGVmYXVsdOeahGVzNeaUueaIkEVTMjAxNVxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkSW1hZ2VBc3luYyAoIHVybDogc3RyaW5nICk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICk6IHZvaWQgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCBpbWFnZSApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCggbmV3IEVycm9yKCAnQ291bGQgbm90IGxvYWQgaW1hZ2UgYXQgJyArIHVybCApICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+Z5Liq5Ye95pWw6KaB6LW35L2c55So77yM5b+F6aG76KaB5ZyodHNjb25maWcuanNvbuS4reWwhmRlZmF1bHTnmoRlczXmlLnmiJBFUzIwMTVcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEltYWdlQXN5bmNTYWZlICggdXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZyA9IHVybCApOiBQcm9taXNlPEltYWdlSW5mbyB8IG51bGw+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm86IEltYWdlSW5mbyA9IG5ldyBJbWFnZUluZm8oIG5hbWUsIGltYWdlICk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCBpbmZvICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSggbnVsbCApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRUZXh0RmlsZUFzeW5jICggdXJsOiBzdHJpbmcgKTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCBldjogRXZlbnQgKTogYW55ID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCB4aHIucmVzcG9uc2VUZXh0ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKCBcImdldFwiLCB1cmwsIHRydWUsIG51bGwsIG51bGwgKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkQXJyYXlCdWZmZXJBc3luYyAoIHVybDogc3RyaW5nICk6IFByb21pc2U8QXJyYXlCdWZmZXI+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCBldjogRXZlbnQgKTogYW55ID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCB4aHIucmVzcG9uc2UgYXMgQXJyYXlCdWZmZXIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub3BlbiggXCJnZXRcIiwgdXJsLCB0cnVlLCBudWxsLCBudWxsICk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRJbnRlcmFjdGlvbiB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRJbnRlcmFjdGlvblwiO1xyXG5pbXBvcnQgeyBHTE1hdHJpeFN0YWNrLCBHTFdvcmxkTWF0cml4U3RhY2sgfSBmcm9tIFwiLi9XZWJHTE1hdHJpeFN0YWNrXCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL1dlYkdMVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmVDYWNoZSB9IGZyb20gXCIuL1dlYkdMVGV4dHVyZUNhY2hlXCI7XHJcbmltcG9ydCB7IEdMUHJvZ3JhbUNhY2hlIH0gZnJvbSBcIi4vV2ViR0xQcm9ncmFtQ2FjaGVcIjtcclxuaW1wb3J0IHsgR0xQcm9ncmFtIH0gZnJvbSBcIi4vV2ViR0xQcm9ncmFtXCI7XHJcbmltcG9ydCB7IEdMTWVzaEJ1aWxkZXIgfSBmcm9tIFwiLi9XZWJHTE1lc2hcIjtcclxuaW1wb3J0IHsgR0xBdHRyaWJTdGF0ZSB9IGZyb20gXCIuL1dlYkdMQXR0cmliU3RhdGVcIjtcclxuaW1wb3J0IHsgR0xIZWxwZXIgfSBmcm9tIFwiLi9XZWJHTEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYkdMQXBwbGljYXRpb24gZXh0ZW5kcyBFdmVudEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIOWPr+S7peebtOaOpeaTjeS9nFdlYkdM55u45YWz5YaF5a65XHJcbiAgICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgICAvLyDmqKHmi59PcGVuR0wxLjHkuK3nn6npmLXloIbmoIhcclxuICAgIC8vIOWwgeijheWcqEdMV29ybGRNYXRyaXhTdGF0Y+S4rVxyXG4gICAgcHVibGljIG1hdFN0YWNrOiBHTFdvcmxkTWF0cml4U3RhY2s7XHJcblxyXG4gICAgLy8g5qih5oufT3BlbkdMMS4x5Lit55qE56uL5Y2z57uY5Yi25qih5byPXHJcbiAgICAvLyDlsIHoo4XlnKhHTE1lc2hCdWlsZGVy57G75LitXHJcbiAgICBwdWJsaWMgYnVpbGRlcjogR0xNZXNoQnVpbGRlcjtcclxuXHJcbiAgICAvLyDkuLrkuoblnKgzROeOr+Wig+S4reWQjOaXtuaUr+aMgUNhbnZhczJE57uY5Yi277yM54m55Yir5piv5Li65LqG5a6e546w5paH5a2X57uY5Yi2XHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzMkQ6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgY3R4MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGNvbnRleHRBdHRyaWJ1dGVzOiBXZWJHTENvbnRleHRBdHRyaWJ1dGVzID0geyBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlIH0sIG5lZWQyRDogYm9vbGVhbiA9IGZhbHNlIClcclxuICAgIHtcclxuICAgICAgICBzdXBlciggY2FudmFzICk7XHJcbiAgICAgICAgbGV0IGN0eDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgbnVsbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoIFwid2ViZ2xcIiwgY29udGV4dEF0dHJpYnV0ZXMgKTtcclxuICAgICAgICBpZiAoIGN0eCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydCggXCIg5peg5rOV5Yib5bu6V2ViR0xSZW5kZXJpbmdDb250ZXh05LiK5LiL5paH5a+56LGhIFwiICk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCIg5peg5rOV5Yib5bu6V2ViR0xSZW5kZXJpbmdDb250ZXh05LiK5LiL5paH5a+56LGhIFwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsID0gY3R4O1xyXG5cclxuICAgICAgICBpZiAoIG5lZWQyRCA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzRWxlbTogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImNhbnZhc1wiICkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0ud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSB0aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIHBhcmVudCA9PT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJjYW52YXPlhYPntKDlv4XpobvopoHmnInniLbkurIhIVwiICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCggY2FudmFzRWxlbSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHgyRCA9IGNhbnZhc0VsZW0uZ2V0Q29udGV4dCggXCIyZFwiICk7XHJcblxyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vkb3duXCIsIHRoaXMgKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZXVwXCIsIHRoaXMgKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcyApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW52YXMyRCA9IGNhbnZhc0VsZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hdFN0YWNrID0gbmV3IEdMV29ybGRNYXRyaXhTdGFjaygpO1xyXG4gICAgICAgIC8vIOWIneWni+WMlua4suafk+eKtuaAgVxyXG4gICAgICAgIEdMSGVscGVyLnNldERlZmF1bHRTdGF0ZSggdGhpcy5nbCApO1xyXG5cclxuICAgICAgICAvLyDnlLHkuo5DYW52YXPmmK/lt6bmiYvns7vvvIzogIx3ZWJHTOaYr+WPs+aJi+ezu++8jOmcgOimgUZpbHBZQ29vcmRcclxuICAgICAgICB0aGlzLmlzRmxpcFlDb29yZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOWIm+W7umRlZmF1bHTnurnnkIZcclxuICAgICAgICBHTFRleHR1cmVDYWNoZS5pbnN0YW5jZS5zZXQoIFwiZGVmYXVsdFwiLCBHTFRleHR1cmUuY3JlYXRlRGVmYXVsdFRleHR1cmUoIHRoaXMuZ2wgKSApO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIzliJvlu7rpopzoibLlkoznurnnkIZQcm9ncmFtXHJcbiAgICAgICAgR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2Uuc2V0KCBcImNvbG9yXCIsIEdMUHJvZ3JhbS5jcmVhdGVEZWZhdWx0Q29sb3JQcm9ncmFtKCB0aGlzLmdsICkgKTtcclxuICAgICAgICBHTFByb2dyYW1DYWNoZS5pbnN0YW5jZS5zZXQoIFwidGV4dHVyZVwiLCBHTFByb2dyYW0uY3JlYXRlRGVmYXVsdFRleHR1cmVQcm9ncmFtKCB0aGlzLmdsICkgKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pe277yM5Yib5bu66aKc6ImyR0xNZXNoQnVpbGRlcuWvueixoVxyXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBHTE1lc2hCdWlsZGVyKCB0aGlzLmdsLCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0JJVCB8IEdMQXR0cmliU3RhdGUuQ09MT1JfQklULCBHTFByb2dyYW1DYWNoZS5pbnN0YW5jZS5nZXRNdXN0KCBcImNvbG9yXCIgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRNb3VzZUNhbnZhcyAoKTogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuY2FudmFzMkQgIT09IG51bGwgJiYgdGhpcy5jdHgyRCAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMyRDtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJHTDJBcHBsaWNhdGlvbiBleHRlbmRzIEV2ZW50SW50ZXJhY3Rpb25cclxue1xyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgcHVibGljIG1hdFN0YWNrOiBHTE1hdHJpeFN0YWNrO1xyXG4gICAgcHVibGljIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbnZhczJEOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGN0eDJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0QXR0cmlidXRlczogV2ViR0xDb250ZXh0QXR0cmlidXRlcyA9IHsgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSB9LCBuZWVkMkQ6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcyApO1xyXG4gICAgICAgIGxldCBjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGwgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCBcIndlYmdsXCIsIGNvbnRleHRBdHRyaWJ1dGVzICk7XHJcbiAgICAgICAgaWYgKCBjdHggPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoIFwiIOaXoOazleWIm+W7uldlYkdMUmVuZGVyaW5nQ29udGV4dOS4iuS4i+aWh+WvueixoSBcIiApO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiIOaXoOazleWIm+W7uldlYkdMUmVuZGVyaW5nQ29udGV4dOS4iuS4i+aWh+WvueixoSBcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbCA9IGN0eDtcclxuXHJcbiAgICAgICAgaWYgKCBuZWVkMkQgPT09IHRydWUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNhbnZhc0VsZW06IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJjYW52YXNcIiApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gdGhpcy5jYW52YXMucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCBwYXJlbnQgPT09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiY2FudmFz5YWD57Sg5b+F6aG76KaB5pyJ54i25LqyISFcIiApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoIGNhbnZhc0VsZW0gKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQgPSBjYW52YXNFbGVtLmdldENvbnRleHQoIFwiMmRcIiApO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzRWxlbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzMkQgPSBjYW52YXNFbGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5riy5p+T54q25oCBXHJcbiAgICAgICAgR0xIZWxwZXIuc2V0RGVmYXVsdFN0YXRlKCB0aGlzLmdsICk7XHJcblxyXG4gICAgICAgIC8vIOWGhee9ruS4gOS4quefqemYteWghuagiFxyXG4gICAgICAgIHRoaXMubWF0U3RhY2sgPSBuZXcgR0xNYXRyaXhTdGFjaygpO1xyXG4gICAgICAgIHRoaXMubWF0U3RhY2sucGVyc3BlY3RpdmUoIDQ1LCBjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0LCAwLjEsIDEwMDAgKTtcclxuXHJcbiAgICAgICAgLy8g55Sx5LqOQ2FudmFz5piv5bem5omL57O777yM6ICMd2ViR0zmmK/lj7PmiYvns7vvvIzpnIDopoFGaWxwWUNvb3JkXHJcbiAgICAgICAgdGhpcy5pc0ZsaXBZQ29vcmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIzliJvlu7pkZWZhdWx057q555CGXHJcbiAgICAgICAgR0xUZXh0dXJlQ2FjaGUuaW5zdGFuY2Uuc2V0KCBcImRlZmF1bHRcIiwgR0xUZXh0dXJlLmNyZWF0ZURlZmF1bHRUZXh0dXJlKCB0aGlzLmdsICkgKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pe277yM5Yib5bu66aKc6Imy5ZKM57q555CGUHJvZ3JhbVxyXG4gICAgICAgIEdMUHJvZ3JhbUNhY2hlLmluc3RhbmNlLnNldCggXCJjb2xvclwiLCBHTFByb2dyYW0uY3JlYXRlRGVmYXVsdENvbG9yUHJvZ3JhbSggdGhpcy5nbCApICk7XHJcbiAgICAgICAgR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2Uuc2V0KCBcInRleHR1cmVcIiwgR0xQcm9ncmFtLmNyZWF0ZURlZmF1bHRUZXh0dXJlUHJvZ3JhbSggdGhpcy5nbCApICk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOWIm+W7uuminOiJskdMTWVzaEJ1aWxkZXLlr7nosaFcclxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgR0xNZXNoQnVpbGRlciggdGhpcy5nbCwgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQgfCBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVCwgR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2UuZ2V0TXVzdCggXCJjb2xvclwiICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TW91c2VDYW52YXMgKCk6IEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmNhbnZhczJEICE9PSBudWxsICYmIHRoaXMuY3R4MkQgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzMkQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCB0eXBlIEdMQXR0cmliQml0cyA9IG51bWJlcjtcclxuZXhwb3J0IHR5cGUgR0xBdHRyaWJPZmZzZXRNYXAgPSB7IFsga2V5OiBzdHJpbmcgXTogbnVtYmVyIH07XHJcblxyXG5leHBvcnQgY2xhc3MgR0xBdHRyaWJTdGF0ZVxyXG57XHJcbiAgICAvLyDpobbngrnlsZ7mgKdcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9TSVRJT05fQklUOiBudW1iZXIgPSAoIDEgPDwgMCApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQT1NJVElPTl9DT01QT05FTlQ6IG51bWJlciA9IDM7IC8veHl6XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBPU0lUSU9OX05BTUU6IHN0cmluZyA9IFwiYVBvc2l0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBPU0lUSU9OX0xPQ0FUSU9OOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkRfQklUOiBudW1iZXIgPSAoIDEgPDwgMSApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhDT09SRF9DT01QT05FTlQ6IG51bWJlciA9IDI7IC8vc3RcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkRfTkFNRTogc3RyaW5nID0gXCJhVGV4Q29vcmRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkRfTE9DQVRJT046IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhDT09SRDFfQklUOiBudW1iZXIgPSAoIDEgPDwgMiApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhDT09SRDFfQ09NUE9ORU5UOiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhDT09SRDFfTkFNRTogc3RyaW5nID0gXCJhVGV4Q29vcmQxXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWENPT1JEMV9MT0NBVElPTjogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9CSVQ6IG51bWJlciA9ICggMSA8PCAzICk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9DT01QT05FTlQ6IG51bWJlciA9IDM7IC8veHl6XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9OQU1FOiBzdHJpbmcgPSBcImFOb3JtYWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX0xPQ0FUSU9OOiBudW1iZXIgPSAzO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFOR0VOVF9CSVQ6IG51bWJlciA9ICggMSA8PCA0ICk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBTkdFTlRfQ09NUE9ORU5UOiBudW1iZXIgPSA0OyAvL3h5endcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEFOR0VOVF9OQU1FOiBzdHJpbmcgPSBcImFUYW5nZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBTkdFTlRfTE9DQVRJT046IG51bWJlciA9IDQ7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xPUl9CSVQ6IG51bWJlciA9ICggMSA8PCA1ICk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTE9SX0NPTVBPTkVOVDogbnVtYmVyID0gNDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT1JfTkFNRTogc3RyaW5nID0gXCJhQ29sb3JcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT1JfTE9DQVRJT046IG51bWJlciA9IDU7XHJcblxyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0VJR0hUMF9CSVQ6IG51bWJlciA9ICgxIDw8IDcpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXRUlHSFQxX0JJVDogbnVtYmVyID0gKDEgPDwgOCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdFSUdIVDJfQklUOiBudW1iZXIgPSAoMSA8PCA5KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0VJR0hUM19CSVQ6IG51bWJlciA9ICgxIDw8IDEwKTtcclxuICAgICovXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBVFRSSUJTVFJJREU6IHN0cmluZyA9IFwiU1RSSURFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEFUVFJJQkJZVEVMRU5HVEg6IHN0cmluZyA9IFwiQllURUxFTkdUSFwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRkxPQVQzMl9TSVpFID0gRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSU5UMTZfU0laRSA9IFVpbnQxNkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFrZVZlcnRleEF0dHJpYnMgKCBcclxuICAgICAgICB1c2VUZXhjb29yZDA6IGJvb2xlYW4sIFxyXG4gICAgICAgIHVzZVRleGNvb3JkMTogYm9vbGVhbiwgXHJcbiAgICAgICAgdXNlTm9ybWFsOiBib29sZWFuLCBcclxuICAgICAgICB1c2VUYW5nZW50OiBib29sZWFuLCBcclxuICAgICAgICB1c2VDb2xvcjogYm9vbGVhbiApOiBHTEF0dHJpYkJpdHNcclxuICAgIHtcclxuICAgICAgICAvLyDkuI3nrqHlpoLkvZXvvIzmgLvmmK/kvb/nlKjkvY3nva7lnZDmoIflsZ7mgKdcclxuICAgICAgICBsZXQgYml0czogR0xBdHRyaWJCaXRzID0gR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQ7XHJcbiAgICAgICAgLy8g5L2/55SoIHw9IOaTjeS9nOespua3u+WKoOagh+iusOS9jVxyXG4gICAgICAgIGlmICggdXNlVGV4Y29vcmQwID09PSB0cnVlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpdHMgfD0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdXNlVGV4Y29vcmQxID09PSB0cnVlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpdHMgfD0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHVzZU5vcm1hbCA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuTk9STUFMX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB1c2VUYW5nZW50ID09PSB0cnVlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpdHMgfD0gR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB1c2VDb2xvciA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuQ09MT1JfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYml0cztcclxuICAgIH1cclxuXHJcbiAgICAvLyDkvb/nlKjmjInkvY3kuI7vvIgm77yJ5pON5L2c56ym5p2l5rWL6K+V5ZCm5piv5YyF5ZCr5p+Q5Liq5L2N5qCH6K6w5YC8XHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc1Bvc2l0aW9uICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQgKSAhPT0gMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNOb3JtYWwgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMgKTogYm9vbGVhbiB7IHJldHVybiAoIGF0dHJpYkJpdHMgJiBHTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQgKSAhPT0gMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNUZXhDb29yZF8wICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQgKSAhPT0gMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNUZXhDb29yZF8xICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQklUICkgIT09IDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzQ29sb3IgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMgKTogYm9vbGVhbiB7IHJldHVybiAoIGF0dHJpYkJpdHMgJiBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVCApICE9PSAwOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc1RhbmdlbnQgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMgKTogYm9vbGVhbiB7IHJldHVybiAoIGF0dHJpYkJpdHMgJiBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQklUICkgIT09IDA7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG9mZnNldE1hcDogR0xBdHRyaWJPZmZzZXRNYXAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHJpZGU6IG51bWJlciA9IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5BVFRSSUJTVFJJREUgXTtcclxuICAgICAgICBpZiAoIHN0cmlkZSA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwidmVydGV4IEFycmF55pyJ6Zeu6aKY77yB77yBXCIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNlcXVlbmNlZOeahOivnXN0cmlkZeS4ujBcclxuICAgICAgICBpZiAoIHN0cmlkZSAhPT0gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLkFUVFJJQkJZVEVMRU5HVEggXSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzdHJpZGUgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXTtcclxuICAgICAgICBpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQ09NUE9ORU5ULCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgb2Zmc2V0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXTtcclxuICAgICAgICBpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoIEdMQXR0cmliU3RhdGUuTk9STUFMX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9DT01QT05FTlQsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9mZnNldCA9IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF07XHJcbiAgICAgICAgaWYgKCBvZmZzZXQgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0NPTVBPTkVOVCwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIG9mZnNldCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9OQU1FIF07XHJcbiAgICAgICAgaWYgKCBvZmZzZXQgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQ09NUE9ORU5ULCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgb2Zmc2V0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdO1xyXG4gICAgICAgIGlmICggb2Zmc2V0ICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlciggR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5DT0xPUl9DT01QT05FTlQsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9mZnNldCA9IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX05BTUUgXTtcclxuICAgICAgICBpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0NPTVBPTkVOVCwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIG9mZnNldCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYlZlcnRleEFycmF5U3RhdGUgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBhdHRyaWJCaXRzOiBudW1iZXIsIGVuYWJsZTogYm9vbGVhbiA9IHRydWUgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggZW5hYmxlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVuYWJsZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuTk9STUFMX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggZW5hYmxlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTE9DQVRJT04gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUZXhDb29yZF8xKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBlbmFibGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9MT0NBVElPTiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc0NvbG9yKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBlbmFibGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLkNPTE9SX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RhbmdlbnQoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVuYWJsZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VmVydGV4Qnl0ZVN0cmlkZSAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cyApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgYnl0ZU9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1Bvc2l0aW9uKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc05vcm1hbCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUZXhDb29yZF8xKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5DT0xPUl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUYW5nZW50KCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnl0ZU9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNlcXVlbmNlZExheW91dEF0dHJpYk9mZnNldE1hcCAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cywgdmVydENvdW50OiBudW1iZXIgKTogR0xBdHRyaWJPZmZzZXRNYXBcclxuICAgIHtcclxuICAgICAgICBsZXQgb2Zmc2V0czogR0xBdHRyaWJPZmZzZXRNYXAgPSB7fTsgLy8g5Yid5aeL5YyW6aG254K55bGe5oCn5YGP56e76KGoXHJcbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQ6IG51bWJlciA9IDA7IC8vIOWIneWni+WMluaXtueahOmmluWcsOWdgOS4ujBcclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzUG9zaXRpb24oIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDorrDlvZXkvY3nva7lnZDmoIfnmoTpppblnLDlnYBcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF0gPSAwOyBcclxuICAgICAgICAgICAgLy8g5L2N572u5Z2Q5qCH55SxM+S4qmZsb2F05YC857uE5oiQ77yM5Zug5q2k5LiL5LiA5Liq5bGe5oCn55qE6aaW5Zyw5Z2A5L2NIDMgKiA0ICog6aG254K55pWw6YePXHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gdmVydENvdW50ICogR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF0gPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IHZlcnRDb3VudCAqIEdMQXR0cmliU3RhdGUuTk9STUFMX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSB2ZXJ0Q291bnQgKiBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMSggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gdmVydENvdW50ICogR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSB2ZXJ0Q291bnQgKiBHTEF0dHJpYlN0YXRlLkNPTE9SX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGFuZ2VudCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9OQU1FIF0gPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IHZlcnRDb3VudCAqIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2VxdWVuY2VkTGF5b3V05YW35pyJQVRUUklCU1RSSURF5ZKMQVRUUklCU1RSSURF5bGe5oCnXHJcbiAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5BVFRSSUJTVFJJREUgXSA9IGJ5dGVPZmZzZXQgLyB2ZXJ0Q291bnQ7IC8vIOaAu+eahOWtl+iKguaVsCAvIOmhtueCueaVsOmHjyAgPSDmr4/kuKrpobbngrnnmoRzdHJpZGXvvIzlrp7pmYXkuIrpobrluo/lrZjlgqjml7bkuI3pnIDopoHov5nkuKrlgLxcclxuICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLkFUVFJJQkJZVEVMRU5HVEggXSA9IGJ5dGVPZmZzZXQ7IC8vIOaAu+eahOWtl+iKguaVsFxyXG4gICAgICAgIHJldHVybiBvZmZzZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW50ZXJsZWF2ZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXAgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMgKTogR0xBdHRyaWJPZmZzZXRNYXBcclxuICAgIHtcclxuICAgICAgICBsZXQgb2Zmc2V0czogR0xBdHRyaWJPZmZzZXRNYXAgPSB7fTsgLy8g5Yid5aeL5YyW6aG254K55bGe5oCn5YGP56e76KGoXHJcbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQ6IG51bWJlciA9IDA7IC8vIOWIneWni+WMluaXtueahOmmluWcsOWdgOS4ujBcclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1Bvc2l0aW9uKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6K6w5b2V5L2N572u5Z2Q5qCH55qE6aaW5Zyw5Z2AXHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gMDtcclxuICAgICAgICAgICAgLy8g5L2N572u5Z2Q5qCH55SxM+S4qmZsb2F05YC857uE5oiQ77yM5Zug5q2k5LiL5LiA5Liq5bGe5oCn55qE6aaW5Zyw5Z2A5L2NIDMgKiA0ID0gMTLkuKrlrZfoioLlpIRcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5LiL6Z2i5ZCE5Liq5bGe5oCn5YGP56e76K6h566X566X5rOV5ZCM5LiK77yM5ZSv5LiA5Yy65Yir5piv5YiG6YeP55qE5LiN5ZCM6ICM5beyXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc05vcm1hbCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMSggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLkNPTE9SX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RhbmdlbnQoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdHJpZGXlkoxsZW5ndGjnm7jnrYlcclxuICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLkFUVFJJQlNUUklERSBdID0gYnl0ZU9mZnNldDsgICAgLy8g6Ze06ZqU5pWw57uE5pa55rOV5a2Y5YKo55qE6K+d77yM6aG254K555qEc3RyaWRl6Z2e5bi46YeN6KaBXHJcbiAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5BVFRSSUJCWVRFTEVOR1RIIF0gPSBieXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gb2Zmc2V0cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNlcHJhdGVkTGF5b3V0QXR0cmliT2Zmc2V0TWFwICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IEdMQXR0cmliT2Zmc2V0TWFwXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5q+P5Liq6aG254K55bGe5oCn5L2/55So5LiA5LiqdmJv55qE6K+d77yM5q+P5Liqb2Zmc2V0c+S4reeahOmhtueCueWxnuaAp+eahOWBj+enu+mDveaYr+S4ujBcclxuICAgICAgICAvLyDlubbkuJRvZmZzZXRz55qEbGVuZ3RoID0gdmJv55qE5Liq5pWw77yM5LiN6ZyA6KaB6aG254K5c3RyaWRl5ZKMYnl0ZUxlbnRo5bGe5oCnXHJcbiAgICAgICAgbGV0IG9mZnNldHM6IEdMQXR0cmliT2Zmc2V0TWFwID0ge307XHJcbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzTm9ybWFsKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUZXhDb29yZF8wKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMSggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX05BTUUgXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUYW5nZW50KCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX05BTUUgXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2Zmc2V0cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXR0cmliU3RhdGVWYWxpZCAoIGF0dHJpYkJpdHM6IG51bWJlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5LiA5a6a6KaB5pyJ5L2N572u5ZCR6YePXHJcbiAgICAgICAgaWYgKCAhR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orqHnrpd0YW5nZW50IHNwYWNl5b+F6aG76KaB5pyJdXblnZDmoIflkozms5Xnur/lkJHph49cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGFuZ2VudCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggIUdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoICFHTEF0dHJpYlN0YXRlLmhhc05vcm1hbCggYXR0cmliQml0cyApIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIOaemuS4vuexu1xyXG5leHBvcnQgZW51bSBFU2hhZGVyVHlwZVxyXG57XHJcbiAgICBWU19TSEFERVIsXHJcbiAgICBGU19TSEFERVJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRUdMU0xFU0RhdGFUeXBlXHJcbntcclxuICAgIEZMT0FUX1ZFQzIgPSAweDhCNTAsXHJcbiAgICBGTE9BVF9WRUMzLFxyXG4gICAgRkxPQVRfVkVDNCxcclxuICAgIElOVF9WRUMyLFxyXG4gICAgSU5UX1ZFQzMsXHJcbiAgICBJTlRfVkVDNCxcclxuICAgIEJPT0wsXHJcbiAgICBCT09MX1ZFQzIsXHJcbiAgICBCT09MX1ZFQzMsXHJcbiAgICBCT09MX1ZFQzQsXHJcbiAgICBGTE9BVF9NQVQyLFxyXG4gICAgRkxPQVRfTUFUMyxcclxuICAgIEZMT0FUX01BVDQsXHJcbiAgICBTQU1QTEVSXzJELFxyXG4gICAgU0FNUExFUl9DVUJFLFxyXG5cclxuICAgIEZMT0FUID0gMHgxNDA2LFxyXG4gICAgSU5UID0gMHgxNDA0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTFVuaWZvcm1JbmZvXHJcbntcclxuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7ICAgLy8gc2l6ZSDmmK/mjId0eXBl55qE5Liq5pWw77yM5YiH6K6wXHJcbiAgICBwdWJsaWMgdHlwZTogRUdMU0xFU0RhdGFUeXBlOyAgIC8vIHR5cGUg5pivVW5pZm9ybSBUeXBl77yM6ICM5LiN5pivRGF0YVR5cGVcclxuICAgIHB1YmxpYyBsb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggc2l6ZTogbnVtYmVyLCB0eXBlOiBudW1iZXIsIGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xBdHRyaWJJbmZvXHJcbntcclxuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7ICAgLy8gc2l6ZSDmmK/mjId0eXBl55qE5Liq5pWw77yM5YiH6K6wXHJcbiAgICBwdWJsaWMgdHlwZTogRUdMU0xFU0RhdGFUeXBlOyAgIC8vIHR5cGUg5pivVW5pZm9ybSBUeXBl77yM6ICM5LiN5pivRGF0YVR5cGVcclxuICAgIHB1YmxpYyBsb2NhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHNpemU6IG51bWJlciwgdHlwZTogbnVtYmVyLCBsb2M6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2M7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdMVW5pZm9ybU1hcCA9IHsgWyBrZXk6IHN0cmluZyBdOiBHTFVuaWZvcm1JbmZvIH07XHJcbmV4cG9ydCB0eXBlIEdMQXR0cmliTWFwID0geyBbIGtleTogc3RyaW5nIF06IEdMQXR0cmliSW5mbyB9O1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHTEhlbHBlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIHByaW50U3RhdGVzICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5omA5pyJ55qEYm9vbGVhbueKtuaAgeWPmOmHj++8jOWFsTnkuKpcclxuICAgICAgICBjb25zb2xlLmxvZyggXCIxLiBpc0JsZW5kRW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLkJMRU5EICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCIyLiBpc0N1bGxGYWNlRW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLkNVTExfRkFDRSApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiMy4gaXNEZXB0aFRlc3RFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuREVQVEhfVEVTVCApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiNC4gaXNEaXRoZXJFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuRElUSEVSICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCI1LiBpc1BvbHlnb25PZmZzZXRGaWxsRW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLlBPTFlHT05fT0ZGU0VUX0ZJTEwgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjYuIGlzU2FtcGxlQWxwaHRUb0NvdmVyYWdlRW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLlNBTVBMRV9BTFBIQV9UT19DT1ZFUkFHRSApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiNy4gaXNTYW1wbGVDb3ZlcmFnZUVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5TQU1QTEVfQ09WRVJBR0UgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjguIGlzU2Npc3NvclRlc3RFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuU0NJU1NPUl9URVNUICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCI5LiBpc1N0ZW5jaWxUZXN0RW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLlNURU5DSUxfVEVTVCApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmludFdlYkdMSW5mbyAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcInJlbmRlcmVyID0gXCIgKyBnbC5nZXRQYXJhbWV0ZXIoIGdsLlJFTkRFUkVSICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJ2ZXJzaW9uID0gXCIgKyBnbC5nZXRQYXJhbWV0ZXIoIGdsLlZFUlNJT04gKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcInZlbmRvciA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5WRU5ET1IgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcImdsc2wgdmVyc2lvbiA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04gKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpbnRXZWJHTFRleHR1cmVJbmZvICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFMgPSBcIiwgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUyApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNQVhfVEVYVFVSRV9JTUFHRV9VTklUUyA9IFwiLGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIk1BWF9URVhUVVJFX1NJWkUgPSBcIiwgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfVEVYVFVSRV9TSVpFICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJNQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFID0gXCIsIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX0NVQkVfTUFQX1RFWFRVUkVfU0laRSApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmlnZ2VyQ29udGV4dExvc3RFdmVudCAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXQ6IFdFQkdMX2xvc2VfY29udGV4dCB8IG51bGwgPSBnbC5nZXRFeHRlbnNpb24oICdXRUJHTF9sb3NlX2NvbnRleHQnICk7XHJcbiAgICAgICAgaWYgKCByZXQgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0Lmxvc2VDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tHTEVycm9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVycjogbnVtYmVyID0gZ2wuZ2V0RXJyb3IoKTtcclxuICAgICAgICBpZiAoIGVyciA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJXZWJHTCBFcnJvciBOTzogXCIsIGVyciApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXREZWZhdWx0U3RhdGUgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBkZWZhdWx0IFtyPTAsZz0wLGI9MCxhPTBdXHJcbiAgICAgICAgZ2wuY2xlYXJDb2xvciggMC4wLCAwLjAsIDAuMCwgMC4wICk7IC8vIOavj+asoea4heWxj+aXtu+8jOWwhuminOiJsue8k+WGsuWMuuiuvue9ruS4uuWFqOmAj+aYjum7keiJslxyXG4gICAgICAgIGdsLmNsZWFyRGVwdGgoIDEuMCApOyAvLyDmr4/mrKHmuIXlsY/ml7bvvIzlsIbmt7HluqbnvJPlhrLljLrorr7nva7kuLoxLjBcclxuICAgICAgICBnbC5lbmFibGUoIGdsLkRFUFRIX1RFU1QgKTsgLy/lvIDlkK/mt7HluqbmtYvor5VcclxuICAgICAgICBnbC5lbmFibGUoIGdsLkNVTExfRkFDRSApOyAgLy/lvIDlkK/og4zpnaLliZTpmaRcclxuICAgICAgICBnbC5lbmFibGUoIGdsLlNDSVNTT1JfVEVTVCApOyAvLyDlvIDlkK/oo4HliarmtYvor5VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFZpZXdwb3J0ICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdjogbnVtYmVyW10gKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGdsLnZpZXdwb3J0KCB2WyAwIF0sIHZbIDEgXSwgdlsgMiBdLCB2WyAzIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNoYWRlciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IEVTaGFkZXJUeXBlICk6IFdlYkdMU2hhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAoIHR5cGUgPT09IEVTaGFkZXJUeXBlLlZTX1NIQURFUiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoIGdsLlZFUlRFWF9TSEFERVIgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlciggZ2wuRlJBR01FTlRfU0hBREVSICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggc2hhZGVyID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOWIm+W7uldlYkdMU2hhZGVy5a+56LGh5aSx6LSl77yM5oiR5Lus6YeH5Y+W5oqb6ZSZ6ZSZ6K+v55qE5aSE55CG5pa55byPXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTFNoYWRlcuWIm+W7uuWksei0pe+8gVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb21waWxlU2hhZGVyICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgY29kZTogc3RyaW5nLCBzaGFkZXI6IFdlYkdMU2hhZGVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBnbC5zaGFkZXJTb3VyY2UoIHNoYWRlciwgY29kZSApOyAvLyDovb3lhaVzaGFkZXLmupDnoIFcclxuICAgICAgICBnbC5jb21waWxlU2hhZGVyKCBzaGFkZXIgKTsgLy8g57yW6K+Rc2hhZGVy5rqQ56CBXHJcbiAgICAgICAgLy8g5qOA5p+l57yW6K+R6ZSZ6K+vXHJcbiAgICAgICAgaWYgKCBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoIHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMgKSA9PT0gZmFsc2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c57yW6K+R5Ye6546w6ZSZ6K+v77yM5YiZ5by55Ye65a+56K+d5qGG77yM5LqG6Kej6ZSZ6K+v55qE5Y6f5ZugXHJcbiAgICAgICAgICAgIGFsZXJ0KCBnbC5nZXRTaGFkZXJJbmZvTG9nKCBzaGFkZXIgKSApO1xyXG4gICAgICAgICAgICAvLyDnhLblkI7lsIZzaGFkZXLliKDpmaTmjonvvIzpmLLmraLlhoXlrZjms4TmvI9cclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKCBzaGFkZXIgKTtcclxuICAgICAgICAgICAgLy8g57yW6K+R6ZSZ6K+v6L+U5ZueZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnvJbor5HmiJDlip/ov5Tlm550cnVlXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVQcm9ncmFtICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBXZWJHTFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtIHwgbnVsbCA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuICAgICAgICBpZiAoIHByb2dyYW0gPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g55u05o6l5oqb5Ye66ZSZ6K+vXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTFByb2dyYW3liJvlu7rlpLHotKXvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxpbmtQcm9ncmFtIChcclxuICAgICAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCAvLyDmuLLmn5PkuIrkuIvmloflr7nosaFcclxuICAgICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sICAgICAvLyDpk77mjqXlmajlr7nosaFcclxuICAgICAgICB2c1NoYWRlcjogV2ViR0xTaGFkZXIsICAgICAvLyDopoHpk77mjqXnmoTpobbngrnnnYDoibLlmahcclxuICAgICAgICBmc1NoYWRlcjogV2ViR0xTaGFkZXIsICAgICAvLyDopoHpk77mjqXnmoTniYfmrrXnnYDoibLlmahcclxuICAgICAgICBiZWZvcmVQcm9ncmFtTGluazogKCAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHByb2dyYW06IFdlYkdMUHJvZ3JhbSApID0+IHZvaWQgKSB8IG51bGwgPSBudWxsLFxyXG4gICAgICAgIGFmdGVyUHJvZ3JhbUxpbms6ICggKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gKSA9PiB2b2lkICkgfCBudWxsID0gbnVsbCApOiBib29sZWFuXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vIDHjgIHkvb/nlKhhdHRhY2hTaGFkZXLmlrnms5XlsIbpobbngrnlkozniYfmrrXnnYDoibLlmajkuI7lvZPliY3nmoTov57mjqXlmajnm7jlhbPogZRcclxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIoIHByb2dyYW0sIHZzU2hhZGVyICk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCBmc1NoYWRlciApO1xyXG5cclxuICAgICAgICAvLyAy44CB5Zyo6LCD55SobGlua1Byb2dyYW3mlrnms5XkuYvliY3vvIzmjInpnIDop6blj5FiZWZvcmVQcm9ncmFtTGlua+Wbnuiwg+WHveaVsFxyXG4gICAgICAgIGlmICggYmVmb3JlUHJvZ3JhbUxpbmsgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmVmb3JlUHJvZ3JhbUxpbmsoIGdsLCBwcm9ncmFtICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAz44CB6LCD55SobGlua1Byb2dyYW3ov5vooYzpk77mjqXmk43kvZxcclxuICAgICAgICBnbC5saW5rUHJvZ3JhbSggcHJvZ3JhbSApO1xyXG4gICAgICAgIC8vIDTjgIHkvb/nlKjluKZnbC5MSU5LX1NUQVRVU+WPguaVsOeahGdldFByb2dyYW1QYXJhbWV0ZXLmlrnms5XvvIzov5vooYzpk77mjqXnirbmgIHmo4Dmn6VcclxuICAgICAgICBpZiAoIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoIHByb2dyYW0sIGdsLkxJTktfU1RBVFVTICkgPT09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIDQuMSDlpoLmnpzpk77mjqXlh7rplJnvvIzosIPnlKhnZXRQcm9ncmFtSW5mb0xvZ+aWueazleWwhumUmeivr+S/oeaBr+S7peW8ueahhuaWueW8j+mAmuefpeiwg+eUqOiAhVxyXG4gICAgICAgICAgICBhbGVydCggZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coIHByb2dyYW0gKSApO1xyXG4gICAgICAgICAgICAvLyA0LjIg5Yig6Zmk5o6J55u45YWz6LWE5rqQ77yM6Ziy5q2i5YaF5a2Y5rOE5ryPXHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlciggdnNTaGFkZXIgKTtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKCBmc1NoYWRlciApO1xyXG4gICAgICAgICAgICBnbC5kZWxldGVQcm9ncmFtKCBwcm9ncmFtICk7XHJcbiAgICAgICAgICAgIC8vIDQuMyDov5Tlm57pk77mjqXlpLHotKXnirbmgIFcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDXjgIHkvb/nlKh2YWxpZGF0ZVByb2dyYW3ov5vooYzpk77mjqXpqozor4FcclxuICAgICAgICBnbC52YWxpZGF0ZVByb2dyYW0oIHByb2dyYW0gKTtcclxuICAgICAgICAvLyA244CB5L2/55So5bimZ2wuVkFMSURBVEVfU1RBVFVT5Y+C5pWw55qEZ2V0UHJvZ3JhbVBhcmFtZXRlcuaWueazle+8jOi/m+ihjOmqjOivgeeKtuaAgeajgOafpVxyXG4gICAgICAgIGlmICggZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlciggcHJvZ3JhbSwgZ2wuVkFMSURBVEVfU1RBVFVTICkgPT09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIDYuMSDlpoLmnpzpqozor4Hlh7rplJnvvIzosIPnlKhnZXRQcm9ncmFtSW5mb0xvZ+aWueazleWwhumUmeivr+S/oeaBr+S7peW8ueahhuaWueW8j+mAmuefpeiwg+eUqOiAhVxyXG4gICAgICAgICAgICBhbGVydCggZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coIHByb2dyYW0gKSApO1xyXG4gICAgICAgICAgICAvLyA2LjIg5Yig6Zmk5o6J55u45YWz6LWE5rqQ77yM6Ziy5q2i5YaF5a2Y5rOE5ryPXHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlciggdnNTaGFkZXIgKTtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKCBmc1NoYWRlciApO1xyXG4gICAgICAgICAgICBnbC5kZWxldGVQcm9ncmFtKCBwcm9ncmFtICk7XHJcbiAgICAgICAgICAgIC8vIDYuMyDov5Tlm57pk77mjqXlpLHotKXnirbmgIFcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDfjgIHlhajpg6jmraPnoa7vvIzmjInpnIDosIPnlKhhZnRlclByb2dyYW1MaW5r5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgaWYgKCBhZnRlclByb2dyYW1MaW5rICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFmdGVyUHJvZ3JhbUxpbmsoIGdsLCBwcm9ncmFtICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA444CB6L+U5Zue6ZO+5o6l5q2j56Gu6KGo56S6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvZ3JhbUFjdGl2ZUF0dHJpYnMgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtOiBXZWJHTFByb2dyYW0sIG91dDogR0xBdHRyaWJNYXAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v6I635Y+W5b2T5YmNYWN0aXZl54q25oCB55qEYXR0cmlidXRl5ZKMdW5pZm9ybeeahOaVsOmHj1xyXG4gICAgICAgIC8v5b6I6YeN6KaB5LiA54K577yMYWN0aXZlX2F0dHJpYnV0ZXMvdW5pZm9ybXPlv4XpobvlnKhsaW5r5ZCO5omN6IO96I635b6XXHJcbiAgICAgICAgbGV0IGF0dHJpYnV0c0NvdW50OiBudW1iZXIgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKCBwcm9ncmFtLCBnbC5BQ1RJVkVfQVRUUklCVVRFUyApO1xyXG5cclxuICAgICAgICAvL+W+iOmHjeimgeS4gOeCue+8jOaJgOiwk2FjdGl2ZeaYr+aMh3VuaWZvcm3lt7Lnu4/ooqvkvb/nlKjnmoTvvIzlkKbliJnkuI3lsZ7kuo51bmlmb3JtLHVuaWZvcm3lnKhzaGFkZXLkuK3lv4XpobvmmK/or7vlj5bvvIzkuI3og73otYvlgLxcclxuICAgICAgICAvL+W+iOmHjeimgeS4gOeCue+8jGF0dHJpYnV0ZeWcqHNoYWRlcuS4reWPquiDveivu+WPlu+8jOS4jeiDvei1i+WAvCzlpoLmnpzmsqHmnInooqvkvb/nlKjnmoTor53vvIzkuZ/mmK/kuI3nrpflhaVhY3RpdmVBdHRyaWLkuK3ljrvnmoRcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dHNDb3VudDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBXZWJHTEFjdGl2ZUluZm8gfCBudWxsID0gZ2wuZ2V0QWN0aXZlQXR0cmliKCBwcm9ncmFtLCBpICk7XHJcbiAgICAgICAgICAgIGlmICggaW5mbyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG91dFsgaW5mby5uYW1lIF0gPSBuZXcgR0xBdHRyaWJJbmZvKCBpbmZvLnNpemUsIGluZm8udHlwZSwgZ2wuZ2V0QXR0cmliTG9jYXRpb24oIHByb2dyYW0sIGluZm8ubmFtZSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm9ncmFtQXRjaXZlVW5pZm9ybXMgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtOiBXZWJHTFByb2dyYW0sIG91dDogR0xVbmlmb3JtTWFwICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgdW5pZm9ybXNDb3VudDogbnVtYmVyID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlciggcHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TICk7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdW5pZm9ybXNDb3VudDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmZvOiBXZWJHTEFjdGl2ZUluZm8gfCBudWxsID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybSggcHJvZ3JhbSwgaSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oIHByb2dyYW0sIGluZm8ubmFtZSApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBsb2MgIT09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dFsgaW5mby5uYW1lIF0gPSBuZXcgR0xVbmlmb3JtSW5mbyggaW5mby5zaXplLCBpbmZvLnR5cGUsIGxvYyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQnVmZmVyICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBXZWJHTEJ1ZmZlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBidWZmZXI6IFdlYkdMQnVmZmVyIHwgbnVsbCA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggYnVmZmVyID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTEJ1ZmZlcuWIm+W7uuWksei0pe+8gVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb2xvckJ1ZmZlckRhdGEgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IFVpbnQ4QXJyYXlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGl4ZWxzOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCAqIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQgKiA0ICk7XHJcbiAgICAgICAgZ2wucmVhZFBpeGVscyggMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBwaXhlbHMgKTtcclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IHsgTWF0cml4NCB9IGZyb20gXCIuLi9tYXRoL21hdHJpeDRcIjtcclxuaW1wb3J0IHsgTWF0aEhlbHBlciB9IGZyb20gXCIuLi9tYXRoL01hdGhIZWxwZXJcIlxyXG5leHBvcnQgZW51bSBFTWF0cml4TW9kZVxyXG57XHJcbiAgICBNT0RFTFZJRVcsXHJcbiAgICBQUk9KRUNUSU9OLFxyXG4gICAgVEVYVFVSRVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xNYXRyaXhTdGFja1xyXG57XHJcbiAgICBwcml2YXRlIF9tdlN0YWNrOiBNYXRyaXg0W107XHJcbiAgICBwcml2YXRlIF9wcm9qU3RhY2s6IE1hdHJpeDRbXTtcclxuICAgIHByaXZhdGUgX3RleFN0YWNrOiBNYXRyaXg0W107XHJcbiAgICBwdWJsaWMgbWF0cml4TW9kZTogRU1hdHJpeE1vZGU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbml7bmr4/kuKrnn6npmLXmoIjpg73lhYjmt7vliqDkuIDkuKrmraPkuqTlvZLkuIDljJblkI7nmoTnn6npmLVcclxuICAgICAgICB0aGlzLl9tdlN0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy5fbXZTdGFjay5wdXNoKCBuZXcgTWF0cml4NCgpICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2pTdGFjayA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3Byb2pTdGFjay5wdXNoKCBuZXcgTWF0cml4NCgpICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RleFN0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy5fdGV4U3RhY2sucHVzaCggbmV3IE1hdHJpeDQoKSApO1xyXG5cclxuICAgICAgICB0aGlzLm1hdHJpeE1vZGUgPSBFTWF0cml4TW9kZS5NT0RFTFZJRVc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlbFZpZXdNYXRyaXggKCk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX212U3RhY2subGVuZ3RoIDw9IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIm1vZGVsIHZpZXcgbWF0cml4IHN0YWNr5Li656m677yBXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX212U3RhY2tbIHRoaXMuX212U3RhY2subGVuZ3RoIC0gMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvamVjdGlvbk1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5fcHJvalN0YWNrLmxlbmd0aCA8PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJwcm9qZWN0aW9uIG1hdHJpeCBzdGFja+S4uuepuu+8gVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qU3RhY2tbIHRoaXMuX3Byb2pTdGFjay5sZW5ndGggLSAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldDogTWF0cml4NCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LmNvcHkoIHJldCApO1xyXG4gICAgICAgIHJldC5tdWx0aXBseSggdGhpcy5tb2RlbFZpZXdNYXRyaXggKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbm9ybWFsTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldDogTWF0cml4NCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguY29weSggcmV0ICk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguaW52ZXJzZSgpO1xyXG4gICAgICAgIHJldC50cmFuc3Bvc2UoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGV4dHVyZU1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5fdGV4U3RhY2subGVuZ3RoIDw9IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcInByb2plY3Rpb24gbWF0cml4IHN0YWNr5Li656m677yBXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleFN0YWNrWyB0aGlzLl90ZXhTdGFjay5sZW5ndGggLSAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2hNYXRyaXggKCk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKCB0aGlzLm1hdHJpeE1vZGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5NT0RFTFZJRVc6XHJcbiAgICAgICAgICAgICAgICBsZXQgbXY6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguY29weSggbXYgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX212U3RhY2sucHVzaCggbXYgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvaiA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguY29weSggcHJvaiApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvalN0YWNrLnB1c2goIHByb2ogKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4OiBNYXRyaXg0ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZU1hdHJpeC5jb3B5KCB0ZXggKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleFN0YWNrLnB1c2goIHRleCApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3BNYXRyaXggKCk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKCB0aGlzLm1hdHJpeE1vZGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5NT0RFTFZJRVc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tdlN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuUFJPSkVDVElPTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2pTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXhTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZElkZW50aXR5ICgpOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXguc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1hdHJpeCAoIG1hdDogTWF0cml4NCApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgbWF0LmNvcHkoIHRoaXMubW9kZWxWaWV3TWF0cml4ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgbWF0LmNvcHkoIHRoaXMucHJvamVjdGlvbk1hdHJpeCApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuVEVYVFVSRTpcclxuICAgICAgICAgICAgICAgIG1hdC5jb3B5KCB0aGlzLnRleHR1cmVNYXRyaXggKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyc3BlY3RpdmUgKCBmb3Y6IG51bWJlciwgYXNwZWN0OiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIsIGlzUmFkaWFuczogYm9vbGVhbiA9IGZhbHNlICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1hdHJpeE1vZGUgPSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OO1xyXG4gICAgICAgIGlmICggaXNSYWRpYW5zID09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvdiA9IE1hdGhIZWxwZXIudG9SYWRpYW4oIGZvdiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF0OiBNYXRyaXg0ID0gTWF0cml4NC5wZXJzcGVjdGl2ZSggZm92LCBhc3BlY3QsIG5lYXIsIGZhciApO1xyXG4gICAgICAgIHRoaXMubG9hZE1hdHJpeCggbWF0ICk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuTU9ERUxWSUVXO1xyXG4gICAgICAgIC8vIOaYr+WQpuimgeiwg+eUqGxvYWRJZGVudGl0eeaWueazlT8/P1xyXG4gICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZydXN0dW0gKCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCB0b3A6IG51bWJlciwgbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlciApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuUFJPSkVDVElPTjtcclxuICAgICAgICBsZXQgbWF0OiBNYXRyaXg0ID0gTWF0cml4NC5mcnVzdHVtKCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciApO1xyXG4gICAgICAgIHRoaXMubG9hZE1hdHJpeCggbWF0ICk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuTU9ERUxWSUVXO1xyXG4gICAgICAgIC8vIOaYr+WQpuimgeiwg+eUqGxvYWRJZGVudGl0eeaWueazlT8/P1xyXG4gICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ydGhvICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLlBST0pFQ1RJT047XHJcbiAgICAgICAgbGV0IG1hdDogTWF0cml4NCA9IE1hdHJpeDQub3J0aG9ncmFwaGljKCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciApO1xyXG4gICAgICAgIHRoaXMubG9hZE1hdHJpeCggbWF0ICk7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuTU9ERUxWSUVXO1xyXG4gICAgICAgIC8vIOaYr+WQpuimgeiwg+eUqGxvYWRJZGVudGl0eeaWueazlT8/P1xyXG4gICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvb2tBdCAoIHBvczogVmVjdG9yMywgdGFyZ2V0OiBWZWN0b3IzLCB1cDogVmVjdG9yMyA9IFZlY3RvcjMudXAgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLk1PREVMVklFVztcclxuICAgICAgICBsZXQgbWF0OiBNYXRyaXg0ID0gTWF0cml4NC5sb29rQXQoIHBvcywgdGFyZ2V0LCB1cCApO1xyXG4gICAgICAgIHRoaXMubG9hZE1hdHJpeCggbWF0ICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VWaWV3ICggcG9zOiBWZWN0b3IzLCB4QXhpczogVmVjdG9yMywgeUF4aXM6IFZlY3RvcjMsIHpBeGlzOiBWZWN0b3IzICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB6QXhpcy5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy9mb3J3YXJkIGNyb3NzIHJpZ2h0ID0gdXBcclxuICAgICAgICBWZWN0b3IzLmNyb3NzKCB6QXhpcywgeEF4aXMsIHlBeGlzICk7XHJcbiAgICAgICAgeUF4aXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vdXAgY3Jvc3MgZm9yd2FyZCA9IHJpZ2h0XHJcbiAgICAgICAgVmVjdG9yMy5jcm9zcyggeUF4aXMsIHpBeGlzLCB4QXhpcyApO1xyXG4gICAgICAgIHhBeGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBsZXQgeDogbnVtYmVyID0gLVZlY3RvcjMuZG90KCB4QXhpcywgcG9zICk7XHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggeUF4aXMsIHBvcyApO1xyXG4gICAgICAgIGxldCB6OiBudW1iZXIgPSAtVmVjdG9yMy5kb3QoIHpBeGlzLCBwb3MgKTtcclxuXHJcbiAgICAgICAgbGV0IG1hdDogTWF0cml4NCA9IHRoaXMuX212U3RhY2tbIHRoaXMuX212U3RhY2subGVuZ3RoIC0gMSBdO1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDAgXSA9IHhBeGlzLng7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMSBdID0geUF4aXMueDtcclxuICAgICAgICBtYXQudmFsdWVzWyAyIF0gPSB6QXhpcy54O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDMgXSA9IDAuMDtcclxuXHJcbiAgICAgICAgbWF0LnZhbHVlc1sgNCBdID0geEF4aXMueTtcclxuICAgICAgICBtYXQudmFsdWVzWyA1IF0gPSB5QXhpcy55O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDYgXSA9IHpBeGlzLnk7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgNyBdID0gMC4wO1xyXG5cclxuICAgICAgICBtYXQudmFsdWVzWyA4IF0gPSB4QXhpcy56O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDkgXSA9IHlBeGlzLno7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTAgXSA9IHpBeGlzLno7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTEgXSA9IDAuMDtcclxuXHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTIgXSA9IHg7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTMgXSA9IHk7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTQgXSA9IHo7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMTUgXSA9IDEuMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRNYXRyaXggKCBtYXQ6IE1hdHJpeDQgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4Lm11bHRpcGx5KCBtYXQgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXgubXVsdGlwbHkoIG1hdCApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuVEVYVFVSRTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZU1hdHJpeC5tdWx0aXBseSggbWF0ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZSAoIHBvczogVmVjdG9yMyApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXgudHJhbnNsYXRlKCBwb3MgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXgudHJhbnNsYXRlKCBwb3MgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXgudHJhbnNsYXRlKCBwb3MgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcm90YXRlICggYW5nbGU6IG51bWJlciwgYXhpczogVmVjdG9yMywgaXNSYWRpYW5zOiBib29sZWFuID0gZmFsc2UgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIGlmICggaXNSYWRpYW5zID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGhIZWxwZXIudG9SYWRpYW4oIGFuZ2xlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnJvdGF0ZSggYW5nbGUsIGF4aXMgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXgucm90YXRlKCBhbmdsZSwgYXhpcyApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuVEVYVFVSRTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZU1hdHJpeC5yb3RhdGUoIGFuZ2xlLCBheGlzICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYWxlICggczogVmVjdG9yMyApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguc2NhbGUoIHMgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXguc2NhbGUoIHMgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXguc2NhbGUoIHMgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMV29ybGRNYXRyaXhTdGFja1xyXG57XHJcbiAgICBwcml2YXRlIF93b3JsZE1hdHJpeFN0YWNrOiBNYXRyaXg0W107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy/liJ3lp4vljJbml7bmr4/kuKrnn6npmLXmoIjpg73lhYjmt7vliqDkuIDkuKrmraPkuqTlvZLkuIDljJblkI7nmoTnn6npmLVcclxuICAgICAgICB0aGlzLl93b3JsZE1hdHJpeFN0YWNrID0gW107XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXRyaXhTdGFjay5wdXNoKCBuZXcgTWF0cml4NCgpICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb2RlbFZpZXdNYXRyaXggKCk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3dvcmxkTWF0cml4U3RhY2subGVuZ3RoIDw9IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIiBtb2RlbCBtYXRyaXggc3RhY2vkuLrnqbrvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fd29ybGRNYXRyaXhTdGFja1sgdGhpcy5fd29ybGRNYXRyaXhTdGFjay5sZW5ndGggLSAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2hNYXRyaXggKCk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIGxldCBtdjogTWF0cml4NCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguY29weSggbXYgKTtcclxuICAgICAgICB0aGlzLl93b3JsZE1hdHJpeFN0YWNrLnB1c2goIG12ICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvcE1hdHJpeCAoKTogR0xXb3JsZE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXRyaXhTdGFjay5wb3AoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZElkZW50aXR5ICgpOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5zZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTWF0cml4ICggbWF0OiBNYXRyaXg0ICk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIG1hdC5jb3B5KCB0aGlzLm1vZGVsVmlld01hdHJpeCApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0TWF0cml4ICggbWF0OiBNYXRyaXg0ICk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4Lm11bHRpcGx5KCBtYXQgKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlICggcG9zOiBWZWN0b3IzICk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnRyYW5zbGF0ZSggcG9zICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZSAoIGFuZ2xlOiBudW1iZXIsIGF4aXM6IFZlY3RvcjMsIGlzUmFkaWFuczogYm9vbGVhbiA9IGZhbHNlICk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIGlmICggaXNSYWRpYW5zID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGhIZWxwZXIudG9SYWRpYW4oIGFuZ2xlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnJvdGF0ZSggYW5nbGUsIGF4aXMgKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NhbGUgKCBzOiBWZWN0b3IzICk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnNjYWxlKCBzICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHTEF0dHJpYkJpdHMsIEdMQXR0cmliU3RhdGUsIEdMQXR0cmliT2Zmc2V0TWFwIH0gZnJvbSBcIi4vV2ViR0xBdHRyaWJTdGF0ZVwiXHJcbmltcG9ydCBWZWN0b3I0IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IHsgTWF0cml4NCB9IGZyb20gXCIuLi9tYXRoL21hdHJpeDRcIjtcclxuaW1wb3J0IHsgVHlwZWRBcnJheUxpc3QgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnRhaW5lci9UeXBlZEFycmF5TGlzdFwiO1xyXG5pbXBvcnQgeyBHTFByb2dyYW0gfSBmcm9tIFwiLi9XZWJHTFByb2dyYW1cIjtcclxuaW1wb3J0IHsgR0xUZXh0dXJlIH0gZnJvbSBcIi4vV2ViR0xUZXh0dXJlXCI7XHJcblxyXG4vLyDkvb/nlKhhYnN0cmFjdOWjsOaYjuaKveixoeexu1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR0xNZXNoQmFzZVxyXG57XHJcbiAgICAvLyBXZWJHTOa4suafk+S4iuS4i+aWh1xyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICAvLyBnbC5UUklBTkdMRVMg562JN+enjeWfuuacrOWHoOS9leWbvuWFg+S5i+S4gFxyXG4gICAgcHVibGljIGRyYXdNb2RlOiBudW1iZXI7XHJcbiAgICAvLyDpobbngrnlsZ7mgKfmoLzlvI/vvIzlkoznu5jliLblvZPliY3nvZHmoLzml7bkvb/nlKjnmoRHTFByb2dyYW3lhbfmnInkuIDoh7TnmoRhdHRyaWJCaXRzXHJcbiAgICBwcm90ZWN0ZWQgX2F0dHJpYlN0YXRlOiBHTEF0dHJpYkJpdHM7XHJcbiAgICAvLyDlvZPliY3kvb/nlKjnmoTpobbngrnlsZ7mgKfnmoRzdHJpZGXlrZfoioLmlbBcclxuICAgIHByb3RlY3RlZCBfYXR0cmliU3RyaWRlOiBudW1iZXI7XHJcblxyXG4gICAgLy8g5oiR5Lus5L2/55SoVkFP77yI6aG254K55pWw57uE5a+56LGh77yJ5p2l566h55CGVkJP5ZKMRUJPXHJcbiAgICBwcm90ZWN0ZWQgX3ZhbzogT0VTX3ZlcnRleF9hcnJheV9vYmplY3Q7XHJcbiAgICBwcm90ZWN0ZWQgX3Zhb1RhcmdldDogV2ViR0xWZXJ0ZXhBcnJheU9iamVjdE9FUztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBhdHRyaWJTdGF0ZTogR0xBdHRyaWJCaXRzLCBkcmF3TW9kZTogbnVtYmVyID0gZ2wuVFJJQU5HTEVTIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPllZBT+eahOatpemqpO+8mlxyXG4gICAgICAgIC8vIDHjgIHkvb/nlKhnbC5nZXRFeHRlbnNpb24oIFwiT0VTX3ZlcnRleF9hcnJheV9vYmplY3RcIiAp5pa55byP6I635Y+WVkFP5omp5bGVXHJcbiAgICAgICAgbGV0IHZhbzogT0VTX3ZlcnRleF9hcnJheV9vYmplY3QgfCBudWxsID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oIFwiT0VTX3ZlcnRleF9hcnJheV9vYmplY3RcIiApO1xyXG4gICAgICAgIGlmICggdmFvID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJOb3QgU3VwcG9ydCBPRVNfdmVydGV4X2FycmF5X29iamVjdFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZhbyA9IHZhbztcclxuXHJcbiAgICAgICAgLy8gMuOAgeiwg+eUqGNyZWF0ZVZlcnRleEFycmF5T0VT6I635Y+WVkFP5a+56LGhXHJcbiAgICAgICAgbGV0IHZhb1RhcmdldDogV2ViR0xWZXJ0ZXhBcnJheU9iamVjdE9FUyB8IG51bGwgPSB0aGlzLl92YW8uY3JlYXRlVmVydGV4QXJyYXlPRVMoKTtcclxuICAgICAgICBpZiAoIHZhb1RhcmdldCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm90IFN1cHBvcnQgV2ViR0xWZXJ0ZXhBcnJheU9iamVjdE9FU1wiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Zhb1RhcmdldCA9IHZhb1RhcmdldDtcclxuXHJcbiAgICAgICAgLy8g6aG254K55bGe5oCn5qC85byP77yM5ZKM57uY5Yi25b2T5YmN572R5qC85pe25L2/55So55qER0xQcm9ncmFt5YW35pyJ5LiA6Ie055qEYXR0cmliQml0c1xyXG4gICAgICAgIHRoaXMuX2F0dHJpYlN0YXRlID0gYXR0cmliU3RhdGU7XHJcbiAgICAgICAgLy8g6LCD55SoR0xBdHRyaWJTdGF0ZeeahGdldFZlcnRleEJ5dGVTdHJpZGXmlrnms5XvvIzmoLnmja5hdHRyaWJCaXRz6K6h566X5Ye66aG254K555qEc3RyaWRl5a2X6IqC5pWwXHJcbiAgICAgICAgdGhpcy5fYXR0cmliU3RyaWRlID0gR0xBdHRyaWJTdGF0ZS5nZXRWZXJ0ZXhCeXRlU3RyaWRlKCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjee7mOWItuaXtuS9v+eUqOeahOWfuuacrOWHoOS9leWbvuWFg+exu+Wei++8jOm7mOiupOS4uuS4ieinkuW9oumbhuWQiFxyXG4gICAgICAgIHRoaXMuZHJhd01vZGUgPSBkcmF3TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZCAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIOe7keWumlZBT+WvueixoVxyXG4gICAgICAgIHRoaXMuX3Zhby5iaW5kVmVydGV4QXJyYXlPRVMoIHRoaXMuX3Zhb1RhcmdldCApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmJpbmQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyDop6Pnu5FWQU9cclxuICAgICAgICB0aGlzLl92YW8uYmluZFZlcnRleEFycmF5T0VTKCBudWxsICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2ZXJ0ZXhTdHJpZGUgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJTdHJpZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTFN0YXRpY01lc2ggZXh0ZW5kcyBHTE1lc2hCYXNlXHJcbntcclxuICAgIC8vR0xTdGF0aWNNZXNo5YaF572u5LqG5LiA5Liq6aG254K557yT5Yay5Yy6XHJcbiAgICBwcm90ZWN0ZWQgX3ZibzogV2ViR0xCdWZmZXI7XHJcbiAgICBwcm90ZWN0ZWQgX3ZlcnRDb3VudDogbnVtYmVyID0gMDsgIC8vIOmhtueCueeahOaVsOmHj1xyXG5cclxuICAgIC8vIEdMU3RhdGljTWVzaOWGhee9ruS6huS4gOS4quWPr+mAieeahOe0ouW8lee8k+WGsuWMulxyXG4gICAgcHJvdGVjdGVkIF9pYm86IFdlYkdMQnVmZmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX2luZGV4Q291bnQ6IG51bWJlciA9IDA7IC8vIOe0ouW8leeahOaVsOmHj1xyXG5cclxuICAgIHB1YmxpYyBtaW5zOiBWZWN0b3IzO1xyXG4gICAgcHVibGljIG1heHM6IFZlY3RvcjM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgYXR0cmliU3RhdGU6IEdMQXR0cmliQml0cywgdmJvOiBGbG9hdDMyQXJyYXkgfCBBcnJheUJ1ZmZlciwgaWJvOiBVaW50MTZBcnJheSB8IG51bGwgPSBudWxsLCBkcmF3TW9kZTogbnVtYmVyID0gZ2wuVFJJQU5HTEVTIClcclxuICAgIHtcclxuICAgICAgICAvLyDosIPnlKjln7rnsbvnmoTmnoTpgKDlh73mlbBcclxuICAgICAgICBzdXBlciggZ2wsIGF0dHJpYlN0YXRlLCBkcmF3TW9kZSApO1xyXG5cclxuICAgICAgICAvLyDlhbPplK7nmoTmk43kvZzvvJpcclxuICAgICAgICAvLyDopoHkvb/nlKhWQU/mnaXnrqHnkIZWQk/lkoxFQk/nmoTor53vvIzlv4XpobvopoHlnKhWQk/lkoxFQk/liJvlu7rnu5HlrprkuYvliY3lhYjnu5HlrppWQU/lr7nosaHvvIzov5nkuKrpobrluo/kuI3og73mkJ7plJnvvIHvvIHvvIFcclxuICAgICAgICAvLyDlhYjnu5HlrppWQU/lkI7vvIzpgqPkuYjlkI7nu63liJvlu7rnmoRWQk/lkoxFQk/lr7nosaHpg73lvZLlsZ5WQU/nrqHovpbvvIHvvIHvvIFcclxuICAgICAgICB0aGlzLmJpbmQoKTtcclxuICAgICAgICAvLyDlnKjliJvlu7rlubbnu5Hlrpp2Ym9cclxuICAgICAgICBsZXQgdmI6IFdlYkdMQnVmZmVyIHwgbnVsbCA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggdmIgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcInZibyBjcmVhdGlvbiBmYWlsXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdmJvID0gdmI7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fdmJvICk7IC8vIOe7keWumlZCT1xyXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIHZibywgdGhpcy5nbC5TVEFUSUNfRFJBVyApOyAvLyDlsIbpobbngrnmlbDmja7ovb3lhaXliLBWQk/kuK1cclxuICAgICAgICAvLyDnhLblkI7orqHnrpflh7rkuqTplJnlrZjlgqjnmoTpobbngrnlsZ7mgKdhdHRyaWJPZmZzZXRNYXDnm7jlhbPnmoTlgLxcclxuICAgICAgICBsZXQgb2Zmc2V0TWFwOiBHTEF0dHJpYk9mZnNldE1hcCA9IEdMQXR0cmliU3RhdGUuZ2V0SW50ZXJsZWF2ZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXAoIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgLy8g6K6h566X5Ye66aG254K555qE5pWw6YePXHJcbiAgICAgICAgdGhpcy5fdmVydENvdW50ID0gdmJvLmJ5dGVMZW5ndGggLyBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuQVRUUklCU1RSSURFIF07XHJcbiAgICAgICAgLy8g5L2/55SoVkFP5ZCO77yM5oiR5Lus5Y+q6KaB5Yid5aeL5YyW5pe26K6+572u5LiA5qyhc2V0QXR0cmliVmVydGV4QXJyYXlQb2ludGVy5ZKMc2V0QXR0cmliVmVydGV4QXJyYXlTdGF0ZeWwseihjOS6hlxyXG4gICAgICAgIC8vIOW9k+aIkeS7rOWQjue7reiwg+eUqOWfuuexu+eahGJpbmTmlrnms5Xnu5HlrppWQU/lr7nosaHlkI7vvIxWQU/kvJroh6rliqjlpITnkIbpobbngrnlnLDlnYDnu5HlrprlkozpobbngrnlsZ7mgKflr4TlrZjlmajlvIDlkK/nm7jlhbPmk43kvZzvvIzov5nlsLHnroDljJbkuoblvojlpJrmk43kvZxcclxuICAgICAgICBHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlciggZ2wsIG9mZnNldE1hcCApO1xyXG4gICAgICAgIEdMQXR0cmliU3RhdGUuc2V0QXR0cmliVmVydGV4QXJyYXlTdGF0ZSggZ2wsIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgLy8g5YaN5Yib5bu6SUJP77yISUJP6KGo56S6SW5kZXggQnVmZmVyIE9iamVjdCxFQk/ooajnpLpFbGVtZW50IEJ1ZmZlciBPYmplY3TvvIzooajnpLrkuIDmoLfnmoTmpoLlv7XvvIlcclxuICAgICAgICB0aGlzLnNldElCTyggaWJvICk7XHJcbiAgICAgICAgLy8g5b+F6aG75pS+5Zyo6L+Z6YeMXHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5taW5zID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLm1heHMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRJQk8gKCBpYm86IFVpbnQxNkFycmF5IHwgbnVsbCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBpYm8gPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAgLy8g5oyJ6ZyA5Yib5bu6SUJPXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWIm+W7umlib1xyXG4gICAgICAgIHRoaXMuX2libyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pYm8gPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIklCTyBjcmVhdGlvbiBmYWlsXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g57uR5a6aaWJvXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pYm8gKTtcclxuICAgICAgICAvLyDlsIbntKLlvJXmlbDmja7kuIrkvKDliLBpYm/kuK1cclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGlibywgdGhpcy5nbC5TVEFUSUNfRFJBVyApO1xyXG4gICAgICAgIC8vIOiuoeeul+WHuue0ouW8leS4quaVsFxyXG4gICAgICAgIHRoaXMuX2luZGV4Q291bnQgPSBpYm8ubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iaW5kKCk7IC8vIOe7mOWItuWJjeWFiOimgee7keWumlZBT1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaciUlCT++8jOS9v+eUqGRyYXdFbGVtZW50c+aWueazlee7mOWItumdmeaAgee9keagvOWvueixoVxyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyggdGhpcy5kcmF3TW9kZSwgdGhpcy5faW5kZXhDb3VudCwgdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwgMCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJSUJP77yM5YiZ5L2/55SoZHJhd0FycmF5c+aWueazlee7mOWItumdmeaAgee9keagvOWvueixoVxyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXMoIHRoaXMuZHJhd01vZGUsIDAsIHRoaXMuX3ZlcnRDb3VudCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuYmluZCgpOyAvLyDnu5jliLblpb3lkI7op6PpmaRWQU/nu5HlrppcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5b6I6YeN6KaB55qE5Yeg54K56K+05piO77yaXHJcbiAgICAvLyBkcmF3RWxlbWVudHPkuK3nmoRvZmZzZXTmmK/ku6XlrZfoioLkuLrljZXkvY3vvIHvvIHvvIHvvIHvvIFcclxuICAgIC8vIOiAjGNvdW505piv5Lul57Si5byV5Liq5pWw5Li65Y2V5L2NXHJcbiAgICAvLyBkcmF3UmFuZ2Xnu5jliLbku45vZmZzZXTlgY/np7vnmoTlrZfoioLmlbDlvIDlp4vvvIznu5jliLZjb3VudOS4que0ouW8lVxyXG4gICAgLy8gZHJhd1Jhbmdl5YaF6YOo5bm25rKh5pyJ6LCD55SoYmluZOWSjHVuYmluZOaWueazle+8jOWboOatpOimgeiwg+eUqGRyYXdSYW5nZeaWueazleeahOivne+8jOW/hemhu+WmguS4i+aWueW8j++8mlxyXG4gICAgLyogXHJcbiAgICAgICAgbWVzaC5iaW5kKCk7IC8vIOe7keWumlZBT1xyXG4gICAgICAgIG1lc2guZHJhd1JhbmdlKCAyLCA1KTsgLy8g6LCD55SoZHJhd1Jhbmdl5pa55rOVXHJcbiAgICAgICAgbWVzaC51bmJpbmQoKTsgLy8g6Kej57uRVkFPXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGRyYXdSYW5nZSAoIG9mZnNldDogbnVtYmVyLCBjb3VudDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2libyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyggdGhpcy5kcmF3TW9kZSwgY291bnQsIHRoaXMuZ2wuVU5TSUdORURfU0hPUlQsIG9mZnNldCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKCB0aGlzLmRyYXdNb2RlLCBvZmZzZXQsIGNvdW50ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xJbmRleGVkU3RhdGljTWVzaCBleHRlbmRzIEdMU3RhdGljTWVzaFxyXG57XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzOiBUeXBlZEFycmF5TGlzdDxVaW50MTZBcnJheT47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgYXR0cmliU3RhdGU6IEdMQXR0cmliQml0cywgdmJvOiBGbG9hdDMyQXJyYXkgfCBBcnJheUJ1ZmZlciwgZHJhd01vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFUyApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGdsLCBhdHRyaWJTdGF0ZSwgdmJvLCBudWxsLCBkcmF3TW9kZSApO1xyXG4gICAgICAgIHRoaXMuX2luZGljZXMgPSBuZXcgVHlwZWRBcnJheUxpc3Q8VWludDE2QXJyYXk+KCBVaW50MTZBcnJheSwgOTAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSW5kZXggKCBpZHg6IG51bWJlciApOiBHTEluZGV4ZWRTdGF0aWNNZXNoXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5faW5kaWNlcy5wdXNoKCBpZHggKTtcclxuICAgICAgICB0aGlzLl9pbmRleENvdW50ID0gdGhpcy5faW5kaWNlcy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFySW5kaWNlcyAoKTogR0xJbmRleGVkU3RhdGljTWVzaFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2luZGljZXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLl9pbmRleENvdW50ID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0SUJPICggaWJvOiBVaW50MTZBcnJheSB8IG51bGwgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2libyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pYm8gPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIklCTyBjcmVhdGlvbiBmYWlsXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pYm8gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faW5kaWNlcy5zdWJBcnJheSgpLCB0aGlzLl9pbmRleENvdW50ICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKCB0aGlzLmRyYXdNb2RlLCB0aGlzLl9pbmRleENvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXMoIHRoaXMuZHJhd01vZGUsIDAsIHRoaXMuX3ZlcnRDb3VudCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOW+iOmHjeimgeeahOS4gOeCuVxyXG4gICAgLy8gZHJhd0VsZW1lbnRz5Lit55qEb2Zmc2V05piv5Lul5a2X6IqC5Li65Y2V5L2N77yB77yB77yB77yB77yBXHJcbiAgICAvLyDogIxjb3VudOaYr+S7pee0ouW8leS4quaVsOS4uuWNleS9jVxyXG4gICAgLy8g5omA5Lul5YGP56e755qE5a+75Z2A5pa55byP5pivIDogb2Zmc2V0IFxyXG4gICAgLy8gY291bnTnmoTlrZfoioLmlbA6ICAgICAgICBzaXplb2YgKGdsIC4gVU5TSUdORURfU0hPUlQpICogY291bnRcclxuICAgIHB1YmxpYyBkcmF3UmFuZ2UgKCBvZmZzZXQ6IG51bWJlciwgY291bnQ6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pYm8gIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pYm8gKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pbmRpY2VzLnN1YkFycmF5KCksIHRoaXMuX2luZGV4Q291bnQgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3RWxlbWVudHMoIHRoaXMuZHJhd01vZGUsIGNvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyggdGhpcy5kcmF3TW9kZSwgb2Zmc2V0LCBjb3VudCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gRVZlcnRleExheW91dFxyXG57XHJcbiAgICBJTlRFUkxFQVZFRCxcclxuICAgIFNFUVVFTkNFRCxcclxuICAgIFNFUEFSQVRFRFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xNZXNoQnVpbGRlciBleHRlbmRzIEdMTWVzaEJhc2Vcclxue1xyXG4gICAgLy8g5a2X56ym5Liy5bi46YePa2V5XHJcbiAgICBwcml2YXRlIHN0YXRpYyBTRVFVRU5DRUQ6IHN0cmluZyA9IFwiU0VRVUVOQ0VEXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBJTlRFUkxFQVZFRDogc3RyaW5nID0gXCJJTlRFUkxFQVZFRFwiO1xyXG5cclxuICAgIHByaXZhdGUgX2xheW91dDogRVZlcnRleExheW91dDsgLy8g6aG254K55Zyo5YaF5a2Y5oiW5pi+5a2Y5Lit55qE5biD5bGA5pa55byPXHJcblxyXG4gICAgLy8g5Li65LqG566A5Y2V6LW36KeB77yM5Y+q5pSv5oyB6aG254K555qE5L2N572u5Z2Q5qCH44CB57q555CGMOWdkOagh+OAgeminOiJsuWSjOazlee6v+i/meWbm+enjemhtueCueWxnuaAp+agvOW8j1xyXG4gICAgLy8g6KGo56S65b2T5YmN5q2j5Zyo6L6T5YWl55qE6aG254K55bGe5oCn5YC8XHJcbiAgICBwcml2YXRlIF9jb2xvcjogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCAwLCAwLCAwLCAwICk7XHJcbiAgICBwcml2YXRlIF90ZXhDb29yZDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCAwLCAwICk7XHJcbiAgICBwcml2YXRlIF9ub3JtYWw6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMCwgMCwgMSApO1xyXG5cclxuICAgIC8vIOS7jkdMQXR0cmliQml0c+WIpOaWreaYr+WQpuWMheWQq+WmguS4i+WHoOS4qumhtueCueWxnuaAp1xyXG4gICAgcHJpdmF0ZSBfaGFzQ29sb3I6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9oYXNUZXhjb29yZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2hhc05vcm1hbDogYm9vbGVhbjtcclxuXHJcbiAgICAvLyDmuLLmn5PnmoTmlbDmja7mupBcclxuICAgIHByaXZhdGUgX2xpc3RzOiB7IFsga2V5OiBzdHJpbmcgXTogVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiB9ID0ge307XHJcbiAgICAvLyDmuLLmn5PnlKjnmoRWQk9cclxuICAgIHByaXZhdGUgX2J1ZmZlcnM6IHsgWyBrZXk6IHN0cmluZyBdOiBXZWJHTEJ1ZmZlciB9ID0ge307XHJcbiAgICAvLyDopoHmuLLmn5PnmoTpobbngrnmlbDph49cclxuICAgIHByaXZhdGUgX3ZlcnRDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyDlvZPliY3kvb/nlKjnmoRHTFByb2dyYW3lr7nosaFcclxuICAgIHB1YmxpYyBwcm9ncmFtOiBHTFByb2dyYW07XHJcbiAgICAvLyDlpoLmnpznurnnkIblnZDmoIfvvIzpgqPpnIDopoHorr7nva7lvZPliY3kvb/nlKjnmoTnurnnkIZcclxuICAgIHB1YmxpYyB0ZXh0dXJlOiBXZWJHTFRleHR1cmUgfCBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2libzpXZWJHTEJ1ZmZlciB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pbmRleENvdW50Om51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBzZXRUZXh0dXJlKHRleDpHTFRleHR1cmUpOnZvaWR7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4LnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElCTyhkYXRhOlVpbnQxNkFycmF5KTp2b2lke1xyXG4gICAgICAgIC8vIOWIm+W7umlib1xyXG4gICAgICAgIHRoaXMuX2libyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pYm8gPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIklCTyBjcmVhdGlvbiBmYWlsXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g57uR5a6aaWJvXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pYm8gKTtcclxuICAgICAgICAvLyDlsIbntKLlvJXmlbDmja7kuIrkvKDliLBpYm/kuK1cclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGRhdGEsIHRoaXMuZ2wuU1RBVElDX0RSQVcgKTtcclxuICAgICAgICB0aGlzLl9pbmRleENvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHN0YXRlOiBHTEF0dHJpYkJpdHMsIHByb2dyYW06IEdMUHJvZ3JhbSwgdGV4dHVyZTogV2ViR0xUZXh0dXJlIHwgbnVsbCA9IG51bGwsIGxheW91dDogRVZlcnRleExheW91dCA9IEVWZXJ0ZXhMYXlvdXQuSU5URVJMRUFWRUQgKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBnbCwgc3RhdGUgKTsgLy8g6LCD55So5Z+657G755qE5p6E6YCg5pa55rOVXHJcblxyXG4gICAgICAgIC8vIOagueaNrmF0dHJpYkJpdHPvvIzmtYvor5XmmK/lkKbkvb/nlKjkuobkuIvpnaLlh6Dnp43nsbvlnovnmoTpobbngrnlsZ7mgKfmoLzlvI9cclxuICAgICAgICB0aGlzLl9oYXNDb2xvciA9IEdMQXR0cmliU3RhdGUuaGFzQ29sb3IoIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgdGhpcy5faGFzVGV4Y29vcmQgPSBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgdGhpcy5faGFzTm9ybWFsID0gR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2libyA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIOm7mOiupOaDheWGteS4i++8jOS9v+eUqElOVEVSTEVBVkVE5a2Y5YKo6aG254K5XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0ID0gbGF5b3V0O1xyXG5cclxuICAgICAgICAvLyDorr7nva7lvZPliY3kvb/nlKjnmoRHTFByb2dyYW3lkoxHTFRleHR1cmUyROWvueixoVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDlhYjnu5HlrppWQU/lr7nosaFcclxuICAgICAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ57Si5byV57yT5a2YXHJcbiAgICAgICAgbGV0IGJ1ZmZlcjogV2ViR0xCdWZmZXIgfCBudWxsID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBidWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggYnVmZmVyID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTEJ1ZmZlcuWIm+W7uuS4jeaIkOWKnyFcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLl9sYXlvdXQgPT09IEVWZXJ0ZXhMYXlvdXQuSU5URVJMRUFWRUQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaW50ZXJsZWF2ZWTnmoTor53vvJpcclxuICAgICAgICAgICAgLy8g5L2/55So5LiA5LiqYXJyYXlsaXN0LOS4gOS4qumhtueCuee8k+WtmFxyXG4gICAgICAgICAgICAvLyDosIPnlKjnmoTmmK9HTEF0dHJpYlN0YXRlLmdldEludGVybGVhdmVkTGF5b3V0QXR0cmliT2Zmc2V0TWFw5pa55rOVXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RzWyBHTE1lc2hCdWlsZGVyLklOVEVSTEVBVkVEIF0gPSBuZXcgVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiggRmxvYXQzMkFycmF5ICk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbIEdMTWVzaEJ1aWxkZXIuSU5URVJMRUFWRUQgXSA9IGJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgIGxldCBtYXA6IEdMQXR0cmliT2Zmc2V0TWFwID0gR0xBdHRyaWJTdGF0ZS5nZXRJbnRlcmxlYXZlZExheW91dEF0dHJpYk9mZnNldE1hcCggdGhpcy5fYXR0cmliU3RhdGUgKTtcclxuICAgICAgICAgICAgLy8g6LCD55So5aaC5LiL5Lik5Liq5pa55rOVXHJcbiAgICAgICAgICAgIEdMQXR0cmliU3RhdGUuc2V0QXR0cmliVmVydGV4QXJyYXlQb2ludGVyKCB0aGlzLmdsLCBtYXAgKTtcclxuICAgICAgICAgICAgR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRlKCB0aGlzLmdsLCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuX2xheW91dCA9PT0gRVZlcnRleExheW91dC5TRVFVRU5DRUQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2VxdWVuY2Vk55qE6K+d77yaXHJcbiAgICAgICAgICAgIC8vIOS9v+eUqG7kuKphcnJheWxpc3Qs5LiA5Liq6aG254K557yT5a2YXHJcbiAgICAgICAgICAgIC8vIOaXoOazleWcqOWIneWni+WMluaXtuiwg+eUqOeahOaYr2dldFNlcXVlbmNlZExheW91dEF0dHJpYk9mZnNldE1hcOaWueazlVxyXG4gICAgICAgICAgICAvLyDml6Dms5Xkvb/nlKhHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlcuaWueazlemihOWFiOWbuuWumuWcsOWdgFxyXG4gICAgICAgICAgICAvLyDog73lpJ/kvb/nlKhHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5U3RhdGXlvIDlkK/pobbngrnlsZ7mgKflr4TlrZjlmahcclxuICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF0gPSBuZXcgVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiggRmxvYXQzMkFycmF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNOb3JtYWwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGlmICggYnVmZmVyID09PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIldlYkdMQnVmZmVy5Yib5bu65LiN5oiQ5YqfIVwiICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyc1sgR0xNZXNoQnVpbGRlci5TRVFVRU5DRUQgXSA9IGJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgIC8vIHNlcXVlbmNlZOayoeazlemihOWFiOiuvue9ruaMh+mSiO+8jOWboOS4uuaYr+WKqOaAgeeahFxyXG4gICAgICAgICAgICAvLyDkvYbmmK/lj6/ku6XpooTlhYjorr7nva7pobbngrnlsZ7mgKfnirbmgIFcclxuICAgICAgICAgICAgR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRlKCB0aGlzLmdsLCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc2VwZXJhdGVk55qE6K+d77yaXHJcbiAgICAgICAgICAgIC8vIOS9v+eUqG7kuKphcnJheWxpc3QsbuS4qumhtueCuee8k+WtmFxyXG4gICAgICAgICAgICAvLyDosIPnlKjnmoTmmK9nZXRTZXByYXRlZExheW91dEF0dHJpYk9mZnNldE1hcOaWueazlVxyXG4gICAgICAgICAgICAvLyDog73lpJ/kvb/nlKjog73lpJ/kvb/nlKhHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlcuaWueazlemihOWFiOWbuuWumuWcsOWdgFxyXG4gICAgICAgICAgICAvLyDog73lpJ/kvb/nlKhHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5U3RhdGXlvIDlkK/pobbngrnlsZ7mgKflr4TlrZjlmahcclxuXHJcbiAgICAgICAgICAgIC8vIOiCr+WumuimgeacieeahOaYr+S9jee9ruaVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF0gPSBuZXcgVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiggRmxvYXQzMkFycmF5ICk7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gYnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04sMyxnbC5GTE9BVCxmYWxzZSwwLDApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04pO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIGlmICggYnVmZmVyID09PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xCdWZmZXLliJvlu7rkuI3miJDlip8hXCIgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdID0gYnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiw0LGdsLkZMT0FULGZhbHNlLDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF0gPSBuZXcgVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiggRmxvYXQzMkFycmF5ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXSA9IGJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklULDIsZ2wuRkxPQVQsZmFsc2UsMCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzTm9ybWFsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXSA9IG5ldyBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+KCBGbG9hdDMyQXJyYXkgKTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGJ1ZmZlciA9PT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIldlYkdMQnVmZmVy5Yib5bu65LiN5oiQ5YqfIVwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF0gPSBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiwzLGdsLkZMT0FULGZhbHNlLDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KEdMQXR0cmliU3RhdGUuTk9STUFMX0xPQ0FUSU9OKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL0dMQXR0cmliU3RhdGUuc2V0QXR0cmliVmVydGV4QXJyYXlQb2ludGVyKCB0aGlzLmdsLCBtYXAgKTtcclxuICAgICAgICAgICAgLy9HTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5U3RhdGUoIHRoaXMuZ2wsIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi+k+WFpXJnYmHpopzoibLlgLzvvIzlj5blgLzojIPlm7TkuLpbIDAgLCAxIF3kuYvpl7Qs6L+U5ZuedGhpcyzpg73mmK/pk77lvI/mk43kvZxcclxuICAgIHB1YmxpYyBjb2xvciAoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciA9IDEuMCApOiBHTE1lc2hCdWlsZGVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9oYXNDb2xvciApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvci5yID0gcjtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IuZyA9IGc7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yLmIgPSBiO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvci5hID0gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L6T5YWldXbnurnnkIblnZDmoIflgLzvvIzov5Tlm550aGlzLOmDveaYr+mTvuW8j+aTjeS9nFxyXG4gICAgcHVibGljIHRleGNvb3JkICggdTogbnVtYmVyLCB2OiBudW1iZXIgKTogR0xNZXNoQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdGV4Q29vcmQueCA9IHU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleENvb3JkLnkgPSB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDovpPlhaXms5Xnur/lgLx4eXrvvIzov5Tlm550aGlzLOmDveaYr+mTvuW8j+aTjeS9nFxyXG4gICAgcHVibGljIG5vcm1hbCAoIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIgKTogR0xNZXNoQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5faGFzTm9ybWFsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbC54ID0geDtcclxuICAgICAgICAgICAgdGhpcy5fbm9ybWFsLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLl9ub3JtYWwueiA9IHo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZlcnRleOW/hemhu+imgeacgOWQjuiwg+eUqO+8jOi+k+WFpXh5eizov5Tlm550aGlzLOmDveaYr+mTvuW8j+aTjeS9nFxyXG4gICAgcHVibGljIHZlcnRleCAoIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIgKTogR0xNZXNoQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5fbGF5b3V0ID09PSBFVmVydGV4TGF5b3V0LklOVEVSTEVBVkVEIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOmSiOWvuWludGVybGVhdmVk5a2Y5YKo5pa55byP55qE5pON5L2cXHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMTWVzaEJ1aWxkZXIuSU5URVJMRUFWRUQgXTtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb25cclxuICAgICAgICAgICAgbGlzdC5wdXNoKCB4ICk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCggeSApO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goIHogKTtcclxuICAgICAgICAgICAgLy8gdGV4Y29vcmRcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNUZXhjb29yZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fdGV4Q29vcmQueCApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl90ZXhDb29yZC55ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm9ybWFsXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzTm9ybWFsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueCApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueSApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbG9yXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzQ29sb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX2NvbG9yLnIgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fY29sb3IuZyApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5iICk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX2NvbG9yLmEgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHsgICAvLyBzZXF1ZW5jZWTlkoxzZXBhcmF0ZWTpg73mmK/lhbfmnInlpJrkuKpBcnJheUxpc3RcclxuICAgICAgICAgICAgLy8g6ZKI5a+56ZmkaW50ZXJsZWF2ZWTlrZjlgqjmlrnlvI/lpJbnmoTmk43kvZxcclxuICAgICAgICAgICAgbGV0IGxpc3Q6IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4gPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF07XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCggeCApO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goIHkgKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKCB6ICk7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl90ZXhDb29yZC54ICk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX3RleENvb3JkLnkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueCApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueSApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9ub3JtYWwueiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzQ29sb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5yICk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX2NvbG9yLmcgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fY29sb3IuYiApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5hICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6K6w5b2V5pu05paw5ZCO55qE6aG254K55pWw6YePXHJcbiAgICAgICAgdGhpcy5fdmVydENvdW50Kys7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5q+P5qyh6LCD55So5LiK6L+w5Yeg5Liq5re75Yqg6aG254K55bGe5oCn55qE5pa55rOV5LmL5YmN77yM5b+F6aG76KaB5YWI6LCD55SoYmVnaW7mlrnms5XvvIzov5Tlm550aGlz5oyH6ZKI77yM6ZO+5byP5pON5L2cXHJcbiAgICBwdWJsaWMgYmVnaW4gKCBkcmF3TW9kZTogbnVtYmVyID0gdGhpcy5nbC5UUklBTkdMRVMgKTogR0xNZXNoQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZHJhd01vZGUgPSBkcmF3TW9kZTsgLy8g6K6+572u6KaB57uY5Yi255qEbW9kZe+8jDfnp43ln7rmnKzlh6DkvZXlm77lhYNcclxuICAgICAgICB0aGlzLl92ZXJ0Q291bnQgPSAwOyAvLyDmuIXnqbrpobbngrnmlbDkuLowXHJcbiAgICAgICAgaWYgKCB0aGlzLl9sYXlvdXQgPT09IEVWZXJ0ZXhMYXlvdXQuSU5URVJMRUFWRUQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxpc3Q6IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4gPSB0aGlzLl9saXN0c1sgR0xNZXNoQnVpbGRlci5JTlRFUkxFQVZFRCBdO1xyXG4gICAgICAgICAgICBsaXN0LmNsZWFyKCk7IC8vIOS9v+eUqOiHquW3seWunueOsOeahOWKqOaAgeexu+Wei+aVsOe7hO+8jOmHjeeUqFxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5L2/55So6Ieq5bex5a6e546w55qE5Yqo5oCB57G75Z6L5pWw57uE77yM6YeN55SoXHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdO1xyXG4gICAgICAgICAgICBsaXN0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzTm9ybWFsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICBsaXN0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNDb2xvciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICBsaXN0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5k5pa55rOV55So5LqO5riy5p+T5pON5L2cXHJcbiAgICBwdWJsaWMgZW5kICggbXZwOiBNYXRyaXg0ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0uYmluZCgpOyAvLyDnu5HlrppHTFByb2dyYW1cclxuICAgICAgICB0aGlzLnByb2dyYW0uc2V0TWF0cml4NCggR0xQcm9ncmFtLk1WUE1hdHJpeCwgbXZwICk7IC8vIOi9veWFpU1WUE1hdHJpeCB1bmlmb3Jt5Y+Y6YePXHJcbiAgICAgICAgaWYodGhpcy50ZXh0dXJlICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsdGhpcy50ZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmxvYWRTYW1wbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZCgpOyAvLyDnu5HlrppWQU9cclxuICAgICAgICBpZiAoIHRoaXMuX2xheW91dCA9PT0gRVZlcnRleExheW91dC5JTlRFUkxFQVZFRCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDojrflj5bmlbDmja7mupBcclxuICAgICAgICAgICAgbGV0IGxpc3Q6IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4gPSB0aGlzLl9saXN0c1sgR0xNZXNoQnVpbGRlci5JTlRFUkxFQVZFRCBdO1xyXG4gICAgICAgICAgICAvLyDojrflj5ZWQk9cclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcjogV2ViR0xCdWZmZXIgPSB0aGlzLl9idWZmZXJzWyBHTE1lc2hCdWlsZGVyLklOVEVSTEVBVkVEIF07XHJcbiAgICAgICAgICAgIC8vIOe7keWumlZCT1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgLy8g5LiK5Lyg5riy5p+T5pWw5o2u5YiwVkJP5LitXHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGxpc3Quc3ViQXJyYXkoKSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9sYXlvdXQgPT09IEVWZXJ0ZXhMYXlvdXQuU0VRVUVOQ0VEIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOmSiOWvuXNlcXVlbmNlZOWtmOWCqOaWueW8j+eahOa4suafk+WkhOeQhlxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyOiBXZWJHTEJ1ZmZlciA9IHRoaXMuX2J1ZmZlcnNbIEdMTWVzaEJ1aWxkZXIuU0VRVUVOQ0VEIF07XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAvL+eUqOeahOaYr+mihOWFiOWIhumFjeaYvuWtmOacuuWItlxyXG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9hdHRyaWJTdHJpZGUgKiB0aGlzLl92ZXJ0Q291bnQsIHRoaXMuZ2wuRFlOQU1JQ19EUkFXICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWFwOiBHTEF0dHJpYk9mZnNldE1hcCA9IEdMQXR0cmliU3RhdGUuZ2V0U2VxdWVuY2VkTGF5b3V0QXR0cmliT2Zmc2V0TWFwKCB0aGlzLl9hdHRyaWJTdGF0ZSwgdGhpcy5fdmVydENvdW50ICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdDogVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXTtcclxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgMCwgbGlzdC5zdWJBcnJheSgpICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIG1hcFsgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF0sIGxpc3Quc3ViQXJyYXkoKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbWFwWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF0sIGxpc3Quc3ViQXJyYXkoKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIG1hcFsgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FIF0sIGxpc3Quc3ViQXJyYXkoKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOavj+asoemDveimgemHjeaWsOiuoeeul+WSjOe7keWumumhtueCueWxnuaAp+aVsOe7hOeahOmmluWcsOWdgFxyXG4gICAgICAgICAgICBHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlciggdGhpcy5nbCwgbWFwICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDpkojlr7lzZXBlcmF0ZWTlrZjlgqjmlrnlvI/nmoTmuLLmn5PmlbDmja7lpITnkIZcclxuICAgICAgICAgICAgLy8g6ZyA6KaB5q+P5LiqVkJP6YO957uR5a6a5LiA5qyhXHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGxldCBidWZmZXI6IFdlYkdMQnVmZmVyID0gdGhpcy5fYnVmZmVyc1sgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF07XHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbGlzdC5zdWJBcnJheSgpLCB0aGlzLmdsLkRZTkFNSUNfRFJBVyApO1xyXG5cclxuICAgICAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5fYnVmZmVyc1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBsaXN0LnN1YkFycmF5KCksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG5vcm1hbFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcnNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBsaXN0LnN1YkFycmF5KCksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbG9yXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzQ29sb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGxpc3Quc3ViQXJyYXkoKSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBHTE1lc2hCdWlsZGVy5LiN5L2/55So57Si5byV57yT5Yay5Yy657uY5Yi25pa55byP77yM5Zug5q2k6LCD55SoZHJhd0FycmF5c+aWueazlVxyXG4gICAgICAgIGlmKHRoaXMuX2libyAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLl9pbmRpY2VzLnN1YkFycmF5KCksIHRoaXMuX2luZGV4Q291bnQgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3RWxlbWVudHMoIHRoaXMuZHJhd01vZGUsIHRoaXMuX2luZGV4Q291bnQsIHRoaXMuZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKCB0aGlzLmRyYXdNb2RlLCAwLCB0aGlzLl92ZXJ0Q291bnQgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTsgLy8g6Kej57uRVkFPXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVuYmluZCgpOyAvLyDop6Pnu5FHTFByb2dyYW1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgR0xBdHRyaWJCaXRzLCBHTEF0dHJpYlN0YXRlIH0gZnJvbSBcIi4vV2ViR0xBdHRyaWJTdGF0ZVwiXHJcbmltcG9ydCBWZWN0b3I0IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IHsgTWF0cml4NCB9IGZyb20gXCIuLi9tYXRoL21hdHJpeDRcIjtcclxuaW1wb3J0IHsgR0xUZXh0dXJlIH0gZnJvbSBcIi4vV2ViR0xUZXh0dXJlXCI7XHJcbmltcG9ydCBxdWF0IGZyb20gXCIuLi9tYXRoL3F1YXRcIjtcclxuaW1wb3J0IHsgR0xTaGFkZXJTb3VyY2UgfSBmcm9tIFwiLi9XZWJHTFNoYWRlclNvdXJjZVwiO1xyXG5pbXBvcnQgeyBHTEhlbHBlciwgRVNoYWRlclR5cGUsIEdMQXR0cmliTWFwLCBHTFVuaWZvcm1NYXAgfSBmcm9tIFwiLi9XZWJHTEhlbHBlclwiO1xyXG4vKlxyXG7mr5TovoPnibnliKvnmoTmmK9UZXh0dXJlIFVuaXRcclxuZ2xBY3RpdmVUZXh0dXJlIOa/gOa0u+afkOS4qlRleHR1cmVVbml0XHJcbmdsQmluZFRleHR1cmUgICDmv4DmtLvnmoRUZXh0dXJlVW5pdOS4reaUvuWFpee6ueeQhlxyXG5nbFVuaWZvcm0xaSAgICAg5bCGdW5pdOaJgOe7keWumueahOe6ueeQhnNhbXBsZXLkvKDovpPliLBHUFVcclxuXHJcbue7mOWItuaXtu+8jOS4jemcgOimgUFjdGl2ZVRleHR1cmXkuobvvIzlj6ropoFiaW5nVGV4dHVyZeWwseWPr+S7peS6hlxyXG4qL1xyXG4vLyBjYW1lcmHnm7jlhbN0cmFuc2Zvcm0gdW5pZm9ybeWPr+S7pemihOWFiOiuvuWumlxyXG4vLyB0ZXh0dXJl55u45YWz77yM5Zu65a6a5YyW77yM5Y+v5Lul6aKE5YWI6K6+5a6aXHJcbi8vIOWFtuS7lumcgOimgeavj+W4p+abtOaWsFxyXG5cclxuZXhwb3J0IGNsYXNzIEdMUHJvZ3JhbVxyXG57XHJcbiAgICAvLyB1bmlmb3Jtc+ebuOWFs+WumuS5iVxyXG5cclxuICAgIC8vdnPluLjnlKjnmoR1bmlmb3Jt5ZG95ZCNXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1WTWF0cml4OiBzdHJpbmcgPSBcInVNVk1hdHJpeFwiOyAgICAgICAgICAgICAgICAvLyDmqKHlnovop4blm77nn6npmLVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTW9kZWxNYXRyaXg6IHN0cmluZyA9IFwidU1vZGVsTWF0cml4XCI7ICAgICAgICAgIC8vIOaooeWei+efqemYtVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBWaWV3TWF0cml4OiBzdHJpbmcgPSBcInVWaWV3TWF0cml4XCI7ICAgICAgICAgICAgLy8g6KeG55+p6Zi1XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFByb2plY3RNYXRyaXg6IHN0cmluZyA9IFwidVByb2plY3RNYXRyaXhcIjsgICAgICAvLyDmipXlvbHnn6npmLVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTm9ybWFsTWF0cml4OiBzdHJpbmcgPSBcInVOb3JtYWxNYXRyaXhcIjsgICAgICAgIC8vIOazlee6v+efqemYtSAgICAgICAgICAgICAgICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNVlBNYXRyaXg6IHN0cmluZyA9IFwidU1WUE1hdHJpeFwiOyAgICAgICAgICAgICAgLy8g5qih5Z6LX+inhuWbvl/mipXlvbHnn6npmLVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ29sb3I6IHN0cmluZyA9IFwidUNvbG9yXCI7ICAgICAgICAgICAgICAgICAgICAgIC8vIOminOiJsuWAvFxyXG5cclxuICAgIC8vcHPluLjnlKjnmoR1bmlmb3Jt5ZG95ZCNXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNhbXBsZXI6IHN0cmluZyA9IFwidVNhbXBsZXJcIjsgICAgICAgICAgICAgICAgLy8g57q555CG5Y+W5qC35ZmoXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERpZmZ1c2VTYW1wbGVyOiBzdHJpbmcgPSBcInVEaWZmdXNlU2FtcGxlclwiOyAgLy8g5ryr5Y+N5bCE5Y+W5qC35ZmoXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5vcm1hbFNhbXBsZXI6IHN0cmluZyA9IFwidU5vcm1hbFNhbXBsZXJcIjsgICAgLy8g5rOV57q/5Y+W5qC35ZmoXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNwZWN1bGFyU2FtcGxlcjogc3RyaW5nID0gXCJ1U3BlY3VsYXJTYW1wbGVyXCI7IC8vIOmrmOWFieWPluagt+WZqFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXB0aFNhbXBsZXI6IHN0cmluZyA9IFwidURlcHRoU2FtcGxlclwiOyAgICAgICAvLyDmt7Hluqblj5bmoLflmahcclxuXHJcbiAgICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDsgIC8vIFdlYkdM5LiK5LiL5paH5riy5p+T5a+56LGhXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nOyAgLy8gcHJvZ3JhbeWQjVxyXG5cclxuICAgIHByaXZhdGUgX2F0dHJpYlN0YXRlOiBHTEF0dHJpYkJpdHM7IC8vIOW9k+WJjeeahFByb2dyYW3kvb/nlKjnmoTpobbngrnlsZ7mgKdiaXRz5YC8XHJcblxyXG4gICAgcHVibGljIHByb2dyYW06IFdlYkdMUHJvZ3JhbTsgICAvLyDpk77mjqXlmahcclxuICAgIHB1YmxpYyB2c1NoYWRlcjogV2ViR0xTaGFkZXI7ICAgLy8gdmVydGV4IHNoYWRlcue8luivkeWZqFxyXG4gICAgcHVibGljIGZzU2hhZGVyOiBXZWJHTFNoYWRlcjsgICAvLyBmcmFnbWVudCBzaGFkZXLnvJbor5HlmahcclxuXHJcbiAgICAvLyDkuLvopoHnlKjkuo7kv6Hmga/ovpPlh7pcclxuICAgIHB1YmxpYyBhdHRyaWJNYXA6IEdMQXR0cmliTWFwO1xyXG4gICAgcHVibGljIHVuaWZvcm1NYXA6R0xVbmlmb3JtTWFwO1xyXG5cclxuICAgIC8vIOW9k+iwg+eUqGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKeWQjuinpuWPkWJpbmRDYWxsYmFja+Wbnuiwg1xyXG4gICAgcHVibGljIGJpbmRDYWxsYmFjazogKCAoIHByb2dyYW06IEdMUHJvZ3JhbSApID0+IHZvaWQgKSB8IG51bGw7XHJcbiAgICAvLyDlvZPosIPnlKhnbC51c2VQcm9ncmFtKG51bGwp5YmN6Kem5Y+RdW5iaW5kQ2FsbGJhY2vlm57osIPlh73mlbBcclxuICAgIHB1YmxpYyB1bmJpbmRDYWxsYmFjazogKCAoIHByb2dyYW06IEdMUHJvZ3JhbSApID0+IHZvaWQgKSB8IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfdnNTaGFkZXJEZWZpbmVTdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZnNTaGFkZXJEZWZpbmVTdHJpbmdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICBcclxuICAgIHB1YmxpYyBnZXQgYXR0cmliU3RhdGUgKCk6IEdMQXR0cmliQml0c1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRyaWJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2dyb21CZWZvcmVMaW5rKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCxwcm9ncmFtOldlYkdMUHJvZ3JhbSk6dm9pZHtcclxuICAgICAgICAgLy/pk77mjqXliY3miY3og73kvb/nlKhiaW5kQXR0cmliTG9jYXRpb27lh73mlbBcclxuICAgICAgICAvLzEgYXR0cmli5ZCN5a2X5b+F6aG75ZKMc2hhZGVy5Lit55qE5ZG95ZCN6KaB5LiA6Ie0XHJcbiAgICAgICAgLy8yIOaVsOmHj+W/hemhu+imgeWSjG1lc2jkuK3kuIDoh7RcclxuICAgICAgICAvLzMgbWVzaOS4reeahOaVsOe7hOeahGNvbXBvbmVudOW/hemhu+WbuuWumlxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggdGhpcy5fYXR0cmliU3RhdGUgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oIHByb2dyYW0sIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc05vcm1hbCggdGhpcy5fYXR0cmliU3RhdGUgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oIHByb2dyYW0sIEdMQXR0cmliU3RhdGUuTk9STUFMX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggdGhpcy5fYXR0cmliU3RhdGUgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oIHByb2dyYW0sIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzEoIHRoaXMuX2F0dHJpYlN0YXRlICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTkFNRSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc0NvbG9yKCB0aGlzLl9hdHRyaWJTdGF0ZSApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbiggcHJvZ3JhbSwgR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGFuZ2VudCggdGhpcy5fYXR0cmliU3RhdGUgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oIHByb2dyYW0sIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX05BTUUgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ZO+5o6l5ZCO55qE5Zue6LCD5Ye95pWw5a6e6ZmF5LiK5Zyo5pys57G75Lit5piv5aSa5L2Z55qEXHJcbiAgICAvLyDlm6DkuLrmiJHku6zlt7Lnu4/lm7rlrprkuoZhdHRyaWJ1ZeeahOe0ouW8leWPt+S7peWPimdldFVuaWZvcm1Mb2NhdGlvbuaWueazleiOt+WPluafkOS4qnVuaWZvcm3lj5jph49cclxuICAgIC8vIOi/memHjOWPquaYr+S4uuS6hui+k+WHuuW9k+WJjVByb2dyYW3nm7jlhbPnmoR1bmlmb3Jt5ZKMYXR0cmlidXRl5Y+Y6YeP55qE5L+h5oGvXHJcbiAgICBwcml2YXRlIHByb2dyb21BZnRlckxpbmsoZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0LHByb2dyYW06V2ViR0xQcm9ncmFtKTp2b2lke1xyXG4gICAgICAgIC8v6I635Y+W5b2T5YmNYWN0aXZl54q25oCB55qEYXR0cmlidXRl5ZKMdW5pZm9ybeeahOaVsOmHj1xyXG4gICAgICAgIC8v5b6I6YeN6KaB5LiA54K577yMYWN0aXZlX2F0dHJpYnV0ZXMvdW5pZm9ybXPlv4XpobvlnKhsaW5r5ZCO5omN6IO96I635b6XXHJcbiAgICAgICAgR0xIZWxwZXIuZ2V0UHJvZ3JhbUFjdGl2ZUF0dHJpYnMoZ2wscHJvZ3JhbSx0aGlzLmF0dHJpYk1hcCk7XHJcbiAgICAgICAgR0xIZWxwZXIuZ2V0UHJvZ3JhbUF0Y2l2ZVVuaWZvcm1zKGdsLHByb2dyYW0sdGhpcy51bmlmb3JtTWFwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHJpYk1hcCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudW5pZm9ybU1hcCkpO1xyXG4gICAgfVxyXG5cclxuICAgcHVibGljIGNvbnN0cnVjdG9yICggY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBhdHRyaWJTdGF0ZTogR0xBdHRyaWJCaXRzLCB2c1NoYWRlcjogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGZzU2hhZGVyOiBzdHJpbmcgfCBudWxsID0gbnVsbCApXHJcbiAgIHtcclxuICAgICAgIHRoaXMuZ2wgPSBjb250ZXh0O1xyXG4gICAgICAgdGhpcy5fYXR0cmliU3RhdGUgPSBhdHRyaWJTdGF0ZTsgLy/mnIDlpb3ku45zaGFkZXLkuK3mir3lj5ZcclxuICAgICAgIHRoaXMuYmluZENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgIHRoaXMudW5iaW5kQ2FsbGJhY2sgPSBudWxsO1xyXG5cclxuICAgICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyIHwgbnVsbCA9IEdMSGVscGVyLmNyZWF0ZVNoYWRlcih0aGlzLmdsLEVTaGFkZXJUeXBlLlZTX1NIQURFUik7XHJcbiAgICAgICBpZiAoIHNoYWRlciA9PT0gbnVsbCApXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkNyZWF0ZSBWZXJ0ZXggU2hhZGVyIE9iamVjdCBGYWlsISEhXCIgKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMudnNTaGFkZXIgPSBzaGFkZXI7XHJcblxyXG4gICAgICAgc2hhZGVyID0gbnVsbDtcclxuICAgICAgIHNoYWRlciA9IEdMSGVscGVyLmNyZWF0ZVNoYWRlcih0aGlzLmdsLEVTaGFkZXJUeXBlLkZTX1NIQURFUik7XHJcbiAgICAgICBpZiAoIHNoYWRlciA9PT0gbnVsbCApXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkNyZWF0ZSBGcmFnbWVudCBTaGFkZXIgT2JqZWN0IEZhaWwhISFcIiApO1xyXG4gICAgICAgfVxyXG4gICAgICAgdGhpcy5mc1NoYWRlciA9IHNoYWRlcjtcclxuXHJcbiAgICAgICBsZXQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtIHwgbnVsbCA9IEdMSGVscGVyLmNyZWF0ZVByb2dyYW0odGhpcy5nbCk7XHJcbiAgICAgICBpZiAoIHByb2dyYW0gPT09IG51bGwgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJDcmVhdGUgV2ViR0xQcm9ncmFtIE9iamVjdCBGYWlsISEhXCIgKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcblxyXG4gICAgICAgdGhpcy5hdHRyaWJNYXAgPSB7fTtcclxuICAgICAgIHRoaXMudW5pZm9ybU1hcCA9IHt9O1xyXG5cclxuICAgICAgIGlmICggdnNTaGFkZXIgIT09IG51bGwgJiYgZnNTaGFkZXIgIT09IG51bGwgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRoaXMubG9hZFNoYWRlcnMoIHZzU2hhZGVyLCBmc1NoYWRlciApO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgIH1cclxuXHJcbiAgICAvLyDlnKhWZXJ0ZXggU2hhZGVy5Lit5Yqo5oCB5re75Yqg5a6PXHJcbiAgICBwdWJsaWMgYWRkVlNTaGFkZXJNYWNybyAoIHN0cjogc3RyaW5nICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHN0ci5pbmRleE9mKCBcIiNkZWZpbmUgXCIgKSA9PT0gLTEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyID0gXCIjZGVmaW5lIFwiICsgc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92c1NoYWRlckRlZmluZVN0cmluZ3MucHVzaCggc3RyICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ZyoRnJhZ21lbnQgU2hhZGVy5Lit5Yqo5oCB5re75Yqg5a6PXHJcbiAgICBwdWJsaWMgYWRkRlNTaGFkZXJNYWNybyAoIHN0cjogc3RyaW5nICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHN0ci5pbmRleE9mKCBcIiNkZWZpbmUgXCIgKSA9PT0gLTEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyID0gXCIjZGVmaW5lIFwiICsgc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9mc1NoYWRlckRlZmluZVN0cmluZ3MucHVzaCggc3RyICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdnMgZnPpg73opoHmt7vliqDnmoTlro/vvIzkvovlpoLlnKhWUyAvIEZT5Lit5re75Yqg5aaC5LiL5a6P77yaXHJcbiAgICAvLyAjaWZkZWYgR0xfRVNcclxuICAgIC8vICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgLy8gI2VuZGlmXHJcbiAgICBwdWJsaWMgYWRkU2hhZGVyTWFjcm8gKCBzdHI6IHN0cmluZyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZGRWU1NoYWRlck1hY3JvKCBzdHIgKTtcclxuICAgICAgICB0aGlzLmFkZEZTU2hhZGVyTWFjcm8oIHN0ciApO1xyXG4gICAgfVxyXG5cclxuICAgcHVibGljIGxvYWRTaGFkZXJzICggdnM6IHN0cmluZywgZnM6IHN0cmluZyApOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGlmICggdGhpcy5fdnNTaGFkZXJEZWZpbmVTdHJpbmdzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIGxldCBqb2luOiBzdHJpbmcgPSB0aGlzLl92c1NoYWRlckRlZmluZVN0cmluZ3Muam9pbiggXCJcXG5cIiApO1xyXG4gICAgICAgICAgIHZzID0gam9pbiArIHZzO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmICggdGhpcy5fZnNTaGFkZXJEZWZpbmVTdHJpbmdzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIGxldCBqb2luOiBzdHJpbmcgPSB0aGlzLl9mc1NoYWRlckRlZmluZVN0cmluZ3Muam9pbiggXCJcXG5cIiApO1xyXG4gICAgICAgICAgIGZzID0gam9pbiArIGZzO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmKEdMSGVscGVyLmNvbXBpbGVTaGFkZXIodGhpcy5nbCx2cyx0aGlzLnZzU2hhZGVyKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiBXZWJHTOmhtueCuVNoYWRlcumTvuaOpeS4jeaIkOWKnyEgXCIpO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmKEdMSGVscGVyLmNvbXBpbGVTaGFkZXIodGhpcy5nbCxmcyx0aGlzLmZzU2hhZGVyKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIiBXZWJHTOWDj+e0oOeJh+autVNoYWRlcumTvuaOpeS4jeaIkOWKnyEgXCIpO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIGlmKEdMSGVscGVyLmxpbmtQcm9ncmFtKHRoaXMuZ2wsdGhpcy5wcm9ncmFtLHRoaXMudnNTaGFkZXIsdGhpcy5mc1NoYWRlcix0aGlzLnByb2dyb21CZWZvcmVMaW5rLmJpbmQodGhpcyksdGhpcy5wcm9ncm9tQWZ0ZXJMaW5rLmJpbmQodGhpcykpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiIFdlYkdMUHJvZ3JhbemTvuaOpeS4jeaIkOWKnyEgXCIpO1xyXG4gICAgICAgfVxyXG4gXHJcbiAgICAgICBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIHRoaXMuYXR0cmliTWFwICkgKTtcclxuICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKCB0aGlzLnByb2dyYW0gKTtcclxuICAgICAgICBpZiAoIHRoaXMuYmluZENhbGxiYWNrICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZENhbGxiYWNrKCB0aGlzICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmJpbmQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMudW5iaW5kQ2FsbGJhY2sgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51bmJpbmRDYWxsYmFjayggdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0oIG51bGwgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VW5pZm9ybUxvY2F0aW9uICggbmFtZTogc3RyaW5nICk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbiggdGhpcy5wcm9ncmFtLCBuYW1lICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF0dHJpYnV0ZUxvY2F0aW9uICggbmFtZTogc3RyaW5nICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKCB0aGlzLnByb2dyYW0sIG5hbWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QXR0cmlidXRlTG9jYXRpb24gKCBuYW1lOiBzdHJpbmcsIGxvYzogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsLmJpbmRBdHRyaWJMb2NhdGlvbiggdGhpcy5wcm9ncmFtLCBsb2MsIG5hbWUgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW50KG5hbWU6c3RyaW5nICwgaTpudW1iZXIpOmJvb2xlYW57XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSggbG9jLCBpICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEZsb2F0ICggbmFtZTogc3RyaW5nLCBmOiBudW1iZXIgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMWYoIGxvYywgZiApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZWN0b3IyICggbmFtZTogc3RyaW5nLCB2MjogVmVjdG9yMiApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdsLnVuaWZvcm0yZnYoIGxvYywgdjIudmFsdWVzICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTJmdiggbG9jLCBbdjIueCwgdjIueV0gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVjdG9yMyAoIG5hbWU6IHN0cmluZywgdjM6IFZlY3RvcjMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nbC51bmlmb3JtM2Z2KCBsb2MsIHYzLnZhbHVlcyApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0zZnYoIGxvYywgW3YzLngsIHYzLnksIHYzLnpdICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZlY3RvcjQgKCBuYW1lOiBzdHJpbmcsIHY0OiBWZWN0b3I0ICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2wudW5pZm9ybTRmdiggbG9jLCB2NC52YWx1ZXMgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGZ2KCBsb2MsIFt2NC54LCB2NC55LCB2NC56LCB2NC53XSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRRdWF0ICggbmFtZTogc3RyaW5nLCBxOiBxdWF0ICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTRmdiggbG9jLCBxLnZhbHVlcyApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYXRyaXgzICggbmFtZTogc3RyaW5nLCBtYXQ6IE1hdHJpeDQgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4M2Z2KCBsb2MsIGZhbHNlLCBtYXQudmFsdWVzICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hdHJpeDQgKCBuYW1lOiBzdHJpbmcsIG1hdDogTWF0cml4NCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYoIGxvYywgZmFsc2UsIG1hdC52YWx1ZXMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2FtcGxlciAoIG5hbWU6IHN0cmluZywgc2FtcGxlcjogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKCBsb2MsIHNhbXBsZXIgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1vZGVWaWV3TWF0cml4ICggbWF0OiBNYXRyaXg0ICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRNYXRyaXg0KCBHTFByb2dyYW0uTVZNYXRyaXgsIG1hdCApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkU2FtcGxlciAoIHVuaXQ6IG51bWJlciA9IDAgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldFNhbXBsZXIoIEdMUHJvZ3JhbS5TYW1wbGVyLCB1bml0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGVmYXVsdFRleHR1cmVQcm9ncmFtICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBHTFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvOiBHTFByb2dyYW0gPSBuZXcgR0xQcm9ncmFtKCBnbCwgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQgfCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0JJVCxcclxuICAgICAgICAgICAgR0xTaGFkZXJTb3VyY2UudGV4dHVyZVNoYWRlci52cywgR0xTaGFkZXJTb3VyY2UudGV4dHVyZVNoYWRlci5mcyApO1xyXG4gICAgICAgIHJldHVybiBwcm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVEZWZhdWx0Q29sb3JQcm9ncmFtICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBHTFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvOiBHTFByb2dyYW0gPSBuZXcgR0xQcm9ncmFtKCBnbCwgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQgfCBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVCxcclxuICAgICAgICAgICAgR0xTaGFkZXJTb3VyY2UuY29sb3JTaGFkZXIudnMsIEdMU2hhZGVyU291cmNlLmNvbG9yU2hhZGVyLmZzICk7XHJcbiAgICAgICAgcmV0dXJuIHBybztcclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZURlZmF1bHRUZXh0dXJlUHJvZ3JhbSAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogR0xQcm9ncmFtXHJcbiAgIHtcclxuICAgICAgIGxldCBwcm86IEdMUHJvZ3JhbSA9IG5ldyBHTFByb2dyYW0oIGdsLCBHTEF0dHJpYlN0YXRlLm1ha2VWZXJ0ZXhBdHRyaWJzKHRydWUsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UpLFxyXG4gICAgICAgICAgIEdMU2hhZGVyU291cmNlLnRleHR1cmVTaGFkZXIudnMsIEdMU2hhZGVyU291cmNlLnRleHR1cmVTaGFkZXIuZnMgKTtcclxuICAgICAgIHJldHVybiBwcm87XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGVmYXVsdENvbG9yUHJvZ3JhbSAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogR0xQcm9ncmFtXHJcbiAgIHtcclxuICAgICAgIGxldCBwcm86IEdMUHJvZ3JhbSA9IG5ldyBHTFByb2dyYW0oIGdsLCBHTEF0dHJpYlN0YXRlLm1ha2VWZXJ0ZXhBdHRyaWJzKGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLHRydWUpLFxyXG4gICAgICAgICAgIEdMU2hhZGVyU291cmNlLmNvbG9yU2hhZGVyLnZzLCBHTFNoYWRlclNvdXJjZS5jb2xvclNoYWRlci5mcyApO1xyXG4gICAgICAgcmV0dXJuIHBybztcclxuICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBHTFByb2dyYW0gfSBmcm9tIFwiLi9XZWJHTFByb2dyYW1cIjtcclxuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gXCIuLi9jb21tb24vY29udGFpbmVyL0RpY3Rpb25hcnlcIjtcclxuXHJcbi8vIOWNleS+i+iuvuiuoeaooeW8j1xyXG5leHBvcnQgY2xhc3MgR0xQcm9ncmFtQ2FjaGVcclxue1xyXG4gICAgLy8g5Y+q5Yid5aeL5YyW5LiA5qyh77yM5L2/55So55qE5pivcHVibGljIHN0YXRpYyByZWFkb25seeWjsOaYjuaWueW8j1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogR0xQcm9ncmFtQ2FjaGUgPSBuZXcgR0xQcm9ncmFtQ2FjaGUoKTtcclxuXHJcbiAgICBwcml2YXRlIF9kaWN0OiBEaWN0aW9uYXJ5PEdMUHJvZ3JhbT47XHJcblxyXG4gICAgLy8g56eB5pyJ5p6E6YCg5Ye95pWwXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fZGljdCA9IG5ldyBEaWN0aW9uYXJ5PEdMUHJvZ3JhbT4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJjcmVhdGUgbmV3IEdMUHJvZ3JhbUNhY2hlISFcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgKCBrZXk6IHN0cmluZywgdmFsdWU6IEdMUHJvZ3JhbSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fZGljdC5pbnNlcnQoIGtleSwgdmFsdWUgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlj6/og73ov5Tlm551bmRlZmluZWTnsbvlnotcclxuICAgIHB1YmxpYyBnZXRNYXliZSAoIGtleTogc3RyaW5nICk6IEdMUHJvZ3JhbSB8IHVuZGVmaW5lZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXQ6IEdMUHJvZ3JhbSB8IHVuZGVmaW5lZCA9IHRoaXMuX2RpY3QuZmluZCgga2V5ICk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpoLmnpzov5Tlm551bmRlZmluZWTvvIznm7TmjqXmipvplJlcclxuICAgIHB1YmxpYyBnZXRNdXN0ICgga2V5OiBzdHJpbmcgKTogR0xQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldDogR0xQcm9ncmFtIHwgdW5kZWZpbmVkID0gdGhpcy5fZGljdC5maW5kKCBrZXkgKTtcclxuICAgICAgICBpZiAoIHJldCA9PT0gdW5kZWZpbmVkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigga2V5ICsgXCLlr7nlupTnmoRQcm9ncmFt5LiN5a2Y5ZyoISEhXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlICgga2V5OiBzdHJpbmcgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWN0LnJlbW92ZSgga2V5ICk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgR0xTaGFkZXJTb3VyY2UgPSB7XHJcbiAgICBjb2xvclNoYWRlcjoge1xyXG4gICAgICAgIHZzOiBgXHJcbiAgICAgICAgI2lmZGVmIEdMX0VTXHJcbiAgICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAjZW5kaWZcclxuXHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzMgYVBvc2l0aW9uO1xyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFDb2xvcjtcclxuICAgIFxyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1TVZQTWF0cml4O1xyXG4gICAgXHJcbiAgICAgICAgdmFyeWluZyB2ZWM0IHZDb2xvcjtcclxuICAgIFxyXG4gICAgICAgIHZvaWQgbWFpbih2b2lkKXtcclxuICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSB1TVZQTWF0cml4ICogdmVjNChhUG9zaXRpb24sMS4wKTtcclxuICAgICAgICAgICAgdkNvbG9yID0gYUNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIGZzOiBgXHJcbiAgICAgICAgI2lmZGVmIEdMX0VTXHJcbiAgICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAjZW5kaWZcclxuXHJcbiAgICAgICAgdmFyeWluZyAgdmVjNCB2Q29sb3I7XHJcbiAgICAgICAgdm9pZCBtYWluKHZvaWQpe1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2Q29sb3I7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgYFxyXG4gICAgfSxcclxuICAgIHRleHR1cmVTaGFkZXI6IHtcclxuICAgICAgICB2czpcclxuICAgIGBcclxuICAgICAgICAjaWZkZWYgR0xfRVNcclxuICAgICAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgICAgICNlbmRpZlxyXG5cclxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBhUG9zaXRpb247XHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgYVRleENvb3JkO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1TVZQTWF0cml4O1xyXG4gICAgICAgIHZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1xyXG4gICAgICAgIHZvaWQgbWFpbih2b2lkKSB7XHJcbiAgICAgICAgICAgZ2xfUG9zaXRpb24gPSB1TVZQTWF0cml4ICogdmVjNChhUG9zaXRpb24sMS4wKTs7XHJcbiAgICAgICAgICAgdlRleHR1cmVDb29yZCA9IGFUZXhDb29yZDtcclxuICAgICAgICB9XHJcbiAgICBgLFxyXG4gICAgICAgIGZzOiAgICBgXHJcbiAgICAgICNpZmRlZiBHTF9FU1xyXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICNlbmRpZlxyXG5cclxuICAgICAgdmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XHJcbiAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xyXG4gICAgICB2b2lkIG1haW4odm9pZCkge1xyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZCk7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHTEhlbHBlciB9IGZyb20gXCIuL1dlYkdMSGVscGVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBFR0xUZXhXcmFwVHlwZVxyXG57XHJcbiAgICBHTF9SRVBFQVQsIC8v6K6+572u5Li6Z2zlr7nlupTnmoTluLjph49cclxuICAgIEdMX01JUlJPUkVEX1JFUEVBVCxcclxuICAgIEdMX0NMQU1QX1RPX0VER0VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMVGV4dHVyZVxyXG57XHJcbiAgICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgIHB1YmxpYyBpc01pcG1hcDogYm9vbGVhbjsgIC8vIOaYr+WQpuS9v+eUqG1pcG1hcOeUn+aIkOe6ueeQhuWvueixoVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7ICAvLyDlvZPliY3nurnnkIblr7nosaHnmoTlg4/ntKDlrr3luqZcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjsgLy8g5b2T5YmN57q555CG5a+56LGh55qE5YOP57Sg6auY5bqmXHJcbiAgICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7IC8vIOWcqOWGheWtmOaIluaYvuWtmOS4reWDj+e0oOeahOWtmOWCqOagvOW8j++8jOm7mOiupOS4umdsLlJHQkFcclxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7IC8vIOWDj+e0oOWIhumHj+eahOaVsOaNruexu+Wei++8jOm7mOiupOS4umdsLlVOU0lHTkVEX0JZVEVcclxuICAgIHB1YmxpYyB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7IC8vIFdlYkdMVGV4dHVyZeWvueixoVxyXG4gICAgcHVibGljIHRhcmdldDogbnVtYmVyOyAvLyDkuLpnbC5URVhUVVJFXzJEXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nOyAvLyDnurnnkIbnmoTlkI3np7BcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBuYW1lOiBzdHJpbmcgPSAnJyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIHRoaXMuaXNNaXBtYXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xyXG4gICAgICAgIGxldCB0ZXg6IFdlYkdMVGV4dHVyZSB8IG51bGwgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgaWYgKCB0ZXggPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIldlYkdMVGV4dHVyZeWIm+W7uuS4jeaIkOWKnyFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXg7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBnbC5URVhUVVJFXzJEO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy53cmFwKCk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuIvpnaLkuInkuKrpnZnmgIHovoXliqnmlrnms5XnlKjkuo7nlJ/miJDnurnnkIbnmoRtaXBtYXDkvb/nlKhcclxuXHJcbiAgICAvLyAx44CB6Z2Z5oCB6L6F5Yqp5pWw5a2m5pa55rOV77yM5Yik5pat5Y+C5pWweO+8iOW/hemhu+aYrzTvvInmmK/lkKbmmK8y55qEbuasoeaWue+8jOWNs3jmmK/kuI3mmK8x44CBMuOAgTTjgIE444CBMTbjgIEzMuOAgTY044CBLi4uLi5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNQb3dlck9mVHdvICggeDogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCB4ICYgKCB4IC0gMSApICkgPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAy44CB6Z2Z5oCB6L6F5Yqp5pWw5a2m5pa55rOV77yM57uZ5a6a5pW05pWw5Y+C5pWweO+8jOWPluS4i+S4gOS4qjLnmoRu5qyh5pa55pWwXHJcbiAgICAvLyDlpoLmnpx45Li6M++8jOWImei/lOWbnjRcclxuICAgIC8vIOWmguaenHjkuLo077yM5YiZ6L+U5ZueNFxyXG4gICAgLy8g5aaC5p6ceOS4ujXvvIzliJnov5Tlm544XHJcbiAgICAvLyDkvp3mrKHnsbvmjqhcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV4dFBvd2VyT2ZUd28gKCB4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB4IDw9IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIuWPguaVsOW/hemhu+imgeWkp+S6jjAhXCIgKVxyXG4gICAgICAgIH1cclxuICAgICAgICAtLXg7XHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAxOyBpIDwgMzI7IGkgPDw9IDEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgeCA9IHggfCB4ID4+IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB4ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAz44CB5bCG6Z2eMueahG7mrKHmlrnnmoRzcmNJbWFnZei9rOaNouaIkDLnmoRu5qyh5pa555qEQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJE5a+56LGhXHJcbiAgICAvLyDnhLblkI7lkI7nu63nlKjmnaXnlJ/miJBtaXBtYXDnurnnkIZcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUG93ZXJPZlR3b0NhbnZhcyAoIHNyY0ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTENhbnZhc0VsZW1lbnQgKTogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiY2FudmFzXCIgKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBHTFRleHR1cmUuZ2V0TmV4dFBvd2VyT2ZUd28oIHNyY0ltYWdlLndpZHRoICk7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IEdMVGV4dHVyZS5nZXROZXh0UG93ZXJPZlR3byggc3JjSW1hZ2UuaGVpZ2h0ICk7XHJcbiAgICAgICAgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KCBcIjJkXCIgKTtcclxuICAgICAgICBpZiAoIGN0eCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi5pyq6IO95oiQ5Yqf5Yib5bu6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJE5a+56LGhXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSggc3JjSW1hZ2UsIDAsIDAsIHNyY0ltYWdlLndpZHRoLCBzcmNJbWFnZS5oZWlnaHQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL6Z2i55qE6Z2Z5oCB5pa55rOV5ZKM5oiQ5ZGY5Y+Y6YeP55So5p2l5Yib5bu66buY6K6k55qEMueahG7mlrnnmoTnurnnkIblr7nosaFcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGVmYXVsdFRleHR1cmUgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IEdMVGV4dHVyZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdGVwOiBudW1iZXIgPSA0O1xyXG4gICAgICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSAzMiAqIHN0ZXA7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDMyICogc3RlcDtcclxuICAgICAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IGNhbnZhcy5nZXRDb250ZXh0KCBcIjJkXCIgKTtcclxuICAgICAgICBpZiAoIGNvbnRleHQgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoIFwi56a75bGPQ2FudmFz6I635Y+W5riy5p+T5LiK5LiL5paH5aSx6LSl77yBXCIgKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIuemu+Wxj0NhbnZhc+iOt+WPlua4suafk+S4iuS4i+aWh+Wksei0pe+8gVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IHN0ZXA7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgajogbnVtYmVyID0gMDsgaiA8IHN0ZXA7IGorKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZHg6IG51bWJlciA9IHN0ZXAgKiBpICsgajtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBHTFRleHR1cmUuQ29sb3JzWyBpZHggXTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoIGkgKiAzMiwgaiAqIDMyLCAzMiwgMzIgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZXg6IEdMVGV4dHVyZSA9IG5ldyBHTFRleHR1cmUoIGdsICk7XHJcbiAgICAgICAgdGV4LndyYXAoKTtcclxuICAgICAgICB0ZXgudXBsb2FkKCBjYW52YXMgKTtcclxuICAgICAgICByZXR1cm4gdGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNzc+agh+WHhuiJsuWtl+espuS4slxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvcnM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdhcXVhJywgICAgLy/mtYXnu7/oibJcclxuICAgICAgICAnYmxhY2snLCAgIC8v6buR6ImyXHJcbiAgICAgICAgJ2JsdWUnLCAgICAvL+iTneiJsiBcclxuICAgICAgICAnZnVjaHNpYScsIC8v57Sr57qi6ImyXHJcbiAgICAgICAgJ2dyYXknLCAgICAgLy/ngbDoibJcclxuICAgICAgICAnZ3JlZW4nLCAgIC8v57u/6ImyXHJcbiAgICAgICAgJ2xpbWUnLCAgICAvL+e7v+m7hOiJslxyXG4gICAgICAgICdtYXJvb24nLCAgLy/opJDnuqLoibJcclxuICAgICAgICAnbmF2eScsICAgIC8v5rW35Yab6JOdXHJcbiAgICAgICAgJ29saXZlJywgICAvL+aphOamhOiJslxyXG4gICAgICAgICdvcmFuZ2UnLCAgLy/mqZnoibJcclxuICAgICAgICAncHVycGxlJywgIC8v57Sr6ImyXHJcbiAgICAgICAgJ3JlZCcsICAgICAgLy/nuqLoibJcclxuICAgICAgICAnc2lsdmVyJywgIC8v6ZO254Gw6ImyXHJcbiAgICAgICAgJ3RlYWwnLCAgICAvL+iTnee7v+iJslxyXG4gICAgICAgICd5ZWxsb3cnLCAgIC8v6buE6ImyXHJcbiAgICAgICAgJ3doaXRlJyAgIC8v55m96ImyXHJcbiAgICBdO1xyXG5cclxuICAgIHB1YmxpYyBiaW5kICggdW5pdDogbnVtYmVyID0gMCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLnRleHR1cmUgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKCB0aGlzLmdsLlRFWFRVUkUwICsgdW5pdCApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKCB0aGlzLnRhcmdldCwgdGhpcy50ZXh0dXJlICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmJpbmQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMudGV4dHVyZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKCB0aGlzLnRhcmdldCwgbnVsbCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1RFWFRVUkVfTUlOX0ZJTFRFUjogTkVBUkVTVF9NSVBNQVBfTElORUFSKOm7mOiupClcclxuICAgIC8vVEVYVFVSRV9NQUdfRklMVEVSOiBMSU5FQVIo6buY6K6kKVxyXG4gICAgcHVibGljIGZpbHRlciAoIG1pbkxpbmVhcjogYm9vbGVhbiA9IHRydWUsIG1hZ0xpbmVhcjogYm9vbGVhbiA9IHRydWUgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIOWcqOiuvue9rmZpbHRlcuaXtuWFiOimgee7keWumuW9k+WJjeeahOe6ueeQhuebruagh1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy50YXJnZXQsdGhpcy50ZXh0dXJlKTsgXHJcbiAgICAgICAgaWYgKCB0aGlzLmlzTWlwbWFwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBtaW5MaW5lYXIgPyB0aGlzLmdsLkxJTkVBUl9NSVBNQVBfTElORUFSIDogdGhpcy5nbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNUICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgbWluTGluZWFyID8gdGhpcy5nbC5MSU5FQVIgOiB0aGlzLmdsLk5FQVJFU1QgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBtYWdMaW5lYXIgPyB0aGlzLmdsLkxJTkVBUiA6IHRoaXMuZ2wuTkVBUkVTVCApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cmFwICggbW9kZTogRUdMVGV4V3JhcFR5cGUgPSBFR0xUZXhXcmFwVHlwZS5HTF9SRVBFQVQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy50YXJnZXQsdGhpcy50ZXh0dXJlKTtcclxuICAgICAgICBpZiAoIG1vZGUgPT09IEVHTFRleFdyYXBUeXBlLkdMX0NMQU1QX1RPX0VER0UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIG1vZGUgPT09IEVHTFRleFdyYXBUeXBlLkdMX1JFUEVBVCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCB0aGlzLmdsLlJFUEVBVCApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLlJFUEVBVCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5NSVJST1JFRF9SRVBFQVQgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdGhpcy5nbC5NSVJST1JFRF9SRVBFQVQgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3RvcnkgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUoIHRoaXMudGV4dHVyZSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWQgKCBzb3VyY2U6IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudCwgdW5pdDogbnVtYmVyID0gMCwgbWlwbWFwOiBib29sZWFuID0gZmFsc2UgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmluZCggdW5pdCApOyAvLyDlhYjnu5HlrprlvZPliY3opoHmk43kvZznmoRXZWJHTFRleHR1cmXlr7nosaHvvIzpu5jorqTkuLowXHJcbiAgICAgICAgLy/lkKbliJnotLTlm77kvJrlgJLov4fmnaVcclxuICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKCB0aGlzLmdsLlVOUEFDS19GTElQX1lfV0VCR0wsIDEgKTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggbWlwbWFwID09PSB0cnVlICkgLy8g5L2/55SobWlwbWFw55Sf5oiQ57q555CGXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXNXaWR0aFBvd2VyT2ZUd286IGJvb2xlYW4gPSBHTFRleHR1cmUuaXNQb3dlck9mVHdvKCB0aGlzLndpZHRoICk7XHJcbiAgICAgICAgICAgIGxldCBpc0hlaWdodFBvd2VyT2ZUd286IGJvb2xlYW4gPSBHTFRleHR1cmUuaXNQb3dlck9mVHdvKCB0aGlzLmhlaWdodCApO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmupDlm77lg4/nmoTlrr3luqblkozpq5jluqbpg73mmK8y55qEbuasoeaWueagvOW8j+eahO+8jOWImeebtOaOpei9veWFpeWDj+e0oOaVsOaNrueEtuWQjuiwg+eUqGdlbmVyYXRlTWlwbWFw5pa55rOVXHJcbiAgICAgICAgICAgIGlmICggaXNXaWR0aFBvd2VyT2ZUd28gPT09IHRydWUgJiYgaXNIZWlnaHRQb3dlck9mVHdvID09PSB0cnVlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKCB0aGlzLnRhcmdldCwgMCwgdGhpcy5mb3JtYXQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCggdGhpcy50YXJnZXQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIC8vIOWQpuWImeivtOaYjuiHs+WwkeacieS4gOS4quS4jeaYrzLnmoRu5qyh5pa555qE77yM6ZyA6KaB54m55Yir5aSE55CGXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gR0xUZXh0dXJlLmNyZWF0ZVBvd2VyT2ZUd29DYW52YXMoIHNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKCB0aGlzLnRhcmdldCwgMCwgdGhpcy5mb3JtYXQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGNhbnZhcyApO1xyXG4gICAgICAgICAgICAgICAgR0xIZWxwZXIuY2hlY2tHTEVycm9yKCB0aGlzLmdsICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKCB0aGlzLnRhcmdldCApO1xyXG4gICAgICAgICAgICAgICAgR0xIZWxwZXIuY2hlY2tHTEVycm9yKCB0aGlzLmdsICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNNaXBtYXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzTWlwbWFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCggdGhpcy50YXJnZXQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBzb3VyY2UgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwi5b2T5YmN57q555CG5bC65a+45Li6OiBcIiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKTtcclxuICAgICAgICB0aGlzLnVuYmluZCgpOyAvLy8vIOino+e7keW9k+WJjeimgeaTjeS9nOeahFdlYkdMVGV4dHVyZeWvueixoVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR0xUZXh0dXJlIH0gZnJvbSBcIi4vV2ViR0xUZXh0dXJlXCI7XHJcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnRhaW5lci9EaWN0aW9uYXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR0xUZXh0dXJlQ2FjaGV7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGluc3RhbmNlOiBHTFRleHR1cmVDYWNoZSA9IG5ldyBHTFRleHR1cmVDYWNoZSgpO1xyXG5cclxuICAgIHB1YmxpYyBzZXQoa2V5OnN0cmluZyx2YWx1ZTpHTFRleHR1cmUpe1xyXG4gICAgICAgIHRoaXMuX2RpY3QuaW5zZXJ0KGtleSx2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1heWJlKGtleTpzdHJpbmcpOkdMVGV4dHVyZXx1bmRlZmluZWR7XHJcbiAgICAgICAgbGV0IHJldDpHTFRleHR1cmV8dW5kZWZpbmVkID0gdGhpcy5fZGljdC5maW5kKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TXVzdChrZXk6c3RyaW5nKTpHTFRleHR1cmUge1xyXG4gICAgICAgIGxldCByZXQ6R0xUZXh0dXJlfHVuZGVmaW5lZCA9IHRoaXMuX2RpY3QuZmluZChrZXkpO1xyXG4gICAgICAgIGlmKHJldCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleStcIuWvueW6lOeahFByb2dyYW3kuI3lrZjlnKghISFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShrZXk6c3RyaW5nKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWN0LnJlbW92ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RpY3Q6RGljdGlvbmFyeTxHTFRleHR1cmU+O1xyXG4gICAgLy8g56eB5pyJ5p6E6YCg5Ye95pWwXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fZGljdCA9IG5ldyBEaWN0aW9uYXJ5PEdMVGV4dHVyZT4oKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9