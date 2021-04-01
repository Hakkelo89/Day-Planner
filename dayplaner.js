$(document).ready(function () {
  const x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //moment.js to put current date on jumbotron
  const currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
  const currentTime = moment().format("H");

  //forEach loops through x[], pushes "time" elements to new startTime[] in the " AM/PM" format
  x.forEach(function (time, index) {
    const startTime = [];
    startTime.push(moment().hour(time).format("h A"));

    // console.log(parseInt(startTime));
    // console.log(moment().hour(time).format("h"));

    //Declare new const(s) and initialize to new elements
    const newDiv = $("<div>");
    const newSpan = $("<span>");
    const newTextInput = $("<input>");
    const newBtn = $("<button>");