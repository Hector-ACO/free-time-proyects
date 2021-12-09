import React from "react";

export interface PlayerObject {
    pos:{
        x:number,
        y:number,
    }
    tetromino: Array<Array<string|number>>,
    collide:boolean,
}

export interface positionObject{
    x:number,
    y:number,
    collide:boolean,
}