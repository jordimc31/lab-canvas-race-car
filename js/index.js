window.onload = () => {
  class Obstacle {
    constructor() {
      this.height = 30;
      this.width = Math.floor(Math.random() * carWidth * 3 + carWidth * 3);

      this.x = Math.floor(Math.random() * canvaWindow.width - this.width);
      this.y = -30;
    }
    drawIt() {
      ctx.fillRect(this.x, this.y, this.width, carHeight / 2);
    }
  }
  document.getElementById("start-button").onclick = () => {
    startGame();

    window.addEventListener("keydown", (key) => {
      if (key.key == "ArrowRight") {
        console.log("ArrowRight");
        if (carXpos < canvaWindow.width - carWidth * 2) carXpos += speed;
      }
      if (key.key == "ArrowLeft") {
        if (carXpos > carWidth) carXpos -= speed;
        console.log("ArrowLeft");
      }
    });

    ctx.fillStyle = "Black";
  };
  let obstacleArray = [];
  const canvaWindow = document.getElementById("canvas");
  const ctx = canvaWindow.getContext("2d");
  const imgRoad = new Image();

  isClearInterval = false;
  let carWidth = 50;
  let carHeight = 100;

  let speed = 15;
  let intervalUpdate = 15;
  let intervalGame = 0;
  let frames = 0;

  carXpos = canvaWindow.width / 2 - carWidth / 2;
  carYpos = canvaWindow.height - carHeight * 1.5;
  //const imgRoad = document.createElement("img"); same code than new Image();
  imgRoad.src = "images/road.png";
  let imgCar = new Image();
  imgCar.src = "images/car.png";

  function startGame() {
    console.log("Starting game..");

    // ITERATION 1 -- Draw Road

    intervalGame = setInterval(update, intervalUpdate);

    // ITERATION 2 -- Draw Car

    // ITERATION 3 -- Car Movement

    //ITERATION 4 -- OBSTACLES
  } // startGame end

  function update() {
    frames++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgRoad, 0, 0, canvaWindow.width, canvaWindow.height);

    if (frames % 100 == 0) {
      let obst = new Obstacle();
      obstacleArray.push(obst);
    }
    //obst.updateObstacle();
    //ctx.drawImage(imgCar, 0, 0);

    ctx.drawImage(imgCar, carXpos, carYpos, carWidth, carHeight);

    obstacleArray.forEach((obst) => {
      obst.drawIt();
      obst.y += 5;

      if (
        obst.y + obst.height > carYpos &&
        obst.y < carYpos + carHeight &&
        obst.x + obst.width > carXpos &&
        obst.x < carXpos + carWidth
      ) {
        console.log("COLISIONNNN!!!!");
        clearInterval(intervalGame);
      }
      //clearInterval(intervalGame);
    });
    //ctx.fillRect(obstacleXPos, obstacleYPos, obstacleWidth, carHeight / 3);

    //let BlockSpawnTime = Math.floor(Math.random() * 5000 + 1000);
  }
};
