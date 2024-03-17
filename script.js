let inputBox = document.querySelector("#password");
let alertBox = document.querySelector(".spanField");

inputBox.addEventListener("input",() =>{

   let input = inputBox.value;
   if(input.length < 8) {
      alertBox.innerText = "password is too short";
      alertBox.style.color = "red";
   } else if(input.search(/[A-Z]/) ==-1){

      alertBox.innerText = "password is missing uppercase letters";
      alertBox.style.color = "red";
   } else if(input.search(/[0-9]/) ==-1){
      alertBox.innerText = "password is missing numeric letters ";
      alertBox.style.color = "red";
   }else{
      alertBox.innerText = "password is Strong....!";
      alertBox.style.color = "green";
   }
});