var totalNumber = 0;
var numTarget = Math.floor(Math.random() * 101) + 40;
var numRed = 0;
var numWhite = 0;
var numBlue = 0;
var numPink = 0;
var totalNumber = 0;
var numRedRando = 0;
var numWhiteRando = 0;
var numBlueRando = 0;
var numPinkRando = 0;
var losses = 0;
var wins = 0;



        function resetGame(){
            numTarget = Math.floor(Math.random() * 101) + 40;
            $("#targetNumber").text(numTarget);

            totalNumber = 0;
            $("#totalNumber").text(totalNumber);


            numRed = 0;
            $("#redNumber").text(numRed);
            numRedRando = Math.floor(Math.random() * 15) + 1;

            numWhite = 0;
            $("#whiteNumber").text(numWhite);
            numWhiteRando = Math.floor(Math.random() * 15) + 1;

            numBlue = 0;
            $("#blueNumber").text(numBlue);
            numBlueRando = Math.floor(Math.random() * 15) + 1;

            numPink = 0;
            $("#pinkNumber").text(numPink);
            numPinkRando = Math.floor(Math.random() * 15) + 1;
        };


    $("input").on("click", function () {
        numTarget = Math.floor(Math.random() * 101) + 40;
        $("#targetNumber").text(numTarget);
        
        totalNumber = 0;
        $("#totalNumber").text(totalNumber);
        

        numRed = 0;
        $("#redNumber").text(numRed);
        numRedRando = Math.floor(Math.random() * 15) + 1;

        numWhite = 0;
        $("#whiteNumber").text(numWhite);
        numWhiteRando = Math.floor(Math.random() * 15) + 1;

        numBlue = 0;
        $("#blueNumber").text(numBlue);
        numBlueRando = Math.floor(Math.random() * 15) + 1;

        numPink = 0;
        $("#pinkNumber").text(numPink);
        numPinkRando = Math.floor(Math.random() * 15) + 1;

    });

    $("#redGem").on("click", function () {
        numRed = numRedRando; 
        $("#redNumber").text(numRed);
        totalNumber += numRed;
        
        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            losses++
            $("#losses").text(losses);
            console.log("loss");
            resetGame();
        } else if (totalNumber == numTarget) {
            wins++
            $("#wins").text(wins);
            console.log("win");
            resetGame();
        }
    });

    $("#whiteGem").on("click", function () {
        numWhite = numWhiteRando;
        $("#whiteNumber").text(numWhite);
        totalNumber += numWhite;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            losses++
            $("#losses").text(losses);
            console.log("loss");
            resetGame();
        } else if (totalNumber == numTarget) {
            wins++
            $("#wins").text(wins);
            console.log("win");
            resetGame();
        }
    });

    $("#blueGem").on("click", function () {
        numBlue = numBlueRando;
        $("#blueNumber").text(numBlue);
        totalNumber += numBlue;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            losses++
            $("#losses").text(losses);
            console.log("loss");
            resetGame();
        } else if (totalNumber == numTarget) {
            wins++
            $("#wins").text(wins);
            console.log("win");
            resetGame();
        }
    });

    $("#pinkGem").on("click", function () {
        numPink = numPinkRando;
        $("#pinkNumber").text(numPink);
        totalNumber += numPink;

        $("#totalNumber").text(totalNumber);

        // logic for the game:
        if (totalNumber > numTarget) {
            losses++
            $("#losses").text(losses);
            console.log("loss");
            resetGame();
        } else if (totalNumber == numTarget) {
            wins++
            $("#wins").text(wins);
            console.log("win");
            resetGame();
        }
    });



