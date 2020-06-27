function myFunctionTest(expected, found){
    if(expected ===found){
        return "TEST SUCCEEDED";
    } else{
        return "TEST FAILED. Expected" + expected + "found " + found;
    }
}

//Question 1
function max(a,b){
    if(a>b) {
        return a;}
    else {
        return b;}
}
console.log("Expected output of max(20, 10) is 20 " + myFunctionTest(20, max(20, 10)))
//Question 2
function maxOfThree(a, b, c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
// check: 
console.log("Expected output of maxOfThree(5, 4, 44) is 44 " + myFunctionTest(44, maxOfThree(5, 4, 44)))
//Question #3
function isVowel(chr){
    return chr ==='a' || chr ==='e' || chr==='i' || chr==='o' || chr==='u';     
}
console.log("Expected output of isVowel('a') is true " + myFunctionTest(true, isVowel('a')));
//Question 4??
function sum(numbers){
    let total =0;
    for(let i=0; i<numbers.length; i++){
        total+=numbers[i];
    }
    return total;
}
function multply(numbers){
    let product =1;
    for(let i=0; i<numbers.length; i++){
        product*=numbers[i];
    }
    return product;
}
console.log("expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("expected output of sum([1,2,3,4]) is 24 " + myFunctionTest(24, multply([1, 2, 3, 4])))

//Question 5
function rev(string){
    if(string==="") return "";
    else return rev(string.substr(1))+string.charAt(0);
}
//check: 
console.log("Expected ouput of rev(jag testar) is ratset gaj " + myFunctionTest("ratset gaj", rev("jag testar")));
//Question 6 ??

//Question 7
var filterLongWords = function(array, i){
    var newArray = [];
    array.forEach(function(element){
        if(element.length>i){
            newArray.push(element)
        };
    });
    return newArray;
}
console.log("Expected output of filterLongWords([Guta, Fida, is, stuent]) is Guta, Fida, is, student " + 
myFunctionTest(["Guta", "student"], filterLongWords(["Guta", "is", "student"], 3)));
console.log(filterLongWords([" Guta", "is", "student "], 3));
