let hello:string = "Helloe World!";
console.log(hello);
let aa:string = "how to debug?";
console.log(aa);
function main():void{
    let canvas = document.getElementById("webgl");

    let gl = canvas.getContext("webgl");

    if(!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

}