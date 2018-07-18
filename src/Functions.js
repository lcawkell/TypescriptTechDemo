window['getNextMessageId'] = function getNextMessageId(messages) {
    return messages.length > 0 ? messages[messages.length-1].id+1 : 0;
}

window['findAuthorById'] = function findAuthorById(authors, id){
    return authors.filter(author => author.id === id)[0];
}

window['mountMessages'] = function mountMessages(domNode, messages) {
    $(domNode).html(messages.join(''));
}

window['loadMessages'] = function loadMessages(messages, authors) {
    return messages.map(message => {

        let author = findAuthorById(authors,message.authorId);

        return `<li><span class='message'><strong>${author.name}</strong>: ${message.message}</span></li>`
    });
}

window['addMessage'] = function addMessage(messages, message, id, authorId) {
    messages.push({
        id: id,
        message: message,
        authorId: authorId,
        timeSent: Date.now().toString()
    });
}

window['requestResponse'] = function requestResponse(messageId) {
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