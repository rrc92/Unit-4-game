$(document).ready(function () {

//random number to generate in computers choice side "Milky Way" 
    function comppickrandomnum(arr) {

        var x = arr[Math.floor(Math.random() * arr.length)];
        compchoice = x;
        $("#compc").html(compchoice);
    } 

// random number to generate in each rock
    function randomrock(arr) {
        for (var y = 0; y < 4; y++) {
            var a = arr[Math.floor(Math.random() * arr.length)];
            rocksvaluenum.push(a);
        }
    } 
    // each rock's variable
    var r1;
    var r2;
    var r3;
    var r4;

    // value assignment to each rock 
    function rocksnum(arr) {
        for (i = 0; i < arr.length; i++) {
            $(".rocks" + (i)).attr("data-type", arr[i]);
        }
        r1 = arr[0];
        r2 = arr[1];
        r3 = arr[2];
        r4 = arr[3];
    } 
    //Milky Way's range of numbers and pushed to empty array
    var compc = [];

    for (var i = 25; i < 75; i++) {
        compc.push(i);
    }
//Spacerocks range of numbers and pushed to empty array
    var spacerocks = [];

    for (var r = 1; r < 25; r++) {
        spacerocks.push(r);
    }
//main variables
    var compchoice;
    var rocksvaluenum = [];
    var myrocksscore = 0;
     $("#myrocks").html(myrocksscore);
    var wins = 0;
    var numofloses = 0;

//reset scores function
    function resetscores(x) {
        rocksvaluenum = [];
        comppickrandomnum(compc);
        randomrock(spacerocks);
        rocksnum(rocksvaluenum);
        myrocksscore = 0;
        $("#myrocks").html(myrocksscore);
        alert(x);
    } 
//others
    comppickrandomnum(compc); 
    randomrock(spacerocks); 
    rocksnum(rocksvaluenum);
//on click events plus functions
    $("#rock1").on("click", function () {
        myrocksscore += r1;
        $("#myrocks").html(myrocksscore);
    });

    $("#rock2").on("click", function () {
        myrocksscore += r2;
        $("#myrocks").html(myrocksscore);
    });

    $("#rock3").on("click", function () {
        myrocksscore += r3;
        $("#myrocks").html(myrocksscore);
    });

    $("#rock4").on("click", function () {
        myrocksscore += r4;
        $("#myrocks").html(myrocksscore);
    });
//conditional statements
    $(document).on("click", function () {
        if (myrocksscore == compchoice) {
            wins++;
            $("#myrocks").html(myrocksscore);
            $("#wins").html(wins);
            setTimeout(function() {  resetscores("Good Job, You Win!") }, 200);
        }
        else if (myrocksscore >= compchoice) {
            numofloses++;
            $("#myrocks").html(myrocksscore);
            $("#loses").html(numofloses);
            setTimeout(function() {resetscores("You lose, try again") }, 200);
 
        }
    });

});