document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".big-button");
  const marquee = document.querySelector(".marquee-text");
  button.addEventListener("click", function () {
    fetch("https://maker.ifttt.com/trigger/kutty_kutty/with/key/dcAC4G14mWOjZpmkrhrB63");
    button.style.display = "none";
    marquee.textContent = "And the Baby shall appear...";
  });
});
