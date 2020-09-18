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

    public determinant(): number {
        const a00 = this.values[0]
        const a01 = this.values[1]
        const a02 = this.values[2]
        const a03 = this.values[3]
        const a10 = this.values[4]
        const a11 = this.values[5]
        const a12 = this.values[6]
        const a13 = this.values[7]
        const a20 = this.values[8]
        const a21 = this.values[9]
        const a22 = this.values[10]
        const a23 = this.values[11]
        const a30 = this.values[12]
        const a31 = this.values[13]
        const a32 = this.values[14]
        const a33 = this.values[15]

        const A00 = a00*(a11*a22*a33 + a12*a23*a31 + a13*a21*a32 - a11*a23*a32 - a12*a21*a33 - a13*a22*a31)
        const A01 = -a01*(a10*a22*a33 + a12*a23*a30 + a13*a20*a32 - a10*a23*a32 - a12*a20*a33 - a13*a22*a30)
        const A02 = a02*(a10*a21*a33 + a11*a23*a30 + a13*a20*a31 - a10*a23*a31 - a11*a20*a33 - a13*a21*a30)
        const A03 = -a03*(a10*a21*a32 + a11*a22*a30 + a12*a20*a31 - a10*a22*a31 - a11*a20*a32 - a12*a21*a30)

        return (A00 + A01 + A02 + A03)
    }

    public inverse(): Matrix4 {
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a02 = this.values[2];
        const a03 = this.values[3];
        const a10 = this.values[4];
        const a11 = this.values[5];
        const a12 = this.values[6];
        const a13 = this.values[7];
        const a20 = this.values[8];
        const a21 = this.values[9];
        const a22 = this.values[10];
        const a23 = this.values[11];
        const a30 = this.values[12];
        const a31 = this.values[13];
        const a32 = this.values[14];
        const a33 = this.values[15];

        const A00 = a00*(a11*a22*a33 + a12*a23*a31 + a13*a21*a32 - a11*a23*a32 - a12*a21*a33 - a13*a22*a31);
        const A01 = -a01*(a10*a22*a33 + a12*a23*a30 + a13*a20*a32 - a10*a23*a32 - a12*a20*a33 - a13*a22*a30);
        const A02 = a02*(a10*a21*a33 + a11*a23*a30 + a13*a20*a31 - a10*a23*a31 - a11*a20*a33 - a13*a21*a30);
        const A03 = -a03*(a10*a21*a32 + a11*a22*a30 + a12*a20*a31 - a10*a22*a31 - a11*a20*a32 - a12*a21*a30);

        let det = A00 + A01 + A02 + A03;
        
        if(det === 0) {
            return null;
        }
        
        const detInv = 1/det;

        this.values[0] = A00 * detInv;
        this.values[1] = A01 * detInv;
        this.values[2] = A02 * detInv;
        this.values[3] = A03 * detInv;
        this.values[4] = -a10*(a01*a22*a33 + a02*a23*a31 + a03*a21*a32 - a01*a23*a32 - a02*a21*a33 - a03*a22*a31)*detInv;
        this.values[5] = a11*(a00*a22*a33 + a02*a23*a30 + a03*a20*a32 - a00*a23*a32 - a02*a20*a33 - a03*a22*a30)*detInv;
        this.values[6] = -a12*(a00*a21*a33 + a01*a23*a30 + a03*a20*a31 - a00*a23*a31 - a01*a20*a33 - a03*a21*a30)*detInv;
        this.values[7] = a13*(a00*a21*a32 + a01*a22*a32 + a02*a20*a31 - a00*a22*a31 - a01*a20*a32- a02*a21*a30)*detInv;
        this.values[8] = a20*(a01*a12*a33 + a02*a13*a31 + a03*a11*a32 - a01*a13*a32 - a02*a11*a33 - a03*a12*a31)*detInv;
        this.values[9] = -a21*(a00*a12*a33 + a02*a13*a30 + a03*a10*a32 - a00*a13*a32 - a02*a10*a33 - a03*a12*a30)*detInv;
        this.values[10] = a22*(a00*a11*a33 + a01*a13*a30 + a03*a10*a31 - a00*a13*a31 - a01*a10*a33 - a03*a11*a30)*detInv;
        this.values[11] = -a23*(a00*a11*a32 + a01*a12*a30 + a02*a10*a31 - a00*a12*a31 - a01*a10*a32 - a02*a11*a30)*detInv;
        this.values[12] = -a30*(a01*a12*a23 + a02*a13*a21 + a03*a11*a22 - a01*a13*a22 - a02*a11*a23 - a03*a12*a21)*detInv;
        this.values[13] = a31*(a00*a12*a23 + a02*a13*a20 + a03*a10*a22 - a00*a13*a22 - a02*a10*a23 - a03*a12*a20)*detInv;
        this.values[14] = -a32*(a00*a11*a23 + a01*a13*a20 + a03*a10*a21 - a00*a13*a21 - a01*a10*a23 - a03*a11*a20)*detInv;
        this.values[15] = a33*(a00*a11*a22 + a01*a12*a20 + a02*a10*a10 - a00*a12*a21 - a01*a10*a22 - a02*a11*a20)*detInv;

        return this;
    }
}