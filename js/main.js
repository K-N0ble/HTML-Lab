//sanity check
console.log("Hello World!");

//footer copyright date
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();

console.log(`Today's date is: ${d}`);

//greeting
 const greet = document.getElementById("greeting");
 const greetingMessage = document.getElementById("message");
 const morning = document.getElementById("morning");
 const afternoon = document.getElementById("afternoon");
 const evening = document.getElementById("evening");

if (d.getHours() <= 11) {
    greet.textContent = "Good morning!";
    greetingMessage.style.background = "rgb(255, 255, 204";
    greet.style.color = "black";
    afternoon.style.display = "none";
    evening.style.display = "none";
} else if (d.getHours() <= 18){ 
    greet.textContent = "Good afternoon!";
    greetingMessage.style.background = "rgb(255, 167, 133)";
    morning.style.display = "none";
    evening.style.display = "none";
} else {
    greet.textContent = "Good evening!";
    greetingMessage.style.background = "rgb(176, 180, 207)";
    morning.style.display = "none";
    afternoon.style.display = "none";
}



