let num = 121;
let n = 0 , x;
for(let a=num; a>0; a=a){
    x = a % 10;
    a = a / 10;
    n = x + a * 10;
}
if(num == n){
	console.log("Pelindrome");
}
else{
	console.log("Not Pelindrome");
}