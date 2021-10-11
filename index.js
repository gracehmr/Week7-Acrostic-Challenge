//save sentence and text to JSON
//first letters
//unscramble letters
//hidden phrase = "cats are cute"
//search phrase = "It's silly but there are too many ugly evil earwigs around this residence, and they are all called Chip"
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;



// //lecture solution
// const matchChar = (char) => char.match(/[a-z]/i);

// const bucketLetters = (str) => {
//         const letters = {};
//         for(const letter of str) {
//             letters[letter] = (letters[letter] || 0) + 1;
//         }
//         return letters;
//     }
// const findMessage = (msg, txt) => {
//         for(const [letter, count] of Object.entries(msg)) {
//             if(count > txt[letter]) {
//                 return false;
//             }
//         }
//         return true;
//     };


// const main = () => {
//     const message = argv.message.toLowerCase().split("").filter(matchChar);
//     const text = argv.text.toLowerCase().split("").filter(char => char.match(/[a-z[\s]/i));

  
//     const words = text.join("").split(" ");

//     const bucketedLetters = bucketLetters(message);
//     const bucketedFirstLetters = bucketLetters(words.map(word => word[0]));
//     const bucketedLastLetters = bucketLetters(words.map(word => word[word.length-1]));

//     console.log(bucketedLetters);
//     console.log(bucketedFirstLetters);
//     console.log(bucketedLastLetters);
//     return findMessage(bucketedLetters, bucketedFirstLetters) || findMessage (bucketedLetters, bucketedLastLetters);
// }

// main();


// const sentence = "It's silly but there are too many ugly evil earwigs around this residence, and they are all called Chip";
// const phrase = "cats are cute";


const main = () => {

const firstLetters = argv.sentence.split(' ').map(([i])=> i).join(' ');

 if (argv.firstLetters.indexOf(argv.phrase) !== -1) {
        console.log("Yes");
    } else {
        console.log("No");
    };

}

main();
    









