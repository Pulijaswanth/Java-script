let a=656
let rev=0
let temp=a
let digit=0
while(a!=0)
{
    digit=a%10
    rev=rev*10+digit
    a=Math.floor(a/10)
}
console.log("The reverse of the number is "+rev)
if(rev!=temp)
{
    console.log("The given number is not a plindrome")
}
else if(rev==temp) 
{
    console.log("The given number is a plindrome")
}