$(document).ready(function () {

    function comppickrandomnum(arr) {

        var x = arr[Math.floor(Math.random() * arr.length)];
        compchoice = x;
        $("#compc").html(compchoice);
    } 

    function randomrock(arr) {
        for (var y = 0; y < 4; y++) {
            var a = arr[Math.floor(Math.random() * arr.length)];
            rocksvaluenum.push(a);
        }
    } 

    function rocksnum(arr) {
        for (i = 0; i < arr.length; i++) {
            $(".rocks" + (i)).attr("data-type", arr[i]);
        }
        r1 = arr[0];
        r2 = arr[1];
        r3 = arr[2];
        r4 = arr[3];
    } 

    var compc = [];

    for (var i = 25; i < 75; i++) {
        compc.push(i);
    }

    var crystals = [];

    for (var r = 1; r < 25; r++) {
        crystals.push(r);
    }

    var compchoice;
    var rocksvaluenum = [];

    var r1;
    var r2;
    var r3;
    var r4;

    var myrocksscore = 0;

    var wins = 0;
    var numofloses = 0;

    function resetscores(x) {
        rocksvaluenum = [];
        comppickrandomnum(compc);
        randomrock(crystals);
        rocksnum(rocksvaluenum);
        myrocksscore = 0;
        $("#myrocks").html(myrocksscore);
        alert(x);
    } 

    comppickrandomnum(compc); 
    randomrock(crystals); 
    rocksnum(rocksvaluenum);

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

    $("img").on("click", function () {
        if (myrocksscore == compchoice) {
            wins++;
            $("#myrocks").html(myrocksscore);
            $("#wins").html(wins);
            resetscores("Good Job, You Win!");

        }else if (myrocksscore >= compchoice) {
           numofloses++;
           $("#myrocks").html(myrocksscore);
           $("#loses").html(numofloses);
           resetscores("You lose, try again");
       
        }
    });


});