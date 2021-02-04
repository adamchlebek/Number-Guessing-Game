
## Overview

This exercise is designed to be a warm up programming assignment for learning TypeScript by writing the well-known number guessing game. The TS program will simply read user input from the keyboard (`stdin`) and write its output to the console (`stdout`).

This exercise is also intended for a demo to make students aware that TypeScript (and JavaScript) programs can execute outside of a browser environment.

### Utilities Needed

1.  NodeJS (`node`  and  `npm`) for setting up the project and installing third party libraries
2.  TypeScript transpiler  `tsc`  for converting your  `.ts`  file into a  `.js`  which can then be run by  `node`

### Prerequisites

This assignment assumes that you are proficient in Java and understand how to interpret and apply detailed technical online documentations of the Java APIs. By reading the detailed documentation of a totally  _new_  Java method (which you never used before), you are expected to understand how to use the method in a Java program.

The same level of proficiency in reading technical documentations of JavaScript/TypeScript functions is required for successful completion of this assignment. The instructor will provide minimal amount of starter code, but each student is expected to explore the online JavaScript (or TypeScript) documentations to learn the remaining details and use them in code.

While the official source of Java APIs documentation is  `https://docs.oracle.com`, the official source of most JavaScript technical documentations is  `https://developer.mozilla.org`.

## Program Requirements

1.  Write a TypeScript program that implements the number guessing game.
    
2.  The program interacts with user from the keyboard and console (no fancy GUI required)
    
3.  Use random number generator  [`Math.random()` (opens new window)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)to initialize the secret number between 1-100.
    
    WARNING
    
    This number must be treated as an integer value, i.e. it should not include any decimal/fractional portion.
    
4.  Prompts the user to enter her guess
    
5.  If the guess is incorrect, provide a hint "too small" or "too big" and prompt again for the next guess
    
6.  If the guess matches the secret, provide a proper feedback and then ask a "Y/N" question if the user wants to play again.
    
    -   if the response is positive, generate a new secret and the game shall continue as before
    -   if the response is negative, break out of the main loop

### Sample Output

```
Welcome to Number Guessing game by YOUR-NAME-HERE.

Your guess: 45
Too low, try again!
Your guess: 80
Too high, try again!
Your guess: 73
Got it. Play again (y/n)? y

New secret generated.
Your guess: 15
Too high, try again!
Your guess: 8
Got it. Play again (y/n)? n

Bye!

```

## Setting Up Your Workspace

The following steps should be performed in a new directory of your preference

1.  Run  `npm init`  to setup the directory for NodeJS workspace
    
    -   At the "Package Name" prompt, enter a name consisting only lowercase and digit (no space)
    -   At the "main entry" prompt, enter  `main.ts`
    -   At the "author" prompt, enter your  _full name_
    
    The above steps should create a new file  `package.json`
    
2.  Create the file  `main.ts`  with the following statement
    
    ```
    console.log("Hello TypeScript");
    
    ```
    
3.  Edit  `package.json`  and add the following section (besides all the other sections which have been automatically generated)
    
    ```
    "script": {
      "play": "tsc main.ts && node main.js"
    }
    
    ```
    
    The above command is intended to use  `tsc`  to transpile your TS code into a JS code, then run the latter using  `node`
    
    WARNING
    
    Please use the  `play`  entry verbatim,  _do not_  change it to  `playgame`,  `guess`, or any such names. This will help your instructor to run your program using the same command for grading.
    
4.  Compile and run your program by typing
    
    ```
    npm run play
    
    ```
    
    you should see the output  `Hello TypeScript`  from the program.
    
5.  Add the following library as the dependency for your project
    
    ```
    npm i --save-dev @types/node
    
    ```
    
    The above third-party library allows the TypeScript compiler to recognize the types of NodeJS builtin data/objects.
    
6.  Replace your  `main.ts`  with the following starter code:
    
    ```
    const readline = require("readline");
    const inout = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    async function startHere () {
      process.stdout.write("> ");
      for await (const userInput of inout) {
        if (userInput.trim() === "quit") break;
        console.debug(`You entered ${userInput}`);
        process.stdout.write("> ");
      }
    }
    
    startHere();
    
    ```
    
    A couple of notes:
    
    -   `require`  is a NodeJS mechanism to import its internal library into the scope of your program
    -   The  `async`/`await`  "operators" are required for functions that return asynchronous result as JavaScript Promise.
7.  Run the starter code by typing  `npm run play`. The sample program should repeatedly ask for input until you press  `quit`.
    
    TIP
    
    Unlike a typical Java program where you are able read input from any line in your code, in the above starter code the  _only_  spot where input is read from the keyboard is at the  `for await`  line. Nowhere else in the code you are able to read input from the keyboard.
    
    Please keep this constraint in mind when designing the flow of user interactions in the game.
    
8.  Add more logic to the starter code to implement the number guessing game
    

### Extra Credit options

-   (1 pt) Allow the user to stop the game (early) by entering "quit" at any prompt (without waiting until the user correctly guess the secret number)
-   (2 pts) Show a brief help message anytime the user enter "help" at the prompt
-   (2 pts) Limit the number of attempts to guess the secret number and declare "win" or "loose" at the end of that attempts. If you implement this extra feature, prompt the user for the number of attempts at the start of the game.