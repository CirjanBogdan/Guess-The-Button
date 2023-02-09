const randomNumber = Math.floor(Math.random() * 3);
function getRandomInt(buttonNum) {
    if (randomNumber === buttonNum) {
        document.getElementById("winOrLose").innerHTML = "YOU WIN!!!";
    } else {
        document.getElementById("winOrLose").innerHTML = "YOU LOST!";
    }
}