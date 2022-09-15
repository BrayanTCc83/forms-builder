import styled from "styled-components"
import { mainColor, secondColor } from "../../../public/constants"

const InputRadioDesign = styled.div`
    display : block;
    width : 40px;
    height : 40px;
    border-radius : 20px;
    background-color : ${ secondColor };
    border : 2px solid ${ mainColor };
    position : relative;
    &:after {
        content : '';
        position : absolute;
        width : 80%;
        height : 80%;
        background-color : ${ props => props.isSelected ? mainColor : 'transparent' };
        border-radius : 50%;
        top : 3.5px;
        left : 3.5px;
        transition : all 0.3s;
    }
`
const InputRadioContainer = styled.div`
    margin : 5px;
    display : grid;
    grid-template-columns : 50px calc( 100% - 90px ) 50px;
`

export {
    InputRadioContainer,
    InputRadioDesign
}