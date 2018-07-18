import { IMessage, IAuthor, IRole } from './Types';
import { getNextMessageId, loadMessages, mountMessages, addMessage, requestResponse } from './Functions';
import { authors, messages, roles } from './Data';

declare let $:any;

let messageElements:string[] = [];

$(function() {

    let messageDomNode = '#Messages';
    let inputDomNode = '#ChatroomPromptInput';

    mountMessages(messageDomNode, loadMessages(messages, authors, roles));

    $('#btnSend').click(()=>{
        sendMessage(inputDomNode, messageDomNode, messages);
    });

    $(inputDomNode).keypress((event)=>{
        if(event.keyCode === 13) {
            sendMessage(inputDomNode, messageDomNode, messages);
        }
    });
});


function sendMessage(inputDomNode:string, messageDomNode:string, messages:IMessage[]){

    let id = getNextMessageId(messages);

    addMessage(messages, $(inputDomNode).val(), id, 0);

    mountMessages(messageDomNode, loadMessages(messages, authors, roles));
    
    $(inputDomNode).val('');

    setTimeout(()=>{
        let newId = getNextMessageId(messages);
        addMessage(messages, requestResponse(id), newId, 1); 
        mountMessages(messageDomNode, loadMessages(messages, authors, roles))
    }, 2000);
}