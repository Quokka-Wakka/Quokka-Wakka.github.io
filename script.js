document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".big-button");
  const marquee = document.querySelector(".marquee-text");
  button.addEventListener("click", function () {
    fetch("https://discord.com/api/webhooks/1141432404167364721/Jy3cIsHbSwq7HaqMxD0E7i_pWrtiy_kBlFyNtcyzi-2nnnitkFUujzO7mTwzTpuq3Lto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"content":"Kutty kutty time!"}),
    });
    button.style.display = "none";
    marquee.textContent = "And the Baby shall appear...";
  });
});
