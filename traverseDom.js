var itemList = document.querySelector('#items');
//console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);
//console.log(itemList.childNodes);
//console.log(itemList.parentElement);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.innerHTML = "<a href='https://www.google.com'> Google </a>";
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = 'red';
//console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize='40px';
container.insertBefore(newDiv, h1);

var newDiv1 = document.createElement('div');
newDiv1.className = 'hello';
newDiv1.id = 'hello1';
newDiv1.setAttribute('title','Hello Div');
var newDivText1 = document.createTextNode('Hello World');
newDiv1.appendChild(newDivText1);
console.log(newDiv1);
var list = document.querySelector('div .list-group');
var listRow = document.querySelector('div li');
list.insertBefore(newDiv1,listRow);
