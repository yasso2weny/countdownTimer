// Setting a target date.
const targetDate = new Date("2024-04-25T23:59:59");

function updateCountdown() {
// Getting the current date.
  const currentTime = new Date();
// Calculating the difference between the current and target dates 
// (in milliseconds).  
  const difference = targetDate - currentTime;

/* 
Breaking down the difference into days, hours, minutes, and seconds.
Each time unit is calculated by dividing the difference by the number of 
milliseconds in that unit.
Math.floor() is used to round down to the nearest whole number.
*/
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// Finally, we update the HTML elements with these calculated values.
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

/* 
We need to handle what happens when the countdown reaches zero. We'll add a 
condition to stop the countdown and display a message:
clearInterval(interval); stops the countdown when the target date is reached 
or passed.
We then update the timer element's text to indicate that the event has started.
*/
  if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
  }
}

/* 
To make our countdown update in real-time, we'll use setInterval to call our 
updateCountdown function every second:
setInterval() is a JavaScript function that calls a function or executes a 
code snippet repeatedly, with a fixed time delay between each call. Here, 
it's set to call updateCountdown every 1000 milliseconds (which is 1 second).
interval is a variable that stores the interval ID, which we can use to stop 
the interval later if needed.
*/
const interval = setInterval(updateCountdown, 1000);
