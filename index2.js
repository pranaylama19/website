/*let myName = "Pranay"
let message = "You have new notifications, "
let messageToUser = message + myName
console.log(messageToUser)


console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")


let welcomeEl = document.getElementById("welcome-el")
let greeting = "Good morning "
let name = "Pranay"
welcomeEl.innerText = greeting + name

*/

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
}

function subtract() {
    let difference = num1 - num2
    sumEl.textContent = "Difference: " + difference
}


function divide(){
    let quotient = num1 / num2
    sumEl.textContent = "Quotient: " + quotient
}

function multiply() {
    let product = num1 * num2
    sumEl.textContent = "Product: " + product
}