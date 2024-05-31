console.log("Abhi is very handsome");
console.log("Rohan is a handsome boy");
setTimeout(() => {
    console.log("I am inside settiout ")
}, 2000);
console.log("The End");

const fn = () => {
  console.log("Nothing")
}


const callback = (arg, fn) => {
  console.log(arg)
  fn();
}


const loadScript = (src, callback) => {
  let sc = document.createElement("Script");
  sc.src = src;
  sc.onload = callback("Abhishek", fn);
  document.head.append(sc);
  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

