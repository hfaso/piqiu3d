function initShaders (type: string): void {
    
}

function createShaderProgram(){
    
}

function loaderShaders(gl:object, type:string, source:string) :string {
    let shader:string = gl.createShader(type);
    if(shader === null){
        console.log("unable to create shader");
        return null;
    }

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    let compiled = getShaderParameter(shader, gl.COMPILE_STATUS);
    if(!compiled){
        let errorLog = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader" + errorLog);
        gl.deleteShader(shader);
        return null;
    }


    return shader;
}

