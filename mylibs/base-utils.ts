function initShaders (gl:object ,vshader: string, fshader:string): boolean {
    let program = createShaderProgram(gl, vshader, fshader);
    if(!program){
        console.log("捡垃圾!!!");
        return false;
    }

    gl.useProgram(program);
    gl.program = program;
    return true;
}

function createShaderProgram(gl:object ,vshader: string, fshader:string): string{
    let vertexShader = loaderShaders(gl, gl.VERTEX_SHADER, vshader);
    let fragmentShader = loaderShaders(gl, gl.FRAGMENT_SHADER, fshader);
    if(!vertexShader || !vertexShader){
        return null;
    }

    let program = gl.createProgram();
    if(!program) {
        return null;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    let linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
    if(!linkStatus) {
        let errorLog = gl.getProgramInfoLog();
        console.log('Failed to link program:' +errorLog);
        gl.deletePorgram();
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return null;
    }

    return program;
}

function loaderShaders(gl:object, type:string, source:string) :string {
    let shader:string = gl.createShader(type);
    if(shader === null){
        console.log("unable to create shader");
        return null;
    }

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(!compiled){
        let errorLog = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader" + errorLog);
        gl.deleteShader(shader);
        return null;
    }


    return shader;
}

