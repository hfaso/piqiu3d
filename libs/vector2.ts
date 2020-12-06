export class Vector2{
    private _x: number;
    private _y: number;

    public constructor(x: number=0, y: number=0, z: number=0){
        this._x = x;
        this._y = y;
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

    public static get zero():Vector2 {
        return new Vector2();
    }

    public static get one():Vector2 {
        return new Vector2(1,1,1);
    }

    public static distance(a:Vector2,b:Vector2):number{
        let diff = a.subtract(b);
        return Math.sqrt(diff.x*diff.x+diff.y*diff.y);
    }

    public set(x?:number,y?:number,z?:number):void{
        if(x!==undefined){
            this._x = x;
        }

        if(y!==undefined){
            this._y = y;
        }
    }
    
    public equals(v:Vector2):boolean {
        return (this._x === v._x && this._y === v._y);
    }

    public toArray():number[]{
        return [this._x,this._y];
    }
    
    public toFloat32Array():Float32Array {
        return new Float32Array(this.toArray() );
    }

    public copyFrom(vector:Vector2):void{
        this._x = vector._x;
        this._y = vector._y;
    }

    public add(v:Vector2):Vector2{
        this._x += v._x;
        this._y += v._y;

        return this;
    }

    public subtract(v:Vector2):Vector2{
        this._x -= v._x;
        this._y -= v._y;

        return this;
    }

    public multiply(v:Vector2):Vector2{
        this._x *= v._x;
        this._y *= v._y;
        
        return this;
    }

    public divide(v:Vector2):Vector2{
        this._x /= v._x;
        this._y /= v._y;

        return this;
    }

    public clone():Vector2{
        return new Vector2(this._x, this._y);
    }
}