let messageElements = [];

$(function() {

    let messageDomNode = '#Messages';
    let inputDomNode = '#ChatroomPromptInput';

    mountMessages(messageDomNode, loadMessages(messages, authors));

    $('#btnSend').click(()=>{
        sendMessage(inputDomNode, messageDomNode, messages);
    });

    $(inputDomNode).keypress((event)=>{
        if(event.keyCode === 13) {
            sendMessage(inputDomNode, messageDomNode, messages);
        }
    });
});


function sendMessage(inputDomNode, messageDomNode, messages){

    let id = getNextMessageId(messages);

    addMessage(messages, $(inputDomNode).val(), id, 0);

    mountMessages(messageDomNode, loadMessages(messages, authors));
    
    $(inputDomNode).val('');

    setTimeout(()=>{
        let newId = getNextMessageId(messages);
        addMessage(messages, requestResponse(id), newId, 1); 
        mountMessages(messageDomNode, loadMessages(messages, authors))
    }, 2000);
}