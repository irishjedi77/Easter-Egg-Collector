$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var total = 0;

    //Generates random number on page load. 

    var randNum = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(randNum);
    console.log(randNum);

    //Generates random number for each egg. 

    var eggs = ["green", "yellow", "blue", "purple"];

    var green = Math.floor(Math.random() * 11 + 1);
    var yellow = Math.floor(Math.random() * 11 + 1);
    var blue = Math.floor(Math.random() * 11 + 1);
    var purple = Math.floor(Math.random() * 11 + 1);

    $("#numberWins").text("Wins: " + wins);
    $("#numberlosses").text("Losses: " + losses);

    //Tallies wins and adds to user win total

    function winner() {
        wins++;
        $('#numberWins').text("Wins: " + wins);
        reset();
    }

    //Tallies losses and adds to user loss total

    function loser() {
        losses++;
        $('#numberLosses').text("Losses: " + losses);
        reset()
    }

    //On click events for eggs

    $("#green").on('click', function () {
        total = total + green;
        $("#green").append(total + green);
        console.log("Total: " + total);
        $("#userTotal").text(total);
            if (total == randNum){
                winner();
            }
            else if (total > randNum){
                loser();
            }


    })

    $("#yellow").on('click', function () {
        total = total + yellow;
        $("#yellow").append(total + yellow);
        console.log("Total: " + total);
        $("#userTotal").text(total);
            if (total == randNum){
                winner();
            }
            else if (total > randNum){
                loser();
            }


    })

    $("#blue").on('click', function () {
        total = total + blue;
        $("#blue").append(total + blue);
        console.log("Total: " + total);
        $("#userTotal").text(total);
            if (total == randNum){
                winner();
            }
            else if (total > randNum){
                loser();
            }


    })

    $("#purple").on('click', function () {
        total = total + purple;
        $("#purple").append(total + purple);
        console.log("Total: " + total);
        $("#userTotal").text(total);
            if (total == randNum){
                winner();
            }
            else if (total > randNum){
                loser();
            }


    })

    // Resets the game

    function reset() {
        randNum = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(randNum);
        console.log(randNum);
        green = Math.floor(Math.random() * 11 + 1);
        yellow = Math.floor(Math.random() * 11 + 1);
        blue = Math.floor(Math.random() * 11 + 1);
        purple = Math.floor(Math.random() * 11 + 1);
        total = 0;
        $('#userTotal').text(total);
    }

});
