import React, {FC} from "react";
import Cell from "./Cell";
import {StyledStage} from "./styles/StyleSubStage"

interface Props {
    stage:string[][];
}

export const SubStage:FC<Props> =({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell}/>))}
    </StyledStage>
);
