// Strings
const myVariable = "Mathematics";

// The length property
console.log("Every crown is worthy of a king".length);

// String Methods 
console.log("Every crown is worthy of a king".charAt(6));

// String Methods 
console.log("Every crown is worthy of a king".indexOf("in"));

const myName = "Tyler";

console.log(myName.length);

console.log(myName.charAt(Math.floor(Math.random() * myName.length )));


let playerOne = "rock";
let playerTwo = "paper";
let result =
    playerOne === playerTwo
        ? "This game is a tie"
        : playerOne === "paper" && playerTwo === "rock" ? "playerOne wins"
        : playerOne === "rock" && playerTwo === "scissors" ? "playerOne wins"
        : playerOne === "scissors" && playerTwo === "paper" ? "playerOne wins"
        : "playerTwo wins!";
console.log(result);


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("ROCK"));