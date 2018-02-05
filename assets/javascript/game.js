var totalNumber = 0;
var numTarget = 0;
var numRed = 0;
var numWhite = 0;
var numBlue = 0;
var numPink = 0;
var totalNumber = 0;



   $("input").on("click", function () {
        numTarget = Math.floor(Math.random() * 101);
        $("#targetNumber").text(numTarget);
        
        totalNumber = 0;
        $("#totalNumber").text(totalNumber);

        numRed = 0;
        $("#redNumber").text(numRed);

        numWhite = 0;
        $("#whiteNumber").text(numWhite);

        numBlue = 0;
        $("#blueNumber").text(numBlue);

        numPink = 0;
        $("#pinkNumber").text(numPink);

   });

    $("#redGem").on("click", function () {
        var numRedRando = Math.floor(Math.random() * 25);
        numRed += numRedRando; 
        $("#redNumber").text(numRed);
        totalNumber += numRed;
        
        $("#totalNumber").text(totalNumber);
    });

    $("#whiteGem").on("click", function () {
        var numWhiteRando = Math.floor(Math.random() * 25);
        numWhite += numWhiteRando;
        $("#whiteNumber").text(numWhite);
        totalNumber += numWhite;

        $("#totalNumber").text(totalNumber);
    });

    $("#blueGem").on("click", function () {
        var numBlueRando = Math.floor(Math.random() * 25);
        numBlue += numBlueRando;
        $("#blueNumber").text(numBlue);
        totalNumber += numBlue;

        $("#totalNumber").text(totalNumber);
    });

    $("#pinkGem").on("click", function () {
        var numPinkRando = Math.floor(Math.random() * 25);
        numPink += numPinkRando;
        $("#pinkNumber").text(numPink);
        totalNumber += numPink;

        $("#totalNumber").text(totalNumber);
    });


    // logic for the game:
       if (totalNumber > numTarget) {
           console.log("loss");
       } else if (totalNumber == numTarget) {
           console.log("win");
       }