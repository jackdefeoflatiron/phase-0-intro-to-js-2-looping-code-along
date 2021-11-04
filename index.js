const messages = [];

function writeCards(arrayOfNames, event){
    for(let i =0; i < arrayOfNames.length; i++) {
        messages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`)
    }
        return messages;
}

function countDown(numbers){
    while(numbers >= 0) {
            console.log(numbers--)}
    
}