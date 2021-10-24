enum Reactions {
    LIKE,
    HAHA,
    LOVE,
    SAD,
    SURPRISE,
    ANGRY,
  }
export interface IPostCreate {
    title: string;
    body: string;
}
export interface IPostModel{
    id:number;
    uuid:string;
    title:string;
    body:string;
    reactions?:Reactions[]
}
export interface IPostResponseMessage {
    postCreated: string;
    getSuccessMessage: string;
    postDeletedMessage: string;
    postUpdated: string;
}
