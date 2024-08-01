let tabs = document.querySelectorAll(".nav-tab");
let topic = null;
for (let tab of tabs) {
    tab.addEventListener("click", () => {
        let clicked = event.srcElement.getAttribute("id");
        let start, end;
        if(clicked === "sci") {
            console.log("in progress");
            topic = "science";
        } else if (clicked === "cri") {
            start = 0;
            end = 15;
            topic = "cricket";
        } else if (clicked === "bol") {
            console.log("in progress");
        } else if (clicked === "prog") {
            console.log("in progress");
        }
        localStorage.setItem("start", start);
        localStorage.setItem("end", end);
        localStorage.setItem("topic", topic);
        window.location.replace("quiz_page.html");
    });
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