document.getElementById("signup-btn").addEventListener("click",function(){
    document.getElementById("authModal").style.display = "flex";

    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    
});
document.getElementById("nav-heading").addEventListener("click",function(){
  document.getElementById("welcomeScreen").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".close").addEventListener("click",function(){
    document.getElementById("authModal").style.display = "none";
});
document.getElementById("signup-btn-main").addEventListener("click",function(){
  document.getElementById("quizSelection").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("showSignup").addEventListener("click", () => {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", () => {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
});
document.getElementById("loginSubmit").addEventListener("click",function(){
  document.getElementById("authModal").style.display="none";
})
document.getElementById("signupSubmit").addEventListener("click",function(){
  document.getElementById("authModal").style.display="none";
})

document.getElementById("startLearning").addEventListener("click", function() {
  document.getElementById("quizSelection").scrollIntoView({ behavior: "smooth" });
}); 
document.getElementById("howItWorks").addEventListener("click", function() {
  document.getElementById("how-it-works").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactUs").addEventListener("click",function(){
  document.getElementById("footer-container").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("loginSignup").addEventListener("click", function() {
  document.getElementById("authModal").style.display = "flex";
});

document.getElementById("footer-heading").addEventListener("click",function(){
  document.getElementById("welcomeScreen").scrollIntoView({ behavior: "smooth" });
})

let currentQuestionIndex =0;
let score =0;
let timer;
let timeLeft = 30;
let selectedTopic = '';
let questions = [];


const questionScreen = document.getElementById('questionScreen');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progress');
const timerText = document.getElementById('timer');

//1.load questions when topic is selected

document.querySelectorAll('.image-card').forEach(card =>{
  card.addEventListener('click',async() => {
    try {
      selectedTopic = card.dataset.topic;
      const response = await fetch('./questions.json');
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      questions = data[selectedTopic] || [];
      
      if (questions.length === 0) {
        throw new Error("No questions found for this topic");
      }
      
      startQuiz();
    } catch (error) {
      console.error("Quiz loading error:", error);
      alert("Failed to load the quiz. Please try again later.");
    }
  });
});


//2. Quiz control functions

function startQuiz(){
  document.getElementById('quizSelection').classList.add('hidden');
  questionScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion(){
  clearInterval(timer);
  timeLeft=30;
  nextBtn.disabled = true;

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  progressText.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option,index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.dataset.index = index;
    li.appendChild(button);
    optionsContainer.appendChild(li);

    button.addEventListener('click', selectAnswer);
  });

  startTimer();


}

function startTimer(){
  timerText.textContent = `${timeLeft}s`;
  timer = setInterval(() =>{
    timeLeft--;
    timerText.textContent = `${timeLeft}s`;

    if (timeLeft<=0){
      clearInterval(timer);
      handleTimeout();

    }
  },1000);
}

function selectAnswer(e){
  clearInterval(timer);
  const selectedButton = e.target;
  const selectedIndex = parseInt(selectedButton.dataset.index);

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedButton.classList.add('selected');

  nextBtn.disabled=false;

  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    selectedButton.style.borderColor = '#4CAF50'; // Green for correct
  } else {
    selectedButton.style.borderColor = '#F44336'; // Red for wrong
    // Highlight correct answer
    document.querySelector(`.option-btn[data-index="${currentQuestion.answer}"]`)
      .style.borderColor = '#4CAF50';
  }
}

function handleTimeout(){
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;

  });
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showResults();
  }
});

function showResults(){
  questionScreen.classList.add('hidden');
  console.log(`Quiz complete! Score:${score}/${questions.length}`);
}
