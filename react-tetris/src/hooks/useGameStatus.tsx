import { useState, useEffect, useCallback } from "react";

export const useGameStatus = (rowsCleared:number):any => {
    const [score, setScore] = useState<number>(0);
    const [rows, setRows] = useState<number>(0);
    const [level, setLevel] = useState<number>(0);

    

    const calcScore = useCallback(() => {
        const linePoints = [40, 100, 300, 1200];
        if (rowsCleared > 0){
            setScore(prev => prev + linePoints[(rowsCleared/4)-1]*(level+1));
            setRows(prev => prev + (rowsCleared/4));
        }
    },[level, rowsCleared])

    useEffect(() =>{
        calcScore();
    },[calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
}