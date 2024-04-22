"use strict";

//Score elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

//buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
const score = 0;

//roll dice
btnRoll.addEventListener("click", function () {
  //Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceElement.classList.remove("hidden");
  diceElement.src = `/media/dice-${dice}.png`;

  //check for rolled 1

  if (dice !== 1) {
    score += dice;
  } else {
    //switch to next player
  }
});
