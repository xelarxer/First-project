(function(){
  const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "Quand est mort Jules César?",
        answers: {
          a: "15 mars 44 av. J.-C.",
          b: "17 mars 44 av. J.-C.",
          c: "19 mars 44 av. J.-C.",
        },
        correctAnswer: "a"
      },
      {
        question: "Quel était le nom de son fils adopté (avant adoption) ?",
        answers: {
          a: "Caius Iulius Caesar Octavianus",
          b: "Caius Octavius",
          c: "Imperator Caesar Divi Filius Augustus",
        },
        correctAnswer: "b"
  
    },

    {
      question: "Comment est-il mort?",
      answers: {
        a: "Il à était brulé vif",
        b: "Il à était éxilé",
        c: "Il à était noyé",
        d: "Il à était poignardé",
      },
      correctAnswer: "d"
    }
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
          <div class="answers"> ${answers.join('<br>')} </div><br>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }
buildQuiz();
submitButton.addEventListener('click', showResults);
function showResults(){
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  // Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
// Pagination
showSlide(currentSlide);
function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}
}
})();
// Event listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);