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

if(result.correct >= 8) {
    document.querySelector(".marks").style.color = "#7DDF64";
} else if(result.correct >= 5) {
    document.querySelector(".marks").style.color = "#F9C22E";
} else if(result.correct >= 3) {
    document.querySelector(".marks").style.color = "#6fd1d7";
} else {
    document.querySelector(".marks").style.color = "#FF7477";
}

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

if(topic == "science") {
    if(result.correct >= 8) {
        msg.innerHTML = "Woah! Are you a sceintist?";
    } else if(result.correct >= 5) {
        msg.innerHTML = "Good! You must be a sceince enthusiast."
    } else if(result.correct >= 3) {
        msg.innerHTML = "Umm! You seem to have a good potential in science, keep learning.";
    } else {
        msg.innerHTML = "Don't worry! Everyone starts somewhere. Science is bit complicated but interesting too, so try learning";
    }
}

if(topic == "programming") {
    if(result.correct >= 8) {
        msg.innerHTML = "Woah! Such techie person you are!";
    } else if(result.correct >= 5) {
        msg.innerHTML = "Good! You have great knowledge for computers.";
    } else if(result.correct >= 3) {
        msg.innerHTML = "You're getting there! Keep learning and you'll improve.";
    } else {
        msg.innerHTML = "Don't worry, everyone starts somewhere. Keep studying and keep debugging!";
    }    
}

if(topic == "all") {
    if(result.correct >= 8) {
        msg.innerHTML = "Woah! Such a pure genius";
    } else if(result.correct >= 5) {
        msg.innerHTML = "Good! You have a good knowledge in various fields.";
    } else if(result.correct >= 3) {
        msg.innerHTML = "Not bad! you must be a well aware person, but there is a lot more to know.";
    } else {
        msg.innerHTML = "Don't worry, everyone starts somewhere. You might have a long way to go but you can do it!";
    }    
}

document.querySelector(".go-home").addEventListener("click", () => {
    window.location.replace("index.html");
})