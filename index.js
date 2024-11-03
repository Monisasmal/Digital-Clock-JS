const getTime = document.getElementById("digitalTime");

function digitalClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now. getSeconds();
    let ampm = "AM";

    if(hours > 12){
        hours = hours - 12;
        ampm = "PM";
    }

    hours  = hours  < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    getTime.innerText = `${hours} : ${minutes} : ${second} ${ampm}`;

    setInterval(digitalClock,1000);
}

function updategreeting(){
    const hours = new Date().getHours();
    const greetingElement = document.getElementById("gretting");
    if (hours < 12) greetingElement.textContent = "🌅Good Morning🌄";
    else if (hours < 18) greetingElement.textContent = " 🌞Good Afternoon🕛";
    else greetingElement.textContent = "🌝Good Evening🌚";
}

digitalClock();
updategreeting();