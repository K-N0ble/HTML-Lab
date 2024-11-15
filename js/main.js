//sanity check
console.log("Hello World!");

//footer copyright date
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();

console.log(`Today's date is: ${d}`);

//greeting
const greet = document.getElementById("greeting");
if (d.getHours() <= 11) {
    greet.textContent = "Good morning!";
} else if (d.getHours() <= 18){ 
    greet.textContent = "Good afternoon!";
} else {
    greet.textContent = "Good evening!";
}


