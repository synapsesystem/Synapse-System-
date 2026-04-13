/* ==============================================================
   SYNAPSE SYSTEMS — INDEX SCRIPTS
   index.js  |  Linked by: index.html
   ============================================================== */

/* THEME */
function toggleTheme(){
  document.body.classList.toggle("lm");
  const l=document.body.classList.contains("lm");
  localStorage.setItem("sst",l?"light":"dark");
  document.querySelectorAll(".tbtn").forEach(b=>b.textContent=l?"☀️":"🌙");
}
(function(){if(localStorage.getItem("sst")==="light"){document.body.classList.add("lm");document.querySelectorAll(".tbtn").forEach(b=>b.textContent="☀️");}})();

/* HEADER SCROLL + BACK TOP */
window.addEventListener("scroll",()=>{
  document.getElementById("hdr")?.classList.toggle("sc",window.scrollY>40);
  document.getElementById("btt")?.classList.toggle("vis",window.scrollY>400);
  let cur="";
  document.querySelectorAll("section[id]").forEach(s=>{if(window.scrollY>=s.offsetTop-180)cur=s.id;});
  document.querySelectorAll("nav a:not(.ncta)").forEach(l=>{l.style.color="";if(l.getAttribute("href")==="#"+cur)l.style.color="var(--or)";});
},{passive:true});

/* MOBILE NAV */
function toggleMnav(){
  const n=document.getElementById("mnav"),b=document.getElementById("hbg");
  if(!n||!b)return;
  const o=n.classList.toggle("op");b.classList.toggle("op",o);document.body.style.overflow=o?"hidden":"";
}
function closeMnav(){
  const n=document.getElementById("mnav"),b=document.getElementById("hbg");
  if(!n||!b)return;
  n.classList.remove("op");b.classList.remove("op");document.body.style.overflow="";
}

/* LOADER — robust, never gets stuck */
function hideLoader(){
  const l=document.getElementById("loader");
  if(!l||l.dataset.hidden)return;
  l.dataset.hidden="1";
  l.classList.add("hidden");
  setTimeout(()=>{l.style.display="none";rv();},650);
}
// Primary: hide 2s after DOM ready (doesn't wait for slow CDN scripts)
document.addEventListener("DOMContentLoaded",()=>setTimeout(hideLoader,2000));
// Fallback: force-hide after 4s no matter what
setTimeout(hideLoader,4000);

/* REVEAL */
function rv(){document.querySelectorAll(".rv:not(.act)").forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight-80)e.classList.add("act");});}
window.addEventListener("scroll",rv,{passive:true});
setTimeout(rv,300);setTimeout(rv,800);

/* PRODUCT FILTER */
function fprod(cat,btn){
  document.querySelectorAll(".ptab").forEach(b=>b.classList.remove("act"));
  btn.classList.add("act");
  document.querySelectorAll(".pc").forEach(c=>{c.style.display=cat==="all"||c.dataset.cat===cat?"flex":"none";});
}

/* IMG MODAL */
function openImg(src){const m=document.getElementById("im"),i=document.getElementById("mimg");if(!m||!i)return;i.src=src;m.classList.add("op");document.body.style.overflow="hidden";}
function closeImg(){const m=document.getElementById("im");if(m){m.classList.remove("op");document.body.style.overflow="";}}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeImg();closeMnav();closePricingModal(true);}});

/* CURSOR */
(function(){
  if(!window.matchMedia("(pointer:fine)").matches)return;
  const dot=document.getElementById("cd"),ring=document.getElementById("cr");
  if(!dot||!ring)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px";});
  (function ar(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(ar);})();
  document.querySelectorAll("a,button,.card,.pc,.bc,input,textarea,select").forEach(el=>{
    el.addEventListener("mouseenter",()=>{ring.style.width="54px";ring.style.height="54px";ring.style.borderColor="var(--or)";ring.style.background="rgba(255,106,0,.06)";});
    el.addEventListener("mouseleave",()=>{ring.style.width="36px";ring.style.height="36px";ring.style.borderColor="var(--ol)";ring.style.background="transparent";});
  });
  document.addEventListener("mouseleave",()=>{dot.style.opacity="0";ring.style.opacity="0";});
  document.addEventListener("mouseenter",()=>{dot.style.opacity="1";ring.style.opacity="1";});
})();

