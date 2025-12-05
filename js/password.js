//funcion para obtener la longitud de la pass segun lo que el usuario haya puesto.
//funcion para generar aleatoriedad. garantiza al menos una mayus, minus, num y simb. rellena el resto de la contraseña con pool. mezclar los caracteres para que no siempre empiece con los cuatro tipos garantizads
//funcion que mezcla la contraseña generada 
//funcion para manejar el botón y DOM
//contraseña visible o invisible

const lengthPass = document.getElementById("lengthPass");
const buttonPass = document.getElementById("buttonPass");
const resultPass = document.getElementById("resultPass");

const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()-_=+"
const pool = capitalLetter + lowerCase + number + symbol

function userPass() {
    const lengthValue = parseInt(lengthPass.value)
    if (lengthValue < 12) {
        alert ("La contraseña es demasiado corta")
    } else if (lengthValue > 50) {
        alert ("La contraseña es demasiado larga")
    } else {
        return lengthValue
    }
}

function randomCharacters(lengthValue) {
    const randomCapitalLetter = Math.floor(Math.random() * capitalLetter.length)
    const randomLowerCase = Math.floor(Math.random() * lowerCase.length)
    const randomNumber = Math.floor(Math.random() * number.length)
    const randomSymbol = Math.floor(Math.random() * symbol.length)
    const mandatoryCharacters = capitalLetter[randomCapitalLetter] + lowerCase[randomLowerCase] + number[randomNumber] + symbol[randomSymbol]
    const finalPassword = lengthValue - 4
    let password = mandatoryCharacters
    for (let i = 0; i < finalPassword; i++) {
        const randomPool = Math.floor(Math.random() * pool.length)
        password += pool[randomPool]
    }
    return password
}

function shufflePass(password) {
    const arr = password.split("")
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.join("")
}

buttonPass.addEventListener("click", () => {
    const length = userPass()
    const pass = randomCharacters(length)
    const mixFinal = shufflePass(pass)
    resultPass.value = mixFinal
})

function toggle() {
    resultPass.type = resultPass.type === "password" ? "text" : "password"
}

const toggleBtn = document.getElementById("togglePass")
const eyeIcon = document.getElementById("closedEyeIcon")

toggleBtn.addEventListener("click", () => {
    if (resultPass.type === "password") {
        resultPass.type = "text"
        eyeIcon.src = "./assets/visiblePass.png"
        eyeIcon.alt = "opened eye"
    } else {
        resultPass.type = "password"
        eyeIcon.src = "./assets/noVisiblePass.png"
        eyeIcon.alt = "closed eye"
    }
})