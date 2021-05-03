export default class Vector4 {

    // private values = new Float32Array(4)
    private _x: number;
    private _y: number;
    private _z: number;
    private _w: number;

    public get x(): number {
        // return this.values[0]
        return this._x
    }

    public get y(): number {
        // return this.values[1]
        return this._y
    }

    public get z(): number {
        // return this.values[1]
        return this._z
    }

    public get w(): number {
        return this._w
    }

    public set x(x: number) {
        // this.values[0] = value
        this._x = x
    }

    public set y(y: number) {
        // this.values[0] = value
        this._y = y
    }

    public set z(z: number) {
        // this.values[0] = value
        this._z = z
    }

    public set w(w: number) {
        // this.values[0] = value
        this._w = w
    }

    public get r (): number
    {
        return this._x;
    }

    public get g (): number
    {
        return this._y;
    }

    public get b (): number
    {
        return this._z;
    }

    public get a (): number
    {
        return this._w;
    }

    public set r ( value: number )
    {
        this._x = value;
    }

    public set g ( value: number )
    {
        this._y = value;
    }

    public set b ( value: number )
    {
        this._z = value;
    }

    public set a ( value: number )
    {
        this._w = value;
    }

    public constructor(x: number=0, y:number=0, z:number=0, w:number=0) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
    }

    public copy(dest?:Vector4): Vector4 {
        if(!dest) {dest = new Vector4()}
        dest.x = this._x;
        dest.y = this._y;
        dest.z = this._z;
        dest.w = this._w;
        return dest;
    }

    public add(vec4:Vector4): Vector4 {
        this._x += vec4.x
        this._y += vec4.y
        this._z += vec4.z
        this._w += vec4.w
        
        return this;
    }

    public subtract(vec4: Vector4): Vector4 {
        this._x -= vec4.x;
        this._y -= vec4.y;
        this._z -= vec4.z;
        this._w -= vec4.w;

        return this;
    }

    public scale(value: number, dest?:Vector4): Vector4 {
        if(!dest) { dest = this }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        dest.w *= value;

        return dest;
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    public normalize(dest?: Vector4): Vector4 {
        if(!dest) { dest = this }

        const length = this.length()

        dest.x /= length
        dest.y /= length
        dest.z /= length
        dest.w /= length
        
        return dest
    }
}