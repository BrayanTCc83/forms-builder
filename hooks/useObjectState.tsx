import { Dispatch, SetStateAction, useState } from "react"
import FormDataError, { ErrorCode } from "../classes/errors"
import { ArrayDataHandler, InputHandler, StateHandler } from "../interfaces/handlers"

function useObjectState<T>( initialValue : T, config ?: { onUpdate : ArrayDataHandler, index : number, access : string } ) : 
    [ state : T, updateState : InputHandler, setState: StateHandler<T> ] {
    const [ state, changeState ] = useState<T>( initialValue )

    const updateState : InputHandler = ( value : any, name : keyof T ) => {
        if ( typeof state === 'object' ){
            if( typeof value === typeof state[ name ] ){
                let provisionalState : T = state
                provisionalState[ name ] = value
                setState( provisionalState )
                executeOnUpdate( provisionalState )
            }else
                throw new FormDataError( ErrorCode.DATA_TYPE_ERROR, [`${ typeof state[ name ] }`,`${ typeof value }`] )
        }else
            throw new FormDataError( ErrorCode.STATE_OBJECT_EXPECTED )
    }

    const setState : StateHandler<T> = ( newState ) => {
        changeState( newState )
        executeOnUpdate( newState )
    }

    const executeOnUpdate = ( state : T ) => {
        config ? config.onUpdate( config.index, state, config.access ) : () => {}
    }

    return [ state, updateState, setState ]
}

export default useObjectState