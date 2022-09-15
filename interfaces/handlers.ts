import { MouseEventHandler } from "react"

type InputHandler = ( value : any, name : any ) => void

type InputRadioHanlder = MouseEventHandler<HTMLDivElement>

type ArrayDataHandler = ( index : number, value : any, name : any ) => void

type StateHandler<T> = ( newState : T ) => void

export type {
    InputHandler,
    ArrayDataHandler,
    InputRadioHanlder,
    StateHandler
}