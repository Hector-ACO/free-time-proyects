import React, {FC} from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

interface Props {
    type:string;
}

const cell:FC<Props>= ({ type }) => {
    return(
        <StyledCell type={type} color={TETROMINOS[type[0]].color}></StyledCell>
    )
}

export default React.memo(cell);