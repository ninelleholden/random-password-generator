const passwordBox = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];


  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  

  passwordBox.value = password;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", createPassword);

function copyPassword(){
  if(navigator.clipboard && navigator.clipboard.writeText){
     navigator.clipboard.writeText(passwordBox.value)
      .then(() => {
        console.log ("Пароль скопирован!");
        // Например, изменить иконку на "готово"
        copyIcon.src = "images/check.png";
        // Через 2 секунды вернуть иконку обратно
        setTimeout(() => {
          copyIcon.src = "images/copy.png";
        }, 50);
      })
      .catch(err => {
        console.error("Ошибка копирования:", err);
      });
    }
  }


copyIcon.addEventListener("click", copyPassword);



