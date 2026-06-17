const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    

        // Calculate angles
    const secondDeg = (seconds * 6);                    // 360/60 = 6
    const minuteDeg = (minutes * 6) + (seconds * 0.1); // 6 + small movement
    const hourDeg = (hours * 30) + (minutes * 0.5);    // 30 + small movement

        // Rotate the hands
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    //digital display
    digital = document.getElementById("digital-time")
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    digital.innerHTML = hours+":"+m+":"+s
    // Date display
    let mon = month+1
    
    date.innerHTML= day+"/"+ mon +"/" + year
    }

    // Update every second
    setInterval(setClock, 1000);

    // Run once immediately
    setClock();

//custom theme function    
function changebg(){
    const setting = document.getElementById("setting")
    setting.classList.toggle("hide")
}

//apply color function

function applyColor() {
    const bgColor = document.getElementById("bgColor").value
    const hourColor = document.getElementById("hourColor").value
    const minColor = document.getElementById("minColor").value
    const secColor = document.getElementById("secColor").value
    
    secondHand.style.background = secColor
    minuteHand.style.background = minColor
    hourHand.style.background = hourColor
    body.style.background = bgColor
    
    setting.classList.toggle("hide")
}
