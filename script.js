const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

let tabs = document.querySelectorAll(".nav-tab");
let topic = null;
let start, end;
for (let tab of tabs) {
    tab.addEventListener("click", () => {
        let clicked = event.srcElement.getAttribute("id");
        if(clicked === "sci") {
            start = 16;
            end = 30;
            topic = "science";
        } else if (clicked === "cri") {
            start = 0;
            end = 15;
            topic = "cricket";
        } else if (clicked === "bol") {
            start = 46;
            end = 60;
            topic = "bollywood";
        } else if (clicked === "prog") {
            start = 31;
            end = 45;
            topic = "programming";
        }
        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("topic", topic);
        window.location.replace("quiz_page.html");
    });
}

let rand_q = document.querySelector("#random");
try { 
    rand_q.addEventListener("click", () => {
        start = 0;
        end = 60;
        topic = "all";
        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("topic", topic);
        window.location.replace("quiz_page.html");
    });
} catch (error) {
    console.log(error);
}

export function getStart() {
    return localStorage.getItem("start");
}

export function getEnd() {
    return localStorage.getItem("end");
}

export function getTopic() {
    return localStorage.getItem("topic");
}