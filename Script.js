// Getting Access To Container With Query Selector 
var container = document.querySelector('#container');
// Created Some Variables For H3 WIth (DOM)
var yearelement = document.createElement('h3');
var dateElement = document.createElement('h3');
var dayElement = document.createElement('h3');
var monthElement = document.createElement('h3');
// Date Variable
var datevar = new Date();
// Days Array For Days New Date();
var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thurday" , "Friday" , "Saturday"];
// Months Array For Months New Date();
var months = ["January" , "Febrauary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

// Variables ID's 
yearelement.id = "YearElement";
dateElement.id = "DateElement";
dayElement.id = "DayElement";
monthElement.id = "MonthElement";

// Variables InnerHTML Properties
yearelement.innerHTML ="Year : " + "  " + datevar.getFullYear();
dateElement.innerHTML = " Date : " + "  " + datevar.getDate();
dayElement.innerHTML = "Day : " + "  " + days[datevar.getUTCDay()];
monthElement.innerHTML = "Month : " + "  " + months[datevar.getUTCMonth()];

// Appending All Childs With One Attribute Of Append(valuetoappend);
container.append(yearelement , dateElement , dayElement , monthElement);

// Clock
function currentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var clockelement = document.getElementById('clock');
    var session = "AM";

    if(hour == 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

//  Set Timeout For Clock 
    var time = setTimeout(function() {
        currentTime();
    }, 1000)
//  Setting On HTML
    clockelement.innerText = `${hour} : ${minute} : ${seconds} ${session}`;

}

currentTime();
