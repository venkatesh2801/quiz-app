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
    selectedTopic = card.dataset.topic;

    const response = await fetch('./questions.json');
    const data = await resoponse.json();
    questions = data[selectedTopic];

    startQuiz();
  });
});
