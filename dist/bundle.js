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
        if (values) {
            this.set(values);
        }
        else {
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
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get z() {
        return this._z;
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
        let x = vector._x, y = vector._y, z = vector._z;
        let x2 = vector2._x, y2 = vector2._y, z2 = vector2._z;
        return (x * x2 + y * y2 + z * z2);
    }
    static cross(vector, vector2, dest = null) {
        if (!dest)
            dest = new Vector3();
        let x = vector._x, y = vector._y, z = vector._z;
        let x2 = vector2._x, y2 = vector2._y, z2 = vector2._z;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9Sb3RhdGluZ0N1YmVBcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0V2ZW50SW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb250YWluZXIvRGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnRhaW5lci9UeXBlZEFycmF5TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0NhbWVyYUFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvRHJhd0hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0ZydXN0dW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9QcmltaXRpdmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL01hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL21hdHJpeDQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvdmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC92ZWN0b3IzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL3ZlY3RvcjQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0h0dHBSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEF0dHJpYlN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xNYXRyaXhTdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xNZXNoLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFByb2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL1dlYkdMUHJvZ3JhbUNhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFNoYWRlclNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0xUZXh0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTFRleHR1cmVDYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGc0Q7QUFDQTtBQUVXO0FBQ25CO0FBQ0E7QUFDUztBQUNTO0FBQ0E7QUFDYjtBQUNZO0FBQ0o7QUFHcEQsTUFBTSx1QkFBd0IsU0FBUSw0RUFBaUI7SUEyQjFELFlBQXFCLE1BQXlCO1FBRTFD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SyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV4QiwwQkFBMEI7UUFDMUIscURBQU8sQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQVcsQ0FBQyxxREFBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBVyxDQUFDLHFEQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVwQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFF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RUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRyxXQUFXO1FBQzFGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUksV0FBVztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsV0FBVztRQUMxRixPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQyxNQUFNLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLFdBQVc7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsV0FBVztRQUMxRixPQUFPLENBQUMsUUFBUSxDQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQyxNQUFNLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUcsV0FBVztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFHLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFJLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUcsV0FBVztRQUMzRixPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ25CLEtBQUs7UUFDTCxPQUFPLENBQUMsS0FBSyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFJLFdBQVc7UUFDM0YsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUMsQ0FBSyxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBSSxXQUFXO1FBQzNGLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFHLFdBQVc7UUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNuQixLQUFLO1FBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUUsQ0FBQyxDQUFFLFdBQVc7UUFDMUYsT0FBTyxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFFLENBQUMsTUFBTSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENB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Q0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUM5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBRTlGLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFHLEdBQUc7WUFDOUYsT0FBTyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUU5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBQzlGLE9BQU8sQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFHLEdBQUc7WUFFOUYsT0FBTyxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUcsR0FBRztZQUM5RixPQUFPLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBRyxHQUFHO1lBRTlGLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7U0FDdEI7UUFDRCxPQUFPLENBQUMsRUFBRSxD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R0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hDLFdBQVc7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixnQ0FBZ0M7UUFDaEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCw2QkFBNkI7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QscUJBQXFCO1FBQ3JCLDJEQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RiwyREFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUYsMkRBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLDJEQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RiwyREFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsMkRBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLFdBQVc7UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDOUMsMkRBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUVNLGVBQWUsQ0FBQyxNQUFlLEVBQUUsTUFBYztRQUNsRCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xELElBQUksMkRBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRTtnQkFDckUsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFhLEVBQUUsSUFBYTtRQUNqRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixxREFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELHFEQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQscURBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLDJEQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLHFEQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUM5RCxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLENBQVUsRUFBRSxDQUFVLEVBQUUsQ0FBVTtRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLDJEQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDdEQsU0FBUzthQUNaO1lBQ0QsSUFBSSwyREFBVSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ3RELFNBQVM7YUFDWjtZQUNELElBQUksMkRBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUN0RCxTQUFTO2FBQ1o7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBVyxNQUFNO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FLSjs7Ozs7Ozs7Ozs7OztBQzFJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDQTtBQUU4QjtBQUN2QjtBQUNEO0FBRXpDLE1BQU0sWUFBWTtJQUF6QjtRQUVJLFdBQVc7UUFDSixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLFFBQUcsR0FBYyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWMsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQStGbEMsQ0FBQztJQTdGVSxhQUFhLENBQUcsRUFBeUIsRUFBRSxjQUF1QixLQUFLLEVBQUUsU0FBa0IsSUFBSTtRQUVsRyxJQUFJLElBQUksR0FBaUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLElBQUssV0FBVyxLQUFLLEtBQUssRUFDMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxxRUFBYSxDQUFDLFVBQVUsQ0FBQztTQUNyQztRQUNELElBQUssTUFBTSxLQUFLLEtBQUssRUFDckI7WUFDSSxJQUFJLElBQUksQ0FBQyxxRUFBYSxDQUFDLFlBQVksQ0FBQztTQUN2QztRQUVELElBQUksTUFBTSxHQUFXLHFFQUFhLENBQUMsbUJBQW1CLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQVcsTUFBTSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztRQUMzRCxJQUFJLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDakYsSUFBSSxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUUsV0FBVyxDQUFFLENBQUM7UUFDN0MsS0FBTSxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN2RDtZQUNJLEtBQUs7WUFDTCxJQUFJLENBQUMsR0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUUsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLENBQUUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFFLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRSxDQUFFLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCw4QkFBOEI7WUFDOUIsSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxVQUFVLEVBQ3BDO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxJQUFJO1lBQ0osSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxZQUFZLEVBQ3RDO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJO1lBQ0osSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxTQUFTLEVBQ25DO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJO1lBQ0osSUFBSyxJQUFJLEdBQUcscUVBQWEsQ0FBQyxXQUFXLEVBQ3JDO2dCQUNJLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUUsQ0FBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBRSxDQUFDLEdBQUcsQ0FB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U0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDNUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFFLENBQUMsQ0FBRSxJQUFJO1FBQzVGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxJQUFJLHFEQUFPLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUkscURBQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxxREFBTyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO1FBRXJDLE9BQU87UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBSztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFFTSxNQUFNLFNBQVM7SUFPbEIsWUFBcUIsS0FBYSxFQUFFLEVBQUUsS0FBYSxFQUFFLEVB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QUMsQ0FBQyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDL0csSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLGdEQUFPLENBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSTtRQUUvRyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksZ0RBQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUMsQ0FBRSxJQUFJO1FBQy9HLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxnREFBTyxDQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFFL0csSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLGdEQUFPLENBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUUsQ0FBRSxDQUFDLENBQUUsSUFBSTtRQUMvRyxJQUFJLENBQUMsSUFBSSxDQUFFLElBQUksZ0RBQU8sQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdB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QUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUk7SUFDZixDQUFDO0lBR0QsdURBQXVEO0lBRWhELFdBQVc7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FB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LEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUUzQixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNuRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ3BHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ25HLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFFcEcsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRU0sT0FBTztRQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDckcsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhDLElBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUMsR0FBRyxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNoSCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRSxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUMvRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDO1FBQ2hILElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNqSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDO1FBQ2pILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDbEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUNqSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUM7UUFDbEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFDLE1BQU0sQ0FBQztRQUVqSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sVUFBVSxDQUFHLEdBQVk7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUMxRixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDMUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQzVGLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRW5HLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDN0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVsQyxJQUFJLEdBQUcsR0FBRyxDQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFFLENBQUM7UUFFNUcsSUFBSyxDQUFDLEdBQUc7WUFDTCxPQUFPLEtBQUssQ0FBQztRQUVqQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVoQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDdEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxRQUFRLENBQUMsTUFBZTtRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUUzQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1FBRS9ELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTSxNQUFNLENBQUMsT0FBTyxDQUFFLEVBQVcsRUFBRSxFQUFXLEVBQUUsTUFBc0I7UUFDbkUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ3RFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUN4RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUUvRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQ3hFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRS9FLElBQUssTUFBTSxFQUNYO1lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBRTtnQkFDUixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBRTdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRzthQUNoRCxDQUFF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S0FBSyxDQUFHLE1BQWU7UUFFMUIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFHLEtBQWEsRUFBRSxJQUFhO1FBRXhDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFaEQsSUFBSyxDQUFDLE1BQU07WUFDUixPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLE1BQU0sS0FBSyxDQUFDLEVBQ2pCO1lBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDcEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNaLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDWixDQUFDLElBQUksTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDOUYsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcs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QUFLLEVBQUUsS0FBSyxDQUFFLENBQUM7UUFDckMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFXLENBQUMscURBQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBRTNDLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEIsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FB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QyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO1lBRWxGLFVBQVU7WUFDVixJQUFLLElBQUksQ0FBQyxZQUFZLEVBQ3RCO2dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLCtEQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ3RELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLCtEQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUUsQ0FBQzthQUNyRjtZQUVELFNBQVM7WUFDVCxJQUFLLElBQUksQ0FBQyxVQUFVLEVBQ3BCO2dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLCtEQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7Z0JBQ3BELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLCtEQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUUsQ0FBQzthQUNyRjtZQUVELFFBQVE7WUFDUixJQUFLLElBQUksQ0FBQyxTQUFTLEVBQ25CO2dCQUNJLE1BQU0sR0FB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LGdCQUFnQixFQUM3QztZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUUsQ0FBQztZQUNwRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFFLENBQUM7U0FDdkY7YUFBTSxJQUFLLElBQUksS0FBSyxjQUFjLENBQUMsU0FBUyxFQUM3QztZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUM3RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDaEY7YUFDRDtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUUsQ0FBQztZQUN0RixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFFLENBQUM7U0FDekY7SUFDTCxDQUFDO0lBRU0sT0FBTztRQUVWLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sTUFB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QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDcElOO0FBQUE7QUFBQTtBQUE0RDtBQUVyRCxNQUFNLGNBQWM7SUF5QnZCLFNBQVM7SUFDVDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1RUFBVSxFQUFhLENBQUM7SUFDN0MsQ0FBQztJQXpCTSxHQUFHLENBQUMsR0FBVSxFQUFDLEtBQWU7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxRQUFRLENBQUMsR0FBVTtRQUN0QixJQUFJLEdBQUcsR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVU7UUFDckIsSUFBSSxHQUFHLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUcsR0FBRyxLQUFLLFNBQVMsRUFBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOztBQXJCc0IsdUJBQVEsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBHTFByb2dyYW0gfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMUHJvZ3JhbVwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBHTFN0YXRpY01lc2ggfSBmcm9tIFwiLi4vc3JjL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5pbXBvcnQgeyBDYW1lcmFBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvbGliL0NhbWVyYUFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vc3JjL21hdGgvdmVjdG9yM1wiO1xyXG5pbXBvcnQgeyBNYXRyaXg0IH0gZnJvbSBcIi4uL3NyYy9tYXRoL21hdHJpeDRcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiLi4vc3JjL3V0aWxzL0h0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZUNhY2hlIH0gZnJvbSBcIi4uL3NyYy93ZWJnbC9XZWJHTFRleHR1cmVDYWNoZVwiO1xyXG5pbXBvcnQgeyBHTFByb2dyYW1DYWNoZSB9IGZyb20gXCIuLi9zcmMvd2ViZ2wvV2ViR0xQcm9ncmFtQ2FjaGVcIjtcclxuaW1wb3J0IHsgRHJhd0hlbHBlciB9IGZyb20gXCIuLi9zcmMvbGliL0RyYXdIZWxwZXJcIjtcclxuaW1wb3J0IHsgRUF4aXNUeXBlLCBNYXRoSGVscGVyIH0gZnJvbSBcIi4uL3NyYy9tYXRoL01hdGhIZWxwZXJcIjtcclxuaW1wb3J0IHsgQ3ViZSwgR2VvbWV0cnlEYXRhIH0gZnJvbSBcIi4uL3NyYy9saWIvUHJpbWl0aXZlc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNLZXlCb2FyZEV2ZW50IH0gZnJvbSBcIi4uL3NyYy9jb21tb24vRXZlbnRJbnRlcmFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uIGV4dGVuZHMgQ2FtZXJhQXBwbGljYXRpb25cclxue1xyXG4gICAgLy8gR1BV5Y+v57yW56iL566h57q/5a+56LGh77yM5ZCO6Z2i56ug6IqC6K+m6KejXHJcbiAgICBjb2xvclByb2dyYW06IEdMUHJvZ3JhbTsgICAvLyDkvb/nlKjnurnnkIZHUFUgUHJvZ3JhbeWvueixoVxyXG4gICAgdGV4dHVyZVByb2dyYW06IEdMUHJvZ3JhbTsgLy8g5L2/55So6aKc6ImyR1BVIFByb2dyYW3lr7nosaFcclxuXHJcbiAgICAvLyDnurnnkIblr7nosaFcclxuICAgIGN1cnJUZXhJZHg6IG51bWJlcjsgLy8g55Sx5LqOY3ViZeS8mui/m+ihjOWRqOiAjOWkjeWni+eahOaNoue6ueeQhuaTjeS9nO+8jOWboOatpOmcgOimgeiusOW9leW9k+WJjee6ueeQhueahOe0ouW8leWPt1xyXG4gICAgdGV4dHVyZXM6IEdMVGV4dHVyZVtdOyAvLyDpnIDopoHkuIDkuKrmlbDnu4Tkv53lrZjlpJrkuKrnurnnkIZcclxuXHJcbiAgICAvLyDnq4vmlrnkvZPmuLLmn5PmlbDmja7vvIzlkI7nu63nq6DoioLor6bop6NcclxuICAgIGN1YmU6IEN1YmU7ICAgLy8g5Yeg5L2V5L2T55qE5pWw5o2u6KGo6L6+5byPXHJcbiAgICBjdWJlVkFPOiBHTFN0YXRpY01lc2g7IC8vIOWHoOS9leS9k+eahOa4suafk+aVsOaNrua6kFxyXG5cclxuICAgIC8vIOeri+aWueS9k+eahOinkui/kOWKqOebuOWFs+WPmOmHj1xyXG4gICAgY3ViZUFuZ2xlOiBudW1iZXI7ICAvLyBjdWJl55qE6KeS5L2N56e7XHJcbiAgICBjdWJlU3BlZWQ6IG51bWJlcjsgIC8vIGN1YmXnmoTop5LpgJ/luqZcclxuICAgIGN1YmVNYXRyaXg6IE1hdHJpeDQ7ICAgLy8g5ZCI5oiQ55qEY3ViZeeahOS4lueVjOefqemYtVxyXG5cclxuICAgIC8vIOS4ieinkuW9olxyXG4gICAgdHJpQW5nbGU6IG51bWJlcjsgIC8vIOS4ieinkuW9oueahOinkuS9jeenu1xyXG4gICAgdHJpU3BlZWQ6IG51bWJlcjsgIC8vIOS4ieinkuW9oueahOinkumAn+W6plxyXG4gICAgdHJpVGltZXJJZDogbnVtYmVyOyAvLyDnlLHkuo7kuInop5LlvaLkvb/nlKjplK7nm5jmjqfliLbnmoTmm7TmlrDmlrnlvI/vvIzpnIDopoHmt7vliqDlkozliKDpmaTmk43kvZzvvIzpnIDopoHlrprml7blmahpZFxyXG4gICAgdHJpTWF0cml4OiBNYXRyaXg0OyAvLyDlkIjmiJDnmoTkuInop5LlvaLnmoTkuJbnlYznn6npmLVcclxuXHJcbiAgICBwcml2YXRlIF9oaXRBeGlzOiBFQXhpc1R5cGU7ICAvLyDkuLrkuobmlK/mjIHpvKDmoIfngrnpgInvvIzorrDlvZXpgInkuK3nmoTlnZDmoIfovbTnmoRlbnVt5YC8XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcywgeyBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlIH0sIHRydWUgKTsgLy8g6LCD55So5Z+657G75p6E6YCg5Ye95pWwXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluinkuS9jeenu+WSjOinkumAn+W6plxyXG4gICAgICAgIHRoaXMuY3ViZUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLnRyaUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLmN1YmVTcGVlZCA9IDEwMDtcclxuICAgICAgICB0aGlzLnRyaVNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLnRyaVRpbWVySWQgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyVGV4SWR4ID0gMDtcclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKCBHTFRleHR1cmVDYWNoZS5pbnN0YW5jZS5nZXRNdXN0KCBcImRlZmF1bHRcIiApICk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuWwgeijheWQjueahEdMUHJvZ3Jhbeexu1xyXG4gICAgICAgIHRoaXMudGV4dHVyZVByb2dyYW0gPSBHTFByb2dyYW1DYWNoZS5pbnN0YW5jZS5nZXRNdXN0KCBcInRleHR1cmVcIiApO1xyXG4gICAgICAgIHRoaXMuY29sb3JQcm9ncmFtID0gR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2UuZ2V0TXVzdCggXCJjb2xvclwiICk7XHJcblxyXG4gICAgICAgIHRoaXMuY3ViZSA9IG5ldyBDdWJlKCAwLjUsIDAuNSwgMC41ICk7XHJcbiAgICAgICAgbGV0IGRhdGE6IEdlb21ldHJ5RGF0YSA9IHRoaXMuY3ViZS5tYWtlR2VvbWV0cnlEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5jdWJlVkFPID0gZGF0YS5tYWtlU3RhdGljVkFPKCB0aGlzLmdsICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hpdEF4aXMgPSBFQXhpc1R5cGUuTk9ORTsgLy8g5Yid5aeL5YyW5pe25rKh6YCJ5Lit5Lu75L2V5LiA5p2h5Z2Q5qCH6L20XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOS4lueVjOefqemYtemDveS4uuW9kuS4gOWMluefqemYtVxyXG4gICAgICAgIHRoaXMuY3ViZU1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy50cmlNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG5cclxuICAgICAgICAvLyDosIPmlbTmkYTlg4/mnLrnmoTkvY3nva5cclxuICAgICAgICB0aGlzLmNhbWVyYS56ID0gODtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW5kZXJDdWJlICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g57uR5a6a6KaB57uY5Yi255qEdGV4dXRyZeWSjHByb2dyYW1cclxuICAgICAgICB0aGlzLnRleHR1cmVzWyB0aGlzLmN1cnJUZXhJZHggXS5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlUHJvZ3JhbS5sb2FkU2FtcGxlcigpO1xyXG5cclxuICAgICAgICAvLyDnu5jliLbnq4vmlrnkvZNcclxuICAgICAgICB0aGlzLm1hdFN0YWNrLmxvYWRJZGVudGl0eSgpO1xyXG5cclxuICAgICAgICAvLyDnrKzkuIDkuKrmuLLmn5PloIbmoIjmk43kvZxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucHVzaE1hdHJpeCgpOyAvLyDnn6npmLXov5vmoIhcclxuICAgICAgICAgICAgdGhpcy5tYXRTdGFjay5yb3RhdGUoIHRoaXMuY3ViZUFuZ2xlLCBWZWN0b3IzLnVwLCBmYWxzZSApOyAvLyDku6Xop5LluqYo6Z2e5byn5bqmKeS4uuWNleS9je+8jOavj+W4p+aXi+i9rFxyXG4gICAgICAgICAgICAvLyDlkIjmiJBtb2RlbFZpZXdQcm9qZWN0aW9u55+p6Zi1XHJcbiAgICAgICAgICAgIE1hdHJpeDQucHJvZHVjdCggdGhpcy5jYW1lcmEudmlld1Byb2plY3Rpb25NYXRyaXgsIHRoaXMubWF0U3RhY2subW9kZWxWaWV3TWF0cml4LCB0aGlzLmN1YmVNYXRyaXggKTtcclxuICAgICAgICAgICAgLy8g5bCG5ZCI5oiQ55qE55+p6Zi157uZR0xQcm9ncmFt5a+56LGhXHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZVByb2dyYW0uc2V0TWF0cml4NCggR0xQcm9ncmFtLk1WUE1hdHJpeCwgdGhpcy5jdWJlTWF0cml4ICk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZVZBTy5kcmF3KCk7IC8vIOS9v+eUqOW9k+WJjee7keWumueahHRleHR1cmXlkoxwcm9ncmFt57uY5Yi2Y3ViZVZhb+WvueixoVxyXG4gICAgICAgICAgICAvLyDkvb/nlKjovoXliqnmlrnms5Xnu5jliLblnZDmoIfns7tcclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3Q29vcmRTeXN0ZW0oIHRoaXMuYnVpbGRlciwgdGhpcy5jdWJlTWF0cml4LCB0aGlzLl9oaXRBeGlzLCAxICk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucG9wTWF0cml4KCk7IC8vIOefqemYteWHuuagiFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Kej6Zmk57uR5a6a55qEdGV4dHVyZeWSjHByb2dyYW1cclxuICAgICAgICB0aGlzLnRleHR1cmVQcm9ncmFtLnVuYmluZCgpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXNbIHRoaXMuY3VyclRleElkeCBdLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbmRlclRyaWFuZ2xlICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g56aB5q2i5riy5p+T5LiJ6KeS5b2i5pe25ZCv55So6IOM6Z2i5YmU6Zmk5Yqf6IO9XHJcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKCB0aGlzLmdsLkNVTExfRkFDRSApO1xyXG4gICAgICAgIC8vIOeUseS6juS4ieinkuW9ouS9v+eUqOminOiJsivkvY3nva7kv6Hmga/ov5vooYznu5jliLbvvIzlm6DmraTopoHnu5HlrprlvZPliY3nmoRHUFUgUHJvZ3JhbeS4umNvbG9yUHJvZ3JhbVxyXG4gICAgICAgIHRoaXMuY29sb3JQcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0U3RhY2sucHVzaE1hdHJpeCgpOyAvLyDmlrDkuqfnlJ/kuIDkuKrnn6npmLVcclxuICAgICAgICAgICAgLy8g56uL5pa55L2T57uY5Yi25ZyoQ2FudmFz55qE5Lit5b+DXHJcbiAgICAgICAgICAgIC8vIOiAjOS4ieinkuW9ouWImee7mOWItuWcqOWQkeW3pu+8iOi0n+WPt++8ieW5s+enuzLkuKrljZXkvY3lpITnmoTkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5tYXRTdGFjay50cmFuc2xhdGUoIG5ldyBWZWN0b3IzKCAtMiwgMCwgMCApICk7XHJcblxyXG4gICAgICAgICAgICAvLyDkvb/nlKjlvKfluqbvvIznu5Va6L206L+b6KGMUm9sbOaXi+i9rFxyXG4gICAgICAgICAgICB0aGlzLm1hdFN0YWNrLnJvdGF0ZSggdGhpcy50cmlBbmdsZSwgVmVjdG9yMy5mb3J3YXJkLCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAvLyDkvb/nlKjnsbvkvLxPcGVuR0wxLjHnmoTnq4vljbPnu5jliLbmqKHlvI9cclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmJlZ2luKCk7IC8vIOW8gOWni+e7mOWItu+8jGRlZmF0dWzkvb/nlKhnbC5UUklBTkdMRVPmlrnlvI/nu5jliLZcclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmNvbG9yKCAxLCAwLCAwICkudmVydGV4KCAtMC41LCAwLCAwICk7ICAvLyDkuInop5LlvaLnrKzkuIDkuKrngrnnmoTpopzoibLkuI7lnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5idWlsZGVyLmNvbG9yKCAwLCAxLCAwICkudmVydGV4KCAwLjUsIDAsIDAgKTsgLy8g5LiJ6KeS5b2i56ys5LqM5Liq54K555qE6aKc6Imy5LiO5Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5jb2xvciggMCwgMCwgMSApLnZlcnRleCggMCwgMC41LCAwICk7IC8vIOS4ieinkuW9ouesrOS4ieS4queCueeahOminOiJsuS4juWdkOagh1xyXG4gICAgICAgICAgICAvLyDlkIjmiJBtb2RlbC12aWV3LXByb2plY3Rpb24gbWF0cml4XHJcbiAgICAgICAgICAgIE1hdHJpeDQucHJvZHVjdCggdGhpcy5jYW1lcmEudmlld1Byb2plY3Rpb25NYXRyaXgsIHRoaXMubWF0U3RhY2subW9kZWxWaWV3TWF0cml4LCB0aGlzLnRyaU1hdHJpeCApO1xyXG4gICAgICAgICAgICAvLyDlsIZtdnBNYXRyaXjkvKDpgJLnu5lHTE1lc2hCdWlsZGVy55qEZW5k5pa55rOV77yM6K+l5pa55rOV5Lya5q2j56Gu55qE5pi+56S65Zu+5b2iXHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRlci5lbmQoIHRoaXMudHJpTWF0cml4ICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdFN0YWNrLnBvcE1hdHJpeCgpOyAvLyDliKDpmaTkuIDkuKrnn6npmLVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xvclByb2dyYW0udW5iaW5kKCk7XHJcbiAgICAgICAgLy8g5oGi5aSN6IOM6Z2i5YmU6Zmk5Yqf6IO9XHJcbiAgICAgICAgdGhpcy5nbC5lbmFibGUoIHRoaXMuZ2wuQ1VMTF9GQUNFICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YWz5LqOQ2FudmFzMkTnmoTor6bnu4blupTnlKjvvIzlj6/ku6Xlj4LogIPmnKzkuabnmoTlp5Dlprnnr4fvvJpUeXBlU2NyaXB05Zu+5b2i5riy5p+T5a6e5oiY77yaMkTmnrbmnoTorr7orqHkuI7lrp7njrBcclxuICAgIHByaXZhdGUgX3JlbmRlclRleHQgKCB0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciA9IHRoaXMuY2FudmFzLndpZHRoICogMC41LCB5OiBudW1iZXIgPSAxNTAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5jdHgyRCAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN0eDJELmNsZWFyUmVjdCggMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eDJELnNhdmUoKTsgLy8g5riy5p+T54q25oCB6L+b5qCIXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFN0eWxlID0gXCJyZWRcIjsgIC8vIOe6ouiJslxyXG4gICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwiY2VudGVyXCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ3RvcCc7IC8vIFnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgdGhpcy5jdHgyRC5mb250ID0gXCIzMHB4IEFyaWFsXCI7IC8vIOS9v+eUqOWkp+S4gOeCueeahEFyaWFs5a2X5L2T5a+56LGhXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIHRleHQsIHgsIHkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQucmVzdG9yZSgpOyAvLyDmgaLlpI3ljp/mnaXnmoTmuLLmn5PnirbmgIFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZHJhd1RleHQgKCBwb3M6IFZlY3RvcjMsIGF4aXM6IEVBeGlzVHlwZSwgbXZwOiBNYXRyaXg0LCBpbnZlcnNlOiBib29sZWFuID0gZmFsc2UgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5jdHgyRCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3V0OiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAvLyDosIPnlKggTWF0aEhlbHBlci5vYmoyU2NyZWVuU3BhY2Xov5nkuKrmoLjlv4Plh73mlbDvvIzlsIblsYDpg6jlnZDmoIfns7vmoIfnpLrnmoTkuIDkuKrngrnlj5jmjaLliLDlsY/luZXlnZDmoIfns7vkuIpcclxuICAgICAgICBpZiAoIE1hdGhIZWxwZXIub2JqMkdMVmlld3BvcnRTcGFjZSggcG9zLCBtdnAsIHRoaXMuY2FtZXJhLmdldFZpZXdwb3J0KCksIG91dCApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG91dC55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gb3V0Lnk7IC8vIOWPmOaNouWIsOWxj+W5leWdkOagh+ezu++8jOW3puaJi+ezu++8jOWOn+eCueWcqOW3puS4iuinku+8jHjlkJHlj7PvvIx55ZCR5LiLXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQuc2F2ZSgpOyAvLyDmuLLmn5PnirbmgIHov5vmoIhcclxuICAgICAgICAgICAgdGhpcy5jdHgyRC5mb250ID0gXCIzMHB4IEFyaWFsXCI7IC8vIOS9v+eUqOWkp+S4gOeCueeahEFyaWFs5a2X5L2T5a+56LGhXHJcbiAgICAgICAgICAgIGlmICggYXhpcyA9PT0gRUF4aXNUeXBlLlhBWElTIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QmFzZWxpbmUgPSAndG9wJzsgLy8gWei9tOS4unRvcOWvuem9kFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsU3R5bGUgPSBcInJlZFwiOyAgLy8g57qi6ImyXHJcbiAgICAgICAgICAgICAgICBpZiAoIGludmVyc2UgPT09IHRydWUgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIFwiLVhcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QWxpZ24gPSBcImxlZnRcIjsgIC8vIFjovbTlsYXkuK3lr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIlhcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBheGlzID09PSBFQXhpc1R5cGUuWUFYSVMgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwiY2VudGVyXCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjsgIC8vIOe7v+iJslxyXG4gICAgICAgICAgICAgICAgaWYgKCBpbnZlcnNlID09PSB0cnVlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRCYXNlbGluZSA9ICd0b3AnOyAgLy8gLVnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIi1ZXCIsIG91dC54LCBvdXQueSApOyAvLyDooYzmloflrZfnu5jliLZcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ2JvdHRvbSc7IC8vIFnovbTkuLpib3R0b23lr7npvZBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELmZpbGxUZXh0KCBcIllcIiwgb3V0LngsIG91dC55ICk7IC8vIOi/m+ihjOaWh+Wtl+e7mOWItlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsU3R5bGUgPSBcImJsdWVcIjsgIC8vIOe7v+iJslxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQudGV4dEJhc2VsaW5lID0gJ3RvcCc7IC8vIFnovbTkuLp0b3Dlr7npvZBcclxuICAgICAgICAgICAgICAgIGlmICggaW52ZXJzZSA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7ICAvLyBY6L205bGF5Lit5a+56b2QXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHgyRC5maWxsVGV4dCggXCItWlwiLCBvdXQueCwgb3V0LnkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eDJELnRleHRBbGlnbiA9IFwibGVmdFwiOyAgLy8gWOi9tOWxheS4reWvuem9kFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4MkQuZmlsbFRleHQoIFwiWlwiLCBvdXQueCwgb3V0LnkgKTsgLy8g6L+b6KGM5paH5a2X57uY5Yi2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQucmVzdG9yZSgpOyAvLyDmgaLlpI3ljp/mnaXnmoTmuLLmn5PnirbmgIFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlciAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckN1YmUoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUcmlhbmdsZSgpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRleHQoIFwi56ys5LiA5LiqV2ViR0wgRGVtb1wiICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSAoIGVsYXBzZWRNc2VjOiBudW1iZXIsIGludGVydmFsU2VjOiBudW1iZXIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHMgPSB2dO+8jOagueaNruS4pOW4p+mXtOmalOabtOaWsOinkumAn+W6puWSjOinkuS9jeenu1xyXG4gICAgICAgIHRoaXMuY3ViZUFuZ2xlICs9IHRoaXMuY3ViZVNwZWVkICogaW50ZXJ2YWxTZWM7XHJcblxyXG4gICAgICAgIC8vIOaIkeS7rOWcqENhbWVyYUFwcGxpY2F0aW9u5Lit5Lmf6KaG5YaZ77yIb3ZlcnJpZGXvvInnmoR1cGRhdGXmlrnms5VcclxuICAgICAgICAvLyBDYW1lcmFBcHBsaWNhdGlvbueahHVwZGF0ZeaWueazleeUqOadpeiuoeeul+aRhOWDj+acuueahOaKleW9seefqemYteS7peWPiuinhuWbvuefqemYtVxyXG4gICAgICAgIC8vIOaJgOS7peaIkeS7rOW/hemhu+imgeiwg+eUqOWfuuexu+aWueazle+8jOeUqOS6juaOp+WItuaRhOWDj+acuuabtOaWsFxyXG4gICAgICAgIC8vIOWQpuWImeS9oOWwhuS7gOS5iOmDveeci+S4jeWIsO+8jOWIh+iusO+8gVxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSggZWxhcHNlZE1zZWMsIGludGVydmFsU2VjICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6LWE5rqQ5ZCM5q2l5pa55rOVXHJcbiAgICBwdWJsaWMgYXN5bmMgcnVuICgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gYXdhaXTlv4XpobvopoHnlKjkuo5hc3luY+WjsOaYjueahOWHveaVsOS4rVxyXG4gICAgICAgIGxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBhd2FpdCBIdHRwUmVxdWVzdC5sb2FkSW1hZ2VBc3luYyggXCJkYXRhL3BpYzAucG5nXCIgKTtcclxuICAgICAgICBsZXQgdGV4OiBHTFRleHR1cmUgPSBuZXcgR0xUZXh0dXJlKCB0aGlzLmdsICk7XHJcbiAgICAgICAgdGV4LnVwbG9hZCggaW1nLDAsdHJ1ZSApO1xyXG4gICAgICAgIHRleC5maWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goIHRleCApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjHjgIHnrKzkuIDkuKrnurnnkIbovb3lhaXmiJDlip/vvIFcIiApO1xyXG5cclxuICAgICAgICAvLyBhd2FpdOW/hemhu+imgeeUqOS6jmFzeW5j5aOw5piO55qE5Ye95pWw5LitXHJcbiAgICAgICAgaW1nID0gYXdhaXQgSHR0cFJlcXVlc3QubG9hZEltYWdlQXN5bmMoIFwiZGF0YS9waWMxLmpwZ1wiICk7XHJcbiAgICAgICAgdGV4ID0gbmV3IEdMVGV4dHVyZSggdGhpcy5nbCApO1xyXG4gICAgICAgIHRleC51cGxvYWQoIGltZywwLHRydWUpO1xyXG4gICAgICAgIHRleC5maWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2goIHRleCApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjLjgIHnrKzkuozkuKrnurnnkIbovb3lhaXmiJDlip/vvIFcIiApO1xyXG5cclxuXHJcbiAgICAgICAgLy8g5Zyo6LWE5rqQ5ZCM5q2l5Yqg6L295a6M5oiQ5ZCO77yM55u05o6l5ZCv5Yqo5o2i6IKk55qE5a6a5pe25Zmo77yM5q+P6ZqUMuenku+8jOWwhueri+aWueS9k+eahOearuiCpOi/m+ihjOWRqOiAjOWkjeWni+eahOabv+aNolxyXG4gICAgICAgIHRoaXMuYWRkVGltZXIoIHRoaXMuY3ViZVRpbWVDYWxsYmFjay5iaW5kKCB0aGlzICksIDIsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjPjgIHlkK/liqhBcHBsaWNhdGlvbueoi+W6j1wiICk7XHJcbiAgICAgICAgc3VwZXIucnVuKCk7IC8vIOiwg+eUqOWfuuexu+eahHJ1buaWueazle+8jOWfuuexu3J1buaWueazleWGhemDqOiwg+eUqOS6hnN0YXJ05pa55rOVXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGN1YmVUaW1lQ2FsbGJhY2sgKCBpZDogbnVtYmVyLCBkYXRhOiBhbnkgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3VyclRleElkeCsrOyAvLyDlrprml7borqnorqHmlbDlmagrMVxyXG4gICAgICAgIC8vIOWPluaooeaTjeS9nO+8jOiuqWN1cnJUZXhJZHjnmoTlj5blgLzojIPlm7TkuLpbIDAsIDIgXeS5i+mXtO+8iOW9k+WJjeaciTPkuKrnurnnkIbvvIlcclxuICAgICAgICB0aGlzLmN1cnJUZXhJZHggJT0gdGhpcy50ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaVRpbWVDYWxsYmFjayAoIGlkOiBudW1iZXIsIGRhdGE6IGFueSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50cmlBbmdsZSArPSB0aGlzLnRyaVNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbktleURvd24gKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZXZ0LmtleSA9PT0gXCJxXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRyaVRpbWVySWQgPT09IC0xIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlUaW1lcklkID0gdGhpcy5hZGRUaW1lciggdGhpcy50cmlUaW1lQ2FsbGJhY2suYmluZCggdGhpcyApLCAwLjI1LCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJlXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRyaVRpbWVySWQgIT09IC0xIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnJlbW92ZVRpbWVyKCB0aGlzLnRyaVRpbWVySWQgKSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlUaW1lcklkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vbWF0aC92ZWN0b3IyJztcclxuXHJcbmV4cG9ydCBlbnVtIEVJbnB1dEV2ZW50VHlwZVxyXG57XHJcbiAgICBNT1VTRUVWRU5ULCAgICAvL+aAu+exu++8jOihqOekuum8oOagh+S6i+S7tiAgXHJcbiAgICBNT1VTRURPV04sICAgICAvL+m8oOagh+aMieS4i+S6i+S7tlxyXG4gICAgTU9VU0VVUCwgICAgICAgLy/pvKDmoIflvLnotbfkuovku7ZcclxuICAgIE1PVVNFTU9WRSwgICAgIC8v6byg5qCH56e75Yqo5LqL5Lu2LCBtb3Zl5LqL5Lu25Y+R55Sf5Zyo5b2T5YmN6byg5qCH5oyH6ZKI5LmL5LiL55qESVNwcml0ZeWvueixoVxyXG4gICAgTU9VU0VEUkFHLCAgICAgLy/pvKDmoIfmi5bliqjkuovku7YsIGRyYWfkuovku7blj5HnlJ/lnKhtb3VzZURvd27pgInkuK3nmoRJU3ByaXRl5a+56LGh5LiKXHJcbiAgICBLRVlCT0FSREVWRU5ULCAvL+mUruebmOS6i+S7tlxyXG4gICAgS0VZVVAsICAgICAgICAgLy/mgLvnsbvvvIzplK7mjInkuIvkuovku7ZcclxuICAgIEtFWURPV04sICAgICAgIC8v6ZSu5by56LW35LqL5Lu2XHJcbiAgICBLRVlQUkVTUyAgICAgICAgLy/mjInplK7kuovku7ZcclxufTtcclxuXHJcbi8vIENhbnZhc0tleWJvYXJkRXZlbnTlkoxDYW52YXNNb3VzZUV2ZW506YO957un5om/6Ieq5pys57G7XHJcbi8vIOWfuuexu+WumuS5ieS6huWFseWQjOeahOWxnuaAp++8jGtleWJvYXJk5oiWbW91c2Xkuovku7bpg73og73kvb/nlKjnu4TlkIjplK5cclxuLy8g5L6L5aaC5L2g5Y+v5Lul5oyJ552AY3RybOmUrueahOWQjOaXtueCueWHu+m8oOagh+W3pumUruWBmuafkOS6m+S6i+aDhVxyXG4vLyDlvZPnhLbkvaDkuZ/lj6/ku6XmjInnnYBhbHQgKyBhIOmUruWBmuWPpuWkluS4gOS6m+S6i+aDhVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzSW5wdXRFdmVudFxyXG57XHJcbiAgICAvLyDkuInkuKpib29sZWFu5Y+Y6YeP77yM55So5p2l5oyH56S6YWx0IC8gY3RybCAvIHNoaWZ05piv5ZCm6KKr5oyJ5LiLXHJcbiAgICBwdWJsaWMgYWx0S2V5OiBib29sZWFuO1xyXG4gICAgcHVibGljIGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2hpZnRLZXk6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gdHlwZeaYr+S4gOS4quaemuS4vuWvueixoe+8jOeUqOadpeihqOekuuW9k+WJjeeahOS6i+S7tuexu+Wei1xyXG4gICAgcHVibGljIHR5cGU6IEVJbnB1dEV2ZW50VHlwZTtcclxuXHJcbiAgICAvLyDmnoTpgKDlh73mlbDvvIzkvb/nlKjkuoZkZWZhdWx05Y+C5pWwXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGFsdEtleTogYm9vbGVhbiA9IGZhbHNlLCBjdHJsS2V5OiBib29sZWFuID0gZmFsc2UsIHNoaWZ0S2V5OiBib29sZWFuID0gZmFsc2UgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWx0S2V5ID0gYWx0S2V5O1xyXG4gICAgICAgIHRoaXMuY3RybEtleSA9IGN0cmxLZXk7XHJcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOWbnuiwg+WHveaVsOexu+Wei+WIq+WQjVxyXG4vLyDlm57osIPlh73mlbDpnIDopoHnrKzkuInmlrnlrp7njrDlkozorr7nva7vvIzmiYDmnInlr7zlh7ror6Xlm57osIPlh73mlbBcclxuZXhwb3J0IHR5cGUgVGltZXJDYWxsYmFjayA9ICggaWQ6IG51bWJlciwgZGF0YTogYW55ICkgPT4gdm9pZDtcclxuXHJcbi8vIOe6r+aVsOaNruexu1xyXG4vLyDmiJHku6zkuI3pnIDopoHlr7zlh7pUaW1lcuexu++8jOWboOS4uuWPquaYr+S9nOS4uuWGhemDqOexu+S9v+eUqFxyXG5jbGFzcyBUaW1lclxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlciA9IC0xOyAvLyDorqHml7blmajnmoRpZOWPtyBcclxuXHJcbiAgICAvLyDmoIforrDlvZPliY3orqHml7blmajmmK/lkKbmnInmlYjvvIzlvojph43opoHnmoTkuIDkuKrlj5jph4/vvIzlhbfkvZPnnIvlkI7nu63ku6PnoIFcclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrOyAgLy8g5Zue6LCD5Ye95pWw77yM5Yiw5pe26Ze05Lya6Ieq5Yqo6LCD55SoXHJcbiAgICBwdWJsaWMgY2FsbGJhY2tEYXRhOiBhbnkgPSB1bmRlZmluZWQ7IC8vIOeUqOS9nOWbnuiwg+WHveaVsOeahOWPguaVsFxyXG5cclxuICAgIHB1YmxpYyBjb3VudGRvd246IG51bWJlciA9IDA7IC8vIOWAkuiuoeaXtuWZqO+8jOavj+asoXVwZGF0ZeaXtuS8muWAkuiuoeaXtlxyXG4gICAgcHVibGljIHRpbWVvdXQ6IG51bWJlciA9IDA7ICAvLyBcclxuICAgIHB1YmxpYyBvbmx5T25jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICggY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2sgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc01vdXNlRXZlbnQgZXh0ZW5kcyBDYW52YXNJbnB1dEV2ZW50XHJcbntcclxuICAgIC8vIGJ1dHRvbuihqOekuuW9k+WJjeaMieS4i+m8oOagh+WTquS4qumUrlxyXG4gICAgLy8gWyAwIDog6byg5qCH5bem6ZSuIO+8jDEg77yaIOm8oOagh+S4remUru+8jDIg77yaIOm8oOagh+WPs+mUrl1cclxuICAgIHB1YmxpYyBidXR0b246IG51bWJlcjtcclxuXHJcbiAgICAvLyDln7rkuo5jYW52YXPlnZDmoIfns7vnmoTooajnpLpcclxuICAgIHB1YmxpYyBjYW52YXNQb3NpdGlvbjogVmVjdG9yMjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGNhbnZhc1BvczogVmVjdG9yMiwgYnV0dG9uOiBudW1iZXIsIGFsdEtleTogYm9vbGVhbiA9IGZhbHNlLCBjdHJsS2V5OiBib29sZWFuID0gZmFsc2UsIHNoaWZ0S2V5OiBib29sZWFuID0gZmFsc2UgKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCB0eXBlLCBhbHRLZXksIGN0cmxLZXksIHNoaWZ0S2V5ICk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNQb3NpdGlvbiA9IGNhbnZhc1BvcztcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5idXR0b24gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc0tleUJvYXJkRXZlbnQgZXh0ZW5kcyBDYW52YXNJbnB1dEV2ZW50XHJcbntcclxuICAgIC8vIOW9k+WJjeaMieS4i+eahOmUrueahGFzY2lp5a2X56ymXHJcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XHJcbiAgICAvLyDlvZPliY3mjInkuIvnmoTplK7nmoRhc2Npaeegge+8iOaVsOWtl++8iVxyXG4gICAgcHVibGljIGtleUNvZGU6IG51bWJlcjtcclxuICAgIC8vIOW9k+WJjeaMieS4i+eahOmUruaYr+WQpuS4jeWBnOeahOinpuWPkeS6i+S7tlxyXG4gICAgcHVibGljIHJlcGVhdDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGtleTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHJlcGVhdDogYm9vbGVhbiwgYWx0S2V5OiBib29sZWFuID0gZmFsc2UsIGN0cmxLZXk6IGJvb2xlYW4gPSBmYWxzZSwgc2hpZnRLZXk6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHR5cGUsIGFsdEtleSwgY3RybEtleSwgc2hpZnRLZXkgKTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLmtleUNvZGUgPSBrZXlDb2RlO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRJbnRlcmFjdGlvbiBpbXBsZW1lbnRzIEV2ZW50TGlzdGVuZXJPYmplY3Rcclxue1xyXG4gICAgcHVibGljIHRpbWVyczogVGltZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3RpbWVJZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcHJpdmF0ZSBfZnBzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpc0ZsaXBZQ29vcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDmiJHku6znmoRFdmVudEludGVyYWN0aW9u5Li76KaB5pivY2FudmFzMkTlkox3ZWJHTOW6lOeUqFxyXG4gICAgLy8g6ICMY2FudmFzMkTlkox3ZWJHTCBjb250ZXh06YO95piv5LuOSFRNTENhbnZhc0VsZW1lbnTlhYPntKDojrflj5bnmoRcclxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIC8vIOacrOS5puS4reeahERlbW/ku6XmtY/op4jlmajkuLrkuLtcclxuICAgIC8vIOaIkeS7rOWvueS6jm1vdXNlbW92ZeS6i+S7tuaPkOS+m+S4gOS4quW8gOWFs+WPmOmHj1xyXG4gICAgLy8g5aaC5p6c5LiL6Z2i5Y+Y6YeP6K6+572u5Li6dHJ1Ze+8jOWImeavj+asoem8oOagh+enu+WKqOmDveS8muinpuWPkW1vdXNlbW92ZeS6i+S7tlxyXG4gICAgLy8g5ZCm5YiZ5oiR5Lus5bCx5LiN5Lya6Kem5Y+RbVxyXG4gICAgcHVibGljIGlzU3VwcG9ydE1vdXNlTW92ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvLyDmiJHku6zkvb/nlKjkuIvpnaLlj5jph4/mnaXmoIforrDlvZPliY3pvKDmoIfmmK/lkKbmjInkuIvnirbmgIFcclxuICAgIC8vIOebrueahOaYr+aPkOS+m21vdXNlZHJhZ+S6i+S7tlxyXG4gICAgcHJvdGVjdGVkIF9pc01vdXNlRG93bjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfaXNSaWdodE1vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlOyAvLyDkuLrkuobmlK/mjIHpvKDmoIfmjInkuItkcmFn5LqL5Lu2XHJcblxyXG4gICAgLy8gX3N0YXJ05oiQ5ZGY5Y+Y6YeP55So5LqO5qCH6K6w5b2T5YmNRXZlbnRJbnRlcmFjdGlvbuaYr+WQpui/m+WFpeS4jemXtOaWreeahOW+queOr+eKtuaAgVxyXG4gICAgcHJvdGVjdGVkIF9zdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8g55SxV2luZG935a+56LGh55qEcmVxdWVzdEFuaW1hdGlvbkZyYW1l6L+U5Zue55qE5aSn5LqOMOeahGlk5Y+3XHJcbiAgICAvLyDmiJHku6zlj6/ku6Xkvb/nlKhjYW5jZWxBbmltYXRpb25GcmFtZSAoIHRoaXMgLl9yZXF1ZXN0SWQgKeadpeWPlua2iOWKqOeUu+W+queOr1xyXG4gICAgcHJvdGVjdGVkIF9yZXF1ZXN0SWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8vIOeUseS6juiuoeeul+W9k+WJjeabtOaWsOS4juS4iuS4gOasoeabtOaWsOS5i+mXtOeahOaXtumXtOW3rlxyXG4gICAgLy8g55So5LqO5Z+65LqO5pe26Ze055qE54mp55CG5pu05pawXHJcbiAgICBwcm90ZWN0ZWQgX2xhc3RUaW1lICE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfc3RhcnRUaW1lICE6IG51bWJlcjtcclxuXHJcbiAgICAvLyDlo7DmmI7mr4/luKflm57osIPlh73mlbBcclxuICAgIHB1YmxpYyBmcmFtZUNhbGxiYWNrOiAoICggYXBwOiBFdmVudEludGVyYWN0aW9uICkgPT4gdm9pZCApIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IClcclxuICAgIHtcclxuICAgICAgICAvLyBFdmVudEludGVyYWN0aW9u5Z+657G75oul5pyJ5LiA5LiqSFRNTENhbnZhc0VsZW1lbnTlr7nosaFcclxuICAgICAgICAvLyDov5nmoLflrZDnsbvlj6/ku6XliIbliKvku47or6VIVE1MQ2FudmFzRWxlbWVudOS4reiOt+WPlkNhbnZhczJE5oiWV2ViR0zkuIrkuIvmloflr7nosaFcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgLy8gY2FudmFz5YWD57Sg6IO95aSf55uR5ZCs6byg5qCH5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAvLyDlvojph43opoHkuIDngrnvvIzplK7nm5jkuovku7bkuI3og73lnKhjYW52YXPkuK3op6blj5HvvIzkvYbmmK/og73lnKjlhajlsYDnmoR3aW5kb3flr7nosaHkuK3op6blj5FcclxuICAgICAgICAvLyDlm6DmraTmiJHku6zog73lnKh3aW5kb3flr7nosaHkuK3nm5HlkKzplK7nm5jkuovku7ZcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlkb3duXCIsIHRoaXMsIGZhbHNlICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJrZXlwcmVzc1wiLCB0aGlzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIxtb3VzZURvd27kuLpmYWxzZVxyXG4gICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOm7mOiupOeKtuaAgeS4i++8jOS4jeaUr+aMgW1vdXNlbW92ZeS6i+S7tlxyXG4gICAgICAgIHRoaXMuaXNTdXBwb3J0TW91c2VNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSAvLyDnpoHmraLlj7PplK7kuIrkuIvmlofoj5zljZVcclxuICAgIH1cclxuXHJcbiAgICAvLyDliKTmlq3lvZPliY1FdmVudEludGVyYWN0aW9u5piv5ZCm5LiA55u05Zyo6LCD55SocmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICBwdWJsaWMgaXNSdW5uaW5nICgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuoeeul+W9k+WJjeeahEZQU++8iEZyYW1lIFBlciBTZWNvbmTvvIlcclxuICAgIHB1YmxpYyBnZXQgZnBzICgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDlkK/liqjliqjnlLvlvqrnjq9cclxuICAgIHB1YmxpYyBzdGFydCAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5fc3RhcnQgPT09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzIC4gX3JlcXVlc3RJZCA9IC0xIDsgLy8g5bCGX3JlcXVlc3RJZOiuvue9ruS4ui0xXHJcbiAgICAgICAgICAgIC8vIOWcqHN0YXJ05ZKMc3RvcOWHveaVsOS4re+8jF9sYXN0VGltZeWSjF9zdGFydFRpbWXpg73orr7nva7kuLotMVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGltZSA9IC0xO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgLy8g5ZCv5Yqo5pu05paw5riy5p+T5b6q546vXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICggbXNlYzogbnVtYmVyICk6IHZvaWQgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8g5ZCv5Yqoc3RlcOaWueazlVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwKCBtc2VjICk7XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIC8v5rOo6YeK5o6J5LiK6L+w5Luj56CB77yM5L2/55So5LiL6Z2i5Luj56CB5p2l5ZCv5Yqoc3RlcOaWueazlVxyXG4gICAgICAgICAgICAvL3RoaXMgLiBfcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lICggdGhpcyAuIHN0ZXAgLiBiaW5kICggdGhpcyApICkgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDkuI3lgZznmoTlkajogIzlpI3lp4vov5DliqhcclxuICAgIHByb3RlY3RlZCBzdGVwICggdGltZVN0YW1wOiBudW1iZXIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v56ys5LiA5qyh6LCD55So5pys5Ye95pWw5pe277yM6K6+572uc3RhcnTlkoxsYXN0VGltZeS4unRpbWVzdGFtcFxyXG4gICAgICAgIGlmICggdGhpcy5fc3RhcnRUaW1lID09PSAtMSApIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWVTdGFtcDtcclxuICAgICAgICBpZiAoIHRoaXMuX2xhc3RUaW1lID09PSAtMSApIHRoaXMuX2xhc3RUaW1lID0gdGltZVN0YW1wO1xyXG5cclxuICAgICAgICAvL+iuoeeul+W9k+WJjeaXtumXtOeCueS4juesrOS4gOasoeiwg+eUqHN0ZXDml7bpl7TngrnnmoTlt65cclxuICAgICAgICBsZXQgZWxhcHNlZE1zZWMgPSB0aW1lU3RhbXAgLSB0aGlzLl9zdGFydFRpbWU7XHJcblxyXG4gICAgICAgIC8v6K6h566X5b2T5YmN5pe26Ze054K55LiO5LiK5LiA5qyh6LCD55Soc3RlcOaXtumXtOeCueeahOW3rijlj6/ku6XnkIbop6PkuLrkuKTluKfkuYvpl7TnmoTml7bpl7Tlt64pXHJcbiAgICAgICAgLy8g5q2k5pe2aW50ZXJ2YWxTZWPlrp7pmYXmmK/mr6vnp5LooajnpLpcclxuICAgICAgICBsZXQgaW50ZXJ2YWxTZWMgPSAoIHRpbWVTdGFtcCAtIHRoaXMuX2xhc3RUaW1lICk7XHJcblxyXG4gICAgICAgIC8vIOesrOS4gOW4p+eahOaXtuWAmSxpbnRlcnZhbFNlY+S4ujAs6Ziy5q2iMOS9nOWIhuavjVxyXG4gICAgICAgIGlmICggaW50ZXJ2YWxTZWMgIT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6K6h566XZnBzXHJcbiAgICAgICAgICAgIHRoaXMuX2ZwcyA9IDEwMDAuMCAvIGludGVydmFsU2VjO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5oiR5LusdXBkYXRl5L2/55So55qE5piv56eS5Li65Y2V5L2N77yM5Zug5q2k6L2s5o2i5Li656eS6KGo56S6XHJcbiAgICAgICAgaW50ZXJ2YWxTZWMgLz0gMTAwMC4wO1xyXG5cclxuICAgICAgICAvL+iusOW9leS4iuS4gOasoeeahOaXtumXtOaIs1xyXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZVN0YW1wO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW5kbGVUaW1lcnMoIGludGVydmFsU2VjICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cgKFwiIGVsYXBzZWRUaW1lID0gXCIgKyBlbGFwc2VkTXNlYyArIFwiIGRpZmZUaW1lID0gXCIgKyBpbnRlcnZhbFNlYyk7XHJcbiAgICAgICAgLy8g5YWI5pu05pawXHJcbiAgICAgICAgdGhpcy51cGRhdGUoIGVsYXBzZWRNc2VjLCBpbnRlcnZhbFNlYyApO1xyXG4gICAgICAgIC8vIOWQjua4suafk1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5mcmFtZUNhbGxiYWNrICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayggdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpgJLlvZLosIPnlKjvvIzlvaLmiJDlkajogIzlpI3lp4vnmoTliY3ov5tcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICggZWxhcHNlZE1zZWM6IG51bWJlciApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAoIGVsYXBzZWRNc2VjICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWBnOatouWKqOeUu+W+queOr1xyXG4gICAgcHVibGljIHN0b3AgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3N0YXJ0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGNhbmNlbEFuaW1hdGlvbkZyYW1l5Ye95pWw55So5LqOOlxyXG4gICAgICAgICAgICAvL+WPlua2iOS4gOS4quWFiOWJjemAmui/h+iwg+eUqHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKeaWueazlea3u+WKoOWIsOiuoeWIkuS4reeahOWKqOeUu+W4p+ivt+axglxyXG4gICAgICAgICAgICAvL2FsZXJ0KHRoaXMuX3JlcXVlc3RJZCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLl9yZXF1ZXN0SWQgKTtcclxuICAgICAgICAgICAgLy90aGlzIC4gX3JlcXVlc3RJZCA9IC0xIDsgLy8g5bCGX3JlcXVlc3RJZOiuvue9ruS4ui0xXHJcblxyXG4gICAgICAgICAgICAvLyDlnKhzdGFydOWSjHN0b3Dlh73mlbDkuK3vvIxfbGFzdFRpbWXlkoxfc3RhcnRUaW1l6YO96K6+572u5Li6LTFcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWUgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Jma5pa55rOV77yM5a2Q57G76IO96KaG5YaZ77yIb3ZlcnJpZGXvvInvvIznlKjkuo7mm7TmlrBcclxuICAgIC8v5rOo5oSPOiDnrKzkuozkuKrlj4LmlbDmmK/np5LkuLrljZXkvY3vvIznrKzkuIDlj4LmlbDmmK/mr6vnp5LkuLrljZXkvY1cclxuICAgIHB1YmxpYyB1cGRhdGUgKCBlbGFwc2VkTXNlYzogbnVtYmVyLCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWQgeyB9XHJcblxyXG4gICAgLy/omZrmlrnms5XvvIzlrZDnsbvog73opoblhpnvvIhvdmVycmlkZe+8ie+8jOeUqOS6jua4suafk1xyXG4gICAgcHVibGljIHJlbmRlciAoKTogdm9pZCB7IH1cclxuXHJcbiAgICAvLyDomZrlh73mlbDvvIzlrZDnsbvopoblhpnvvIhvdmVyaWRl77yJ77yM55So5LqO5ZCM5q2l5ZCE56eN6LWE5rqQ5ZCO5ZCv5YqoRXZlbnRJbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGFzeW5jIHJ1biAoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIC8vIOiwg+eUqHN0YXJ05pa55rOV77yM6K+l5pa55rOV5Lya5ZCv5YqocmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgLy8g54S25ZCO5LiN5YGc55qE6L+b6KGM5Zue6LCDXHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiwg+eUqGRpc3BhdGNoWFhYWOiZmuaWueazlei/m+ihjOS6i+S7tuWIhuWPkVxyXG4gICAgLy8gaGFuZGxlRXZlbnTmmK/mjqXlj6NFdmVudExpc3RlbmVyT2JqZWN05a6a5LmJ55qE5Y2P6K6u5YiG5Y+R77yM5b+F6aG76KaB5a6e546wXHJcbiAgICBwdWJsaWMgaGFuZGxlRXZlbnQgKCBldnQ6IEV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKCBldnQudHlwZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc01vdXNlRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRE9XTiApICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1vdXNldXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VVcCggdGhpcy5fdG9DYW52YXNNb3VzZUV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5NT1VTRVVQICkgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpxpc1N1cHBvcnRNb3VzZU1vdmXkuLp0cnVl77yM5omN5Lya5q+P5qyh6byg5qCH56e75Yqo6Kem5Y+RbW91c2VNb3Zl5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNTdXBwb3J0TW91c2VNb3ZlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFTU9WRSApICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlkIzml7bvvIzlpoLmnpzlvZPliY3pvKDmoIfku7vmhI/kuIDkuKrplK7lpITkuo7mjInkuIvnirbmgIHlubbmi5bliqjml7bvvIzop6blj5FkcmFn5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX2lzTW91c2VEb3duIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEcmFnKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRFJBRyApICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoIHRoaXMuX3RvQ2FudmFzS2V5Qm9hcmRFdmVudCggZXZ0LCBFSW5wdXRFdmVudFR5cGUuS0VZUFJFU1MgKSApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5RG93biggdGhpcy5fdG9DYW52YXNLZXlCb2FyZEV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5LRVlET1dOICkgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwia2V5dXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlVcCggdGhpcy5fdG9DYW52YXNLZXlCb2FyZEV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5LRVlVUCApICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duICggZXZ0OiBDYW52YXNNb3VzZUV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VVcCAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlTW92ZSAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlRHJhZyAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbktleURvd24gKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25LZXlVcCAoIGV2dDogQ2FudmFzS2V5Qm9hcmRFdmVudCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbktleVByZXNzICggZXZ0OiBDYW52YXNLZXlCb2FyZEV2ZW50ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE1vdXNlQ2FudmFzICgpOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDlsIbpvKDmoIfkuovku7blj5HnlJ/ml7bpvKDmoIfmjIfpkojnmoTkvY3nva7lj5jmjaLkuLrnm7jlr7nlvZPliY1jYW52YXPlhYPntKDnmoTlgY/np7vooajnpLpcclxuICAgIC8vIOi/meaYr+S4gOS4quengeacieaWueazle+8jOaEj+WRs+edgOWPquiDveWcqOacrOexu+S4reS9v+eUqCzlrZDnsbvlkozlhbbku5bnsbvpg73ml6Dms5XosIPnlKjmnKzmlrnms5VcclxuICAgIC8vIOWPquimgeaYr+m8oOagh+S6i+S7tu+8iGRvd24gLyB1cCAvIG1vdmUgLyBkcmFnIC4uLi4u77yJ6YO96ZyA6KaB6LCD55So5pys5pa55rOVXHJcbiAgICAvLyDlsIbnm7jlr7nkuo7mtY/op4jlmah2aWV3cG9ydOihqOekuueahOeCueWPmOaNouWIsOebuOWvueS6jmNhbnZhc+ihqOekuueahOeCuVxyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFRvQ2FudmFzQ29vcmRpbmF0ZSAoIGV2dDogTW91c2VFdmVudCApOiBWZWN0b3IyXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5YiH6K6w77yM5b6I6YeN6KaB5LiA54K577yaXHJcbiAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN05pa55rOV6L+U5Zue55qEQ2xpZW50UmVjdFxyXG4gICAgICAgIGxldCByZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5nZXRNb3VzZUNhbnZhcygpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyDojrflj5bop6blj5HpvKDmoIfkuovku7bnmoR0YXJnZXTlhYPntKDvvIzov5nph4zmgLvmmK9IVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgICAgIGlmICggZXZ0LnRhcmdldCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgeDogbnVtYmVyID0gZXZ0LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB5ID0gZXZ0LmNsaWVudFkgLSByZWN0LnRvcDsgLy8g55u45a+55LqOY2FudmFz5bem5LiK55qE5YGP56e7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0ZsaXBZQ29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5nZXRNb3VzZUNhbnZhcygpLmhlaWdodCAtIHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5Y+Y5oiQ55+i6YeP6KGo56S6XHJcbiAgICAgICAgICAgIGxldCBwb3M6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMiggeCwgeSApO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWxlcnQoIFwiZXZ0IC4gdGFyZ2V05Li6bnVsbFwiICk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcImV2dCAuIHRhcmdldOS4um51bGxcIiApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWwhkRPTSBFdmVudOWvueixoeS/oeaBr+i9rOaNouS4uuaIkeS7rOiHquW3seWumuS5ieeahENhbnZhc01vdXNlRXZlbnTkuovku7ZcclxuICAgIHByaXZhdGUgX3RvQ2FudmFzTW91c2VFdmVudCAoIGV2dDogRXZlbnQsIHR5cGU6IEVJbnB1dEV2ZW50VHlwZSApOiBDYW52YXNNb3VzZUV2ZW50XHJcbiAgICB7XHJcbiAgICAgICAgLy8g5ZCR5LiL6L2s5Z6L77yM5bCGRXZlbnTovazmjaLkuLpNb3VzZUV2ZW50XHJcbiAgICAgICAgbGV0IGV2ZW50OiBNb3VzZUV2ZW50ID0gZXZ0IGFzIE1vdXNlRXZlbnQ7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VET1dOICYmIGV2ZW50LmJ1dHRvbiA9PT0gMiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1JpZ2h0TW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VVUCAmJiBldmVudC5idXR0b24gPT09IDIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faXNSaWdodE1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbk51bTogbnVtYmVyID0gZXZlbnQuYnV0dG9uO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuX2lzUmlnaHRNb3VzZURvd24gJiYgdHlwZSA9PT0gRUlucHV0RXZlbnRUeXBlLk1PVVNFRFJBRyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidXR0b25OdW0gPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bCG5a6i5oi35Yy655qE6byg5qCHcG9z5Y+Y5o2i5YiwQ2FudmFz5Z2Q5qCH57O75Lit6KGo56S6XHJcbiAgICAgICAgbGV0IG1vdXNlUG9zaXRpb246IFZlY3RvcjIgPSB0aGlzLnZpZXdwb3J0VG9DYW52YXNDb29yZGluYXRlKCBldmVudCApO1xyXG4gICAgICAgIC8vIOWwhkV2ZW505LiA5Lqb6KaB55So5Yiw55qE5L+h5oGv5Lyg6YCS57uZQ2FudmFzTW91c2VFdmVudOW5tui/lOWbnlxyXG4gICAgICAgIGxldCBjYW52YXNNb3VzZUV2ZW50OiBDYW52YXNNb3VzZUV2ZW50ID0gbmV3IENhbnZhc01vdXNlRXZlbnQoIHR5cGUsIG1vdXNlUG9zaXRpb24sIGJ1dHRvbk51bSwgZXZlbnQuYWx0S2V5LCBldmVudC5jdHJsS2V5LCBldmVudC5zaGlmdEtleSApO1xyXG4gICAgICAgIHJldHVybiBjYW52YXNNb3VzZUV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWwhkRPTSBFdmVudOWvueixoeS/oeaBr+i9rOaNouS4uuaIkeS7rOiHquW3seWumuS5ieeahEtleWJvYXJk5LqL5Lu2XHJcbiAgICBwcml2YXRlIF90b0NhbnZhc0tleUJvYXJkRXZlbnQgKCBldnQ6IEV2ZW50LCB0eXBlOiBFSW5wdXRFdmVudFR5cGUgKTogQ2FudmFzS2V5Qm9hcmRFdmVudFxyXG4gICAge1xyXG4gICAgICAgIGxldCBldmVudDogS2V5Ym9hcmRFdmVudCA9IGV2dCBhcyBLZXlib2FyZEV2ZW50O1xyXG4gICAgICAgIC8vIOWwhkV2ZW505LiA5Lqb6KaB55So5Yiw55qE5L+h5oGv5Lyg6YCS57uZQ2FudmFzS2V5Qm9hcmRFdmVudOW5tui/lOWbnlxyXG4gICAgICAgIGxldCBjYW52YXNLZXlib2FyZEV2ZW50OiBDYW52YXNLZXlCb2FyZEV2ZW50ID0gbmV3IENhbnZhc0tleUJvYXJkRXZlbnQoIHR5cGUsIGV2ZW50LmtleSwgZXZlbnQua2V5Q29kZSwgZXZlbnQucmVwZWF0LCBldmVudC5hbHRLZXksIGV2ZW50LmN0cmxLZXksIGV2ZW50LnNoaWZ0S2V5ICk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhc0tleWJvYXJkRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5pe277yMdGltZXJz5piv56m65YiX6KGoXHJcbiAgICAvLyDkuLrkuoblh4/lsJHlhoXlrZjmnpDmnoTvvIzmiJHku6zlnKhyZW1vdmVUaW1lcuaXtu+8jOW5tuS4jeS7jnRpbWVyc+S4reWIoOmZpOaOiXRpbWVy77yM6ICM5piv6K6+572uZW5hYmxlZOS4umZhbHNlXHJcbiAgICAvLyDov5nmoLforqnlhoXlrZjkvb/nlKjph4/lkozmnpDmnoTovr7liLDnm7jlr7nlubPooaHnirbmgIFcclxuICAgIC8vIOavj+asoea3u+WKoOS4gOS4quiuoeaXtuWZqOaXtu+8jOWFiOafpeeci3RpbWVyc+WIl+ihqOS4reaYr+WQpuacieayoeacieaXtuWAmeeUqOeahHRpbWVy77yM5pyJ55qE6K+d77yM6L+U5Zue6K+ldGltZXLnmoRpZOWPt1xyXG4gICAgLy8g5aaC5p6c5rKh5pyJ5Y+v55So55qEdGltZXLvvIzlsLHph43mlrBuZXfkuIDkuKp0aW1lcu+8jOW5tuiuvue9ruWFtmlk5Y+35Lul5Y+K5YW25LuW5bGe5oCnXHJcbiAgICBwdWJsaWMgYWRkVGltZXIgKCBjYWxsYmFjazogVGltZXJDYWxsYmFjaywgdGltZW91dDogbnVtYmVyID0gMS4wLCBvbmx5T25jZTogYm9vbGVhbiA9IGZhbHNlLCBkYXRhOiBhbnkgPSB1bmRlZmluZWQgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRpbWVyOiBUaW1lclxyXG4gICAgICAgIGxldCBmb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMudGltZXJzLmxlbmd0aDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcjogVGltZXIgPSB0aGlzLnRpbWVyc1sgaSBdO1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyLmVuYWJsZWQgPT09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNhbGxiYWNrRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aW1lci50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNvdW50ZG93biA9IHRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICB0aW1lci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRpbWVyLm9ubHlPbmNlID0gb25seU9uY2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZXIuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4jeWtmOWcqO+8jOWwseaWsOWIm+W7uuS4gOS4qlRpbWVy5a+56LGhXHJcbiAgICAgICAgdGltZXIgPSBuZXcgVGltZXIoIGNhbGxiYWNrICk7XHJcbiAgICAgICAgdGltZXIuY2FsbGJhY2tEYXRhID0gZGF0YTtcclxuICAgICAgICB0aW1lci50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aW1lci5jb3VudGRvd24gPSB0aW1lb3V0O1xyXG4gICAgICAgIHRpbWVyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRpbWVyLmlkID0gKyt0aGlzLl90aW1lSWQ7IC8vIOeUseS6juWIneWni+WMluaXtmlk5Li6LTEs5omA5Lul5YmNKytcclxuICAgICAgICB0aW1lci5vbmx5T25jZSA9IG9ubHlPbmNlOyAvL+iuvue9ruaYr+WQpuaYr+S4gOasoeWbnuiwg+i/mOaYr+mHjeWkjeWbnuiwg1xyXG4gICAgICAgIC8vIOa3u+WKoOWIsHRpbWVyc+WIl+ihqOS4reWOu1xyXG4gICAgICAgIHRoaXMudGltZXJzLnB1c2goIHRpbWVyICk7XHJcbiAgICAgICAgLy8g6L+U5Zue5paw5re75Yqg55qEdGltZXLnmoRpZOWPt1xyXG4gICAgICAgIHJldHVybiB0aW1lci5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLnmja5pZOWcqHRpbWVyc+WIl+ihqOS4reafpeaJvlxyXG4gICAgLy8g5aaC5p6c5om+5Yiw77yM5YiZ6K6+572udGltZXLnmoRlbmFibGVk5Li6ZmFsc2XvvIzlubbov5Tlm550cnVlXHJcbiAgICAvLyDlpoLmsqHmib7liLDvvIzov5Tlm55mYWxzZVxyXG4gICAgcHVibGljIHJlbW92ZVRpbWVyICggaWQ6IG51bWJlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy50aW1lcnMubGVuZ3RoOyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnRpbWVyc1sgaSBdLmlkID09PSBpZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lcjogVGltZXIgPSB0aGlzLnRpbWVyc1sgaSBdO1xyXG4gICAgICAgICAgICAgICAgdGltZXIuZW5hYmxlZCA9IGZhbHNlOyAvLyDlj6rmmK9lbmFibGVk6K6+572u5Li6ZmFsc2XvvIzlubbmsqHmnInku47mlbDnu4TkuK3liKDpmaTmjolcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBfaGFuZGxlVGltZXJz56eB5pyJ5pa55rOV6KKrRXZlbnRJbnRlcmFjdGlvbueahHVwZGF0ZeWHveaVsOiwg+eUqFxyXG4gICAgLy8gdXBkYXRl5Ye95pWw56ys5LqM5Liq5Y+C5pWw5piv5Lul56eS6KGo56S655qE5YmN5ZCO5bin5pe26Ze05beuXHJcbiAgICAvLyDmraPnrKblkIhfaGFuZGxlVGltZXJz5Y+C5pWw6KaB5rGCXHJcbiAgICAvLyDmiJHku6znmoTorqHml7blmajkvp3otZbkuo5yZXF1ZXN0QW5pbWF0aW9uRnJhbWXlm57osINcclxuICAgIC8vIOWmguaenOW9k+WJjUV2ZW50SW50ZXJhY3Rpb27msqHmnInosIPnlKhzdGFydOeahOivnVxyXG4gICAgLy8g5YiZ6K6h5pe25Zmo5LiN5Lya55Sf5pWIXHJcbiAgICBwcml2YXRlIF9oYW5kbGVUaW1lcnMgKCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyDpgY3ljobmlbTkuKp0aW1lcnPliJfooahcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbWVycy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGltZXI6IFRpbWVyID0gdGhpcy50aW1lcnNbIGkgXTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjXRpbWVyIGVuYWJsZWTkuLpmYWxzZe+8jOmCo+S5iOe7p+e7reW+queOr1xyXG4gICAgICAgICAgICBpZiAoIHRpbWVyLmVuYWJsZWQgPT09IGZhbHNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvdW50ZG93buWIneWni+WMluaXtiA9IHRpbWVvdXRcclxuICAgICAgICAgICAgLy8g5q+P5qyh6LCD55So5pys5Ye95pWw77yM5Lya5YeP5bCR5LiK5LiL5bin55qE5pe26Ze06Ze06ZqUXHJcbiAgICAgICAgICAgIC8vIOS7juiAjOW9ouaIkOWAkuiuoeaXtueahOaViOaenFxyXG4gICAgICAgICAgICB0aW1lci5jb3VudGRvd24gLT0gaW50ZXJ2YWxTZWM7XHJcblxyXG4gICAgICAgICAgICAvLyDlpoLmnpxjb3VudGRvd24g5bCP5LqOIDAuMO+8jOmCo+S5iOivtOaYjuaXtumXtOWIsOS6hlxyXG4gICAgICAgICAgICAvLyDopoHop6blj5Hlm57osIPkuoZcclxuICAgICAgICAgICAgLy8g5LuO6L+Z6YeM55yL5Yiw77yM5a6e6ZmF5LiKdGltZXLlubbkuI3mmK/lvojnsr7noa7nmoRcclxuICAgICAgICAgICAgLy8g5Li+5Liq5L6L5a2Q77yM5YGH6K6+5oiR5LusdXBkYXRl5q+P5qyhMC4xNuenklxyXG4gICAgICAgICAgICAvLyDmiJHku6znmoR0aW1lcuiuvue9rjAuM+enkuWbnuiwg+S4gOasoVxyXG4gICAgICAgICAgICAvLyDpgqPkuYjlrp7pmYXkuIrmmK8gKCAwLjMgLSAwLjMyICkgPCAwICzop6blj5Hlm57osINcclxuICAgICAgICAgICAgaWYgKCB0aW1lci5jb3VudGRvd24gPCAwLjAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyDosIPnlKjlm57osIPlh73mlbBcclxuICAgICAgICAgICAgICAgIHRpbWVyLmNhbGxiYWNrKCB0aW1lci5pZCwgdGltZXIuY2FsbGJhY2tEYXRhICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c6K+l6K6h5pe25Zmo6ZyA6KaB6YeN5aSN6Kem5Y+RXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRpbWVyLm9ubHlPbmNlID09PSBmYWxzZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oiR5Lus6YeN5paw5bCGY291bnRkb3du6K6+572u5Li6dGltZW91dFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeUseatpOWPr+inge+8jHRpbWVvdXTkuI3kvJrmm7TmlLnvvIzlroPop4Tlrprkuobop6blj5HnmoTml7bpl7Tpl7TpmpRcclxuICAgICAgICAgICAgICAgICAgICAvLyDmr4/mrKHmm7TmlrDnmoTmmK9jb3VudGRvd27lgJLorqHml7blmahcclxuICAgICAgICAgICAgICAgICAgICB0aW1lci5jb3VudGRvd24gPSB0aW1lci50aW1lb3V0OyAvL+W+iOeyvuWmmeeahOS4gOS4quaKgOW3p1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7ICAvLyDlpoLmnpzor6XorqHml7blmajlj6rpnIDopoHop6blj5HkuIDmrKHvvIzpgqPkuYjmiJHku6zlsLHliKDpmaTmjonor6XorqHml7blmahcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRpbWVyKCB0aW1lci5pZCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERpY3Rpb25hcnk8VD4ge1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHVzZUVTNk1hcDogYm9vbGVhbiA9IHRydWUgKSB7XHJcbiAgICAgICAgaWYgKCB1c2VFUzZNYXAgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faXRlbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGggKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyAoIGtleTogc3RyaW5nICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICggdGhpcy5faXRlbXMgaW5zdGFuY2VvZiBNYXAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5oYXMoIGtleSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHRoaXMuX2l0ZW1zWyBrZXkgXSAhPT0gdW5kZWZpbmVkICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kICgga2V5OiBzdHJpbmcgKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIE1hcCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmdldCgga2V5ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc2VydCAoIGtleTogc3RyaW5nLCB2YWx1ZTogVCApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zIGluc3RhbmNlb2YgTWFwICkge1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5zZXQoIGtleSwgdmFsdWUgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zWyBrZXkgXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUgKCBrZXk6IHN0cmluZyApOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmV0OiBUIHwgdW5kZWZpbmVkID0gdGhpcy5maW5kKCBrZXkgKTtcclxuICAgICAgICBpZiAoIHJldCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdGhpcy5faXRlbXMgaW5zdGFuY2VvZiBNYXAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZSgga2V5ICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2l0ZW1zWyBrZXkgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY291bnQtLTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtleXMgKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQga2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zIGluc3RhbmNlb2YgTWFwICkge1xyXG4gICAgICAgICAgICBsZXQga2V5QXJyYXkgPSB0aGlzLl9pdGVtcy5rZXlzKCk7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBrZXkgb2Yga2V5QXJyYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goIGtleSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICggdmFyIHByb3AgaW4gdGhpcy5faXRlbXMgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuX2l0ZW1zLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKCBwcm9wICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2YWx1ZXMgKCk6IFRbXSB7XHJcbiAgICAgICAgbGV0IHZhbHVlczogVFtdID0gW107XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pdGVtcyBpbnN0YW5jZW9mIE1hcCApIHtcclxuICAgICAgICAgICAgLy8g5LiA5a6a6KaB55Sob2bvvIzlkKbliJnlh7rplJlcclxuICAgICAgICAgICAgbGV0IHZBcnJheSA9IHRoaXMuX2l0ZW1zLnZhbHVlcygpO1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgdmFsdWUgb2YgdkFycmF5ICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goIHZhbHVlIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBwcm9wIGluIHRoaXMuX2l0ZW1zICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9pdGVtcy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKCB0aGlzLl9pdGVtc1sgcHJvcCBdICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtczogKCB7IFsgazogc3RyaW5nIF06IFQgfSApIHwgTWFwPHN0cmluZywgVD47XHJcbiAgICBwcml2YXRlIF9jb3VudDogbnVtYmVyID0gMDtcclxuXHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgVHlwZWRBcnJheUxpc3Q8VCBleHRlbmRzIFVpbnQxNkFycmF5IHwgRmxvYXQzMkFycmF5IHwgVWludDhBcnJheT4ge1xyXG4gICAgLy8g5YaF6YOo5L2/55So57G75Z6L5pWw57uE77yM57G75Z6L5pWw57uE5b+F6aG75pivVWludDE2QXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBVaW50OEFycmF55LmL5LiAXHJcbiAgICBwcml2YXRlIF9hcnJheTogVDtcclxuXHJcbiAgICAvLyDlpoLmnpzpnIDopoHlnKhBcnJheUxpc3Q8VD7nmoTmnoTpgKDlh73mlbDkuK1uZXfkuIDkuKrnsbvlnovmlbDnu4TvvIzlv4XpobvopoHmj5Dkvpvor6XnsbvlnovmlbDnu4TnmoTmnoTpgKDlh73mlbDnrb7lkI1cclxuICAgIHByaXZhdGUgX3R5cGVkQXJyYXlDb25zdHJ1Y3RvcjogKCBuZXcgKCBsZW5ndGg6IG51bWJlciApID0+IFQgKTtcclxuXHJcbiAgICAvLyBfbGVuZ3Ro6KGo56S65b2T5YmN5bey57uP5L2/55So6L+H55qE5YWD57Sg5Liq5pWw77yM6ICMX2NhcGFjaXR55piv5oyH5b2T5YmN5bey57uP6aKE5YWI5YaF5a2Y5YiG6YWN5aW955qE55qE5YWD57Sg5Liq5pWwXHJcbiAgICBwcml2YXRlIF9sZW5ndGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NhcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gICAgLy8g5o+Q5L6b5LiA5Liq5Zue6LCD5Ye95pWw77yM5b2TX2NhcGFjaXR55Y+R55Sf5pS55Y+Y5pe277yM6LCD55So6K+l5Zue6LCD5Ye95pWwXHJcbiAgICBwdWJsaWMgY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2s6ICggKCBhcnJheUxpc3Q6IFR5cGVkQXJyYXlMaXN0PFQ+ICkgPT4gdm9pZCApIHwgbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCB0eXBlZEFycmF5Q29uc3RydWN0b3I6IG5ldyAoIGNhcGFjaXR5OiBudW1iZXIgKSA9PiBULCBjYXBhY2l0eTogbnVtYmVyID0gOCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdHlwZWRBcnJheUNvbnN0cnVjdG9yID0gdHlwZWRBcnJheUNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5OyAvLyDogIzpooTlhYjliIbphY3lhoXlrZjnmoTkuKrmlbDkuLpjYXBhY2l0eVxyXG5cclxuICAgICAgICAvLyDnoa7kv53liJ3lp4vljJbml7boh7PlsJHmnIk45Liq5YWD57Sg55qE5a656YePXHJcbiAgICAgICAgaWYgKCB0aGlzLl9jYXBhY2l0eSA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IDg7IC8vIOm7mOiupOWIhumFjTjkuKrlhYPntKDlhoXlrZhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IHRoaXMuX3R5cGVkQXJyYXlDb25zdHJ1Y3RvciggdGhpcy5fY2FwYWNpdHkgKTsgLy8g6aKE5YWI5YiG6YWNY2FwYWNpdHnkuKrlhYPntKDnmoTlhoXlrZhcclxuXHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDsgIC8vIOWIneWni+WMluaXtu+8jOWFtl9sZW5ndGjkuLowXHJcblxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsOyAvL+m7mOiupOaDheWGteS4i++8jOWbnuiwg+WHveaVsOS4um51bGxcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCAoKTogbnVtYmVyIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjYXBhY2l0eSAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZUFycmF5ICgpOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacgOeugOWNlemrmOaViOeahOWkhOeQhuaWueW8j++8jOebtOaOpeiuvue9rl9sZW5ndGjkuLow77yM6YeN55So5pW05Liq57G75Z6L5pWw57uEXHJcbiAgICBwdWJsaWMgY2xlYXIgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoQXJyYXkobnVtczpudW1iZXJbXSk6dm9pZHtcclxuICAgICAgICBmb3IobGV0IGk6bnVtYmVyPTA7IGkgPCBudW1zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnB1c2gobnVtc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoICggbnVtOiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qEbGVuZ3Ro6LaF6L+H5LqG6aKE5YWI5YiG6YWN55qE5YaF5a2Y5a656YePXHJcbiAgICAgICAgLy8g6YKj5bCx6ZyA6KaB6L+b6KGM5YaF5a2Y5omp5a65XHJcbiAgICAgICAgaWYgKCB0aGlzLl9sZW5ndGggPj0gdGhpcy5fY2FwYWNpdHkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmnIDlpKflrrnph4/mlbA+MFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2NhcGFjaXR5ID4gMCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v5aKe5Yqg5b2T5YmN55qE5pyA5aSn5a656YeP5pWwKOavj+asoee/u+WAjeWinuWKoClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ICs9IHRoaXMuX2NhcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiY3VyciBjYXBhY2l0eSA9IFwiICsgdGhpcy5fY2FwYWNpdHkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgb2xkQXJyYXk6IFQgPSB0aGlzLl9hcnJheTtcclxuICAgICAgICAgICAgdGhpcy5fYXJyYXkgPSBuZXcgdGhpcy5fdHlwZWRBcnJheUNvbnN0cnVjdG9yKCB0aGlzLl9jYXBhY2l0eSApO1xyXG4gICAgICAgICAgICAvLyDlsIZvbGRBcnJheeS4reeahOaVsOaNruWkjeWItuWIsOaWsOW7uueahGFycmF55LitXHJcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnNldCggb2xkQXJyYXkgKTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5Zue6LCD5Ye95pWw77yM5YiZ6LCD55So5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jYXBhY2l0eUNoYW5nZWRDYWxsYmFjayApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwYWNpdHlDaGFuZ2VkQ2FsbGJhY2soIHRoaXMgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYXJyYXlbIHRoaXMuX2xlbmd0aCBdID0gbnVtO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpZHg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIGlkeCA8IDAgfHwgaWR4ID49IHRoaXMubGVuZ3RoIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLntKLlvJXotornlYzvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpg73mmK9udW1iZXLnsbvlnotcclxuICAgICAgICBsZXQgcmV0OiBudW1iZXIgPSB0aGlzLl9hcnJheVsgaWR4IF07XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViQXJyYXkgKCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLmxlbmd0aCApOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LnN1YmFycmF5KCBzdGFydCwgZW5kICkgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2xpY2UgKCBzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLmxlbmd0aCApOiBUXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCBzdGFydCwgZW5kICkgYXMgVDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IE1hdGhIZWxwZXIgfSBmcm9tIFwiLi4vbWF0aC9NYXRoSGVscGVyXCI7XHJcbmltcG9ydCB7IEZydXN0dW19IGZyb20gXCIuL0ZydXN0dW1cIjtcclxuZXhwb3J0IGVudW0gRUNhbWVyYVR5cGUge1xyXG4gICAgRlBTQ0FNRVJBLFxyXG4gICAgRkxZQ0FNRVJBXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFcclxue1xyXG4gICAgcHVibGljIGdldCBmb3ZZICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm92WTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZvdlkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9mb3ZZID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuZWFyICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5lYXIgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9uZWFyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmYXIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmYXIgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9mYXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFzcGVjdFJhdGlvICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXNwZWN0UmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhc3BlY3RSYXRpbyAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwb3NpdGlvbiAoKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBvc2l0aW9uICggdmFsdWU6IFZlY3RvcjMgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZpZXdwb3J0ICggeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5nbC5zY2lzc29yKHgseSx3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Vmlld3BvcnQgKCk6IEludDMyQXJyYXlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nbC5nZXRQYXJhbWV0ZXIoIHRoaXMuZ2wuVklFV1BPUlQgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WNg+S4h+WIq+eUqHRoaXMucG9zaXRpb24ueCA9IHh4eO+8jOWboOS4uuaXoOazleiuvue9rnRoaXMuX3ZpZXdEaXJ0eVxyXG4gICAgLy/or7fnlKjkuIvpnaLnmoTkuInkuKpzZXTmlrnms5VcclxuICAgIHB1YmxpYyBzZXQgeCAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLnggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbi55ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB6ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24ueiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb24ueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHogKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbi56O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeEF4aXMgKCk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feEF4aXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5QXhpcyAoKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl95QXhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHpBeGlzICgpOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pBeGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdHlwZSAoKTogRUNhbWVyYVR5cGVcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+avlOi+g+eJueWIq++8jOmcgOimgemHjeaWsOS/ruato+S4gOS6m+WGheWuue+8jOaIluiAheebtOaOpeemgeatouS/ruaUuXR5cGVcclxuICAgIHB1YmxpYyBzZXQgdHlwZSAoIHZhbHVlOiBFQ2FtZXJhVHlwZSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVmdCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByaWdodCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm90dG9tICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm90dG9tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdG9wICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIHB1YmxpYyBjb250cm9sQnlNb3VzZTogYm9vbGVhbjtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGZvdlk6IG51bWJlciA9IDQ1LjAsIHpOZWFyOiBudW1iZXIgPSAxLCB6RmFyOiBudW1iZXIgPSAxMDAwIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICAgICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgICB0aGlzLl9mb3ZZID0gTWF0aEhlbHBlci50b1JhZGlhbiggZm92WSApO1xyXG5cclxuICAgICAgICB0aGlzLl9uZWFyID0gek5lYXI7XHJcbiAgICAgICAgdGhpcy5fZmFyID0gekZhcjtcclxuXHJcbiAgICAgICAgdGhpcy5fdG9wID0gdGhpcy5fbmVhciAqIE1hdGgudGFuKCB0aGlzLl9mb3ZZICogMC41ICksXHJcbiAgICAgICAgdGhpcy5fcmlnaHQgPSB0aGlzLl90b3AgKiB0aGlzLl9hc3BlY3RSYXRpbztcclxuICAgICAgICB0aGlzLl9ib3R0b20gPSAtdGhpcy5fdG9wO1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSAtdGhpcy5fcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5fZnJ1c3R1bSA9IG5ldyBGcnVzdHVtKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Byb2plY3Rpb25NYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX2ludlZpZXdNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdQcm9qTWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICB0aGlzLl9pbnZWaWV3UHJvak1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnlNb3VzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUgKCBpbnRlcnZhbFNlYzogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0aW9uTWF0cml4ID0gTWF0cml4NC5wZXJzcGVjdGl2ZSggdGhpcy5mb3ZZLCB0aGlzLmFzcGVjdFJhdGlvLCB0aGlzLm5lYXIsIHRoaXMuZmFyICk7XHJcbiAgICAgICAgdGhpcy5fY2FsY1ZpZXdNYXRyaXgoKTtcclxuICAgICAgICBNYXRyaXg0LnByb2R1Y3QoIHRoaXMuX3Byb2plY3Rpb25NYXRyaXgsIHRoaXMuX3ZpZXdNYXRyaXgsIHRoaXMuX3ZpZXdQcm9qTWF0cml4ICk7XHJcbiAgICAgICAgdGhpcy5fdmlld1Byb2pNYXRyaXguY29weSggdGhpcy5faW52Vmlld1Byb2pNYXRyaXggKTtcclxuICAgICAgICB0aGlzLl92aWV3UHJvak1hdHJpeC5nZXRJbnZlcnNlKCB0aGlzLl9pbnZWaWV3UHJvak1hdHJpeCApO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5bGA6YOo5Z2Q5qCH57O75LiL55qE5YmN5ZCO6L+Q5YqoXHJcbiAgICBwdWJsaWMgbW92ZUZvcndhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3pBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueiArPSB0aGlzLl96QXhpcy56ICogc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3pBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueSArPSB0aGlzLl96QXhpcy55ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogKz0gdGhpcy5fekF4aXMueiAqIHNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+ezu+S4i+eahOW3puWPs+i/kOWKqFxyXG4gICAgcHVibGljIG1vdmVSaWdodHdhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3hBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueiArPSB0aGlzLl94QXhpcy56ICogc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi54ICs9IHRoaXMuX3hBeGlzLnggKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueSArPSB0aGlzLl94QXhpcy55ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnogKz0gdGhpcy5feEF4aXMueiAqIHNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+ezu+S4i+eahOS4iuS4i+i/kOWKqFxyXG4gICAgcHVibGljIG1vdmVVcHdhcmQgKCBzcGVlZDogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZQU0NBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi55ICs9IHNwZWVkO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24ueCArPSB0aGlzLl95QXhpcy54ICogc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLnkgKz0gdGhpcy5feUF4aXMueSAqIHNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbi56ICs9IHRoaXMuX3lBeGlzLnogKiBzcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsYDpg6jlnZDmoIfovbTnmoTlt6blj7Pml4vovaxcclxuICAgIHB1YmxpYyB5YXcgKCBhbmdsZTogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBNYXRyaXg0Lm0wLnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgYW5nbGUgPSBNYXRoSGVscGVyLnRvUmFkaWFuKCBhbmdsZSApO1xyXG4gICAgICAgIGlmICggdGhpcy5fdHlwZSA9PT0gRUNhbWVyYVR5cGUuRlBTQ0FNRVJBIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAucm90YXRlKCBhbmdsZSwgVmVjdG9yMy51cCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTWF0cml4NC5tMC5yb3RhdGUoIGFuZ2xlLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWF0cml4NC5tMC5tdWx0aXBseVZlYzMoIHRoaXMuX3pBeGlzLCB0aGlzLl96QXhpcyApO1xyXG4gICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl94QXhpcywgdGhpcy5feEF4aXMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+i9tOeahOS4iuS4i+aXi+i9rFxyXG4gICAgcHVibGljIHBpdGNoICggYW5nbGU6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTWF0cml4NC5tMC5zZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIGFuZ2xlID0gTWF0aEhlbHBlci50b1JhZGlhbiggYW5nbGUgKTtcclxuICAgICAgICBNYXRyaXg0Lm0wLnJvdGF0ZSggYW5nbGUsIHRoaXMuX3hBeGlzICk7XHJcbiAgICAgICAgTWF0cml4NC5tMC5tdWx0aXBseVZlYzMoIHRoaXMuX3lBeGlzLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl96QXhpcywgdGhpcy5fekF4aXMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WxgOmDqOWdkOagh+i9tOeahOa7mui9rFxyXG4gICAgcHVibGljIHJvbGwgKCBhbmdsZTogbnVtYmVyICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3R5cGUgPT09IEVDYW1lcmFUeXBlLkZMWUNBTUVSQSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmdsZSA9IE1hdGhIZWxwZXIudG9SYWRpYW4oIGFuZ2xlICk7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAuc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICAgICAgTWF0cml4NC5tMC5yb3RhdGUoIGFuZ2xlLCB0aGlzLl96QXhpcyApO1xyXG4gICAgICAgICAgICBNYXRyaXg0Lm0wLm11bHRpcGx5VmVjMyggdGhpcy5feEF4aXMsIHRoaXMuX3hBeGlzICk7XHJcbiAgICAgICAgICAgIE1hdHJpeDQubTAubXVsdGlwbHlWZWMzKCB0aGlzLl95QXhpcywgdGhpcy5feUF4aXMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ku47lvZPliY1wb3N0aXRpb27lkox0YXJnZXTojrflvpd2aWV355+p6Zi1XHJcbiAgICAvL+W5tuS4lOS7jnZpZXfnn6npmLXmir3lj5Zmb3J3YXJkLHVwLHJpZ2h05pa55ZCR55+i6YePXHJcbiAgICBwdWJsaWMgbG9va0F0ICggdGFyZ2V0OiBWZWN0b3IzLCB1cDogVmVjdG9yMyA9IFZlY3RvcjMudXAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBNYXRyaXg0Lmxvb2tBdCggdGhpcy5fcG9zaXRpb24sIHRhcmdldCwgdXAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5feEF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAwIF07XHJcbiAgICAgICAgdGhpcy5feUF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxIF07XHJcbiAgICAgICAgdGhpcy5fekF4aXMueCA9IHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAyIF07XHJcblxyXG4gICAgICAgIHRoaXMuX3hBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNCBdO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNSBdO1xyXG4gICAgICAgIHRoaXMuX3pBeGlzLnkgPSB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgNiBdO1xyXG5cclxuICAgICAgICB0aGlzLl94QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDggXTtcclxuICAgICAgICB0aGlzLl95QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDkgXTtcclxuICAgICAgICB0aGlzLl96QXhpcy56ID0gdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDEwIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnZWaWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludlZpZXdNYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBwcm9qZWN0aW9uTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Rpb25NYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3UHJvamVjdGlvbk1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3UHJvak1hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludlZpZXdQcm9qZWN0aW9uTWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludlZpZXdQcm9qTWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZnJ1c3R1bSAoKTogRnJ1c3R1bVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mcnVzdHVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LuO5b2T5YmN6L205Lul5Y+KcG9zdGlvbuWQiOaIkHZpZXfnn6npmLVcclxuICAgIHByaXZhdGUgX2NhbGNWaWV3TWF0cml4ICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lm7rlrppmb3J3YXJk5pa55ZCRXHJcbiAgICAgICAgdGhpcy5fekF4aXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vZm9yd2FyZCBjcm9zcyByaWdodCA9IHVwXHJcbiAgICAgICAgVmVjdG9yMy5jcm9zcyggdGhpcy5fekF4aXMsIHRoaXMuX3hBeGlzLCB0aGlzLl95QXhpcyApO1xyXG4gICAgICAgIHRoaXMuX3lBeGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvL3VwIGNyb3NzIGZvcndhcmQgPSByaWdodFxyXG4gICAgICAgIFZlY3RvcjMuY3Jvc3MoIHRoaXMuX3lBeGlzLCB0aGlzLl96QXhpcywgdGhpcy5feEF4aXMgKTtcclxuICAgICAgICB0aGlzLl94QXhpcy5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHg6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5feEF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5feUF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcbiAgICAgICAgbGV0IHo6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggdGhpcy5fekF4aXMsIHRoaXMuX3Bvc2l0aW9uICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAwIF0gPSB0aGlzLl94QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxIF0gPSB0aGlzLl95QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAyIF0gPSB0aGlzLl96QXhpcy54O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAzIF0gPSAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA0IF0gPSB0aGlzLl94QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA1IF0gPSB0aGlzLl95QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA2IF0gPSB0aGlzLl96QXhpcy55O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA3IF0gPSAwLjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA4IF0gPSB0aGlzLl94QXhpcy56O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyA5IF0gPSB0aGlzLl95QXhpcy56O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxMCBdID0gdGhpcy5fekF4aXMuejtcclxuICAgICAgICB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgMTEgXSA9IDAuMDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDEyIF0gPSB4O1xyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXgudmFsdWVzWyAxMyBdID0geTtcclxuICAgICAgICB0aGlzLl92aWV3TWF0cml4LnZhbHVlc1sgMTQgXSA9IHo7XHJcbiAgICAgICAgdGhpcy5fdmlld01hdHJpeC52YWx1ZXNbIDE1IF0gPSAxLjA7XHJcblxyXG4gICAgICAgIC8v5rGCdmlld+eahOmAhuefqemYte+8jOS5n+WwseaYr+S4lueVjOefqemYtVxyXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXguZ2V0SW52ZXJzZSggdGhpcy5faW52Vmlld01hdHJpeCApO1xyXG4gICAgICAgIHRoaXMuX2ZydXN0dW0uYnVpbGRGcm9tQ2FtZXJhKCB0aGlzICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogRUNhbWVyYVR5cGUgPSBFQ2FtZXJhVHlwZS5GTFlDQU1FUkE7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgcHJpdmF0ZSBfeEF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgcHJpdmF0ZSBfeUF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMCwgMSwgMCApO1xyXG4gICAgcHJpdmF0ZSBfekF4aXM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggMCwgMCwgMSApO1xyXG5cclxuICAgIHByaXZhdGUgX25lYXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2ZhcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZm92WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYXNwZWN0UmF0aW86IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9wcm9qZWN0aW9uTWF0cml4OiBNYXRyaXg0O1xyXG4gICAgcHJpdmF0ZSBfdmlld01hdHJpeDogTWF0cml4NDtcclxuICAgIHByaXZhdGUgX2ludlZpZXdNYXRyaXg6IE1hdHJpeDQ7XHJcbiAgICBwcml2YXRlIF92aWV3UHJvak1hdHJpeDogTWF0cml4NDtcclxuICAgIHByaXZhdGUgX2ludlZpZXdQcm9qTWF0cml4OiBNYXRyaXg0O1xyXG5cclxuICAgIHByaXZhdGUgX2ZydXN0dW06IEZydXN0dW07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV2ViR0xBcHBsaWNhdGlvbiB9IGZyb20gXCIuLi93ZWJnbC9XZWJHTEFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IENhbnZhc0tleUJvYXJkRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50SW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQXBwbGljYXRpb24gZXh0ZW5kcyBXZWJHTEFwcGxpY2F0aW9uXHJcbntcclxuICAgIHB1YmxpYyBjYW1lcmE6IENhbWVyYTsgIC8vIOWcqFdlYkdMQXBwbGljYXRpb27nmoTln7rnoYDkuIrlop7liqDkuoblr7nmkYTlg4/mnLrns7vnu5/nmoTmlK/mjIFcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0QXR0cmlidXRlczogV2ViR0xDb250ZXh0QXR0cmlidXRlcyA9IHsgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSB9LCBuZWVkMmQ6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcywgY29udGV4dEF0dHJpYnV0ZXMsIG5lZWQyZCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSggdGhpcy5nbCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCA0NSwgMSwgMjAwMCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnogPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5a2Q57G7b3ZlcnJpZGUgdXBkYXRl5Ye95pWw5pe25b+F6aG76KaB6LCD55So5Z+657G75pys5pa55rOVXHJcbiAgICBwdWJsaWMgdXBkYXRlICggZWxhcHNlZE1zZWM6IG51bWJlciwgaW50ZXJ2YWxTZWM6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g6LCD55SoQ2FtZXJh5a+56LGh55qEdXBkYXRl77yM6L+Z5qC35bCx6IO95a6e5pe255qE6K6h566XY2FtZXJh55qE5oqV5b2x5ZKM6KeG5Zu+55+p6Zi1XHJcbiAgICAgICAgLy8g6L+Z5qC35omN6IO95L+d6K+B5pGE5YOP5py65q2j56Gu6L+Q6KGMXHJcbiAgICAgICAgLy8g5aaC5p6cQ2FtZXJhQXBwbGljYXRpb27nmoTlrZDnsbvopoblhpnvvIhvdmVycmlkZe+8ieacrOWHveaVsFxyXG4gICAgICAgIC8vIOmCo+S5iOW/hemhu+WcqOWHveaVsOeahOacgOWQjuS4gOWPpeS7o+eggeiwg+eUqDogc3VwZXIudXBkYXRlKGVsYXBzZWRNc2VjLGludGVydmFsU2VjKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZSggaW50ZXJ2YWxTZWMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhoXnva7kuIDkuKrpgJrnlKjnmoTmkYTlg4/mnLrmjInplK7kuovku7blk43lupTmk43kvZxcclxuICAgIC8vIOimhuWGme+8iO+8iVxyXG4gICAgcHVibGljIG9uS2V5UHJlc3MgKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZXZ0LmtleSA9PT0gXCJ3XCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUZvcndhcmQoIC0xICk7ICAgLy8g5pGE5YOP5py65ZCR5YmN6L+Q6KGMICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcInNcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRm9yd2FyZCggMSApOyAgICAvLyDmkYTlg4/mnLrlkJHlkI7ov5DooYxcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcImFcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlUmlnaHR3YXJkKCAxICk7ICAgLy8g5pGE5YOP5py65ZCR5Y+z6L+Q6KGMXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJkXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZVJpZ2h0d2FyZCggLTEgKTsgICAvLyDmkYTlg4/mnLrlkJHlt6bov5DooYxcclxuICAgICAgICB9IGVsc2UgaWYgKCBldnQua2V5ID09PSBcInpcIiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlVXB3YXJkKCAxICk7ICAgICAgIC8vIOaRhOWDj+acuuWQkeS4iui/kOihjFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2dC5rZXkgPT09IFwieFwiIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVVcHdhcmQoIC0xICk7ICAgICAgLy8g5pGE5YOP5py65ZCR5LiL6L+Q6KGMXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJ5XCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEueWF3KCAxICk7ICAgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRZ6L205peL6L2sXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PT0gXCJyXCIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucm9sbCggMSApOyAgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRa6L205peL6L2sXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZ0LmtleSA9PSBcInBcIiApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucGl0Y2goIDEgKTsgICAgICAgICAgICAvLyDmkYTlg4/mnLrnu5XmnKzouqvnmoRY6L205peL6L2sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtWZWN0b3IzfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCJcclxuaW1wb3J0IHtNYXRyaXg0fSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCJcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiXHJcbmltcG9ydCB7IFR5cGVkQXJyYXlMaXN0IH0gZnJvbSBcIi4uL2NvbW1vbi9jb250YWluZXIvVHlwZWRBcnJheUxpc3RcIjtcclxuaW1wb3J0IHsgRUF4aXNUeXBlIH0gZnJvbSBcIi4uL21hdGgvTWF0aEhlbHBlclwiO1xyXG5pbXBvcnQgeyBHTE1lc2hCdWlsZGVyIH0gZnJvbSBcIi4uL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5leHBvcnQgY2xhc3MgQ29vcmRTeXN0ZW1cclxue1xyXG4gICAgcHVibGljIHZpZXdwb3J0OiBudW1iZXJbXSA9IFtdOyAvLyDlvZPliY3lnZDmoIfns7vooqvnu5jliLblnKjlk6rkuKrop4blj6PkuK1cclxuICAgIHB1YmxpYyBheGlzOiBWZWN0b3IzOyAvLyDlvZPliY3lnZDmoIfns7vnu5Xlk6rkuKrovbTml4vovaxcclxuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyOyAvLyDlvZPliY3lnZDmoIfns7vnmoTml4vovaznmoTop5LluqYo5LiN5piv5byn5bqm77yBKVxyXG4gICAgcHVibGljIHBvczogVmVjdG9yMzsgLy8g5b2T5YmN5Z2Q5qCH57O755qE5L2N572u77yM5aaC5p6c5piv5aSa6KeG5Y+j5riy5p+T55qE6K+d77yM5bCx5Li6WzAsMCwwXVxyXG4gICAgcHVibGljIGlzRHJhd0F4aXM6IGJvb2xlYW47IC8vIOaYr+WQpue7mOWItuaXi+i9rOi9tFxyXG4gICAgcHVibGljIGlzRDNEOiBib29sZWFuOyAvLyDmmK/lkKbnu5jliLbkuLpcYkQzROW3puaJi+ezu1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHZpZXdwb3J0OiBudW1iZXJbXSwgcG9zOiBWZWN0b3IzID0gVmVjdG9yMy56ZXJvLCBheGlzOiBWZWN0b3IzID0gVmVjdG9yMy51cCwgYW5nbGU6IG51bWJlciA9IDAsIGlzRHJhd0F4aXM6IGJvb2xlYW4gPSBmYWxzZSwgaXNEM0Q6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuaXNEcmF3QXhpcyA9IGlzRHJhd0F4aXM7XHJcbiAgICAgICAgdGhpcy5pc0QzRCA9IGlzRDNEO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd0hlbHBlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRIaXRDb2xsb3I6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCggMSwgMSwgMCApO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2lyY2xlUG9pbnRzT25YWVBsYW5lICggcHRzOiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+LCByYWRpdXM6IG51bWJlciwgc2VnbWVudDogbnVtYmVyID0gMzIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHB0cy5jbGVhcigpO1xyXG4gICAgICAgIGxldCBzdGVwOiBudW1iZXIgPSBNYXRoLlBJIC8gc2VnbWVudDtcclxuICAgICAgICBsZXQgYW5nOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAoIGxldCBpOiBudW1iZXIgPSAwOyBpIDw9IHNlZ21lbnQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbmcgPSBpICogc3RlcDtcclxuICAgICAgICAgICAgcHRzLnB1c2goIE1hdGguY29zKCBhbmcgKSApO1xyXG4gICAgICAgICAgICBwdHMucHVzaCggTWF0aC5zaW4oIGFuZyApICk7XHJcbiAgICAgICAgICAgIHB0cy5wdXNoKCAwLjAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3RnVsbENvb3JkU3lzdGVtICggYnVpbGRlcjogR0xNZXNoQnVpbGRlciwgbWF0OiBNYXRyaXg0LCBsZW46IG51bWJlciA9IDEsIHJvdGF0ZUF4aXM6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgYnVpbGRlci5nbC5saW5lV2lkdGgoIDUgKTsgLy8g55SoNeS4quWDj+e0oOWkp+Wwj+eahOebtOW+hOe7mOWItue6v+aute+8jOS9huebruWJjeS7hVNhZmFyaea1j+iniOWZqOWunueOsFxyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZGlzYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7IC8vIOWFs+mXreW4p+e8k+WtmOa3seW6pua1i+ivlVxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTtcclxuICAgICAgICAvLyDmraN46L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDEuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIGxlbiwgMCwgMCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDotJ946L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDEuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIC1sZW4sIDAsIDAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2jeei9tFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAxLjAsIDAuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDEuMCwgMC4wICkudmVydGV4KCAwLjAsIGxlbiwgMC4wICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi0n3novbRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMS4wLCAwLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAxLjAsIDAuMCApLnZlcnRleCggMC4wLCAtbGVuLCAwLjAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5q2jeui9tFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAwLjAsIDEuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgbGVuICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDotJ966L20XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAtbGVuICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHJvdGF0ZUF4aXMgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c6KaB57uY5Yi25peL6L2s6L2077yM5YiZ57uY5Yi25Ye65p2lXHJcbiAgICAgICAgICAgIGxldCBzY2FsZTogVmVjdG9yMyA9IHJvdGF0ZUF4aXMuc2NhbGUoIGxlbiApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMC4wICkudmVydGV4KCAwLCAwLCAwICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIHNjYWxlLngsIHNjYWxlLnksIHNjYWxlLnogKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApOyAvLyDlsIbmuLLmn5PmlbDmja7mj5DkuqTnu5lHUFXov5vooYzmuLLmn5NcclxuICAgICAgICBidWlsZGVyLmdsLmxpbmVXaWR0aCggMSApOyAvLyDmgaLlpI3nur/lrr3kuLox5Liq5YOP57SgXHJcbiAgICAgICAgYnVpbGRlci5nbC5lbmFibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApOyAvLyDmgaLlpI3lvIDlp4vluKfnvJPlrZjmt7HluqbmtYvor5VcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRyYXdDb29yZFN5c3RlbSAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgaGl0QXhpczogRUF4aXNUeXBlLCBsZW46IG51bWJlciA9IDUsIHJvdGF0ZUF4aXM6IFZlY3RvcjMgfCBudWxsID0gbnVsbCwgaXNMZWZ0SGFuZG5lc3M6IGJvb2xlYW4gPSBmYWxzZSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgYnVpbGRlci5nbC5saW5lV2lkdGgoIDUgKTtcclxuICAgICAgICBidWlsZGVyLmdsLmRpc2FibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTtcclxuICAgICAgICBpZiAoIGhpdEF4aXMgPT09IEVBeGlzVHlwZS5YQVhJUyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuciwgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmcsIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5iICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIGxlbiwgMCwgMCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMS4wLCAwLjAsIDAuMCApLnZlcnRleCggMC4wLCAwLjAsIDAuMCApO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAxLjAsIDAuMCwgMC4wICkudmVydGV4KCBsZW4sIDAsIDAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaGl0QXhpcyA9PT0gRUF4aXNUeXBlLllBWElTIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLnIsIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5nLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuYiApLnZlcnRleCggMCwgbGVuLCAwICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDEuMCwgMC4wICkudmVydGV4KCAwLjAsIDAuMCwgMC4wICk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMS4wLCAwLjAgKS52ZXJ0ZXgoIDAuMCwgbGVuLCAwLjAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggaGl0QXhpcyA9PT0gRUF4aXNUeXBlLlpBWElTIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAsIDAsIC1sZW4gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIERyYXdIZWxwZXIuZGVmYXVsdEhpdENvbGxvci5yLCBEcmF3SGVscGVyLmRlZmF1bHRIaXRDb2xsb3IuZywgRHJhd0hlbHBlci5kZWZhdWx0SGl0Q29sbG9yLmIgKS52ZXJ0ZXgoIDAsIDAsIGxlbiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAwLjAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAxLjAgKS52ZXJ0ZXgoIDAuMCwgMC4wLCAtbGVuICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMS4wICkudmVydGV4KCAwLjAsIDAuMCwgbGVuICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggcm90YXRlQXhpcyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGU6IFZlY3RvcjMgPSByb3RhdGVBeGlzLnNjYWxlKCBsZW4gKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggMC4wLCAwLjAsIDAgKS52ZXJ0ZXgoIDAsIDAsIDAgKTtcclxuICAgICAgICAgICAgaWYgKCBpc0xlZnRIYW5kbmVzcyA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIDAuMCwgMC4wLCAwLjAgKS52ZXJ0ZXgoIHNjYWxlLngsIHNjYWxlLnksIC1zY2FsZS56ICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbG9yKCAwLjAsIDAuMCwgMC4wICkudmVydGV4KCBzY2FsZS54LCBzY2FsZS55LCBzY2FsZS56ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICBidWlsZGVyLmdsLmxpbmVXaWR0aCggMSApO1xyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZW5hYmxlKCBidWlsZGVyLmdsLkRFUFRIX1RFU1QgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgICAvIHwgICAgICAgLyAgIHxcclxuICAgICAgICAvICB8ICAgICAgLyAgIHxcclxuICAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgICB8ICAvMi0gLSAtfC0gLTZcclxuICAgICAgICB8IC8gICAgICAgfCAgL1xyXG4gICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgICAwLS0tLS0tLS0tNC9cclxuICAgICovXHJcbiAgICAvLyDmoLnmja5taW5z54K577yI5LiK5Zu+5Lit55qE6aG254K5Mu+8jOW3puS4i+WQju+8ieWSjG1heHPvvIjkuIrlm77kuK3nmoTpobbngrk177yM5Y+z5LiK5YmN77yJ54K555qE5Z2Q5qCH77yM5L2/55So5Y+C5pWw5oyH5a6a55qE6aKc6Imy57uY5Yi257q/5qGG57uR5a6a55uS77yM5a6D5piv5LiA5Liq56uL5pa55L2TXHJcbiAgICAvLyBHTE1lc2hCdWlsZGVy55qEYmVnaW4gLyBlbmTooqvosIPnlKjkuobkuInmrKFcclxuICAgIHB1YmxpYyBzdGF0aWMgZHJhd0JvdW5kQm94ICggYnVpbGRlcjogR0xNZXNoQnVpbGRlciwgbWF0OiBNYXRyaXg0LCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBjb2xvcjogVmVjdG9yNCA9IFZlY3RvcjQucmVkICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBidWlsZGVyLmdsLmRpc2FibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgICAgIC8vIOS9v+eUqExJTkVfTE9PUOe7mOWItuW6lemdou+8jOazqOaEj+mhtueCuemhuuW6j++8jOmAhuaXtumSiOaWueWQke+8jOagueaNruWPs+aJi+ieuuaXi+WumuWImeWPr+efpe+8jOazlee6v+acneWkllxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORV9MT09QICk7IC8vIOS9v+eUqOeahOaYr0xJTkVfTE9PUOWbvuWFg+e7mOWItuaooeW8j1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWlucy54LCBtaW5zLnksIG1pbnMueiApOyAgLy8gMiAgLSAtIC1cclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWlucy54LCBtaW5zLnksIG1heHMueiApOyAgLy8gMCAgLSAtICtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWF4cy54LCBtaW5zLnksIG1heHMueiApOyAgLy8gNCAgKyAtICtcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggbWF4cy54LCBtaW5zLnksIG1pbnMueiApOyAgLy8gNiAgKyAtIC1cclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26aG26Z2i77yM5rOo5oSP6aG254K56aG65bqP77yM6YCG5pe26ZKI5pa55ZCR77yM5qC55o2u5Y+z5omL6J665peL5a6a5YiZ5Y+v55+l77yM5rOV57q/5pyd5aSWXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWlucy56ICk7ICAvLyAzICAtICsgLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWlucy56ICk7ICAvLyA3ICArICsgLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWF4cy56ICk7ICAvLyA1ICArICsgK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWF4cy56ICk7ICAvLyAxICAtICsgK1xyXG4gICAgICAgICAgICBidWlsZGVyLmVuZCggbWF0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkvb/nlKhMSU5FU+e7mOWItlxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuTElORVMgKTsgLy8g5L2/55So55qE5pivTElORVPlm77lhYPnu5jliLbmqKHlvI9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1pbnMueCwgbWlucy55LCBtaW5zLnogKTsgICAvLyAyICAtIC0gLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWlucy56ICk7ICAgLy8gMyAgLSArIC1cclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1pbnMueCwgbWlucy55LCBtYXhzLnogKTsgICAvLyAwICAtIC0gK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtaW5zLngsIG1heHMueSwgbWF4cy56ICk7ICAgLy8gMSAgLSArICtcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1heHMueCwgbWlucy55LCBtYXhzLnogKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWF4cy56ICk7ICAgLy8gNSAgKyArICtcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIG1heHMueCwgbWlucy55LCBtaW5zLnogKTsgICAvLyA2ICArIC0gLVxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBtYXhzLngsIG1heHMueSwgbWlucy56ICk7ICAgLy8gNyAgKyArIC1cclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZGVyLmdsLmVuYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3V2lyZUZyYW1lQ3ViZUJveCAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgaGFsZkxlbjogbnVtYmVyID0gMC4yLCBjb2xvcjogVmVjdG9yNCA9IFZlY3RvcjQucmVkICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWluczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCAtaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7XHJcbiAgICAgICAgbGV0IG1heHM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMyggaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApO1xyXG4gICAgICAgIERyYXdIZWxwZXIuZHJhd0JvdW5kQm94KCBidWlsZGVyLCBtYXQsIG1pbnMsIG1heHMsIGNvbG9yICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgIC8gfCAgICAgICAvICAgfFxyXG4gICAgICAgLyAgfCAgICAgIC8gICB8XHJcbiAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgIHwgIC8yLSAtIC18LSAtNlxyXG4gICAgICAgfCAvICAgICAgIHwgIC9cclxuICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgIDAtLS0tLS0tLS00L1xyXG4gICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3VGV4dHVyZUN1YmVCb3ggKCBidWlsZGVyOiBHTE1lc2hCdWlsZGVyLCBtYXQ6IE1hdHJpeDQsIGhhbGZMZW46IG51bWJlciA9IDAuMiwgdGM6IG51bWJlcltdID0gW1xyXG4gICAgICAgIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsICAvLyDliY3pnaJcclxuICAgICAgICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAgLy8g5Y+z6Z2iXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgIC8vIOWQjumdolxyXG4gICAgICAgIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsICAvLyDlt6bpnaJcclxuICAgICAgICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAgLy8g5LiK6Z2iXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgIC8vIOS4i+mdolxyXG4gICAgXSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5YmN6Z2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5UUklBTkdMRV9GQU4gKTtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMCBdLCB0Y1sgMSBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDIgXSwgdGNbIDMgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyA0IF0sIHRjWyA1IF0gKS52ZXJ0ZXgoIGhhbGZMZW4sIGhhbGZMZW4sIGhhbGZMZW4gKTsgICAgLy8gNSAgKyArICtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgNiBdLCB0Y1sgNyBdICkudmVydGV4KCAtaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDEgIC0gKyArXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIC8vIOWPs+mdolxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuVFJJQU5HTEVfRkFOICk7XHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDggXSwgdGNbIDkgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgICAvLyA0ICArIC0gK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxMCBdLCB0Y1sgMTEgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyA2ICArIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxMiBdLCB0Y1sgMTMgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAvLyA3ICArICsgLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxNCBdLCB0Y1sgMTUgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgICAvLyA1ICArICsgK1xyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICAvLyDlkI7pnaJcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLlRSSUFOR0xFX0ZBTiApO1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxNiBdLCB0Y1sgMTcgXSApLnZlcnRleCggaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyA2ICArIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAxOCBdLCB0Y1sgMTkgXSApLnZlcnRleCggLWhhbGZMZW4sIC1oYWxmTGVuLCAtaGFsZkxlbiApOyAvLyAyICAtIC0gLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyMCBdLCB0Y1sgMjEgXSApLnZlcnRleCggLWhhbGZMZW4sIGhhbGZMZW4sIC1oYWxmTGVuICk7ICAvLyAzICAtICsgLVxyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyMiBdLCB0Y1sgMjMgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAvLyA3ICArICsgLVxyXG4gICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICAvLyDlt6bpnaJcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLlRSSUFOR0xFX0ZBTiApO1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAyNCBdLCB0Y1sgMjUgXSApLnZlcnRleCggLWhhbGZMZW4sIC1oYWxmTGVuLCAtaGFsZkxlbiApOyAgLy8gMiAgLSAtIC1cclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMjYgXSwgdGNbIDI3IF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCAtaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDI4IF0sIHRjWyAyOSBdICkudmVydGV4KCAtaGFsZkxlbiwgaGFsZkxlbiwgaGFsZkxlbiApOyAgICAvLyAxICAtICsgK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAzMCBdLCB0Y1sgMzEgXSApLnZlcnRleCggLWhhbGZMZW4sIGhhbGZMZW4sIC1oYWxmTGVuICk7ICAgLy8gMyAgLSArIC1cclxuICAgICAgICBidWlsZGVyLmVuZCggbWF0ICk7XHJcbiAgICAgICAgLy8g5LiK6Z2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5UUklBTkdMRV9GQU4gKTtcclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMzIgXSwgdGNbIDMzIF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCBoYWxmTGVuLCBoYWxmTGVuICk7ICAgIC8vIDEgIC0gKyArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDM0IF0sIHRjWyAzNSBdICkudmVydGV4KCBoYWxmTGVuLCBoYWxmTGVuLCBoYWxmTGVuICk7ICAgICAvLyA1ICArICsgK1xyXG4gICAgICAgIGJ1aWxkZXIudGV4Y29vcmQoIHRjWyAzNiBdLCB0Y1sgMzcgXSApLnZlcnRleCggaGFsZkxlbiwgaGFsZkxlbiwgLWhhbGZMZW4gKTsgICAgLy8gNyAgKyArIC1cclxuICAgICAgICBidWlsZGVyLnRleGNvb3JkKCB0Y1sgMzggXSwgdGNbIDM5IF0gKS52ZXJ0ZXgoIC1oYWxmTGVuLCBoYWxmTGVuLCAtaGFsZkxlbiApOyAgIC8vIDMgIC0gKyAtXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIC8vIOS4i+mdolxyXG4gICAgICAgIGJ1aWxkZXIuYmVnaW4oIGJ1aWxkZXIuZ2wuVFJJQU5HTEVfRkFOICk7XHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQwIF0sIHRjWyA0MSBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIGhhbGZMZW4gKTsgIC8vIDAgIC0gLSArXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQyIF0sIHRjWyA0MyBdICkudmVydGV4KCAtaGFsZkxlbiwgLWhhbGZMZW4sIC1oYWxmTGVuICk7IC8vIDIgIC0gLSAtXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQ0IF0sIHRjWyA0NSBdICkudmVydGV4KCBoYWxmTGVuLCAtaGFsZkxlbiwgLWhhbGZMZW4gKTsgIC8vIDYgICsgLSAtXHJcbiAgICAgICAgYnVpbGRlci50ZXhjb29yZCggdGNbIDQ2IF0sIHRjWyA0NyBdICkudmVydGV4KCBoYWxmTGVuLCAtaGFsZkxlbiwgaGFsZkxlbiApOyAgIC8vIDQgICsgLSArXHJcbiAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIOWFtuS4reWPguaVsHB0c+aYr0ZydXN0dW0ucG9pbnRz6L+U5Zue55qE5YyF5ZCrOOS4qumhtueCueeahOaVsOe7hFxyXG4gICAgcHVibGljIHN0YXRpYyBkcmF3V2lyZUZyYW1lRnJ1c3R1bSAoIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXIsIG1hdDogTWF0cml4NCwgcHRzOiBWZWN0b3IzW10sIGNvbG9yOiBWZWN0b3I0ID0gVmVjdG9yNC5yZWQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGJ1aWxkZXIuZ2wuZGlzYWJsZSggYnVpbGRlci5nbC5ERVBUSF9URVNUICk7XHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26L+R5bmz6Z2i55qE5Zub6L655b2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDAgXS54LCBwdHNbIDAgXS55LCBwdHNbIDAgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyAxIF0ueCwgcHRzWyAxIF0ueSwgcHRzWyAxIF0ueiApOyAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgMiBdLngsIHB0c1sgMiBdLnksIHB0c1sgMiBdLnogKTsgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDMgXS54LCBwdHNbIDMgXS55LCBwdHNbIDMgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORV9MT09Q57uY5Yi26L+c5bmz6Z2i55qE5Zub6L655b2iXHJcbiAgICAgICAgYnVpbGRlci5iZWdpbiggYnVpbGRlci5nbC5MSU5FX0xPT1AgKTsgLy8g5L2/55So55qE5pivTElORV9MT09Q5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDQgXS54LCBwdHNbIDQgXS55LCBwdHNbIDQgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyA1IF0ueCwgcHRzWyA1IF0ueSwgcHRzWyA1IF0ueiApOyAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNiBdLngsIHB0c1sgNiBdLnksIHB0c1sgNiBdLnogKTsgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDcgXS54LCBwdHNbIDcgXS55LCBwdHNbIDcgXS56ICk7ICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5lbmQoIG1hdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55SoTElORVPnu5jliLbnu5jliLbov5HlubPpnaLkuI7ov5zlubPpnaLnmoTlm5vmnaHovrlcclxuICAgICAgICBidWlsZGVyLmJlZ2luKCBidWlsZGVyLmdsLkxJTkVTICk7IC8vIOS9v+eUqOeahOaYr0xJTkVT5Zu+5YWD57uY5Yi25qih5byPXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDAgXS54LCBwdHNbIDAgXS55LCBwdHNbIDAgXS56ICk7ICAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNCBdLngsIHB0c1sgNCBdLnksIHB0c1sgNCBdLnogKTsgICAvLyBcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgMSBdLngsIHB0c1sgMSBdLnksIHB0c1sgMSBdLnogKTsgICAvLyBcclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyA1IF0ueCwgcHRzWyA1IF0ueSwgcHRzWyA1IF0ueiApOyAgIC8vIFxyXG5cclxuICAgICAgICAgICAgYnVpbGRlci5jb2xvciggY29sb3IuciwgY29sb3IuZywgY29sb3IuYiApLnZlcnRleCggcHRzWyAyIF0ueCwgcHRzWyAyIF0ueSwgcHRzWyAyIF0ueiApOyAgIC8vIFxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDYgXS54LCBwdHNbIDYgXS55LCBwdHNbIDYgXS56ICk7ICAgLy8gXHJcblxyXG4gICAgICAgICAgICBidWlsZGVyLmNvbG9yKCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iICkudmVydGV4KCBwdHNbIDMgXS54LCBwdHNbIDMgXS55LCBwdHNbIDMgXS56ICk7ICAgLy8gXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29sb3IoIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIgKS52ZXJ0ZXgoIHB0c1sgNyBdLngsIHB0c1sgNyBdLnksIHB0c1sgNyBdLnogKTsgICAvLyBcclxuXHJcbiAgICAgICAgICAgIGJ1aWxkZXIuZW5kKCBtYXQgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGRlci5nbC5lbmFibGUoIGJ1aWxkZXIuZ2wuREVQVEhfVEVTVCApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiO1xyXG5pbXBvcnQgeyBNYXRyaXg0IH0gZnJvbSBcIi4uL21hdGgvbWF0cml4NFwiO1xyXG5pbXBvcnQgeyBNYXRoSGVscGVyIH0gZnJvbSBcIi4uL21hdGgvTWF0aEhlbHBlclwiO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRnJ1c3R1bSB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9yZ2luOlZlY3RvcjMgfCBudWxsID0gbnVsbCxwb2ludHM4OlZlY3RvcjNbXSB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgLy/pooTlhYjlhoXlrZjliIbphY045Liq54K5XHJcbiAgICAgICAgaWYob3JnaW4gIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW4gPSBvcmdpbjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocG9pbnRzOCAhPT0gbnVsbCAmJiBwb2ludHM4Lmxlbmd0aCA9PT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IHBvaW50czg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IG5ldyBBcnJheSg4KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvaW50c1tpXSA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxhbmVzID0gbmV3IEFycmF5KDYpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGxhbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5lc1tpXSA9IG5ldyBWZWN0b3I0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOeUseS7o+eggeWPr+efpe+8jEZydXN0dW3kuK3nmoRvcmlnaW4scG9pbnRz5ZKMcGxhbmVz6YO95piv5Zyo5LiW55WM5Z2Q5qCH57O75Lit55qE6KGo56S6XHJcbiAgICBwdWJsaWMgYnVpbGRGcm9tQ2FtZXJhKGNhbWVyYTogQ2FtZXJhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxlZnQ6bnVtYmVyID0gY2FtZXJhLmxlZnQgKiBjYW1lcmEuZmFyIC8gY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgbGV0IHJpZ2h0Om51bWJlciA9IGNhbWVyYS5yaWdodCAqIGNhbWVyYS5mYXIgLyBjYW1lcmEubmVhcjtcclxuICAgICAgICBsZXQgYm90dG9tOm51bWJlciA9IGNhbWVyYS5ib3R0b20gKiBjYW1lcmEuZmFyIC8gY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgbGV0IHRvcDpudW1iZXIgPSBjYW1lcmEudG9wICogY2FtZXJhLmZhciAvIGNhbWVyYS5uZWFyO1xyXG4gICAgICAgIC8v6K6h566X5Ye66L+R5bmz6Z2iNOS4queCuVxyXG4gICAgICAgIHRoaXMucG9pbnRzWzBdLnggPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzBdLnkgPSBib3R0b207XHJcbiAgICAgICAgdGhpcy5wb2ludHNbMF0ueiA9IC1jYW1lcmEubmVhcjtcclxuICAgICAgICB0aGlzLnBvaW50c1sxXS54ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbMV0ueSA9IGJvdHRvbTtcclxuICAgICAgICB0aGlzLnBvaW50c1sxXS56ID0gLWNhbWVyYS5uZWFyO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzJdLnggPSByaWdodDtcclxuICAgICAgICB0aGlzLnBvaW50c1syXS55ID0gdG9wO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzJdLnogPSAtY2FtZXJhLm5lYXI7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbM10ueCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbM10ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1szXS56ID0gLWNhbWVyYS5uZWFyO1xyXG4gICAgICAgIC8v6K6h566X5Ye66L+c5bmz6Z2iNOS4queCuVxyXG4gICAgICAgIHRoaXMucG9pbnRzWzRdLnggPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzRdLnkgPSBib3R0b207XHJcbiAgICAgICAgdGhpcy5wb2ludHNbNF0ueiA9IC1jYW1lcmEuZmFyO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzVdLnggPSByaWdodDtcclxuICAgICAgICB0aGlzLnBvaW50c1s1XS55ID0gYm90dG9tO1xyXG4gICAgICAgIHRoaXMucG9pbnRzWzVdLnogPSAtY2FtZXJhLmZhcjtcclxuICAgICAgICB0aGlzLnBvaW50c1s2XS54ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbNl0ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1s2XS56ID0gLWNhbWVyYS5mYXI7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbN10ueCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5wb2ludHNbN10ueSA9IHRvcDtcclxuICAgICAgICB0aGlzLnBvaW50c1s3XS56ID0gLWNhbWVyYS5mYXI7XHJcbiAgICAgICAgLy/orrDkvY/vvIzmraTml7bnmoTmkYTlg4/mnLrlkow45LiqY29ybm9y5piv5Zyodmlld+WdkOagh+ezu+S4reihqOekulxyXG4gICAgICAgIC8v5bCG5pGE5YOP5py655qE5Y6f54K55ZKMOOS4qmNvcm5vcueCueWPmOaNouWIsOS4lueVjOWdkOagh+ezu1xyXG4gICAgICAgIHRoaXMuX29yaWdpbi54ID0gMDtcclxuICAgICAgICB0aGlzLl9vcmlnaW4ueSA9IDA7XHJcbiAgICAgICAgdGhpcy5fb3JpZ2luLnogPSAwO1xyXG4gICAgICAgIC8vIOaRhOWDj+acuueahOWOn+eCueWcqHZpZXflnZDmoIfns7vkuK3mmK9bIDAgLCAwICwgMCBdLOmAmui/h2ludlZpZXdNYXRyaXggKiBfb3JpZ2lu77yM5b6X5Yiw5LqGX29yaWdpbuWcqOS4lueVjOWdkOagh+ezu+eahOihqOekulxyXG4gICAgICAgIHRoaXMuX29yaWdpbiA9IGNhbWVyYS5pbnZWaWV3TWF0cml4Lm11bHRpcGx5VmVjMyh0aGlzLm9yaWdpbik7IFxyXG4gICAgICAgIC8vIOWwhnZpZXflnZDmoIfns7vkuK3ooajnpLrnmoQ45Liq6aG254K55Lmf5Y+Y5o2i5Yiw5LiW55WM5Z2Q5qCH57O75LitXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnRzW2ldID0gY2FtZXJhLmludlZpZXdNYXRyaXgubXVsdGlwbHlWZWMzKHRoaXMucG9pbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mnoTlu7rkuJbnlYzlnZDmoIfns7vooajnpLrnmoQ25Liq5bmz6Z2i77yM5rOV57q/5pyd5YaFXHJcbiAgICAgICAgTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHModGhpcy5fb3JpZ2luLCB0aGlzLl9wb2ludHNbMF0sIHRoaXMuX3BvaW50c1szXSwgdGhpcy5fcGxhbmVzWzBdKTtcclxuICAgICAgICBNYXRoSGVscGVyLnBsYW5lRnJvbVBvaW50cyh0aGlzLl9vcmlnaW4sIHRoaXMuX3BvaW50c1syXSwgdGhpcy5fcG9pbnRzWzFdLCB0aGlzLl9wbGFuZXNbMV0pO1xyXG4gICAgICAgIE1hdGhIZWxwZXIucGxhbmVGcm9tUG9pbnRzKHRoaXMuX29yaWdpbiwgdGhpcy5fcG9pbnRzWzNdLCB0aGlzLl9wb2ludHNbMl0sIHRoaXMuX3BsYW5lc1syXSk7XHJcbiAgICAgICAgTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHModGhpcy5fb3JpZ2luLCB0aGlzLl9wb2ludHNbMV0sIHRoaXMuX3BvaW50c1swXSwgdGhpcy5fcGxhbmVzWzNdKTtcclxuICAgICAgICBNYXRoSGVscGVyLnBsYW5lRnJvbVBvaW50cyh0aGlzLl9wb2ludHNbMF0sIHRoaXMuX3BvaW50c1syXSwgdGhpcy5fcG9pbnRzWzFdLCB0aGlzLl9wbGFuZXNbNF0pO1xyXG4gICAgICAgIE1hdGhIZWxwZXIucGxhbmVGcm9tUG9pbnRzKHRoaXMuX3BvaW50c1s1XSwgdGhpcy5fcG9pbnRzWzddLCB0aGlzLl9wb2ludHNbNF0sIHRoaXMuX3BsYW5lc1s1XSk7XHJcbiAgICAgICAgLy8g5bCGNuS4quW5s+mdouWNleS9jeWMllxyXG4gICAgICAgIGZvcihsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fcGxhbmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLnBsYW5lTm9ybWFsaXplKHRoaXMuX3BsYW5lc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1NwaGVyZVZpc2libGUoY2VudGVyOiBWZWN0b3IzLCByYWRpdXM6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJhZGl1cyA9IC1yYWRpdXM7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3BsYW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KHRoaXMuX3BsYW5lc1tpXSwgY2VudGVyKSA8IHJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0JvdW5kQm94VmlzaWJsZShtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wbGFuZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9wbGFuZXNbaV07XHJcbiAgICAgICAgICAgIFZlY3RvcjMudjAueCA9IChjdXJyZW50LnggPiAwLjApID8gbWF4cy54IDogbWlucy54O1xyXG4gICAgICAgICAgICBWZWN0b3IzLnYwLnkgPSAoY3VycmVudC55ID4gMC4wKSA/IG1heHMueSA6IG1pbnMueTtcclxuICAgICAgICAgICAgVmVjdG9yMy52MC56ID0gKGN1cnJlbnQueiA+IDAuMCkgPyBtYXhzLnogOiBtaW5zLno7XHJcbiAgICAgICAgICAgIGlmIChNYXRoSGVscGVyLnBsYW5lRGlzdGFuY2VGcm9tUG9pbnQoY3VycmVudCwgVmVjdG9yMy52MCkgPCAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUcmlhbmdsZVZpc2libGUoYTogVmVjdG9yMywgYjogVmVjdG9yMywgYzogVmVjdG9yMyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9wbGFuZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IFZlY3RvcjQgPSB0aGlzLl9wbGFuZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChNYXRoSGVscGVyLnBsYW5lRGlzdGFuY2VGcm9tUG9pbnQoY3VycmVudCwgYSkgPj0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KGN1cnJlbnQsIGIpID49IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGhIZWxwZXIucGxhbmVEaXN0YW5jZUZyb21Qb2ludChjdXJyZW50LCBjKSA+PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcmlnaW4oKTogVmVjdG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yaWdpbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcG9pbnRzKCk6IFZlY3RvcjNbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcGxhbmVzKCk6IFZlY3RvcjRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYW5lcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcmlnaW46IFZlY3RvcjM7ICAvLyDljp/ngrnlnZDmoIdcclxuICAgIHByaXZhdGUgX3BvaW50czogVmVjdG9yM1tdOyAvLyAwLTPooajnpLrov5HlubPpnaLlm5vovrnlvaLnmoTlnZDmoIfvvIw0LTfooajnpLrov5zlubPpnaLnmoTlm5vovrnlvaLlnZDmoIfvvIzov5nkupvpobbngrnlnZDmoIfnmoTluIPlsYDvvIzor7flj4LogIPlm745LjVcclxuICAgIHByaXZhdGUgX3BsYW5lczogVmVjdG9yNFtdOyAvLyDku47kuIrov7A55Liq6aG254K55LiN5ZCM5o6S5YiX57uE5ZCI5ZCO55Sf5oiQ55qE5LiKL+S4iy/lt6Yv5Y+zL+i/nC/ov5Hlha3kuKrlubPpnaLvvIzlhbbms5XlkJHph4/pg73mmK/mnJ1GcnVzdHVt5YaF6YOo77yM5YiH6K6wXHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9tYXRoL3ZlY3RvcjNcIjtcclxuaW1wb3J0IFZlY3RvcjQgZnJvbSBcIi4uL21hdGgvdmVjdG9yNFwiO1xyXG5pbXBvcnQgeyBHTEF0dHJpYkJpdHMsIEdMQXR0cmliU3RhdGUgfSBmcm9tIFwiLi4vd2ViZ2wvV2ViR0xBdHRyaWJTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHTFN0YXRpY01lc2ggfSBmcm9tIFwiLi4vd2ViZ2wvV2ViR0xNZXNoXCJcclxuaW1wb3J0IHsgTWF0aEhlbHBlciB9IGZyb20gXCIuLi9tYXRoL01hdGhIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeURhdGFcclxue1xyXG4gICAgLy8g6L6T5YWl6aG254K55bGe5oCn5pWw5o2uXHJcbiAgICBwdWJsaWMgcG9zaXRpb25zOiBWZWN0b3IzW10gPSBbXTtcclxuICAgIHB1YmxpYyB1dnM6IFZlY3RvcjJbXSA9IFtdO1xyXG4gICAgcHVibGljIG5vcm1hbHM6IFZlY3RvcjNbXSA9IFtdO1xyXG4gICAgcHVibGljIGNvbG9yczogVmVjdG9yNFtdID0gW107XHJcbiAgICBwdWJsaWMgdGFuZ2VudHM6IFZlY3RvcjRbXSA9IFtdO1xyXG4gICAgcHVibGljIGluZGljZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIG1ha2VTdGF0aWNWQU8gKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBuZWVkTm9ybWFsczogYm9vbGVhbiA9IGZhbHNlLCBuZWVkVVY6IGJvb2xlYW4gPSB0cnVlICk6IEdMU3RhdGljTWVzaFxyXG4gICAge1xyXG4gICAgICAgIGxldCBiaXRzOiBHTEF0dHJpYkJpdHMgPSB0aGlzLmdldEF0dHJpYkJpdHMoKTtcclxuICAgICAgICBpZiAoIG5lZWROb3JtYWxzID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzICY9IH5HTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggbmVlZFVWID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzICY9IH5HTEF0dHJpYlN0YXRlLlRFWENPT1JEX0JJVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJpZGU6IG51bWJlciA9IEdMQXR0cmliU3RhdGUuZ2V0VmVydGV4Qnl0ZVN0cmlkZSggYml0cyApO1xyXG4gICAgICAgIGxldCBzdGVwOiBudW1iZXIgPSBzdHJpZGUgLyBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgICAgICAgbGV0IGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlciggc3RyaWRlICogdGhpcy5wb3NpdGlvbnMubGVuZ3RoICk7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIGFycmF5QnVmZmVyICk7XHJcbiAgICAgICAgZm9yICggbGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDkvY3nva5cclxuICAgICAgICAgICAgbGV0IGo6IG51bWJlciA9IGkgKiBzdGVwO1xyXG4gICAgICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMucG9zaXRpb25zWyBpIF0ueDtcclxuICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLnBvc2l0aW9uc1sgaSBdLnk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy5wb3NpdGlvbnNbIGkgXS56O1xyXG4gICAgICAgICAgICAvL+azlee6vyjnlKjkuoZiaXRz5ZCO77yM5LiN6IO955SobGVuZ3Ro5p2l5Yik5pat5LqG77yB77yB77yBKVxyXG4gICAgICAgICAgICBpZiAoIGJpdHMgJiBHTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLnk7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMubm9ybWFsc1sgaSBdLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nurnnkIZcclxuICAgICAgICAgICAgaWYgKCBiaXRzICYgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMudXZzWyBpIF0ueDtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy51dnNbIGkgXS55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6aKc6ImyXHJcbiAgICAgICAgICAgIGlmICggYml0cyAmIEdMQXR0cmliU3RhdGUuQ09MT1JfQklUIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLmNvbG9yc1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMuY29sb3JzWyBpIF0ueTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy5jb2xvcnNbIGkgXS56O1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLmNvbG9yc1sgaSBdLnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/liIfnur9cclxuICAgICAgICAgICAgaWYgKCBiaXRzICYgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0JJVCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy50YW5nZW50c1sgaSBdLng7XHJcbiAgICAgICAgICAgICAgICBidWZmZXJbIGogKyAoIGlkeCsrICkgXSA9IHRoaXMudGFuZ2VudHNbIGkgXS55O1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyWyBqICsgKCBpZHgrKyApIF0gPSB0aGlzLnRhbmdlbnRzWyBpIF0uejtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclsgaiArICggaWR4KysgKSBdID0gdGhpcy50YW5nZW50c1sgaSBdLnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lc2g6IEdMU3RhdGljTWVzaCA9IG5ldyBHTFN0YXRpY01lc2goIGdsLCBiaXRzLCBidWZmZXIsIHRoaXMuaW5kaWNlcy5sZW5ndGggPiAwID8gbmV3IFVpbnQxNkFycmF5KCB0aGlzLmluZGljZXMgKSA6IG51bGwgKTtcclxuICAgICAgICB0aGlzLmJ1aWxkQm91bmRpbmdCb3hUbyggbWVzaC5taW5zLCBtZXNoLm1heHMgKTtcclxuICAgICAgICByZXR1cm4gbWVzaDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVpbGRCb3VuZGluZ0JveFRvICggbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICggbGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLmJvdW5kQm94QWRkUG9pbnQoIHRoaXMucG9zaXRpb25zWyBpIF0sIG1pbnMsIG1heHMgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF0dHJpYkJpdHMgKCk6IEdMQXR0cmliQml0c1xyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5wb3NpdGlvbnMubGVuZ3RoID09PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLlv4XpobvopoHmnInpobbmlbDmja4hISFcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJpdHM6IEdMQXR0cmliQml0cyA9IEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUO1xyXG4gICAgICAgIGlmICggdGhpcy51dnMubGVuZ3RoID4gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRoaXMubm9ybWFscy5sZW5ndGggPiAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpdHMgfD0gR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHRoaXMuY29sb3JzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB0aGlzLnRhbmdlbnRzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYml0cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1YmVcclxue1xyXG4gICAgcHVibGljIGhhbGZXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhhbGZIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoYWxmRGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBoYWxmV2lkdGg6IG51bWJlciA9IDAuMiwgaGFsZkhlaWdodDogbnVtYmVyID0gMC4yLCBoYWxmRGVwdGg6IG51bWJlciA9IDAuMiApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oYWxmV2lkdGggPSBoYWxmV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oYWxmSGVpZ2h0ID0gaGFsZkhlaWdodDtcclxuICAgICAgICB0aGlzLmhhbGZEZXB0aCA9IGhhbGZEZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICAgICAgICAvMy0tLS0tLS0tLzcgIHxcclxuICAgICAgICAgICAgLyB8ICAgICAgIC8gICB8XHJcbiAgICAgICAgICAgIC8gIHwgICAgICAvICAgfFxyXG4gICAgICAgICAgICAxLS0tLS0tLS0tNSAgIHxcclxuICAgICAgICAgICAgfCAgLzItIC0gLXwtIC02XHJcbiAgICAgICAgICAgIHwgLyAgICAgICB8ICAvXHJcbiAgICAgICAgICAgIHwvICAgICAgICB8IC9cclxuICAgICAgICAgICAgMC0tLS0tLS0tLTQvXHJcblxyXG4gICAgKi9cclxuXHJcbiAgICBwdWJsaWMgbWFrZUdlb21ldHJ5RGF0YVdpdGhUZXh0dXJlQ29vb3JkICgpOiBHZW9tZXRyeURhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogR2VvbWV0cnlEYXRhID0gbmV3IEdlb21ldHJ5RGF0YSgpO1xyXG4gICAgICAgIGRhdGEucG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCB0aGlzLmhhbGZEZXB0aCApLCAvLyAwXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IzKCB0aGlzLmhhbGZXaWR0aCwgLXRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSwgIC8vIDRcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjMoIHRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsIHRoaXMuaGFsZkRlcHRoICksICAvLyA1XHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZGF0YS51dnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAwLCAwICksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAxLCAwICksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKCAxLCAxICksXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZUdlb21ldHJ5RGF0YSAoKTogR2VvbWV0cnlEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IEdlb21ldHJ5RGF0YSA9IG5ldyBHZW9tZXRyeURhdGEoKTtcclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCB0aGlzLmhhbGZEZXB0aCApICk7IC8vIDBcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMSwgMCApICk7XHJcblxyXG4gICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCAtdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAvLyAxXHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDEsIDEgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCAtdGhpcy5oYWxmRGVwdGggKSApOyAvLyAyXHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDAsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggLXRoaXMuaGFsZldpZHRoLCB0aGlzLmhhbGZIZWlnaHQsIC10aGlzLmhhbGZEZXB0aCApICk7IC8vIDNcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMCwgMSApICk7XHJcblxyXG4gICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCB0aGlzLmhhbGZXaWR0aCwgLXRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAvLyA0XHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDAsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgdGhpcy5oYWxmRGVwdGggKSApOyAgLy8gNVxyXG4gICAgICAgIGRhdGEudXZzLnB1c2goIG5ldyBWZWN0b3IyKCAwLCAxICkgKTtcclxuXHJcbiAgICAgICAgZGF0YS5wb3NpdGlvbnMucHVzaCggbmV3IFZlY3RvcjMoIHRoaXMuaGFsZldpZHRoLCAtdGhpcy5oYWxmSGVpZ2h0LCAtdGhpcy5oYWxmRGVwdGggKSApOyAvLyA2XHJcbiAgICAgICAgZGF0YS51dnMucHVzaCggbmV3IFZlY3RvcjIoIDEsIDAgKSApO1xyXG5cclxuICAgICAgICBkYXRhLnBvc2l0aW9ucy5wdXNoKCBuZXcgVmVjdG9yMyggdGhpcy5oYWxmV2lkdGgsIHRoaXMuaGFsZkhlaWdodCwgLXRoaXMuaGFsZkRlcHRoICkgKTsgIC8vIDdcclxuICAgICAgICBkYXRhLnV2cy5wdXNoKCBuZXcgVmVjdG9yMiggMSwgMSApICk7XHJcblxyXG4gICAgICAgIC8vIOazlee6v+acneWkllxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAwLCAxLCAzLCAwLCAzLCAyICk7IC8vIOW3pumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAzLCA3LCA2LCAzLCA2LCAyICk7IC8vIOWQjumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCA2LCA3LCA1LCA2LCA1LCA0ICk7IC8vIOWPs+mdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCA1LCAxLCAwLCA1LCAwLCA0ICk7IC8vIOWJjemdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAxLCA1LCA3LCAxLCA3LCAzICk7IC8vIOS4iumdolxyXG4gICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAyLCA2LCA0LCAyLCA0LCAwICk7IC8vIOS4i+mdolxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFBsYW5lXHJcbntcclxuICAgIHB1YmxpYyBzeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHN5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbng6IG51bWJlcjtcclxuICAgIHB1YmxpYyBueTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHN4OiBudW1iZXIgPSAxMCwgc3k6IG51bWJlciA9IDEwLCBueDogbnVtYmVyID0gMTAsIG55OiBudW1iZXIgPSAxMCApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zeCA9IHN4O1xyXG4gICAgICAgIHRoaXMuc3kgPSBzeTtcclxuICAgICAgICB0aGlzLm54ID0gbng7XHJcbiAgICAgICAgdGhpcy5ueSA9IG55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlR2VvbWV0cnlEYXRhICgpOiBHZW9tZXRyeURhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogR2VvbWV0cnlEYXRhID0gbmV3IEdlb21ldHJ5RGF0YSgpO1xyXG4gICAgICAgIGZvciAoIGxldCBpeTogbnVtYmVyID0gMDsgaXkgPD0gdGhpcy5ueTsgaXkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaXg6IG51bWJlciA9IDA7IGl4IDw9IHRoaXMubng7IGl4KysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdTogbnVtYmVyID0gaXggLyB0aGlzLm54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHY6IG51bWJlciA9IGl5IC8gdGhpcy5ueTtcclxuICAgICAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSAtdGhpcy5zeCAvIDIgKyB1ICogdGhpcy5zeDsgLy8gc3RhcnRzIG9uIHRoZSBsZWZ0XHJcbiAgICAgICAgICAgICAgICBsZXQgeTogbnVtYmVyID0gdGhpcy5zeSAvIDIgLSB2ICogdGhpcy5zeTsgLy8gc3RhcnRzIGF0IHRoZSB0b3BcclxuICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb25zLnB1c2goIG5ldyBWZWN0b3IzKCB4LCB5LCAwICkgKTtcclxuICAgICAgICAgICAgICAgIGRhdGEudXZzLnB1c2goIG5ldyBWZWN0b3IyKCB1LCAxLjAgLSB2ICkgKTtcclxuICAgICAgICAgICAgICAgIGRhdGEubm9ybWFscy5wdXNoKCBuZXcgVmVjdG9yMyggMCwgMCwgMSApICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl5IDwgdGhpcy5ueSAmJiBpeCA8IHRoaXMubnggKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmRpY2VzLnB1c2goIGl5ICogKCB0aGlzLm54ICsgMSApICsgaXgsICggaXkgKyAxICkgKiAoIHRoaXMubnggKyAxICkgKyBpeCArIDEsIGl5ICogKCB0aGlzLm54ICsgMSApICsgaXggKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaW5kaWNlcy5wdXNoKCAoIGl5ICsgMSApICogKCB0aGlzLm54ICsgMSApICsgaXggKyAxLCBpeSAqICggdGhpcy5ueCArIDEgKSArIGl4LCAoIGl5ICsgMSApICogKCB0aGlzLm54ICsgMSApICsgaXggKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRJbnRlcmFjdGlvbiB9IGZyb20gXCIuL2NvbW1vbi9FdmVudEludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4uL2RlbW8vUm90YXRpbmdDdWJlQXBwbGljYXRpb25cIjtcclxuXHJcbi8vIOiOt+W+l0hUTUxTZWxlY3RFbGVtZW505a+56LGh77yM55So5p2l5YiH5o2i6KaB6L+Q6KGM55qEQXBwbGljYXRpb25cclxubGV0IHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NlbGVjdCcgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbi8vIOiOt+WPlueUqOS6juiOt+W+l3dlYmds5LiK5LiL5paH5a+56LGh55qESFRNTENhbnZhc0VsZW1lbnTlhYPntKBcclxubGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3ZWJnbCcgKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmxldCBhcHBOYW1lczogc3RyaW5nW10gPSBbXHJcbiAgICBcIuesrDPnq6DvvJpSb3RhdGluZ0N1YmVBcHBsaWNhdGlvblwiXHJcbl07XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtICggc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCwgdmFsdWU6IHN0cmluZyApOiB2b2lkXHJcbntcclxuICAgIHNlbGVjdC5vcHRpb25zLmFkZCggbmV3IE9wdGlvbiggdmFsdWUsIHZhbHVlICkgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSXRlbWVzICggc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCApOiB2b2lkXHJcbntcclxuICAgIGlmICggY2FudmFzID09PSBudWxsIClcclxuICAgIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKCBsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFwcE5hbWVzLmxlbmd0aDsgaSsrIClcclxuICAgIHtcclxuICAgICAgICBhZGRJdGVtKCBzZWxlY3QsIGFwcE5hbWVzWyBpIF0gKTtcclxuICAgIH1cclxufVxyXG5cclxuZW51bSBFQVBQTmFtZXtcclxuICAgIFJPVEFUSU5HQ1VCRSxcclxuICAgIEFTWU5DTE9BRCxcclxuICAgIEJBU0lDV0VCR0wsXHJcbiAgICBNRVNIQlVJTERFUixcclxuICAgIENPT1JEU1lTVEVNLFxyXG4gICAgUTNCU1AsXHJcbiAgICBET09NM1BST0MsXHJcbiAgICBET09NM01ENVxyXG59XHJcbmZ1bmN0aW9uIHJ1bkFwcGxpY2F0aW9uKG5hbWU6RUFQUE5hbWUpOnZvaWR7XHJcbiAgICAvLyDojrflj5bnlKjkuo7ojrflvpd3ZWJnbOS4iuS4i+aWh+WvueixoeeahEhUTUxDYW52YXNFbGVtZW505YWD57SgXHJcbiAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3dlYmdsJyApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKCBuYW1lID09PSBFQVBQTmFtZS5ST1RBVElOR0NVQkUgKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhcHA6IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uID0gbmV3IFJvdGF0aW5nQ3ViZUFwcGxpY2F0aW9uKCBjYW52YXMgKTtcclxuICAgICAgICBhcHAuZnJhbWVDYWxsYmFjayA9IGZyYW1lQ2FsbGJhY2s7XHJcbiAgICAgICAgYXBwLnJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0ICggdGFnTmFtZTogc3RyaW5nICk6IFRleHRcclxue1xyXG4gICAgbGV0IGVsZW06IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0YWdOYW1lICkgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgbGV0IHRleHQ6IFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSggXCJcIiApO1xyXG4gICAgZWxlbS5hcHBlbmRDaGlsZCggdGV4dCApO1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmxldCBmcHM6IFRleHQgPSBjcmVhdGVUZXh0KCBcImZwc1wiICk7XHJcbmxldCB0cmlzOiBUZXh0ID0gY3JlYXRlVGV4dCggXCJ0cmlzXCIgKTtcclxubGV0IHZlcnRzOiBUZXh0ID0gY3JlYXRlVGV4dCggXCJ2ZXJ0c1wiICk7XHJcblxyXG5mdW5jdGlvbiBmcmFtZUNhbGxiYWNrICggYXBwOiBFdmVudEludGVyYWN0aW9uICk6IHZvaWRcclxue1xyXG4gICAgZnBzLm5vZGVWYWx1ZSA9IFN0cmluZyggYXBwLmZwcy50b0ZpeGVkKCAwICkgKTtcclxuICAgIHRyaXMubm9kZVZhbHVlID0gXCIwXCI7XHJcbiAgICB2ZXJ0cy5ub2RlVmFsdWUgPSBcIjBcIjtcclxufVxyXG5cclxucnVuQXBwbGljYXRpb24oRUFQUE5hbWUuUk9UQVRJTkdDVUJFKTsiLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vdmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4vdmVjdG9yM1wiO1xyXG5pbXBvcnQgVmVjdG9yNCBmcm9tIFwiLi92ZWN0b3I0XCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IEVQU0lMT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5pbXBvcnQgcXVhdCBmcm9tIFwiLi9xdWF0XCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5RGF0YSB9IGZyb20gXCIuLi9saWIvUHJpbWl0aXZlc1wiO1xyXG5pbXBvcnQgeyBHTE1lc2hCdWlsZGVyIH0gZnJvbSBcIi4uL3dlYmdsL1dlYkdMTWVzaFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRUF4aXNUeXBlXHJcbntcclxuICAgIE5PTkUgPSAtMSxcclxuICAgIFhBWElTLFxyXG4gICAgWUFYSVMsXHJcbiAgICBaQVhJU1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFUGxhbmVMb2Ncclxue1xyXG4gICAgRlJPTlQsICAgICAgICAgLy8g5Zyo5bmz6Z2i55qE5q2j6Z2iXHJcbiAgICBCQUNLLCAgICAgICAgICAvLyDlnKjlubPpnaLnmoTog4zpnaJcclxuICAgIENPUExBTkFSICAgICAgIC8vIOS4juW5s+mdouWFsemdolxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0aEhlbHBlclxyXG57XHJcblxyXG4gICAgLy8g6KeS5bqmL+W8p+W6puS6kui9rOWHveaVsFxyXG4gICAgcHVibGljIHN0YXRpYyB0b1JhZGlhbiAoIGRlZ3JlZTogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkZWdyZWUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9EZWdyZWUgKCByYWRpYW46IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcmFkaWFuIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmta7ngrnmlbDlrrnlt67nm7jnrYnlh73mlbBcclxuICAgIHB1YmxpYyBzdGF0aWMgbnVtYmVyRXF1YWxzICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKCBsZWZ0IC0gcmlnaHQgKSA+IEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYW1wICggeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggeCA8IG1pbiApID8gbWluIDogKCB4ID4gbWF4ICkgPyBtYXggOiB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIpOaWreS4gOS4quaVtOaVsOaYr+WQpuaYrzLnmoRu5qyh5pa5KDEsMiw0LDgsMTYsMzIsNjQsMTI4LDI1OCw1MTIsMTAyNCwyMDQ4LC4uLi4pXHJcbiAgICAvLyDnlKjkuo4y55qEbuasoeaWuee6ueeQhuWIpOaWrVxyXG4gICAgcHVibGljIHN0YXRpYyBpc1Bvd2VyT2ZUd28gKCB2YWx1ZTogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCAoIHZhbHVlICYgKCB2YWx1ZSAtIDEgKSApID09IDAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9iajJHTFZpZXdwb3J0U3BhY2UgKCBsb2NhbFB0OiBWZWN0b3IzLCBtdnA6IE1hdHJpeDQsIHZpZXdwb3J0OiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LCB2aWV3cG9ydFB0OiBWZWN0b3IzICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgdjogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCBsb2NhbFB0LngsIGxvY2FsUHQueSwgbG9jYWxQdC56LCAxLjAgKTtcclxuICAgICAgICBtdnAubXVsdGlwbHlWZWM0KCB2LCB2ICk7IC8vIOWwhumhtueCueS7jmxvY2Fs5Z2Q5qCH57O75Y+Y5o2i5Yiw5oqV5b2x5Z2Q5qCH57O777yM5oiW6KOB5Ymq5Z2Q5qCH57O7XHJcbiAgICAgICAgaWYgKCB2LncgPT09IDAuMCApIC8vIOWmguaenOWPmOaNouWQjueahHfkuLow77yM5YiZ6L+U5ZueZmFsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bCG6KOB5Ymq5Z2Q5qCH57O755qE54K555qEeCAvIHkgLyB65YiG6YeP6Zmk5Luld++8jOW+l+WIsG5vcm1hbGl6ZWTlnZDmoIflgLxbIC0xICwgMSBd5LmL6Ze0XHJcbiAgICAgICAgdi54IC89IHYudztcclxuICAgICAgICB2LnkgLz0gdi53O1xyXG4gICAgICAgIHYueiAvPSB2Lnc7XHJcbiAgICAgICAgLy8gWy0xICwgMV3moIfnpLrnmoTngrnlj5jmjaLliLDop4blj6PlnZDmoIfns7tcclxuICAgICAgICB2LnggPSB2LnggKiAwLjUgKyAwLjU7XHJcbiAgICAgICAgdi55ID0gdi55ICogMC41ICsgMC41O1xyXG4gICAgICAgIHYueiA9IHYueiAqIDAuNSArIDAuNTtcclxuICAgICAgICAvLyDop4blj6PlnZDmoIfns7vlho3lj5jmjaLliLDlsY/luZXlnZDmoIfns7tcclxuICAgICAgICB2aWV3cG9ydFB0LnggPSB2LnggKiB2aWV3cG9ydFsgMiBdICsgdmlld3BvcnRbIDAgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnkgPSB2LnkgKiB2aWV3cG9ydFsgMyBdICsgdmlld3BvcnRbIDEgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnogPSB2Lno7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h566X5LiJ6KeS5b2i55qE5rOV5ZCR6YePXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOb3JtYWwgKCBhOiBWZWN0b3IzLCBiOiBWZWN0b3IzLCBjOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjMgfCBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFyZXN1bHQgKSByZXN1bHQgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGxldCBsMDogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgbGV0IGwxOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBWZWN0b3IzLmRpZmZlcmVuY2UoIGIsIGEsIGwwICk7XHJcbiAgICAgICAgVmVjdG9yMy5kaWZmZXJlbmNlKCBjLCBhLCBsMSApO1xyXG4gICAgICAgIFZlY3RvcjMuY3Jvc3MoIGwwLCBsMSwgcmVzdWx0ICk7XHJcbiAgICAgICAgcmVzdWx0Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL6Z2i5Zub5Liq5Ye95pWw5piv5bmz6Z2i55u45YWz5Ye95pWwXHJcbiAgICAvL2F4K2J5K2N6LWQ9MFxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2ludHMgKCBhOiBWZWN0b3IzLCBiOiBWZWN0b3IzLCBjOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjQgfCBudWxsID0gbnVsbCApOiBWZWN0b3I0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICBsZXQgbm9ybWFsOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWwoIGEsIGIsIGMsIG5vcm1hbCApO1xyXG4gICAgICAgIGxldCBkOiBudW1iZXIgPSAtVmVjdG9yMy5kb3QoIG5vcm1hbCwgYSApO1xyXG4gICAgICAgIHJlc3VsdC54ID0gbm9ybWFsLng7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBub3JtYWwueTtcclxuICAgICAgICByZXN1bHQueiA9IG5vcm1hbC56O1xyXG4gICAgICAgIHJlc3VsdC53ID0gZDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVGcm9tUG9pbnROb3JtYWwgKCBwb2ludDogVmVjdG9yMywgbm9ybWFsOiBWZWN0b3IzLCByZXN1bHQ6IFZlY3RvcjQgfCBudWxsID0gbnVsbCApOiBWZWN0b3I0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IFZlY3RvcjQoKTtcclxuICAgICAgICByZXN1bHQueCA9IG5vcm1hbC54O1xyXG4gICAgICAgIHJlc3VsdC55ID0gbm9ybWFsLnk7XHJcbiAgICAgICAgcmVzdWx0LnogPSBub3JtYWwuejtcclxuICAgICAgICByZXN1bHQudyA9IC1WZWN0b3IzLmRvdCggbm9ybWFsLCBwb2ludCApO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2x5Z29uICggcG9seWdvbjogVmVjdG9yM1tdICk6IFZlY3RvcjRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHBvbHlnb24ubGVuZ3RoIDwgMyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi5aSa5Y+Y5b2i55qE6aG254K55pWw5b+F6aG75aSn5LqO5oiW562J5LqOMyEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHMoIHBvbHlnb25bIDAgXSwgcG9seWdvblsgMSBdLCBwb2x5Z29uWyAyIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYW5lRGlzdGFuY2VGcm9tUG9pbnQgKCBwbGFuZTogVmVjdG9yNCwgcG9pbnQ6IFZlY3RvcjMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggcG9pbnQueCAqIHBsYW5lLnggKyBwb2ludC55ICogcGxhbmUueSArIHBvaW50LnogKiBwbGFuZS56ICsgcGxhbmUudyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVUZXN0UG9pbnQgKCBwbGFuZTogVmVjdG9yNCwgcG9pbnQ6IFZlY3RvcjMgKTogRVBsYW5lTG9jXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG51bTogbnVtYmVyID0gTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KCBwbGFuZSwgcG9pbnQgKTtcclxuICAgICAgICBpZiAoIG51bSA+IEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5GUk9OVDtcclxuICAgICAgICB9IGVsc2UgaWYgKCBudW0gPCAtIEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5CQUNLO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5DT1BMQU5BUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZU5vcm1hbGl6ZSAoIHBsYW5lOiBWZWN0b3I0ICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBsZW5ndGg6IG51bWJlciwgaWxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoIHBsYW5lLnggKiBwbGFuZS54ICsgcGxhbmUueSAqIHBsYW5lLnkgKyBwbGFuZS56ICogcGxhbmUueiApO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi6Z2i56ev5Li6MOeahOW5s+mdoiEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbGVuZ3RoID0gMS4wIC8gbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLnggPSBwbGFuZS54ICogaWxlbmd0aDtcclxuICAgICAgICBwbGFuZS55ID0gcGxhbmUueSAqIGlsZW5ndGg7XHJcbiAgICAgICAgcGxhbmUueiA9IHBsYW5lLnogKiBpbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLncgPSBwbGFuZS53ICogaWxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvdW5kQm94QWRkUG9pbnQgKCB2OiBWZWN0b3IzLCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHYueCA8IG1pbnMueCApIHsgbWlucy54ID0gdi54IH07ICBcclxuICAgICAgICBpZiAoIHYueCA+IG1heHMueCApIHsgbWF4cy54ID0gdi54IH07XHJcblxyXG4gICAgICAgIGlmICggdi55IDwgbWlucy55ICkgeyBtaW5zLnkgPSB2LnkgfTtcclxuICAgICAgICBpZiAoIHYueSA+IG1heHMueSApIHsgbWF4cy55ID0gdi55IH07XHJcblxyXG4gICAgICAgIGlmICggdi56IDwgbWlucy56ICkgeyBtaW5zLnogPSB2LnogfTtcclxuICAgICAgICBpZiAoIHYueiA+IG1heHMueiApIHsgbWF4cy56ID0gdi56IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveENsZWFyICggbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMywgdmFsdWU6IG51bWJlciA9IEluZmluaXR5ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBtaW5zLnggPSBtaW5zLnkgPSBtaW5zLnogPSB2YWx1ZTsgICAvLyDliJ3lp4vljJbml7bvvIzorqltaW5z6KGo56S65rWu54K55pWw55qE5pyA5aSn6IyD5Zu0XHJcbiAgICAgICAgbWF4cy54ID0gbWF4cy55ID0gbWF4cy56ID0gLXZhbHVlOyAgLy8g5Yid5aeL5YyW5piv77yM6K6pbWF4c+ihqOekuua1rueCueaVsOeahOacgOWwj+iMg+WbtFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+W+l0FBQkLljIXlm7Tnm5LnmoTkuK3lv4PngrnlnZDmoIdcclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hHZXRDZW50ZXIgKCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBvdXQ6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBvdXQgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3V0ID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gKG1heHMgKyBtaW5zKSAqIDAuNVxyXG4gICAgICAgIFZlY3RvcjMuc3VtKCBtaW5zLCBtYXhzLCBvdXQgKTtcclxuICAgICAgICBvdXQuc2NhbGUoIDAuNSApO1xyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveEdldDhQb2ludHMgKCBtaW5zOiBWZWN0b3IzLCBtYXhzOiBWZWN0b3IzLCBwdHM4OiBWZWN0b3IzW10gKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgLzMtLS0tLS0tLS83ICB8XHJcbiAgICAgICAgLyB8ICAgICAgIC8gICB8XHJcbiAgICAgICAgLyAgfCAgICAgIC8gICB8XHJcbiAgICAgICAgMS0tLS0tLS0tLTUgICB8XHJcbiAgICAgICAgfCAgLzItIC0gLXwtIC02XHJcbiAgICAgICAgfCAvICAgICAgIHwgIC9cclxuICAgICAgICB8LyAgICAgICAgfCAvXHJcbiAgICAgICAgMC0tLS0tLS0tLTQvXHJcbiAgICAgICAgKi9cclxuICAgICAgICBsZXQgY2VudGVyOiBWZWN0b3IzID0gTWF0aEhlbHBlci5ib3VuZEJveEdldENlbnRlciggbWlucywgbWF4cyApOyAvLyDojrflj5bkuK3lv4PngrlcclxuICAgICAgICBsZXQgbWF4czJjZW50ZXI6IFZlY3RvcjMgPSBWZWN0b3IzLmRpZmZlcmVuY2UoIGNlbnRlciwgbWF4cyApOyAvLyDojrflj5bmnIDlpKfngrnliLDkuK3lv4PngrnkuYvpl7TnmoTot53nprvlkJHph49cclxuXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiApICk7ICAvLyAwXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSAtIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiApICk7ICAvLyAxXHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IFZlY3RvcjMoIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgKyBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogKSApOyAgLy8gMlxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IFZlY3RvcjMoIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogKSApOyAgLy8gM1xyXG5cclxuICAgICAgICBwdHM4LnB1c2goIG5ldyBWZWN0b3IzKCBjZW50ZXIueCAtIG1heHMyY2VudGVyLngsIGNlbnRlci55ICsgbWF4czJjZW50ZXIueSwgY2VudGVyLnogKyBtYXhzMmNlbnRlci56ICkgKTsgIC8vIDRcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyBWZWN0b3IzKCBjZW50ZXIueCAtIG1heHMyY2VudGVyLngsIGNlbnRlci55IC0gbWF4czJjZW50ZXIueSwgY2VudGVyLnogKyBtYXhzMmNlbnRlci56ICkgKTsgIC8vIDVcclxuXHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiApICk7ICAvLyA2XHJcbiAgICAgICAgcHRzOC5wdXNoKCBuZXcgVmVjdG9yMyggY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSAtIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiApICk7ICAvLyA3XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveFRyYW5zZm9ybSAoIG1hdDogTWF0cml4NCwgbWluczogVmVjdG9yMywgbWF4czogVmVjdG9yMyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHB0czpWZWN0b3IzW10gPSBbXTsgLy8g5YiG6YWN5pWw57uE5YaF5a2Y77yM57G75Z6L5Li6VmVjdG9yM1xyXG4gICAgICAgIE1hdGhIZWxwZXIuYm91bmRCb3hHZXQ4UG9pbnRzKG1pbnMsbWF4cyxwdHMpOyAvLyDojrflvpflsYDpg6jlnZDmoIfns7vooajnpLrnmoRBQUJC55qEOOS4qumhtueCueWdkOagh1xyXG4gICAgICAgIGxldCBvdXQ6VmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7IC8vIOWPmOaNouWQjueahOmhtueCuVxyXG4gICAgICAgIC8vIOmBjeWOhuWxgOmDqOWdkOagh+ezu+eahDjkuKpBQUJC5YyF5Zu055uS55qE6aG254K55Z2Q5qCHXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7IGkgPCBwdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vIOWwhuWxgOmDqOWdkOagh+ihqOekuueahOmhtueCueWPmOaNouWIsG1hdOWdkOagh+epuumXtOS4reWOu++8jOWPmOaNouWQjueahOe7k+aenOaUvuWcqG91dOWPmOmHj+S4rVxyXG4gICAgICAgICAgICBtYXQubXVsdGlwbHlWZWMzKHB0c1tpXSxvdXQpOyBcclxuICAgICAgICAgICAgLy8g6YeN5paw5p6E6YCg5paw55qE77yM5LiO5LiW55WM5Z2Q5qCH57O76L205a+556ew55qEQUFCQuWMheWbtOebklxyXG4gICAgICAgICAgICB0aGlzLmJvdW5kQm94QWRkUG9pbnQob3V0LG1pbnMsbWF4cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hDb250YWluc1BvaW50ICggcG9pbnQ6IFZlY3RvcjMsIG1pbnM6IFZlY3RvcjMsIG1heHM6IFZlY3RvcjMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoIHBvaW50LnggPj0gbWlucy54ICYmIHBvaW50LnggPD0gbWF4cy54ICYmIHBvaW50LnkgPj0gbWlucy55ICYmIHBvaW50LnkgPD0gbWF4cy55ICYmIHBvaW50LnogPj0gbWlucy56ICYmIHBvaW50LnogPD0gbWF4cy56ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveEJvdW5kQm94T3ZlcmxhcCAoIG1pbjE6IFZlY3RvcjMsIG1heDE6IFZlY3RvcjMsIG1pbjI6IFZlY3RvcjMsIG1heDI6IFZlY3RvcjMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICggbWluMS54ID4gbWF4Mi54ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICggbWF4MS54IDwgbWluMi54ICkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIG1pbjEueSA+IG1heDIueSApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIG1heDEueSA8IG1pbjIueSApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBtaW4xLnogPiBtYXgyLnogKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCBtYXgxLnogPCBtaW4yLnogKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFZlYzNJRENvb3JkMkdMQ29vcmQgKCB2OiBWZWN0b3IzLCBzY2FsZTogbnVtYmVyID0gMTAuMCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGY6IG51bWJlciA9IHYueTsgLy8gb3BlbmdsIHJpZ2h0ID0gZG9vb20zIHhcclxuICAgICAgICB2LnkgPSB2Lno7ICAgICAgICAgIC8vb3BlbmdsIHVwID0gZG9vbTMgelxyXG4gICAgICAgIHYueiA9IC1mOyAgICAgICAgICAgLy9vcGVuZ2wgZm9yd2FyZCA9IGRvb20zIC15XHJcbiAgICAgICAgaWYgKCAhTWF0aEhlbHBlci5udW1iZXJFcXVhbHMoIHNjYWxlLCAwICkgJiYgIU1hdGhIZWxwZXIubnVtYmVyRXF1YWxzKCBzY2FsZSwgMS4wICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdi54IC89IHNjYWxlO1xyXG4gICAgICAgICAgICB2LnkgLz0gc2NhbGU7XHJcbiAgICAgICAgICAgIHYueiAvPSBzY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VmVjMklEQ29vcmQyR0xDb29yZCAoIHY6IFZlY3RvcjIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHYueSA9IDEuMCAtIHYueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1hdHJpeEZyb20gKCBwb3M6IFZlY3RvcjMsIHE6IHF1YXQsIGRlc3Q6IE1hdHJpeDQgfCBudWxsID0gbnVsbCApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxLnRvTWF0NCggZGVzdCApO1xyXG4gICAgICAgIGRlc3QudmFsdWVzWyAxMiBdID0gcG9zLng7XHJcbiAgICAgICAgZGVzdC52YWx1ZXNbIDEzIF0gPSBwb3MueTtcclxuICAgICAgICBkZXN0LnZhbHVlc1sgMTQgXSA9IHBvcy56O1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBsZXQgRVBTSUxPTjogbnVtYmVyID0gMC4wMDAxOyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi92ZWN0b3IzXCI7XHJcbmltcG9ydCBWZWN0b3I0IGZyb20gXCIuL3ZlY3RvcjRcIjtcclxuXHJcbi8vIE1hdHJpeDTnsbtcclxuZXhwb3J0IGNsYXNzIE1hdHJpeDR7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlcz86bnVtYmVyW10pIHtcclxuICAgICAgICBpZiAoIHZhbHVlcyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldCggdmFsdWVzICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQodmFsdWVzOiBudW1iZXJbXSk6IE1hdHJpeDQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IHZhbHVlc1tpXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XHJcbiAgICAvLyBzdGF0aWMgcmVhZG9ubHkgaWRlbnRpdHkgPSBuZXcgTWF0cml4NCgpLmlkZW50aXR5KCk7XHJcblxyXG4gICAgcHVibGljIHNldElkZW50aXR5KCk6TWF0cml4NCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMF0gPSAxO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzFdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1syXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbM10gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzRdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1s1XSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNl0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzddID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1s4XSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbOV0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEwXSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTFdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxMl0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEzXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTRdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxNV0gPSAxO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpbmRleDogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgaW5kZXggXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0ICggdmFsdWVzOiBudW1iZXJbXSApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgMTY7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1sgaSBdID0gdmFsdWVzWyBpIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTp2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5KGRlc3Q/Ok1hdHJpeDQpOk1hdHJpeDQge1xyXG4gICAgICAgIGlmKCFkZXN0KSB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgMTY7IGkrKyl7XHJcbiAgICAgICAgICAgIGRlc3QudmFsdWVzW2ldID0gdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNwb3NlKCk6IE1hdHJpeDQge1xyXG4gICAgICAgIGNvbnN0IHRlbXAxMCA9IHRoaXMudmFsdWVzWzFdXHJcbiAgICAgICAgY29uc3QgdGVtcDIwID0gdGhpcy52YWx1ZXNbMl1cclxuICAgICAgICBjb25zdCB0ZW1wMzAgPSB0aGlzLnZhbHVlc1szXVxyXG4gICAgICAgIGNvbnN0IHRlbXAyMSA9IHRoaXMudmFsdWVzWzZdXHJcbiAgICAgICAgY29uc3QgdGVtcDMxID0gdGhpcy52YWx1ZXNbN11cclxuICAgICAgICBjb25zdCB0ZW1wMzIgPSB0aGlzLnZhbHVlc1sxMV1cclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMV0gPSB0aGlzLnZhbHVlc1s0XVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzJdID0gdGhpcy52YWx1ZXNbOF1cclxuICAgICAgICB0aGlzLnZhbHVlc1szXSA9IHRoaXMudmFsdWVzWzEyXVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzZdID0gdGhpcy52YWx1ZXNbOV1cclxuICAgICAgICB0aGlzLnZhbHVlc1s3XSA9IHRoaXMudmFsdWVzWzEzXVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzExXSA9IHRoaXMudmFsdWVzWzE0XVxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1s0XSA9IHRlbXAxMFxyXG4gICAgICAgIHRoaXMudmFsdWVzWzhdID0gdGVtcDIwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTJdID0gdGVtcDMwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbOV0gPSB0ZW1wMjFcclxuICAgICAgICB0aGlzLnZhbHVlc1sxM10gPSB0ZW1wMzFcclxuICAgICAgICB0aGlzLnZhbHVlc1sxNF0gPSB0ZW1wMzJcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV0ZXJtaW5hbnQoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBhMDAgPSB0aGlzLnZhbHVlc1swXVxyXG4gICAgICAgIGNvbnN0IGEwMSA9IHRoaXMudmFsdWVzWzFdXHJcbiAgICAgICAgY29uc3QgYTAyID0gdGhpcy52YWx1ZXNbMl1cclxuICAgICAgICBjb25zdCBhMDMgPSB0aGlzLnZhbHVlc1szXVxyXG4gICAgICAgIGNvbnN0IGExMCA9IHRoaXMudmFsdWVzWzRdXHJcbiAgICAgICAgY29uc3QgYTExID0gdGhpcy52YWx1ZXNbNV1cclxuICAgICAgICBjb25zdCBhMTIgPSB0aGlzLnZhbHVlc1s2XVxyXG4gICAgICAgIGNvbnN0IGExMyA9IHRoaXMudmFsdWVzWzddXHJcbiAgICAgICAgY29uc3QgYTIwID0gdGhpcy52YWx1ZXNbOF1cclxuICAgICAgICBjb25zdCBhMjEgPSB0aGlzLnZhbHVlc1s5XVxyXG4gICAgICAgIGNvbnN0IGEyMiA9IHRoaXMudmFsdWVzWzEwXVxyXG4gICAgICAgIGNvbnN0IGEyMyA9IHRoaXMudmFsdWVzWzExXVxyXG4gICAgICAgIGNvbnN0IGEzMCA9IHRoaXMudmFsdWVzWzEyXVxyXG4gICAgICAgIGNvbnN0IGEzMSA9IHRoaXMudmFsdWVzWzEzXVxyXG4gICAgICAgIGNvbnN0IGEzMiA9IHRoaXMudmFsdWVzWzE0XVxyXG4gICAgICAgIGNvbnN0IGEzMyA9IHRoaXMudmFsdWVzWzE1XVxyXG5cclxuICAgICAgICBjb25zdCBBMDAgPSBhMDAqKGExMSphMjIqYTMzICsgYTEyKmEyMyphMzEgKyBhMTMqYTIxKmEzMiAtIGExMSphMjMqYTMyIC0gYTEyKmEyMSphMzMgLSBhMTMqYTIyKmEzMSlcclxuICAgICAgICBjb25zdCBBMDEgPSAtYTAxKihhMTAqYTIyKmEzMyArIGExMiphMjMqYTMwICsgYTEzKmEyMCphMzIgLSBhMTAqYTIzKmEzMiAtIGExMiphMjAqYTMzIC0gYTEzKmEyMiphMzApXHJcbiAgICAgICAgY29uc3QgQTAyID0gYTAyKihhMTAqYTIxKmEzMyArIGExMSphMjMqYTMwICsgYTEzKmEyMCphMzEgLSBhMTAqYTIzKmEzMSAtIGExMSphMjAqYTMzIC0gYTEzKmEyMSphMzApXHJcbiAgICAgICAgY29uc3QgQTAzID0gLWEwMyooYTEwKmEyMSphMzIgKyBhMTEqYTIyKmEzMCArIGExMiphMjAqYTMxIC0gYTEwKmEyMiphMzEgLSBhMTEqYTIwKmEzMiAtIGExMiphMjEqYTMwKVxyXG5cclxuICAgICAgICByZXR1cm4gKEEwMCArIEEwMSArIEEwMiArIEEwMylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW52ZXJzZSgpOiBNYXRyaXg0IHtcclxuICAgICAgICBjb25zdCBhMDAgPSB0aGlzLnZhbHVlc1swXTtcclxuICAgICAgICBjb25zdCBhMDEgPSB0aGlzLnZhbHVlc1sxXTtcclxuICAgICAgICBjb25zdCBhMDIgPSB0aGlzLnZhbHVlc1syXTtcclxuICAgICAgICBjb25zdCBhMDMgPSB0aGlzLnZhbHVlc1szXTtcclxuICAgICAgICBjb25zdCBhMTAgPSB0aGlzLnZhbHVlc1s0XTtcclxuICAgICAgICBjb25zdCBhMTEgPSB0aGlzLnZhbHVlc1s1XTtcclxuICAgICAgICBjb25zdCBhMTIgPSB0aGlzLnZhbHVlc1s2XTtcclxuICAgICAgICBjb25zdCBhMTMgPSB0aGlzLnZhbHVlc1s3XTtcclxuICAgICAgICBjb25zdCBhMjAgPSB0aGlzLnZhbHVlc1s4XTtcclxuICAgICAgICBjb25zdCBhMjEgPSB0aGlzLnZhbHVlc1s5XTtcclxuICAgICAgICBjb25zdCBhMjIgPSB0aGlzLnZhbHVlc1sxMF07XHJcbiAgICAgICAgY29uc3QgYTIzID0gdGhpcy52YWx1ZXNbMTFdO1xyXG4gICAgICAgIGNvbnN0IGEzMCA9IHRoaXMudmFsdWVzWzEyXTtcclxuICAgICAgICBjb25zdCBhMzEgPSB0aGlzLnZhbHVlc1sxM107XHJcbiAgICAgICAgY29uc3QgYTMyID0gdGhpcy52YWx1ZXNbMTRdO1xyXG4gICAgICAgIGNvbnN0IGEzMyA9IHRoaXMudmFsdWVzWzE1XTtcclxuXHJcbiAgICAgICAgY29uc3QgQTAwID0gYTAwKihhMTEqYTIyKmEzMyArIGExMiphMjMqYTMxICsgYTEzKmEyMSphMzIgLSBhMTEqYTIzKmEzMiAtIGExMiphMjEqYTMzIC0gYTEzKmEyMiphMzEpO1xyXG4gICAgICAgIGNvbnN0IEEwMSA9IC1hMDEqKGExMCphMjIqYTMzICsgYTEyKmEyMyphMzAgKyBhMTMqYTIwKmEzMiAtIGExMCphMjMqYTMyIC0gYTEyKmEyMCphMzMgLSBhMTMqYTIyKmEzMCk7XHJcbiAgICAgICAgY29uc3QgQTAyID0gYTAyKihhMTAqYTIxKmEzMyArIGExMSphMjMqYTMwICsgYTEzKmEyMCphMzEgLSBhMTAqYTIzKmEzMSAtIGExMSphMjAqYTMzIC0gYTEzKmEyMSphMzApO1xyXG4gICAgICAgIGNvbnN0IEEwMyA9IC1hMDMqKGExMCphMjEqYTMyICsgYTExKmEyMiphMzAgKyBhMTIqYTIwKmEzMSAtIGExMCphMjIqYTMxIC0gYTExKmEyMCphMzIgLSBhMTIqYTIxKmEzMCk7XHJcblxyXG4gICAgICAgIGxldCBkZXQgPSBBMDAgKyBBMDEgKyBBMDIgKyBBMDM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGV0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkZXRJbnYgPSAxL2RldDtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMF0gPSBBMDAgKiBkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMV0gPSBBMDEgKiBkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMl0gPSBBMDIgKiBkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbM10gPSBBMDMgKiBkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNF0gPSAtYTEwKihhMDEqYTIyKmEzMyArIGEwMiphMjMqYTMxICsgYTAzKmEyMSphMzIgLSBhMDEqYTIzKmEzMiAtIGEwMiphMjEqYTMzIC0gYTAzKmEyMiphMzEpKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s1XSA9IGExMSooYTAwKmEyMiphMzMgKyBhMDIqYTIzKmEzMCArIGEwMyphMjAqYTMyIC0gYTAwKmEyMyphMzIgLSBhMDIqYTIwKmEzMyAtIGEwMyphMjIqYTMwKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNl0gPSAtYTEyKihhMDAqYTIxKmEzMyArIGEwMSphMjMqYTMwICsgYTAzKmEyMCphMzEgLSBhMDAqYTIzKmEzMSAtIGEwMSphMjAqYTMzIC0gYTAzKmEyMSphMzApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s3XSA9IGExMyooYTAwKmEyMSphMzIgKyBhMDEqYTIyKmEzMiArIGEwMiphMjAqYTMxIC0gYTAwKmEyMiphMzEgLSBhMDEqYTIwKmEzMi0gYTAyKmEyMSphMzApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1s4XSA9IGEyMCooYTAxKmExMiphMzMgKyBhMDIqYTEzKmEzMSArIGEwMyphMTEqYTMyIC0gYTAxKmExMyphMzIgLSBhMDIqYTExKmEzMyAtIGEwMyphMTIqYTMxKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbOV0gPSAtYTIxKihhMDAqYTEyKmEzMyArIGEwMiphMTMqYTMwICsgYTAzKmExMCphMzIgLSBhMDAqYTEzKmEzMiAtIGEwMiphMTAqYTMzIC0gYTAzKmExMiphMzApKmRldEludjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sxMF0gPSBhMjIqKGEwMCphMTEqYTMzICsgYTAxKmExMyphMzAgKyBhMDMqYTEwKmEzMSAtIGEwMCphMTMqYTMxIC0gYTAxKmExMCphMzMgLSBhMDMqYTExKmEzMCkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzExXSA9IC1hMjMqKGEwMCphMTEqYTMyICsgYTAxKmExMiphMzAgKyBhMDIqYTEwKmEzMSAtIGEwMCphMTIqYTMxIC0gYTAxKmExMCphMzIgLSBhMDIqYTExKmEzMCkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEyXSA9IC1hMzAqKGEwMSphMTIqYTIzICsgYTAyKmExMyphMjEgKyBhMDMqYTExKmEyMiAtIGEwMSphMTMqYTIyIC0gYTAyKmExMSphMjMgLSBhMDMqYTEyKmEyMSkqZGV0SW52O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEzXSA9IGEzMSooYTAwKmExMiphMjMgKyBhMDIqYTEzKmEyMCArIGEwMyphMTAqYTIyIC0gYTAwKmExMyphMjIgLSBhMDIqYTEwKmEyMyAtIGEwMyphMTIqYTIwKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTRdID0gLWEzMiooYTAwKmExMSphMjMgKyBhMDEqYTEzKmEyMCArIGEwMyphMTAqYTIxIC0gYTAwKmExMyphMjEgLSBhMDEqYTEwKmEyMyAtIGEwMyphMTEqYTIwKSpkZXRJbnY7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMTVdID0gYTMzKihhMDAqYTExKmEyMiArIGEwMSphMTIqYTIwICsgYTAyKmExMCphMTAgLSBhMDAqYTEyKmEyMSAtIGEwMSphMTAqYTIyIC0gYTAyKmExMSphMjApKmRldEludjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEludmVyc2UgKCBvdXQ6IE1hdHJpeDQgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29weSggb3V0ICk7XHJcbiAgICAgICAgbGV0IGEwMCA9IG91dC52YWx1ZXNbIDAgXSwgYTAxID0gb3V0LnZhbHVlc1sgMSBdLCBhMDIgPSBvdXQudmFsdWVzWyAyIF0sIGEwMyA9IG91dC52YWx1ZXNbIDMgXSxcclxuICAgICAgICAgICAgYTEwID0gb3V0LnZhbHVlc1sgNCBdLCBhMTEgPSBvdXQudmFsdWVzWyA1IF0sIGExMiA9IG91dC52YWx1ZXNbIDYgXSwgYTEzID0gb3V0LnZhbHVlc1sgNyBdLFxyXG4gICAgICAgICAgICBhMjAgPSBvdXQudmFsdWVzWyA4IF0sIGEyMSA9IG91dC52YWx1ZXNbIDkgXSwgYTIyID0gb3V0LnZhbHVlc1sgMTAgXSwgYTIzID0gb3V0LnZhbHVlc1sgMTEgXSxcclxuICAgICAgICAgICAgYTMwID0gb3V0LnZhbHVlc1sgMTIgXSwgYTMxID0gb3V0LnZhbHVlc1sgMTMgXSwgYTMyID0gb3V0LnZhbHVlc1sgMTQgXSwgYTMzID0gb3V0LnZhbHVlc1sgMTUgXTtcclxuXHJcbiAgICAgICAgbGV0IGRldDAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxyXG4gICAgICAgICAgICBkZXQwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcclxuICAgICAgICAgICAgZGV0MDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXHJcbiAgICAgICAgICAgIGRldDA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxyXG4gICAgICAgICAgICBkZXQxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcclxuICAgICAgICAgICAgZGV0MTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAgIGxldCBkZXQgPSAoIGRldDAwICogZGV0MTEgLSBkZXQwMSAqIGRldDEwICsgZGV0MDIgKiBkZXQwOSArIGRldDAzICogZGV0MDggLSBkZXQwNCAqIGRldDA3ICsgZGV0MDUgKiBkZXQwNiApO1xyXG5cclxuICAgICAgICBpZiAoICFkZXQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMCBdID0gKCBhMTEgKiBkZXQxMSAtIGExMiAqIGRldDEwICsgYTEzICogZGV0MDkgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxIF0gPSAoIC1hMDEgKiBkZXQxMSArIGEwMiAqIGRldDEwIC0gYTAzICogZGV0MDkgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAyIF0gPSAoIGEzMSAqIGRldDA1IC0gYTMyICogZGV0MDQgKyBhMzMgKiBkZXQwMyApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDMgXSA9ICggLWEyMSAqIGRldDA1ICsgYTIyICogZGV0MDQgLSBhMjMgKiBkZXQwMyApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDQgXSA9ICggLWExMCAqIGRldDExICsgYTEyICogZGV0MDggLSBhMTMgKiBkZXQwNyApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDUgXSA9ICggYTAwICogZGV0MTEgLSBhMDIgKiBkZXQwOCArIGEwMyAqIGRldDA3ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNiBdID0gKCAtYTMwICogZGV0MDUgKyBhMzIgKiBkZXQwMiAtIGEzMyAqIGRldDAxICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNyBdID0gKCBhMjAgKiBkZXQwNSAtIGEyMiAqIGRldDAyICsgYTIzICogZGV0MDEgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA4IF0gPSAoIGExMCAqIGRldDEwIC0gYTExICogZGV0MDggKyBhMTMgKiBkZXQwNiApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDkgXSA9ICggLWEwMCAqIGRldDEwICsgYTAxICogZGV0MDggLSBhMDMgKiBkZXQwNiApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEwIF0gPSAoIGEzMCAqIGRldDA0IC0gYTMxICogZGV0MDIgKyBhMzMgKiBkZXQwMCApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDExIF0gPSAoIC1hMjAgKiBkZXQwNCArIGEyMSAqIGRldDAyIC0gYTIzICogZGV0MDAgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxMiBdID0gKCAtYTEwICogZGV0MDkgKyBhMTEgKiBkZXQwNyAtIGExMiAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTMgXSA9ICggYTAwICogZGV0MDkgLSBhMDEgKiBkZXQwNyArIGEwMiAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTQgXSA9ICggLWEzMCAqIGRldDAzICsgYTMxICogZGV0MDEgLSBhMzIgKiBkZXQwMCApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDE1IF0gPSAoIGEyMCAqIGRldDAzIC0gYTIxICogZGV0MDEgKyBhMjIgKiBkZXQwMCApICogZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdGlwbHkobWF0cml4OiBNYXRyaXg0KTogTWF0cml4NCB7XHJcbiAgICAgICAgY29uc3QgYTAwID0gdGhpcy52YWx1ZXNbMF1cclxuICAgICAgICBjb25zdCBhMDEgPSB0aGlzLnZhbHVlc1sxXVxyXG4gICAgICAgIGNvbnN0IGEwMiA9IHRoaXMudmFsdWVzWzJdXHJcbiAgICAgICAgY29uc3QgYTAzID0gdGhpcy52YWx1ZXNbM11cclxuICAgICAgICBjb25zdCBhMTAgPSB0aGlzLnZhbHVlc1s0XVxyXG4gICAgICAgIGNvbnN0IGExMSA9IHRoaXMudmFsdWVzWzVdXHJcbiAgICAgICAgY29uc3QgYTEyID0gdGhpcy52YWx1ZXNbNl1cclxuICAgICAgICBjb25zdCBhMTMgPSB0aGlzLnZhbHVlc1s3XVxyXG4gICAgICAgIGNvbnN0IGEyMCA9IHRoaXMudmFsdWVzWzhdXHJcbiAgICAgICAgY29uc3QgYTIxID0gdGhpcy52YWx1ZXNbOV1cclxuICAgICAgICBjb25zdCBhMjIgPSB0aGlzLnZhbHVlc1sxMF1cclxuICAgICAgICBjb25zdCBhMjMgPSB0aGlzLnZhbHVlc1sxMV1cclxuICAgICAgICBjb25zdCBhMzAgPSB0aGlzLnZhbHVlc1sxMl1cclxuICAgICAgICBjb25zdCBhMzEgPSB0aGlzLnZhbHVlc1sxM11cclxuICAgICAgICBjb25zdCBhMzIgPSB0aGlzLnZhbHVlc1sxNF1cclxuICAgICAgICBjb25zdCBhMzMgPSB0aGlzLnZhbHVlc1sxNV1cclxuXHJcbiAgICAgICAgY29uc3QgYjAwID0gbWF0cml4LnZhbHVlc1swXVxyXG4gICAgICAgIGNvbnN0IGIwMSA9IG1hdHJpeC52YWx1ZXNbMV1cclxuICAgICAgICBjb25zdCBiMDIgPSBtYXRyaXgudmFsdWVzWzJdXHJcbiAgICAgICAgY29uc3QgYjAzID0gbWF0cml4LnZhbHVlc1szXVxyXG4gICAgICAgIGNvbnN0IGIxMCA9IG1hdHJpeC52YWx1ZXNbNF1cclxuICAgICAgICBjb25zdCBiMTEgPSBtYXRyaXgudmFsdWVzWzVdXHJcbiAgICAgICAgY29uc3QgYjEyID0gbWF0cml4LnZhbHVlc1s2XVxyXG4gICAgICAgIGNvbnN0IGIxMyA9IG1hdHJpeC52YWx1ZXNbN11cclxuICAgICAgICBjb25zdCBiMjAgPSBtYXRyaXgudmFsdWVzWzhdXHJcbiAgICAgICAgY29uc3QgYjIxID0gbWF0cml4LnZhbHVlc1s5XVxyXG4gICAgICAgIGNvbnN0IGIyMiA9IG1hdHJpeC52YWx1ZXNbMTBdXHJcbiAgICAgICAgY29uc3QgYjIzID0gbWF0cml4LnZhbHVlc1sxMV1cclxuICAgICAgICBjb25zdCBiMzAgPSBtYXRyaXgudmFsdWVzWzEyXVxyXG4gICAgICAgIGNvbnN0IGIzMSA9IG1hdHJpeC52YWx1ZXNbMTNdXHJcbiAgICAgICAgY29uc3QgYjMyID0gbWF0cml4LnZhbHVlc1sxNF1cclxuICAgICAgICBjb25zdCBiMzMgPSBtYXRyaXgudmFsdWVzWzE1XVxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1swXSA9IGEwMCAqIGIwMCArIGEwMSAqIGIxMCArIGEwMiAqIGIyMCArIGEwMyAqIGIzMFxyXG4gICAgICAgIHRoaXMudmFsdWVzWzFdID0gYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxICsgYTAzICogYjMxXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbMl0gPSBhMDAgKiBiMDIgKyBhMDEgKiBiMTIgKyBhMDIgKiBiMjIgKyBhMDMgKiBiMzJcclxuICAgICAgICB0aGlzLnZhbHVlc1szXSA9IGEwMCAqIGIwMyArIGEwMSAqIGIxMyArIGEwMiAqIGIyMyArIGEwMyAqIGIzM1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzRdID0gYTEwICogYjAwICsgYTExICogYjEwICsgYTEyICogYjIwICsgYTEzICogYjMwXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbNV0gPSBhMTAgKiBiMDEgKyBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzFcclxuICAgICAgICB0aGlzLnZhbHVlc1s2XSA9IGExMCAqIGIwMiArIGExMSAqIGIxMiArIGExMiAqIGIyMiArIGExMyAqIGIzMlxyXG4gICAgICAgIHRoaXMudmFsdWVzWzddID0gYTEwICogYjAzICsgYTExICogYjEzICsgYTEyICogYjIzICsgYTEzICogYjMzXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbOF0gPSBhMjAgKiBiMDAgKyBhMjEgKiBiMTAgKyBhMjIgKiBiMjAgKyBhMjMgKiBiMzBcclxuICAgICAgICB0aGlzLnZhbHVlc1s5XSA9IGEyMCAqIGIwMSArIGEyMSAqIGIxMSArIGEyMiAqIGIyMSArIGEyMyAqIGIzMVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzEwXSA9IGEyMCAqIGIwMiArIGEyMSAqIGIxMiArIGEyMiAqIGIyMiArIGEyMyAqIGIzMlxyXG4gICAgICAgIHRoaXMudmFsdWVzWzExXSA9IGEyMCAqIGIwMyArIGEyMSAqIGIxMyArIGEyMiAqIGIyMyArIGEyMyAqIGIzM1xyXG4gICAgICAgIHRoaXMudmFsdWVzWzEyXSA9IGEzMCAqIGIwMCArIGEzMSAqIGIxMCArIGEzMiAqIGIyMCArIGEzMyAqIGIzMFxyXG4gICAgICAgIHRoaXMudmFsdWVzWzEzXSA9IGEzMCAqIGIwMSArIGEzMSAqIGIxMSArIGEzMiAqIGIyMSArIGEzMyAqIGIzMVxyXG4gICAgICAgIHRoaXMudmFsdWVzWzE0XSA9IGEzMCAqIGIwMiArIGEzMSAqIGIxMiArIGEzMiAqIGIyMiArIGEzMyAqIGIzMlxyXG4gICAgICAgIHRoaXMudmFsdWVzWzE1XSA9IGEzMCAqIGIwMyArIGEzMSAqIGIxMyArIGEzMiAqIGIyMyArIGEzMyAqIGIzM1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcm9kdWN0IChtMTogTWF0cml4NCwgbTI6IE1hdHJpeDQsIHJlc3VsdDogTWF0cml4NCB8IG51bGwpOiBNYXRyaXg0e1xyXG4gICAgICAgIGxldCBhMDAgPSBtMS5hdCggMCApLCBhMDEgPSBtMS5hdCggMSApLCBhMDIgPSBtMS5hdCggMiApLCBhMDMgPSBtMS5hdCggMyApLFxyXG4gICAgICAgICAgICBhMTAgPSBtMS5hdCggNCApLCBhMTEgPSBtMS5hdCggNSApLCBhMTIgPSBtMS5hdCggNiApLCBhMTMgPSBtMS5hdCggNyApLFxyXG4gICAgICAgICAgICBhMjAgPSBtMS5hdCggOCApLCBhMjEgPSBtMS5hdCggOSApLCBhMjIgPSBtMS5hdCggMTAgKSwgYTIzID0gbTEuYXQoIDExICksXHJcbiAgICAgICAgICAgIGEzMCA9IG0xLmF0KCAxMiApLCBhMzEgPSBtMS5hdCggMTMgKSwgYTMyID0gbTEuYXQoIDE0ICksIGEzMyA9IG0xLmF0KCAxNSApO1xyXG5cclxuICAgICAgICBsZXQgYjAwID0gbTIuYXQoIDAgKSwgYjAxID0gbTIuYXQoIDEgKSwgYjAyID0gbTIuYXQoIDIgKSwgYjAzID0gbTIuYXQoIDMgKSxcclxuICAgICAgICAgICAgYjEwID0gbTIuYXQoIDQgKSwgYjExID0gbTIuYXQoIDUgKSwgYjEyID0gbTIuYXQoIDYgKSwgYjEzID0gbTIuYXQoIDcgKSxcclxuICAgICAgICAgICAgYjIwID0gbTIuYXQoIDggKSwgYjIxID0gbTIuYXQoIDkgKSwgYjIyID0gbTIuYXQoIDEwICksIGIyMyA9IG0yLmF0KCAxMSApLFxyXG4gICAgICAgICAgICBiMzAgPSBtMi5hdCggMTIgKSwgYjMxID0gbTIuYXQoIDEzICksIGIzMiA9IG0yLmF0KCAxNCApLCBiMzMgPSBtMi5hdCggMTUgKTtcclxuXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldCggW1xyXG4gICAgICAgICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzXHJcbiAgICAgICAgICAgIF0gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4NCggW1xyXG4gICAgICAgICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxICsgYjAzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyICsgYjAzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAxICsgYjMxICogYTExICsgYjMyICogYTIxICsgYjMzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAyICsgYjMxICogYTEyICsgYjMyICogYTIyICsgYjMzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzXHJcbiAgICAgICAgICAgIF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG11bHRpcGx5VmVjMyh2ZWMzOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgLy8gICAgICAgICB0aGlzLnZhbHVlc1swXSAqIHZlYzMueCArIHRoaXMudmFsdWVzWzRdICogdmVjMy55ICsgdGhpcy52YWx1ZXNbOF0gKiB2ZWMzLnogKyB0aGlzLnZhbHVlc1sxMl0sXHJcbiAgICAvLyAgICAgICAgIHRoaXMudmFsdWVzWzFdICogdmVjMy54ICsgdGhpcy52YWx1ZXNbNV0gKiB2ZWMzLnkgKyB0aGlzLnZhbHVlc1s5XSAqIHZlYzMueiArIHRoaXMudmFsdWVzWzEzXSxcclxuICAgIC8vICAgICAgICAgdGhpcy52YWx1ZXNbMl0gKiB2ZWMzLnggKyB0aGlzLnZhbHVlc1s2XSAqIHZlYzMueSArIHRoaXMudmFsdWVzWzEwXSAqIHZlYzMueiArIHRoaXMudmFsdWVzWzE0XVxyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5VmVjMyAoIHZlY3RvcjogVmVjdG9yMywgZGVzdDogVmVjdG9yMyB8IG51bGwgPSBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyAwIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDQgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOCBdICogeiArIHRoaXMudmFsdWVzWyAxMiBdO1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyAxIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDUgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOSBdICogeiArIHRoaXMudmFsdWVzWyAxMyBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyAyIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDYgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTAgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTQgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5VmVjNCAoIHZlY3RvcjogVmVjdG9yNCwgZGVzdDogVmVjdG9yNCB8IG51bGwgPSBudWxsICk6IFZlY3RvcjRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBWZWN0b3I0KCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56LFxyXG4gICAgICAgICAgICB3ID0gdmVjdG9yLnc7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyAwIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDQgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOCBdICogeiArIHRoaXMudmFsdWVzWyAxMiBdICogdztcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgMSBdICogeCArIHRoaXMudmFsdWVzWyA1IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDkgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTMgXSAqIHc7XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIDIgXSAqIHggKyB0aGlzLnZhbHVlc1sgNiBdICogeSArIHRoaXMudmFsdWVzWyAxMCBdICogeiArIHRoaXMudmFsdWVzWyAxNCBdICogdztcclxuICAgICAgICBkZXN0LncgPSB0aGlzLnZhbHVlc1sgMyBdICogeCArIHRoaXMudmFsdWVzWyA3IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDExIF0gKiB6ICsgdGhpcy52YWx1ZXNbIDE1IF0gKiB3O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnn6npmLXlj5jmjaJcclxuICAgIHB1YmxpYyB0cmFuc2xhdGUgKCB2ZWN0b3I6IFZlY3RvcjMgKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTIgXSArPSB0aGlzLnZhbHVlc1sgMCBdICogeCArIHRoaXMudmFsdWVzWyA0IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDggXSAqIHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEzIF0gKz0gdGhpcy52YWx1ZXNbIDEgXSAqIHggKyB0aGlzLnZhbHVlc1sgNSBdICogeSArIHRoaXMudmFsdWVzWyA5IF0gKiB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNCBdICs9IHRoaXMudmFsdWVzWyAyIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDYgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTAgXSAqIHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE1IF0gKz0gdGhpcy52YWx1ZXNbIDMgXSAqIHggKyB0aGlzLnZhbHVlc1sgNyBdICogeSArIHRoaXMudmFsdWVzWyAxMSBdICogejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyLCB6Om51bWJlcik6IE1hdHJpeDR7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMF0gPSB4O1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzFdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1syXSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbM10gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzRdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1s1XSA9IHk7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbNl0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzddID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1s4XSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbOV0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzEwXSA9IHo7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMTFdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1sxMl0gPSAwO1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWVzWzEzXSA9IDA7XHJcbiAgICAvLyAgICAgdGhpcy52YWx1ZXNbMTRdID0gMDtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlc1sxNV0gPSAxO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gdGhpcztcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc2NhbGUgKCB2ZWN0b3I6IFZlY3RvcjMgKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdICo9IHg7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSAqPSB4O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gKj0geDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdICo9IHg7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA0IF0gKj0geTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNSBdICo9IHk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDYgXSAqPSB5O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA3IF0gKj0geTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDggXSAqPSB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA5IF0gKj0gejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTAgXSAqPSB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMSBdICo9IHo7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGUgKCBhbmdsZTogbnVtYmVyLCBheGlzOiBWZWN0b3IzICk6IE1hdHJpeDQgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSBheGlzLngsXHJcbiAgICAgICAgICAgIHkgPSBheGlzLnksXHJcbiAgICAgICAgICAgIHogPSBheGlzLno7XHJcblxyXG4gICAgICAgIGxldCBsZW5ndGggPSBNYXRoLnNxcnQoIHggKiB4ICsgeSAqIHkgKyB6ICogeiApO1xyXG5cclxuICAgICAgICBpZiAoICFsZW5ndGggKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCBsZW5ndGggIT09IDEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gMSAvIGxlbmd0aDtcclxuICAgICAgICAgICAgeCAqPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHkgKj0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB6ICo9IGxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzID0gTWF0aC5zaW4oIGFuZ2xlICk7XHJcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyggYW5nbGUgKTtcclxuXHJcbiAgICAgICAgbGV0IHQgPSAxLjAgLSBjO1xyXG5cclxuICAgICAgICBsZXQgYTAwID0gdGhpcy52YWx1ZXNbIDAgXSwgYTAxID0gdGhpcy52YWx1ZXNbIDEgXSwgYTAyID0gdGhpcy52YWx1ZXNbIDIgXSwgYTAzID0gdGhpcy52YWx1ZXNbIDMgXSxcclxuICAgICAgICAgICAgYTEwID0gdGhpcy52YWx1ZXNbIDQgXSwgYTExID0gdGhpcy52YWx1ZXNbIDUgXSwgYTEyID0gdGhpcy52YWx1ZXNbIDYgXSwgYTEzID0gdGhpcy52YWx1ZXNbIDcgXSxcclxuICAgICAgICAgICAgYTIwID0gdGhpcy52YWx1ZXNbIDggXSwgYTIxID0gdGhpcy52YWx1ZXNbIDkgXSwgYTIyID0gdGhpcy52YWx1ZXNbIDEwIF0sIGEyMyA9IHRoaXMudmFsdWVzWyAxMSBdO1xyXG5cclxuICAgICAgICBsZXQgYjAwID0geCAqIHggKiB0ICsgYywgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxyXG4gICAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcywgYjExID0geSAqIHkgKiB0ICsgYywgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXHJcbiAgICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLCBiMjEgPSB5ICogeiAqIHQgLSB4ICogcywgYjIyID0geiAqIHogKiB0ICsgYztcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDQgXSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNSBdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA2IF0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDcgXSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDggXSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOSBdID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMCBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMSBdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyDop4bnn6npmLXlkozmipXlvbHnn6npmLVcclxuICAgIHB1YmxpYyBzdGF0aWMgZnJ1c3R1bSAoIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyICk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmwgPSAoIHJpZ2h0IC0gbGVmdCApLFxyXG4gICAgICAgICAgICB0YiA9ICggdG9wIC0gYm90dG9tICksXHJcbiAgICAgICAgICAgIGZuID0gKCBmYXIgLSBuZWFyICk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NCggW1xyXG4gICAgICAgICAgICAoIG5lYXIgKiAyICkgLyBybCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICggbmVhciAqIDIgKSAvIHRiLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgKCByaWdodCArIGxlZnQgKSAvIHJsLFxyXG4gICAgICAgICAgICAoIHRvcCArIGJvdHRvbSApIC8gdGIsXHJcbiAgICAgICAgICAgIC0oIGZhciArIG5lYXIgKSAvIGZuLFxyXG4gICAgICAgICAgICAtMSxcclxuXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIC0oIGZhciAqIG5lYXIgKiAyICkgLyBmbixcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBlcnNwZWN0aXZlICggZm92OiBudW1iZXIsIGFzcGVjdDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyICk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBsZXQgdG9wID0gbmVhciAqIE1hdGgudGFuKCBmb3YgKiAwLjUgKSxcclxuICAgICAgICAgICAgcmlnaHQgPSB0b3AgKiBhc3BlY3Q7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRyaXg0LmZydXN0dW0oIC1yaWdodCwgcmlnaHQsIC10b3AsIHRvcCwgbmVhciwgZmFyICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvcnRob2dyYXBoaWMgKCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCB0b3A6IG51bWJlciwgbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlciApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJsID0gKCByaWdodCAtIGxlZnQgKSxcclxuICAgICAgICAgICAgdGIgPSAoIHRvcCAtIGJvdHRvbSApLFxyXG4gICAgICAgICAgICBmbiA9ICggZmFyIC0gbmVhciApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoIFtcclxuICAgICAgICAgICAgMiAvIHJsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMiAvIHRiLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgLTIgLyBmbixcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIC0oIGxlZnQgKyByaWdodCApIC8gcmwsXHJcbiAgICAgICAgICAgIC0oIHRvcCArIGJvdHRvbSApIC8gdGIsXHJcbiAgICAgICAgICAgIC0oIGZhciArIG5lYXIgKSAvIGZuLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvb2tBdCAoIHBvc2l0aW9uOiBWZWN0b3IzLCB0YXJnZXQ6IFZlY3RvcjMsIHVwOiBWZWN0b3IzID0gVmVjdG9yMy51cCApOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBwb3NpdGlvbi5lcXVhbHMoIHRhcmdldCApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkZW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHogPSBWZWN0b3IzLmRpZmZlcmVuY2UoIHBvc2l0aW9uLCB0YXJnZXQgKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgeCA9IFZlY3RvcjMuY3Jvc3MoIHVwLCB6ICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHkgPSBWZWN0b3IzLmNyb3NzKCB6LCB4ICkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NCggW1xyXG4gICAgICAgICAgICB4LngsXHJcbiAgICAgICAgICAgIHkueCxcclxuICAgICAgICAgICAgei54LFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgeC55LFxyXG4gICAgICAgICAgICB5LnksXHJcbiAgICAgICAgICAgIHoueSxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIHgueixcclxuICAgICAgICAgICAgeS56LFxyXG4gICAgICAgICAgICB6LnosXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAtVmVjdG9yMy5kb3QoIHgsIHBvc2l0aW9uICksXHJcbiAgICAgICAgICAgIC1WZWN0b3IzLmRvdCggeSwgcG9zaXRpb24gKSxcclxuICAgICAgICAgICAgLVZlY3RvcjMuZG90KCB6LCBwb3NpdGlvbiApLFxyXG4gICAgICAgICAgICAxXHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaWRlbnRpdHkgPSBuZXcgTWF0cml4NCgpLnNldElkZW50aXR5KCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtMCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIG0xID0gbmV3IE1hdHJpeDQoKTtcclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3Iye1xyXG4gICAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXI9MCwgeTogbnVtYmVyPTApe1xyXG4gICAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4KHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB5KHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB4eSgpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLl94LFxyXG4gICAgICAgICAgICB0aGlzLl95LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBzZXQgeHkodmFsdWVzOiBbbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlc1swXVxyXG4gICAgICAgIHRoaXMuX3kgPSB2YWx1ZXNbMV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCB6ZXJvKCk6VmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb25lKCk6VmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTpWZWN0b3IyLGI6VmVjdG9yMik6bnVtYmVye1xyXG4gICAgICAgIGxldCBkaWZmID0gYS5zdWJ0cmFjdChiKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCBkaWZmLnggKiBkaWZmLnggKyBkaWZmLnkgKiBkaWZmLnkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHg/Om51bWJlcix5PzpudW1iZXIsej86bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGlmKHghPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLl94ID0geDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHkhPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLl95ID0geTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBlcXVhbHModjpWZWN0b3IyKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX3ggPT09IHYuX3ggJiYgdGhpcy5feSA9PT0gdi5feSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvQXJyYXkoKTpudW1iZXJbXXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuX3gsdGhpcy5feV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOkZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weUZyb20odmVjdG9yOlZlY3RvcjIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5feCA9IHZlY3Rvci5feDtcclxuICAgICAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQodjpWZWN0b3IyKTpWZWN0b3Iye1xyXG4gICAgICAgIHRoaXMuX3ggKz0gdi5feDtcclxuICAgICAgICB0aGlzLl95ICs9IHYuX3k7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJ0cmFjdCh2OlZlY3RvcjIpOlZlY3RvcjJ7XHJcbiAgICAgICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgLT0gdi5feTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpcGx5KHY6VmVjdG9yMik6VmVjdG9yMntcclxuICAgICAgICB0aGlzLl94ICo9IHYuX3g7XHJcbiAgICAgICAgdGhpcy5feSAqPSB2Ll95O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXZpZGUodjpWZWN0b3IyKTpWZWN0b3Iye1xyXG4gICAgICAgIHRoaXMuX3ggLz0gdi5feDtcclxuICAgICAgICB0aGlzLl95IC89IHYuX3k7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOlZlY3RvcjJ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjN7XHJcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF96OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlcj0wLCB5OiBudW1iZXI9MCwgejogbnVtYmVyPTApe1xyXG4gICAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgICAgIHRoaXMuX3ogPSB6O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4KHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeSgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB5KHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5feSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeigpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3o7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB6KHZhbHVlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5feiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB4eXooKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLl94LFxyXG4gICAgICAgICAgICB0aGlzLl95LFxyXG4gICAgICAgICAgICB0aGlzLl96LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBzZXQgeHl6KHZhbHVlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgdGhpcy5feCA9IHZhbHVlc1swXVxyXG4gICAgICAgIHRoaXMuX3kgPSB2YWx1ZXNbMV1cclxuICAgICAgICB0aGlzLl96ID0gdmFsdWVzWzJdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgemVybygpOlZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG9uZSgpOlZlY3RvcjMge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygxLDEsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXN0YW5jZShhOlZlY3RvcjMsYjpWZWN0b3IzKTpudW1iZXJ7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBhLnN1YnRyYWN0KGIpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZGlmZi54KmRpZmYueCtkaWZmLnkqZGlmZi55K2RpZmYueipkaWZmLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoeD86bnVtYmVyLHk/Om51bWJlcix6PzpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYoeCE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeSE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoeiE9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3ogPSB6O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGVxdWFscyh2OlZlY3RvcjMpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5feCA9PT0gdi5feCAmJiB0aGlzLl95ID09PSB2Ll95ICYmIHRoaXMuX3ogPT09IHYuX3opO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6bnVtYmVyW117XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLl94LHRoaXMuX3ksdGhpcy5fel07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB0b0Zsb2F0MzJBcnJheSgpOkZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkodGhpcy50b0FycmF5KCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weUZyb20odmVjdG9yOlZlY3RvcjMpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5feCA9IHZlY3Rvci5feDtcclxuICAgICAgICB0aGlzLl95ID0gdmVjdG9yLl95O1xyXG4gICAgICAgIHRoaXMuX3ogPSB2ZWN0b3IuX3o7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2OlZlY3RvcjMpOlZlY3RvcjN7XHJcbiAgICAgICAgdGhpcy5feCArPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgKz0gdi5feTtcclxuICAgICAgICB0aGlzLl96ICs9IHYuX3o7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJ0cmFjdCh2OlZlY3RvcjMpOlZlY3RvcjN7XHJcbiAgICAgICAgdGhpcy5feCAtPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgLT0gdi5feTtcclxuICAgICAgICB0aGlzLl96IC09IHYuX3o7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseSh2OlZlY3RvcjMpOlZlY3RvcjN7XHJcbiAgICAgICAgdGhpcy5feCAqPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgKj0gdi5feTtcclxuICAgICAgICB0aGlzLl96ICo9IHYuX3o7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpdmlkZSh2OlZlY3RvcjMpOlZlY3RvcjN7XHJcbiAgICAgICAgdGhpcy5feCAvPSB2Ll94O1xyXG4gICAgICAgIHRoaXMuX3kgLz0gdi5feTtcclxuICAgICAgICB0aGlzLl96IC89IHYuX3o7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOlZlY3RvcjN7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3opO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5ICggZGVzdDogVmVjdG9yMyB8IG51bGwgPSBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgICAgIGRlc3QuX3ggPSB0aGlzLng7XHJcbiAgICAgICAgZGVzdC5feSA9IHRoaXMueTtcclxuICAgICAgICBkZXN0Ll96ID0gdGhpcy56O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggdGhpcy5sZW5ndGgyICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZW5ndGgyICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuX3gsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLl95LFxyXG4gICAgICAgICAgICB6ID0gdGhpcy5fejtcclxuXHJcbiAgICAgICAgcmV0dXJuICggeCAqIHggKyB5ICogeSArIHogKiB6ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSAoIGRlc3Q6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICggbGVuZ3RoID09PSAxIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBsZW5ndGggPT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdC5feCA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QuX3kgPSAwO1xyXG4gICAgICAgICAgICBkZXN0Ll96ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVuZ3RoID0gMS4wIC8gbGVuZ3RoO1xyXG5cclxuICAgICAgICBkZXN0Ll94ICo9IGxlbmd0aDtcclxuICAgICAgICBkZXN0Ll95ICo9IGxlbmd0aDtcclxuICAgICAgICBkZXN0Ll96ICo9IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmZXJlbmNlICggdmVjdG9yOiBWZWN0b3IzLCB2ZWN0b3IyOiBWZWN0b3IzLCBkZXN0OiBWZWN0b3IzIHwgbnVsbCA9IG51bGwgKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgZGVzdC5feCA9IHZlY3Rvci54IC0gdmVjdG9yMi54O1xyXG4gICAgICAgIGRlc3QuX3kgPSB2ZWN0b3IueSAtIHZlY3RvcjIueTtcclxuICAgICAgICBkZXN0Ll96ID0gdmVjdG9yLnogLSB2ZWN0b3IyLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtICggdmVjdG9yOiBWZWN0b3IzLCB2ZWN0b3IyOiBWZWN0b3IzLCBkZXN0OiBWZWN0b3IzIHwgbnVsbCA9IG51bGwgKTogVmVjdG9yM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgZGVzdC5feCA9IHZlY3Rvci54ICsgdmVjdG9yMi54O1xyXG4gICAgICAgIGRlc3QuX3kgPSB2ZWN0b3IueSArIHZlY3RvcjIueTtcclxuICAgICAgICBkZXN0Ll96ID0gdmVjdG9yLnogKyB2ZWN0b3IyLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FsZSAoIHZhbHVlOiBudW1iZXIsIGRlc3Q6IFZlY3RvcjMgfCBudWxsID0gbnVsbCApOiBWZWN0b3IzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gdGhpcztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29weSggZGVzdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVzdC54ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueSAqPSB2YWx1ZTtcclxuICAgICAgICBkZXN0LnogKj0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZG90ICggdmVjdG9yOiBWZWN0b3IzLCB2ZWN0b3IyOiBWZWN0b3IzICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLl94LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLl95LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLl96O1xyXG5cclxuICAgICAgICBsZXQgeDIgPSB2ZWN0b3IyLl94LFxyXG4gICAgICAgICAgICB5MiA9IHZlY3RvcjIuX3ksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi5fejtcclxuXHJcbiAgICAgICAgcmV0dXJuICggeCAqIHgyICsgeSAqIHkyICsgeiAqIHoyICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcm9zcyAoIHZlY3RvcjogVmVjdG9yMywgdmVjdG9yMjogVmVjdG9yMywgZGVzdDogVmVjdG9yMyB8IG51bGwgPSBudWxsICk6IFZlY3RvcjNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLl94LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLl95LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLl96O1xyXG5cclxuICAgICAgICBsZXQgeDIgPSB2ZWN0b3IyLl94LFxyXG4gICAgICAgICAgICB5MiA9IHZlY3RvcjIuX3ksXHJcbiAgICAgICAgICAgIHoyID0gdmVjdG9yMi5fejtcclxuXHJcbiAgICAgICAgZGVzdC5feCA9IHkgKiB6MiAtIHogKiB5MjtcclxuICAgICAgICBkZXN0Ll95ID0geiAqIHgyIC0geCAqIHoyO1xyXG4gICAgICAgIGRlc3QuX3ogPSB4ICogeTIgLSB5ICogeDI7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSB1cCA9IG5ldyBWZWN0b3IzKCAwLCAxLCAwICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZG93biA9IG5ldyBWZWN0b3IzKCAwLCAtMSwgMCApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IHJpZ2h0ID0gbmV3IFZlY3RvcjMoIDEsIDAsIDAgKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBsZWZ0ID0gbmV3IFZlY3RvcjMoIC0xLCAwLCAwICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZm9yd2FyZCA9IG5ldyBWZWN0b3IzKCAwLCAwLCAxICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgYmFja3dhcmQgPSBuZXcgVmVjdG9yMyggMCwgMCwgLTEgKTtcclxuXHJcbiAgICBzdGF0aWMgdjAgPSBuZXcgVmVjdG9yMyggMCwgMCwgMCApO1xyXG4gICAgc3RhdGljIHYxID0gbmV3IFZlY3RvcjMoIDAsIDAsIDAgKTtcclxuICAgIHN0YXRpYyB2MiA9IG5ldyBWZWN0b3IzKCAwLCAwLCAwICk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3I0IHtcblxuICAgIC8vIHByaXZhdGUgdmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfejogbnVtYmVyO1xuICAgIHByaXZhdGUgX3c6IG51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy52YWx1ZXNbMF1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3hcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudmFsdWVzWzFdXG4gICAgICAgIHJldHVybiB0aGlzLl95XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB6KCk6IG51bWJlciB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLnZhbHVlc1sxXVxuICAgICAgICByZXR1cm4gdGhpcy5felxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgeCh4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZVxuICAgICAgICB0aGlzLl94ID0geFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZVxuICAgICAgICB0aGlzLl95ID0geVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgeih6OiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZVxuICAgICAgICB0aGlzLl96ID0gelxuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdyh3OiBudW1iZXIpIHtcbiAgICAgICAgLy8gdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZVxuICAgICAgICB0aGlzLl93ID0gd1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgciAoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGcgKCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBiICgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLl96O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYSAoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fdztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHIgKCB2YWx1ZTogbnVtYmVyIClcbiAgICB7XG4gICAgICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGcgKCB2YWx1ZTogbnVtYmVyIClcbiAgICB7XG4gICAgICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGIgKCB2YWx1ZTogbnVtYmVyIClcbiAgICB7XG4gICAgICAgIHRoaXMuX3ogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGEgKCB2YWx1ZTogbnVtYmVyIClcbiAgICB7XG4gICAgICAgIHRoaXMuX3cgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyPTAsIHk6bnVtYmVyPTAsIHo6bnVtYmVyPTAsIHc6bnVtYmVyPTApIHtcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLl96ID0gejtcbiAgICAgICAgdGhpcy5fdyA9IHc7XG4gICAgfVxuXG4gICAgcHVibGljIGNvcHkoZGVzdD86VmVjdG9yNCk6IFZlY3RvcjQge1xuICAgICAgICBpZighZGVzdCkge2Rlc3QgPSBuZXcgVmVjdG9yNCgpfVxuICAgICAgICBkZXN0LnggPSB0aGlzLl94O1xuICAgICAgICBkZXN0LnkgPSB0aGlzLl95O1xuICAgICAgICBkZXN0LnogPSB0aGlzLl96O1xuICAgICAgICBkZXN0LncgPSB0aGlzLl93O1xuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKHZlYzQ6VmVjdG9yNCk6IFZlY3RvcjQge1xuICAgICAgICB0aGlzLl94ICs9IHZlYzQueFxuICAgICAgICB0aGlzLl95ICs9IHZlYzQueVxuICAgICAgICB0aGlzLl96ICs9IHZlYzQuelxuICAgICAgICB0aGlzLl93ICs9IHZlYzQud1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnRyYWN0KHZlYzQ6IFZlY3RvcjQpOiBWZWN0b3I0IHtcbiAgICAgICAgdGhpcy5feCAtPSB2ZWM0Lng7XG4gICAgICAgIHRoaXMuX3kgLT0gdmVjNC55O1xuICAgICAgICB0aGlzLl96IC09IHZlYzQuejtcbiAgICAgICAgdGhpcy5fdyAtPSB2ZWM0Lnc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNjYWxlKHZhbHVlOiBudW1iZXIsIGRlc3Q/OlZlY3RvcjQpOiBWZWN0b3I0IHtcbiAgICAgICAgaWYoIWRlc3QpIHsgZGVzdCA9IHRoaXMgfVxuICAgICAgICBkZXN0LnggKj0gdmFsdWU7XG4gICAgICAgIGRlc3QueSAqPSB2YWx1ZTtcbiAgICAgICAgZGVzdC56ICo9IHZhbHVlO1xuICAgICAgICBkZXN0LncgKj0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRlc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGxlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudylcbiAgICB9XG5cbiAgICBwdWJsaWMgbm9ybWFsaXplKGRlc3Q/OiBWZWN0b3I0KTogVmVjdG9yNCB7XG4gICAgICAgIGlmKCFkZXN0KSB7IGRlc3QgPSB0aGlzIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aCgpXG5cbiAgICAgICAgZGVzdC54IC89IGxlbmd0aFxuICAgICAgICBkZXN0LnkgLz0gbGVuZ3RoXG4gICAgICAgIGRlc3QueiAvPSBsZW5ndGhcbiAgICAgICAgZGVzdC53IC89IGxlbmd0aFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlc3RcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVkOiBWZWN0b3I0ID0gbmV3IFZlY3RvcjQoIDEuMCwgMC4wLCAwLjAsIDEuMCApO1xuICAgIHN0YXRpYyBncmVlbjogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCAwLjAsIDEuMCwgMC4wLCAxLjAgKTtcbiAgICBzdGF0aWMgYmx1ZTogVmVjdG9yNCA9IG5ldyBWZWN0b3I0KCAwLjAsIDAuMCwgMS4wLCAxLjAgKTtcbiAgICBzdGF0aWMgYmxhY2s6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCggMCwwLDAsMCApO1xufSIsIi8vIOacieaXtuaIkeS7rOWcqOWujOaIkOaXtumcgOimgeaMieWQjeensOafpeivouWvueW6lOeahEhUTUxJbWFnZUVsZW1lbnTlr7nosaFcclxuLy8g5q2k5pe25bCx6ZyA6KaBSW1hZ2VJbmZv57uT5p6E5LqGXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUluZm9cclxue1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBwYXRoOiBzdHJpbmcsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50IClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0XHJcbntcclxuICAgIC8v6L+Z5Liq5Ye95pWw6KaB6LW35L2c55So77yM5b+F6aG76KaB5ZyodHNjb25maWcuanNvbuS4reWwhmRlZmF1bHTnmoRlczXmlLnmiJBFUzIwMTVcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEltYWdlQXN5bmMgKCB1cmw6IHN0cmluZyApOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApOiB2b2lkID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSggaW1hZ2UgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoIG5ldyBFcnJvciggJ0NvdWxkIG5vdCBsb2FkIGltYWdlIGF0ICcgKyB1cmwgKSApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/meS4quWHveaVsOimgei1t+S9nOeUqO+8jOW/hemhu+imgeWcqHRzY29uZmlnLmpzb27kuK3lsIZkZWZhdWx055qEZXM15pS55oiQRVMyMDE1XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRJbWFnZUFzeW5jU2FmZSAoIHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcgPSB1cmwgKTogUHJvbWlzZTxJbWFnZUluZm8gfCBudWxsPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKTogdm9pZCA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvOiBJbWFnZUluZm8gPSBuZXcgSW1hZ2VJbmZvKCBuYW1lLCBpbWFnZSApO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSggaW5mbyApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoIG51bGwgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkVGV4dEZpbGVBc3luYyAoIHVybDogc3RyaW5nICk6IFByb21pc2U8c3RyaW5nPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKTogdm9pZCA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICggZXY6IEV2ZW50ICk6IGFueSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSggeGhyLnJlc3BvbnNlVGV4dCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbiggXCJnZXRcIiwgdXJsLCB0cnVlLCBudWxsLCBudWxsICk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFycmF5QnVmZmVyQXN5bmMgKCB1cmw6IHN0cmluZyApOiBQcm9taXNlPEFycmF5QnVmZmVyPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKTogdm9pZCA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICggZXY6IEV2ZW50ICk6IGFueSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSggeGhyLnJlc3BvbnNlIGFzIEFycmF5QnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9wZW4oIFwiZ2V0XCIsIHVybCwgdHJ1ZSwgbnVsbCwgbnVsbCApO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50SW50ZXJhY3Rpb24gfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50SW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgR0xNYXRyaXhTdGFjaywgR0xXb3JsZE1hdHJpeFN0YWNrIH0gZnJvbSBcIi4vV2ViR0xNYXRyaXhTdGFja1wiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi9XZWJHTFRleHR1cmVcIjtcclxuaW1wb3J0IHsgR0xUZXh0dXJlQ2FjaGUgfSBmcm9tIFwiLi9XZWJHTFRleHR1cmVDYWNoZVwiO1xyXG5pbXBvcnQgeyBHTFByb2dyYW1DYWNoZSB9IGZyb20gXCIuL1dlYkdMUHJvZ3JhbUNhY2hlXCI7XHJcbmltcG9ydCB7IEdMUHJvZ3JhbSB9IGZyb20gXCIuL1dlYkdMUHJvZ3JhbVwiO1xyXG5pbXBvcnQgeyBHTE1lc2hCdWlsZGVyIH0gZnJvbSBcIi4vV2ViR0xNZXNoXCI7XHJcbmltcG9ydCB7IEdMQXR0cmliU3RhdGUgfSBmcm9tIFwiLi9XZWJHTEF0dHJpYlN0YXRlXCI7XHJcbmltcG9ydCB7IEdMSGVscGVyIH0gZnJvbSBcIi4vV2ViR0xIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJHTEFwcGxpY2F0aW9uIGV4dGVuZHMgRXZlbnRJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyDlj6/ku6Xnm7TmjqXmk43kvZxXZWJHTOebuOWFs+WGheWuuVxyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgLy8g5qih5oufT3BlbkdMMS4x5Lit55+p6Zi15aCG5qCIXHJcbiAgICAvLyDlsIHoo4XlnKhHTFdvcmxkTWF0cml4U3RhdGPkuK1cclxuICAgIHB1YmxpYyBtYXRTdGFjazogR0xXb3JsZE1hdHJpeFN0YWNrO1xyXG5cclxuICAgIC8vIOaooeaLn09wZW5HTDEuMeS4reeahOeri+WNs+e7mOWItuaooeW8j1xyXG4gICAgLy8g5bCB6KOF5ZyoR0xNZXNoQnVpbGRlcuexu+S4rVxyXG4gICAgcHVibGljIGJ1aWxkZXI6IEdMTWVzaEJ1aWxkZXI7XHJcblxyXG4gICAgLy8g5Li65LqG5ZyoM0Tnjq/looPkuK3lkIzml7bmlK/mjIFDYW52YXMyROe7mOWItu+8jOeJueWIq+aYr+S4uuS6huWunueOsOaWh+Wtl+e7mOWItlxyXG4gICAgcHJvdGVjdGVkIGNhbnZhczJEOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGN0eDJEOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjb250ZXh0QXR0cmlidXRlczogV2ViR0xDb250ZXh0QXR0cmlidXRlcyA9IHsgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSB9LCBuZWVkMkQ6IGJvb2xlYW4gPSBmYWxzZSApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIGNhbnZhcyApO1xyXG4gICAgICAgIGxldCBjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGwgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCBcIndlYmdsXCIsIGNvbnRleHRBdHRyaWJ1dGVzICk7XHJcbiAgICAgICAgaWYgKCBjdHggPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoIFwiIOaXoOazleWIm+W7uldlYkdMUmVuZGVyaW5nQ29udGV4dOS4iuS4i+aWh+WvueixoSBcIiApO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiIOaXoOazleWIm+W7uldlYkdMUmVuZGVyaW5nQ29udGV4dOS4iuS4i+aWh+WvueixoSBcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbCA9IGN0eDtcclxuXHJcbiAgICAgICAgaWYgKCBuZWVkMkQgPT09IHRydWUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNhbnZhc0VsZW06IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJjYW52YXNcIiApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gdGhpcy5jYW52YXMucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCBwYXJlbnQgPT09IG51bGwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiY2FudmFz5YWD57Sg5b+F6aG76KaB5pyJ54i25LqyISFcIiApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoIGNhbnZhc0VsZW0gKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4MkQgPSBjYW52YXNFbGVtLmdldENvbnRleHQoIFwiMmRcIiApO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzRWxlbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmFkZEV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2V1cFwiLCB0aGlzICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibW91c2Vtb3ZlXCIsIHRoaXMgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzMkQgPSBjYW52YXNFbGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXRTdGFjayA9IG5ldyBHTFdvcmxkTWF0cml4U3RhY2soKTtcclxuICAgICAgICAvLyDliJ3lp4vljJbmuLLmn5PnirbmgIFcclxuICAgICAgICBHTEhlbHBlci5zZXREZWZhdWx0U3RhdGUoIHRoaXMuZ2wgKTtcclxuXHJcbiAgICAgICAgLy8g55Sx5LqOQ2FudmFz5piv5bem5omL57O777yM6ICMd2ViR0zmmK/lj7PmiYvns7vvvIzpnIDopoFGaWxwWUNvb3JkXHJcbiAgICAgICAgdGhpcy5pc0ZsaXBZQ29vcmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIzliJvlu7pkZWZhdWx057q555CGXHJcbiAgICAgICAgR0xUZXh0dXJlQ2FjaGUuaW5zdGFuY2Uuc2V0KCBcImRlZmF1bHRcIiwgR0xUZXh0dXJlLmNyZWF0ZURlZmF1bHRUZXh0dXJlKCB0aGlzLmdsICkgKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pe277yM5Yib5bu66aKc6Imy5ZKM57q555CGUHJvZ3JhbVxyXG4gICAgICAgIEdMUHJvZ3JhbUNhY2hlLmluc3RhbmNlLnNldCggXCJjb2xvclwiLCBHTFByb2dyYW0uY3JlYXRlRGVmYXVsdENvbG9yUHJvZ3JhbSggdGhpcy5nbCApICk7XHJcbiAgICAgICAgR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2Uuc2V0KCBcInRleHR1cmVcIiwgR0xQcm9ncmFtLmNyZWF0ZURlZmF1bHRUZXh0dXJlUHJvZ3JhbSggdGhpcy5nbCApICk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOWIm+W7uuminOiJskdMTWVzaEJ1aWxkZXLlr7nosaFcclxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgR0xNZXNoQnVpbGRlciggdGhpcy5nbCwgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9CSVQgfCBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVCwgR0xQcm9ncmFtQ2FjaGUuaW5zdGFuY2UuZ2V0TXVzdCggXCJjb2xvclwiICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0TW91c2VDYW52YXMgKCk6IEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLmNhbnZhczJEICE9PSBudWxsICYmIHRoaXMuY3R4MkQgIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzMkQ7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2ViR0wyQXBwbGljYXRpb24gZXh0ZW5kcyBFdmVudEludGVyYWN0aW9uXHJcbntcclxuICAgIHB1YmxpYyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgIHB1YmxpYyBtYXRTdGFjazogR0xNYXRyaXhTdGFjaztcclxuICAgIHB1YmxpYyBidWlsZGVyOiBHTE1lc2hCdWlsZGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBjYW52YXMyRDogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBjdHgyRDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY29udGV4dEF0dHJpYnV0ZXM6IFdlYkdMQ29udGV4dEF0dHJpYnV0ZXMgPSB7IHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UgfSwgbmVlZDJEOiBib29sZWFuID0gZmFsc2UgKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBjYW52YXMgKTtcclxuICAgICAgICBsZXQgY3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCggXCJ3ZWJnbFwiLCBjb250ZXh0QXR0cmlidXRlcyApO1xyXG4gICAgICAgIGlmICggY3R4ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCBcIiDml6Dms5XliJvlu7pXZWJHTFJlbmRlcmluZ0NvbnRleHTkuIrkuIvmloflr7nosaEgXCIgKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIiDml6Dms5XliJvlu7pXZWJHTFJlbmRlcmluZ0NvbnRleHTkuIrkuIvmloflr7nosaEgXCIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2wgPSBjdHg7XHJcblxyXG4gICAgICAgIGlmICggbmVlZDJEID09PSB0cnVlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNFbGVtOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiY2FudmFzXCIgKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXNFbGVtLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uc3R5bGUudG9wID0gXCIwcHhcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICggcGFyZW50ID09PSBudWxsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcImNhbnZhc+WFg+e0oOW/hemhu+imgeacieeItuS6siEhXCIgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKCBjYW52YXNFbGVtICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eDJEID0gY2FudmFzRWxlbS5nZXRDb250ZXh0KCBcIjJkXCIgKTtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhc0VsZW0uYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcywgZmFsc2UgKTtcclxuICAgICAgICAgICAgY2FudmFzRWxlbS5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcyApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcyApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlbW92ZVwiLCB0aGlzICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhczJEID0gY2FudmFzRWxlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlua4suafk+eKtuaAgVxyXG4gICAgICAgIEdMSGVscGVyLnNldERlZmF1bHRTdGF0ZSggdGhpcy5nbCApO1xyXG5cclxuICAgICAgICAvLyDlhoXnva7kuIDkuKrnn6npmLXloIbmoIhcclxuICAgICAgICB0aGlzLm1hdFN0YWNrID0gbmV3IEdMTWF0cml4U3RhY2soKTtcclxuICAgICAgICB0aGlzLm1hdFN0YWNrLnBlcnNwZWN0aXZlKCA0NSwgY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCwgMC4xLCAxMDAwICk7XHJcblxyXG4gICAgICAgIC8vIOeUseS6jkNhbnZhc+aYr+W3puaJi+ezu++8jOiAjHdlYkdM5piv5Y+z5omL57O777yM6ZyA6KaBRmlscFlDb29yZFxyXG4gICAgICAgIHRoaXMuaXNGbGlwWUNvb3JkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pe277yM5Yib5bu6ZGVmYXVsdOe6ueeQhlxyXG4gICAgICAgIEdMVGV4dHVyZUNhY2hlLmluc3RhbmNlLnNldCggXCJkZWZhdWx0XCIsIEdMVGV4dHVyZS5jcmVhdGVEZWZhdWx0VGV4dHVyZSggdGhpcy5nbCApICk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluaXtu+8jOWIm+W7uuminOiJsuWSjOe6ueeQhlByb2dyYW1cclxuICAgICAgICBHTFByb2dyYW1DYWNoZS5pbnN0YW5jZS5zZXQoIFwiY29sb3JcIiwgR0xQcm9ncmFtLmNyZWF0ZURlZmF1bHRDb2xvclByb2dyYW0oIHRoaXMuZ2wgKSApO1xyXG4gICAgICAgIEdMUHJvZ3JhbUNhY2hlLmluc3RhbmNlLnNldCggXCJ0ZXh0dXJlXCIsIEdMUHJvZ3JhbS5jcmVhdGVEZWZhdWx0VGV4dHVyZVByb2dyYW0oIHRoaXMuZ2wgKSApO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbml7bvvIzliJvlu7rpopzoibJHTE1lc2hCdWlsZGVy5a+56LGhXHJcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEdMTWVzaEJ1aWxkZXIoIHRoaXMuZ2wsIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUIHwgR0xBdHRyaWJTdGF0ZS5DT0xPUl9CSVQsIEdMUHJvZ3JhbUNhY2hlLmluc3RhbmNlLmdldE11c3QoIFwiY29sb3JcIiApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE1vdXNlQ2FudmFzICgpOiBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5jYW52YXMyRCAhPT0gbnVsbCAmJiB0aGlzLmN0eDJEICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbnZhczJEO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgdHlwZSBHTEF0dHJpYkJpdHMgPSBudW1iZXI7XHJcbmV4cG9ydCB0eXBlIEdMQXR0cmliT2Zmc2V0TWFwID0geyBbIGtleTogc3RyaW5nIF06IG51bWJlciB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMQXR0cmliU3RhdGVcclxue1xyXG4gICAgLy8g6aG254K55bGe5oCnXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBPU0lUSU9OX0JJVDogbnVtYmVyID0gKCAxIDw8IDAgKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUE9TSVRJT05fQ09NUE9ORU5UOiBudW1iZXIgPSAzOyAvL3h5elxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQT1NJVElPTl9OQU1FOiBzdHJpbmcgPSBcImFQb3NpdGlvblwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQT1NJVElPTl9MT0NBVElPTjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWENPT1JEX0JJVDogbnVtYmVyID0gKCAxIDw8IDEgKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkRfQ09NUE9ORU5UOiBudW1iZXIgPSAyOyAvL3N0XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWENPT1JEX05BTUU6IHN0cmluZyA9IFwiYVRleENvb3JkXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRFWENPT1JEX0xPQ0FUSU9OOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkQxX0JJVDogbnVtYmVyID0gKCAxIDw8IDIgKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkQxX0NPTVBPTkVOVDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVYQ09PUkQxX05BTUU6IHN0cmluZyA9IFwiYVRleENvb3JkMVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBURVhDT09SRDFfTE9DQVRJT046IG51bWJlciA9IDI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOT1JNQUxfQklUOiBudW1iZXIgPSAoIDEgPDwgMyApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOT1JNQUxfQ09NUE9ORU5UOiBudW1iZXIgPSAzOyAvL3h5elxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOT1JNQUxfTkFNRTogc3RyaW5nID0gXCJhTm9ybWFsXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9MT0NBVElPTjogbnVtYmVyID0gMztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBTkdFTlRfQklUOiBudW1iZXIgPSAoIDEgPDwgNCApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQU5HRU5UX0NPTVBPTkVOVDogbnVtYmVyID0gNDsgLy94eXp3XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRBTkdFTlRfTkFNRTogc3RyaW5nID0gXCJhVGFuZ2VudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUQU5HRU5UX0xPQ0FUSU9OOiBudW1iZXIgPSA0O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MT1JfQklUOiBudW1iZXIgPSAoIDEgPDwgNSApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xPUl9DT01QT05FTlQ6IG51bWJlciA9IDQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTE9SX05BTUU6IHN0cmluZyA9IFwiYUNvbG9yXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTE9SX0xPQ0FUSU9OOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIC8qXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdFSUdIVDBfQklUOiBudW1iZXIgPSAoMSA8PCA3KTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0VJR0hUMV9CSVQ6IG51bWJlciA9ICgxIDw8IDgpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBXRUlHSFQyX0JJVDogbnVtYmVyID0gKDEgPDwgOSk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdFSUdIVDNfQklUOiBudW1iZXIgPSAoMSA8PCAxMCk7XHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQVRUUklCU1RSSURFOiBzdHJpbmcgPSBcIlNUUklERVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBVFRSSUJCWVRFTEVOR1RIOiBzdHJpbmcgPSBcIkJZVEVMRU5HVEhcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZMT0FUMzJfU0laRSA9IEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUlOVDE2X1NJWkUgPSBVaW50MTZBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1ha2VWZXJ0ZXhBdHRyaWJzICggXHJcbiAgICAgICAgdXNlVGV4Y29vcmQwOiBib29sZWFuLCBcclxuICAgICAgICB1c2VUZXhjb29yZDE6IGJvb2xlYW4sIFxyXG4gICAgICAgIHVzZU5vcm1hbDogYm9vbGVhbiwgXHJcbiAgICAgICAgdXNlVGFuZ2VudDogYm9vbGVhbiwgXHJcbiAgICAgICAgdXNlQ29sb3I6IGJvb2xlYW4gKTogR0xBdHRyaWJCaXRzXHJcbiAgICB7XHJcbiAgICAgICAgLy8g5LiN566h5aaC5L2V77yM5oC75piv5L2/55So5L2N572u5Z2Q5qCH5bGe5oCnXHJcbiAgICAgICAgbGV0IGJpdHM6IEdMQXR0cmliQml0cyA9IEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUO1xyXG4gICAgICAgIC8vIOS9v+eUqCB8PSDmk43kvZznrKbmt7vliqDmoIforrDkvY1cclxuICAgICAgICBpZiAoIHVzZVRleGNvb3JkMCA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHVzZVRleGNvb3JkMSA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCB1c2VOb3JtYWwgPT09IHRydWUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLk5PUk1BTF9CSVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdXNlVGFuZ2VudCA9PT0gdHJ1ZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiaXRzIHw9IEdMQXR0cmliU3RhdGUuVEFOR0VOVF9CSVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggdXNlQ29sb3IgPT09IHRydWUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYml0cyB8PSBHTEF0dHJpYlN0YXRlLkNPTE9SX0JJVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5L2/55So5oyJ5L2N5LiO77yIJu+8ieaTjeS9nOespuadpea1i+ivleWQpuaYr+WMheWQq+afkOS4quS9jeagh+iusOWAvFxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNQb3NpdGlvbiAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cyApOiBib29sZWFuIHsgcmV0dXJuICggYXR0cmliQml0cyAmIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUICkgIT09IDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzTm9ybWFsICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQklUICkgIT09IDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzVGV4Q29vcmRfMCAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cyApOiBib29sZWFuIHsgcmV0dXJuICggYXR0cmliQml0cyAmIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklUICkgIT09IDA7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzVGV4Q29vcmRfMSAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cyApOiBib29sZWFuIHsgcmV0dXJuICggYXR0cmliQml0cyAmIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0JJVCApICE9PSAwOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc0NvbG9yICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5DT0xPUl9CSVQgKSAhPT0gMDsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNUYW5nZW50ICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IGJvb2xlYW4geyByZXR1cm4gKCBhdHRyaWJCaXRzICYgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0JJVCApICE9PSAwOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdHRyaWJWZXJ0ZXhBcnJheVBvaW50ZXIgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBvZmZzZXRNYXA6IEdMQXR0cmliT2Zmc2V0TWFwICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RyaWRlOiBudW1iZXIgPSBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuQVRUUklCU1RSSURFIF07XHJcbiAgICAgICAgaWYgKCBzdHJpZGUgPT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcInZlcnRleCBBcnJheeaciemXrumimO+8ge+8gVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXF1ZW5jZWTnmoTor51zdHJpZGXkuLowXHJcbiAgICAgICAgaWYgKCBzdHJpZGUgIT09IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5BVFRSSUJCWVRFTEVOR1RIIF0gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3RyaWRlID09PSB1bmRlZmluZWQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF07XHJcbiAgICAgICAgaWYgKCBvZmZzZXQgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0NPTVBPTkVOVCwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIG9mZnNldCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF07XHJcbiAgICAgICAgaWYgKCBvZmZzZXQgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfQ09NUE9ORU5ULCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgb2Zmc2V0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdO1xyXG4gICAgICAgIGlmICggb2Zmc2V0ICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlciggR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9DT01QT05FTlQsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9mZnNldCA9IG9mZnNldE1hcFsgR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTkFNRSBdO1xyXG4gICAgICAgIGlmICggb2Zmc2V0ICE9PSB1bmRlZmluZWQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlciggR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0NPTVBPTkVOVCwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUsIG9mZnNldCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXTtcclxuICAgICAgICBpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoIEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuQ09MT1JfQ09NUE9ORU5ULCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSwgb2Zmc2V0ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgPSBvZmZzZXRNYXBbIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9OQU1FIF07XHJcbiAgICAgICAgaWYgKCBvZmZzZXQgIT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKCBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9DT01QT05FTlQsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRlICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgYXR0cmliQml0czogbnVtYmVyLCBlbmFibGU6IGJvb2xlYW4gPSB0cnVlICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzUG9zaXRpb24oIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVuYWJsZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzTm9ybWFsKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBlbmFibGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIGVuYWJsZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMSggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggZW5hYmxlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTE9DQVRJT04gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggZW5hYmxlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04gKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5DT0xPUl9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUYW5nZW50KCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCBlbmFibGUgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSggR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0xPQ0FUSU9OICk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9MT0NBVElPTiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9MT0NBVElPTiApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFZlcnRleEJ5dGVTdHJpZGUgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGJ5dGVPZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IEdMQXR0cmliU3RhdGUuTk9STUFMX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMSggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzQ29sb3IoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IEdMQXR0cmliU3RhdGUuQ09MT1JfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGFuZ2VudCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJ5dGVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTZXF1ZW5jZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXAgKCBhdHRyaWJCaXRzOiBHTEF0dHJpYkJpdHMsIHZlcnRDb3VudDogbnVtYmVyICk6IEdMQXR0cmliT2Zmc2V0TWFwXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9mZnNldHM6IEdMQXR0cmliT2Zmc2V0TWFwID0ge307IC8vIOWIneWni+WMlumhtueCueWxnuaAp+WBj+enu+ihqFxyXG4gICAgICAgIGxldCBieXRlT2Zmc2V0OiBudW1iZXIgPSAwOyAvLyDliJ3lp4vljJbml7bnmoTpppblnLDlnYDkuLowXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1Bvc2l0aW9uKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6K6w5b2V5L2N572u5Z2Q5qCH55qE6aaW5Zyw5Z2AXHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gMDsgXHJcbiAgICAgICAgICAgIC8vIOS9jee9ruWdkOagh+eUsTPkuKpmbG9hdOWAvOe7hOaIkO+8jOWboOatpOS4i+S4gOS4quWxnuaAp+eahOmmluWcsOWdgOS9jSAzICogNCAqIOmhtueCueaVsOmHj1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IHZlcnRDb3VudCAqIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzTm9ybWFsKCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSB2ZXJ0Q291bnQgKiBHTEF0dHJpYlN0YXRlLk5PUk1BTF9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gdmVydENvdW50ICogR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzEoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9OQU1FIF0gPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IHZlcnRDb3VudCAqIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzQ29sb3IoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gdmVydENvdW50ICogR0xBdHRyaWJTdGF0ZS5DT0xPUl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RhbmdlbnQoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfTkFNRSBdID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgYnl0ZU9mZnNldCArPSB2ZXJ0Q291bnQgKiBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfQ09NUE9ORU5UICogR0xBdHRyaWJTdGF0ZS5GTE9BVDMyX1NJWkU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NlcXVlbmNlZExheW91dOWFt+aciUFUVFJJQlNUUklEReWSjEFUVFJJQlNUUklEReWxnuaAp1xyXG4gICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuQVRUUklCU1RSSURFIF0gPSBieXRlT2Zmc2V0IC8gdmVydENvdW50OyAvLyDmgLvnmoTlrZfoioLmlbAgLyDpobbngrnmlbDph48gID0g5q+P5Liq6aG254K555qEc3RyaWRl77yM5a6e6ZmF5LiK6aG65bqP5a2Y5YKo5pe25LiN6ZyA6KaB6L+Z5Liq5YC8XHJcbiAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5BVFRSSUJCWVRFTEVOR1RIIF0gPSBieXRlT2Zmc2V0OyAvLyDmgLvnmoTlrZfoioLmlbBcclxuICAgICAgICByZXR1cm4gb2Zmc2V0cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEludGVybGVhdmVkTGF5b3V0QXR0cmliT2Zmc2V0TWFwICggYXR0cmliQml0czogR0xBdHRyaWJCaXRzICk6IEdMQXR0cmliT2Zmc2V0TWFwXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9mZnNldHM6IEdMQXR0cmliT2Zmc2V0TWFwID0ge307IC8vIOWIneWni+WMlumhtueCueWxnuaAp+WBj+enu+ihqFxyXG4gICAgICAgIGxldCBieXRlT2Zmc2V0OiBudW1iZXIgPSAwOyAvLyDliJ3lp4vljJbml7bnmoTpppblnLDlnYDkuLowXHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNQb3NpdGlvbiggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOiusOW9leS9jee9ruWdkOagh+eahOmmluWcsOWdgFxyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXSA9IDA7XHJcbiAgICAgICAgICAgIC8vIOS9jee9ruWdkOagh+eUsTPkuKpmbG9hdOWAvOe7hOaIkO+8jOWboOatpOS4i+S4gOS4quWxnuaAp+eahOmmluWcsOWdgOS9jSAzICogNCA9IDEy5Liq5a2X6IqC5aSEXHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4i+mdouWQhOS4quWxnuaAp+WBj+enu+iuoeeul+eul+azleWQjOS4iu+8jOWUr+S4gOWMuuWIq+aYr+WIhumHj+eahOS4jeWQjOiAjOW3slxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF0gPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IEdMQXR0cmliU3RhdGUuTk9STUFMX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzEoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9OQU1FIF0gPSBieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICs9IEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzQ29sb3IoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5DT0xPUl9DT01QT05FTlQgKiBHTEF0dHJpYlN0YXRlLkZMT0FUMzJfU0laRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUYW5nZW50KCBhdHRyaWJCaXRzICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX05BTUUgXSA9IGJ5dGVPZmZzZXQ7XHJcbiAgICAgICAgICAgIGJ5dGVPZmZzZXQgKz0gR0xBdHRyaWJTdGF0ZS5UQU5HRU5UX0NPTVBPTkVOVCAqIEdMQXR0cmliU3RhdGUuRkxPQVQzMl9TSVpFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RyaWRl5ZKMbGVuZ3Ro55u4562JXHJcbiAgICAgICAgb2Zmc2V0c1sgR0xBdHRyaWJTdGF0ZS5BVFRSSUJTVFJJREUgXSA9IGJ5dGVPZmZzZXQ7ICAgIC8vIOmXtOmalOaVsOe7hOaWueazleWtmOWCqOeahOivne+8jOmhtueCueeahHN0cmlkZemdnuW4uOmHjeimgVxyXG4gICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuQVRUUklCQllURUxFTkdUSCBdID0gYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9mZnNldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTZXByYXRlZExheW91dEF0dHJpYk9mZnNldE1hcCAoIGF0dHJpYkJpdHM6IEdMQXR0cmliQml0cyApOiBHTEF0dHJpYk9mZnNldE1hcFxyXG4gICAge1xyXG4gICAgICAgIC8vIOavj+S4qumhtueCueWxnuaAp+S9v+eUqOS4gOS4qnZib+eahOivne+8jOavj+S4qm9mZnNldHPkuK3nmoTpobbngrnlsZ7mgKfnmoTlgY/np7vpg73mmK/kuLowXHJcbiAgICAgICAgLy8g5bm25LiUb2Zmc2V0c+eahGxlbmd0aCA9IHZib+eahOS4quaVsO+8jOS4jemcgOimgemhtueCuXN0cmlkZeWSjGJ5dGVMZW50aOWxnuaAp1xyXG4gICAgICAgIGxldCBvZmZzZXRzOiBHTEF0dHJpYk9mZnNldE1hcCA9IHt9O1xyXG4gICAgICAgIGxldCBieXRlT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzUG9zaXRpb24oIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXSA9IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc05vcm1hbCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGV4Q29vcmRfMCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzEoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEMV9OQU1FIF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzQ29sb3IoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvZmZzZXRzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzVGFuZ2VudCggYXR0cmliQml0cyApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9mZnNldHNbIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9OQU1FIF0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9mZnNldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0F0dHJpYlN0YXRlVmFsaWQgKCBhdHRyaWJCaXRzOiBudW1iZXIgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIC8vIOS4gOWumuimgeacieS9jee9ruWQkemHj1xyXG4gICAgICAgIGlmICggIUdMQXR0cmliU3RhdGUuaGFzUG9zaXRpb24oIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6h566XdGFuZ2VudCBzcGFjZeW/hemhu+imgeaciXV25Z2Q5qCH5ZKM5rOV57q/5ZCR6YePXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RhbmdlbnQoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoICFHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIGF0dHJpYkJpdHMgKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyDmnprkuL7nsbtcclxuZXhwb3J0IGVudW0gRVNoYWRlclR5cGVcclxue1xyXG4gICAgVlNfU0hBREVSLFxyXG4gICAgRlNfU0hBREVSXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVHTFNMRVNEYXRhVHlwZVxyXG57XHJcbiAgICBGTE9BVF9WRUMyID0gMHg4QjUwLFxyXG4gICAgRkxPQVRfVkVDMyxcclxuICAgIEZMT0FUX1ZFQzQsXHJcbiAgICBJTlRfVkVDMixcclxuICAgIElOVF9WRUMzLFxyXG4gICAgSU5UX1ZFQzQsXHJcbiAgICBCT09MLFxyXG4gICAgQk9PTF9WRUMyLFxyXG4gICAgQk9PTF9WRUMzLFxyXG4gICAgQk9PTF9WRUM0LFxyXG4gICAgRkxPQVRfTUFUMixcclxuICAgIEZMT0FUX01BVDMsXHJcbiAgICBGTE9BVF9NQVQ0LFxyXG4gICAgU0FNUExFUl8yRCxcclxuICAgIFNBTVBMRVJfQ1VCRSxcclxuXHJcbiAgICBGTE9BVCA9IDB4MTQwNixcclxuICAgIElOVCA9IDB4MTQwNFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xVbmlmb3JtSW5mb1xyXG57XHJcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyOyAgIC8vIHNpemUg5piv5oyHdHlwZeeahOS4quaVsO+8jOWIh+iusFxyXG4gICAgcHVibGljIHR5cGU6IEVHTFNMRVNEYXRhVHlwZTsgICAvLyB0eXBlIOaYr1VuaWZvcm0gVHlwZe+8jOiAjOS4jeaYr0RhdGFUeXBlXHJcbiAgICBwdWJsaWMgbG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHNpemU6IG51bWJlciwgdHlwZTogbnVtYmVyLCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvYztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMQXR0cmliSW5mb1xyXG57XHJcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyOyAgIC8vIHNpemUg5piv5oyHdHlwZeeahOS4quaVsO+8jOWIh+iusFxyXG4gICAgcHVibGljIHR5cGU6IEVHTFNMRVNEYXRhVHlwZTsgICAvLyB0eXBlIOaYr1VuaWZvcm0gVHlwZe+8jOiAjOS4jeaYr0RhdGFUeXBlXHJcbiAgICBwdWJsaWMgbG9jYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBzaXplOiBudW1iZXIsIHR5cGU6IG51bWJlciwgbG9jOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHTFVuaWZvcm1NYXAgPSB7IFsga2V5OiBzdHJpbmcgXTogR0xVbmlmb3JtSW5mbyB9O1xyXG5leHBvcnQgdHlwZSBHTEF0dHJpYk1hcCA9IHsgWyBrZXk6IHN0cmluZyBdOiBHTEF0dHJpYkluZm8gfTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR0xIZWxwZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBwcmludFN0YXRlcyAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIOaJgOacieeahGJvb2xlYW7nirbmgIHlj5jph4/vvIzlhbE55LiqXHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiMS4gaXNCbGVuZEVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5CTEVORCApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiMi4gaXNDdWxsRmFjZUVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5DVUxMX0ZBQ0UgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjMuIGlzRGVwdGhUZXN0RW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLkRFUFRIX1RFU1QgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjQuIGlzRGl0aGVyRW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLkRJVEhFUiApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiNS4gaXNQb2x5Z29uT2Zmc2V0RmlsbEVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5QT0xZR09OX09GRlNFVF9GSUxMICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCI2LiBpc1NhbXBsZUFscGh0VG9Db3ZlcmFnZUVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5TQU1QTEVfQUxQSEFfVE9fQ09WRVJBR0UgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjcuIGlzU2FtcGxlQ292ZXJhZ2VFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuU0FNUExFX0NPVkVSQUdFICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCI4LiBpc1NjaXNzb3JUZXN0RW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLlNDSVNTT1JfVEVTVCApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiOS4gaXNTdGVuY2lsVGVzdEVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5TVEVOQ0lMX1RFU1QgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpbnRXZWJHTEluZm8gKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJyZW5kZXJlciA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5SRU5ERVJFUiApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwidmVyc2lvbiA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5WRVJTSU9OICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJ2ZW5kb3IgPSBcIiArIGdsLmdldFBhcmFtZXRlciggZ2wuVkVORE9SICkgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJnbHNsIHZlcnNpb24gPSBcIiArIGdsLmdldFBhcmFtZXRlciggZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByaW50V2ViR0xUZXh0dXJlSW5mbyAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTID0gXCIsIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFMgKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMgPSBcIixnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyggXCJNQVhfVEVYVFVSRV9TSVpFID0gXCIsIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiTUFYX0NVQkVfTUFQX1RFWFRVUkVfU0laRSA9IFwiLCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJpZ2dlckNvbnRleHRMb3N0RXZlbnQgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmV0OiBXRUJHTF9sb3NlX2NvbnRleHQgfCBudWxsID0gZ2wuZ2V0RXh0ZW5zaW9uKCAnV0VCR0xfbG9zZV9jb250ZXh0JyApO1xyXG4gICAgICAgIGlmICggcmV0ICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldC5sb3NlQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrR0xFcnJvciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBlcnI6IG51bWJlciA9IGdsLmdldEVycm9yKCk7XHJcbiAgICAgICAgaWYgKCBlcnIgPT09IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiV2ViR0wgRXJyb3IgTk86IFwiLCBlcnIgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGVmYXVsdFN0YXRlICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZGVmYXVsdCBbcj0wLGc9MCxiPTAsYT0wXVxyXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoIDAuMCwgMC4wLCAwLjAsIDAuMCApOyAvLyDmr4/mrKHmuIXlsY/ml7bvvIzlsIbpopzoibLnvJPlhrLljLrorr7nva7kuLrlhajpgI/mmI7pu5HoibJcclxuICAgICAgICBnbC5jbGVhckRlcHRoKCAxLjAgKTsgLy8g5q+P5qyh5riF5bGP5pe277yM5bCG5rex5bqm57yT5Yay5Yy66K6+572u5Li6MS4wXHJcbiAgICAgICAgZ2wuZW5hYmxlKCBnbC5ERVBUSF9URVNUICk7IC8v5byA5ZCv5rex5bqm5rWL6K+VXHJcbiAgICAgICAgZ2wuZW5hYmxlKCBnbC5DVUxMX0ZBQ0UgKTsgIC8v5byA5ZCv6IOM6Z2i5YmU6ZmkXHJcbiAgICAgICAgZ2wuZW5hYmxlKCBnbC5TQ0lTU09SX1RFU1QgKTsgLy8g5byA5ZCv6KOB5Ymq5rWL6K+VXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRWaWV3cG9ydCAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHY6IG51bWJlcltdICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBnbC52aWV3cG9ydCggdlsgMCBdLCB2WyAxIF0sIHZbIDIgXSwgdlsgMyBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTaGFkZXIgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBFU2hhZGVyVHlwZSApOiBXZWJHTFNoYWRlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCB0eXBlID09PSBFU2hhZGVyVHlwZS5WU19TSEFERVIgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKCBnbC5WRVJURVhfU0hBREVSICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoIGdsLkZSQUdNRU5UX1NIQURFUiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHNoYWRlciA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzliJvlu7pXZWJHTFNoYWRlcuWvueixoeWksei0pe+8jOaIkeS7rOmHh+WPluaKm+mUmemUmeivr+eahOWkhOeQhuaWueW8j1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xTaGFkZXLliJvlu7rlpLHotKXvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29tcGlsZVNoYWRlciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGNvZGU6IHN0cmluZywgc2hhZGVyOiBXZWJHTFNoYWRlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKCBzaGFkZXIsIGNvZGUgKTsgLy8g6L295YWlc2hhZGVy5rqQ56CBXHJcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlciggc2hhZGVyICk7IC8vIOe8luivkXNoYWRlcua6kOeggVxyXG4gICAgICAgIC8vIOajgOafpee8luivkemUmeivr1xyXG4gICAgICAgIGlmICggZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKCBzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTICkgPT09IGZhbHNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOe8luivkeWHuueOsOmUmeivr++8jOWImeW8ueWHuuWvueivneahhu+8jOS6huino+mUmeivr+eahOWOn+WboFxyXG4gICAgICAgICAgICBhbGVydCggZ2wuZ2V0U2hhZGVySW5mb0xvZyggc2hhZGVyICkgKTtcclxuICAgICAgICAgICAgLy8g54S25ZCO5bCGc2hhZGVy5Yig6Zmk5o6J77yM6Ziy5q2i5YaF5a2Y5rOE5ryPXHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlciggc2hhZGVyICk7XHJcbiAgICAgICAgICAgIC8vIOe8luivkemUmeivr+i/lOWbnmZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g57yW6K+R5oiQ5Yqf6L+U5ZuedHJ1ZVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJvZ3JhbSAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogV2ViR0xQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb2dyYW06IFdlYkdMUHJvZ3JhbSB8IG51bGwgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICAgICAgaWYgKCBwcm9ncmFtID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOebtOaOpeaKm+WHuumUmeivr1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xQcm9ncmFt5Yib5bu65aSx6LSl77yBXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsaW5rUHJvZ3JhbSAoXHJcbiAgICAgICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgLy8g5riy5p+T5LiK5LiL5paH5a+56LGhXHJcbiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLCAgICAgLy8g6ZO+5o6l5Zmo5a+56LGhXHJcbiAgICAgICAgdnNTaGFkZXI6IFdlYkdMU2hhZGVyLCAgICAgLy8g6KaB6ZO+5o6l55qE6aG254K5552A6Imy5ZmoXHJcbiAgICAgICAgZnNTaGFkZXI6IFdlYkdMU2hhZGVyLCAgICAgLy8g6KaB6ZO+5o6l55qE54mH5q61552A6Imy5ZmoXHJcbiAgICAgICAgYmVmb3JlUHJvZ3JhbUxpbms6ICggKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gKSA9PiB2b2lkICkgfCBudWxsID0gbnVsbCxcclxuICAgICAgICBhZnRlclByb2dyYW1MaW5rOiAoICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtICkgPT4gdm9pZCApIHwgbnVsbCA9IG51bGwgKTogYm9vbGVhblxyXG4gICAge1xyXG5cclxuICAgICAgICAvLyAx44CB5L2/55SoYXR0YWNoU2hhZGVy5pa55rOV5bCG6aG254K55ZKM54mH5q61552A6Imy5Zmo5LiO5b2T5YmN55qE6L+e5o6l5Zmo55u45YWz6IGUXHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCB2c1NoYWRlciApO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlciggcHJvZ3JhbSwgZnNTaGFkZXIgKTtcclxuXHJcbiAgICAgICAgLy8gMuOAgeWcqOiwg+eUqGxpbmtQcm9ncmFt5pa55rOV5LmL5YmN77yM5oyJ6ZyA6Kem5Y+RYmVmb3JlUHJvZ3JhbUxpbmvlm57osIPlh73mlbBcclxuICAgICAgICBpZiAoIGJlZm9yZVByb2dyYW1MaW5rICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVByb2dyYW1MaW5rKCBnbCwgcHJvZ3JhbSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gM+OAgeiwg+eUqGxpbmtQcm9ncmFt6L+b6KGM6ZO+5o6l5pON5L2cXHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0oIHByb2dyYW0gKTtcclxuICAgICAgICAvLyA044CB5L2/55So5bimZ2wuTElOS19TVEFUVVPlj4LmlbDnmoRnZXRQcm9ncmFtUGFyYW1ldGVy5pa55rOV77yM6L+b6KGM6ZO+5o6l54q25oCB5qOA5p+lXHJcbiAgICAgICAgaWYgKCBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKCBwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyApID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyA0LjEg5aaC5p6c6ZO+5o6l5Ye66ZSZ77yM6LCD55SoZ2V0UHJvZ3JhbUluZm9Mb2fmlrnms5XlsIbplJnor6/kv6Hmga/ku6XlvLnmoYbmlrnlvI/pgJrnn6XosIPnlKjogIVcclxuICAgICAgICAgICAgYWxlcnQoIGdsLmdldFByb2dyYW1JbmZvTG9nKCBwcm9ncmFtICkgKTtcclxuICAgICAgICAgICAgLy8gNC4yIOWIoOmZpOaOieebuOWFs+i1hOa6kO+8jOmYsuatouWGheWtmOazhOa8j1xyXG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoIHZzU2hhZGVyICk7XHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlciggZnNTaGFkZXIgKTtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbSggcHJvZ3JhbSApO1xyXG4gICAgICAgICAgICAvLyA0LjMg6L+U5Zue6ZO+5o6l5aSx6LSl54q25oCBXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyA144CB5L2/55SodmFsaWRhdGVQcm9ncmFt6L+b6KGM6ZO+5o6l6aqM6K+BXHJcbiAgICAgICAgZ2wudmFsaWRhdGVQcm9ncmFtKCBwcm9ncmFtICk7XHJcbiAgICAgICAgLy8gNuOAgeS9v+eUqOW4pmdsLlZBTElEQVRFX1NUQVRVU+WPguaVsOeahGdldFByb2dyYW1QYXJhbWV0ZXLmlrnms5XvvIzov5vooYzpqozor4HnirbmgIHmo4Dmn6VcclxuICAgICAgICBpZiAoIGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoIHByb2dyYW0sIGdsLlZBTElEQVRFX1NUQVRVUyApID09PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyA2LjEg5aaC5p6c6aqM6K+B5Ye66ZSZ77yM6LCD55SoZ2V0UHJvZ3JhbUluZm9Mb2fmlrnms5XlsIbplJnor6/kv6Hmga/ku6XlvLnmoYbmlrnlvI/pgJrnn6XosIPnlKjogIVcclxuICAgICAgICAgICAgYWxlcnQoIGdsLmdldFByb2dyYW1JbmZvTG9nKCBwcm9ncmFtICkgKTtcclxuICAgICAgICAgICAgLy8gNi4yIOWIoOmZpOaOieebuOWFs+i1hOa6kO+8jOmYsuatouWGheWtmOazhOa8j1xyXG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoIHZzU2hhZGVyICk7XHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlciggZnNTaGFkZXIgKTtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbSggcHJvZ3JhbSApO1xyXG4gICAgICAgICAgICAvLyA2LjMg6L+U5Zue6ZO+5o6l5aSx6LSl54q25oCBXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyA344CB5YWo6YOo5q2j56Gu77yM5oyJ6ZyA6LCD55SoYWZ0ZXJQcm9ncmFtTGlua+Wbnuiwg+WHveaVsFxyXG4gICAgICAgIGlmICggYWZ0ZXJQcm9ncmFtTGluayAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhZnRlclByb2dyYW1MaW5rKCBnbCwgcHJvZ3JhbSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gOOOAgei/lOWbnumTvuaOpeato+ehruihqOekulxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFByb2dyYW1BY3RpdmVBdHRyaWJzICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBvdXQ6IEdMQXR0cmliTWFwICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iOt+WPluW9k+WJjWFjdGl2ZeeKtuaAgeeahGF0dHJpYnV0ZeWSjHVuaWZvcm3nmoTmlbDph49cclxuICAgICAgICAvL+W+iOmHjeimgeS4gOeCue+8jGFjdGl2ZV9hdHRyaWJ1dGVzL3VuaWZvcm1z5b+F6aG75ZyobGlua+WQjuaJjeiDveiOt+W+l1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dHNDb3VudDogbnVtYmVyID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlciggcHJvZ3JhbSwgZ2wuQUNUSVZFX0FUVFJJQlVURVMgKTtcclxuXHJcbiAgICAgICAgLy/lvojph43opoHkuIDngrnvvIzmiYDosJNhY3RpdmXmmK/mjId1bmlmb3Jt5bey57uP6KKr5L2/55So55qE77yM5ZCm5YiZ5LiN5bGe5LqOdW5pZm9ybSx1bmlmb3Jt5Zyoc2hhZGVy5Lit5b+F6aG75piv6K+75Y+W77yM5LiN6IO96LWL5YC8XHJcbiAgICAgICAgLy/lvojph43opoHkuIDngrnvvIxhdHRyaWJ1dGXlnKhzaGFkZXLkuK3lj6rog73or7vlj5bvvIzkuI3og73otYvlgLws5aaC5p6c5rKh5pyJ6KKr5L2/55So55qE6K+d77yM5Lmf5piv5LiN566X5YWlYWN0aXZlQXR0cmli5Lit5Y6755qEXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXR0cmlidXRzQ291bnQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogV2ViR0xBY3RpdmVJbmZvIHwgbnVsbCA9IGdsLmdldEFjdGl2ZUF0dHJpYiggcHJvZ3JhbSwgaSApO1xyXG4gICAgICAgICAgICBpZiAoIGluZm8gKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdXRbIGluZm8ubmFtZSBdID0gbmV3IEdMQXR0cmliSW5mbyggaW5mby5zaXplLCBpbmZvLnR5cGUsIGdsLmdldEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBpbmZvLm5hbWUgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvZ3JhbUF0Y2l2ZVVuaWZvcm1zICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBvdXQ6IEdMVW5pZm9ybU1hcCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVuaWZvcm1zQ291bnQ6IG51bWJlciA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIoIHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyApO1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHVuaWZvcm1zQ291bnQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5mbzogV2ViR0xBY3RpdmVJbmZvIHwgbnVsbCA9IGdsLmdldEFjdGl2ZVVuaWZvcm0oIHByb2dyYW0sIGkgKTtcclxuICAgICAgICAgICAgaWYgKCBpbmZvIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKCBwcm9ncmFtLCBpbmZvLm5hbWUgKTtcclxuICAgICAgICAgICAgICAgIGlmICggbG9jICE9PSBudWxsIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRbIGluZm8ubmFtZSBdID0gbmV3IEdMVW5pZm9ybUluZm8oIGluZm8uc2l6ZSwgaW5mby50eXBlLCBsb2MgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUJ1ZmZlciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogV2ViR0xCdWZmZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgYnVmZmVyOiBXZWJHTEJ1ZmZlciB8IG51bGwgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBpZiAoIGJ1ZmZlciA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xCdWZmZXLliJvlu7rlpLHotKXvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29sb3JCdWZmZXJEYXRhICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBVaW50OEFycmF5XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBpeGVsczogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KCBnbC5kcmF3aW5nQnVmZmVyV2lkdGggKiBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0ICogNCApO1xyXG4gICAgICAgIGdsLnJlYWRQaXhlbHMoIDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzICk7XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IE1hdGhIZWxwZXIgfSBmcm9tIFwiLi4vbWF0aC9NYXRoSGVscGVyXCJcclxuZXhwb3J0IGVudW0gRU1hdHJpeE1vZGVcclxue1xyXG4gICAgTU9ERUxWSUVXLFxyXG4gICAgUFJPSkVDVElPTixcclxuICAgIFRFWFRVUkVcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMTWF0cml4U3RhY2tcclxue1xyXG4gICAgcHJpdmF0ZSBfbXZTdGFjazogTWF0cml4NFtdO1xyXG4gICAgcHJpdmF0ZSBfcHJvalN0YWNrOiBNYXRyaXg0W107XHJcbiAgICBwcml2YXRlIF90ZXhTdGFjazogTWF0cml4NFtdO1xyXG4gICAgcHVibGljIG1hdHJpeE1vZGU6IEVNYXRyaXhNb2RlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoKVxyXG4gICAge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pe25q+P5Liq55+p6Zi15qCI6YO95YWI5re75Yqg5LiA5Liq5q2j5Lqk5b2S5LiA5YyW5ZCO55qE55+p6Zi1XHJcbiAgICAgICAgdGhpcy5fbXZTdGFjayA9IFtdO1xyXG4gICAgICAgIHRoaXMuX212U3RhY2sucHVzaCggbmV3IE1hdHJpeDQoKSApO1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9qU3RhY2sgPSBbXTtcclxuICAgICAgICB0aGlzLl9wcm9qU3RhY2sucHVzaCggbmV3IE1hdHJpeDQoKSApO1xyXG5cclxuICAgICAgICB0aGlzLl90ZXhTdGFjayA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3RleFN0YWNrLnB1c2goIG5ldyBNYXRyaXg0KCkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuTU9ERUxWSUVXO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZWxWaWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9tdlN0YWNrLmxlbmd0aCA8PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJtb2RlbCB2aWV3IG1hdHJpeCBzdGFja+S4uuepuu+8gVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdlN0YWNrWyB0aGlzLl9tdlN0YWNrLmxlbmd0aCAtIDEgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2plY3Rpb25NYXRyaXggKCk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3Byb2pTdGFjay5sZW5ndGggPD0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwicHJvamVjdGlvbiBtYXRyaXggc3RhY2vkuLrnqbrvvIFcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvalN0YWNrWyB0aGlzLl9wcm9qU3RhY2subGVuZ3RoIC0gMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZWxWaWV3UHJvamVjdGlvbk1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXQ6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeC5jb3B5KCByZXQgKTtcclxuICAgICAgICByZXQubXVsdGlwbHkoIHRoaXMubW9kZWxWaWV3TWF0cml4ICk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5vcm1hbE1hdHJpeCAoKTogTWF0cml4NFxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXQ6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LmNvcHkoIHJldCApO1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LmludmVyc2UoKTtcclxuICAgICAgICByZXQudHJhbnNwb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRleHR1cmVNYXRyaXggKCk6IE1hdHJpeDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX3RleFN0YWNrLmxlbmd0aCA8PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJwcm9qZWN0aW9uIG1hdHJpeCBzdGFja+S4uuepuu+8gVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXhTdGFja1sgdGhpcy5fdGV4U3RhY2subGVuZ3RoIC0gMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoTWF0cml4ICgpOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgbGV0IG12OiBNYXRyaXg0ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LmNvcHkoIG12ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tdlN0YWNrLnB1c2goIG12ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2ogPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LmNvcHkoIHByb2ogKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2pTdGFjay5wdXNoKCBwcm9qICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5URVhUVVJFOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRleDogTWF0cml4NCA9IG5ldyBNYXRyaXg0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXguY29weSggdGV4ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXhTdGFjay5wdXNoKCB0ZXggKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9wTWF0cml4ICgpOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICggdGhpcy5tYXRyaXhNb2RlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuTU9ERUxWSUVXOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbXZTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlBST0pFQ1RJT046XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9qU3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5URVhUVVJFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4U3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRJZGVudGl0eSAoKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5URVhUVVJFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlTWF0cml4LnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRNYXRyaXggKCBtYXQ6IE1hdHJpeDQgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIG1hdC5jb3B5KCB0aGlzLm1vZGVsVmlld01hdHJpeCApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRU1hdHJpeE1vZGUuUFJPSkVDVElPTjpcclxuICAgICAgICAgICAgICAgIG1hdC5jb3B5KCB0aGlzLnByb2plY3Rpb25NYXRyaXggKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICBtYXQuY29weSggdGhpcy50ZXh0dXJlTWF0cml4ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlcnNwZWN0aXZlICggZm92OiBudW1iZXIsIGFzcGVjdDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyLCBpc1JhZGlhbnM6IGJvb2xlYW4gPSBmYWxzZSApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhNb2RlID0gRU1hdHJpeE1vZGUuUFJPSkVDVElPTjtcclxuICAgICAgICBpZiAoIGlzUmFkaWFucyA9PSBmYWxzZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3YgPSBNYXRoSGVscGVyLnRvUmFkaWFuKCBmb3YgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hdDogTWF0cml4NCA9IE1hdHJpeDQucGVyc3BlY3RpdmUoIGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIgKTtcclxuICAgICAgICB0aGlzLmxvYWRNYXRyaXgoIG1hdCApO1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLk1PREVMVklFVztcclxuICAgICAgICAvLyDmmK/lkKbopoHosIPnlKhsb2FkSWRlbnRpdHnmlrnms5U/Pz9cclxuICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcnVzdHVtICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLlBST0pFQ1RJT047XHJcbiAgICAgICAgbGV0IG1hdDogTWF0cml4NCA9IE1hdHJpeDQuZnJ1c3R1bSggbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIgKTtcclxuICAgICAgICB0aGlzLmxvYWRNYXRyaXgoIG1hdCApO1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLk1PREVMVklFVztcclxuICAgICAgICAvLyDmmK/lkKbopoHosIPnlKhsb2FkSWRlbnRpdHnmlrnms5U/Pz9cclxuICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcnRobyAoIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1hdHJpeE1vZGUgPSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OO1xyXG4gICAgICAgIGxldCBtYXQ6IE1hdHJpeDQgPSBNYXRyaXg0Lm9ydGhvZ3JhcGhpYyggbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIgKTtcclxuICAgICAgICB0aGlzLmxvYWRNYXRyaXgoIG1hdCApO1xyXG4gICAgICAgIHRoaXMubWF0cml4TW9kZSA9IEVNYXRyaXhNb2RlLk1PREVMVklFVztcclxuICAgICAgICAvLyDmmK/lkKbopoHosIPnlKhsb2FkSWRlbnRpdHnmlrnms5U/Pz9cclxuICAgICAgICB0aGlzLmxvYWRJZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb29rQXQgKCBwb3M6IFZlY3RvcjMsIHRhcmdldDogVmVjdG9yMywgdXA6IFZlY3RvcjMgPSBWZWN0b3IzLnVwICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1hdHJpeE1vZGUgPSBFTWF0cml4TW9kZS5NT0RFTFZJRVc7XHJcbiAgICAgICAgbGV0IG1hdDogTWF0cml4NCA9IE1hdHJpeDQubG9va0F0KCBwb3MsIHRhcmdldCwgdXAgKTtcclxuICAgICAgICB0aGlzLmxvYWRNYXRyaXgoIG1hdCApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlVmlldyAoIHBvczogVmVjdG9yMywgeEF4aXM6IFZlY3RvcjMsIHlBeGlzOiBWZWN0b3IzLCB6QXhpczogVmVjdG9yMyApOiBHTE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgekF4aXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vZm9yd2FyZCBjcm9zcyByaWdodCA9IHVwXHJcbiAgICAgICAgVmVjdG9yMy5jcm9zcyggekF4aXMsIHhBeGlzLCB5QXhpcyApO1xyXG4gICAgICAgIHlBeGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvL3VwIGNyb3NzIGZvcndhcmQgPSByaWdodFxyXG4gICAgICAgIFZlY3RvcjMuY3Jvc3MoIHlBeGlzLCB6QXhpcywgeEF4aXMgKTtcclxuICAgICAgICB4QXhpcy5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHg6IG51bWJlciA9IC1WZWN0b3IzLmRvdCggeEF4aXMsIHBvcyApO1xyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSAtVmVjdG9yMy5kb3QoIHlBeGlzLCBwb3MgKTtcclxuICAgICAgICBsZXQgejogbnVtYmVyID0gLVZlY3RvcjMuZG90KCB6QXhpcywgcG9zICk7XHJcblxyXG4gICAgICAgIGxldCBtYXQ6IE1hdHJpeDQgPSB0aGlzLl9tdlN0YWNrWyB0aGlzLl9tdlN0YWNrLmxlbmd0aCAtIDEgXTtcclxuICAgICAgICBtYXQudmFsdWVzWyAwIF0gPSB4QXhpcy54O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDEgXSA9IHlBeGlzLng7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgMiBdID0gekF4aXMueDtcclxuICAgICAgICBtYXQudmFsdWVzWyAzIF0gPSAwLjA7XHJcblxyXG4gICAgICAgIG1hdC52YWx1ZXNbIDQgXSA9IHhBeGlzLnk7XHJcbiAgICAgICAgbWF0LnZhbHVlc1sgNSBdID0geUF4aXMueTtcclxuICAgICAgICBtYXQudmFsdWVzWyA2IF0gPSB6QXhpcy55O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDcgXSA9IDAuMDtcclxuXHJcbiAgICAgICAgbWF0LnZhbHVlc1sgOCBdID0geEF4aXMuejtcclxuICAgICAgICBtYXQudmFsdWVzWyA5IF0gPSB5QXhpcy56O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDEwIF0gPSB6QXhpcy56O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDExIF0gPSAwLjA7XHJcblxyXG4gICAgICAgIG1hdC52YWx1ZXNbIDEyIF0gPSB4O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDEzIF0gPSB5O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDE0IF0gPSB6O1xyXG4gICAgICAgIG1hdC52YWx1ZXNbIDE1IF0gPSAxLjA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0TWF0cml4ICggbWF0OiBNYXRyaXg0ICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKCB0aGlzLm1hdHJpeE1vZGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5NT0RFTFZJRVc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5tdWx0aXBseSggbWF0ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4Lm11bHRpcGx5KCBtYXQgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXgubXVsdGlwbHkoIG1hdCApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2xhdGUgKCBwb3M6IFZlY3RvcjMgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnRyYW5zbGF0ZSggcG9zICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LnRyYW5zbGF0ZSggcG9zICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5URVhUVVJFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlTWF0cml4LnRyYW5zbGF0ZSggcG9zICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZSAoIGFuZ2xlOiBudW1iZXIsIGF4aXM6IFZlY3RvcjMsIGlzUmFkaWFuczogYm9vbGVhbiA9IGZhbHNlICk6IEdMTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBpZiAoIGlzUmFkaWFucyA9PT0gZmFsc2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoSGVscGVyLnRvUmFkaWFuKCBhbmdsZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKCB0aGlzLm1hdHJpeE1vZGUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5NT0RFTFZJRVc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5yb3RhdGUoIGFuZ2xlLCBheGlzICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LnJvdGF0ZSggYW5nbGUsIGF4aXMgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLlRFWFRVUkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVNYXRyaXgucm90YXRlKCBhbmdsZSwgYXhpcyApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FsZSAoIHM6IFZlY3RvcjMgKTogR0xNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoIHRoaXMubWF0cml4TW9kZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEVNYXRyaXhNb2RlLk1PREVMVklFVzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LnNjYWxlKCBzICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5QUk9KRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4LnNjYWxlKCBzICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFTWF0cml4TW9kZS5URVhUVVJFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlTWF0cml4LnNjYWxlKCBzICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTFdvcmxkTWF0cml4U3RhY2tcclxue1xyXG4gICAgcHJpdmF0ZSBfd29ybGRNYXRyaXhTdGFjazogTWF0cml4NFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoKVxyXG4gICAge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5pe25q+P5Liq55+p6Zi15qCI6YO95YWI5re75Yqg5LiA5Liq5q2j5Lqk5b2S5LiA5YyW5ZCO55qE55+p6Zi1XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXRyaXhTdGFjayA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3dvcmxkTWF0cml4U3RhY2sucHVzaCggbmV3IE1hdHJpeDQoKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZWxWaWV3TWF0cml4ICgpOiBNYXRyaXg0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl93b3JsZE1hdHJpeFN0YWNrLmxlbmd0aCA8PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCIgbW9kZWwgbWF0cml4IHN0YWNr5Li656m677yBXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkTWF0cml4U3RhY2tbIHRoaXMuX3dvcmxkTWF0cml4U3RhY2subGVuZ3RoIC0gMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoTWF0cml4ICgpOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBsZXQgbXY6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWxWaWV3TWF0cml4LmNvcHkoIG12ICk7XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXRyaXhTdGFjay5wdXNoKCBtdiApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3BNYXRyaXggKCk6IEdMV29ybGRNYXRyaXhTdGFja1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkTWF0cml4U3RhY2sucG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRJZGVudGl0eSAoKTogR0xXb3JsZE1hdHJpeFN0YWNrXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXguc2V0SWRlbnRpdHkoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1hdHJpeCAoIG1hdDogTWF0cml4NCApOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBtYXQuY29weSggdGhpcy5tb2RlbFZpZXdNYXRyaXggKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbXVsdE1hdHJpeCAoIG1hdDogTWF0cml4NCApOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5tdWx0aXBseSggbWF0ICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYW5zbGF0ZSAoIHBvczogVmVjdG9yMyApOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC50cmFuc2xhdGUoIHBvcyApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGUgKCBhbmdsZTogbnVtYmVyLCBheGlzOiBWZWN0b3IzLCBpc1JhZGlhbnM6IGJvb2xlYW4gPSBmYWxzZSApOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICBpZiAoIGlzUmFkaWFucyA9PT0gZmFsc2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5nbGUgPSBNYXRoSGVscGVyLnRvUmFkaWFuKCBhbmdsZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5yb3RhdGUoIGFuZ2xlLCBheGlzICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYWxlICggczogVmVjdG9yMyApOiBHTFdvcmxkTWF0cml4U3RhY2tcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vZGVsVmlld01hdHJpeC5zY2FsZSggcyApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR0xBdHRyaWJCaXRzLCBHTEF0dHJpYlN0YXRlLCBHTEF0dHJpYk9mZnNldE1hcCB9IGZyb20gXCIuL1dlYkdMQXR0cmliU3RhdGVcIlxyXG5pbXBvcnQgVmVjdG9yNCBmcm9tIFwiLi4vbWF0aC92ZWN0b3I0XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IFR5cGVkQXJyYXlMaXN0IH0gZnJvbSBcIi4uL2NvbW1vbi9jb250YWluZXIvVHlwZWRBcnJheUxpc3RcIjtcclxuaW1wb3J0IHsgR0xQcm9ncmFtIH0gZnJvbSBcIi4vV2ViR0xQcm9ncmFtXCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL1dlYkdMVGV4dHVyZVwiO1xyXG5cclxuLy8g5L2/55SoYWJzdHJhY3Tlo7DmmI7mir3osaHnsbtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdMTWVzaEJhc2Vcclxue1xyXG4gICAgLy8gV2ViR0zmuLLmn5PkuIrkuIvmlodcclxuICAgIHB1YmxpYyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICAgLy8gZ2wuVFJJQU5HTEVTIOetiTfnp43ln7rmnKzlh6DkvZXlm77lhYPkuYvkuIBcclxuICAgIHB1YmxpYyBkcmF3TW9kZTogbnVtYmVyO1xyXG4gICAgLy8g6aG254K55bGe5oCn5qC85byP77yM5ZKM57uY5Yi25b2T5YmN572R5qC85pe25L2/55So55qER0xQcm9ncmFt5YW35pyJ5LiA6Ie055qEYXR0cmliQml0c1xyXG4gICAgcHJvdGVjdGVkIF9hdHRyaWJTdGF0ZTogR0xBdHRyaWJCaXRzO1xyXG4gICAgLy8g5b2T5YmN5L2/55So55qE6aG254K55bGe5oCn55qEc3RyaWRl5a2X6IqC5pWwXHJcbiAgICBwcm90ZWN0ZWQgX2F0dHJpYlN0cmlkZTogbnVtYmVyO1xyXG5cclxuICAgIC8vIOaIkeS7rOS9v+eUqFZBT++8iOmhtueCueaVsOe7hOWvueixoe+8ieadpeeuoeeQhlZCT+WSjEVCT1xyXG4gICAgcHJvdGVjdGVkIF92YW86IE9FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0O1xyXG4gICAgcHJvdGVjdGVkIF92YW9UYXJnZXQ6IFdlYkdMVmVydGV4QXJyYXlPYmplY3RPRVM7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgYXR0cmliU3RhdGU6IEdMQXR0cmliQml0cywgZHJhd01vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFUyApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgICAgICAvLyDojrflj5ZWQU/nmoTmraXpqqTvvJpcclxuICAgICAgICAvLyAx44CB5L2/55SoZ2wuZ2V0RXh0ZW5zaW9uKCBcIk9FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0XCIgKeaWueW8j+iOt+WPllZBT+aJqeWxlVxyXG4gICAgICAgIGxldCB2YW86IE9FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0IHwgbnVsbCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKCBcIk9FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0XCIgKTtcclxuICAgICAgICBpZiAoIHZhbyA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm90IFN1cHBvcnQgT0VTX3ZlcnRleF9hcnJheV9vYmplY3RcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92YW8gPSB2YW87XHJcblxyXG4gICAgICAgIC8vIDLjgIHosIPnlKhjcmVhdGVWZXJ0ZXhBcnJheU9FU+iOt+WPllZBT+WvueixoVxyXG4gICAgICAgIGxldCB2YW9UYXJnZXQ6IFdlYkdMVmVydGV4QXJyYXlPYmplY3RPRVMgfCBudWxsID0gdGhpcy5fdmFvLmNyZWF0ZVZlcnRleEFycmF5T0VTKCk7XHJcbiAgICAgICAgaWYgKCB2YW9UYXJnZXQgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vdCBTdXBwb3J0IFdlYkdMVmVydGV4QXJyYXlPYmplY3RPRVNcIiApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92YW9UYXJnZXQgPSB2YW9UYXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIOmhtueCueWxnuaAp+agvOW8j++8jOWSjOe7mOWItuW9k+WJjee9keagvOaXtuS9v+eUqOeahEdMUHJvZ3JhbeWFt+acieS4gOiHtOeahGF0dHJpYkJpdHNcclxuICAgICAgICB0aGlzLl9hdHRyaWJTdGF0ZSA9IGF0dHJpYlN0YXRlO1xyXG4gICAgICAgIC8vIOiwg+eUqEdMQXR0cmliU3RhdGXnmoRnZXRWZXJ0ZXhCeXRlU3RyaWRl5pa55rOV77yM5qC55o2uYXR0cmliQml0c+iuoeeul+WHuumhtueCueeahHN0cmlkZeWtl+iKguaVsFxyXG4gICAgICAgIHRoaXMuX2F0dHJpYlN0cmlkZSA9IEdMQXR0cmliU3RhdGUuZ2V0VmVydGV4Qnl0ZVN0cmlkZSggdGhpcy5fYXR0cmliU3RhdGUgKTtcclxuICAgICAgICAvLyDorr7nva7lvZPliY3nu5jliLbml7bkvb/nlKjnmoTln7rmnKzlh6DkvZXlm77lhYPnsbvlnovvvIzpu5jorqTkuLrkuInop5LlvaLpm4blkIhcclxuICAgICAgICB0aGlzLmRyYXdNb2RlID0gZHJhd01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJpbmQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyDnu5HlrppWQU/lr7nosaFcclxuICAgICAgICB0aGlzLl92YW8uYmluZFZlcnRleEFycmF5T0VTKCB0aGlzLl92YW9UYXJnZXQgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5iaW5kICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8g6Kej57uRVkFPXHJcbiAgICAgICAgdGhpcy5fdmFvLmJpbmRWZXJ0ZXhBcnJheU9FUyggbnVsbCApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdmVydGV4U3RyaWRlICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0cmliU3RyaWRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR0xTdGF0aWNNZXNoIGV4dGVuZHMgR0xNZXNoQmFzZVxyXG57XHJcbiAgICAvL0dMU3RhdGljTWVzaOWGhee9ruS6huS4gOS4qumhtueCuee8k+WGsuWMulxyXG4gICAgcHJvdGVjdGVkIF92Ym86IFdlYkdMQnVmZmVyO1xyXG4gICAgcHJvdGVjdGVkIF92ZXJ0Q291bnQ6IG51bWJlciA9IDA7ICAvLyDpobbngrnnmoTmlbDph49cclxuXHJcbiAgICAvLyBHTFN0YXRpY01lc2jlhoXnva7kuobkuIDkuKrlj6/pgInnmoTntKLlvJXnvJPlhrLljLpcclxuICAgIHByb3RlY3RlZCBfaWJvOiBXZWJHTEJ1ZmZlciB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIF9pbmRleENvdW50OiBudW1iZXIgPSAwOyAvLyDntKLlvJXnmoTmlbDph49cclxuXHJcbiAgICBwdWJsaWMgbWluczogVmVjdG9yMztcclxuICAgIHB1YmxpYyBtYXhzOiBWZWN0b3IzO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGF0dHJpYlN0YXRlOiBHTEF0dHJpYkJpdHMsIHZibzogRmxvYXQzMkFycmF5IHwgQXJyYXlCdWZmZXIsIGlibzogVWludDE2QXJyYXkgfCBudWxsID0gbnVsbCwgZHJhd01vZGU6IG51bWJlciA9IGdsLlRSSUFOR0xFUyApXHJcbiAgICB7XHJcbiAgICAgICAgLy8g6LCD55So5Z+657G755qE5p6E6YCg5Ye95pWwXHJcbiAgICAgICAgc3VwZXIoIGdsLCBhdHRyaWJTdGF0ZSwgZHJhd01vZGUgKTtcclxuXHJcbiAgICAgICAgLy8g5YWz6ZSu55qE5pON5L2c77yaXHJcbiAgICAgICAgLy8g6KaB5L2/55SoVkFP5p2l566h55CGVkJP5ZKMRUJP55qE6K+d77yM5b+F6aG76KaB5ZyoVkJP5ZKMRUJP5Yib5bu657uR5a6a5LmL5YmN5YWI57uR5a6aVkFP5a+56LGh77yM6L+Z5Liq6aG65bqP5LiN6IO95pCe6ZSZ77yB77yB77yBXHJcbiAgICAgICAgLy8g5YWI57uR5a6aVkFP5ZCO77yM6YKj5LmI5ZCO57ut5Yib5bu655qEVkJP5ZKMRUJP5a+56LGh6YO95b2S5bGeVkFP566h6L6W77yB77yB77yBXHJcbiAgICAgICAgdGhpcy5iaW5kKCk7XHJcbiAgICAgICAgLy8g5Zyo5Yib5bu65bm257uR5a6admJvXHJcbiAgICAgICAgbGV0IHZiOiBXZWJHTEJ1ZmZlciB8IG51bGwgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBpZiAoIHZiID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJ2Ym8gY3JlYXRpb24gZmFpbFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZibyA9IHZiO1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3ZibyApOyAvLyDnu5HlrppWQk9cclxuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB2Ym8sIHRoaXMuZ2wuU1RBVElDX0RSQVcgKTsgLy8g5bCG6aG254K55pWw5o2u6L295YWl5YiwVkJP5LitXHJcbiAgICAgICAgLy8g54S25ZCO6K6h566X5Ye65Lqk6ZSZ5a2Y5YKo55qE6aG254K55bGe5oCnYXR0cmliT2Zmc2V0TWFw55u45YWz55qE5YC8XHJcbiAgICAgICAgbGV0IG9mZnNldE1hcDogR0xBdHRyaWJPZmZzZXRNYXAgPSBHTEF0dHJpYlN0YXRlLmdldEludGVybGVhdmVkTGF5b3V0QXR0cmliT2Zmc2V0TWFwKCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIC8vIOiuoeeul+WHuumhtueCueeahOaVsOmHj1xyXG4gICAgICAgIHRoaXMuX3ZlcnRDb3VudCA9IHZiby5ieXRlTGVuZ3RoIC8gb2Zmc2V0TWFwWyBHTEF0dHJpYlN0YXRlLkFUVFJJQlNUUklERSBdO1xyXG4gICAgICAgIC8vIOS9v+eUqFZBT+WQju+8jOaIkeS7rOWPquimgeWIneWni+WMluaXtuiuvue9ruS4gOasoXNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlcuWSjHNldEF0dHJpYlZlcnRleEFycmF5U3RhdGXlsLHooYzkuoZcclxuICAgICAgICAvLyDlvZPmiJHku6zlkI7nu63osIPnlKjln7rnsbvnmoRiaW5k5pa55rOV57uR5a6aVkFP5a+56LGh5ZCO77yMVkFP5Lya6Ieq5Yqo5aSE55CG6aG254K55Zyw5Z2A57uR5a6a5ZKM6aG254K55bGe5oCn5a+E5a2Y5Zmo5byA5ZCv55u45YWz5pON5L2c77yM6L+Z5bCx566A5YyW5LqG5b6I5aSa5pON5L2cXHJcbiAgICAgICAgR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVBvaW50ZXIoIGdsLCBvZmZzZXRNYXAgKTtcclxuICAgICAgICBHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5U3RhdGUoIGdsLCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIC8vIOWGjeWIm+W7uklCT++8iElCT+ihqOekukluZGV4IEJ1ZmZlciBPYmplY3QsRUJP6KGo56S6RWxlbWVudCBCdWZmZXIgT2JqZWN077yM6KGo56S65LiA5qC355qE5qaC5b+177yJXHJcbiAgICAgICAgdGhpcy5zZXRJQk8oIGlibyApO1xyXG4gICAgICAgIC8vIOW/hemhu+aUvuWcqOi/memHjFxyXG4gICAgICAgIHRoaXMudW5iaW5kKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWlucyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdGhpcy5tYXhzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0SUJPICggaWJvOiBVaW50MTZBcnJheSB8IG51bGwgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggaWJvID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjsgIC8vIOaMiemcgOWIm+W7uklCT1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJvlu7ppYm9cclxuICAgICAgICB0aGlzLl9pYm8gPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJJQk8gY3JlYXRpb24gZmFpbFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe7keWummlib1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICAgICAgLy8g5bCG57Si5byV5pWw5o2u5LiK5Lyg5YiwaWJv5LitXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpYm8sIHRoaXMuZ2wuU1RBVElDX0RSQVcgKTtcclxuICAgICAgICAvLyDorqHnrpflh7rntKLlvJXkuKrmlbBcclxuICAgICAgICB0aGlzLl9pbmRleENvdW50ID0gaWJvLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmluZCgpOyAvLyDnu5jliLbliY3lhYjopoHnu5HlrppWQU9cclxuICAgICAgICBpZiAoIHRoaXMuX2libyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmnIlJQk/vvIzkvb/nlKhkcmF3RWxlbWVudHPmlrnms5Xnu5jliLbpnZnmgIHnvZHmoLzlr7nosaFcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3RWxlbWVudHMoIHRoaXMuZHJhd01vZGUsIHRoaXMuX2luZGV4Q291bnQsIHRoaXMuZ2wuVU5TSUdORURfU0hPUlQsIDAgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciUlCT++8jOWImeS9v+eUqGRyYXdBcnJheXPmlrnms5Xnu5jliLbpnZnmgIHnvZHmoLzlr7nosaFcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKCB0aGlzLmRyYXdNb2RlLCAwLCB0aGlzLl92ZXJ0Q291bnQgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTsgLy8g57uY5Yi25aW95ZCO6Kej6ZmkVkFP57uR5a6aXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOW+iOmHjeimgeeahOWHoOeCueivtOaYju+8mlxyXG4gICAgLy8gZHJhd0VsZW1lbnRz5Lit55qEb2Zmc2V05piv5Lul5a2X6IqC5Li65Y2V5L2N77yB77yB77yB77yB77yBXHJcbiAgICAvLyDogIxjb3VudOaYr+S7pee0ouW8leS4quaVsOS4uuWNleS9jVxyXG4gICAgLy8gZHJhd1Jhbmdl57uY5Yi25LuOb2Zmc2V05YGP56e755qE5a2X6IqC5pWw5byA5aeL77yM57uY5Yi2Y291bnTkuKrntKLlvJVcclxuICAgIC8vIGRyYXdSYW5nZeWGhemDqOW5tuayoeacieiwg+eUqGJpbmTlkox1bmJpbmTmlrnms5XvvIzlm6DmraTopoHosIPnlKhkcmF3UmFuZ2Xmlrnms5XnmoTor53vvIzlv4XpobvlpoLkuIvmlrnlvI/vvJpcclxuICAgIC8qIFxyXG4gICAgICAgIG1lc2guYmluZCgpOyAvLyDnu5HlrppWQU9cclxuICAgICAgICBtZXNoLmRyYXdSYW5nZSggMiwgNSk7IC8vIOiwg+eUqGRyYXdSYW5nZeaWueazlVxyXG4gICAgICAgIG1lc2gudW5iaW5kKCk7IC8vIOino+e7kVZBT1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBkcmF3UmFuZ2UgKCBvZmZzZXQ6IG51bWJlciwgY291bnQ6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLl9pYm8gIT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3RWxlbWVudHMoIHRoaXMuZHJhd01vZGUsIGNvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCBvZmZzZXQgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyggdGhpcy5kcmF3TW9kZSwgb2Zmc2V0LCBjb3VudCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMSW5kZXhlZFN0YXRpY01lc2ggZXh0ZW5kcyBHTFN0YXRpY01lc2hcclxue1xyXG4gICAgcHJpdmF0ZSBfaW5kaWNlczogVHlwZWRBcnJheUxpc3Q8VWludDE2QXJyYXk+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGF0dHJpYlN0YXRlOiBHTEF0dHJpYkJpdHMsIHZibzogRmxvYXQzMkFycmF5IHwgQXJyYXlCdWZmZXIsIGRyYXdNb2RlOiBudW1iZXIgPSBnbC5UUklBTkdMRVMgKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBnbCwgYXR0cmliU3RhdGUsIHZibywgbnVsbCwgZHJhd01vZGUgKTtcclxuICAgICAgICB0aGlzLl9pbmRpY2VzID0gbmV3IFR5cGVkQXJyYXlMaXN0PFVpbnQxNkFycmF5PiggVWludDE2QXJyYXksIDkwICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEluZGV4ICggaWR4OiBudW1iZXIgKTogR0xJbmRleGVkU3RhdGljTWVzaFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2luZGljZXMucHVzaCggaWR4ICk7XHJcbiAgICAgICAgdGhpcy5faW5kZXhDb3VudCA9IHRoaXMuX2luZGljZXMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckluZGljZXMgKCk6IEdMSW5kZXhlZFN0YXRpY01lc2hcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pbmRpY2VzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5faW5kZXhDb3VudCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldElCTyAoIGlibzogVWludDE2QXJyYXkgfCBudWxsICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9pYm8gPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJJQk8gY3JlYXRpb24gZmFpbFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJpbmQoKTtcclxuICAgICAgICBpZiAoIHRoaXMuX2libyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2libyApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2luZGljZXMuc3ViQXJyYXkoKSwgdGhpcy5faW5kZXhDb3VudCApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyggdGhpcy5kcmF3TW9kZSwgdGhpcy5faW5kZXhDb3VudCwgdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwgMCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKCB0aGlzLmRyYXdNb2RlLCAwLCB0aGlzLl92ZXJ0Q291bnQgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlvojph43opoHnmoTkuIDngrlcclxuICAgIC8vIGRyYXdFbGVtZW50c+S4reeahG9mZnNldOaYr+S7peWtl+iKguS4uuWNleS9je+8ge+8ge+8ge+8ge+8gVxyXG4gICAgLy8g6ICMY291bnTmmK/ku6XntKLlvJXkuKrmlbDkuLrljZXkvY1cclxuICAgIC8vIOaJgOS7peWBj+enu+eahOWvu+WdgOaWueW8j+aYryA6IG9mZnNldCBcclxuICAgIC8vIGNvdW5055qE5a2X6IqC5pWwOiAgICAgICAgc2l6ZW9mIChnbCAuIFVOU0lHTkVEX1NIT1JUKSAqIGNvdW50XHJcbiAgICBwdWJsaWMgZHJhd1JhbmdlICggb2Zmc2V0OiBudW1iZXIsIGNvdW50OiBudW1iZXIgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faW5kaWNlcy5zdWJBcnJheSgpLCB0aGlzLl9pbmRleENvdW50ICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKCB0aGlzLmRyYXdNb2RlLCBjb3VudCwgdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwgb2Zmc2V0ICk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXMoIHRoaXMuZHJhd01vZGUsIG9mZnNldCwgY291bnQgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVWZXJ0ZXhMYXlvdXRcclxue1xyXG4gICAgSU5URVJMRUFWRUQsXHJcbiAgICBTRVFVRU5DRUQsXHJcbiAgICBTRVBBUkFURURcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMTWVzaEJ1aWxkZXIgZXh0ZW5kcyBHTE1lc2hCYXNlXHJcbntcclxuICAgIC8vIOWtl+espuS4suW4uOmHj2tleVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgU0VRVUVOQ0VEOiBzdHJpbmcgPSBcIlNFUVVFTkNFRFwiO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgSU5URVJMRUFWRUQ6IHN0cmluZyA9IFwiSU5URVJMRUFWRURcIjtcclxuXHJcbiAgICBwcml2YXRlIF9sYXlvdXQ6IEVWZXJ0ZXhMYXlvdXQ7IC8vIOmhtueCueWcqOWGheWtmOaIluaYvuWtmOS4reeahOW4g+WxgOaWueW8j1xyXG5cclxuICAgIC8vIOS4uuS6hueugOWNlei1t+inge+8jOWPquaUr+aMgemhtueCueeahOS9jee9ruWdkOagh+OAgee6ueeQhjDlnZDmoIfjgIHpopzoibLlkozms5Xnur/ov5nlm5vnp43pobbngrnlsZ7mgKfmoLzlvI9cclxuICAgIC8vIOihqOekuuW9k+WJjeato+WcqOi+k+WFpeeahOmhtueCueWxnuaAp+WAvFxyXG4gICAgcHJpdmF0ZSBfY29sb3I6IFZlY3RvcjQgPSBuZXcgVmVjdG9yNCggMCwgMCwgMCwgMCApO1xyXG4gICAgcHJpdmF0ZSBfdGV4Q29vcmQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMiggMCwgMCApO1xyXG4gICAgcHJpdmF0ZSBfbm9ybWFsOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoIDAsIDAsIDEgKTtcclxuXHJcbiAgICAvLyDku45HTEF0dHJpYkJpdHPliKTmlq3mmK/lkKbljIXlkKvlpoLkuIvlh6DkuKrpobbngrnlsZ7mgKdcclxuICAgIHByaXZhdGUgX2hhc0NvbG9yOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfaGFzVGV4Y29vcmQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9oYXNOb3JtYWw6IGJvb2xlYW47XHJcblxyXG4gICAgLy8g5riy5p+T55qE5pWw5o2u5rqQXHJcbiAgICBwcml2YXRlIF9saXN0czogeyBbIGtleTogc3RyaW5nIF06IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4gfSA9IHt9O1xyXG4gICAgLy8g5riy5p+T55So55qEVkJPXHJcbiAgICBwcml2YXRlIF9idWZmZXJzOiB7IFsga2V5OiBzdHJpbmcgXTogV2ViR0xCdWZmZXIgfSA9IHt9O1xyXG4gICAgLy8g6KaB5riy5p+T55qE6aG254K55pWw6YePXHJcbiAgICBwcml2YXRlIF92ZXJ0Q291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8g5b2T5YmN5L2/55So55qER0xQcm9ncmFt5a+56LGhXHJcbiAgICBwdWJsaWMgcHJvZ3JhbTogR0xQcm9ncmFtO1xyXG4gICAgLy8g5aaC5p6c57q555CG5Z2Q5qCH77yM6YKj6ZyA6KaB6K6+572u5b2T5YmN5L2/55So55qE57q555CGXHJcbiAgICBwdWJsaWMgdGV4dHVyZTogV2ViR0xUZXh0dXJlIHwgbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9pYm86V2ViR0xCdWZmZXIgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaW5kZXhDb3VudDpudW1iZXIgPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgc2V0VGV4dHVyZSh0ZXg6R0xUZXh0dXJlKTp2b2lke1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleC50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJQk8oZGF0YTpVaW50MTZBcnJheSk6dm9pZHtcclxuICAgICAgICAvLyDliJvlu7ppYm9cclxuICAgICAgICB0aGlzLl9pYm8gPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGlmICggdGhpcy5faWJvID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJJQk8gY3JlYXRpb24gZmFpbFwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe7keWummlib1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faWJvICk7XHJcbiAgICAgICAgLy8g5bCG57Si5byV5pWw5o2u5LiK5Lyg5YiwaWJv5LitXHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBkYXRhLCB0aGlzLmdsLlNUQVRJQ19EUkFXICk7XHJcbiAgICAgICAgdGhpcy5faW5kZXhDb3VudCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBzdGF0ZTogR0xBdHRyaWJCaXRzLCBwcm9ncmFtOiBHTFByb2dyYW0sIHRleHR1cmU6IFdlYkdMVGV4dHVyZSB8IG51bGwgPSBudWxsLCBsYXlvdXQ6IEVWZXJ0ZXhMYXlvdXQgPSBFVmVydGV4TGF5b3V0LklOVEVSTEVBVkVEIClcclxuICAgIHtcclxuICAgICAgICBzdXBlciggZ2wsIHN0YXRlICk7IC8vIOiwg+eUqOWfuuexu+eahOaehOmAoOaWueazlVxyXG5cclxuICAgICAgICAvLyDmoLnmja5hdHRyaWJCaXRz77yM5rWL6K+V5piv5ZCm5L2/55So5LqG5LiL6Z2i5Yeg56eN57G75Z6L55qE6aG254K55bGe5oCn5qC85byPXHJcbiAgICAgICAgdGhpcy5faGFzQ29sb3IgPSBHTEF0dHJpYlN0YXRlLmhhc0NvbG9yKCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIHRoaXMuX2hhc1RleGNvb3JkID0gR0xBdHRyaWJTdGF0ZS5oYXNUZXhDb29yZF8wKCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIHRoaXMuX2hhc05vcm1hbCA9IEdMQXR0cmliU3RhdGUuaGFzTm9ybWFsKCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG5cclxuICAgICAgICB0aGlzLl9pYm8gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyDpu5jorqTmg4XlhrXkuIvvvIzkvb/nlKhJTlRFUkxFQVZFROWtmOWCqOmhtueCuVxyXG4gICAgICAgIHRoaXMuX2xheW91dCA9IGxheW91dDtcclxuXHJcbiAgICAgICAgLy8g6K6+572u5b2T5YmN5L2/55So55qER0xQcm9ncmFt5ZKMR0xUZXh0dXJlMkTlr7nosaFcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5YWI57uR5a6aVkFP5a+56LGhXHJcbiAgICAgICAgdGhpcy5iaW5kKCk7XHJcblxyXG4gICAgICAgIC8vIOeUn+aIkOe0ouW8lee8k+WtmFxyXG4gICAgICAgIGxldCBidWZmZXI6IFdlYkdMQnVmZmVyIHwgbnVsbCA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgYnVmZmVyID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBpZiAoIGJ1ZmZlciA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xCdWZmZXLliJvlu7rkuI3miJDlip8hXCIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5fbGF5b3V0ID09PSBFVmVydGV4TGF5b3V0LklOVEVSTEVBVkVEIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGludGVybGVhdmVk55qE6K+d77yaXHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOS4gOS4qmFycmF5bGlzdCzkuIDkuKrpobbngrnnvJPlrZhcclxuICAgICAgICAgICAgLy8g6LCD55So55qE5pivR0xBdHRyaWJTdGF0ZS5nZXRJbnRlcmxlYXZlZExheW91dEF0dHJpYk9mZnNldE1hcOaWueazlVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0c1sgR0xNZXNoQnVpbGRlci5JTlRFUkxFQVZFRCBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJzWyBHTE1lc2hCdWlsZGVyLklOVEVSTEVBVkVEIF0gPSBidWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICBsZXQgbWFwOiBHTEF0dHJpYk9mZnNldE1hcCA9IEdMQXR0cmliU3RhdGUuZ2V0SW50ZXJsZWF2ZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXAoIHRoaXMuX2F0dHJpYlN0YXRlICk7XHJcbiAgICAgICAgICAgIC8vIOiwg+eUqOWmguS4i+S4pOS4quaWueazlVxyXG4gICAgICAgICAgICBHTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlciggdGhpcy5nbCwgbWFwICk7XHJcbiAgICAgICAgICAgIEdMQXR0cmliU3RhdGUuc2V0QXR0cmliVmVydGV4QXJyYXlTdGF0ZSggdGhpcy5nbCwgdGhpcy5fYXR0cmliU3RhdGUgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9sYXlvdXQgPT09IEVWZXJ0ZXhMYXlvdXQuU0VRVUVOQ0VEIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNlcXVlbmNlZOeahOivne+8mlxyXG4gICAgICAgICAgICAvLyDkvb/nlKhu5LiqYXJyYXlsaXN0LOS4gOS4qumhtueCuee8k+WtmFxyXG4gICAgICAgICAgICAvLyDml6Dms5XlnKjliJ3lp4vljJbml7bosIPnlKjnmoTmmK9nZXRTZXF1ZW5jZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXDmlrnms5VcclxuICAgICAgICAgICAgLy8g5peg5rOV5L2/55SoR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVBvaW50ZXLmlrnms5XpooTlhYjlm7rlrprlnLDlnYBcclxuICAgICAgICAgICAgLy8g6IO95aSf5L2/55SoR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRl5byA5ZCv6aG254K55bGe5oCn5a+E5a2Y5ZmoXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXSA9IG5ldyBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+KCBGbG9hdDMyQXJyYXkgKTtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNDb2xvciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IG5ldyBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+KCBGbG9hdDMyQXJyYXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzTm9ybWFsIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXSA9IG5ldyBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+KCBGbG9hdDMyQXJyYXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgICAgICBpZiAoIGJ1ZmZlciA9PT0gbnVsbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTEJ1ZmZlcuWIm+W7uuS4jeaIkOWKnyFcIiApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnNbIEdMTWVzaEJ1aWxkZXIuU0VRVUVOQ0VEIF0gPSBidWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAvLyBzZXF1ZW5jZWTmsqHms5XpooTlhYjorr7nva7mjIfpkojvvIzlm6DkuLrmmK/liqjmgIHnmoRcclxuICAgICAgICAgICAgLy8g5L2G5piv5Y+v5Lul6aKE5YWI6K6+572u6aG254K55bGe5oCn54q25oCBXHJcbiAgICAgICAgICAgIEdMQXR0cmliU3RhdGUuc2V0QXR0cmliVmVydGV4QXJyYXlTdGF0ZSggdGhpcy5nbCwgdGhpcy5fYXR0cmliU3RhdGUgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNlcGVyYXRlZOeahOivne+8mlxyXG4gICAgICAgICAgICAvLyDkvb/nlKhu5LiqYXJyYXlsaXN0LG7kuKrpobbngrnnvJPlrZhcclxuICAgICAgICAgICAgLy8g6LCD55So55qE5pivZ2V0U2VwcmF0ZWRMYXlvdXRBdHRyaWJPZmZzZXRNYXDmlrnms5VcclxuICAgICAgICAgICAgLy8g6IO95aSf5L2/55So6IO95aSf5L2/55SoR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVBvaW50ZXLmlrnms5XpooTlhYjlm7rlrprlnLDlnYBcclxuICAgICAgICAgICAgLy8g6IO95aSf5L2/55SoR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRl5byA5ZCv6aG254K55bGe5oCn5a+E5a2Y5ZmoXHJcblxyXG4gICAgICAgICAgICAvLyDogq/lrpropoHmnInnmoTmmK/kvY3nva7mlbDmja5cclxuICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXSA9IGJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OLDMsZ2wuRkxPQVQsZmFsc2UsMCwwKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OKTtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNDb2xvciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IG5ldyBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+KCBGbG9hdDMyQXJyYXkgKTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGJ1ZmZlciA9PT0gbnVsbCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIldlYkdMQnVmZmVy5Yib5bu65LiN5oiQ5YqfIVwiICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXSA9IGJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04sNCxnbC5GTE9BVCxmYWxzZSwwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShHTEF0dHJpYlN0YXRlLkNPTE9SX0xPQ0FUSU9OKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oIEZsb2F0MzJBcnJheSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyc1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF0gPSBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0JJVCwyLGdsLkZMT0FULGZhbHNlLDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfQklUKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF0gPSBuZXcgVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiggRmxvYXQzMkFycmF5ICk7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBidWZmZXIgPT09IG51bGwgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTEJ1ZmZlcuWIm+W7uuS4jeaIkOWKnyFcIiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyc1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdID0gYnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTE9DQVRJT04sMyxnbC5GTE9BVCxmYWxzZSwwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9HTEF0dHJpYlN0YXRlLnNldEF0dHJpYlZlcnRleEFycmF5UG9pbnRlciggdGhpcy5nbCwgbWFwICk7XHJcbiAgICAgICAgICAgIC8vR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVN0YXRlKCB0aGlzLmdsLCB0aGlzLl9hdHRyaWJTdGF0ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDovpPlhaVyZ2Jh6aKc6Imy5YC877yM5Y+W5YC86IyD5Zu05Li6WyAwICwgMSBd5LmL6Ze0LOi/lOWbnnRoaXMs6YO95piv6ZO+5byP5pON5L2cXHJcbiAgICBwdWJsaWMgY29sb3IgKCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgPSAxLjAgKTogR0xNZXNoQnVpbGRlclxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy5faGFzQ29sb3IgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IuciA9IHI7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yLmcgPSBnO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvci5iID0gYjtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IuYSA9IGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi+k+WFpXV257q555CG5Z2Q5qCH5YC877yM6L+U5ZuedGhpcyzpg73mmK/pk77lvI/mk43kvZxcclxuICAgIHB1YmxpYyB0ZXhjb29yZCAoIHU6IG51bWJlciwgdjogbnVtYmVyICk6IEdMTWVzaEJ1aWxkZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleENvb3JkLnggPSB1O1xyXG4gICAgICAgICAgICB0aGlzLl90ZXhDb29yZC55ID0gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L6T5YWl5rOV57q/5YC8eHl677yM6L+U5ZuedGhpcyzpg73mmK/pk77lvI/mk43kvZxcclxuICAgIHB1YmxpYyBub3JtYWwgKCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyICk6IEdMTWVzaEJ1aWxkZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3JtYWwueCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbC55ID0geTtcclxuICAgICAgICAgICAgdGhpcy5fbm9ybWFsLnogPSB6O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB2ZXJ0ZXjlv4XpobvopoHmnIDlkI7osIPnlKjvvIzovpPlhaV4eXos6L+U5ZuedGhpcyzpg73mmK/pk77lvI/mk43kvZxcclxuICAgIHB1YmxpYyB2ZXJ0ZXggKCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyICk6IEdMTWVzaEJ1aWxkZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIHRoaXMuX2xheW91dCA9PT0gRVZlcnRleExheW91dC5JTlRFUkxFQVZFRCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDpkojlr7lpbnRlcmxlYXZlZOWtmOWCqOaWueW8j+eahOaTjeS9nFxyXG4gICAgICAgICAgICBsZXQgbGlzdDogVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiA9IHRoaXMuX2xpc3RzWyBHTE1lc2hCdWlsZGVyLklOVEVSTEVBVkVEIF07XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGxpc3QucHVzaCggeCApO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goIHkgKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKCB6ICk7XHJcbiAgICAgICAgICAgIC8vIHRleGNvb3JkXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzVGV4Y29vcmQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX3RleENvb3JkLnggKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fdGV4Q29vcmQueSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG5vcm1hbFxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnggKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnkgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnogKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb2xvclxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5yICk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX2NvbG9yLmcgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fY29sb3IuYiApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5hICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7ICAgLy8gc2VxdWVuY2Vk5ZKMc2VwYXJhdGVk6YO95piv5YW35pyJ5aSa5LiqQXJyYXlMaXN0XHJcbiAgICAgICAgICAgIC8vIOmSiOWvuemZpGludGVybGVhdmVk5a2Y5YKo5pa55byP5aSW55qE5pON5L2cXHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goIHggKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKCB5ICk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCggeiApO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fdGV4Q29vcmQueCApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl90ZXhDb29yZC55ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNOb3JtYWwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnggKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnkgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fbm9ybWFsLnogKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLkNPTE9SX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fY29sb3IuciApO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKCB0aGlzLl9jb2xvci5nICk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goIHRoaXMuX2NvbG9yLmIgKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCggdGhpcy5fY29sb3IuYSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiusOW9leabtOaWsOWQjueahOmhtueCueaVsOmHj1xyXG4gICAgICAgIHRoaXMuX3ZlcnRDb3VudCsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOavj+asoeiwg+eUqOS4iui/sOWHoOS4qua3u+WKoOmhtueCueWxnuaAp+eahOaWueazleS5i+WJje+8jOW/hemhu+imgeWFiOiwg+eUqGJlZ2lu5pa55rOV77yM6L+U5ZuedGhpc+aMh+mSiO+8jOmTvuW8j+aTjeS9nFxyXG4gICAgcHVibGljIGJlZ2luICggZHJhd01vZGU6IG51bWJlciA9IHRoaXMuZ2wuVFJJQU5HTEVTICk6IEdMTWVzaEJ1aWxkZXJcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRyYXdNb2RlID0gZHJhd01vZGU7IC8vIOiuvue9ruimgee7mOWItueahG1vZGXvvIw356eN5Z+65pys5Yeg5L2V5Zu+5YWDXHJcbiAgICAgICAgdGhpcy5fdmVydENvdW50ID0gMDsgLy8g5riF56m66aG254K55pWw5Li6MFxyXG4gICAgICAgIGlmICggdGhpcy5fbGF5b3V0ID09PSBFVmVydGV4TGF5b3V0LklOVEVSTEVBVkVEIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMTWVzaEJ1aWxkZXIuSU5URVJMRUFWRUQgXTtcclxuICAgICAgICAgICAgbGlzdC5jbGVhcigpOyAvLyDkvb/nlKjoh6rlt7Hlrp7njrDnmoTliqjmgIHnsbvlnovmlbDnu4TvvIzph43nlKhcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOS9v+eUqOiHquW3seWunueOsOeahOWKqOaAgeexu+Wei+aVsOe7hO+8jOmHjeeUqFxyXG4gICAgICAgICAgICBsZXQgbGlzdDogVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXTtcclxuICAgICAgICAgICAgbGlzdC5jbGVhcigpO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc1RleGNvb3JkIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIGxpc3QuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc05vcm1hbCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5faGFzQ29sb3IgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVuZOaWueazleeUqOS6jua4suafk+aTjeS9nFxyXG4gICAgcHVibGljIGVuZCAoIG12cDogTWF0cml4NCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmJpbmQoKTsgLy8g57uR5a6aR0xQcm9ncmFtXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnNldE1hdHJpeDQoIEdMUHJvZ3JhbS5NVlBNYXRyaXgsIG12cCApOyAvLyDovb3lhaVNVlBNYXRyaXggdW5pZm9ybeWPmOmHj1xyXG4gICAgICAgIGlmKHRoaXMudGV4dHVyZSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5sb2FkU2FtcGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJpbmQoKTsgLy8g57uR5a6aVkFPXHJcbiAgICAgICAgaWYgKCB0aGlzLl9sYXlvdXQgPT09IEVWZXJ0ZXhMYXlvdXQuSU5URVJMRUFWRUQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6I635Y+W5pWw5o2u5rqQXHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBUeXBlZEFycmF5TGlzdDxGbG9hdDMyQXJyYXk+ID0gdGhpcy5fbGlzdHNbIEdMTWVzaEJ1aWxkZXIuSU5URVJMRUFWRUQgXTtcclxuICAgICAgICAgICAgLy8g6I635Y+WVkJPXHJcbiAgICAgICAgICAgIGxldCBidWZmZXI6IFdlYkdMQnVmZmVyID0gdGhpcy5fYnVmZmVyc1sgR0xNZXNoQnVpbGRlci5JTlRFUkxFQVZFRCBdO1xyXG4gICAgICAgICAgICAvLyDnu5HlrppWQk9cclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgIC8vIOS4iuS8oOa4suafk+aVsOaNruWIsFZCT+S4rVxyXG4gICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBsaXN0LnN1YkFycmF5KCksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5fbGF5b3V0ID09PSBFVmVydGV4TGF5b3V0LlNFUVVFTkNFRCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDpkojlr7lzZXF1ZW5jZWTlrZjlgqjmlrnlvI/nmoTmuLLmn5PlpITnkIZcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcjogV2ViR0xCdWZmZXIgPSB0aGlzLl9idWZmZXJzWyBHTE1lc2hCdWlsZGVyLlNFUVVFTkNFRCBdO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIgKTtcclxuICAgICAgICAgICAgLy/nlKjnmoTmmK/pooTlhYjliIbphY3mmL7lrZjmnLrliLZcclxuICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fYXR0cmliU3RyaWRlICogdGhpcy5fdmVydENvdW50LCB0aGlzLmdsLkRZTkFNSUNfRFJBVyApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1hcDogR0xBdHRyaWJPZmZzZXRNYXAgPSBHTEF0dHJpYlN0YXRlLmdldFNlcXVlbmNlZExheW91dEF0dHJpYk9mZnNldE1hcCggdGhpcy5fYXR0cmliU3RhdGUsIHRoaXMuX3ZlcnRDb3VudCApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpc3Q6IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4gPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5QT1NJVElPTl9OQU1FIF07XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIDAsIGxpc3Quc3ViQXJyYXkoKSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNUZXhjb29yZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBtYXBbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdLCBsaXN0LnN1YkFycmF5KCkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNOb3JtYWwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIG1hcFsgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSBdLCBsaXN0LnN1YkFycmF5KCkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNDb2xvciApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLl9saXN0c1sgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBtYXBbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdLCBsaXN0LnN1YkFycmF5KCkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmr4/mrKHpg73opoHph43mlrDorqHnrpflkoznu5HlrprpobbngrnlsZ7mgKfmlbDnu4TnmoTpppblnLDlnYBcclxuICAgICAgICAgICAgR0xBdHRyaWJTdGF0ZS5zZXRBdHRyaWJWZXJ0ZXhBcnJheVBvaW50ZXIoIHRoaXMuZ2wsIG1hcCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g6ZKI5a+5c2VwZXJhdGVk5a2Y5YKo5pa55byP55qE5riy5p+T5pWw5o2u5aSE55CGXHJcbiAgICAgICAgICAgIC8vIOmcgOimgeavj+S4qlZCT+mDvee7keWumuS4gOasoVxyXG4gICAgICAgICAgICAvLyBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyOiBXZWJHTEJ1ZmZlciA9IHRoaXMuX2J1ZmZlcnNbIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fTkFNRSBdO1xyXG4gICAgICAgICAgICBsZXQgbGlzdDogVHlwZWRBcnJheUxpc3Q8RmxvYXQzMkFycmF5PiA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgXTtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGxpc3Quc3ViQXJyYXkoKSwgdGhpcy5nbC5EWU5BTUlDX0RSQVcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNUZXhjb29yZCApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcnNbIEdMQXR0cmliU3RhdGUuVEVYQ09PUkRfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2xpc3RzWyBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbGlzdC5zdWJBcnJheSgpLCB0aGlzLmdsLkRZTkFNSUNfRFJBVyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBub3JtYWxcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9oYXNOb3JtYWwgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSB0aGlzLl9idWZmZXJzWyBHTEF0dHJpYlN0YXRlLk5PUk1BTF9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuTk9STUFMX05BTUUgXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlciggdGhpcy5nbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlciApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbGlzdC5zdWJBcnJheSgpLCB0aGlzLmdsLkRZTkFNSUNfRFJBVyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb2xvclxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuX2hhc0NvbG9yIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5fYnVmZmVyc1sgR0xBdHRyaWJTdGF0ZS5DT0xPUl9OQU1FIF07XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fbGlzdHNbIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKCB0aGlzLmdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEoIHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBsaXN0LnN1YkFycmF5KCksIHRoaXMuZ2wuRFlOQU1JQ19EUkFXICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gR0xNZXNoQnVpbGRlcuS4jeS9v+eUqOe0ouW8lee8k+WGsuWMuue7mOWItuaWueW8j++8jOWboOatpOiwg+eUqGRyYXdBcnJheXPmlrnms5VcclxuICAgICAgICBpZih0aGlzLl9pYm8gIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoIHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2libyApO1xyXG4gICAgICAgICAgICAvL3RoaXMuZ2wuYnVmZmVyRGF0YSggdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5faW5kaWNlcy5zdWJBcnJheSgpLCB0aGlzLl9pbmRleENvdW50ICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKCB0aGlzLmRyYXdNb2RlLCB0aGlzLl9pbmRleENvdW50LCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwICk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyggdGhpcy5kcmF3TW9kZSwgMCwgdGhpcy5fdmVydENvdW50ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudW5iaW5kKCk7IC8vIOino+e7kVZBT1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51bmJpbmQoKTsgLy8g6Kej57uRR0xQcm9ncmFtXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEdMQXR0cmliQml0cywgR0xBdHRyaWJTdGF0ZSB9IGZyb20gXCIuL1dlYkdMQXR0cmliU3RhdGVcIlxyXG5pbXBvcnQgVmVjdG9yNCBmcm9tIFwiLi4vbWF0aC92ZWN0b3I0XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vbWF0aC92ZWN0b3IzXCI7XHJcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tIFwiLi4vbWF0aC9tYXRyaXg0XCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL1dlYkdMVGV4dHVyZVwiO1xyXG5pbXBvcnQgcXVhdCBmcm9tIFwiLi4vbWF0aC9xdWF0XCI7XHJcbmltcG9ydCB7IEdMU2hhZGVyU291cmNlIH0gZnJvbSBcIi4vV2ViR0xTaGFkZXJTb3VyY2VcIjtcclxuaW1wb3J0IHsgR0xIZWxwZXIsIEVTaGFkZXJUeXBlLCBHTEF0dHJpYk1hcCwgR0xVbmlmb3JtTWFwIH0gZnJvbSBcIi4vV2ViR0xIZWxwZXJcIjtcclxuLypcclxu5q+U6L6D54m55Yir55qE5pivVGV4dHVyZSBVbml0XHJcbmdsQWN0aXZlVGV4dHVyZSDmv4DmtLvmn5DkuKpUZXh0dXJlVW5pdFxyXG5nbEJpbmRUZXh0dXJlICAg5r+A5rS755qEVGV4dHVyZVVuaXTkuK3mlL7lhaXnurnnkIZcclxuZ2xVbmlmb3JtMWkgICAgIOWwhnVuaXTmiYDnu5HlrprnmoTnurnnkIZzYW1wbGVy5Lyg6L6T5YiwR1BVXHJcblxyXG7nu5jliLbml7bvvIzkuI3pnIDopoFBY3RpdmVUZXh0dXJl5LqG77yM5Y+q6KaBYmluZ1RleHR1cmXlsLHlj6/ku6XkuoZcclxuKi9cclxuLy8gY2FtZXJh55u45YWzdHJhbnNmb3JtIHVuaWZvcm3lj6/ku6XpooTlhYjorr7lrppcclxuLy8gdGV4dHVyZeebuOWFs++8jOWbuuWumuWMlu+8jOWPr+S7pemihOWFiOiuvuWumlxyXG4vLyDlhbbku5bpnIDopoHmr4/luKfmm7TmlrBcclxuXHJcbmV4cG9ydCBjbGFzcyBHTFByb2dyYW1cclxue1xyXG4gICAgLy8gdW5pZm9ybXPnm7jlhbPlrprkuYlcclxuXHJcbiAgICAvL3Zz5bi455So55qEdW5pZm9ybeWRveWQjVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNVk1hdHJpeDogc3RyaW5nID0gXCJ1TVZNYXRyaXhcIjsgICAgICAgICAgICAgICAgLy8g5qih5Z6L6KeG5Zu+55+p6Zi1XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1vZGVsTWF0cml4OiBzdHJpbmcgPSBcInVNb2RlbE1hdHJpeFwiOyAgICAgICAgICAvLyDmqKHlnovnn6npmLVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVmlld01hdHJpeDogc3RyaW5nID0gXCJ1Vmlld01hdHJpeFwiOyAgICAgICAgICAgIC8vIOinhuefqemYtVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQcm9qZWN0TWF0cml4OiBzdHJpbmcgPSBcInVQcm9qZWN0TWF0cml4XCI7ICAgICAgLy8g5oqV5b2x55+p6Zi1XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5vcm1hbE1hdHJpeDogc3RyaW5nID0gXCJ1Tm9ybWFsTWF0cml4XCI7ICAgICAgICAvLyDms5Xnur/nn6npmLUgICAgICAgICAgICAgICAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTVZQTWF0cml4OiBzdHJpbmcgPSBcInVNVlBNYXRyaXhcIjsgICAgICAgICAgICAgIC8vIOaooeWei1/op4blm75f5oqV5b2x55+p6Zi1XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvbG9yOiBzdHJpbmcgPSBcInVDb2xvclwiOyAgICAgICAgICAgICAgICAgICAgICAvLyDpopzoibLlgLxcclxuXHJcbiAgICAvL3Bz5bi455So55qEdW5pZm9ybeWRveWQjVxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTYW1wbGVyOiBzdHJpbmcgPSBcInVTYW1wbGVyXCI7ICAgICAgICAgICAgICAgIC8vIOe6ueeQhuWPluagt+WZqFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEaWZmdXNlU2FtcGxlcjogc3RyaW5nID0gXCJ1RGlmZnVzZVNhbXBsZXJcIjsgIC8vIOa8q+WPjeWwhOWPluagt+WZqFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOb3JtYWxTYW1wbGVyOiBzdHJpbmcgPSBcInVOb3JtYWxTYW1wbGVyXCI7ICAgIC8vIOazlee6v+WPluagt+WZqFxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTcGVjdWxhclNhbXBsZXI6IHN0cmluZyA9IFwidVNwZWN1bGFyU2FtcGxlclwiOyAvLyDpq5jlhYnlj5bmoLflmahcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVwdGhTYW1wbGVyOiBzdHJpbmcgPSBcInVEZXB0aFNhbXBsZXJcIjsgICAgICAgLy8g5rex5bqm5Y+W5qC35ZmoXHJcblxyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7ICAvLyBXZWJHTOS4iuS4i+aWh+a4suafk+WvueixoVxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZzsgIC8vIHByb2dyYW3lkI1cclxuXHJcbiAgICBwcml2YXRlIF9hdHRyaWJTdGF0ZTogR0xBdHRyaWJCaXRzOyAvLyDlvZPliY3nmoRQcm9ncmFt5L2/55So55qE6aG254K55bGe5oCnYml0c+WAvFxyXG5cclxuICAgIHB1YmxpYyBwcm9ncmFtOiBXZWJHTFByb2dyYW07ICAgLy8g6ZO+5o6l5ZmoXHJcbiAgICBwdWJsaWMgdnNTaGFkZXI6IFdlYkdMU2hhZGVyOyAgIC8vIHZlcnRleCBzaGFkZXLnvJbor5HlmahcclxuICAgIHB1YmxpYyBmc1NoYWRlcjogV2ViR0xTaGFkZXI7ICAgLy8gZnJhZ21lbnQgc2hhZGVy57yW6K+R5ZmoXHJcblxyXG4gICAgLy8g5Li76KaB55So5LqO5L+h5oGv6L6T5Ye6XHJcbiAgICBwdWJsaWMgYXR0cmliTWFwOiBHTEF0dHJpYk1hcDtcclxuICAgIHB1YmxpYyB1bmlmb3JtTWFwOkdMVW5pZm9ybU1hcDtcclxuXHJcbiAgICAvLyDlvZPosIPnlKhnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSnlkI7op6blj5FiaW5kQ2FsbGJhY2vlm57osINcclxuICAgIHB1YmxpYyBiaW5kQ2FsbGJhY2s6ICggKCBwcm9ncmFtOiBHTFByb2dyYW0gKSA9PiB2b2lkICkgfCBudWxsO1xyXG4gICAgLy8g5b2T6LCD55SoZ2wudXNlUHJvZ3JhbShudWxsKeWJjeinpuWPkXVuYmluZENhbGxiYWNr5Zue6LCD5Ye95pWwXHJcbiAgICBwdWJsaWMgdW5iaW5kQ2FsbGJhY2s6ICggKCBwcm9ncmFtOiBHTFByb2dyYW0gKSA9PiB2b2lkICkgfCBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3ZzU2hhZGVyRGVmaW5lU3RyaW5nczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2ZzU2hhZGVyRGVmaW5lU3RyaW5nczogc3RyaW5nW10gPSBbXTtcclxuICAgXHJcbiAgICBwdWJsaWMgZ2V0IGF0dHJpYlN0YXRlICgpOiBHTEF0dHJpYkJpdHNcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0cmliU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9ncm9tQmVmb3JlTGluayhnbDpXZWJHTFJlbmRlcmluZ0NvbnRleHQscHJvZ3JhbTpXZWJHTFByb2dyYW0pOnZvaWR7XHJcbiAgICAgICAgIC8v6ZO+5o6l5YmN5omN6IO95L2/55SoYmluZEF0dHJpYkxvY2F0aW9u5Ye95pWwXHJcbiAgICAgICAgLy8xIGF0dHJpYuWQjeWtl+W/hemhu+WSjHNoYWRlcuS4reeahOWRveWQjeimgeS4gOiHtFxyXG4gICAgICAgIC8vMiDmlbDph4/lv4XpobvopoHlkoxtZXNo5Lit5LiA6Ie0XHJcbiAgICAgICAgLy8zIG1lc2jkuK3nmoTmlbDnu4TnmoRjb21wb25lbnTlv4Xpobvlm7rlrppcclxuICAgICAgICBpZiAoIEdMQXR0cmliU3RhdGUuaGFzUG9zaXRpb24oIHRoaXMuX2F0dHJpYlN0YXRlICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLlBPU0lUSU9OX05BTUUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNOb3JtYWwoIHRoaXMuX2F0dHJpYlN0YXRlICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBHTEF0dHJpYlN0YXRlLk5PUk1BTF9MT0NBVElPTiwgR0xBdHRyaWJTdGF0ZS5OT1JNQUxfTkFNRSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RleENvb3JkXzAoIHRoaXMuX2F0dHJpYlN0YXRlICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX0xPQ0FUSU9OLCBHTEF0dHJpYlN0YXRlLlRFWENPT1JEX05BTUUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNUZXhDb29yZF8xKCB0aGlzLl9hdHRyaWJTdGF0ZSApIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbiggcHJvZ3JhbSwgR0xBdHRyaWJTdGF0ZS5URVhDT09SRDFfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuVEVYQ09PUkQxX05BTUUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggR0xBdHRyaWJTdGF0ZS5oYXNDb2xvciggdGhpcy5fYXR0cmliU3RhdGUgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24oIHByb2dyYW0sIEdMQXR0cmliU3RhdGUuQ09MT1JfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuQ09MT1JfTkFNRSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBHTEF0dHJpYlN0YXRlLmhhc1RhbmdlbnQoIHRoaXMuX2F0dHJpYlN0YXRlICkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKCBwcm9ncmFtLCBHTEF0dHJpYlN0YXRlLlRBTkdFTlRfTE9DQVRJT04sIEdMQXR0cmliU3RhdGUuVEFOR0VOVF9OQU1FICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmTvuaOpeWQjueahOWbnuiwg+WHveaVsOWunumZheS4iuWcqOacrOexu+S4reaYr+WkmuS9meeahFxyXG4gICAgLy8g5Zug5Li65oiR5Lus5bey57uP5Zu65a6a5LqGYXR0cmlidWXnmoTntKLlvJXlj7fku6Xlj4pnZXRVbmlmb3JtTG9jYXRpb27mlrnms5Xojrflj5bmn5DkuKp1bmlmb3Jt5Y+Y6YePXHJcbiAgICAvLyDov5nph4zlj6rmmK/kuLrkuobovpPlh7rlvZPliY1Qcm9ncmFt55u45YWz55qEdW5pZm9ybeWSjGF0dHJpYnV0ZeWPmOmHj+eahOS/oeaBr1xyXG4gICAgcHJpdmF0ZSBwcm9ncm9tQWZ0ZXJMaW5rKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCxwcm9ncmFtOldlYkdMUHJvZ3JhbSk6dm9pZHtcclxuICAgICAgICAvL+iOt+WPluW9k+WJjWFjdGl2ZeeKtuaAgeeahGF0dHJpYnV0ZeWSjHVuaWZvcm3nmoTmlbDph49cclxuICAgICAgICAvL+W+iOmHjeimgeS4gOeCue+8jGFjdGl2ZV9hdHRyaWJ1dGVzL3VuaWZvcm1z5b+F6aG75ZyobGlua+WQjuaJjeiDveiOt+W+l1xyXG4gICAgICAgIEdMSGVscGVyLmdldFByb2dyYW1BY3RpdmVBdHRyaWJzKGdsLHByb2dyYW0sdGhpcy5hdHRyaWJNYXApO1xyXG4gICAgICAgIEdMSGVscGVyLmdldFByb2dyYW1BdGNpdmVVbmlmb3JtcyhnbCxwcm9ncmFtLHRoaXMudW5pZm9ybU1hcCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyaWJNYXApKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVuaWZvcm1NYXApKTtcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIGNvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgYXR0cmliU3RhdGU6IEdMQXR0cmliQml0cywgdnNTaGFkZXI6IHN0cmluZyB8IG51bGwgPSBudWxsLCBmc1NoYWRlcjogc3RyaW5nIHwgbnVsbCA9IG51bGwgKVxyXG4gICB7XHJcbiAgICAgICB0aGlzLmdsID0gY29udGV4dDtcclxuICAgICAgIHRoaXMuX2F0dHJpYlN0YXRlID0gYXR0cmliU3RhdGU7IC8v5pyA5aW95LuOc2hhZGVy5Lit5oq95Y+WXHJcbiAgICAgICB0aGlzLmJpbmRDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICB0aGlzLnVuYmluZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICAgICBsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciB8IG51bGwgPSBHTEhlbHBlci5jcmVhdGVTaGFkZXIodGhpcy5nbCxFU2hhZGVyVHlwZS5WU19TSEFERVIpO1xyXG4gICAgICAgaWYgKCBzaGFkZXIgPT09IG51bGwgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJDcmVhdGUgVmVydGV4IFNoYWRlciBPYmplY3QgRmFpbCEhIVwiICk7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnZzU2hhZGVyID0gc2hhZGVyO1xyXG5cclxuICAgICAgIHNoYWRlciA9IG51bGw7XHJcbiAgICAgICBzaGFkZXIgPSBHTEhlbHBlci5jcmVhdGVTaGFkZXIodGhpcy5nbCxFU2hhZGVyVHlwZS5GU19TSEFERVIpO1xyXG4gICAgICAgaWYgKCBzaGFkZXIgPT09IG51bGwgKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJDcmVhdGUgRnJhZ21lbnQgU2hhZGVyIE9iamVjdCBGYWlsISEhXCIgKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMuZnNTaGFkZXIgPSBzaGFkZXI7XHJcblxyXG4gICAgICAgbGV0IHByb2dyYW06IFdlYkdMUHJvZ3JhbSB8IG51bGwgPSBHTEhlbHBlci5jcmVhdGVQcm9ncmFtKHRoaXMuZ2wpO1xyXG4gICAgICAgaWYgKCBwcm9ncmFtID09PSBudWxsIClcclxuICAgICAgIHtcclxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiQ3JlYXRlIFdlYkdMUHJvZ3JhbSBPYmplY3QgRmFpbCEhIVwiICk7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG5cclxuICAgICAgIHRoaXMuYXR0cmliTWFwID0ge307XHJcbiAgICAgICB0aGlzLnVuaWZvcm1NYXAgPSB7fTtcclxuXHJcbiAgICAgICBpZiAoIHZzU2hhZGVyICE9PSBudWxsICYmIGZzU2hhZGVyICE9PSBudWxsIClcclxuICAgICAgIHtcclxuICAgICAgICAgICB0aGlzLmxvYWRTaGFkZXJzKCB2c1NoYWRlciwgZnNTaGFkZXIgKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICB9XHJcblxyXG4gICAgLy8g5ZyoVmVydGV4IFNoYWRlcuS4reWKqOaAgea3u+WKoOWuj1xyXG4gICAgcHVibGljIGFkZFZTU2hhZGVyTWFjcm8gKCBzdHI6IHN0cmluZyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBzdHIuaW5kZXhPZiggXCIjZGVmaW5lIFwiICkgPT09IC0xIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiI2RlZmluZSBcIiArIHN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdnNTaGFkZXJEZWZpbmVTdHJpbmdzLnB1c2goIHN0ciApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWcqEZyYWdtZW50IFNoYWRlcuS4reWKqOaAgea3u+WKoOWuj1xyXG4gICAgcHVibGljIGFkZEZTU2hhZGVyTWFjcm8gKCBzdHI6IHN0cmluZyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBzdHIuaW5kZXhPZiggXCIjZGVmaW5lIFwiICkgPT09IC0xIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiI2RlZmluZSBcIiArIHN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZnNTaGFkZXJEZWZpbmVTdHJpbmdzLnB1c2goIHN0ciApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZzIGZz6YO96KaB5re75Yqg55qE5a6P77yM5L6L5aaC5ZyoVlMgLyBGU+S4rea3u+WKoOWmguS4i+Wuj++8mlxyXG4gICAgLy8gI2lmZGVmIEdMX0VTXHJcbiAgICAvLyAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgIC8vICNlbmRpZlxyXG4gICAgcHVibGljIGFkZFNoYWRlck1hY3JvICggc3RyOiBzdHJpbmcgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRkVlNTaGFkZXJNYWNybyggc3RyICk7XHJcbiAgICAgICAgdGhpcy5hZGRGU1NoYWRlck1hY3JvKCBzdHIgKTtcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBsb2FkU2hhZGVycyAoIHZzOiBzdHJpbmcsIGZzOiBzdHJpbmcgKTogdm9pZFxyXG4gICB7XHJcbiAgICAgICBpZiAoIHRoaXMuX3ZzU2hhZGVyRGVmaW5lU3RyaW5ncy5sZW5ndGggPiAwIClcclxuICAgICAgIHtcclxuICAgICAgICAgICBsZXQgam9pbjogc3RyaW5nID0gdGhpcy5fdnNTaGFkZXJEZWZpbmVTdHJpbmdzLmpvaW4oIFwiXFxuXCIgKTtcclxuICAgICAgICAgICB2cyA9IGpvaW4gKyB2cztcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpZiAoIHRoaXMuX2ZzU2hhZGVyRGVmaW5lU3RyaW5ncy5sZW5ndGggPiAwIClcclxuICAgICAgIHtcclxuICAgICAgICAgICBsZXQgam9pbjogc3RyaW5nID0gdGhpcy5fZnNTaGFkZXJEZWZpbmVTdHJpbmdzLmpvaW4oIFwiXFxuXCIgKTtcclxuICAgICAgICAgICBmcyA9IGpvaW4gKyBmcztcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpZihHTEhlbHBlci5jb21waWxlU2hhZGVyKHRoaXMuZ2wsdnMsdGhpcy52c1NoYWRlcikgPT09IGZhbHNlKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIgV2ViR0zpobbngrlTaGFkZXLpk77mjqXkuI3miJDlip8hIFwiKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpZihHTEhlbHBlci5jb21waWxlU2hhZGVyKHRoaXMuZ2wsZnMsdGhpcy5mc1NoYWRlcikgPT09IGZhbHNlKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIgV2ViR0zlg4/ntKDniYfmrrVTaGFkZXLpk77mjqXkuI3miJDlip8hIFwiKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBpZihHTEhlbHBlci5saW5rUHJvZ3JhbSh0aGlzLmdsLHRoaXMucHJvZ3JhbSx0aGlzLnZzU2hhZGVyLHRoaXMuZnNTaGFkZXIsdGhpcy5wcm9ncm9tQmVmb3JlTGluay5iaW5kKHRoaXMpLHRoaXMucHJvZ3JvbUFmdGVyTGluay5iaW5kKHRoaXMpKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIiBXZWJHTFByb2dyYW3pk77mjqXkuI3miJDlip8hIFwiKTtcclxuICAgICAgIH1cclxuIFxyXG4gICAgICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCB0aGlzLmF0dHJpYk1hcCApICk7XHJcbiAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZCAoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSggdGhpcy5wcm9ncmFtICk7XHJcbiAgICAgICAgaWYgKCB0aGlzLmJpbmRDYWxsYmFjayAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRDYWxsYmFjayggdGhpcyApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5iaW5kICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLnVuYmluZENhbGxiYWNrICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudW5iaW5kQ2FsbGJhY2soIHRoaXMgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKCBudWxsICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVuaWZvcm1Mb2NhdGlvbiAoIG5hbWU6IHN0cmluZyApOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGxcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24oIHRoaXMucHJvZ3JhbSwgbmFtZSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbiAoIG5hbWU6IHN0cmluZyApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbiggdGhpcy5wcm9ncmFtLCBuYW1lICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEF0dHJpYnV0ZUxvY2F0aW9uICggbmFtZTogc3RyaW5nLCBsb2M6IG51bWJlciApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbC5iaW5kQXR0cmliTG9jYXRpb24oIHRoaXMucHJvZ3JhbSwgbG9jLCBuYW1lICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEludChuYW1lOnN0cmluZyAsIGk6bnVtYmVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkoIGxvYywgaSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRGbG9hdCAoIG5hbWU6IHN0cmluZywgZjogbnVtYmVyICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFmKCBsb2MsIGYgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVjdG9yMiAoIG5hbWU6IHN0cmluZywgdjI6IFZlY3RvcjIgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nbC51bmlmb3JtMmZ2KCBsb2MsIHYyLnZhbHVlcyApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0yZnYoIGxvYywgW3YyLngsIHYyLnldICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFZlY3RvcjMgKCBuYW1lOiBzdHJpbmcsIHYzOiBWZWN0b3IzICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2wudW5pZm9ybTNmdiggbG9jLCB2My52YWx1ZXMgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtM2Z2KCBsb2MsIFt2My54LCB2My55LCB2My56XSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZWN0b3I0ICggbmFtZTogc3RyaW5nLCB2NDogVmVjdG9yNCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdsLnVuaWZvcm00ZnYoIGxvYywgdjQudmFsdWVzICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTRmdiggbG9jLCBbdjQueCwgdjQueSwgdjQueiwgdjQud10gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UXVhdCAoIG5hbWU6IHN0cmluZywgcTogcXVhdCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm00ZnYoIGxvYywgcS52YWx1ZXMgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWF0cml4MyAoIG5hbWU6IHN0cmluZywgbWF0OiBNYXRyaXg0ICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbiggbmFtZSApO1xyXG4gICAgICAgIGlmICggbG9jIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDNmdiggbG9jLCBmYWxzZSwgbWF0LnZhbHVlcyApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYXRyaXg0ICggbmFtZTogc3RyaW5nLCBtYXQ6IE1hdHJpeDQgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbCA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKCBuYW1lICk7XHJcbiAgICAgICAgaWYgKCBsb2MgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KCBsb2MsIGZhbHNlLCBtYXQudmFsdWVzICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNhbXBsZXIgKCBuYW1lOiBzdHJpbmcsIHNhbXBsZXI6IG51bWJlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oIG5hbWUgKTtcclxuICAgICAgICBpZiAoIGxvYyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSggbG9jLCBzYW1wbGVyICk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRNb2RlVmlld01hdHJpeCAoIG1hdDogTWF0cml4NCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0TWF0cml4NCggR0xQcm9ncmFtLk1WTWF0cml4LCBtYXQgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNhbXBsZXIgKCB1bml0OiBudW1iZXIgPSAwICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRTYW1wbGVyKCBHTFByb2dyYW0uU2FtcGxlciwgdW5pdCApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZURlZmF1bHRUZXh0dXJlUHJvZ3JhbSAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogR0xQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBybzogR0xQcm9ncmFtID0gbmV3IEdMUHJvZ3JhbSggZ2wsIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUIHwgR0xBdHRyaWJTdGF0ZS5URVhDT09SRF9CSVQsXHJcbiAgICAgICAgICAgIEdMU2hhZGVyU291cmNlLnRleHR1cmVTaGFkZXIudnMsIEdMU2hhZGVyU291cmNlLnRleHR1cmVTaGFkZXIuZnMgKTtcclxuICAgICAgICByZXR1cm4gcHJvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRGVmYXVsdENvbG9yUHJvZ3JhbSAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgKTogR0xQcm9ncmFtXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBybzogR0xQcm9ncmFtID0gbmV3IEdMUHJvZ3JhbSggZ2wsIEdMQXR0cmliU3RhdGUuUE9TSVRJT05fQklUIHwgR0xBdHRyaWJTdGF0ZS5DT0xPUl9CSVQsXHJcbiAgICAgICAgICAgIEdMU2hhZGVyU291cmNlLmNvbG9yU2hhZGVyLnZzLCBHTFNoYWRlclNvdXJjZS5jb2xvclNoYWRlci5mcyApO1xyXG4gICAgICAgIHJldHVybiBwcm87XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgcHVibGljIHN0YXRpYyBjcmVhdGVEZWZhdWx0VGV4dHVyZVByb2dyYW0gKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IEdMUHJvZ3JhbVxyXG4gICB7XHJcbiAgICAgICBsZXQgcHJvOiBHTFByb2dyYW0gPSBuZXcgR0xQcm9ncmFtKCBnbCwgR0xBdHRyaWJTdGF0ZS5tYWtlVmVydGV4QXR0cmlicyh0cnVlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlKSxcclxuICAgICAgICAgICBHTFNoYWRlclNvdXJjZS50ZXh0dXJlU2hhZGVyLnZzLCBHTFNoYWRlclNvdXJjZS50ZXh0dXJlU2hhZGVyLmZzICk7XHJcbiAgICAgICByZXR1cm4gcHJvO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGNyZWF0ZURlZmF1bHRDb2xvclByb2dyYW0gKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IEdMUHJvZ3JhbVxyXG4gICB7XHJcbiAgICAgICBsZXQgcHJvOiBHTFByb2dyYW0gPSBuZXcgR0xQcm9ncmFtKCBnbCwgR0xBdHRyaWJTdGF0ZS5tYWtlVmVydGV4QXR0cmlicyhmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSx0cnVlKSxcclxuICAgICAgICAgICBHTFNoYWRlclNvdXJjZS5jb2xvclNoYWRlci52cywgR0xTaGFkZXJTb3VyY2UuY29sb3JTaGFkZXIuZnMgKTtcclxuICAgICAgIHJldHVybiBwcm87XHJcbiAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgR0xQcm9ncmFtIH0gZnJvbSBcIi4vV2ViR0xQcm9ncmFtXCI7XHJcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnRhaW5lci9EaWN0aW9uYXJ5XCI7XHJcblxyXG4vLyDljZXkvovorr7orqHmqKHlvI9cclxuZXhwb3J0IGNsYXNzIEdMUHJvZ3JhbUNhY2hlXHJcbntcclxuICAgIC8vIOWPquWIneWni+WMluS4gOasoe+8jOS9v+eUqOeahOaYr3B1YmxpYyBzdGF0aWMgcmVhZG9ubHnlo7DmmI7mlrnlvI9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEdMUHJvZ3JhbUNhY2hlID0gbmV3IEdMUHJvZ3JhbUNhY2hlKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGljdDogRGljdGlvbmFyeTxHTFByb2dyYW0+O1xyXG5cclxuICAgIC8vIOengeacieaehOmAoOWHveaVsFxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvciAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2RpY3QgPSBuZXcgRGljdGlvbmFyeTxHTFByb2dyYW0+KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiY3JlYXRlIG5ldyBHTFByb2dyYW1DYWNoZSEhXCIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0ICgga2V5OiBzdHJpbmcsIHZhbHVlOiBHTFByb2dyYW0gKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX2RpY3QuaW5zZXJ0KCBrZXksIHZhbHVlICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Y+v6IO96L+U5ZuedW5kZWZpbmVk57G75Z6LXHJcbiAgICBwdWJsaWMgZ2V0TWF5YmUgKCBrZXk6IHN0cmluZyApOiBHTFByb2dyYW0gfCB1bmRlZmluZWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmV0OiBHTFByb2dyYW0gfCB1bmRlZmluZWQgPSB0aGlzLl9kaWN0LmZpbmQoIGtleSApO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aaC5p6c6L+U5ZuedW5kZWZpbmVk77yM55u05o6l5oqb6ZSZXHJcbiAgICBwdWJsaWMgZ2V0TXVzdCAoIGtleTogc3RyaW5nICk6IEdMUHJvZ3JhbVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXQ6IEdMUHJvZ3JhbSB8IHVuZGVmaW5lZCA9IHRoaXMuX2RpY3QuZmluZCgga2V5ICk7XHJcbiAgICAgICAgaWYgKCByZXQgPT09IHVuZGVmaW5lZCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGtleSArIFwi5a+55bqU55qEUHJvZ3JhbeS4jeWtmOWcqCEhIVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSAoIGtleTogc3RyaW5nICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGljdC5yZW1vdmUoIGtleSApO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IEdMU2hhZGVyU291cmNlID0ge1xyXG4gICAgY29sb3JTaGFkZXI6IHtcclxuICAgICAgICB2czogYFxyXG4gICAgICAgICNpZmRlZiBHTF9FU1xyXG4gICAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICAgI2VuZGlmXHJcblxyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFQb3NpdGlvbjtcclxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhQ29sb3I7XHJcbiAgICBcclxuICAgICAgICB1bmlmb3JtIG1hdDQgdU1WUE1hdHJpeDtcclxuICAgIFxyXG4gICAgICAgIHZhcnlpbmcgdmVjNCB2Q29sb3I7XHJcbiAgICBcclxuICAgICAgICB2b2lkIG1haW4odm9pZCl7XHJcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdU1WUE1hdHJpeCAqIHZlYzQoYVBvc2l0aW9uLDEuMCk7XHJcbiAgICAgICAgICAgIHZDb2xvciA9IGFDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICBmczogYFxyXG4gICAgICAgICNpZmRlZiBHTF9FU1xyXG4gICAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICAgI2VuZGlmXHJcblxyXG4gICAgICAgIHZhcnlpbmcgIHZlYzQgdkNvbG9yO1xyXG4gICAgICAgIHZvaWQgbWFpbih2b2lkKXtcclxuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdkNvbG9yO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgIH0sXHJcbiAgICB0ZXh0dXJlU2hhZGVyOiB7XHJcbiAgICAgICAgdnM6XHJcbiAgICBgXHJcbiAgICAgICAgI2lmZGVmIEdMX0VTXHJcbiAgICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAjZW5kaWZcclxuXHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzMgYVBvc2l0aW9uO1xyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXhDb29yZDtcclxuICAgICAgICB1bmlmb3JtIG1hdDQgdU1WUE1hdHJpeDtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcclxuICAgICAgICB2b2lkIG1haW4odm9pZCkge1xyXG4gICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdU1WUE1hdHJpeCAqIHZlYzQoYVBvc2l0aW9uLDEuMCk7O1xyXG4gICAgICAgICAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4Q29vcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgYCxcclxuICAgICAgICBmczogICAgYFxyXG4gICAgICAjaWZkZWYgR0xfRVNcclxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgICAjZW5kaWZcclxuXHJcbiAgICAgIHZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1xyXG4gICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcclxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR0xIZWxwZXIgfSBmcm9tIFwiLi9XZWJHTEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGVudW0gRUdMVGV4V3JhcFR5cGVcclxue1xyXG4gICAgR0xfUkVQRUFULCAvL+iuvue9ruS4umds5a+55bqU55qE5bi46YePXHJcbiAgICBHTF9NSVJST1JFRF9SRVBFQVQsXHJcbiAgICBHTF9DTEFNUF9UT19FREdFXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTFRleHR1cmVcclxue1xyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgICBwdWJsaWMgaXNNaXBtYXA6IGJvb2xlYW47ICAvLyDmmK/lkKbkvb/nlKhtaXBtYXDnlJ/miJDnurnnkIblr7nosaFcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyOyAgLy8g5b2T5YmN57q555CG5a+56LGh55qE5YOP57Sg5a695bqmXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7IC8vIOW9k+WJjee6ueeQhuWvueixoeeahOWDj+e0oOmrmOW6plxyXG4gICAgcHVibGljIGZvcm1hdDogbnVtYmVyOyAvLyDlnKjlhoXlrZjmiJbmmL7lrZjkuK3lg4/ntKDnmoTlrZjlgqjmoLzlvI/vvIzpu5jorqTkuLpnbC5SR0JBXHJcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyOyAvLyDlg4/ntKDliIbph4/nmoTmlbDmja7nsbvlnovvvIzpu5jorqTkuLpnbC5VTlNJR05FRF9CWVRFXHJcbiAgICBwdWJsaWMgdGV4dHVyZTogV2ViR0xUZXh0dXJlOyAvLyBXZWJHTFRleHR1cmXlr7nosaFcclxuICAgIHB1YmxpYyB0YXJnZXQ6IG51bWJlcjsgLy8g5Li6Z2wuVEVYVFVSRV8yRFxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZzsgLy8g57q555CG55qE5ZCN56ewXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgbmFtZTogc3RyaW5nID0gJycgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB0aGlzLmlzTWlwbWFwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9IGdsLlJHQkE7XHJcbiAgICAgICAgdGhpcy50eXBlID0gZ2wuVU5TSUdORURfQllURTtcclxuICAgICAgICBsZXQgdGV4OiBXZWJHTFRleHR1cmUgfCBudWxsID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIGlmICggdGV4ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJXZWJHTFRleHR1cmXliJvlu7rkuI3miJDlip8hXCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZ2wuVEVYVFVSRV8yRDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMud3JhcCgpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL6Z2i5LiJ5Liq6Z2Z5oCB6L6F5Yqp5pa55rOV55So5LqO55Sf5oiQ57q555CG55qEbWlwbWFw5L2/55SoXHJcblxyXG4gICAgLy8gMeOAgemdmeaAgei+heWKqeaVsOWtpuaWueazle+8jOWIpOaWreWPguaVsHjvvIjlv4XpobvmmK8077yJ5piv5ZCm5pivMueahG7mrKHmlrnvvIzljbN45piv5LiN5pivMeOAgTLjgIE044CBOOOAgTE244CBMzLjgIE2NOOAgS4uLi4uXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzUG93ZXJPZlR3byAoIHg6IG51bWJlciApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggeCAmICggeCAtIDEgKSApID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMuOAgemdmeaAgei+heWKqeaVsOWtpuaWueazle+8jOe7meWumuaVtOaVsOWPguaVsHjvvIzlj5bkuIvkuIDkuKoy55qEbuasoeaWueaVsFxyXG4gICAgLy8g5aaC5p6ceOS4ujPvvIzliJnov5Tlm540XHJcbiAgICAvLyDlpoLmnpx45Li6NO+8jOWImei/lOWbnjRcclxuICAgIC8vIOWmguaenHjkuLo177yM5YiZ6L+U5ZueOFxyXG4gICAgLy8g5L6d5qyh57G75o6oXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5leHRQb3dlck9mVHdvICggeDogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmICggeCA8PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLlj4LmlbDlv4XpobvopoHlpKfkuo4wIVwiIClcclxuICAgICAgICB9XHJcbiAgICAgICAgLS14O1xyXG4gICAgICAgIGZvciAoIHZhciBpID0gMTsgaSA8IDMyOyBpIDw8PSAxIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHggPSB4IHwgeCA+PiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gM+OAgeWwhumdnjLnmoRu5qyh5pa555qEc3JjSW1hZ2XovazmjaLmiJAy55qEbuasoeaWueeahENhbnZhc1JlbmRlcmluZ0NvbnRleHQyROWvueixoVxyXG4gICAgLy8g54S25ZCO5ZCO57ut55So5p2l55Sf5oiQbWlwbWFw57q555CGXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBvd2VyT2ZUd29DYW52YXMgKCBzcmNJbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IEhUTUxDYW52YXNFbGVtZW50ICk6IEhUTUxDYW52YXNFbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImNhbnZhc1wiICk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gR0xUZXh0dXJlLmdldE5leHRQb3dlck9mVHdvKCBzcmNJbWFnZS53aWR0aCApO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBHTFRleHR1cmUuZ2V0TmV4dFBvd2VyT2ZUd28oIHNyY0ltYWdlLmhlaWdodCApO1xyXG4gICAgICAgIGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dCggXCIyZFwiICk7XHJcbiAgICAgICAgaWYgKCBjdHggPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIuacquiDveaIkOWKn+WIm+W7ukNhbnZhc1JlbmRlcmluZ0NvbnRleHQyROWvueixoVwiICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNyY0ltYWdlLCAwLCAwLCBzcmNJbWFnZS53aWR0aCwgc3JjSW1hZ2UuaGVpZ2h0LCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4i+mdoueahOmdmeaAgeaWueazleWSjOaIkOWRmOWPmOmHj+eUqOadpeWIm+W7uum7mOiupOeahDLnmoRu5pa555qE57q555CG5a+56LGhXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZURlZmF1bHRUZXh0dXJlICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCApOiBHTFRleHR1cmVcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RlcDogbnVtYmVyID0gNDtcclxuICAgICAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gMzIgKiBzdGVwO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAzMiAqIHN0ZXA7XHJcbiAgICAgICAgbGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBjYW52YXMuZ2V0Q29udGV4dCggXCIyZFwiICk7XHJcbiAgICAgICAgaWYgKCBjb250ZXh0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCBcIuemu+Wxj0NhbnZhc+iOt+WPlua4suafk+S4iuS4i+aWh+Wksei0pe+8gVwiICk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCLnprvlsY9DYW52YXPojrflj5bmuLLmn5PkuIrkuIvmloflpLHotKXvvIFcIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggbGV0IGk6IG51bWJlciA9IDA7IGkgPCBzdGVwOyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yICggbGV0IGo6IG51bWJlciA9IDA7IGogPCBzdGVwOyBqKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSBzdGVwICogaSArIGo7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gR0xUZXh0dXJlLkNvbG9yc1sgaWR4IF07XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KCBpICogMzIsIGogKiAzMiwgMzIsIDMyICk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGV4OiBHTFRleHR1cmUgPSBuZXcgR0xUZXh0dXJlKCBnbCApO1xyXG4gICAgICAgIHRleC53cmFwKCk7XHJcbiAgICAgICAgdGV4LnVwbG9hZCggY2FudmFzICk7XHJcbiAgICAgICAgcmV0dXJuIHRleDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjc3PmoIflh4boibLlrZfnrKbkuLJcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ29sb3JzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnYXF1YScsICAgIC8v5rWF57u/6ImyXHJcbiAgICAgICAgJ2JsYWNrJywgICAvL+m7keiJslxyXG4gICAgICAgICdibHVlJywgICAgLy/ok53oibIgXHJcbiAgICAgICAgJ2Z1Y2hzaWEnLCAvL+e0q+e6ouiJslxyXG4gICAgICAgICdncmF5JywgICAgIC8v54Gw6ImyXHJcbiAgICAgICAgJ2dyZWVuJywgICAvL+e7v+iJslxyXG4gICAgICAgICdsaW1lJywgICAgLy/nu7/pu4ToibJcclxuICAgICAgICAnbWFyb29uJywgIC8v6KSQ57qi6ImyXHJcbiAgICAgICAgJ25hdnknLCAgICAvL+a1t+WGm+iTnVxyXG4gICAgICAgICdvbGl2ZScsICAgLy/mqYTmpoToibJcclxuICAgICAgICAnb3JhbmdlJywgIC8v5qmZ6ImyXHJcbiAgICAgICAgJ3B1cnBsZScsICAvL+e0q+iJslxyXG4gICAgICAgICdyZWQnLCAgICAgIC8v57qi6ImyXHJcbiAgICAgICAgJ3NpbHZlcicsICAvL+mTtueBsOiJslxyXG4gICAgICAgICd0ZWFsJywgICAgLy/ok53nu7/oibJcclxuICAgICAgICAneWVsbG93JywgICAvL+m7hOiJslxyXG4gICAgICAgICd3aGl0ZScgICAvL+eZveiJslxyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgYmluZCAoIHVuaXQ6IG51bWJlciA9IDAgKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICggdGhpcy50ZXh0dXJlICE9PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSggdGhpcy5nbC5URVhUVVJFMCArIHVuaXQgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSggdGhpcy50YXJnZXQsIHRoaXMudGV4dHVyZSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5iaW5kICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB0aGlzLnRleHR1cmUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSggdGhpcy50YXJnZXQsIG51bGwgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9URVhUVVJFX01JTl9GSUxURVI6IE5FQVJFU1RfTUlQTUFQX0xJTkVBUijpu5jorqQpXHJcbiAgICAvL1RFWFRVUkVfTUFHX0ZJTFRFUjogTElORUFSKOm7mOiupClcclxuICAgIHB1YmxpYyBmaWx0ZXIgKCBtaW5MaW5lYXI6IGJvb2xlYW4gPSB0cnVlLCBtYWdMaW5lYXI6IGJvb2xlYW4gPSB0cnVlICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyDlnKjorr7nva5maWx0ZXLml7blhYjopoHnu5HlrprlvZPliY3nmoTnurnnkIbnm67moIdcclxuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMudGFyZ2V0LHRoaXMudGV4dHVyZSk7IFxyXG4gICAgICAgIGlmICggdGhpcy5pc01pcG1hcCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgbWluTGluZWFyID8gdGhpcy5nbC5MSU5FQVJfTUlQTUFQX0xJTkVBUiA6IHRoaXMuZ2wuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsIG1pbkxpbmVhciA/IHRoaXMuZ2wuTElORUFSIDogdGhpcy5nbC5ORUFSRVNUICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgbWFnTGluZWFyID8gdGhpcy5nbC5MSU5FQVIgOiB0aGlzLmdsLk5FQVJFU1QgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JhcCAoIG1vZGU6IEVHTFRleFdyYXBUeXBlID0gRUdMVGV4V3JhcFR5cGUuR0xfUkVQRUFUICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMudGFyZ2V0LHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgaWYgKCBtb2RlID09PSBFR0xUZXhXcmFwVHlwZS5HTF9DTEFNUF9UT19FREdFIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSApO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkoIHRoaXMudGFyZ2V0LCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLkNMQU1QX1RPX0VER0UgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBtb2RlID09PSBFR0xUZXhXcmFwVHlwZS5HTF9SRVBFQVQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5SRVBFQVQgKTtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKCB0aGlzLnRhcmdldCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdGhpcy5nbC5SRVBFQVQgKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuZ2wuTUlSUk9SRURfUkVQRUFUICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSggdGhpcy50YXJnZXQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuZ2wuTUlSUk9SRURfUkVQRUFUICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0b3J5ICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKCB0aGlzLnRleHR1cmUgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkICggc291cmNlOiBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTENhbnZhc0VsZW1lbnQsIHVuaXQ6IG51bWJlciA9IDAsIG1pcG1hcDogYm9vbGVhbiA9IGZhbHNlICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJpbmQoIHVuaXQgKTsgLy8g5YWI57uR5a6a5b2T5YmN6KaB5pON5L2c55qEV2ViR0xUZXh0dXJl5a+56LGh77yM6buY6K6k5Li6MFxyXG4gICAgICAgIC8v5ZCm5YiZ6LS05Zu+5Lya5YCS6L+H5p2lXHJcbiAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSggdGhpcy5nbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAxICk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIG1pcG1hcCA9PT0gdHJ1ZSApIC8vIOS9v+eUqG1pcG1hcOeUn+aIkOe6ueeQhlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGlzV2lkdGhQb3dlck9mVHdvOiBib29sZWFuID0gR0xUZXh0dXJlLmlzUG93ZXJPZlR3byggdGhpcy53aWR0aCApO1xyXG4gICAgICAgICAgICBsZXQgaXNIZWlnaHRQb3dlck9mVHdvOiBib29sZWFuID0gR0xUZXh0dXJlLmlzUG93ZXJPZlR3byggdGhpcy5oZWlnaHQgKTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5rqQ5Zu+5YOP55qE5a695bqm5ZKM6auY5bqm6YO95pivMueahG7mrKHmlrnmoLzlvI/nmoTvvIzliJnnm7TmjqXovb3lhaXlg4/ntKDmlbDmja7nhLblkI7osIPnlKhnZW5lcmF0ZU1pcG1hcOaWueazlVxyXG4gICAgICAgICAgICBpZiAoIGlzV2lkdGhQb3dlck9mVHdvID09PSB0cnVlICYmIGlzSGVpZ2h0UG93ZXJPZlR3byA9PT0gdHJ1ZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCggdGhpcy50YXJnZXQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAoIHRoaXMudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSAvLyDlkKbliJnor7TmmI7oh7PlsJHmnInkuIDkuKrkuI3mmK8y55qEbuasoeaWueeahO+8jOmcgOimgeeJueWIq+WkhOeQhlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IEdMVGV4dHVyZS5jcmVhdGVQb3dlck9mVHdvQ2FudmFzKCBzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCggdGhpcy50YXJnZXQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBjYW52YXMgKTtcclxuICAgICAgICAgICAgICAgIEdMSGVscGVyLmNoZWNrR0xFcnJvciggdGhpcy5nbCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCggdGhpcy50YXJnZXQgKTtcclxuICAgICAgICAgICAgICAgIEdMSGVscGVyLmNoZWNrR0xFcnJvciggdGhpcy5nbCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzTWlwbWFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pc01pcG1hcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQoIHRoaXMudGFyZ2V0LCAwLCB0aGlzLmZvcm1hdCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgc291cmNlICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIuW9k+WJjee6ueeQhuWwuuWvuOS4ujogXCIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy51bmJpbmQoKTsgLy8vLyDop6Pnu5HlvZPliY3opoHmk43kvZznmoRXZWJHTFRleHR1cmXlr7nosaFcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL1dlYkdMVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSBcIi4uL2NvbW1vbi9jb250YWluZXIvRGljdGlvbmFyeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMVGV4dHVyZUNhY2hle1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBpbnN0YW5jZTogR0xUZXh0dXJlQ2FjaGUgPSBuZXcgR0xUZXh0dXJlQ2FjaGUoKTtcclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTpzdHJpbmcsdmFsdWU6R0xUZXh0dXJlKXtcclxuICAgICAgICB0aGlzLl9kaWN0Lmluc2VydChrZXksdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYXliZShrZXk6c3RyaW5nKTpHTFRleHR1cmV8dW5kZWZpbmVke1xyXG4gICAgICAgIGxldCByZXQ6R0xUZXh0dXJlfHVuZGVmaW5lZCA9IHRoaXMuX2RpY3QuZmluZChrZXkpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE11c3Qoa2V5OnN0cmluZyk6R0xUZXh0dXJlIHtcclxuICAgICAgICBsZXQgcmV0OkdMVGV4dHVyZXx1bmRlZmluZWQgPSB0aGlzLl9kaWN0LmZpbmQoa2V5KTtcclxuICAgICAgICBpZihyZXQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkrXCLlr7nlupTnmoRQcm9ncmFt5LiN5a2Y5ZyoISEhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OnN0cmluZyk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGljdC5yZW1vdmUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaWN0OkRpY3Rpb25hcnk8R0xUZXh0dXJlPjtcclxuICAgIC8vIOengeacieaehOmAoOWHveaVsFxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX2RpY3QgPSBuZXcgRGljdGlvbmFyeTxHTFRleHR1cmU+KCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==