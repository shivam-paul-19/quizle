import {getResults} from "./app.js";
import {getTopic} from "./script.js";

let topic = getTopic();
let result = getResults();
let corr = document.querySelector("#cor_c > b");
let wrong = document.querySelector("#wro_c > b");
let un = document.querySelector("#un_c > b");
let res = document.querySelector(".marks > b");
let msg = document.querySelector(".msg");

corr.innerHTML = result.correct;
res.innerHTML = result.correct;
wrong.innerHTML = result.wrong;
un.innerHTML = result.not;

if(topic == "cricket") {
    if(result.correct >= 8) {
        msg.innerHTML = "Woah! you seem to be a cricket expert.";
    } else if(result.correct >= 5) {
        msg.innerHTML = "Good! You have a Good knowledge of cricket."
    } else if(result.correct >= 3) {
        msg.innerHTML = "Umm! Maybe you don't have watched much cricket.";
    } else {
        msg.innerHTML = "Don't worry! Everyone starts somewhere. Maybe you have knowledge in other sports.";
    }
}

document.querySelector(".go-home").addEventListener("click", () => {
    window.location.replace("index.html");
})