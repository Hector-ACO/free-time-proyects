import React, {FC} from "react";
import { StyledStartButton } from "./styles/StyledStartButton";


interface Props {
    callback: any;
}

const StartButton:FC<Props> =({ callback }) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
)

export default StartButton;