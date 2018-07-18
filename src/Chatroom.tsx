import { IMessage, IAuthor, IRole } from './Types';

declare let $:any;


let roles:IRole[] = [
    {
        id: 0,
        role: 'Administrator'
    }
]

let authors:IAuthor[] = [
    {
        id: 0,
        name: 'Lucas Cawkell',
        roleId: 0
    },
    {
        id: 1,
        name: 'Dan Randy',
        roleId: 0
    }
]

let messages:IMessage[] = [

];

let messageElements:string[] = [];

$(function() {

    let messageDomNode = '#Messages';
    let inputDomNode = '#ChatroomPromptInput';

    mountMessages(messageDomNode, loadMessages(messages));

    $('#btnSend').click(()=>{
        sendMessage(inputDomNode, messageDomNode, messages);
    });

    $(inputDomNode).keypress((event)=>{
        if(event.keyCode === 13) {
            sendMessage(inputDomNode, messageDomNode, messages);
        }
    });
});


function loadMessages(messages:IMessage[]):string[] {
    return messages.map(message => `<li><span class='message'><strong>${findAuthorById(authors,message.authorId).name}</strong>: ${message.message}</span></li>`);
}

function mountMessages(domNode:string, messages:string[]):void {
    $(domNode).html(messages.join(''));
}

function findAuthorById(authors:IAuthor[], id:number){
    return authors.filter(author => author.id === id)[0];
}

function getNextMessageId(messages:IMessage[]) :number {
    return messages.length > 0 ? messages[messages.length-1].id+1 : 0;
}

function sendMessage(inputDomNode:string, messageDomNode:string, messages:IMessage[]){
    let id = getNextMessageId(messages);
    addMessage($(inputDomNode).val(),id,0);
    mountMessages(messageDomNode, loadMessages(messages));
    $(inputDomNode).val('');

    setTimeout(()=>{
        let newId = getNextMessageId(messages);
        addMessage(requestResponse(id), newId, 1); 
        mountMessages(messageDomNode, loadMessages(messages))
    }, 2000);
}

function addMessage(message:string, id:number, authorId:number) {
    messages.push({
        id: id,
        message: message,
        authorId: authorId,
        timeSent: Date.now().toString()
    });
}

function requestResponse(messageId) :string {
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