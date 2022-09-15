import { useState } from "react"
import { QuestionBaseProps } from "../../../interfaces/questions"
import { QuestionDesign } from "./question"
import InputText from "../../forms/input-text"

const Question = ( props : QuestionBaseProps ) => {
    const [ title, setTitle ] = useState<string>('')

    const onChangeTitle = ( value : string, name : string ) => {
        setTitle( value )
        props.onChangeTitle( value, name )
    }
    
    return (
        <QuestionDesign>
            <InputText 
                placeholder = { props.placeholder ? props.placeholder : 'Titulo de pregunta'} 
                name='title'
                bold 
                value = {title} 
                onChangeValue = { onChangeTitle } 
            />
            {
                props.children
            }
        </QuestionDesign>
    )
}

export default Question