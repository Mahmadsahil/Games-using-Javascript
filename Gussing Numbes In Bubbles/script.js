var clutter = "";
var timer = 30;
var hitValue;
var Score = 0;




function makeBubble() {

    for (let i = 1; i < 106; i++) {

        let RandomNo = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${RandomNo}</div>`;

    }

    document.querySelector(".penelBottom").innerHTML = clutter;
    document.querySelector(".timer").innerHTML = timer;
}

function runTimer() {

    let setTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
        }
        else {
            clearInterval(setTimer);

            document.querySelector(".penelBottom").innerHTML = "<h1>Game Over</h1>";
        }
        if(timer < 10){
            document.querySelector(".timer").style.color="red";
        }

        document.querySelector(".timer").textContent = timer;
    }, 1000)

}

function getNewHit() {
    hitValue = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hitValue;
}

function increaseScore() {
    Score += 10;
    document.querySelector(".score").textContent = Score;

}


document.querySelector(".penelBottom").addEventListener("click", (details) => {
    var ScoreVal = Number(details.target.textContent);
    if (hitValue === ScoreVal) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


makeBubble();
runTimer();
getNewHit();
