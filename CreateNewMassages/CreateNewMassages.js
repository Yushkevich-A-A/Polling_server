const uuid = require('uuid');
const facker = require('faker');

facker.locale = 'ru';

class CreateNewMassages { 
    constructor() {
        this.messages = [];
        this.timer = null;
        this.init();
    }

    init() {
        this.startTimerMessages();
    }

    startTimerMessages() {
        this.timer = setInterval(() => {
            const message = this.createMessage();
            console.log(message);
            this.messages.push(message)
        }, Math.round(Math.random() * 30) * 1000)
    }

    createMessage() {
        return {
            id: uuid.v4(),
            from: facker.internet.email(),
            subject: facker.lorem.sentence(),
            body: 'Long message body here',
            received: Date.now()
        }
    }

    clearArrMessages() {
        this.messages.length = 0;
    }

    ClearInterval() {
        clearInterval(this.timer);
    }

    getUnreadMessages() { 
        return [... this.messages];
    }
}

module.exports = {
    CreateNewMassages,
}