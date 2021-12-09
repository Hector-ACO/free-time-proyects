import React, {FC} from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

interface Props {
    gameOver:boolean;
    text:string|null;
}

const Display:FC<Props> =({ gameOver, text }) => (
    <StyledDisplay gameover={gameOver}>{text}</StyledDisplay>
)

export default Display;