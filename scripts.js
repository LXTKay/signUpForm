"use strict"

const passwordfield = document.querySelector("#pw");
const passwordfieldRepeat = document.querySelector("#pwrepeat");
const errorMsg = document.querySelector(".error")

function checkSameness(){
  if(passwordfield.value !== passwordfieldRepeat.value){
    passwordfieldRepeat.setCustomValidity("Password doesn't match yet!");
    errorMsg.style.visibility = "visible";
  } else {
    passwordfieldRepeat.setCustomValidity("");
    errorMsg.style.visibility = "hidden";
  };
};

passwordfieldRepeat.addEventListener("input", checkSameness);