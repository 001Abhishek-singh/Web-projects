// (16/09/23) in this session we are going to create an quiz app by using html,css & javascript.
const questions = [
    {
        question: "Who is the current prime minister of our country ?",
        answers: [
            {text: "Jawahar lal nehru",correct: false},
            {text: "Lal bahadur shastri",correct: false},
            {text: "Narendra modi", correct: true},
            {text: "Indira gandhi",correct: false},
        ]
    },
    {
        question: "Who is the founder of isro",
        answers: [
            {text: "Vikram sarabai",correct: true},
            {text: "A.p.j abdul kalam",correct: false},
            {text: "Kunal singh",correct: false},
            {text: "Sarojni naidu",correct:false},
        ]
    },
    {
        question: "Who is the current captain of our Indian cricket team",correct: false,
        answers: [
            {text:"Virat kohli",correct: false},
            {text:"M.S.Dhoni", correct: false},
            {text:"Hardik Pandya",correct:false},
            {text: "Rohit sharma",correct:true},
        ]
    },
    {
        question: "Who won the Asia cup 2023 ?",
        answers: [
            {text: "INDIA",correct:true},
            {text: "SRI LANKA",correct:false},
            {text: "PAKISTAN",correct: false},
            {text: "BANGLADESH",correct:false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = "block";
} 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();