var velocityX = 3;
var velocityY = 1;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById("floater");

// YOUR CODE
// ----------------
var time = 35;
var edge = 520;

setInterval(function () {
    positionX += velocityX;
    ball.style.left = positionX + "px";
    positionY += velocityY;
    ball.style.top = positionY + "px";
    //  use additive inverse of velocity at an edge to change direction
    if (positionX <= 0 || positionX >= window.innerWidth - 165) {
        velocityX *= -1;
        console.log("VX is: " + velocityX + "  VY is: " + velocityY);
    }
    if (positionY <= 0 || positionY >= window.innerHeight - 155) {
        velocityY *= -1;
        console.log("VX is: " + velocityX + "  VY is: " + velocityY);
    }
}, time);
