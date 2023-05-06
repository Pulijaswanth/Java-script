let a=[2,6,8,17,45,100]
let largest=a[0]
for(let i=0;i<a.length;i++)
{
    if(a[i]>largest)
    {
        largest=a[i]
    }
}
console.log("the smallest element in the array is "+largest)
let smallest=a[0]
for(let i=0;i<a.length;i++)
{
    if(a[i]<smallest)
    {
        smallest=a[i]
    }
}
console.log("the smallest element in the array is "+smallest)
