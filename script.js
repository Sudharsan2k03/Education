const canvas = document.getElementById('explosion');
const context = canvas.getContext('2d');
let particles = [];

// Creates a new particle at the center of the canvas
function createExplosion() {
   for (let i = 0; i < 2000; i++) {
      particles.push({
         x: canvas.width / 2,
         y: canvas.height / 2,
         radius: Math.random() * 3 + 1,
         color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
         velocityX: Math.random() * 20 - 10,
         velocityY: Math.random() * 20 - 10
      });
   }
}

// Renders the particles onto the canvas
function draw() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   particles.forEach(particle => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.fill();
      context.closePath();
   });
}

// Updates the positions of the particles
function update() {
   particles.forEach(particle => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;
   });
}
// The main animation loop
function animate() {
   update();
   draw();
   requestAnimationFrame(animate);
}
createExplosion();
animate();