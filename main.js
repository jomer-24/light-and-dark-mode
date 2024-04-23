let bodyElement = document.querySelector("body")
let btn = document.getElementById("btn")
let paraMsg = document.getElementById("msg")
let containerElement  = document.querySelector(".container")
let isDarkMode = false
paraMsg.innerHTML = "You are in light mode!"

btn.addEventListener("click", function(){
    if(isDarkMode){
        containerElement.style.body = "white"
        paraMsg.innerHTML = "You are in light mode!"
        bodyElement.style.backgroundColor = "white"
        paraMsg.style.color = "black"
        containerElement.style.borderColor = "black"
    }else{
        containerElement.style.body = "black"
        paraMsg.innerHTML = "You are in dark mode!"
        bodyElement.style.backgroundColor = "black"
        paraMsg.style.color = "white"
        containerElement.style.borderColor = "white"
    }

    isDarkMode = !isDarkMode
    
    bodyElement.style.transition = ".6s ease"
})



// paraMsg.innerHTML = "You are in dark mode!"
//     containerElement.style.borderColor = "white"
//     paraMsg.style.color = "white"
//     bodyElement.style.backgroundColor = "black"
//     bodyElement.style.transition = ".6s ease"