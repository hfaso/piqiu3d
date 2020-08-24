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

    public copy(dest?:Matrix4):Matrix4 {
        if(!dest) {
            dest = new Matrix4();
        }

        for (let i=0; i < 16; i++){
            dest.values[i] = this.values[i];
        }

        return dest;
    }

    public transpose(): Matrix4 {
        const temp10 = this.values[1]
        const temp20 = this.values[2]
        const temp30 = this.values[3]
        const temp21 = this.values[6]
        const temp31 = this.values[7]
        const temp32 = this.values[11]

        this.values[1] = this.values[4]
        this.values[2] = this.values[8]
        this.values[3] = this.values[12]
        this.values[6] = this.values[9]
        this.values[7] = this.values[13]
        this.values[11] = this.values[14]

        this.values[4] = temp10
        this.values[8] = temp20
        this.values[12] = temp30
        this.values[9] = temp21
        this.values[13] = temp31
        this.values[14] = temp32

        return this
    }
}