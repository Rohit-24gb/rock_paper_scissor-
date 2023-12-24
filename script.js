const gameContainer = document.querySelector(".container"),
  player = document.querySelector(".player img"),
  cpu = document.querySelector(".cpu img"),
  result = document.querySelector(".result"),
  options = document.querySelectorAll(".options_image");

options.forEach((images, index) => {
  images.addEventListener("click", (e) => {
    images.classList.add("active");

    player.src = cpu.src = "images/rock.jpg"
    result.textContent = "Wait..."

    options.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");


    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imagesrc = e.target.querySelector("img").src;
      userResult.src = imagesrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuans = ["images/rock.png", "images/paper.png", "images/scissor.png"];

      cpu.src = cpuans(randomNumber);

      let cpuvalue = ["R", "P", "S"][randomNumber];

      let uservalue = ["R", "P", "S"][index];

      let outcome = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      let outcomevalue = outcome[uservalue + cpuvalue];

      result.textContent = uservalue === cpuvalue ? "Match Draw"  :  `${outcomevalue} Won!!`;

    },2500);

  });
});