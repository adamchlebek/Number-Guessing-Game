const readline = require("readline");
const inout = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var guessLimit: number;
var loops: number = 0;

async function startHere() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    console.debug('Welcome to Number Guessing game by Adam Chlebek.');

    inout.question('How many guesses do you want? ', (guesses) => {
        if (guesses == "quit"){
            inout.close();
            return;
        }

        guessLimit = guesses;
        guessNumber(randomNumber);
    });
}

async function guessNumber(randomNumber) {
    if(guessLimit == loops) {
        console.debug(`Game Over. The number was ${randomNumber}!`);
        inout.question('Play again (y/n)? ', (again) => {
            if (again.trim() === "n") inout.close();
            if (again.trim() === "y") startHere();
            if (again.trim() != "y" && again.trim() != "n") {
                console.debug('Invalid Character.');
                inout.close();
            }    
        });
    }

    inout.question(`Guess Number (Guess ${loops + 1}): `, async (answer) => {
        if (answer == "quit"){
           inout.close();
           return;
        }

        const guess = Number(answer);
        if (!guess) console.debug('This guess is not a number.');

        if (guess > randomNumber) console.debug(`Too high, try again!`);
        if (guess < randomNumber) console.debug(`Too low, try again!`);

        if (guess === randomNumber){ 
            console.debug(`This guess was correct! The number was ${randomNumber}`);

            inout.question('Play again (y/n)? ', (again) => {
                if (again.trim() === "n") inout.close();
                if (again.trim() === "y") startHere();
                if (again.trim() != "y" && again.trim() != "n") {
                    console.debug('Invalid Character.');
                    inout.close();
                }  
            });
        }

        loops ++;
        guessNumber(randomNumber);
    });
}

startHere();