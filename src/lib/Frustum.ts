import { Vector3 } from "../math/vector3";
import Vector4 from "../math/vector4";
import { Matrix4 } from "../math/matrix4";
import { MathHelper } from "../math/MathHelper";
import {Camera} from "./Camera";

export class Frustum {

    public constructor(orgin:Vector3 | null = null,points8:Vector3[] | null = null) {
        //预先内存分配8个点
        if(orgin !== null){
            this._origin = orgin;
        }else{
            this._origin = new Vector3();
        }
        if(points8 !== null && points8.length === 8){
            this._points = points8;
        }else{
            this._points = new Array(8);
            for (let i = 0; i < this._points.length; i++) {
                this._points[i] = new Vector3();
            }
        }
        this._planes = new Array(6);
        for (let i = 0; i < this._planes.length; i++) {
            this._planes[i] = new Vector4();
        }
    }

    // 由代码可知，Frustum中的origin,points和planes都是在世界坐标系中的表示
    public buildFromCamera(camera: Camera): void {
        let left:number = camera.left * camera.far / camera.near;
        let right:number = camera.right * camera.far / camera.near;
        let bottom:number = camera.bottom * camera.far / camera.near;
        let top:number = camera.top * camera.far / camera.near;
        //计算出近平面4个点
        this.points[0].x = left;
        this.points[0].y = bottom;
        this.points[0].z = -camera.near;
        this.points[1].x = right;
        this.points[1].y = bottom;
        this.points[1].z = -camera.near;
        this.points[2].x = right;
        this.points[2].y = top;
        this.points[2].z = -camera.near;
        this.points[3].x = left;
        this.points[3].y = top;
        this.points[3].z = -camera.near;
        //计算出远平面4个点
        this.points[4].x = left;
        this.points[4].y = bottom;
        this.points[4].z = -camera.far;
        this.points[5].x = right;
        this.points[5].y = bottom;
        this.points[5].z = -camera.far;
        this.points[6].x = right;
        this.points[6].y = top;
        this.points[6].z = -camera.far;
        this.points[7].x = left;
        this.points[7].y = top;
        this.points[7].z = -camera.far;
        //记住，此时的摄像机和8个cornor是在view坐标系中表示
        //将摄像机的原点和8个cornor点变换到世界坐标系
        this._origin.x = 0;
        this._origin.y = 0;
        this._origin.z = 0;
        // 摄像机的原点在view坐标系中是[ 0 , 0 , 0 ],通过invViewMatrix * _origin，得到了_origin在世界坐标系的表示
        this._origin = camera.invViewMatrix.multiplyVec3(this.origin); 
        // 将view坐标系中表示的8个顶点也变换到世界坐标系中
        for (let i = 0; i < this._points.length; i++) {
            this._points[i] = camera.invViewMatrix.multiplyVec3(this.points[i]);
        }
        //构建世界坐标系表示的6个平面，法线朝内
        MathHelper.planeFromPoints(this._origin, this._points[0], this._points[3], this._planes[0]);
        MathHelper.planeFromPoints(this._origin, this._points[2], this._points[1], this._planes[1]);
        MathHelper.planeFromPoints(this._origin, this._points[3], this._points[2], this._planes[2]);
        MathHelper.planeFromPoints(this._origin, this._points[1], this._points[0], this._planes[3]);
        MathHelper.planeFromPoints(this._points[0], this._points[2], this._points[1], this._planes[4]);
        MathHelper.planeFromPoints(this._points[5], this._points[7], this._points[4], this._planes[5]);
        // 将6个平面单位化
        for(let i:number = 0; i < this._planes.length;i++){
            MathHelper.planeNormalize(this._planes[i]);
        }
    }

    public isSphereVisible(center: Vector3, radius: number): boolean {
        radius = -radius;
        for (let i: number = 0; i < this._planes.length; i++) {
            if (MathHelper.planeDistanceFromPoint(this._planes[i], center) < radius) {
                return false;
            }
        }
        return true;
    }

    public isBoundBoxVisible(mins: Vector3, maxs: Vector3): boolean {
        for (let i = 0; i < this._planes.length; i++) {
            let current = this._planes[i];
            Vector3.v0.x = (current.x > 0.0) ? maxs.x : mins.x;
            Vector3.v0.y = (current.y > 0.0) ? maxs.y : mins.y;
            Vector3.v0.z = (current.z > 0.0) ? maxs.z : mins.z;
            if (MathHelper.planeDistanceFromPoint(current, Vector3.v0) < 0.0) {
                return false;
            }
        }
        return true;
    }

    public isTriangleVisible(a: Vector3, b: Vector3, c: Vector3): boolean {
        for (let i: number = 0; i < this._planes.length; i++) {
            let current: Vector4 = this._planes[i];
            if (MathHelper.planeDistanceFromPoint(current, a) >= 0.0) {
                continue;
            }
            if (MathHelper.planeDistanceFromPoint(current, b) >= 0.0) {
                continue;
            }
            if (MathHelper.planeDistanceFromPoint(current, c) >= 0.0) {
                continue;
            }
            return false;
        }
        return true;
    }

    public get origin(): Vector3 {
        return this._origin;
    }
    public get points(): Vector3[] {
        return this._points;
    }
    public get planes(): Vector4[] {
        return this._planes;
    }

    private _origin: Vector3;  // 原点坐标
    private _points: Vector3[]; // 0-3表示近平面四边形的坐标，4-7表示远平面的四边形坐标，这些顶点坐标的布局，请参考图9.5
    private _planes: Vector4[]; // 从上述9个顶点不同排列组合后生成的上/下/左/右/远/近六个平面，其法向量都是朝Frustum内部，切记
}
