import { useState, useCallback } from "react";
import  { randomTetromino, TETROMINOS } from "../tetrominos";
import { checjCollision, STAGE_WIDTH } from "../gameHelper";

export const UsePlayer = ():any => {
    const [player, setPlayer] = useState<{
        pos: {x:number, y:number}
        tetromino: Array<Array<string|number>>,
        collide: Boolean,
    }>({
        pos : {x : 0, y : 0},
        tetromino : TETROMINOS[0].shape,
        collide : false,
    });
    const [nextShape, setNextShape]=useState<{next:Array<Array<string|number>>}>({next:randomTetromino().shape});

    const rotate = (matrix:Array<Array<string|number>>, dir:number):Array<Array<string|number>>=>{
        const rotatedTetro = matrix.map((_:any,index:number)=>
        matrix.map(col => col[index]),
        );

        if(dir > 0) {return rotatedTetro.map(row=>row.reverse());}
        return rotatedTetro;

    }

    const playerRotate = (stage:string[][], dir:number)=>{
        const clonePlayer:{
            pos: {x:number, y:number}
            tetromino: Array<Array<string|number>>,
            collide: Boolean,
        } = JSON.parse(JSON.stringify(player));
        clonePlayer.tetromino = rotate(clonePlayer.tetromino, dir)

        const pos = clonePlayer.pos.x;
        let offset= 1;
        while(checjCollision(clonePlayer, stage,{x:0, y:0})){
            clonePlayer.pos.x += offset;
            offset=-(offset + (offset > 0 ? 1: -1));
            if(offset > clonePlayer.tetromino[0].length){
                rotate(clonePlayer.tetromino, -dir);
                clonePlayer.pos.x=pos;
                return;
            }
        }

        setPlayer(clonePlayer);
    }

    

    function updatePlayerPos (positionx:number,positiony:number,col:boolean):void {
        setPlayer(prev =>({
            ...prev,
            pos: { x:(prev.pos.x+=positionx), y:(prev.pos.y+=positiony)},
            collide:col
        }));
    }

    function changeShape ():void{
        setNextShape(prevState =>({
            ...prevState,
            next: randomTetromino().shape
        }));
        setPlayer(prev =>({
            ...prev,
            tetromino:nextShape.next
        }));
    }
    

    const resetPlayer = useCallback(() => {
        setNextShape(prevState =>({
            ...prevState,
            next: randomTetromino().shape
        }));
        setPlayer({
            pos: {x: STAGE_WIDTH/2-2, y:0},
            tetromino : nextShape.next,
            collide:false,
        });
    },[])

    return[player, updatePlayerPos, resetPlayer, playerRotate, nextShape, changeShape];
}