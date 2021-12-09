import styled from "styled-components";
import bgImage from "../../img/bg.png"

interface Props{
    index:string,
}

export const StyledTetrisWrapper = styled.div<Props>`
    width: 100vw;
    heigt: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width 900px;
    aside{
        eidth: 100%;
        max-width: 200px;
        display: block;
        padding 0 20px;
    }
`;