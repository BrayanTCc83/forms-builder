import React from "react"
import useObjectState from "../../../hooks/useObjectState"
import { QuestionData, QuestionShortSchema } from "../../../interfaces/questions"
import InputText from "../../forms/input-text"
import Question from "../question"


const QuestionShort = ( props : QuestionData ) : JSX.Element => {
    const [ state, updateState ] = useObjectState<QuestionShortSchema>( {
        title : '',
        answer : '',
        keywords : []
    }, { onUpdate : props.onChangeQuestion, access : props.access, index : props.index } )

    return (
        <Question onChangeTitle = { updateState } >
            <InputText name='answer' placeholder='Respuesta' value={state.answer} onChangeValue={ updateState } />
        </Question>
    )
}

export default QuestionShort