/*document.getElementById("enterBtn").addEventListener("click", checkCode);

function checkCode() {
  const code = document.getElementById("codeInput").value.trim().toLowerCase();
  const message = document.getElementById("message");

  if (code === "myheart") {
    window.location.href = "ask.html";
  } else {
    message.textContent = "Oops 😅 wrong code! Try again 💌";
  }
} */

  // === Page 1: Secret Code Logic ===
const enterBtn = document.getElementById("enterBtn");
if (enterBtn) {
  enterBtn.addEventListener("click", checkCode);
}

function checkCode() {
  const code = document.getElementById("codeInput").value.trim().toLowerCase();
  const message = document.getElementById("message");

  if (code === "akum") {
    window.location.href = "ask.html";
  } else {
    message.textContent = "Oops 😅 wrong code! Try again 💌 <br>Hint: What is your name saved as on my phone";
  }
}

// === Page 2: Ask Page Logic ===
/* const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    startConfetti();

    // After 3 seconds, go to love.html
    setTimeout(() => {
      window.location.href = "love.html";
    }, 3000);
  });
}

if (noBtn) {
  noBtn.addEventListener("click", () => {
    window.location.href = "promise.html";
  });
}

// === Simple Confetti Animation ===
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 0.5 + 0.3,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((c) => {
      c.y += c.d * 5;
      if (c.y > canvas.height) c.y = 0 - c.r;
    });
  }

  draw();
} */

  // === Page 2: Ask Page Logic ===
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    startCelebration();

    // After 3 seconds, go to love.html
    setTimeout(() => {
      window.location.href = "love.html";
    }, 3000);
  });
}

if (noBtn) {
  noBtn.addEventListener("click", () => {
    window.location.href = "promise.html";
  });
}

// === Combined Celebration Animation (Confetti + Balloons + Hearts) ===
function startCelebration() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const shapes = [];

  const colors = ["#ff69b4", "#ff1493", "#ff4500", "#ffb6c1", "#fffacd", "#87cefa"];

  // Generate Confetti, Balloons, and Hearts
  for (let i = 0; i < 150; i++) {
    const type = Math.random() < 0.4 ? "confetti" : Math.random() < 0.7 ? "balloon" : "heart";
    shapes.push({
      type,
      x: Math.random() * canvas.width,
      y: type === "balloon" ? canvas.height + Math.random() * 200 : Math.random() * canvas.height - canvas.height,
      size: Math.random() * 10 + 8,
      speed: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      swing: Math.random() * 0.05 + 0.02,
      angle: Math.random() * Math.PI * 2
    });
  }

  function drawHeart(x, y, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function drawBalloon(x, y, size, color) {
    ctx.beginPath();
    ctx.ellipse(x, y, size * 0.6, size, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    // String
    ctx.beginPath();
    ctx.moveTo(x, y + size);
    ctx.lineTo(x, y + size + 20);
    ctx.strokeStyle = "#888";
    ctx.stroke();
  }

  function drawConfetti(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size / 2);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach((s) => {
      if (s.type === "confetti") drawConfetti(s.x, s.y, s.size, s.color);
      else if (s.type === "balloon") drawBalloon(s.x, s.y, s.size, s.color);
      else drawHeart(s.x, s.y, s.size, s.color);
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    shapes.forEach((s) => {
      s.angle += s.swing;
      if (s.type === "balloon") {
        s.y -= s.speed; // Float upward
        s.x += Math.sin(s.angle) * 1.2;
        if (s.y + s.size < 0) s.y = canvas.height + s.size;
      } else {
        s.y += s.speed * 3; // Fall down
        s.x += Math.sin(s.angle) * 2;
        if (s.y > canvas.height + 20) s.y = -20;
      }
    });
  }

  draw();
}

// === Page 3: Love Page Logic ===
const letterCard = document.getElementById("letterCard");
const musicCard = document.getElementById("musicCard");
const galleryCard = document.getElementById("galleryCard");

if (letterCard) {
  letterCard.addEventListener("click", () => {
    window.location.href = "letter.html";
  });
}

if (musicCard) {
  musicCard.addEventListener("click", () => {
    window.location.href = "music.html";
  });
}

if (galleryCard) {
  galleryCard.addEventListener("click", () => {
    window.location.href = "gallery.html";
  });
}

// === Page 4: Love Letter Typewriter Effect ===
const letterText = document.getElementById("letterText");

if (letterText) {
  const message = `
From the very first day we spoke, till this very moment, you’ve been a constant source of happiness in my life. 
Every moment with you feels special — your presence alone brings peace to my heart.

When I was sick, I never expected you to stay, yet you did. 
You took care of me, stayed by my side, and made me feel loved in a way I didn’t think was possible. 
Even when everything seemed to fall apart, you were there — patient, gentle, and trying to calm me down. 
The way you pay attention to me, the little things you do, the way you listen… it means so much more than I can ever explain.

I want to do the same for you. I want to love you deeply, care for you endlessly, and cherish you every single day. 
I promise to always do my best to make you happy and be there for you through everything — the good and the bad. 
When we have issues, I’ll make sure we face them together and solve them peacefully.

You mean so much to me, and I want what’s best for you — always. 
I’ll keep working on myself, growing, and becoming a better version of me, not just for my sake but for us.

With all my love,
— Ekene 💕
  `;

  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      letterText.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 10); // typing speed
    }
  }

  // slight delay before typing starts
  setTimeout(typeWriter, 1000);
}
function goBackToLovePage() {
    window.location.href = 'love.html';
}

// === Page 5: Music ===
function goBackToLovePage() {
  window.location.href = 'love.html';
}

// === Page 6: Gallery ===
function goBackToLovePage() {
  window.location.href = "love.html";
}

// === Page 7: Promise ===
function goBackToAskPage() {
  window.location.href = "ask.html"; // change this to your Ask Page filename
}
