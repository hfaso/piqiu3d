define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vector4 = /** @class */ (function () {
        function Vector4(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            this._x = x;
            this._y = y;
            this._z = z;
            this._w = w;
        }
        Object.defineProperty(Vector4.prototype, "x", {
            get: function () {
                // return this.values[0]
                return this._x;
            },
            set: function (x) {
                // this.values[0] = value
                this._x = x;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector4.prototype, "y", {
            get: function () {
                // return this.values[1]
                return this._y;
            },
            set: function (y) {
                // this.values[0] = value
                this._y = y;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector4.prototype, "z", {
            get: function () {
                // return this.values[1]
                return this._z;
            },
            set: function (z) {
                // this.values[0] = value
                this._z = z;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vector4.prototype, "w", {
            get: function () {
                return this._w;
            },
            set: function (w) {
                // this.values[0] = value
                this._w = w;
            },
            enumerable: false,
            configurable: true
        });
        Vector4.prototype.copy = function (dest) {
            if (!dest) {
                dest = new Vector4();
            }
            dest.x = this._x;
            dest.y = this._y;
            dest.z = this._z;
            dest.w = this._w;
            return dest;
        };
        Vector4.prototype.add = function (vec4) {
            this._x += vec4.x;
            this._y += vec4.y;
            this._z += vec4.z;
            this._w += vec4.w;
            return this;
        };
        Vector4.prototype.subtract = function (vec4) {
            this._x -= vec4.x;
            this._y -= vec4.y;
            this._z -= vec4.z;
            this._w -= vec4.w;
            return this;
        };
        Vector4.prototype.scale = function (value, dest) {
            if (!dest) {
                dest = this;
            }
            dest.x *= value;
            dest.y *= value;
            dest.z *= value;
            dest.w *= value;
            return dest;
        };
        Vector4.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        };
        Vector4.prototype.normalize = function (dest) {
            if (!dest) {
                dest = this;
            }
            var length = this.length();
            dest.x /= length;
            dest.y /= length;
            dest.z /= length;
            dest.w /= length;
            return dest;
        };
        return Vector4;
    }());
    exports.default = Vector4;
});
//# sourceMappingURL=vector4.js.map