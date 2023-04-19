const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuestions = [
  "What's your name? Nicknames are also acceptable: ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = {};

const askQuestion = function(questionIndex) {
  rl.question(surveyQuestions[questionIndex], (answer) => {
    answers[questionIndex] = answer;
    if (questionIndex < surveyQuestions.length - 1) {
      askQuestion(questionIndex + 1);
    } else {
      console.log(`\n hi my name is ${answers[0]}, I like doing the activity is ${answers[1]} and i would like to listen the music when i dong ${answers[1]} is ${answers[2]}. I like the Meal is ${answers[3]}. and my favourite thing to eat for the meal is ${answers[4]}. my absolute favourite Sport is ${answers[5]}, my Superpower is ${answers[6]}.\n`);
      rl.close();
    }
  });
};

askQuestion(0);
