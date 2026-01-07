/* ================== GLOBAL ================== */
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.background = "#0f172a";
document.body.style.color = "white";

const app = document.getElementById("app");

/* ================== NAVBAR ================== */
function navbar() {
  document.body.insertAdjacentHTML("afterbegin", `
    <div style="background:#020617;padding:15px;display:flex;justify-content:space-between">
      <h2>JavaScript Practical</h2>
      <div>
        <button onclick="home()">Home</button>
        <button onclick="chapters()">Chapters</button>
        <button onclick="about()">About</button>
      </div>
    </div>
  `);
}

/* ================== HOME ================== */
function home() {
  app.innerHTML = `
    <div style="text-align:center;padding:80px">
      <h1>JavaScript Practical Examples</h1>
      <p>Run each example and see output instantly</p>
    </div>
  `;
}

/* ================== CHAPTERS ================== */
function chapters() {
  app.innerHTML = `
    <div style="display:flex;gap:20px;justify-content:center;padding:50px">
      <div class="box" onclick="chapter7()">Chapter 7<br>Objects</div>
      <div class="box" onclick="chapter8()">Chapter 8<br>DOM</div>
      <div class="box" onclick="chapter9()">Chapter 9<br>Events</div>
    </div>
    <style>
      .box{
        background:#1e293b;
        padding:30px;
        width:220px;
        text-align:center;
        cursor:pointer;
        border-radius:10px;
      }
    </style>
  `;
}

/* =====================================================
   CHAPTER 7 – JAVASCRIPT OBJECTS (15 UNIQUE EXAMPLES)
===================================================== */
function chapter7() {
  app.innerHTML = <h2>Chapter 7 – JavaScript Objects</h2>;

  const examples = [
    () => ({name:"Ali", age:25}),
    obj => obj.name,
    obj => obj["age"],
    obj => (obj.city="Mogadishu", obj),
    obj => (obj.age=30, obj),
    obj => (delete obj.age, obj),
    obj => ({greet(){return "Hello "+this.name}}).greet.call(obj),
    obj => obj.name,
    obj => {let r=""; for(let k in obj) r+=k+" "; return r},
    obj => Object.keys(obj),
    obj => Object.values(obj),
    obj => Object.entries(obj),
    () => new function(){this.type="Phone"},
    () => new class{constructor(){this.model="Laptop"}}(),
    obj => JSON.parse(JSON.stringify(obj))
  ];

  examples.forEach((fn,i)=>{
    app.innerHTML += `
      <div style="background:#020617;margin:10px;padding:15px">
        <p><b>${i+1}. Example</b></p>
        <button onclick="runObjExample(${i})">Run</button>
        <pre id="objOut${i}"></pre>
      </div>
    `;
  });

  window.runObjExample = function(i){
    let baseObj = {name:"Ali", age:25};
    let result = examples[i](baseObj);
    document.getElementById("objOut"+i).textContent =
      JSON.stringify(result, null, 2);
  }
}

/* =====================================================
   CHAPTER 8 – JAVASCRIPT DOM (5 REAL EXAMPLES)
===================================================== */
function chapter8() {
  app.innerHTML = `
    <h2>Chapter 8 – JavaScript DOM</h2>

    <p id="idExample">ID Example</p>
    <p class="classExample">Class One</p>
    <p class="classExample">Class Two</p>
    <h3>Tag Example</h3>
    <div class="box">Query Box</div>
    <span class="multi">One</span>
    <span class="multi">Two</span>

    <button onclick="dom1()">getElementById</button>
    <button onclick="dom2()">getElementsByClassName</button>
    <button onclick="dom3()">getElementsByTagName</button>
    <button onclick="dom4()">querySelector</button>
    <button onclick="dom5()">querySelectorAll</button>
  `;
}

function dom1(){
  document.getElementById("idExample").style.color="yellow";
}
function dom2(){
  document.getElementsByClassName("classExample")[0].style.fontWeight="bold";
}
function dom3(){
  document.getElementsByTagName("h3")[0].style.color="cyan";
}
function dom4(){
  document.querySelector(".box").textContent="Selected!";
}
function dom5(){
  document.querySelectorAll(".multi").forEach(e=>e.style.color="orange");
}

/* =====================================================
   CHAPTER 9 – JAVASCRIPT EVENTS (9 REAL EXAMPLES)
===================================================== */
function chapter9() {
  app.innerHTML = `
    <h2>Chapter 9 – JavaScript Events</h2>

    <button onclick="clickEvent()">Click</button>
    <button ondblclick="dblClickEvent()">Double Click</button>
    <div onmouseover="mouseOver()" onmouseout="mouseOut()"
         style="width:200px;height:40px;background:gray">Hover Me</div>

    <input onkeydown="keyDown()" placeholder="Key Down">
    <input onfocus="focusEvent()" placeholder="Focus">
    <input onblur="blurEvent()" placeholder="Blur">

    <select onchange="changeEvent()">
      <option>A</option>
      <option>B</option>
    </select>

    <p id="eventOutput"></p>
  `;

  window.onresize = ()=> {
    document.getElementById("eventOutput").textContent="Window Resized";
  }
}

function clickEvent(){out("Clicked")}
function dblClickEvent(){out("Double Clicked")}
function mouseOver(){out("Mouse Over")}
function mouseOut(){out("Mouse Out")}
function keyDown(){out("Key Down")}
function focusEvent(){out("Focused")}
function blurEvent(){out("Blurred")}
function changeEvent(){out("Value Changed")}

function out(text){
  document.getElementById("eventOutput").textContent=text;
}

/* ================== ABOUT ================== */
function about() {
  app.innerHTML = `
    <h2>About</h2>
    <p><b>Name:</b> Hamdi Abdirisaaq Mohamud</p>
    <p><b>ID:</b> C52400006</p>
    <p><b>Teacher:</b> Jamilo</p>
    <p><b>Subject:</b> JavaScript</p>

    <div style="margin-top:20px;text-align:center">
      <img src="WhatsApp Image 2026-01-07 at 3.23.56 AM.jpeg" alt="Hamdi Image"
           style="width:150px;border-radius:10px">
    </div>
  `;
}

/* ================== START ================== */
navbar();
home();