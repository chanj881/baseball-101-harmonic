const quizData = [
  {
    question: "How many out counts are in each side of an inning?",
    options: ["One", "Two", "Three", "Four"],
    correct: "Three"
  },
  {
    question: "Which pitcher position usually throws the last 1-2 innings to end the game?",
    options: ["Starting", "Bullpen", "Relief", "Closer"],
    correct: "Closer"
  },
  {
    question: "What is it called when the batter runs all four bases after a hit??",
    options: ["Inside the Park Home Run", "Grand Slam Home Run", "Walk-Off Home Run", "Home Run"],
    correct: "Inside the Park Home Run"
  },
  {
    question: "True or False? A double play is a major advantage for the defending team.",
    options: ["TRUE", "FALSE", "BOTH"],
    correct: "TRUE"
  },
  {
    question: "How many defense positions are in the outfield?",
    options: ["One", "Two", "Three", "Four"],
    correct: "Three"
  },
  {
    question: "What are the maximum amount of points that can be scored from a home run?",
    options: ["Two", "Three", "Four", "Five"],
    correct: "Four"
  }
];

let currentQuestionIndex = 0;
      let score = 0;

      function loadQuestion() {
        const questionContainer = document.querySelector('.question');
        const optionsContainer = document.querySelector('.options');
        
        // Get the current question
        const currentQuestion = quizData[currentQuestionIndex];
        
        // Display the question text
        questionContainer.textContent = currentQuestion.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create and display options
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(optionElement);
        });
    }
    function checkAnswer(selectedOption) {
      const currentQuestion = quizData[currentQuestionIndex];
      
      if (selectedOption === currentQuestion.answer) {
          score++;
      }
      
      // Disable further selections after answering
      const options = document.querySelectorAll('.option');
      options.forEach(option => option.onclick = null);
      
      // Show the next question after a short delay
      setTimeout(() => {
          currentQuestionIndex++;
          if (currentQuestionIndex < quizData.length) {
              loadQuestion();
          } else {
              showResults();
          }
      }, 500);
  }
  function showResults() {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.textContent = `You scored ${score} out of ${quizData.length}`;
}
document.getElementById('next-button').addEventListener('click', () => {
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      showResults();
  }
});

// Initial load
loadQuestion();
    