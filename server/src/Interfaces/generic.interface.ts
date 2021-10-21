export interface IGenericServiceReturn{
    statusCode:number;
    message:string;
    data?:object;
}
export interface IGenericServiceReturnWithAccessToken extends IGenericServiceReturn{
    accessToken?:string;
}
export interface IGenericResponseObjectWithError extends IGenericServiceReturnWithAccessToken{
    error?:object;
}