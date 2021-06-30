const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerEl = document.querySelector('.countdown') 
const scoreBoard = document.querySelector('.scores')
 
let shuffledQuestions, currentQuestionIndex

const questions = [
    {
        question: ' 90 + 2 = ? ',
        answers: [
            { text: '92', correct: true },
            { text: '6', wrong: false },
            { text: '33', wrong:false},
            { text: '0', wrong:false}
        ]
    },
    {
        question: ' 2+5=? ',
        answers: [
            { text: '23', wrong:false},
            { text: '4', correct: true },
            { text: '3', wrong: false },
            { text: '90', wrong: false }
        ]
    },
    {
        question: ' What do you get when you mix blue and red ? ',
        answers: [
            { text: 'Purple', correct: true },
            { text: 'Yellow', wrong: false },
            { text: 'green', wrong: false },
            { text: 'brown', wrong: false }

        ]
    },
    {
        question: ' Apple a fruit or vegetable ?',
        answers: [
            { text: 'Fruit', correct: true },
            { text: 'Vegetable', wrong: false }
        ]
    },
    {
        question: 'What does CSS mean ? ',
        answers: [
            { text: 'casket super stuff', wrong: false},
            { text: 'casper special something', wrong: false},
            { text: 'cascading style sheets', correct: true}
        ]
    },
    {
        question: ' Can chickens fly ? ',
        answers: [
            { text: 'Fruit', correct: true },
            { text: 'Vegetable', wrong: false }
        ]
    }
]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
   





var secondsLeft = 5;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
    }


  }, 1000);
}
setTime();
      
}  


  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    
    })
     if (shuffledQuestions.length > currentQuestionIndex + 1) {
         nextButton.classList.remove('hide')
     } else {
         startButton.innerText = 'restart'
         startButton.classList.remove('hide')
     }
     nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

 function storeScores() {
     localStorage.setItem(scoreBoard, JSON.stringify("Scores"));
 } 
