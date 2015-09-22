function getShortMessages(messages) {
    return messages.filter(function(thing){
        return thing.message.length < 50;
    }).map(function(thing){
        return thing.message;
    });
}

module.exports = getShortMessages;
