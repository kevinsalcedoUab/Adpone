function counter(string){
    var counterArr = [];
    var countL = [];
    var nL = 0;
    for(var i = 0; i < string.length; i++){
        string.charAt(i);
        if(i == string.length - 1){//Antes de llegar al final
            countL.push(string.charAt(i))
            countL.push(nL);
            counterArr.push(countL);
        }else{
            if(string.charAt(i) != string.charAt(i+1)){
                countL.push(string.charAt(i))
                countL.push(nL);
                counterArr.push(countL);
                countL = [];
                nL = 0;
            }
            nL++;
        }
    }
    return counterArr;
}

var a = "aaaabbbbbccaaa";
b = counter(a);
console.log(b);