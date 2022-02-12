document.getElementById("btnSub").addEventListener("click", processInputpassengers);
function processInputpassengers()
{
    var adultsval =  parseInt(adults.value);
    console.log(adultsval);
    var childrensval =  parseInt(children.value);
    console.log(childrensval);
    if (adultsval == 0 && childrensval != 0)
    {
        window.alert("Are you sure? There are only children on this trip")
        // create a function that does not allow user to move on if adult val == 0 and children != 0 
    }

    if (adultsval >=0 && childrensval !=0) 
    {
        // output text that talks about medication, food stops, bathroom stops (may need to purchase something to use!) 

    }
    
}

