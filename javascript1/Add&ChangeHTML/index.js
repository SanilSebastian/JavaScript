// ------------- EXAMPLE 1  --------------

// STEP 1 CREATE THEMEE ELEMENT
// const newH1=document.createElement("h1");

// STEP 2 ADD ATTEIBUTES/PROPERTIES
// newH1.textContent="I like pizza";
// newH1.id="myH1";
// newH1.style.color="tomato";
// newH1.style.textAlign="center";

// STEP 3 PPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2=document.getElementById("box2");
// document.body.insertBerfore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBerfore(newH1, boxes[0]);

// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);

// ------------- EXAMPLE 3  --------------

// STEP 1 CREATE THEMEE ELEMENT
const newListItem=document.createElement("li");

// STEP 2 ADD ATTEIBUTES/PROPERTIES
newListItem.textContent="coconut";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";

// STEP 3 PPEND ELEMENT TO DOM
document.getElementById("fruits").append(newListItem);

// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItem);