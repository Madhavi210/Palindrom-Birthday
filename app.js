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
    if (dateEnteredByUser.day < 10) {
        strDate.day = "0" + dateEnteredByUser.day;
    }
    else {
        strDate.day = dateEnteredByUser.day.toString();
    }
    //for month
    if (dateEnteredByUser.month < 10) {
        strDate.month = "0" + dateEnteredByUser.month;
    }
    else {
        strDate.month = dateEnteredByUser.month.toString();
    }
    //for year
    strDate.year = dateEnteredByUser.year.toString();

    return strDate;

}