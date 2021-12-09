import React, { FC, useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartBUtton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";
import { UsePlayer } from "../hooks/usePlayer";
import { UseStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { createStage, checjCollision, createNext } from "../gameHelper";
import { useGameStatus } from "../hooks/useGameStatus";
import { SubStage } from "./subStage";

const Tetris:FC =() => {
    const [dropTime, setDropTime] = useState<any>(null);
    const [gameover, setGameover] = useState<boolean>(false);
    
    const [player,updatePlayerPos, resetPlayer, playerRotate, nextShape, changeShape] = UsePlayer();
    const [stage, setStage, rowsCleared, nextStage] = UseStage(player, resetPlayer, nextShape.next,changeShape);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const movePlayer = ( dir:number )=>{
        if(!checjCollision(player, stage, {x:dir, y:0})){
            updatePlayerPos(dir,0);
        }
    }

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        changeShape();
        setGameover(false);
        setScore(0);
        setRows(0);
        setLevel(0)
    }

    const drop = () => {
        if(rows > (level + 1) *10){
            setLevel(level + 1);
            setDropTime(1000/(level + 1));
        }
        if(!checjCollision(player, stage, {x:0, y:1})){
            updatePlayerPos(0,1,false);
        }else{
            if(player.pos.y<1){
                setGameover(true);
                setDropTime(null);
            }
            updatePlayerPos(0,0,true);
        }
        
    }

    const keyUp =(keycode:React.KeyboardEvent<HTMLDivElement>)=>{

    }

    const dropPlayer = () => {
        drop();
    }

    const move = ( keycode:React.KeyboardEvent<HTMLDivElement> ) =>{
        if(!gameover){
            if(keycode.key==="a"){
                movePlayer(-1);
            }else if(keycode.key==="d"){
                movePlayer(1);
            }else if(keycode.key==="s"){
                dropPlayer();
            }else if(keycode.key==="w"){
                playerRotate(stage,1)
            }
        }
    }

    useInterval(()=>{
        drop();
    },dropTime)


    return (
        <StyledTetrisWrapper role="button" index="0">
            <aside>
            
            </aside>
            <StyledTetris>
            <Stage stage={stage}/>
           <aside>
               {
                   gameover ? (<Display gameOver={gameover} text={"Game Over"}/>) 
                   :(
                   <div>
                   <SubStage stage={nextStage}/>
                   <Display text={`Score: ${score}`} gameOver={gameover} />
                   <Display text={`Rows: ${rows}`} gameOver={gameover} />
                   <Display text={`Level: ${level}`} gameOver={gameover} />
                   </div>
                   )}
               <StartButton callback={startGame} />
               <input onKeyPress={move} onKeyUp={keyUp} autoFocus={true} style={{height:0}}/>
           </aside>
           </StyledTetris>
        </StyledTetrisWrapper>
    )
}
    


export default Tetris;