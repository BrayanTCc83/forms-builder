import styled from "styled-components"
import { mainColor, secondColor, shadowColor } from "../../../public/constants"


const QuestionDesign = styled.div.attrs( () => ({
    bgColor: mainColor,
    bgSColor: secondColor
}) )`
    background-color : ${ secondColor };
    border : none;
    border-radius : 10px;
    padding : 10px;
    margin : 10px 0;
    box-shadow : 3px 3px 6px ${ shadowColor };
    min-height : 100px;
    width : 100%;
    @media ( min-width : 950px ){
        width : 900px;
    }
`

const PlusIconContainer = styled.div`
    display : flex;
    justify-content : center;
`

export {
    QuestionDesign,
    PlusIconContainer
}