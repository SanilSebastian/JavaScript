// DOM Navigation = The process of navigation through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------------- .children -----------------

const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundcolor="yellow";