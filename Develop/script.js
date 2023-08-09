var today = dayjs();
var currentDayEl = document.getElementById("currentDay");


$(function () {

  function keepTime() {
    var dateTime = dayjs().format('ddd, MMM D, YYYY h:mm:ss');
    currentDayEl.textContent = dateTime;
  };
  var time = setInterval(() => {
    keepTime()
  }, 1000);

  keepTime()

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



  var saveButton = document.querySelector(".saveBtn");
  var userInput = document.querySelector(".description");
  var hourNine = document.getElementById("hour-9");
  var hourTen = document.getElementById("hour-10").textarea;
  var hourEleven = document.getElementById("hour-11").textarea;
  var hourTwelve = document.getElementById("hour-12").textarea;
  var hourThirteen = document.getElementById("hour-13").textarea;
  var hourFourteen = document.getElementById("hour-14").textarea;
  var hourFifteen = document.getElementById("hour-15").textarea;
  var hourSixteen = document.getElementById("hour-16").textarea;
  var hourSeventeen = document.getElementById("hour-17").textarea;
  // var timeBlock = document.querySelectorAll(".time-block")
  // var toDoNow = hour.id

  // saveLocalInput();
  

  function saveLocalInput() {

    //local storge key name for each hour
    hourNine.textContent = localStorage.getItem("hourNine");
    hourTen = localStorage.getItem("hourTen");
    hourEleven.textContent = localStorage.getItem("hourEleven");
    hourTwelve.textContent = localStorage.getItem("hourTwelve");
    hourThirteen.textContent = localStorage.getItem("hourThirteen");
    hourFourteen.textContent = localStorage.getItem("hourFourteen");
    hourFifteen.textContent = localStorage.getItem("hourFifteen");
    hourSixteen.textContent = localStorage.getItem("hourSixteen");
    hourSeventeen.textContent = localStorage.getItem("hourSeventeen");

  };

  saveButton.addEventListener("click", function (event) {
    event.preventDefault();
console.log("test")
    var nine = document.getElementById("hour-9").value;
    var ten = document.getElementById("hour-10").textarea;
    var eleven = document.getElementById("hour-11").textarea;
    var twelve = document.getElementById("hour-12").textarea;
    var thirteen = document.getElementById("hour-13").textarea;
    var fourteen = document.getElementById("hour-14").textarea;
    var fifteen = document.getElementById("hour-15").textarea;
    var sixteen = document.getElementById("hour-16").textarea;
    var seventeen = document.getElementById("hour-17").textarea;


    localStorage.setItem("hourNine", nine);
    localStorage.setItem("hourTen", ten);
    localStorage.setItem("hourEleven", eleven);
    localStorage.setItem("hourTwelve", twelve);
    localStorage.setItem("hourThirteen", thirteen);
    localStorage.setItem("hourFourteen", fourteen);
    localStorage.setItem("hourFifteen", fifteen);
    localStorage.setItem("hourSixteen", sixteen);
    localStorage.setItem("hourSeventeen", seventeen);
    saveLocalInput();
  })

});

