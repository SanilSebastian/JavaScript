// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and Structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of web page.

const username= " MONKEY D LUFFY";
const welcomeMsg=document.getElementById("welcome-msg");

welcomeMsg.textContent+=username===""?`Guest`:username;

console.dir(document);