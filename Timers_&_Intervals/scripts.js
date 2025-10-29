// setTimeout(() => {
//     console.log("This is written after 1 sec")
// }, "5000")

// setInterval(() => {
//     console.log("This will run after every 3 seconds")
// }, "3000")

let hour1 = document.querySelector("#hour1");
let hour2 = document.querySelector(".hour2");
let blink1 = document.querySelector("#blink1");
let minute1 = document.querySelector("#minute1");
let minute2 = document.querySelector(".minute2");
let blink2 = document.querySelector("#blink2");
let second1 = document.querySelector("#second1");
let second2 = document.querySelector(".second2");
let btnPlay = document.querySelector("#play");
let btnPause = document.querySelector("#pause");
let timeDiv = document.querySelector("#timeDiv")

let hr1 = hour1.textContent;
let hr2 = hour2.textContent;
let min1 = minute1.textContent;
let min2 = minute2.textContent;
let sec1 = second1.textContent;
let sec2 = second2.textContent;

hour1.addEventListener("click", () => {
    hr1++;
    hour1.textContent = hr1;
})
hour2.addEventListener("click", () => {
    hr2++;
    hour2.textContent = hr2;
})

minute1.addEventListener("click", () => {
    min1++;
    minute1.textContent = min1;
})

minute2.addEventListener("click", () => {
    min2++;
    minute2.textContent = min2;
})
second1.addEventListener("click", () => {
    sec1++;
    second1.textContent = sec1;

})
second2.addEventListener("click", () => {
    sec2++;
    second2.textContent = sec2;

})

window.addEventListener("click", () => {
    if (sec2 > 9) {
        second2.textContent = 0;
        sec2 = 0;
    }
    else if (sec1 > 5) {
        second1.textContent = 0;
        sec1 = 0;
    }
    else if (min2 > 9) {
        minute2.textContent = 0;
        min2 = 0;
    }
    else if (min1 > 5) {
        min1 = 0;
        minute1.textContent = 0;
    }
    else if (hr2 > 9) {
        hr2 = 0;
        hour2.textContent = 0;
    }
    else if (hr1 > 2) {
        hour1.textContent = 0;
        hr1 = 0;
    } else if (hr2 > 3) {
        hour2.textContent = 0;
        hr2 = 0;
    }
})



setInterval(() => {
    blink1.classList.toggle("columnClass")
    blink2.classList.toggle("columnClass")
}, "1000")




let secondsTimer = 0;
let minuteTimer = 0;
let hourTimer = 0;
let totalTime;
let hrTime;
let remainSec;
let secTime;
let minTime;
let totalTimeSeconds;

// window.addEventListener("click", () => {
//     secondsTimer = second1.textContent + second2.textContent;
//     minuteTimer = minute1.textContent + minute2.textContent;
//     hourTimer = hour1.textContent + hour2.textContent;
//     totalTimeSeconds = parseInt(hourTimer * 60 * 60) + parseInt(minuteTimer * 60) + parseInt(secondsTimer)


//     console.log(secTime);

// })
window.addEventListener("click", () => {
    secondsTimer = second1.textContent + second2.textContent;
    minuteTimer = minute1.textContent + minute2.textContent;
    hourTimer = hour1.textContent + hour2.textContent;
    totalTimeSeconds = parseInt(hourTimer * 60 * 60) + parseInt(minuteTimer * 60) + parseInt(secondsTimer);
    // console.log(totalTimeSeconds)
})

function calculateTime() {
    // console.log("inside cal: ", totalTimeSeconds)
    hrTime = Math.floor((totalTimeSeconds / 3600));
    remainSec = (totalTimeSeconds - (hrTime * 3600));
    minTime = Math.floor((remainSec) / 60);
    secTime = remainSec - (minTime * 60);
    // console.log("Hour: ", hrTime, "\nMin: ", minTime, "\nSec: ", secTime)
}
let newTime;
let color = 0;
let blink;

function newTimer() {
    newTime = setInterval(() => {
        calculateTime();
        if (secTime > 10) {
            second1.classList.add("second1");
        }
        else if (secTime < 10) {
            second1.textContent = 0;
            second1.classList.remove("second1");
        }
        if (minTime > 10) {
            minute1.classList.add("minute1")
        }
        else if (minTime < 10) {
            minute1.textContent = 0;
            minute1.classList.remove("minute1")
        }
        if (hrTime > 10) {
            hour1.classList.add("hour1");
        }
        else if (hrTime < 10) {
            hour1.textContent = "0";
            hour1.classList.remove("hour1");

        }
        if (totalTimeSeconds < 11) {
            timeDiv.style.color = `rgba(255, 0, 0, 0.${color})`;
            color = 10 - totalTimeSeconds
        }

        totalTimeSeconds--;
        hour2.textContent = hrTime;
        minute2.textContent = minTime;
        second2.textContent = secTime;

        if (totalTimeSeconds === -1) {
            clearInterval(newTime);
            btnPause.classList.add("btnPause");
            btnPlay.classList.remove("btnPlay");
            sec2 = 0;

            timerStoppedBlink();
        }
    }, "1000")
}

let timerStoppedBlink = function () {

    console.log(totalTimeSeconds)
    let interval = setInterval(() => {
        timeDiv.classList.toggle("timeDiv");
    }, 550);

    function handleClick() {
        clearInterval(interval);
        totalTimeSeconds = 0;
        // console.log("window")
        timeDiv.classList.remove("timeDiv");
        timeDiv.style.color = "#363636"
        window.removeEventListener("click", handleClick)
    }
    window.addEventListener("click", handleClick)
}


// ! PLAY BTN
btnPlay.addEventListener("click", () => {
    btnPause.classList.remove("btnPause");
    btnPlay.classList.add("btnPlay")
    newTimer()
})
// ! PAUSE BTN
btnPause.addEventListener("click", () => {
    btnPause.classList.add("btnPause");
    btnPlay.classList.remove("btnPlay")
    clearInterval(newTime);
})
