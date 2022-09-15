import React from "react"
import { QuestionData, questionTypes } from "../../../interfaces/questions"
import QuestionRadio from "../question-radio"
import QuestionShort from "../question-short"
import QuestionTrueFalse from "../question-true-false"

const DrawQuestion = ( props : QuestionData ) => {
    let Component = <div/>
    switch( props.type ){
        case questionTypes.short : 
            Component = <QuestionShort {...props} />
            break
        case questionTypes.radio : 
            Component = <QuestionRadio {...props} />
            break
        case questionTypes.trueFalse :
            Component = <QuestionTrueFalse />
            break
    }
    return Component
}

export default DrawQuestion