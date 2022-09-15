import { ReactSortable } from 'react-sortablejs-typescript'
import { useState, FC } from 'react'
import FormSchema from '../classes/form'
import styled from 'styled-components'
import useArrayObjectState from '../hooks/useArrayObjectState'
import { QuestionsSchema, questionTypes } from '../interfaces/questions'
import DrawQuestion from '../components/questions/question-driver'
import FormDataError, { ErrorCode } from '../classes/errors'

const formSchema = new FormSchema()

const FormBodyDesign = styled.main`
    display : block;   
    background-color: red;
    padding : 10px 2.5%; 
    @media ( min-width : 600px ) {
        padding : 10px 25px;
    }
    @media ( min-width : 950px ) { 
        padding : 10px calc( calc( 100% - 900px ) / 2 );
    }
`

export default function Home() {
    const [ state, setState, updateState ] = useArrayObjectState<QuestionsSchema>([
        { id : 'key', type : questionTypes.short, name : 'sh1', details : {} }, 
        { id : 'r1', type : questionTypes.radio, name : 'r1', details : {} }, 
        { id : 'tf1', type : questionTypes.trueFalse, name : 'tf1', details : {} }
    ])
    
    const FormBody : FC = ( props ) => {
        return(
            <FormBodyDesign>
                {
                    props.children  
                }
            </FormBodyDesign>
        )
    } 
 
    return (
        <div> 
        <header>
            <h1>{formSchema.title}</h1>
        </header> 
        <FormBody>
            <ReactSortable list = { state } setList = { setState } >
                {
                    state.map( ( item, index ) =>{
                        return <DrawQuestion index = { index } access='details' onChangeQuestion = { updateState } {...item} />
                    })
                } 
            </ReactSortable>
        </FormBody>
        </div>
    )
}