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
    
}