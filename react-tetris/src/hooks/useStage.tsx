import { useState, useEffect } from "react";
import  { createStage, createNext } from "../gameHelper";

export const UseStage = (player:{
    pos: {x:number, y:number}
    tetromino: Array<Array<string|number>>,
    collide: Boolean,
}, 
resetPlayer:any, 
nextShape:Array<Array<string|number>>, 
changeShape:any):any => {
    const [stage, setStage] = useState<any>(createStage());
    const [nextStage, setNextStage] = useState<Array<Array<string|number>>>(createNext());
    const [rowsCleared, setRowsCleared] =useState<number>(0);


    useEffect(()=>{
        setRowsCleared(0);

            const sweepRows = (newStage:Array<any>)  =>
            newStage.reduce((ack, row:Array<any>)=>{
                if(row.findIndex(cell => cell[0] === 0) === -1){
                    setRowsCleared(prev => prev +1);
                    console.log(rowsCleared);
                    ack.unshift(new Array(newStage[0].length).fill([0,"clear"]))
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [])

        const updateStage = (prevStage:Array<Array<any>>) => {
            const newStage:Array<Array<any>> = prevStage.map(row=> row.map(cell =>(cell[1]==="clear"? [0,"clear"] : cell)));
            player.tetromino.forEach((row, y) =>{
                row.forEach((value, x)=>{
                    if(value !== 0){
                        newStage[y+player.pos.y][x+player.pos.x] = [
                            value,
                            `${player.collide ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            if(player.collide){
                resetPlayer();
                changeShape();
                return sweepRows(newStage);
            };

            return newStage;
        };

        const updateSubStage = () => {
            const newSubStage:Array<Array<any>> =createNext();
            nextShape.forEach((row, y) =>{
                row.forEach((value, x)=>{
                    if(value !== 0){
                        newSubStage[y][x] = [
                            value,'clear',
                        ];
                    }
                });
            });
            return newSubStage;
        };

        setStage((prev:any)=> updateStage(prev))
        setNextStage(updateSubStage())
    },[player, resetPlayer, rowsCleared, nextShape]);

    return[stage, setStage, rowsCleared,nextStage];
}