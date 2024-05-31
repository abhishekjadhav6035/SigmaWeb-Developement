function createCard(title, cName, views, monthsOld, duration, thumbnail){
    //Finish this function

    let viewsStr = viewCount(views)

    let html = ` <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsul">${duration}
        </div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName}  .${viewsStr} views . ${monthsOld} Months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
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

createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodeWithAbhi", 5600000, 7, "31:22","https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA");
// createCard("Introdkuction","CodeWithAbhi", 560000, 7, "31:22")
