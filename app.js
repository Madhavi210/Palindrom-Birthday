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

function dateFormates(dateEnteredByUser) {
    var dateReceived = convertDateToString(dateEnteredByUser);

    // dateFormates
    const DDMMYYYY = dateReceived.day + dateReceived.month + dateReceived.year;
    const MMDDYYYY = dateReceived.month + dateReceived.day + dateReceived.year;
    const YYYYMMDD = dateReceived.year + dateReceived.month + dateReceived.day;
    const DDMMYY = dateReceived.day + dateReceived.month + dateReceived.year.slice(-2);
    const MMDDYY = dateReceived.month + dateReceived.day + dateReceived.year.slice(-2);
    const YYMMDD = dateReceived.year.slice(-2) + dateReceived.month + dateReceived.day;
    const formatsOfDate = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
    return formatsOfDate;
}

function checkPalindromeForAllDateFormates(dateEnteredByUser) {
    var dateFormateReceived = dateFormates(dateEnteredByUser);

    let resultPalindrome = false;
    for (let i = 0; i < dateFormateReceived.length; i++) {
        if (isPalindrome(dateFormateReceived[i])) {
            return resultPalindrome = true;
            break;
        }
        else {
            return resultPalindrome;
        }
    }
}