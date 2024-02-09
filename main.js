const quoteArr = [
{
    text: "WITH GREAT POWER COMES GREAT RESPONSIBILITY",
    author: "-Uncle Ben"
}, {
    text: "I AM IRONMAN.",
    author: "-Tony Stark" 
}, {
    text: "I CAN DO THIS ALL DAY.",
    author: "-Steve Rogers"
}, {
    text: "THATS MY SECRET CAP, IM ALWAYS ANGRY.",
    author: "-Bruce Banner"
}, {
    text: "NONE OF THIS MAKES SENCE, BUT IM GOING BACK OUT THERE BECAUSE ITS MY JOB.",
    author: "-Hawkeye"
}, {
    text: "IM HERE TO PICK UP A FOSSIL.",
    author: "-Black Widow"
}, {
    text: "ANOTHER!!.",
    author: "-Thor Odinson"
}, {
    text: "LOVE IS A DAGGER.",
    author: "-Loki"
}, {
    text: "I DONT NEED YOU TO TELL ME WHO I AM.",
    author: "-Wanda"
}, {
    text: "MAYBE HE WAS WRONG ABOUT YOU, AND IF HE WAS WRONG ABOUT YOU, THEN MAYBE HE WAS WRONG ABOUT ME.",
    author: "-Bucky Barnes"
}, {
    text: "I AM INEVITABLE.",
    author: "-Thanos"
}, {
    text: "NO MISTAKES. NO DO-OVERS. LOOK OUT FOR EACHOTHER. THIS IS THE FIGHT OF OUR LIVES.",
    author: "-Cap"
}, {
    text: "ITS AN IMPERFECT WORLD, BUT ITS THE ONLY ONE WE'VE GOT.",
    author: "-Tony Stark"
}, {
    text: "I WOULD RATHER BE A GOOD MAN THAN A GREAT KING.",
    author: "-Thor Odinson"
}, {
    text: "IM MARRY POPPINS YALL.",
    author: "-Yondu"
}, {
    text: "I HAVE NOTHING TO PROVE TO YOU.",
    author: "-Carol Danvers"
}, {
    text: "YOU GET HURT, HURT EM BACK. YOU GET KILLED, WALK IT OFF.",
    author: "-Steve Rogers"
}, {
    text: "AS FAR AS IM CONCERNED, THATS AMERICAS ASS.",
    author: "-Scott Lang"
}

];


function generate() {

let ranNum = Math.floor(Math.random() * quoteArr.length);
console.log(quoteArr);

document.querySelector("blockquote").innerText = quoteArr[ranNum].text;
document.querySelector("cite").innerText = quoteArr[ranNum].author;
};

const button = document.querySelector('button');

/* make diff random backgrounds(images?)

//let backClass = Math.floor(Math.random() * 10) + 1;
//let background = document.querySelector('main');


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