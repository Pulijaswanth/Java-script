let a=125
let rev=0
while(a!=0)
{
    digit=a%10
    rev=rev*10+digit
    a=Math.floor(a/10)
}
console.log("the reverse of the number is "+rev)