let displayState = "0";
let formula =document.getElementById("value");
let i = 0;
function result(value){
  if(displayState === "0"){
    displayState = "value";
    formula.value = value.value;
  }
  else if(displayState ==="total"){
    if(formula.value == 0){
      displayState = "value";
      formula.value = value.value;
    }
    else{
    displayState = "value";
    formula.value += value.value;
    }
  }
  else{
    displayState = "value";
    formula.value += value.value;
  }
}
function func(value){
  if(displayState ==="0"){
    return;
  }
  else if(displayState ==="total"){
    if(formula.value == 0){
      return;
    }
    else{
    displayState = "func";
    formula.value += value.value;
    i = 0;
    }
  }
  else if(displayState === "func"){
    formula.value = formula.value.slice(0,-1);
    formula.value += value.value;
    displayState = "func";
    i = 0;
  }
  else{
    displayState = "func";
    formula.value += value.value;
    i = 0;
  }
}
function calc(value){
  displayState = "total";
  i = 0;
  formula.value = new Function("return " + formula.value)();
}
function allclear(){
  displayState = "0";
  formula.value = 0;
  i = 0;
}
function point(value){
    if(i == 0){
    displayState = "value";
    formula.value += value.value;
    i++;
  }
 
}
function result0(value){
  if(displayState === "0" || displayState === "func"){
    return;
  }
  else if(displayState ==="total"){
    if(formula.value == 0){
      displayState = "0";
    }
    else{
    displayState = "value";
    formula.value += value.value;
    }
  }
  else{
    displayState = "value";
    formula.value += value.value;
  }
}


