const prompt = require('prompt-sync')({ sigint: true });
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
let choiceInput = false



NUMBERLOOP: for (var i = 0; i <= 100; i++) {
    numberInMind = Math.floor(Math.random() * 100) + 1;




    let i = 0;
    while (!foundCorrectNumber) {
        // Step 1: Get user input (don't forget that the input is a string)
        const userPrompt = prompt('Guess a number from 1 to 100:')
        let userGuess = Number(userPrompt)

        // Step 2: Compare the guess to the secret answer and
        // let the user know the feedback (too large, too small, correct).

        if (userGuess == numberInMind) {

            console.log('Correct! You win.'); {
                CHOICELOOP: for (i = 0; !choiceInput; i++) {
                    const newGame = prompt("Do you want to start a new game? Type in Y if yes, type in N if no."); {
                        if (newGame == 'Y') {
                            console.log('Welcome back.')
                            continue NUMBERLOOP;
                        } else if (newGame == 'N') {
                            console.log('End of game. Congrats on winning!');
                            break;
                        } else {
                            console.log('You can only choose to put in Y or N. ')
                            continue CHOICELOOP;
                        }

                    };

                }
                break;
            }



        } else if (userGuess < numberInMind) {
            console.log('Your guess is too small.')

        } else if (userGuess > numberInMind) {

            console.log('Your guess is too large.')

        } else {

            console.log("Not the answer I was expecting. Give a number instead.")
        }
        i++

    }
    break;
}
