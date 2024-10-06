const form = document.getElementById("form");
const username = document.getElementById("username")



form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})




userName.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const userNameValue = userName.value;

  if(userNameValue === ""){
    errorInput(userName, "Preencha um username!")
  }else{
    const formItem = userName.parentElement;
    formItem.className = "formulario-content"
  }

}


function checkForm(){
  checkInputUsername();


  const formItems = form.querySelectorAll(".formulario-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "formulario-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}