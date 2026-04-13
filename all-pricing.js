/* ==============================================================
   SYNAPSE SYSTEMS — ALL PRICING SCRIPTS
   all-pricing.js  |  Linked by: all-pricing.html
   ============================================================== */

/* ── THEME ── */
function toggleTheme(){document.body.classList.toggle("lm");const l=document.body.classList.contains("lm");localStorage.setItem("sst",l?"light":"dark");document.querySelectorAll(".tbtn").forEach(b=>b.textContent=l?"☀️":"🌙");}
(function(){if(localStorage.getItem("sst")==="light"){document.body.classList.add("lm");document.querySelectorAll(".tbtn").forEach(b=>b.textContent="☀️");}})();

/* ── HEADER ── */
window.addEventListener("scroll",()=>{document.getElementById("hdr")?.classList.toggle("sc",window.scrollY>40);document.getElementById("btt")?.classList.toggle("vis",window.scrollY>500);},{passive:true});

/* ── REVEAL ── */
function rv(){document.querySelectorAll(".rv:not(.act)").forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-60)e.classList.add("act");});}
window.addEventListener("scroll",rv,{passive:true});
window.addEventListener("load",()=>{rv();setTimeout(rv,300);});

/* ── STICKY NAV ACTIVE STATE ── */
function updateActiveNav(){
  const sections = ['dashboard','appointment','invoice','crm','staff','website'];
  const navItems = document.querySelectorAll('.pnav-item');
  let current = sections[0];
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el && window.scrollY >= el.offsetTop - 150) current = id;
  });
  navItems.forEach((item, i) => item.classList.toggle('active', sections[i] === current));
}
window.addEventListener('scroll', updateActiveNav, {passive:true});

/* ── SCROLL TO PRODUCT ── */
function scrollToProduct(id, btn){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  document.querySelectorAll('.pnav-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

/* ── BOOK via WhatsApp ── */
function book(product, plan){
  const msg = "Hi Synapse Systems!\n\nI'd like to enquire about your *" + product + "* — *" + plan + "* package.\n\nPlease send me more details and a quote.";
  window.open("https://wa.me/27677723822?text=" + encodeURIComponent(msg), "_blank");
}

/* ── SCROLL TO ANCHOR ON LOAD ── */
window.addEventListener('DOMContentLoaded', ()=>{
  const hash = window.location.hash.replace('#','');
  if(hash){
    setTimeout(()=>{
      const el = document.getElementById(hash);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }, 300);
  }
});

/* ── HERO CANVAS ── */
(function(){
  const c = document.getElementById("hero-bg");
  if(!c) return;
  const ctx = c.getContext("2d");
  let W, H;
  function rsz(){W=c.width=window.innerWidth;H=c.height=c.parentElement.offsetHeight;}
  rsz();
  window.addEventListener("resize",rsz,{passive:true});
  const N=70, pts=Array.from({length:N},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.4}));
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(255,106,0,.6)";ctx.fill();});
    for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.hypot(dx,dy);if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(255,106,0,${(1-d/110)*.18})`;ctx.lineWidth=.8;ctx.stroke();}}
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener("click",e=>{const t=document.querySelector(l.getAttribute("href"));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:"smooth",block:"start"});}));
