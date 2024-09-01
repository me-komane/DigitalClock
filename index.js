function updateTime(){
    let time = new Date();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let fullDate = fixDate(day, date, month, year);
    let hour = time.getHours().toString().padStart(2, 0);
    let min = time.getMinutes().toString().padStart(2, 0);
    let sec = time.getSeconds().toString().padStart(2, 0);

    document.getElementById("time").textContent = hour + ":" + min + ":" + sec;
    //console.log(hour + ":" + min + ":" + sec);
    document.getElementById("date").textContent = (fullDate[0] + ", " + fullDate[1] + " " + fullDate[2] + " " + fullDate[3]);
}

function fixDate(day, date, month, year){
    if (day >= 3){
        if (day >= 5){
            if (day === 5){ day = "Fri"; }
            else{ day = "Sat"; }
        }
        else{
            if (day === 3){ day = "Wed"; }
            else{ day = "Thu"; }
        }
    }
    else{
        if (day === 0){ day = "Sun"; }
        else if (day === 1){ day = "Mon"; }
        else{ day = "Tue"; }
    }

    month++;
    if (month >= 7){
        if (month >= 10){
            if (month === 10){ month = "Oct"; }
            else if (month === 11){ month = "Nov"; }
            else{ month = "Dec"; }
        }
        else if (month === 7){ month = "Jul"; }
        else if (month === 8){ month = "Aug"; }
        else{ month = "Sep"; }
    }
    else{
        if (month >= 4){
            if (month === 4){ month = "Apr"; }
            else if (month === 5){ month = "May"; }
            else{ month = "June"; }
        }
        else if (month === 1){ month = "Jan"; }
        else if (month === 2){ month = "Feb"; }
        else{ month = "Mar"; }
    }
    return [day, date, month, year];
}
setInterval(updateTime, 1000);