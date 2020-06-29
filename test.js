var hello = "Helloe World!";
console.log(hello);
var aa = "how to debug?";
console.log(aa);
function main() {
    var canvas = document.getElementById("webgl");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
//# sourceMappingURL=test.js.map