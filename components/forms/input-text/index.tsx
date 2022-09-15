import { FormEventHandler, useState } from "react"
import { InputTextProps } from "../../../interfaces/inputs"
import { InputTextDesign, InputTextLabelDesign } from "./input-text"

const InputText = ( props : InputTextProps ) => {
    const [ currentValue, setCurrentValue ] = useState<string>( props.value )

    const updateCurrentValue : FormEventHandler<HTMLInputElement> = ( event ) => {
        const value = event.currentTarget.value
        setCurrentValue( value )
        props.onChangeValue( value , props.name )
    }

    return(
        <InputTextLabelDesign htmlFor = { props.name }  >
            <InputTextDesign 
                name={ props.name } 
                id={ props.name } 
                placeholder = { props.placeholder } 
                multiple = { props.multiple } 
                bold = { props.bold } 
                value ={ currentValue } 
                onInput={ updateCurrentValue } />
        </InputTextLabelDesign>
    )
}

export default InputText