window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("Starting game..");

    // ITERATION 1 -- Draw Road

    let canvaWindow = document.getElementById("canvas").getContext("2d");
    let imgRoad = new Image();
    imgRoad.src = "images/road.png";
    imgRoad.onload = function () {
      canvaWindow.drawImage(imgRoad, 0, 0);
    };
    // ITERATION 2 -- Draw Car

    let imgCar = new Image();
    imgCar.src = "images/car.png";

    imgCar.onload = function () {
      let carWidth = 25;
      let carHeight = carWidth * 2;
      canvaWindow.drawImage(
        imgCar,
        imgRoad.width / 2 - carWidth / 2,
        imgRoad.height - carHeight,
        carWidth,
        carHeight
      );

      let randInt = Math.floor(Math.random() * (5000 - 1000) + 1000);
    };

    // ITERATION 3 -- Car Movement

    window.addEventListener("keydown", (key) => {
      if (key.key == "ArrowRight") {
        console.log("ArrowRight");
      }
      if (key.key == "ArrowLeft") {
        console.log("ArrowLeft");
      }
    });

    //ITERATION 4 -- OBSTACLES
  } // startGame end
};
