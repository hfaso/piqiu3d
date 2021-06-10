export class Vector3{
    private _x: number;
    private _y: number;
    private _z: number;

    public constructor(x: number=0, y: number=0, z: number=0){
        this._x = x;
        this._y = y;
        this._z = z;
    }

    public get x(): number{
        return this._x;
    }

    public set x(value:number){
        this._x = value;
    }

    public get y(): number{
        return this._x;
    }

    public set y(value:number){
        this._y = value;
    }

    public get z(): number{
        return this._x;
    }

    public set z(value:number){
        this._z = value;
    }

    get xyz(): [number, number, number] {
        return [
            this._x,
            this._y,
            this._z,
        ]
    }

    set xyz(values: [number, number, number]) {
        this._x = values[0]
        this._y = values[1]
        this._z = values[2]
    }

    public static get zero():Vector3 {
        return new Vector3();
    }

    public static get one():Vector3 {
        return new Vector3(1,1,1);
    }

    public static distance(a:Vector3,b:Vector3):number{
        let diff = a.subtract(b);
        return Math.sqrt(diff.x*diff.x+diff.y*diff.y+diff.z*diff.z);
    }

    public set(x?:number,y?:number,z?:number):void{
        if(x!==undefined){
            this._x = x;
        }

        if(y!==undefined){
            this._y = y;
        }

        if(z!==undefined){
            this._z = z;
        }
    }
    
    public equals(v:Vector3):boolean {
        return (this._x === v._x && this._y === v._y && this._z === v._z);
    }

    public toArray():number[]{
        return [this._x,this._y,this._z];
    }
    
    public toFloat32Array():Float32Array {
        return new Float32Array(this.toArray() );
    }

    public copyFrom(vector:Vector3):void{
        this._x = vector._x;
        this._y = vector._y;
        this._z = vector._z;
    }

    public add(v:Vector3):Vector3{
        this._x += v._x;
        this._y += v._y;
        this._z += v._z;

        return this;
    }

    public subtract(v:Vector3):Vector3{
        this._x -= v._x;
        this._y -= v._y;
        this._z -= v._z;

        return this;
    }

    public multiply(v:Vector3):Vector3{
        this._x *= v._x;
        this._y *= v._y;
        this._z *= v._z;
        
        return this;
    }

    public divide(v:Vector3):Vector3{
        this._x /= v._x;
        this._y /= v._y;
        this._z /= v._z;

        return this;
    }

    public clone():Vector3{
        return new Vector3(this._x, this._y, this._z);
    }

    public copy ( dest: Vector3 | null = null ): Vector3
    {
        if ( !dest ) dest = new Vector3();

        dest._x = this.x;
        dest._y = this.y;
        dest._z = this.z;

        return dest;
    }

    public get length (): number
    {
        return Math.sqrt( this.length2 );
    }

    public get length2 (): number
    {
        let x = this._x,
            y = this._y,
            z = this._z;

        return ( x * x + y * y + z * z );
    }

    public normalize ( dest: Vector3 | null = null ): Vector3
    {
        if ( !dest ) dest = this;

        let length = this.length;

        if ( length === 1 )
        {
            return this;
        }

        if ( length === 0 )
        {
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

    public static difference ( vector: Vector3, vector2: Vector3, dest: Vector3 | null = null ): Vector3
    {
        if ( !dest ) dest = new Vector3();

        dest._x = vector.x - vector2.x;
        dest._y = vector.y - vector2.y;
        dest._z = vector.z - vector2.z;

        return dest;
    }

    public static sum ( vector: Vector3, vector2: Vector3, dest: Vector3 | null = null ): Vector3
    {
        if ( !dest ) dest = new Vector3();

        dest._x = vector.x + vector2.x;
        dest._y = vector.y + vector2.y;
        dest._z = vector.z + vector2.z;

        return dest;
    }

    public scale ( value: number, dest: Vector3 | null = null ): Vector3
    {
        if ( !dest )
        {
            dest = this;
        } else
        {
            this.copy( dest );
        }

        dest.x *= value;
        dest.y *= value;
        dest.z *= value;

        return dest;
    }

    public static dot ( vector: Vector3, vector2: Vector3 ): number
    {
        let x = vector.x,
            y = vector.y,
            z = vector.z;

        let x2 = vector2.x,
            y2 = vector2.y,
            z2 = vector2.z;

        return ( x * x2 + y * y2 + z * z2 );
    }

    public static cross ( vector: Vector3, vector2: Vector3, dest: Vector3 | null = null ): Vector3
    {
        if ( !dest ) dest = new Vector3();

        let x = vector.x,
            y = vector.y,
            z = vector.z;

        let x2 = vector2.x,
            y2 = vector2.y,
            z2 = vector2.z;

        dest._x = y * z2 - z * y2;
        dest._y = z * x2 - x * z2;
        dest._z = x * y2 - y * x2;

        return dest;
    }

    static readonly up = new Vector3( 0, 1, 0 );
    static readonly down = new Vector3( 0, -1, 0 );
    static readonly right = new Vector3( 1, 0, 0 );
    static readonly left = new Vector3( -1, 0, 0 );
    static readonly forward = new Vector3( 0, 0, 1 );
    static readonly backward = new Vector3( 0, 0, -1 );

    static v0 = new Vector3( 0, 0, 0 );
    static v1 = new Vector3( 0, 0, 0 );
    static v2 = new Vector3( 0, 0, 0 );
}