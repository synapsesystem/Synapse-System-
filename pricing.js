/* ==============================================================
   SYNAPSE SYSTEMS — PRICING SCRIPTS
   pricing.js  |  Linked by: pricing.html
   ============================================================== */

/* ── THEME ── */
function toggleTheme(){
  document.body.classList.toggle("lm");
  const l = document.body.classList.contains("lm");
  localStorage.setItem("sst", l?"light":"dark");
  document.querySelectorAll(".theme-btn").forEach(b=>b.textContent=l?"☀️":"🌙");
}
(function(){
  if(localStorage.getItem("sst")==="light"){
    document.body.classList.add("lm");
    document.querySelectorAll(".theme-btn").forEach(b=>b.textContent="☀️");
  }
})();

/* ── SCROLL HELPERS ── */
function scrollTo(id){ document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}); }
window.addEventListener("scroll",()=>{
  document.getElementById("hdr")?.classList.toggle("scrolled",window.scrollY>40);
  document.getElementById("back-top")?.classList.toggle("visible",window.scrollY>500);
},{passive:true});

/* ── MOBILE NAV ── */
function toggleMobileNav(){
  const n=document.getElementById("mobile-nav"),b=document.getElementById("hamburger");
  if(!n||!b)return;
  const o=n.classList.toggle("open");
  b.classList.toggle("open",o);
  document.body.style.overflow=o?"hidden":"";
}
function closeMobileNav(){
  const n=document.getElementById("mobile-nav"),b=document.getElementById("hamburger");
  if(!n||!b)return;
  n.classList.remove("open"); b.classList.remove("open");
  document.body.style.overflow="";
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMobileNav();});

/* ── REVEAL ── */
function rv(){
  document.querySelectorAll(".rv:not(.act)").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-70) el.classList.add("act");
  });
}
window.addEventListener("scroll",rv,{passive:true});
window.addEventListener("load",()=>{rv();setTimeout(rv,300);});

/* ── FAQ ── */
function toggleFaq(btn){
  const item=btn.parentElement;
  const wasOpen=item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(i=>i.classList.remove("open"));
  if(!wasOpen) item.classList.add("open");
}

/* ── SELECT PLAN FROM CARD ── */
function selectPlan(plan){
  const sel=document.getElementById("f-plan");
  if(sel) for(let i=0;i<sel.options.length;i++) if(sel.options[i].value===plan){sel.selectedIndex=i;break;}
  document.getElementById("booking").scrollIntoView({behavior:"smooth",block:"start"});
}

/* ── SEND TO WHATSAPP ── */
function sendToWhatsApp(){
  const name  = document.getElementById("f-name").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const biz   = document.getElementById("f-biz").value.trim();
  const plan  = document.getElementById("f-plan").value;
  const msg   = document.getElementById("f-msg").value.trim();

  if(!name)  { alert("Please enter your name."); return; }
  if(!phone) { alert("Please enter your phone number."); return; }
  if(!plan)  { alert("Please select a package."); return; }

  const text = [
    "👋 *Hi Synapse Systems!* I'd like to book a website consultation.",
    "",
    `🧑 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    biz   ? `🏢 *Business:* ${biz}`                        : "",
    `📦 *Package:* ${plan}`,
    msg   ? `\n💬 *About my project:*\n${msg}`             : "",
    "",
    "_— Sent from the Synapse Systems pricing page_"
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/27677723822?text=${encodeURIComponent(text)}`, "_blank");
}

/* ── CUSTOM CURSOR ── */
(function(){
  if(!window.matchMedia("(pointer:fine)").matches) return;
  const dot=document.getElementById("c-dot"), ring=document.getElementById("c-ring");
  if(!dot||!ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener("mousemove",e=>{
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+"px"; dot.style.top=my+"px";
  });
  (function loop(){
    rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
    ring.style.left=rx+"px"; ring.style.top=ry+"px";
    requestAnimationFrame(loop);
  })();
  const hover = "a,button,.plan-card,.addon-card,.faq-q,.perk,input,textarea,select";
  document.querySelectorAll(hover).forEach(el=>{
    el.addEventListener("mouseenter",()=>{
      ring.style.width="50px"; ring.style.height="50px";
      ring.style.borderColor="var(--or)"; ring.style.background="rgba(255,106,0,.06)";
    });
    el.addEventListener("mouseleave",()=>{
      ring.style.width="32px"; ring.style.height="32px";
      ring.style.borderColor="var(--ol)"; ring.style.background="transparent";
    });
  });
  document.addEventListener("mouseleave",()=>{dot.style.opacity="0";ring.style.opacity="0";});
  document.addEventListener("mouseenter",()=>{dot.style.opacity="1";ring.style.opacity="1";});
})();

/* ── NEURAL CANVAS ── */
(function(){
  const c=document.getElementById("hero-canvas");
  if(!c) return;
  const ctx=c.getContext("2d"); let W,H;
  function resize(){ W=c.width=window.innerWidth; H=c.height=window.innerHeight; }
  resize();
  window.addEventListener("resize",resize,{passive:true});
  const mouse={x:null,y:null};
  window.addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;},{passive:true});
  const N=90;
  const pts=Array.from({length:N},()=>({
    x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
    vx:(Math.random()-.5)*.38, vy:(Math.random()-.5)*.38,
    r:Math.random()*1.8+.4
  }));
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      if(mouse.x){
        const dx=mouse.x-p.x,dy=mouse.y-p.y,d=Math.hypot(dx,dy);
        if(d<140){p.x+=dx*.0015;p.y+=dy*.0015;}
      }
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(255,106,0,.55)";
      ctx.fill();
    });
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
      const d=Math.hypot(dx,dy);
      if(d<120){
        ctx.beginPath();
        ctx.moveTo(pts[i].x,pts[i].y);
        ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(255,106,0,${(1-d/120)*.17})`;
        ctx.lineWidth=.7;
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener("click",e=>{
  const t=document.querySelector(l.getAttribute("href"));
  if(!t)return; e.preventDefault();
  t.scrollIntoView({behavior:"smooth",block:"start"});
}));
