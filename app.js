const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

async function loadQuestions() {
    const response = await fetch('./questions.json');
    const questions = await response.json();

    let categoryOne = questions[Math.floor(Math.random() * questions.length)].category
    c1.textContent += categoryOne
    let categoryTwo = questions[Math.floor(Math.random() * questions.length)].category
    c2.textContent += categoryTwo
    let categoryThree = questions[Math.floor(Math.random() * questions.length)].category
    c3.textContent += categoryThree
    let categoryFour = questions[Math.floor(Math.random() * questions.length)].category
    c4.textContent += categoryFour
    let categoryFive = questions[Math.floor(Math.random() * questions.length)].category
    c5.textContent += categoryFive
    let categorySix = questions[Math.floor(Math.random() * questions.length)].category
    c6.textContent += categorySix




  }
  loadQuestions();
