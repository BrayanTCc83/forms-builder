import { useState } from "react"
import TrashIcon from "../../../public/icons/trash"
import InputText from "../input-text"
import { InputTrueFalseContainer, InputTrueFalseDesign } from "./input-true-false"

const InputTrueFalse = () => {
    const [ currentValue, setCurrentValue ] = useState<boolean>( false )

    const updateCurrentValue = () => {
        setCurrentValue( !currentValue )
    }

    return (
        <InputTrueFalseContainer>
            <InputTrueFalseDesign className = { currentValue ? 'selected' : '' } onClick = { updateCurrentValue } />
            <InputText key='input' name='Nombre' placeholder='Respuesta' value='' onChangeValue={( val : string, name : string )=>{
                console.log( name, val )
            }} />
            <TrashIcon/>
        </InputTrueFalseContainer>
    )
}

export default InputTrueFalse