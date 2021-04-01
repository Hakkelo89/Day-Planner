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

    //appends new elements to container, parent or sibling respectively. Adds B/S classes to new elements
    $(".container").append(newDiv);
    $(".container").addClass("mb-5");

    newDiv.addClass("time-block input-group input-group-prepend");
    newDiv.attr("data-val", index);
    newDiv.append(newSpan);
    newSpan.addClass("input-group-text");
    newSpan.addClass("start-time");
    newSpan.text(startTime);
    newDiv.append(newTextInput);
    newTextInput.attr("type", "text");
    newTextInput.attr("data", "hour-" + moment().hour(time).format("H"));
    newTextInput.addClass("form-control");
    newDiv.append(newBtn);
    newBtn.addClass("btn btn-outline-secondary");

    /* END OF FOREACH()*/
  });

  //coloring text box
  $.each($(".time-block input[type='text']"), function (i, v) {
    let input = $(v);
    var hour = moment().hour;
    var inputHour = parseInt(input.attr("data").split("-")[1]);
    if (9 <= hour && 17 >= hour) {
      if (hour > inputHour) {
        input.css("background-color", "red");
      } else if (hour == inputHour) {
        input.css("background-color", "white");
        input.focus();
      } else {
        input.css("background-color", "green");
      }
    } else {
      input.css("background-color", "red");
    }
  });