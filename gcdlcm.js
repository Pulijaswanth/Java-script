let a=10
let b=20
let gcd=0
let lcm=0
let temp1=a
let temp2=b
a=parseInt(a)
b=parseInt(b)
while(a!=b)
{
    if(a>b)
    {
        a=a-b
    }
    else
    {
      b=b-a
    }
}
gcd=a
console.log(`The gcd of the element is ${gcd}`)
lcm=(temp1*temp2)/gcd
console.log(`The lcm of the elements is ${lcm}`)