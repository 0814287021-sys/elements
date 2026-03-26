console.log("Script started")

function start(){
    console.log("Click");

    // Create an h1 heading
    let heading=document.createElement("h1");

    // Step up text and size
    heading.innerText = "Attendence";
    heading.style.color = "lightblue";
    heading.style.textDecoration = "Bold";

    // Add the h1 to the page
    document.body.appendChild(heading);

    // Ask user for name
    let userName = prompt("Whats your name?");
    console.log("userName");
}

function addName(){

}