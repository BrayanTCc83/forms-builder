import { ArrayDataHandler, InputHandler } from "./handlers";

interface inputTextDesignProps {
    bold ?: boolean
}
  
interface InputTextProps extends inputTextDesignProps {
    placeholder : string, 
    name : string, 
    multiple ?: boolean,
    onChangeValue : InputHandler,
    value : string
}

interface InputRadioProps {
    key : string,
    name : string,
    value : string,
    index : number,
    isSelected : boolean,
    onChangeValue : ArrayDataHandler,
    onClickRadio : ArrayDataHandler
}

interface InputTrueFalseProps {
    key : string,
    name : string
}

export type {
    inputTextDesignProps,
    InputTextProps,
    InputRadioProps,
    InputTrueFalseProps
}