/* ==============================================================
   SYNAPSE SYSTEMS — BUSINESS CARD SCRIPTS
   business-card.js  |  Linked by: business-card.html
   ============================================================== */

/* ── NEURAL CANVAS ── */
function miniCanvas(id, dark) {
  const c = document.getElementById(id);
  if (!c) return;

  // Set canvas to match card size
  const card = c.parentElement;
  c.width  = card.offsetWidth  || 400;
  c.height = card.offsetHeight || 258;

  const ctx = c.getContext('2d');
  const N = 32;
  const pts = Array.from({ length: N }, () => ({
    x:  Math.random() * c.width,
    y:  Math.random() * c.height,
    vx: (Math.random() - .5) * .28,
    vy: (Math.random() - .5) * .28,
    r:  Math.random() * .9 + .3
  }));

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width)  p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = dark ? 'rgba(255,106,0,0.45)' : 'rgba(255,106,0,0.22)';
      ctx.fill();
    });

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < 80) {
          ctx.beginPath();
          ctx.moveTo(pts[pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(255,106,0,${(1 - d / 80) * (dark ? .12 : .07)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

miniCanvas('c-front-dark',  true);
miniCanvas('c-front-light', false);
