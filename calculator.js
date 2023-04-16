function calculate(){
    let a=parseFloat(document.getElementById("num1").value)
    let b=parseFloat(document.getElementById("num2").value)
    let op=document.getElementById("op").value
    let c=0
   // alert(a+" "+b)
   //console.log(typeof(a));
   if(a==""){
    alert("Enter the first number")
    return
   }
   else if(isNaN(a)){
    alert("First operand must be a number")
    return
   }
   if(b==""){
    alert("Enter the second number")
    return
   }
   else if(isNaN(b)){
    alert("second operand must be a number")
    return
   }
    a=parseFloat(a)
    b=parseFloat(b)
   switch(op){
    case '+':
        c=a+b;
        break;
    case '-':
        c=a-b;
        break;
     case '*':
         c=a*b;
         break;
    case '/':
     c=a/b;
     break; 
    case 'pow':
     c=Math.pow(a,b);
         break;
        default:
        break; 
   }
   let res ="Result ="+c
   document.getElementById('res').innerHTML=res
}