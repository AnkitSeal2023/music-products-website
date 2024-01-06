function startCountdown() {
  var countDownDate = new Date("Jan 20, 2024 00:00:00").getTime();
  var x = setInterval(function() {
    // Countdown Timer
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " : " + hours + " : "  + minutes + " : " + seconds;

    // Clear the interval when the countdown reaches zero
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "It's here!";
    }
  }, 1000);
}
startCountdown();