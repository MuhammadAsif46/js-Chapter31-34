//************ Question 1 ************// 

// var dateNow = new Date();
// document.getElementById("date").innerHTML = dateNow;


//************ Question 2 ************// 

// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];
// var dateNow = new Date();
// var month = dateNow.getMonth();
// var monthes = monthNames[month];
// alert("Current Month : " + monthes);


//************ Question 3 ************// 

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var dateNow = new Date();
// var toDay = dateNow.getDay();
// var nameOfToday = dayNames[toDay];
// document.getElementById("date").innerHTML = "Today is : " + nameOfToday.slice(0,3);


//************ Question 4 ************//

// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var d =  prompt("enter a day.");
// if (d.toLowerCase() === days[6] || d.toLowerCase() === days[0]){
//     document.getElementById("date").innerHTML = "It's a Fun day " + "<br>" + "Because today is : " + d;
// }else {
//     document.getElementById("date").innerHTML = "working day : "+ d;



//************ Question 5 ************//

// var date = new Date();
// var date2 = new Date("Aug 16, 2023");

// if (date < date2){
//     document.getElementById("date").innerHTML = "First fifteen days of the month";
// }else{
//     document.getElementById("date").innerHTML ="Last days of the month"; 
// }


//************ Question 6 ************//

// var today = new Date();
// document.getElementById("date").innerHTML = "Current date : " + today + "<br>" ;

// var startedSeconds = new Date("jan 1,1970");
// var milliSeconds =  today - startedSeconds ;
// document.getElementById("date1").innerHTML = "Elapsed milliseconds since january 1, 1970 : "+ milliSeconds + "<br>";

// var seconds = milliSeconds / 60;
// document.getElementById("date2").innerHTML = "Elapsed seconds since january 1, 1970 : " + seconds;



//************ Question 7 ************//

// var d = new Date();
// console.log(d.getHours());

// if(d.getHours() <= 12 ){
//     alert("It`s AM");
// }else{
//     alert("It`s PM");
// }


//************ Question 8 ************//

// var laterDate = new Date("dec 31,2023");
// var time = document.getElementById("date").innerHTML = "Later date : " + laterDate;



//************ Question 9 ************//

// var ramzan = new Date("mar 11, 2024");
// var today = new Date()

// var today1 =  ramzan.getTime() - today.getTime();
// var today2 = today1 / (1000 * 60 * 60 * 24);
// var date = document.getElementById("date").innerHTML =  Math.floor(today2)+" : days have passed since 1st Ramadan 2024" ;
