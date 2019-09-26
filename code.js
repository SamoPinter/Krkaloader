let step = 0;
let gameOn = true; 

//recognizes click on the specific "field"
$(function () {
    $(".field").bind("tap", tapHandler);
    $(".field").click(tapHandler);

    function tapHandler(event) {
        if (!gameOn) {
            return;
        }
        //they click in turns
        let className = "tic";
        if (step % 2 == 1)
            className = "tac";

        //tic cannot click the same field as tac has already clicked
        if ($(event.target).hasClass("tic") || $(event.target).hasClass("tac")) {
            alert("wrong move");
            return;
        }

        //nobody won if step 9 was necessary
        $(event.target).addClass(className);
        checkVictory();
        step++;
        if (step == 9) {
            gameOn = false;
            //message "nobody won"
            alert("nobody won");
        }

    }

});
//searching for s0-s7 for every click tic and tac make
function checkVictory() {
    //debugger;
    for (let i = 0; i < 8; i++) {
        let className = "s" + i;
        checkVictory2("tic", className);
        checkVictory2("tac", className);
    }
}

function checkVictory2(player, solution) {
    let fields = $("." + solution);
    let victory = true;
    $.each(fields, function (key, field) {
        if (!$(field).hasClass(player)) {
            victory = false;
            console.log(player + "," + solution);
        }
    });

    if (victory) {
        fields.addClass("victory");
        gameOn = false;
        alert("player " + player + " won!");
    }
}


function reset() {
    location.reload();
}


//function success-line() {
    //let victory = true;
    //for (let className) //za vsako rešitev posebej naj spremeni z-index doloèeni liniji
      //  z-index = 2}