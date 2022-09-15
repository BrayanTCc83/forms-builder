import { InputHandler } from "../../../interfaces/handlers"
import Question from "../question"
import InputTrueFalse from "../../forms/input-true-false"
import { PlusIconContainer } from "../question/question"
import PlusIcon from "../../../public/icons/plus"

const QuestionTrueFalse = () => {
    const InputHandler : InputHandler = () => {
        
    }
    return(
        <Question onChangeTitle = { InputHandler } >
            <InputTrueFalse/>
            <InputTrueFalse/>
            <PlusIconContainer>
                <PlusIcon onClick = { () =>{} } />
            </PlusIconContainer>
        </Question>
    )
}

export default QuestionTrueFalse