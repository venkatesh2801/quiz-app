document.getElementById("signup-btn").addEventListener("click",function(){
  document.getElementById("authModal").classList.remove("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
});

document.getElementById("nav-heading").addEventListener("click",function(){
document.getElementById("welcomeScreen").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".close").addEventListener("click",function(){
  document.getElementById("authModal").classList.add("hidden");
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
document.getElementById("authModal").classList.add("hidden");
})

document.getElementById("signupSubmit").addEventListener("click",function(){
document.getElementById("authModal").classList.add("hidden");
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
document.getElementById("authModal").classList.remove("hidden");
document.getElementById("loginForm").classList.remove("hidden");
document.getElementById("signupForm").classList.add("hidden");
});

document.getElementById("footer-heading").addEventListener("click",function(){
document.getElementById("welcomeScreen").scrollIntoView({ behavior: "smooth" });
})

document.getElementById("homeBtn").addEventListener("click", function() {
  // Reset quiz state
  resetQuiz();
  // Hide question screen and show welcome screen
  document.getElementById('questionScreen').classList.add('hidden');
  document.getElementById('quizSelection').classList.remove('hidden');
  document.getElementById('welcomeScreen').scrollIntoView({ behavior: "smooth" });
});
document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.reviews-container');
  const prevBtn = document.querySelector('.review-prev');
  const nextBtn = document.querySelector('.review-next');
  let isDragging = false;
  let startX, scrollLeft;

  const scrollAmount = 450;

  prevBtn.addEventListener('click', () => {
    reviewsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    reviewsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Dragging logic
  reviewsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - reviewsContainer.offsetLeft;
    scrollLeft = reviewsContainer.scrollLeft;
    reviewsContainer.classList.add('dragging');
  });

  reviewsContainer.addEventListener('mouseleave', () => {
    isDragging = true;
    reviewsContainer.classList.remove('dragging');
  });

  reviewsContainer.addEventListener('mouseup', () => {
    isDragging = true;
    reviewsContainer.classList.remove('dragging');
  });

  reviewsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - reviewsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    reviewsContainer.scrollLeft = scrollLeft - walk;
  });

  reviewsContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - reviewsContainer.offsetLeft;
    scrollLeft = reviewsContainer.scrollLeft;
  });

  reviewsContainer.addEventListener('touchend', () => {
    isDragging = false;
  });

  reviewsContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - reviewsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    reviewsContainer.scrollLeft = scrollLeft - walk;
  });
});


// Add this to your script.js or before the carousel code
const reviewsData = [
  {
    text: "This quiz platform helped me improve my knowledge significantly. The questions are well-structured and challenging!",
    name: "Sarah Johnson",
    title: "Student",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    text: "I use this daily with my students. It's an excellent tool for reinforcing concepts in a fun way.",
    name: "Michael Chen",
    title: "Teacher",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "As a lifelong learner, I appreciate the variety of topics available. The explanations are very helpful!",
    name: "Emma Rodriguez",
    title: "Researcher",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    text: "The interface is clean and intuitive. I love how I can track my progress over time.",
    name: "David Kim",
    title: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    text: "The adaptive learning feature is incredible! It adjusts to my skill level and keeps me challenged without being overwhelming.",
    name: "James Wilson",
    title: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "I've recommended this to all my study group. The collaborative features make it perfect for team learning sessions.",
    name: "Olivia Martinez",
    title: "Medical Student",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    text: "As a busy professional, I love the bite-sized quizzes I can complete during my commute. Perfect for continuous learning!",
    name: "Daniel Brown",
    title: "Financial Analyst",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    text: "The detailed progress analytics helped me identify my weak areas and focus my study time more effectively.",
    name: "Sophia Lee",
    title: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/women/82.jpg"
  }
];

