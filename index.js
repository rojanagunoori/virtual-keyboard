const onSubmitFormEl = document.getElementById("onSubmitForm");
const usernameIdEl=document.getElementById("usernameId")
const mobilenoEl=document.getElementById("mobileno")
const formParaEl=document.getElementById("formPara")
const virtualKeyboardUsernameEl=document.getElementById("virtualKeyboardUsername")
const virtualKeyboardMobileNoEl=document.getElementById("virtualKeyboardMobileNo")

const usernameNoBtnEl=document.getElementById("usernameNoBtn")
const  mobileNoBtnEl=document.getElementById("mobileNoBtn")



usernameNoBtnEl.addEventListener("click",()=>{
    formParaEl.textContent=""
   
    virtualKeyboardUsernameEl.style.display = virtualKeyboardUsernameEl.style.display === "none" ? "block" : "none";
    formParaEl.textContent=""
  
}) 
    



mobileNoBtnEl.addEventListener("click",()=>{
    formParaEl.textContent=""
   
    virtualKeyboardMobileNoEl.style.display = virtualKeyboardMobileNoEl.style.display === "none" ? "block" : "none";
    formParaEl.textContent=""
   
})
function addChar(char) {
    formParaEl.textContent=""
  
    if (capsLockEnabled) {
        usernameIdEl.value += char.toUpperCase();
    } else {
        usernameIdEl.value += char.toLowerCase();
    }
}

function addChar1(char) {
    formParaEl.textContent=""
    mobilenoEl.value += char;
}


function backspace() {
    formParaEl.textContent=""
    
    usernameIdEl.value = usernameIdEl.value.slice(0, -1);
}
function backspace1() {
    formParaEl.textContent=""
    
    mobilenoEl.value =mobilenoEl.value.slice(0, -1);
}
let capsLockEnabled = false;
function toggleCapsLock() {
    formParaEl.textContent=""
    capsLockEnabled = !capsLockEnabled;
     addChar(char) 
        
    
}

function displayFun(){
    if(usernameIdEl.value===""){
         formParaEl.textContent="Please fill the user details"
         
    }else if(mobilenoEl.value===""){
        formParaEl.textContent="Please fill the user mobile no"
    }
    else{
         formParaEl.textContent="Form submitted"
     }
}

onSubmitFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    displayFun()

});
