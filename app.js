const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const c1 = document.getElementById("c1");
const c1200 = document.getElementById("c1200");
const c1400 = document.getElementById("c1400");
const c1600 = document.getElementById("c1600");
const c1800 = document.getElementById("c1800");
const c11000 = document.getElementById("c11000");

const c2 = document.getElementById("c2");
const c2200 = document.getElementById("c2200");
const c2400 = document.getElementById("c2400");
const c2600 = document.getElementById("c2600");
const c2800 = document.getElementById("c2800");
const c21000 = document.getElementById("c21000");

const c3 = document.getElementById("c3");
const c3200 = document.getElementById("c3200");
const c3400 = document.getElementById("c3400");
const c3600 = document.getElementById("c3600");
const c3800 = document.getElementById("c3800");
const c31000 = document.getElementById("c31000");

const c4 = document.getElementById("c4");
const c4200 = document.getElementById("c4200");
const c4400 = document.getElementById("c4400");
const c4600 = document.getElementById("c4600");
const c4800 = document.getElementById("c4800");
const c41000 = document.getElementById("c41000");

const c5 = document.getElementById("c5");
const c5200 = document.getElementById("c5200");
const c5400 = document.getElementById("c5400");
const c5600 = document.getElementById("c5600");
const c5800 = document.getElementById("c5800");
const c51000 = document.getElementById("c51000");

const c6 = document.getElementById("c6");
const c6200 = document.getElementById("c6200");
const c6400 = document.getElementById("c6400");
const c6600 = document.getElementById("c6600");
const c6800 = document.getElementById("c6800");
const c61000 = document.getElementById("c61000");

const question = document.getElementById("question");
const questionBlock = document.getElementById("questionBlock");
const answer = document.getElementById("answer");

let questions;

async function loadQuestions() {
  // Fetch questions from json file
  const response = await fetch("./questions.json");
  questions = await response.json();
}

