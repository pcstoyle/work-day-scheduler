var today = dayjs();
var currentDayEl = document.getElementById("currentDay");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
  // TODO: Add code to display the current date in the header of the page.
  //continual count of current time:

  function keepTime() {
    var dateTime = dayjs().format('ddd, MMM D, YYYY h:mm:ss');
    currentDayEl.textContent = dateTime;
  };
  // setInterval(keepTime, 1000);
  var time = setInterval(() => {

    keepTime()
  }, 1000);

  keepTime()


  //TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // var timeBlock = document.querySelectorAll(".time-block"); //isolating the time block elements by ID to know which hour the program should be looking at for past/present/future 
  // var currentHour = today.format('H') //looking at current time in 24 hour format

  //find out which time block we should currently be working in/with - use the div id hour-# to decide 
  function hourColor() {
    var timeBlock = document.querySelectorAll(".time-block");
    var currentHour = parseInt(today.format('H'));

    timeBlock.forEach(function (timeBlock) {
      var timeId = parseInt(timeBlock.getAttribute("data-typeID"));
      if (currentHour > timeId) {

        timeBlock.classList.add('past')
      }
      else if (currentHour < timeId) {
        timeBlock.classList.add('future')
      }
      else {
        timeBlock.classList.add('present')
      }
    })

  }
  hourColor();




  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

  var saveBtnEl = document.querySelectorAll(".saveBtn");
  //var userText =

  function saveText(event) {
    event.preventDefault();

  };

  //addEventListener.
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?



})