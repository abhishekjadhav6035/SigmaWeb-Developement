let message = document.getElementsByClassName(".message");
console.log(message);

function sleep (ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function randomTime() {
    let randomDelay = Math.floor(Math.random() * 7000);
    await sleep(randomDelay);
    console.log(`Slept for ${randomDelay} milliseconds`);
}

async function startBlinking(message) {
    let dots = 0;
    let intervalId = setInterval(() => {
      dots = (dots + 1) % 4;
      let dotsText = '.'.repeat(dots);
      document.querySelector(".message").innerHTML = `${message}${dotsText}`;
    },500)

    await randomTime();
    
    clearInterval(intervalId);
}

async function main() {
    console.log("Initializing Hacking");
    await startBlinking("Initializing Hacking"); // Adjust the duration as needed
    console.log("Reading your files");
    await startBlinking("Reading your files"); // Adjust the duration as needed

    console.log("Password files Detected");
    await startBlinking("Password files Detected", randomTime()); // Adjust the duration as needed
    console.log("cleaning up");
    await startBlinking("cleaning up"); 

    document.querySelector(".message").innerHTML = "Work done"

    // Add any additional steps here if needed
}

main();