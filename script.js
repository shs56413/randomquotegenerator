/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// creates an array of objects to store quote related information
var quotes = [
  {
      quote: "Learn as if you will live forever, live like you will die tomorrow.",
      source: "Mahatma Gandhi",
      category: "#learning"
  },
  {
      quote: "May you always remember to enjoy the road, especially when it's a hard one.",
      source: "Kobe Bryant",
      category: "#motivation"
  },
  {
      quote: "It always seem impossible until it's done.",
      source: "Nelson Mandela",
      category: "#motivation"
  },
  {
      quote: "You are never too old to set another goal or to dream a new dream.",
      source: "Les Brown",
      category: "#motivation"
  },
  {
      quote: "Education is the most powerful weapon which you can use to change the world.",
      source: "Nelson Mandela",
      category: "#learning"
  },
  {
      quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
      source: "Amanda Gorman",
      category: "#motivation"
  },
  {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      source: "Abraham Lincoln",
      category: "#learning"
  },
  {
      quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
      source: "Lupita Nyong'o",
      category: "#learning"
  },
  {
      quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      source: "Thomas Edison",
      category: "#learning"
  },
  {
      quote: "Champions keep playing until they get it right.",
      source: "Billie Jean King",
      category: "#success"
  },
  {
      quote: "Self-education is, I firmly believe, the only kind of education there is.",
      source: "Isaac Asimov",
      category: "#learning"
  },
  {
      quote: "Do not pray for an easy life, pray for the strength to endure a difficult one.",
      source: "Bruce Lee",
      year: '2018',
      category: "#learning"
  },
  {
      quote: "The journey of a thousand miles begins with one step.",
      source: "Lao Tzu",
      category: "#learning"
  },
  {
      quote: "If you can’t change your fate, change your attitude.",
      source: "Amy Tan",
      year: '2018',
      category: "#learning"
  },
  {
      quote: "In a time of destruction, create something.",
      source: "Maxine Hong Kingston",
      category: "#success"
  },
  {
      quote: "I find that the harder I work, the more luck I seem to have.",
      source: "Thomas Jefferson",
      category: "#success"
  },
  {
      quote: "No Notes. You speak from deep in your heart. It’s easy.",
      source: "Manny Pacquiao",
      category: "#learning"
  },
  {
      quote: "Life is what happens when you're busy making other plans.",
      source: "John Lennon",
      category: "#learning"
  },
  {
      quote: "Always remember that you are absolutely unique. Just like everyone else.",
      source: "Margaret Mead",
      category: "#learning"
  },
  {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      source: "Robert Louis Stevenson",
      category: "#learning"
  },
  {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      source: "Eleanor Roosevelt",
      category: "#learning"
  }
];
// creates an array of objects to store background and button color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
var colors = [
  {
      background: "#ff2e63", //pink
      button: "#252a34"
  },
  {
      background: "#00adb5", //teal
      button: "#393e46"
  },
  {
      background: "#f38181", //salmon
      button: "#625772"
  },
  {
      background: "#6639a6", //purple
      button: "#521262"
  },
  {
      background: "#3f72af", //blue
      button: "#112d4e"
  },
  {
      background: "#f95959", //orange
      button: "#455d7a"
  },
  {
      background: "#a3de83", //lt green
      button: "#2eb872"
  },
  {
      background: "#118df0", //bright blue
      button: "#0e2f56"
  },
  {
      background: "#ff5722", //bright orange
      button: "#393e46"
  },
  {
      background: "#3fc1c9", //aqua
      button: "#fc5185"
  }
];
let timer;

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}

// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
  timer = setInterval(printQuote, 10000);
}

// clears the setInterval method from the timer variable
function clearTimer() {
  clearInterval(timer);
}

function printQuote() {
  // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
  // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
  // creates the html variable and uses the currentQuote variable along with key values to build a string
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;
  // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
  if ("citation" in currentQuote) {
      html += "<span class='citation'> " + currentQuote.citation + "</span>";
  }
  // tests to see if the date property is present in the currentQuote and if so, adds it to the string
  if ("date" in currentQuote) {
      html += "<span class='year'> " + currentQuote.date + "</span>";
  }
  html += "<span class='category'> " + currentQuote.category + "</span>";

  // writes the info from the html variable to the div with the quote-box id
  // uses the currentColor variable to change the background color
  // uses the currentColor variable to change the button color
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
  document.getElementById("loadQuote").style.background = currentColor.button;

  // clears any previous timers that might be running and starts a new one
  clearTimer();
  startTimer();
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);