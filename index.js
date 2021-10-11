//save sentence and text to JSON
//first letters
//unscramble letters
//hidden phrase = "cats are cute"
//search phrase = "It's silly but there are too many ugly evil earwigs around this residence, and they are all called Chip"
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const fs = require("fs");


// const saveData = (data) => {
//     try {
//         fs.writeFileSync("data.json", JSON.stringify(data));
//     } catch (error) {
//         console.log(error);
//     }
// }

// if (argv.sentence) {
//     saveData({"sentence": argv.sentence})
// };

const sentence = "It's silly but there are too many ugly evil earwigs around this residence, and they are all called Chip";
const phrase = "cats are cute";



const firstLetters = sentence.split(' ').map(([i])=> i).join(' ');

 if (firstLetters.indexOf(phrase) !== -1) {
        console.log("Yes");
    } else {
        console.log("No");
    };

    









