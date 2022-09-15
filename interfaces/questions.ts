import { ArrayDataHandler, InputHandler } from "../interfaces/handlers";

enum questionTypes {short, radio, trueFalse }

interface QuestionData {
    access : string,
    name : string,
    id : string,
    type : questionTypes,
    index : number,
    onChangeQuestion : ArrayDataHandler
}

interface QuestionBaseProps {
    onChangeTitle : InputHandler,
    children ?: React.ReactNode,
    placeholder ?: string
}

interface QuestionsSchema {
    id : string,
    type : questionTypes,
    name : string,
    details : QuestionShortSchema | QuestionRadioSchema | QuestionTrueFalseSchema | {}
}

interface QuestionGlobalSchema {
    title : string,
    answer : string
}

interface QuestionShortSchema extends QuestionGlobalSchema{
    keywords : Array<string>
}

interface QuestionRadioSchema extends QuestionGlobalSchema{
    options : Array<{
        id : string,
        isSelected : boolean,
        value : string
    }>
}

interface QuestionTrueFalseSchema {
    title : string,
    couples : Array<{
        phrase : string, answer : boolean
    }>
}

export {
    questionTypes
}

export type {
    QuestionBaseProps,
    QuestionData,
    QuestionsSchema,
    QuestionGlobalSchema,
    QuestionRadioSchema,
    QuestionShortSchema,
    QuestionTrueFalseSchema
}