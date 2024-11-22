let a=1, b=9999999999999999999999;
let sum=a+b;

let index=0, arr=[];

while(sum>=1){
    let sodu=sum%10;
    arr[index]=sodu;
    sum=sum/10;
    index++;
}
arr.reverse();
const result = arr.join('');
console.log(result);

// ---------------------------------

let c=1, d=9999999999999999999999;
let sum2 = c+d, arr2=[];
while(sum2>=1){
    let sodu=sum2%10;
    arr2.unshift(sodu);
    sum2=sum2/10;
}

const result2 = arr2.join('');
console.log(result2);
