let a = "naman"
let reversestring = ""
console.log("The entered string is "+a)
for (let i = a.length - 1; i >= 0; i--) {
  reversestring += a[i];
}
console.log("The reverse of the string is "+reversestring) 
if(reversestring==a)
{
    console.log("It is a palindrome")
}
else 
{
    console.log("It is not a palindrome")
}
