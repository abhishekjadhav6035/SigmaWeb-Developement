console.log("I am running the js")
let button = document.getElementById("btn");
//List of all mouse events
button.addEventListener("dblclick",()=>{
    //alert("I was clicked");
    document.querySelector(".box").innerHTML = "<b> Hey you were clicked bro..</b> Enjoy you click!"
})