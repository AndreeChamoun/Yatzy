let $1par = $(".1-par");
let $2par = $(".2-par");
let $triss = $(".triss")
let $fyrtal = $(".fyrtal")
let $kåk = $(".kåk")
let $yatzy = $(".yatzy")


function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var die6 = document.getElementById("die6");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var d6 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    die6.innerHTML = d6;
}
function resetBtn() {
document.getElementById('die1').textContent = "0"
document.getElementById('die2').textContent = "0"
document.getElementById('die3').textContent = "0"
document.getElementById('die4').textContent = "0"
document.getElementById('die5').textContent = "0"
document.getElementById('die6').textContent = "0"
}



// resetBtn = getElementById('reset')
