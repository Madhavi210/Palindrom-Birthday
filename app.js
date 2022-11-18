var inputDate = document.querySelector(".input-date");
var checkBtn = document.querySelector(".check-btn");
var outputText = document.querySelector(".result");

function reverseStr(str) {
    var listOfChars = str.split("");
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join("");
    return reversedString;
}

function isPalindrome(str) {
    var reversedText = reverseStr(str);
    return (str === reversedText);
}


function convertDateToString(dateEnteredByUser) {
    //strDate object
    var strDate = {
        day: "",
        month: "",
        year: ""
    };
    //for day