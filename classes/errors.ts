enum ErrorCode {
    OK,
    DATA_TYPE_ERROR, 
    STATE_ARRAY_EXPECTED,
    STATE_OBJECT_EXPECTED
}

class FormDataError extends Error {
    private static extraData : Array<string>

    constructor( errorCode : ErrorCode, extraData ?: Array<string> ){
        super( FormDataError.printMessage( errorCode, extraData ? extraData : [] ) )
    }

    private static printMessage( errorCode : ErrorCode, extraData : Array<string> ) : string {
        let errorMessage : string = "This's a new error"

        FormDataError.extraData = extraData

        switch( errorCode ){
            case ErrorCode.OK : 
                errorMessage = "All's okey"
                break
            case ErrorCode.DATA_TYPE_ERROR : 
                errorMessage = "Data type error. Expected % in value, but was receibed %"
                break
            case ErrorCode.STATE_OBJECT_EXPECTED :
                errorMessage = "The state isn't an object"
                break
            case ErrorCode.STATE_ARRAY_EXPECTED :
                errorMessage = "Expected Array as state, but receibed %"
                break
        }

        errorMessage = FormDataError.formatMessage( errorMessage )
        
        return errorMessage
    }

    private static formatMessage( errorMessage : string ){
        let protoErrorMessage = errorMessage.split( '%' )
        let realMessage = ''
        protoErrorMessage.pop()
        for( let index = 0; index < protoErrorMessage.length ; index++ ){
            realMessage+= protoErrorMessage[ index ] + this.extraData[ index ]
        } 
        return realMessage
    }

}

export default FormDataError

export {
    ErrorCode
}