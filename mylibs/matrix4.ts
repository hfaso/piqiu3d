// Matrix4类
export class Matrix4{
    
    constructor(values?:number[]) {
        if (values !== undefined) {
            for (let i = 0; i < 16; i++){
                this.values[i] = values[i];
            }
        }
    }

    private values = new Float32Array(16);
    static readonly identity = new Matrix4().identity();

    public identity():Matrix4 {
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
    }

    public reset():void {
        for (let i = 0; i < 16; i++){
            this.values[i] = 0;
        }
    }

    public copy():void {

    }
}