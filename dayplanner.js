$(document).ready(function () {
  const x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //moment.js to put current date on jumbotron
  const currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
  const currentTime = moment().format("H");

  //forEach loops through x[], pushes "time" elements to new startTime[] in the "00 AM/PM" format
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

  //local storage set data to text box
  x.forEach(function (time, index) {
    const txt = `hour-${time}`;

    const localStorageData = localStorage.getItem(txt);
    const inputText = `input[data='hour-${time}']`;
    debugger;
    let input = $(inputText);
    debugger;
    input.val(localStorageData);
  });

  //click event
  $("button").on("click", function (event) {
    event.preventDefault();
    debugger;
    const textInput = $(this).siblings("input").attr("data");
    const textVal = $(this).siblings("input").val();
    localStorage.setItem(textInput, textVal);
    const lsVal = localStorage.getItem(textInput);
    $(this).siblings("input").text(lsVal);
  });

  /*const onClick = function (event) {
    const plannerEvents = JSON.parse(localStorage.getItem("plannerEvents"));
    const target = $(event.target);
    if (target.is("button")) {
      const key = target.attr("id");
      const value = target.parent().find("text").val();

      const newObject = {
        ...plannerEvents,
        [key]: value,
      };
      localStorage.setItem("plannerEvents", JSON.stringify(newObject));
    }
  };*/

  //updated width of time block span and changed btn text to "SAVE"
  // Consider using font awesome icon for save feature
  $(".input-group-text").css("width", "100px");
  $("button").text("SAVE"); // update with icon from font-awesome
});
