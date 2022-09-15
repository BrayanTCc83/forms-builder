import styled from 'styled-components'
import { mainColor, secondColor } from '../constants'

const Icon = styled.i`
    display : flex;
    width : 45px;
    height : 45px;
    align-items : center;
    justify-items : center;
    justify-content : center; 
    border-radius : 50px;
    &.border{
        border : 2px solid ${ mainColor };
    }
    &:hover{
        transition : all 0.3s;
        background-color : ${ mainColor };
        & > .cts path {
            transition : all 0.3s;
            fill : ${ secondColor };
        }
    }
`

export default Icon