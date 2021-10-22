enum Reactions {
    LIKE,
    HAHA,
    LOVE,
    SAD,
    SURPRISE,
    ANGRY
}
export interface IPostModel{
    id:number;
    uuid:string;
    title:string;
    body:string;
    reactions:Reactions;
    userId:number;
    createdAt:Date;
    updatedAt:Date;
}