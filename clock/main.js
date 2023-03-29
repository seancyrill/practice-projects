
const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")

setInterval(setCLock, 1000)

function setCLock() { 
    const time = new Date
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    hourHand.style.setProperty("rotate", ((hour +(minute/60))/12)*360 + "deg")
    minuteHand.style.setProperty("rotate", (minute/60)*360 + "deg")
    secondHand.style.setProperty("rotate", (second/60)*360 + "deg")
}

setCLock()