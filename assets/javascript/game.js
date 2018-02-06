var totalNumber = 0;
var numTarget = 0;
var numRed = 0;
var numWhite = 0;
var numBlue = 0;
var numPink = 0;
var totalNumber = 0;
var numRedRando = Math.floor(Math.random() * 15);
var numWhiteRando = Math.floor(Math.random() * 15);
var numBlueRando = Math.floor(Math.random() * 15);
var numPinkRando = Math.floor(Math.random() * 15);



   $("input").on("click", function () {
        numTarget = Math.floor(Math.random() * 101);
        $("#targetNumber").text(numTarget);
        
        totalNumber = 0;
        $("#totalNumber").text(totalNumber);
        

        numRed = 0;
        $("#redNumber").text(numRed);
        numRedRando = Math.floor(Math.random() * 25);

        numWhite = 0;
        $("#whiteNumber").text(numWhite);
        numWhiteRando = Math.floor(Math.random() * 25);

        numBlue = 0;
        $("#blueNumber").text(numBlue);
        numBlueRando = Math.floor(Math.random() * 25);

        numPink = 0;
        $("#pinkNumber").text(numPink);
        numPinkRando = Math.floor(Math.random() * 25);



   });

    $("#redGem").on("click", function () {
        numRed = numRedRando; 
        $("#redNumber").text(numRed);
        totalNumber += numRed;
        
        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            console.log("loss");
        } else if (totalNumber == numTarget) {
            console.log("win");
        }
    });

    $("#whiteGem").on("click", function () {
        numWhite = numWhiteRando;
        $("#whiteNumber").text(numWhite);
        totalNumber += numWhite;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            console.log("loss");
        } else if (totalNumber == numTarget) {
            console.log("win");
        }
    });

    $("#blueGem").on("click", function () {
        numBlue = numBlueRando;
        $("#blueNumber").text(numBlue);
        totalNumber += numBlue;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            console.log("loss");
        } else if (totalNumber == numTarget) {
            console.log("win");
        }
    });

    $("#pinkGem").on("click", function () {
        numPink = numPinkRando;
        $("#pinkNumber").text(numPink);
        totalNumber += numPink;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            console.log("loss");
        } else if (totalNumber == numTarget) {
            console.log("win");
        }
    });



// use the fridge principles to solidify the values and stay random for that turn, and then look up the document. ready property