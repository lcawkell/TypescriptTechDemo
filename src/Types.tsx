export interface IMessage {
    id: number,
    message: string,
    timeSent: string,
    authorId: number
}

export interface IAuthor {
    id: number,
    name: string,
    roleId: number
}

export interface IRole {
    id: number,
    name: string
}