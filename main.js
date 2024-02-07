const quoteArr = [
{
    text: "With great power, comes great responsibility",
    author: "Uncle Ben"
}, {
    text: "I am Ironman.",
    author: "Tony Stark" 
}, {
    text: "I can do this all day.",
    author: "Steve Rodgers"
}, {
    text: "Thats my secret Cap, Im always angry.",
    author: "Bruce Banner"
}, {
    text: "None of this makes sense, but Im going back out there because its my job.",
    author: "Hawkeye"
}, {
    text: "Im here to pick up a fossil.",
    author: "Black Widow"
}, {
    text: "ANOTHER!!.",
    author: "Thor Odinson"
}, {
    text: "Love is a dagger.",
    author: "Loki"
}, {
    text: "I dont need you to tell me who I am.",
    author: "Wanda"
}, {
    text: "Maybe he was wrong about you, and if he was wrong about you, then  maybe he was wrong about me.",
    author: "Bucky Barnes"
}, {
    text: "I am inevitable.",
    author: "Thanos"
}, {
    text: "No mistakes. No do-overs. Look out for eachother. This is the fight of our lives.",
    author: "Cap"
}, {
    text: "filler example.",
    author: "me"
}, {
    text: "filler example2.",
    author: "me"
}, 


];


function generate() {

let ranNum = Math.floor(Math.random() * quoteArr.length);
console.log(quoteArr);

// i dont understand what that background class is for ?? ask him 
// take it out bc it works without it, generate the random arr length 

//let backClass = Math.floor(Math.random() * 10) + 1;
//let background = document.querySelector('main');
document.querySelector("blockquote").innerText = quoteArr[ranNum].text;
document.querySelector("cite").innerText = quoteArr[ranNum].author;
};

const button = document.querySelector('button');

/*
if (backClass == 1) {
    background.setAttribute('class', '');
    background.classList.add('one');
} else if (backClass == 2) { 
    background.setAttribute('class', '');
    background.classList.add('two');
} else if (backClass == 3) {
    background.setAttribute('class', '');
    background.classList.add('three');
} else if (backClass == 4) {
    background.setAttribute('class', '');
    background.classList.add('four');
} else if (backClass == 5) {
    background.setAttribute('class', '');
    background.classList.add('five');
} else if (backClass == 6) { 
    background.setAttribute('class', '');
    background.classList.add('six');
} else if (backClass == 7) {
    background.setAttribute('class', '');
    background.classList.add('seven');
} else if (backClass == 8) {
    background.setAttribute('class', '');
    background.classList.add('eight');
} else if (backClass == 9) {
    background.setAttribute('class', '');
    background.classList.add('nine');
} else {
    background.setAttribute('class', '');
    background.classList.add('ten');
};
*/