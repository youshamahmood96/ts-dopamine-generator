export interface IPostCreate {
    title: string;
    body: string;
}
export interface IPostResponseMessage {
    postCreated: string;
    getSuccessMessage: string;
    postDeletedMessage: string;
    postUpdated: string;
}
