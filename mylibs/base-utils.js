function initShaders(gl, vshader, fshader) {
    var program = createShaderProgram(gl, vshader, fshader);
    if (!program) {
        console.log("捡垃圾!!!");
        return false;
    }
    gl.useProgram(program);
    gl.program = program;
    return true;
}
function createShaderProgram(gl, vshader, fshader) {
    var vertexShader = loaderShaders(gl, gl.VERTEX_SHADER, vshader);
    var fragmentShader = loaderShaders(gl, gl.FRAGMENT_SHADER, fshader);
    if (!vertexShader || !vertexShader) {
        return null;
    }
    var program = gl.createProgram();
    if (!program) {
        return null;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linkStatus) {
        var errorLog = gl.getProgramInfoLog();
        console.log('Failed to link program:' + errorLog);
        gl.deletePorgram();
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }
    return program;
}
function loaderShaders(gl, type, source) {
    var shader = gl.createShader(type);
    if (shader === null) {
        console.log("unable to create shader");
        return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var errorLog = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader" + errorLog);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
function getWebGLContext(canvas, opt_debug) {
    // Get the rendering context for WebGL
    var gl = WebGLUtils.setupWebGL(canvas);
    if (!gl)
        return null;
    // if opt_debug is explicitly false, create the context for debugging
    if (arguments.length < 2 || opt_debug) {
        gl = WebGLDebugUtils.makeDebugContext(gl);
    }
    return gl;
}
//# sourceMappingURL=base-utils.js.map