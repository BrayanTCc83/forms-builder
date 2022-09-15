import { Dispatch, SetStateAction, useState } from "react"
import FormDataError, { ErrorCode } from "../classes/errors"
import { ArrayDataHandler } from "../interfaces/handlers"

function useUpdateArrayObject<T>( currentValue : Array<T>, index : number, value : any, name : keyof T  ) : Array<T> {
    let updatedValue = currentValue

    console.log( updatedValue, index, value, name )

    if( Array.isArray( currentValue ) ){
        if( typeof value === typeof currentValue[ index ][ name ] ){
            updatedValue[ index ][ name ] = value
            console.log( updatedValue )
        }else
            throw new FormDataError( ErrorCode.DATA_TYPE_ERROR, [`${ typeof currentValue[ index ][ name ] }`,`${ typeof value }`] )
    }else
        throw new FormDataError( ErrorCode.STATE_ARRAY_EXPECTED )

    return updatedValue
}

export default useUpdateArrayObject