/* ===========================
   TRIADA SYSTEM BOOT
=========================== */

window.addEventListener("load", () => {

console.log("TRIADA CORE INITIALIZED");

startCounters();

startTerminal();

startThreatFeed();

startRadarTargets();

startClock();

});

/* ===========================
   COUNTERS
=========================== */

function animateCounter(id,target,duration=2500){

const el=document.getElementById(id);

if(!el) return;

let start=0;

const step=target/(duration/16);

const timer=setInterval(()=>{

start+=step;

if(start>=target){

start=target;

clearInterval(timer);

}

el.innerText=
Math.floor(start).toLocaleString();

},16);

}

function startCounters(){

animateCounter("threats",1248732);

animateCounter("systems",98612);

animateCounter("operations",47);

animateCounter("nodes",287);

}

/* ===========================
   TERMINAL
=========================== */

const terminalLines=[

"[INFO] Initializing TRIADA Core",

"[INFO] Establishing encrypted channel",

"[INFO] AES-256 encryption enabled",

"[INFO] Threat intelligence synced",

"[INFO] Intelligence nodes online",

"[INFO] Global monitoring active",

"[INFO] Satellite relay secured",

"[INFO] Cyber Defense Grid operational",

"[INFO] AI analytics running",

"[STATUS] SYSTEM READY"

];

function startTerminal(){

const terminal=
document.getElementById("terminal");

if(!terminal) return;

let i=0;

function writeLine(){

if(i<terminalLines.length){

terminal.innerHTML+=
terminalLines[i]+"<br>";

terminal.scrollTop=
terminal.scrollHeight;

i++;

setTimeout(writeLine,900);

}

}

writeLine();

}

/* ===========================
   LIVE THREAT FEED
=========================== */

const threats=[

"APT29 activity detected",

"Credential harvesting campaign",

"Ransomware beacon identified",

"Malware command server located",

"Suspicious network scan",

"Critical vulnerability exploited",

"Phishing infrastructure detected",

"Data exfiltration attempt blocked",

"Botnet traffic identified",

"Supply chain threat observed"

];

function startThreatFeed(){

const feed=
document.getElementById("liveFeed");

if(!feed) return;

setInterval(()=>{

const div=
document.createElement("div");

const level=
["critical","high","medium"]
[Math.floor(Math.random()*3)];

div.className=
"feed-item "+level;

div.innerHTML=
threats[
Math.floor(
Math.random()*threats.length
)
];

feed.prepend(div);

if(feed.children.length>8){

feed.removeChild(
feed.lastChild
);

}

},3500);

}

/* ===========================
   CLOCK
=========================== */

function startClock(){

const clock=
document.getElementById("clock");

if(!clock) return;

setInterval(()=>{

const now=
new Date();

clock.innerHTML=
now.toUTCString();

},1000);

}

/* ===========================
   CHARTS
=========================== */

if(document.getElementById("threatChart")){

new Chart(
document.getElementById("threatChart"),
{
type:"doughnut",
data:{
labels:[
"APT",
"Malware",
"Phishing",
"Ransomware"
],
datasets:[{
data:[
35,
25,
20,
20
],
borderWidth:0
}]
},
options:{
plugins:{
legend:{
labels:{
color:"white"
}
}
}
}
}
);

}

if(document.getElementById("activityChart")){

new Chart(
document.getElementById("activityChart"),
{
type:"line",
data:{
labels:[
"JAN",
"FEB",
"MAR",
"APR",
"MAY",
"JUN",
"JUL"
],
datasets:[{
label:"Threat Activity",
data:[
120,
180,
160,
220,
310,
410,
520
],
tension:.4
}]
},
options:{
plugins:{
legend:{
labels:{
color:"white"
}
}
},
scales:{
x:{
ticks:{
color:"white"
}
},
y:{
ticks:{
color:"white"
}
}
}
}
}
);

}

/* ===========================
   CYBER RADAR
=========================== */

function startRadarTargets(){

const radar=
document.querySelector(
".radar-circle"
);

if(!radar) return;

for(let i=0;i<12;i++){

const dot=
document.createElement("div");

dot.classList.add("target");

dot.style.left=
Math.random()*90+"%";

dot.style.top=
Math.random()*90+"%";

radar.appendChild(dot);

}

}

/* ===========================
   NEWS ROTATOR
=========================== */

const news=[

"Zero-Day Vulnerability Impacts Enterprise Systems",
"Major Cybercrime Infrastructure Disrupted",

"New Intelligence Report Released",

"Critical Supply Chain Threat Analysis",

"AI-Powered Malware Evolution Observed",

"International Ransomware Group Identified"

];

function rotateNews(){

const box=
document.getElementById("headline");

if(!box) return;

let index=0;

setInterval(()=>{

box.innerHTML=
news[index];

index++;

if(index>=news.length){

index=0;

}

},4000);

}

rotateNews();

/* ===========================
   WORLD ATTACK MAP
=========================== */

const attackRoutes=[

["USA","Germany"],

["China","France"],

["Russia","UK"],

["Iran","USA"],

["India","Japan"],

["Brazil","Canada"]

];

function populateRoutes(){

const routes=
document.getElementById("routes");

if(!routes) return;

attackRoutes.forEach(route=>{

const item=
document.createElement("div");

item.className=
"route";

item.innerHTML=
route[0]+" ➜ "+route[1];

routes.appendChild(item);

});

}

populateRoutes();

/* ===========================
   THREAT STATUS
=========================== */

const statuses=[

"SECURE",

"MONITORING",

"ELEVATED",

"ANALYZING"

];

setInterval(()=>{

const status=
document.getElementById(
"threatStatus"
);

if(!status) return;

status.innerHTML=
statuses[
Math.floor(
Math.random()*statuses.length
)
];

},7000);