
function Matrix4(values) {
    this.values = new Float32Array(16);
    if (values !== undefined) {
        // for (let i = 0; i < 16; i++){
        //     this.values[i] = values[i];
        // }
        this.identity(values);
    }
}
Matrix4.prototype.identity = function (values) {
    for (var i = 0; i < 16; i++) {
        this.values[i] = values[i];
    }
    return this;
};
Matrix4.prototype.identity = function () {
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
};
Matrix4.prototype.reset = function () {
    for (var i = 0; i < 16; i++) {
        this.values[i] = 0;
    }
};
Matrix4.prototype.copy = function (dest) {
    if (!dest) {
        dest = new Matrix4();
    }
    for (var i = 0; i < 16; i++) {
        dest.values[i] = this.values[i];
    }
    return dest;
};
Matrix4.prototype.transpose = function () {
    var temp10 = this.values[1];
    var temp20 = this.values[2];
    var temp30 = this.values[3];
    var temp21 = this.values[6];
    var temp31 = this.values[7];
    var temp32 = this.values[11];
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
};
Matrix4.prototype.determinant = function () {
    var a00 = this.values[0];
    var a01 = this.values[1];
    var a02 = this.values[2];
    var a03 = this.values[3];
    var a10 = this.values[4];
    var a11 = this.values[5];
    var a12 = this.values[6];
    var a13 = this.values[7];
    var a20 = this.values[8];
    var a21 = this.values[9];
    var a22 = this.values[10];
    var a23 = this.values[11];
    var a30 = this.values[12];
    var a31 = this.values[13];
    var a32 = this.values[14];
    var a33 = this.values[15];
    var A00 = a00 * (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a11 * a23 * a32 - a12 * a21 * a33 - a13 * a22 * a31);
    var A01 = -a01 * (a10 * a22 * a33 + a12 * a23 * a30 + a13 * a20 * a32 - a10 * a23 * a32 - a12 * a20 * a33 - a13 * a22 * a30);
    var A02 = a02 * (a10 * a21 * a33 + a11 * a23 * a30 + a13 * a20 * a31 - a10 * a23 * a31 - a11 * a20 * a33 - a13 * a21 * a30);
    var A03 = -a03 * (a10 * a21 * a32 + a11 * a22 * a30 + a12 * a20 * a31 - a10 * a22 * a31 - a11 * a20 * a32 - a12 * a21 * a30);
    return (A00 + A01 + A02 + A03);
};
Matrix4.prototype.inverse = function () {
    var a00 = this.values[0];
    var a01 = this.values[1];
    var a02 = this.values[2];
    var a03 = this.values[3];
    var a10 = this.values[4];
    var a11 = this.values[5];
    var a12 = this.values[6];
    var a13 = this.values[7];
    var a20 = this.values[8];
    var a21 = this.values[9];
    var a22 = this.values[10];
    var a23 = this.values[11];
    var a30 = this.values[12];
    var a31 = this.values[13];
    var a32 = this.values[14];
    var a33 = this.values[15];
    var A00 = a00 * (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a11 * a23 * a32 - a12 * a21 * a33 - a13 * a22 * a31);
    var A01 = -a01 * (a10 * a22 * a33 + a12 * a23 * a30 + a13 * a20 * a32 - a10 * a23 * a32 - a12 * a20 * a33 - a13 * a22 * a30);
    var A02 = a02 * (a10 * a21 * a33 + a11 * a23 * a30 + a13 * a20 * a31 - a10 * a23 * a31 - a11 * a20 * a33 - a13 * a21 * a30);
    var A03 = -a03 * (a10 * a21 * a32 + a11 * a22 * a30 + a12 * a20 * a31 - a10 * a22 * a31 - a11 * a20 * a32 - a12 * a21 * a30);
    var det = A00 + A01 + A02 + A03;
    if (det === 0) {
        return null;
    }
    var detInv = 1 / det;
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
};
Matrix4.prototype.multiply = function (matrix) {
    var a00 = this.values[0];
    var a01 = this.values[1];
    var a02 = this.values[2];
    var a03 = this.values[3];
    var a10 = this.values[4];
    var a11 = this.values[5];
    var a12 = this.values[6];
    var a13 = this.values[7];
    var a20 = this.values[8];
    var a21 = this.values[9];
    var a22 = this.values[10];
    var a23 = this.values[11];
    var a30 = this.values[12];
    var a31 = this.values[13];
    var a32 = this.values[14];
    var a33 = this.values[15];
    var b00 = matrix.values[0];
    var b01 = matrix.values[1];
    var b02 = matrix.values[2];
    var b03 = matrix.values[3];
    var b10 = matrix.values[4];
    var b11 = matrix.values[5];
    var b12 = matrix.values[6];
    var b13 = matrix.values[7];
    var b20 = matrix.values[8];
    var b21 = matrix.values[9];
    var b22 = matrix.values[10];
    var b23 = matrix.values[11];
    var b30 = matrix.values[12];
    var b31 = matrix.values[13];
    var b32 = matrix.values[14];
    var b33 = matrix.values[15];
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
};
Matrix4.prototype.multiplyVec3 = function (vec3) {
    return new vector3_1.Vector3(this.values[0] * vec3.x + this.values[4] * vec3.y + this.values[8] * vec3.z + this.values[12], this.values[1] * vec3.x + this.values[5] * vec3.y + this.values[9] * vec3.z + this.values[13], this.values[2] * vec3.x + this.values[6] * vec3.y + this.values[10] * vec3.z + this.values[14]);
};
// pubic multiplyVec4
// public toMat3()
// public translate(vec3: Vector3): Matrix4 {
// }
Matrix4.prototype.scale = function (x, y, z) {
    this.values[0] = x;
    this.values[1] = 0;
    this.values[2] = 0;
    this.values[3] = 0;
    this.values[4] = 0;
    this.values[5] = y;
    this.values[6] = 0;
    this.values[7] = 0;
    this.values[8] = 0;
    this.values[9] = 0;
    this.values[10] = z;
    this.values[11] = 0;
    this.values[12] = 0;
    this.values[13] = 0;
    this.values[14] = 0;
    this.values[15] = 1;
    return this;
};