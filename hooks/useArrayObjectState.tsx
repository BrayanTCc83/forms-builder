import { Dispatch, SetStateAction, useState } from "react"
import FormDataError, { ErrorCode } from "../classes/errors"
import { ArrayDataHandler } from "../interfaces/handlers"
import useUpdateArrayObject from "./useUpdateArrayObject"

function useArrayObjectState<T>( initialValue : Array<T> ) : [ state : Array<T>, setState : Dispatch<SetStateAction<Array<T>>>, updateState : ArrayDataHandler ] {
    const [ state, setState ] = useState<Array<T>>( initialValue )

    const updateState : ArrayDataHandler = ( index, value, name : keyof T ) => {
        setState( useUpdateArrayObject( state, index, value, name ) )
    }

    return [ state, setState, updateState ]
}

export default useArrayObjectState