loadQuestions().then(() => {
  function showAnswer(a) {
    question.textContent = "";
    question.textContent = a;
    questionBlock.style.display = "block";
    questionBlock.addEventListener("click", function () {
      hideQuestion();
    });
  }

  function showQuestion(q, a, v) {
    question.textContent = "";
    question.textContent = q;
    a = a.replaceAll("<br />"," ").replaceAll("\'","'").replaceAll("&nbsp;'"," ")
    questionBlock.style.display = "block";
    var timeLeft = 5;
    var questionTimer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
        showAnswer(a);
      }
      timeLeft -= 1;
    }, 1000);
    questionBlock.addEventListener("click", function () {
      clearInterval(questionTimer);
      showAnswer(a);
    });
  }

  function hideQuestion() {
    question.textContent = "";
    questionBlock.style.display = "none";
  }

  // Filter only questions from Jeopardy! round
  const rd1Questions = questions.filter((obj) => {
    return obj.round === "Jeopardy!";
  });

  // Pick first category
  let cat1 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c1.textContent += cat1;

  // Make an array of category questions
  let c1Questions = rd1Questions.filter((obj) => {
    return obj.category === cat1;
  });

  //   filter first $200 question
  let cat1200 = c1Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat1200Question = cat1200[0].question;
  let cat1200Answer = cat1200[0].answer;
  c1200.addEventListener("click", function () {
    c1200.textContent = "";
    showQuestion(cat1200Question.slice(1, -1), cat1200Answer, "$200");
  });

  let cat1400 = c1Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat1400Question = cat1400[0].question;
  let cat1400Answer = cat1400[0].answer;
  c1400.addEventListener("click", function () {
    c1400.textContent = "";
    showQuestion(cat1400Question.slice(1, -1), cat1400Answer, "$400");
  });

  let cat1600 = c1Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat1600Question = cat1600[0].question;
  let cat1600Answer = cat1600[0].answer;
  c1600.addEventListener("click", function () {
    c1600.textContent = "";
    showQuestion(cat1600Question.slice(1, -1), cat1600Answer, "$600");
  });

  let cat1800 = c1Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat1800Question = cat1800[0].question;
  let cat1800Answer = cat1800[0].answer;
  c1800.addEventListener("click", function () {
    c1800.textContent = "";
    showQuestion(cat1800Question.slice(1, -1), cat1800Answer, "$800");
  });

  let cat11000 = c1Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat11000Question = cat11000[0].question;
  let cat11000Answer = cat11000[0].answer;
  c11000.addEventListener("click", function () {
    c11000.textContent = "";
    showQuestion(cat11000Question.slice(1, -1), cat11000Answer, "$1000");
  });

  let cat2 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c2.textContent += cat2;

  let c2Questions = rd1Questions.filter((obj) => {
    return obj.category === cat2;
  });

  let cat2200 = c2Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat2200Question = cat2200[0].question;
  let cat2200Answer = cat2200[0].answer;
  c2200.addEventListener("click", function () {
    c2200.textContent = "";
    showQuestion(cat2200Question.slice(1, -1), cat2200Answer, "$200");
  });

  let cat2400 = c2Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat2400Question = cat2400[0].question;
  let cat2400Answer = cat2400[0].answer;
  c2400.addEventListener("click", function () {
    c2400.textContent = "";
    showQuestion(cat2400Question.slice(1, -1), cat2400Answer, "$400");
  });

  let cat2600 = c2Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat2600Question = cat2600[0].question;
  let cat2600Answer = cat2600[0].answer;
  c2600.addEventListener("click", function () {
    c2600.textContent = "";
    showQuestion(cat2600Question.slice(1, -1), cat2600Answer, "$600");
  });

  let cat2800 = c2Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat2800Question = cat2800[0].question;
  let cat2800Answer = cat2800[0].answer;
  c2800.addEventListener("click", function () {
    c2800.textContent = "";
    showQuestion(cat2800Question.slice(1, -1), cat2800Answer, "$800");
  });

  let cat21000 = c2Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat21000Question = cat21000[0].question;
  let cat21000Answer = cat21000[0].answer;
  c21000.addEventListener("click", function () {
    c21000.textContent = "";
    showQuestion(cat21000Question.slice(1, -1), cat21000Answer, "$1000");
  });

  let cat3 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c3.textContent += cat3;

  let c3Questions = rd1Questions.filter((obj) => {
    return obj.category === cat3;
  });

  let cat3200 = c3Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat3200Question = cat3200[0].question;
  let cat3200Answer = cat3200[0].answer;
  c3200.addEventListener("click", function () {
    c3200.textContent = "";
    showQuestion(cat3200Question.slice(1, -1), cat3200Answer, "$200");
  });

  let cat3400 = c3Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat3400Question = cat3400[0].question;
  let cat3400Answer = cat3400[0].answer;
  c3400.addEventListener("click", function () {
    c3400.textContent = "";
    showQuestion(cat3400Question.slice(1, -1), cat3400Answer, "$400");
  });

  let cat3600 = c3Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat3600Question = cat3600[0].question;
  let cat3600Answer = cat3600[0].answer;
  c3600.addEventListener("click", function () {
    c3600.textContent = "";
    showQuestion(cat3600Question.slice(1, -1), cat3600Answer, "$600");
  });

  let cat3800 = c3Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat3800Question = cat3800[0].question;
  let cat3800Answer = cat3800[0].answer;
  c3800.addEventListener("click", function () {
    c3800.textContent = "";
    showQuestion(cat3800Question.slice(1, -1), cat3800Answer, "$800");
  });

  let cat31000 = c3Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat31000Question = cat31000[0].question;
  let cat31000Answer = cat31000[0].answer;
  c31000.addEventListener("click", function () {
    c31000.textContent = "";
    showQuestion(cat31000Question.slice(1, -1), cat31000Answer, "$1000");
  });

  let cat4 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c4.textContent += cat4;

  let c4Questions = rd1Questions.filter((obj) => {
    return obj.category === cat4;
  });

  let cat4200 = c4Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat4200Question = cat4200[0].question;
  let cat4200Answer = cat4200[0].answer;
  c4200.addEventListener("click", function () {
    c4200.textContent = "";
    showQuestion(cat4200Question.slice(1, -1), cat4200Answer, "$200");
  });

  let cat4400 = c4Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat4400Question = cat4400[0].question;
  let cat4400Answer = cat4400[0].answer;
  c4400.addEventListener("click", function () {
    c4400.textContent = "";
    showQuestion(cat4400Question.slice(1, -1), cat4400Answer, "$400");
  });

  let cat4600 = c4Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat4600Question = cat4600[0].question;
  let cat4600Answer = cat4600[0].answer;
  c4600.addEventListener("click", function () {
    c4600.textContent = "";
    showQuestion(cat4600Question.slice(1, -1), cat4600Answer, "$600");
  });

  let cat4800 = c4Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat4800Question = cat4800[0].question;
  let cat4800Answer = cat4800[0].answer;
  c4800.addEventListener("click", function () {
    c4800.textContent = "";
    showQuestion(cat4800Question.slice(1, -1), cat4800Answer, "$800");
  });

  let cat41000 = c4Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat41000Question = cat41000[0].question;
  let cat41000Answer = cat41000[0].answer;
  c41000.addEventListener("click", function () {
    c41000.textContent = "";
    showQuestion(cat41000Question.slice(1, -1), cat41000Answer, "$1000");
  });

  let cat5 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c5.textContent += cat5;

  let c5Questions = rd1Questions.filter((obj) => {
    return obj.category === cat5;
  });

  let cat5200 = c5Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat5200Question = cat5200[0].question;
  let cat5200Answer = cat5200[0].answer;
  c5200.addEventListener("click", function () {
    c5200.textContent = "";
    showQuestion(cat5200Question.slice(1, -1), cat5200Answer, "$200");
  });

  let cat5400 = c5Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat5400Question = cat5400[0].question;
  let cat5400Answer = cat5400[0].answer;
  c5400.addEventListener("click", function () {
    c5400.textContent = "";
    showQuestion(cat5400Question.slice(1, -1), cat5400Answer, "$400");
  });

  let cat5600 = c5Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat5600Question = cat5600[0].question;
  let cat5600Answer = cat5600[0].answer;
  c5600.addEventListener("click", function () {
    c5600.textContent = "";
    showQuestion(cat5600Question.slice(1, -1), cat5600Answer, "$600");
  });

  let cat5800 = c5Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat5800Question = cat5800[0].question;
  let cat5800Answer = cat5800[0].answer;
  c5800.addEventListener("click", function () {
    c5800.textContent = "";
    showQuestion(cat5800Question.slice(1, -1), cat5800Answer, "$800");
  });

  let cat51000 = c5Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat51000Question = cat51000[0].question;
  let cat51000Answer = cat51000[0].answer;
  c51000.addEventListener("click", function () {
    c51000.textContent = "";
    showQuestion(cat51000Question.slice(1, -1), cat51000Answer, "$1000");
  });

  let cat6 =
    rd1Questions[Math.floor(Math.random() * rd1Questions.length)].category;
  c6.textContent += cat6;

  let c6Questions = rd1Questions.filter((obj) => {
    return obj.category === cat6;
  });

  let cat6200 = c6Questions.filter((obj) => {
    return obj.value === "$200";
  });
  let cat6200Question = cat6200[0].question;
  let cat6200Answer = cat6200[0].answer;
  c6200.addEventListener("click", function () {
    c6200.textContent = "";
    showQuestion(cat6200Question.slice(1, -1), cat6200Answer, "$200");
  });

  let cat6400 = c6Questions.filter((obj) => {
    return obj.value === "$400";
  });
  let cat6400Question = cat6400[0].question;
  let cat6400Answer = cat6400[0].answer;
  c6400.addEventListener("click", function () {
    c6400.textContent = "";
    showQuestion(cat6400Question.slice(1, -1), cat6400Answer, "$400");
  });

  let cat6600 = c6Questions.filter((obj) => {
    return obj.value === "$600" || obj.value === "$100";
  });
  let cat6600Question = cat6600[0].question;
  let cat6600Answer = cat6600[0].answer;
  c6600.addEventListener("click", function () {
    c6600.textContent = "";
    showQuestion(cat6600Question.slice(1, -1), cat6600Answer, "$600");
  });

  let cat6800 = c6Questions.filter((obj) => {
    return obj.value === "$800" || obj.value === "$300";
  });
  let cat6800Question = cat6800[0].question;
  let cat6800Answer = cat6800[0].answer;
  c6800.addEventListener("click", function () {
    c6800.textContent = "";
    showQuestion(cat6800Question.slice(1, -1), cat6800Answer, "$800");
  });

  let cat61000 = c6Questions.filter((obj) => {
    return obj.value === "$500" || obj.value === "$1000";
  });
  let cat61000Question = cat61000[0].question;
  let cat61000Answer = cat61000[0].answer;
  c61000.addEventListener("click", function () {
    c61000.textContent = "";
    showQuestion(cat61000Question.slice(1, -1), cat61000Answer, "$1000");
  });
});
