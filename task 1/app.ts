/**
 * Created by Rida on 8/24/2015.
 */

function submit_Operation_plus(){
   let num1 : number =  Number(document.getElementById('number1')['value']);
  let  num2 : number  = Number(document.getElementById('number2')['value']);
 let result : number  =  num1 + num2;
    alert('your ist entered digit : '+ num1 + '\n \n your 2nd entered digit :' + num2 + " \n \n your result : " + result);
}
function submit_Operation_minus(){
 let   num1 : number  =  Number(document.getElementById('number1')['value']);
   let num2 : number  = Number(document.getElementById('number2')['value']);
   let result : number  =  num1 - num2;
    alert('your ist entered digit : '+ num1 + '\n \n your 2nd entered digit :' + num2 + "\n \n your result : " + result);
}
function submit_Operation_multiply(){
 let   num1  : number =  Number(document.getElementById('number1')['value']);
 let   num2 : number  = Number(document.getElementById('number2')['value']);
 let   result : number  =  num1 * num2;
    alert('your ist entered digit : '+ num1 + '\n \n your 2nd entered digit :' + num2  + "\n \n your result : " + result);
}
function submit_Operation_divide(){
 let   num1 : number  =  Number(document.getElementById('number1')['value']);
 let   num2 : number  = Number(document.getElementById('number2')['value']);
 let   result : number  =  num1 / num2;
    alert('your ist entered digit : '+ num1 + '\n \n your 2nd entered digit :' + num2  + "\n \n your result : " + result);
}
