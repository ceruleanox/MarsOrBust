calcDistanceBtn = document.getElementById("calc-distance");
calcDistanceAgainBtn = document.getElementById("calc-distance-again");


calcDistanceLocal = function() {
    alert("calcLocal");
    document.getElementById("moving-input-request").style.visibility="hidden";
    document.getElementById("moving-input-result").style.visibility="visible";
}

calcDistanceAgain = function() {
    document.getElementById("moving-input-request").style.visibility="visible";
    document.getElementById("moving-input-result").style.visibility="hidden";
}


calcDistanceBtn.addEventListener("click", calcDistanceLocal);
calcDistanceAgainBtn.addEventListener("click", calcDistanceAgain);