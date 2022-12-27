
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")
let passwordLength = 15

function generatePassword(){
    let passwordOne = ""
    // Loop through characters and log 15 random items from the array
    for(let i = 0; i <= passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndex]
    }
   
    passwordEl1.value = passwordOne

    let passwordTwo = ""
    // Loop through characters and log 15 random items from the array
    for(let i = 0; i <= passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomIndex]
    }
   
    passwordEl2.value = passwordTwo
}

function copyPasswordOne() {
    var copyText = document.getElementById("password-el1");
    copyText.select();
    document.execCommand("copy");  
}

function copyPasswordTwo() {
    var copyText = document.getElementById("password-el2");
    copyText.select();
    document.execCommand("copy");  
}