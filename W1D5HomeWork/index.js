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
function sum(){}

//Question 5
function rev(string){
    if(string==="") return "";
    else return rev(string.substr(1))+string.charAt(0);
}
//check: 
console.log("Expected ouput of rev(jag testar) is ratset gaj" +myFunctionTest("ratset gaj", rev("jag testar")));
//Question 6
function findLongestWord(arr){
    let longestWord = arr.split('').sort(function(a, b){
        return b.length-a.length;
    })
    return longestWord.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
