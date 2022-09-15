import React, { useState } from "react"
import { InputHandler, InputRadioHanlder } from "../../../interfaces/handlers"
import { InputRadioProps } from "../../../interfaces/inputs"
import TrashIcon from "../../../public/icons/trash"
import InputText from "../input-text"
import { InputRadioContainer, InputRadioDesign } from "./input-radio"

const InputRadio = ( props : InputRadioProps ) => {
    const [ selected, setSelect ] = useState<boolean>( props.isSelected )
    const [ value, setValue ] = useState<string>( props.value )

    const handleRadioClick : InputRadioHanlder = ( event ) => {
        setSelect( !selected )
        props.onClickRadio( props.index, value ,'answer' )
    }
    
    const updateValue : InputHandler = ( value : string, name : string ) => {
        setValue( value )
        props.onChangeValue( props.index, value, 'value' )
    }

    return (
        <InputRadioContainer>
            <InputRadioDesign {...props} onClick={ handleRadioClick } isSelected = { selected } />
            <InputText key='input' name={props.name} placeholder='Respuesta' value={ value } onChangeValue={ updateValue } />
            <TrashIcon/>
        </InputRadioContainer>
    )
}

export default InputRadio