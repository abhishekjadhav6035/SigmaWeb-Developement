let div = document.createElement("div");
div.innerHTML = "I have been incerted by Abhishek Jadhav <b> Abhi Bhi...</b>"
div.setAttribute("class", "created");
document.querySelector(".container").append(div)

let d2 = document.createElement("div");
d2.innerHTML = "<b>Abhi Bhi..</b>"
d2.setAttribute("class","red");
document.querySelector(".container").prepend(d2);

document.querySelector(".box").setAttribute("class","flex box");

const element = document.querySelector(".container");

console.log(element.attributes);
console.log(element.getAttribute("color"));
document.querySelector(".container").setAttribute("class","container flex");
document.querySelector(".container").classList.remove("flex");

// document.querySelector(".box")
// document
// document.querySelector

// document.querySelector(".box")

// document.querySelector(".box").innerHTML

// document.querySelector(".container").innerText


// document.querySelector(".box").outerHTML


// document.querySelector(".box").tagName

// document.querySelector(".container").nodeName


// document.querySelector(".container").hidden


// document.querySelector(".container").hidden = true


// document.querySelector(".container").innerText = " Hey I am Abhishek Jadhav "
