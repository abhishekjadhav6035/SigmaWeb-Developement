console.log("Hello");
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e =>{
   
   let rand = Math.random();

if(rand<0.33){
    e.style.backgroundColor = "Orange";

}
else if (rand<0.66 && rand>=0.33){
    e.style.backgroundColor = "pink";
}
else{
    e.style.backgroundColor = "green";
}
})

document.querySelector("#c").style.color = "pink";
document.querySelector(".E").style.backgroundColor = "black";
document.getElementsByClassName(".E");

document.getElementsByClassName(".box");
