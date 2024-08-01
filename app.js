import {questions} from './ques.js';
import {getStart, getEnd} from './script.js';

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

let arr = [];
let start = getStart();
let range = getEnd();
function generateArr(array) {
    let i = start;
    while(i < range) {
        arr.push(i);
        i++;
    }
}

generateArr(arr);
shuffle(arr);

// answering
let q = document.querySelector(".ques");
let opts = document.querySelectorAll(".opts");

let score = 0;
let level = 0;
let isAns = false;
let clicked = null;
let un_ans = 0;
let wrong = 0;

let start_btn = document.querySelector(".start-q");
try{
    start_btn.addEventListener("click", () => {
        let rbox = document.querySelector(".rule-box");
        rbox.style.display = "none";
        let opts = document.querySelectorAll(".opts");
        for(let j=0; j<4; j++) {
            opts[j].classList.add("opt-visible");
        }
        ask(0);
    });
} catch {
    console.log("just pass this");
}

try {
    for(let j=0; j<4; j++) {
        opts[j].addEventListener("click", () => {
            isAns = true;
            clicked = event.srcElement;
            for(let j=0; j<4; j++) {
                opts[j].classList.remove("opt-checked");
            }
            clicked.classList.add("opt-checked");
        });
    }
} catch {
    console.log("just pass again");
}

function startTime() {
    setTimeout(() => {
        submit(isAns, clicked);
    }, 10000);
}

function submit(isAns, clicked) {
    if(isAns && clicked != null) {
        let b = clicked;
        let a = questions[arr[level]].ans;
        verify(a, b);
    } else {
        console.log("Not answered");
        un_ans++;
        levelUp();
    }
}

function ask(i) {
    if (i == 10) {
        localStorage.setItem("score", score);
        localStorage.setItem("un_ans", un_ans);
        localStorage.setItem("wrong", wrong);
        window.location.replace("res.html");
        return;
    }
    let timeline = document.querySelector(".timer-line");
    timeline.classList.add("animated-timer");
    q.innerHTML = `Q.${level+1}: ${questions[arr[i]].ques}`;
    for(let j=0; j<4; j++) {
        opts[j].innerHTML = questions[arr[i]].opt[j];
    }
    startTime();
}

function verify(a, b) {
    b.classList.remove("opt-checked");
    let o = b.getAttribute("id");
    if(o == a) {
        score++;
    } else {
        b.classList.add("opt-wrong");
        wrong++;
    }
    levelUp();
}

function levelUp() {
    let a = questions[arr[level]].ans;
    let corr = document.querySelector(`#${a}`);
    let des = document.createElement("p");
    des.classList.add("des");
    corr.appendChild(des);
    corr.classList.add("opt-corr");
    des.innerHTML = questions[arr[level]].des;
    isAns = false;
    let timeline = document.querySelector(".timer-line");
    timeline.classList.remove("animated-timer");
    setTimeout(() => {
        console.log("Entered here");
        level++;
        corr.removeChild(des);
        corr.classList.remove("opt-corr");
        if(clicked != null) {
            clicked.classList.remove("opt-wrong");
        }
        ask(level);
    }, 5000);
}

export function getResults() {
    return {
        "correct": localStorage.getItem("score"),
        "not": localStorage.getItem("un_ans"),
        "wrong": localStorage.getItem("wrong")
    };
}