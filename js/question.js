// data.js 파일에서 const question = [] 만 가져옵니다.

import {questions} from './data.js';

// console.log(questions[1]);
// progress Bar의 노란색 value를 선택
const progressValueE1 =
 document.querySelector(".progress .value");
 const numberE1 = 
 document.querySelector(".number");
 const questionE1 =
 document.querySelector(".question");
 const choices1E1 =
 document.querySelector(".choice1")
 const choices2E1 =
 document.querySelector(".choice2")

let currentNumber = 0;
let mbti = "";
let question = "";

function renderQuestion(){
    question = questions[currentNumber];
    numberE1.innerHTML = question.number;
    questionE1.innerHTML = question.question;
    choices1E1.innerHTML = question.choices[0].text;
    choices2E1.innerHTML = question.choices[1].text;
    progressValueE1.style.width = 
        (currentNumber + 1)*10 + "%";
}

renderQuestion();

choices1E1.addEventListener('click',function(){nextQuestion(0)});
choices2E1.addEventListener('click',function(){nextQuestion(1)});

function nextQuestion(choiceNumber){
    mbti = mbti + question.choices[choiceNumber].value;
    console.log(mbti);
    if(currentNumber === questions.length-1){
        location.href='./results.html?mbti=' + mbti;
    }
    currentNumber = currentNumber + 1;
    renderQuestion();
}
