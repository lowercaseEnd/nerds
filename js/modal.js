"use strict"
//Call and close modal
let link = document.querySelector(".write-us-button");
let popup = document.querySelector(".modal-section");
console.log(popup);
let close = document.querySelector(".button-close");
//Modals form and fields 
let focusField = document.querySelector("[name=user-name]");
let form = document.querySelector(".write-us");
let email = document.querySelector("[name=user-email]");
let message = document.querySelector("[name=user-message]");
//check local storage support
let isStorageSupport = true;
let storage = "";

try{
  storage = localStorage.getItem("email");
} catch(err)  {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  
if(storage){
  email.value = storage;
  message.focus();
} else {
  email.focus();
}
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
  if(!focusField.value || !email.value || !message.value){
    evt.preventDefault();
    console.log("Заполните все поля");
  } else {
    if(isStorageSupport){
      localStorage.setItem("message", message.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("name", focusField.value);
    }
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(popup.classList.contains("modal-show")){
      popup.classList.remove("modal-show");
    }
  }
});