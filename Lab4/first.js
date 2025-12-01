// Two simple arrays
let questions = [
    "Who is President of France?",
    "Red Planet?",
    "2 + 7?",
    "which language is used for web development?",
    "Who created JavaScript?"
];

let answers = [
    "Vladimir Putin",
    "mars",
    "9",
    "JavaScript",
    "brendan eich"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);

    // Prevent error if user presses Cancel
    if (userAnswer === null) {
        alert("No answer provided. Correct answer: " + answers[i]);
        continue;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);
