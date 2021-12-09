export const TETROMINOS:{[index: string]: TetrominosObject}= {
    "0": { shape:[[0]], color: "0, 0, 0"},
    I: { shape: [
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
        [0,0, "I", "I",0,0,0,0],
    ], color: "80, 227, 230"},
    J: { shape: [
        [0,0, "J","J",0,0],
        [0,0, "J","J",0,0],
        [0,0, "J","J",0,0],
        [0,0, "J","J",0,0],
        ["J", "J","J","J",0,0],
        ["J", "J","J","J",0,0],
    ], color: "36, 95, 223"},
    L: { shape: [
        [ "L","L", 0,0, 0,0],
        [ "L","L", 0,0, 0,0],
        [ "L","L", 0,0, 0,0],
        [ "L","L", 0,0, 0,0],
        [ "L", "L","L", "L", 0,0],
        ["L", "L","L", "L", 0,0],
    ], color: "223, 173, 36"},
    O: { shape: [
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
    ], color: "223, 217, 36"},
    S: { shape: [
        [0,0, "S","S", "S", "S"],
        [0,0, "S","S", "S", "S"],
        ["S", "S","S","S", 0,0],
        ["S", "S","S","S", 0,0],
        [0, 0,0,0, 0,0],
        [0, 0,0,0, 0,0],
    ], color: "48, 211, 56"},
    T: { shape: [
        ["T", "T", "T","T", "T","T"],
        ["T", "T", "T","T", "T","T"],
        [0,0, "T", "T", 0,0],
        [0,0, "T", "T", 0,0],
        [0, 0,0,0, 0,0],
        [0, 0,0,0, 0,0],
    ], color: "132, 61, 198"},
    Z: { shape: [
        ["Z", "Z","Z", "Z",0, 0],
        ["Z", "Z","Z", "Z",0, 0],
        [0,0, "Z", "Z", "Z", "Z"],
        [0,0, "Z", "Z", "Z", "Z"],
        [0, 0,0,0, 0,0],
        [0, 0,0,0, 0,0],
    ], color: "227, 78, 78"}
}


/*export const TETROMINOS:{[index: string]: TetrominosObject}= {
    "0": { shape:[[0]], color: "0, 0, 0"},
    I: { shape: [
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0],
    ], color: "80, 227, 230"},
    J: { shape: [
        [0, "J", 0],
        [0, "J", 0],
        ["J", "J", 0],
    ], color: "36, 95, 223"},
    L: { shape: [
        [0, "L", 0],
        [0, "L", 0],
        [0, "L", "L"],
    ], color: "223, 173, 36"},
    O: { shape: [
        ["O", "O"],
        ["O", "O"],
    ], color: "223, 217, 36"},
    S: { shape: [
        [0, "S", "S"],
        ["S", "S", 0],
        [0, 0, 0],
    ], color: "48, 211, 56"},
    T: { shape: [
        ["T", "T", "T"],
        [0, "T", 0],
    ], color: "132, 61, 198"},
    Z: { shape: [
        ["Z", "Z", 0],
        [0, "Z", "Z"],
        [0, 0, 0],
    ], color: "227, 78, 78"}
}*/

interface TetrominosObject {
    shape:Array<Array<string|number>>,
    color:string
}

export const randomTetromino = () => {
    const tetrominos = "IJLOSTZ";
    const ranTetromino:string = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[ranTetromino];
}