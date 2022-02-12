function myFunction() {
    // user need to input annual income
    var income = document.getElementById("income").value;
    // user need to input current age
    var currentAge = document.getElementById("cage").value; 
    // user need to input expected retirement age
    var RetirementAge=document.getElementById("rage").value; 
    // user need to input expected inflation rate
    var inflationrate = document.getElementById("rate").value;
    // user need to iput percentage of the annual income needed during their retirement
    var rincome = document.getElementById("rincome").value;


    cost = (1+inflationrate/100)^(RetirementAge-currentAge)*(income)*(rincome/100)

    document.getElementById("estimate").innerHTML = "Estimated money needed for retirment = "+ cost;

  }

  function clear_inputs(){
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
    	input.value=' ' ///this emptys the inputs
    }
  }





