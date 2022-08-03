// Array for 7 day

let ChartsArray = [
  {
    day: "sun",
    amount: 25.48,
  },
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
];

// display 7 charts with array

const charts = document.getElementById("charts");

let EachObj = ChartsArray.map(
  (e) =>
    `<div id="charts-child">
    <div id="day"> ${e.day} </div>
    <div id="amount"> $ ${e.amount} </div>
</div>
`
);

charts.innerHTML = EachObj.join(" ");

////////////////////////////////////////////////////////////////////

// grab ChartsChild and amount for hover and height
const chartsChild = document.querySelectorAll("#charts-child");
const amount = document.querySelectorAll("#amount");

// loop for all chartsChild and amount
for (let i = 0; i < chartsChild.length; i++) {
  // Display amount when the user hover
  chartsChild[i].addEventListener("mouseover", function () {
    amount[i].style.visibility = "visible";
  });
  chartsChild[i].addEventListener("mouseleave", function () {
    amount[i].style.visibility = "hidden";
  });

  // set the charts-child height using array
  chartsChild[i].style.height = `${ChartsArray[i].amount * 3}px`;
}

// change color of today

chartsChild[new Date().getDay()].style.backgroundColor = "#76B5BB";

////////////////////////////////////////////////////////////////////

// light mode - dark mode

// grab parent of both circle
const circle = document.getElementsByClassName("circle")[0];

// grab  two circle
const black = document.getElementById("blackCircle");
const light = document.getElementById("whiteCircle");

// grab 3 part to change dark color-mode
const body = document.getElementsByTagName("body")[0];
const head = document.getElementsByClassName("head")[0];
const main = document.getElementsByClassName("main")[0];

//click event for parent circle

circle.addEventListener("click", function () {
  // Enter app with light-mode
  light.classList.add("active");

  // store dark-cicle .active class for if-else
  let dark = black.classList.contains("active");

  // if dark .active doesn't contain - run this
  if (!dark) {
    black.classList.add("active");
    light.style.backgroundColor = "transparent";

    body.classList.add("active");
    head.classList.add("active");
    main.classList.add("active");
    for (let i = 0; i < chartsChild.length; i++) {
      chartsChild[i].classList.add("active");
      amount[i].style.backgroundColor = "#44607A";
    }
  }

  //  if the dark circle contains - run this
  else {
    light.style.backgroundColor = " #dfcfcb";
    black.classList.remove("active");

    body.classList.remove("active");
    head.classList.remove("active");
    main.classList.remove("active");
    for (let i = 0; i < chartsChild.length; i++) {
      chartsChild[i].classList.remove("active");
      amount[i].style.backgroundColor = "hsl(25, 47%, 15%)";
    }
  }
});
