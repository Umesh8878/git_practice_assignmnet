let num = 121;

let string = num.toString();
let rev="";

    for(let i = string.length-1; i >= 0; i--){
        rev+=string[i];
    }
    if(rev==string){
        console.log("Yes");
    }
    else{
        console.log("No");
    }