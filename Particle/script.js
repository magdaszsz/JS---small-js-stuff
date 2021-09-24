const canvas = document.querySelector("#canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particlesArray;

class Particle {
  constructor(x, y, directionX, directionY, size, colour) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.colour = colour;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }

  move() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    let size = (Math.random() + 0.01) * 20;
    let x = Math.random() * (window.innerWidth - size * 2);
    let y = Math.random() * (window.innerHeight - size * 2);
    let directionX = Math.random() * 0.4 - 0.2;
    let directionY = Math.random() * 0.4 - 0.2;
    let colour = "white";

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, colour)
    );
  }
}

function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].move();
  }
}

init();
animation();

function resize() {
  init();
  animation();
}

let opdate;
window.addEventListener("resize", () => {
  clearTimeout(update);
  update = setTimeout(resize, 100);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
});
