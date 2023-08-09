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



//************ Question 10 ************//

// var begDate = new Date("jan 1, 2023");
// var todaydate = new Date();

// var date = document.getElementById("date")
// date.innerHTML = "On Refrence date "+ todaydate + "<br/>"+ Math.floor((todaydate.getTime() - begDate.getTime()) / 1000) + " seconds had passed since beginning of 2023";



//************ Question 11 ************//

// var currentDate = new Date();
// var date = document.getElementById("date") ; date.innerHTML = "current date : " + currentDate;
// var oneHrAgo =  currentDate.getHours() - 1;

// ////////

// var date = new Date();
// var str = date.toString();
// var date1 = document.getElementById("date1"); date1.innerHTML ="1 hour ago,it was " + str.replace(str.slice(16,18),oneHrAgo);



//************ Question 12 ************//

// var d = new Date();
// var date = document.getElementById("date"); date.innerHTML = "cureent date " + d;
// d.setFullYear((d.getFullYear() - 100));
// var date1 = document.getElementById("date1"); date1.innerHTML = "100 years Back,it was " + d;



//************ Question 13 ************//

// var userInp = +prompt("enter your age");
// var d = new Date();
// var d1 = d.getFullYear() - userInp;
// console.log(d1);
// var date = document.getElementById("date"); date.innerHTML = "Your Age is : " + userInp;
// var date1 = document.getElementById("date1"); date1.innerHTML = " Your Birth Year is : " + d1;

