document.getElementById("signup-btn").addEventListener("click",function(){
    document.getElementById("authModal").style.display = "flex";

    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    
});

document.querySelector(".close").addEventListener("click",function(){

    document.getElementById("authModal").style.display = "none";
    
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