import { IMessage, IAuthor, IRole } from './Types';

declare let $:any;

export function getNextMessageId(messages:IMessage[]) :number {
    return messages.length > 0 ? messages[messages.length-1].id+1 : 0;
}

function findAuthorById(authors:IAuthor[], id:number){
    return authors.filter(author => author.id === id)[0];
}

export function mountMessages(domNode:string, messages:string[]):void {
    $(domNode).html(messages.join(''));
}

export function loadMessages(messages:IMessage[], authors:IAuthor[], roles:IRole[]):string[] {
    return messages.map(message => {

        let author = findAuthorById(authors,message.authorId);
        let role = findRoleById(roles, author.roleId);

        return `<li><span class='message'><strong>${author.name} (${role.name})</strong>: ${message.message}</span></li>`
    });
}

function findRoleById(roles:IRole[], roleId:number){
    return roles.filter(role => role.id === roleId)[0];
}

export function addMessage(messages:IMessage[], message:string, id:number, authorId:number) {
    messages.push({
        id: id,
        message: message,
        authorId: authorId,
        timeSent: Date.now().toString()
    });
}

export function requestResponse(messageId) :string {
    let num = Math.floor(Math.random() * 3);

    switch(messageId) {
        case 0: 
            switch(num) {
                case 0: 
                    return 'Hi Lucas!';
                case 1:
                    return 'ASL??';
                case 2:
                    return 'This room is for members only.'
                case 3:
                    return 'Are you ready?'
            }
        break;
        case 2:
            switch(num) {
                case 0:
                    return 'It will all make sense in time.'
                case 1:
                    return "I guess you haven't heard the news?"
                case 2:
                    return 'You know this is for the best... right?'
                case 3:
                    return "I'm so happy to see you!"
            }
        break;
        default:
            return 'Well alright then.'
    }
}