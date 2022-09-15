import React from "react"
import PlusIcon from "../../../public/icons/plus"
import InputRadio from "../../forms/input-radio"
import Question from "../question"
import { PlusIconContainer } from '../question/question'
import useObjectState from "../../../hooks/useObjectState"
import { QuestionData, QuestionRadioSchema } from "../../../interfaces/questions"
import { ArrayDataHandler, InputHandler } from "../../../interfaces/handlers"
import useUpdateArrayObject from "../../../hooks/useUpdateArrayObject"
import { ReactSortable } from "react-sortablejs-typescript"
import { useState } from "react"

const QuestionRadio = ( props : QuestionData ) => {
    const [ state, updateState, setState ] = useObjectState<QuestionRadioSchema>({
        answer : '',
        title : '',
        options : [
            { isSelected : true, value : '', id : 'qri0' },
            { isSelected : false, value : '', id : 'qri1' }
        ]
    }, { onUpdate : props.onChangeQuestion, access : props.access, index : props.index } )

    const [ update, setUpdate ] = useState<boolean>( true )

    const changeInputValue : ArrayDataHandler = ( index, value, name ) => {
        let provisionalState = state
        provisionalState.options = useUpdateArrayObject( state.options, index, value, name )
        setState( provisionalState )
    }

    const changeAnswer : ArrayDataHandler = ( index, value, name ) => {
        changeInputValue( index, true, 'isSelected' )
        updateState( value, name )
    }

    const appendRadio = () => {
        setUpdate( false )
        let provisionalState = state
        provisionalState.options.push( {
            isSelected : false,
            value : '',
            id : `qri${state.options.length}`
        } )
        setState( provisionalState )
        setTimeout( () => {
            setUpdate( true )
        }, 100 )
    }

    return(
        <Question onChangeTitle = { updateState } >
                <ReactSortable list = { state.options } setList = { ( newValue ) => {
                    console.log( newValue )
                } } >
                    {
                        state.options.map( ( radio, index ) =>
                            <InputRadio key={`question-radio-${index}`} name = 'answer' onChangeValue={ changeInputValue } onClickRadio={ changeAnswer } index = { index } {...radio} />
                        )
                    }
                </ReactSortable>
            <PlusIconContainer>
                <PlusIcon onClick ={ appendRadio } />
            </PlusIconContainer>
        </Question>
    )
}

export default QuestionRadio