export const STAGE_WIDTH = 24;
export const STAGE_HEIGHT= 40;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, "clear"])
)

export const createNext = () => 
    Array.from(Array(8), () =>
        new Array(8).fill([0, "clear"])
)

interface position{
    x:number;
    y:number
}

export const checjCollision = (player:{
    pos: {x:number, y:number}
    tetromino: Array<Array<string|number>>,
    collide: Boolean,
},stage:Array<Array<any>>, position:position) =>{
    for(let y = 0; y< player.tetromino.length; y +=1){
        for(let x=0; x<player.tetromino[0].length; x+=1){
            if(player.tetromino[y][x] !==0){
                if (
                    // 2. Check that our move is inside the game areas height (y)
                    // We shouldn't go through the bottom of the play area
                    !stage[y + player.pos.y + position.y] ||
                    // 3. Check that our move is inside the game areas width (x)
                    !stage[y + player.pos.y + position.y][x + player.pos.x + position.x] ||
                    // 4. Check that the cell wer'e moving to isn't set to clear
                    stage[y + player.pos.y + position.y][x + player.pos.x + position.x][1] !==
                      'clear'
                  ){
                    return true;
                }
            }
        }
    }
}