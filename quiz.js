const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "How many out counts are in each side of an inning?",
    answers: {
      a: "2",
      b: "3",
      c: "4"
    },
    correctAnswer: "b"
  },
  {
    question: "Which pitcher position usually throws the last 1-2 innings to end the game?",
    answers: {
      a: "Starting Pitcher",
      b: "Bullpen/Relief Pitcher",
      c: "Closer"
    },
    correctAnswer: "c"
  },
  {
    question: "What is it called when the batter runs all four bases after a hit?",
    answers: {
      a: "Inside the Park Home Run",
      b: "Grand Slam",
      c: "Home Run",
    },
    correctAnswer: "a"
  },
  {
    question: "True or False? A double play is a major advantage for the defending team.",
    answers: {
      a: "TRUE",
      b: "FASLSE",
      c: "BOTH"
    },
    correctAnswer: "a"
  },
  {
    question: "How many defense positions are in the outfield?",
    answers: {
      a: "1",
      b: "2",
      c: "3"
    },
    correctAnswer: "c"
  },
  {
    question: "What are the maximum amount of points that can be scored from a home run?",
    answers: {
      a: "3",
      b: "4",
      c: "5"
    },
    correctAnswer: "b"
  },
];

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

