// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const noun2Button = document.querySelector("#noun2");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.querySelector("#choosenNoun1");
const chosenNoun2 = document.querySelector("#choosenNoun2");
const chosenVerb = document.querySelector("#choosenVerb");
const chosenAdjective = document.querySelector("#choosenAdjective");
const chosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.querySelector("#playback");
const randomButton = document.querySelector("#random");
const story = document.querySelector("#story");
const resetButton = document.querySelector("#reset");
const studentInfo = document.querySelector("#studentInfo");

// Variables for pre-defined arrays
var noun1 = ["dog", "cat", "bird", "fish", "rabbit"];
var noun2 = ["ball", "stick", "bone", "frisbee", "toy"];
var verb = ["jumped", "ran", "swam", "flew", "hopped"];
var adjective = ["big", "small", "fast", "slow", "loud"];
var setting = ["park", "beach", "forest", "lake", "mountain"];

// Variables for count to grab array elements
var count_noun1 = 0;
var count_noun2 = 0;
var count_verb = 0;
var count_adjective = 0;
var count_setting = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
  // variable to get array element and displaying it
  chosenNoun1.textContent = noun1[count_noun1];
  chosenNoun1.style.visibility = "visible";
  count_noun1++;
  // if-else to change count setting
  if (count_noun1 >= noun1.length) {
    count_noun1 = 0;
  }
}

function verb_on_click() {
  chosenVerb.textContent = verb[count_verb];
  chosenVerb.style.visibility = "visible";
  count_verb++;
  if (count_verb >= verb.length) {
    count_verb = 0;
  }
}

function adjective_on_click() {
  chosenAdjective.textContent = adjective[count_adjective];
  count_adjective++;
  chosenAdjective.style.visibility = "visible";
  if (count_adjective >= adjective.length) {
    count_adjective = 0;
  }
}

function noun2_on_click() {
  chosenNoun2.textContent = noun2[count_noun2];
  count_noun2++;
  chosenNoun2.style.visibility = "visible";
  if (count_noun2 >= noun2.length) {
    count_noun2 = 0;
  }
}

function setting_on_click() {
  chosenSetting.textContent = setting[count_setting];
  count_setting++;
  chosenSetting.style.visibility = "visible";
  if (count_setting >= setting.length) {
    count_setting = 0;
  }
}

// concatenate the user story and display
function playback_on_click() {
  // if-else to check if user has selected all the elements
  if (
    chosenNoun1.textContent == "" ||
    chosenNoun2.textContent == "" ||
    chosenVerb.textContent == "" ||
    chosenAdjective.textContent == "" ||
    chosenSetting.textContent == ""
  ) {
    // alert if user has not selected all the elements
    alert("Please select all elements to generate a story.");
    return;
  }

  // display the concatenated story
  story.textContent =
    "The " +
    chosenAdjective.textContent +
    " " +
    chosenNoun1.textContent +
    " " +
    chosenVerb.textContent +
    " to the " +
    chosenSetting.textContent +
    " with a " +
    chosenNoun2.textContent +
    ".";
  story.style.visibility = "visible";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
  // chooses a random element from each array and displays the concatenated story
  story.textContent =
    "The " +
    adjective[Math.floor(Math.random() * adjective.length)] +
    " " +
    noun1[Math.floor(Math.random() * noun1.length)] +
    " " +
    verb[Math.floor(Math.random() * verb.length)] +
    " to the " +
    setting[Math.floor(Math.random() * setting.length)] +
    " with a " +
    noun2[Math.floor(Math.random() * noun2.length)] +
    ".";
  story.style.visibility = "visible";
}

function reset_on_click() {
  // reset all the elements
  chosenNoun1.textContent = "";
  chosenNoun2.textContent = "";
  chosenVerb.textContent = "";
  chosenAdjective.textContent = "";
  chosenSetting.textContent = "";
  story.textContent = "";
  // reset the count
  count_noun1 = 0;
  count_noun2 = 0;
  count_verb = 0;
  count_adjective = 0;
  count_setting = 0;
  // hide the p tags
  chosenNoun1.style.visibility = "hidden";
  chosenNoun2.style.visibility = "hidden";
  chosenVerb.style.visibility = "hidden";
  chosenAdjective.style.visibility = "hidden";
  chosenSetting.style.visibility = "hidden";
  story.style.visibility = "hidden";
}

function studentInfo_on_click() {
  // toggles the display of student information
  if (studentInfo.textContent == "Show Student Info") {
    studentInfo.textContent = "Michael Zelisko | 200431452";
  } else {
    studentInfo.textContent = "Show Student Info";
  }
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
noun2Button.addEventListener("click", noun2_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);

studentInfo.addEventListener("click", studentInfo_on_click);
