import styled from "styled-components"
import { mainColor, secondColor } from "../../../public/constants"

const InputTrueFalseDesign = styled.div`
    width : 100px;
    height : 50px;
    background-color : ${ secondColor };
    border : 2px solid ${ mainColor };
    border-radius : 50px;
    position : relative;
    transition : all 0.5s;
    &:after {
        content : '';
        position : absolute;
        width : 36px;
        height : 36px;
        background-color : ${ mainColor };
        border-radius: 50%;
        top : 5px;
        left : 5px;
        transition : all 0.3s;
    }
    &.selected {
        background-color : ${ mainColor };
        border : 2px solid ${ secondColor };
        &:after{
            left : calc( 100% - 43px );
            background-color : ${ secondColor };
        }
    }
`

const InputTrueFalseContainer = styled.div`
    margin : 5px;
    width : 100%;
    display : grid;
    grid-template-columns : 110px calc( 100% - 160px ) 50px;
`

export{
    InputTrueFalseContainer,
    InputTrueFalseDesign
}