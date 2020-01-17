function initShaders (type: string) {
    
}

function loaderShaders(gl:object, type:string) :string {
    let shader:string = gl.createShader(type);
    if(shader === null){
        console.log("unable to create shader");
        return null;
    }
    return shader;
}