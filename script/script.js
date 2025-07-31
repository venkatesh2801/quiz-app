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

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let selectedTopic = '';
let questions = [];

// DOM elements
const questionScreen = document.getElementById('questionScreen');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progress');
const timerText = document.getElementById('timer');
const resultScreen = document.getElementById('resultScreen');

// Quiz topic selection
document.querySelectorAll('.image-card').forEach(card => {
card.addEventListener('click', async() => {
  try {
    selectedTopic = card.dataset.topic;
    const response = await fetch('./questions.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    questions = data[selectedTopic] || [];

    if (questions.length === 0) {
      throw new Error(`No questions found for topic: ${selectedTopic}`);
    }

    resetQuiz(); // Reset quiz state before starting
    startQuiz();

  } catch (error) {
    console.error("Quiz loading error:", error);
    alert(`Failed to load the ${selectedTopic} quiz. Please check if the questions.json file is available and try again.`);
  }
});
});

// Quiz control functions
function resetQuiz() {
currentQuestionIndex = 0;
score = 0;
clearInterval(timer);
timeLeft = 30;
}

function startQuiz() {
// Hide other screens and show question screen
document.getElementById('quizSelection').classList.add('hidden');
resultScreen.classList.add('hidden');
questionScreen.classList.remove('hidden');

showQuestion();
}

function showQuestion() {
clearInterval(timer);
timeLeft = 30;
nextBtn.disabled = true;

// Reset button styles
document.querySelectorAll('.option-btn').forEach(btn => {
  btn.style.borderColor = '';
  btn.disabled = false;
  btn.classList.remove('selected');
});

const currentQuestion = questions[currentQuestionIndex];
questionText.textContent = currentQuestion.question;
progressText.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;

// Clear and populate options
optionsContainer.innerHTML = '';
currentQuestion.options.forEach((option, index) => {
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

function startTimer() {
timerText.textContent = `${timeLeft}s`;
timer = setInterval(() => {
  timeLeft--;
  timerText.textContent = `${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    handleTimeout();
  }
}, 1000);
}

function selectAnswer(e) {
clearInterval(timer);
const selectedButton = e.target;
const selectedIndex = parseInt(selectedButton.dataset.index);
const currentQuestion = questions[currentQuestionIndex];

// Disable all buttons to prevent multiple selections
document.querySelectorAll('.option-btn').forEach(btn => {
  btn.disabled = true;
  btn.classList.remove('selected');
});

selectedButton.classList.add('selected');
nextBtn.disabled = false;

// Check if answer is correct and provide visual feedback
if (selectedIndex === currentQuestion.answer) {
  score++;
  selectedButton.style.borderColor = '#4CAF50'; // Green for correct
  selectedButton.style.backgroundColor = '#E8F5E8'; // Light green background
} else {
  selectedButton.style.borderColor = '#F44336'; // Red for wrong
  selectedButton.style.backgroundColor = '#FFEBEE'; // Light red background

  // Highlight correct answer
  const correctButton = document.querySelector(`.option-btn[data-index="${currentQuestion.answer}"]`);
  correctButton.style.borderColor = '#4CAF50';
  correctButton.style.backgroundColor = '#E8F5E8';
}

// Show explanation if available
if (currentQuestion.explanation) {
  setTimeout(() => {
    // You could add an explanation display here if desired
  }, 1000);
}
}

function handleTimeout() {
const currentQuestion = questions[currentQuestionIndex];

// Disable all buttons and show correct answer
document.querySelectorAll('.option-btn').forEach(btn => {
  btn.disabled = true;
});

// Highlight correct answer in green
const correctButton = document.querySelector(`.option-btn[data-index="${currentQuestion.answer}"]`);
correctButton.style.borderColor = '#4CAF50';
correctButton.style.backgroundColor = '#E8F5E8';

nextBtn.disabled = false;

// You could show a timeout message here
console.log("Time's up! The correct answer was:", currentQuestion.options[currentQuestion.answer]);
}

// Next button click handler
nextBtn.addEventListener('click', () => {
currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {
  showQuestion();
} else {
  showResults();
}
});

function showResults() {
questionScreen.classList.add('hidden');
resultScreen.classList.remove('hidden');

const percentage = Math.round((score / questions.length) * 100);

// Update results display
document.getElementById('finalScore').textContent = `${score}/${questions.length} (${percentage}%)`;

// Customize message based on performance
let message = '';
if (percentage >= 90) {
  message = 'Excellent! You have mastered this topic!';
} else if (percentage >= 70) {
  message = 'Great job! You have a good understanding of this topic.';
} else if (percentage >= 50) {
  message = 'Not bad! There\'s room for improvement. Try again!';
} else {
  message = 'Keep practicing! You\'ll improve with more study.';
}

document.getElementById('scoreMessage').textContent = message;

console.log(`Quiz complete! Score: ${score}/${questions.length} (${percentage}%)`);
}

// Results screen event handlers - these need to be added after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
// Retake quiz button
const retakeBtn = document.getElementById('retakeQuiz');
if (retakeBtn) {
  retakeBtn.addEventListener('click', () => {
    resetQuiz();
    startQuiz();
  });
}

// Select new topic button
const selectNewBtn = document.getElementById('selectNewTopic');
if (selectNewBtn) {
  selectNewBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    document.getElementById('quizSelection').classList.remove('hidden');
    resetQuiz();
  });
}
});