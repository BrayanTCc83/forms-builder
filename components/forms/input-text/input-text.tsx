import styled from 'styled-components'
import { secondColor, mainColor } from '../../../public/constants'
import { inputTextDesignProps } from '../../../interfaces/inputs'

const InputTextDesign = styled.input.attrs<inputTextDesignProps>( props => ({
    type : 'text'
}) )`
    position : absolute;
    display : block; 
    top: 0;
    left : 0;
    border : none;
    background-color : ${ secondColor };
    outline : none;
    height : 100%;
    width : 100%;
    font-size : 1.2em;
    font-weight :  ${ ( props : inputTextDesignProps ) => props.bold ? 'bold' : 'normal' };
    color : ${ mainColor };
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ mainColor };
    }
`
const InputTextLabelDesign = styled.label`
    position : relative;
    display : grid;
    width : 100%;
    height : 40px ;
    margin-bottom : 10px;
    background-color : ${ secondColor };
    &:after {
        content : '';
        position : absolute; 
        width : 100%;
        height : 2px;
        top : calc( 98% - 2px );
        left : 0;
        border-radius : 2px;
        background-color: ${ mainColor };
    }
`
export {
    InputTextDesign,
    InputTextLabelDesign
}