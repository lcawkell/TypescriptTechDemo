import { IMessage, IAuthor, IRole } from './Types';

export let roles:IRole[] = [
    {
        id: 0,
        name: 'Administrator'
    },
    {
        id: 1,
        name: 'User'
    }
]

export let authors:IAuthor[] = [
    {
        id: 0,
        name: 'Lucas Cawkell',
        roleId: 0
    },
    {
        id: 1,
        name: 'Dan Randy',
        roleId: 1
    }
]

export let messages:IMessage[] = [

];