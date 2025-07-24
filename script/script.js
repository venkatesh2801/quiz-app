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
  document.getElementById("quizSelection").scrollIntoView({ behavior: "smooth" });
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

