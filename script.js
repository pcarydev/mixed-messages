const messages = {
    subjects: [
        "Your next JavaScript project",
        "Your GitHub repository",
        "Your latest coding session"
    ],

    predictions: [
        "will finally start making sense",
        "will introduce you to a mysterious bug",
        "will teach you something valuable"
    ],

    endings: [
        "before the weekend is over.",
        "after several cups of coffee.",
        "when you least expect it."
    ]
};

let randomSubject;
let randomPrediction;
let randomEnding;

for (let key in messages) {

    switch (key) {
        case 'subjects':
            randomSubject = messages.subjects[Math.floor(Math.random() * messages.subjects.length)];
            break;
        
        case 'predictions':
            randomPrediction = messages.predictions[Math.floor(Math.random() * messages.predictions.length)];
            break;

        case 'endings': 
            randomEnding = messages.endings[Math.floor(Math.random() * messages.endings.length)];
            break;
    }
}

const completeMessage = `${randomSubject} ${randomPrediction} ${randomEnding}`;

console.log(completeMessage);