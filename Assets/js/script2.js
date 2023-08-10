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



  var saveButton = document.querySelectorAll(".saveBtn");

//   var userInput = document.querySelector(".description");
  var hourNine = document.getElementById("nine");
  var hourTen = document.getElementById("ten");
  var hourEleven = document.getElementById("eleven");
  var hourTwelve = document.getElementById("twelve");
  var hourThirteen = document.getElementById("thirteen");
  var hourFourteen = document.getElementById("fourteen");
  var hourFifteen = document.getElementById("fifteen");
  var hourSixteen = document.getElementById("sixteen");
  var hourSeventeen = document.getElementById("seventeen");
  // var timeBlock = document.querySelectorAll(".time-block")
  // var toDoNow = hour.id

  // saveLocalInput();
  

  function saveLocalInput() {

    //local storge key name for each hour
    var nineO = localStorage.getItem("hourNine");
    var tenO = localStorage.getItem("hourTen");
    var elevenO = localStorage.getItem("hourEleven");
    var twelveO = localStorage.getItem("hourTwelve");
    var thriteenO = localStorage.getItem("hourThirteen");
    var fourteenO = localStorage.getItem("hourFourteen");
    var fifteenO = localStorage.getItem("hourFifteen");
    var sixteenO = localStorage.getItem("hourSixteen");
    var seventeenO = localStorage.getItem("hourSeventeen");


    hourNine.textContent = nineO;
    hourTen.textContent= tenO;
    hourEleven.textContent = elevenO;
    hourTwelve.textContent = twelveO
    hourThirteen.textContent = thriteenO
    hourFourteen.textContent = fourteenO
    hourFifteen.textContent = fifteenO
    hourSixteen.textContent = sixteenO
    hourSeventeen.textContent = seventeenO
  };

  for (let i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener('click', saveLocal);
  }


  function saveLocal() {
  // saveButton.addEventListener("click", function (event) {
    // event.preventDefault();
    // console.log("test")
    // var nine = document.getElementById("hour-9").value;
    var nine = hourNine.value;
    var ten = hourTen.value;
    var eleven = hourEleven.value;
    var twelve = hourTwelve.value;
    var thirteen = hourThirteen.value;
    var fourteen = hourFourteen.value;
    var fifteen = hourFifteen.value;
    var sixteen = hourSixteen.value;
    var seventeen = hourSeventeen.value;

    // console.log(nine)
    // console.log(ten)
    // console.log(eleven)


    localStorage.setItem("hourNine", nine);
    localStorage.setItem("hourTen", ten);
    localStorage.setItem("hourEleven", eleven);
    localStorage.setItem("hourTwelve", twelve);
    localStorage.setItem("hourThirteen", thirteen);
    localStorage.setItem("hourFourteen", fourteen);
    localStorage.setItem("hourFifteen", fifteen);
    localStorage.setItem("hourSixteen", sixteen);
    localStorage.setItem("hourSeventeen", seventeen);
    saveLocal();
  // })
  }

});