/* NEURAL CANVAS */
(function(){
  const c=document.getElementById("aibg");if(!c)return;
  const ctx=c.getContext("2d");let W,H;
  function rsz(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}rsz();
  window.addEventListener("resize",rsz,{passive:true});
  const mouse={x:null,y:null};
  document.addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;},{passive:true});
  const N=100,pts=Array.from({length:N},(_,i)=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+.5,d:Math.floor(i/(N/3))}));
  const da=[.4,.7,1],dr=[.6,1,1.4],cd=[80,110,140];
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      const sp=1+p.d*.4;p.x+=p.vx*sp;p.y+=p.vy*sp;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      if(mouse.x!==null){const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.hypot(dx,dy);if(p.d===2&&dist<160){p.x+=dx*.002;p.y+=dy*.002;}else if(p.d===0&&dist<100){p.x-=dx*.001;p.y-=dy*.001;}}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r*dr[p.d],0,Math.PI*2);ctx.fillStyle=`rgba(255,106,0,${da[p.d]*.85})`;ctx.fill();
    });
    for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){
      if(pts[i].d!==pts[j].d)continue;
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.hypot(dx,dy),m=cd[pts[i].d];
      if(d<m){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(255,106,0,${(1-d/m)*.22*da[pts[i].d]})`;ctx.lineWidth=.8;ctx.stroke();}
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* COUNTERS */
(function(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,raw=el.textContent.trim();if(raw.length===4&&parseInt(raw)>1900)return;const plus=raw.includes("+"),end=parseInt(raw.replace(/\D/g,""));if(isNaN(end))return;const suf=plus?"+":"",t0=performance.now();function eo(t){return 1-Math.pow(1-t,3);}function tick(now){const p=Math.min((now-t0)/1800,1);el.textContent=Math.floor(eo(p)*end)+suf;if(p<1)requestAnimationFrame(tick);else el.textContent=end+suf;}requestAnimationFrame(tick);obs.unobserve(el);});},{threshold:.5});
  document.querySelectorAll(".stat h3").forEach(el=>obs.observe(el));
})();

/* EMAILJS */
if(typeof emailjs!=="undefined")emailjs.init("172cl1RdXbknwVrZV");

function sendMsg(e){
  e.preventDefault();
  const nm=document.getElementById("nm")?.value.trim();
  const em=document.getElementById("em")?.value.trim();
  const co=document.getElementById("co")?.value.trim();
  const ph=document.getElementById("ph")?.value.trim();
  const sv=document.getElementById("sv")?.value;
  const mg=document.getElementById("mg")?.value.trim();
  document.querySelectorAll(".em").forEach(el=>el.style.display="none");
  document.querySelectorAll(".er").forEach(el=>el.classList.remove("er"));
  let ok=true;
  if(!nm){sfe("nm","nm-e");ok=false;}
  if(!em||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){sfe("em","em-e");ok=false;}
  if(!mg){sfe("mg","mg-e");ok=false;}
  if(!ok)return;
  if(document.getElementById("hp")?.value)return;
  setL(true);
  emailjs.send("service_8jd6ma5","template_zejy81a",{name:nm,email:em,company:co||"Not provided",phone:ph||"Not provided",service:sv||"Not specified",message:mg,to_email:"synapsesystem0131@gmail.com"})
  .then(()=>{setL(false);document.getElementById("cform").style.display="none";document.getElementById("scard").style.display="block";})
  .catch(err=>{console.error(err);setL(false);toast("Something went wrong. Please try again.","error");});
}
function sfe(iid,eid){const i=document.getElementById(iid),e=document.getElementById(eid);if(i)i.classList.add("er");if(e)e.style.display="block";}
function setL(s){const b=document.getElementById("sbtn"),t=document.getElementById("btxt"),l=document.getElementById("bldr");if(b)b.disabled=s;if(t)t.style.display=s?"none":"inline";if(l)l.style.display=s?"inline":"none";}
function resetF(){const f=document.getElementById("cform"),s=document.getElementById("scard");if(f){f.reset();f.style.display="";}if(s)s.style.display="none";}

/* TOAST */
function toast(msg,type){
  const ex=document.getElementById("ss-t");if(ex)ex.remove();
  const t=document.createElement("div");t.id="ss-t";t.textContent=msg;
  Object.assign(t.style,{position:"fixed",bottom:"32px",right:"32px",background:type==="error"?"#e05050":"var(--or)",color:"#fff",padding:"13px 20px",borderRadius:"10px",fontSize:"13px",zIndex:"9999",opacity:"0",transform:"translateY(12px)",transition:"opacity .3s ease,transform .3s ease",boxShadow:"0 8px 32px rgba(0,0,0,.4)",fontFamily:"var(--fb)"});
  document.body.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity="1";t.style.transform="translateY(0)";});
  setTimeout(()=>{t.style.opacity="0";t.style.transform="translateY(12px)";setTimeout(()=>t.remove(),300);},3500);
}


/* ── PRODUCT PLAN TOGGLES ── */
function toggleWebPlans(btn){
  const wrap = btn.nextElementSibling;
  const arrow = btn.querySelector('.wpt-arrow');
  const isOpen = wrap.classList.toggle('open');
  arrow.style.transform = isOpen ? 'rotate(180deg)' : '';
}

/* ── PRODUCT PLAN BOOKING via WhatsApp ── */
function bookProductPlan(product, plan){
  const msg = "Hi Synapse Systems!\n\nI\'d like to enquire about your *" + product + "* — *" + plan + "* package.\n\nPlease send me more details and a quote.";
  window.open("https://wa.me/27677723822?text=" + encodeURIComponent(msg), "_blank");
}
function bookWebPlan(plan){ bookProductPlan('Website Development', plan); }

/* ── PRICING MODAL ── */
function openPricingModal(){
  const m = document.getElementById("pricingModal");
  if(m){ m.classList.add("open"); document.body.style.overflow = "hidden"; }
}
function closePricingModal(e){
  if(e === true || (e && e.target && e.target.classList.contains("pm-overlay"))){
    const m = document.getElementById("pricingModal");
    if(m){ m.classList.remove("open"); document.body.style.overflow = ""; }
  }
}

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(l=>l.addEventListener("click",e=>{const t=document.querySelector(l.getAttribute("href"));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:"smooth",block:"start"});}));