// Function to generate reviews
function generateReviews() {
  const container = document.querySelector('.reviews-container');
  container.innerHTML = ''; // Clear existing
  
  reviewsData.forEach(review => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-content">
        <p class="review-text">"${review.text}"</p>
        <div class="review-author">
          <img src="${review.avatar}" alt="${review.name}" class="author-avatar">
          <div class="author-info">
            <h4 class="author-name">${review.name}</h4>
            <p class="author-title">${review.title}</p>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', generateReviews);


// Modify the showQuestion function to update button text
function showQuestion() {
  clearInterval(timer);
  timeLeft = 30;
  nextBtn.disabled = true;

  // Update next button text based on question index
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "Show Results";
  } else {
    nextBtn.textContent = "Next Question";
  }

  // ... rest of the existing showQuestion function ...
}
document.addEventListener('DOMContentLoaded', function() {
  const reviewsContainer = document.querySelector('.reviews-container');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevBtn = document.querySelector('.review-prev');
  const nextBtn = document.querySelector('.review-next');
  const dotsContainer = document.querySelector('.review-dots');
  
  let currentIndex = 0;
  
  // Create dots
  reviewCards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('review-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToReview(index);
    });
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.review-dot');
  
  // Navigation functions
  function goToReview(index) {
    currentIndex = index;
    updateReview();
  }
  
  function updateReview() {
    reviewsContainer.scrollTo({
      left: reviewCards[currentIndex].offsetLeft - reviewsContainer.offsetLeft,
      behavior: 'smooth'
    });
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Button click handlers
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviewCards.length) % reviewCards.length;
    updateReview();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewCards.length;
    updateReview();
  });
  
});


let currentQuestionIndex = 0;
let score = 0;
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
const resultScreen = document.getElementById('resultScreen');


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

    resetQuiz(); 
    startQuiz();

  } 
  catch (error) {
    console.error("Quiz loading error:", error);
    alert(`Failed to load the ${selectedTopic} quiz. Please check if the questions.json file is available and try again.`);
  }
  });
});


function resetQuiz() {
currentQuestionIndex = 0;
score = 0;
clearInterval(timer);
timeLeft = 30;
}

function startQuiz() {

document.getElementById('quizSelection').classList.add('hidden');
resultScreen.classList.add('hidden');
questionScreen.classList.remove('hidden');

showQuestion();
}

function showQuestion() {
clearInterval(timer);
timeLeft = 30;
nextBtn.disabled = true;


document.querySelectorAll('.option-btn').forEach(btn => {
  btn.style.borderColor = '';
  btn.disabled = false;
  btn.classList.remove('selected');
});

const currentQuestion = questions[currentQuestionIndex];
questionText.textContent = currentQuestion.question;
progressText.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;


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


document.querySelectorAll('.option-btn').forEach(btn => {
  btn.disabled = true;
  btn.classList.remove('selected');
});

selectedButton.classList.add('selected');
nextBtn.disabled = false;


if (selectedIndex === currentQuestion.answer) {
  score++;
  selectedButton.style.borderColor = '#4CAF50'; 
  selectedButton.style.backgroundColor = '#E8F5E8'; 
} else {
  selectedButton.style.borderColor = '#F44336';
  selectedButton.style.backgroundColor = '#FFEBEE'; 


  const correctButton = document.querySelector(`.option-btn[data-index="${currentQuestion.answer}"]`);
  correctButton.style.borderColor = '#4CAF50';
  correctButton.style.backgroundColor = '#E8F5E8';
}


if (currentQuestion.explanation) {
  setTimeout(() => {
    
  }, 1000);
}
}

function handleTimeout() {
const currentQuestion = questions[currentQuestionIndex];


document.querySelectorAll('.option-btn').forEach(btn => {
  btn.disabled = true;
});


const correctButton = document.querySelector(`.option-btn[data-index="${currentQuestion.answer}"]`);
correctButton.style.borderColor = '#4CAF50';
correctButton.style.backgroundColor = '#E8F5E8';

nextBtn.disabled = false;


console.log("Time's up! The correct answer was:", currentQuestion.options[currentQuestion.answer]);
}


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


document.getElementById('finalScore').textContent = `${score}/${questions.length} (${percentage}%)`;


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


document.addEventListener('DOMContentLoaded', function() {

const retakeBtn = document.getElementById('retakeQuiz');
if (retakeBtn) {
  retakeBtn.addEventListener('click', () => {
    resetQuiz();
    startQuiz();
  });
}

const selectNewBtn = document.getElementById('selectNewTopic');
if (selectNewBtn) {
  selectNewBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    document.getElementById('quizSelection').classList.remove('hidden');
    resetQuiz();
  });
}
});