const display=document.getElementById("display");

function appendToDisplay(input){
   if(display.value=='0' || display.value=="Error!!")
   {
    display.value=input;
   }
   else
   {
    display.value+=input;
   }
    
}
function clearDispalay(){
    display.value="0";
    display.focus();
}
function delLast(){
    let current=display.value;
    let newvalue=current.slice(0,-1);
    display.value=newvalue;
}
function calculate()
{
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error!!";
    }

}
function calculateper()
{
 display.value=display.value/100;   

}