function createCard(title , cName, views, monthsOld, duration, thumbnail){
    //finish this function
    const card = document.createElement("div");
    card.classList.add("card");
    
    const first = document.createElement("div");
    first.classList.add("first");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img");

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = thumbnail;
    img.alt = " ";

    const time = document.createElement("div");
    time.classList.add("time");
    time.textContent = duration;

    imgContainer.appendChild(img);
    imgContainer.appendChild(time);


    const second = document.createElement("div");
    second.classList.add("second");

    const Title = document.createElement("div");
    Title.classList.add("title");
    Title.textContent = title


    const info = document.createElement("div");
    info.classList.add("info");

    const li1 = document.createElement("li");
    li1.textContent = cName;

    const li2 = document.createElement("li");
    li2.textContent = viewCount(views);

    const li3 = document.createElement("li");
    li3.textContent = monthsOld + " Month old";
   
    info.appendChild(li1);
    info.appendChild(li2);
    info.appendChild(li3);

    second.appendChild(Title);
    second.appendChild(info);

    card.appendChild(first);
    card.appendChild(second);

    document.getElementById("container").appendChild(card);



    

    first.appendChild(imgContainer);



    


}

function viewCount(views){
    if(views<1000){
        return views;
    }
    if(views >= 1000 && views < 1000000){
        let v=views/1000;
        return v+"K";
    }
    else if (views >=1000000 && views < 1000000000) {
        let v = views/1000000;
        return v+"M";  
    }
    else if (views >= 1000000000 && views < 1000000000000) {
        let v = views/1000000000;
        return v+"B";
    }else{
        let v = views/1000000000000;
        return v+"T";
    }

}


createCard('Sample Title', 'Channel Name', '100000', '6', '2:30', 'product-jpeg.jpg');

// createCard("Introdkuction","CodeWithAbhi", 560000, 7, "31:22")