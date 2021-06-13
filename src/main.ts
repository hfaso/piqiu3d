import { EventInteraction } from "./common/EventInteraction";
import { RotatingCubeApplication } from "../demo/RotatingCubeApplication";

// 获得HTMLSelectElement对象，用来切换要运行的Application
let select: HTMLSelectElement = document.getElementById( 'select' ) as HTMLSelectElement;

// 获取用于获得webgl上下文对象的HTMLCanvasElement元素
let canvas: HTMLCanvasElement | null = document.getElementById( 'webgl' ) as HTMLCanvasElement;

let appNames: string[] = [
    "第3章：RotatingCubeApplication"
];

function addItem ( select: HTMLSelectElement, value: string ): void
{
    select.options.add( new Option( value, value ) );
}

function addItemes ( select: HTMLSelectElement ): void
{
    if ( canvas === null )
    {
        return;
    }
    for ( let i: number = 0; i < appNames.length; i++ )
    {
        addItem( select, appNames[ i ] );
    }
}

enum EAPPName{
    ROTATINGCUBE,
    ASYNCLOAD,
    BASICWEBGL,
    MESHBUILDER,
    COORDSYSTEM,
    Q3BSP,
    DOOM3PROC,
    DOOM3MD5
}
function runApplication(name:EAPPName):void{
    // 获取用于获得webgl上下文对象的HTMLCanvasElement元素
    let canvas: HTMLCanvasElement | null = document.getElementById( 'webgl' ) as HTMLCanvasElement;
    if ( name === EAPPName.ROTATINGCUBE )
    {
        let app: RotatingCubeApplication = new RotatingCubeApplication( canvas );
        app.frameCallback = frameCallback;
        app.run();
    }
}

function createText ( tagName: string ): Text
{
    let elem: HTMLSpanElement = document.getElementById( tagName ) as HTMLSpanElement;
    let text: Text = document.createTextNode( "" );
    elem.appendChild( text );
    return text;
}

let fps: Text = createText( "fps" );
let tris: Text = createText( "tris" );
let verts: Text = createText( "verts" );

function frameCallback ( app: EventInteraction ): void
{
    fps.nodeValue = String( app.fps.toFixed( 0 ) );
    tris.nodeValue = "0";
    verts.nodeValue = "0";
}

runApplication(EAPPName.ROTATINGCUBE);