export default function initializedCanvas() {
  const canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let c = canvas.getContext("2d");
  // c.fillStyle = "#e6e9df";
  // c.fillRect(100, 100, 200, 200);

  // //creating a line on canvas
  // c.beginPath();
  // c.moveTo(100, 100);
  // c.lineTo(500, 500);
  // c.lineTo(500, 20);
  // c.lineTo(900, 20);
  // c.stroke();
  // c.strokeStyle = "red";
  // c.beginPath();
  // c.arc(50, 50, 50, 0, 2 * Math.PI, false);
  // c.stroke();

  let mousePos = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousemove", function (e) {
    mousePos.x = e.x;
    mousePos.y = e.y;
  });

  window.addEventListener("resize", function (e) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
  });

  let maxRadius = 20;
  let circleColors = [
    "#0DAEBF",
    "#7D80E8",
    "#E83869",
    "#56E89D",
    // "#56E89D",
    // "#FC55F5",
    // "#031A6B",
    // "#087ED9",
    // "#087CA7",
    // "#004385",
    // "#05B2DC",
    // "#874C62",
    // "#C98474",
    // "#F2D388",
    // "#A7D2CB",
    // "#ff6900",
    // "#f78da7",
    // "#00dddd",
    // "#7e61d7",
    // "#ffcc49",
    // "#00bb35",
    // "#fff"
  ];

  class Circle {
    constructor(x, y, radius, dx, dy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.minRadius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color =
        circleColors[Math.floor(Math.random() * circleColors.length)];
    }
    draw() {
      c.beginPath();
      c.arc(this.x, this.y, Math.abs(this.radius), 0, 2 * Math.PI, false);
      c.fillStyle = this.color;
      c.fill();
    }

    update() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (
        mousePos.x - this.x < 50 &&
        mousePos.x - this.x > -50 &&
        mousePos.y - this.y < 50 &&
        mousePos.y - this.y > -50
      ) {
        if (this.radius < maxRadius) {
          this.radius++;
        }
      } else {
        if (this.radius > this.minRadius) {
          this.radius--;
        }
      }
      this.draw();
    }
  }

  let initialCircles = [];
  function init() {
    initialCircles = [];
    for (let i = 0; i < 1400; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      // let x = Math.random() * 405 + innerWidth / 2 - 202;
      // let y = Math.random() * 405 + innerHeight / 2 - 202;
      let dx = (Math.random() - 0.5) * 3;
      let dy = (Math.random() - 0.5) * 3;
      let radius = Math.random() + 1;
      initialCircles.push(new Circle(x, y, radius, dx, dy));
    }
  }
  let circle = new Circle(200, 200, 50, 5, 5);
  function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);
    for (let i = 0; i < initialCircles.length; i++) {
      initialCircles[i].update();
    }
  }

  init();
  setTimeout(() => {
    animate();
  }, 3000);
}
