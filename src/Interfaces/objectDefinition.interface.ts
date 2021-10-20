export interface IValue {
    prop: string
}

export interface CustomObject {
    [name: string]: IValue;
}