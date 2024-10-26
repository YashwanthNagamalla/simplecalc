function appendToDisplay(val){
    const display = document.getElementById('display');
    display.value += val;
}
function clearDisplay(){
    const display = document.getElementById('display');
    display.value="";
}
function calculate(){
    const display=document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value="Error";        
    }
}
