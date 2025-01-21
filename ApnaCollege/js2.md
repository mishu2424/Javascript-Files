What is Window Object?
```
The window object represents an open window in a browser. It is browser's object (not Javascript's) and is automatically created by browser.
It is a global object with lots of properties and methods.
Even console.log() or alert() or prompt etc. are parts of window object.
To see what that object looks like run it on browser's console.
type window
```

DOM(DOCUMENT OBJECT MODEL)
```
When a web page is loaded, the browser creates a DOM of the page.
When we link our html file with JS file, an object named 'document' is created under 'window' object.
when we console.log(window.document) -> we can see the whole code.
when we will console.dir(window.document) -> we will get the whole information of the document object.

so, the structure is like that->
window(node)-> document(node) ->html(node) -> 1.head(node)(meta,meta,title,link) 2.body(node)((header(childnode)->child elements,main(childnode)->child elements,footer(childnode)->child elements), Script(node))
This structure is like a tree like structure. So this process is called Model.



To sum this up, accessing the html code from the JS file is called DOM.
```

Why do we put js script tag just before the ending body tag?
```
Suppose, we placed the sjs script tag inside the head tag where all our linked files are placed.
In that case, When will load our page, and we console.dir(document.body), we will receive null which means an empty object. As the js script tag is being loaded before loading body part of the code.

That is why we put js script tag just before the ending body tag.
```
What is Node?
```
 A node is any individual element in the DOM tree. This could be elements, attributes, texts, comments, and so on.
```

DOM Manipulation
```
selecting with id ->
document.getElementById('') //it returns a single object. It will return null if the id we are searching with doesn't exist in the code.
selecting with class ->
document.getElementsByClassName('') //it returns array of HTMLCollection. If the class name doesn't exist in the code, it will return empty array.
selecting with tag ->
document.getElementsByTagName('') //it returns a htmlCollection which array like object.

important note-
If we want to get multiple items from the html document, we use getElementsByClassName() which returns a HTMLCollection which looks like an array but a object.
If we want to select a specific item from the html document, we use getElementById() which returns a single object.

querySelector
document.querySelector('#id/.class/tag') //returns the first matched element as a single object.
querySelectorAll
document.querySelectorAll('#id/.class/tag') //returns a nodeList all the matched elements. 

important note-
If we want to get multiple items from the html document, we use querySelectorAll() which returns a nodeList that looks like an array but a object.
If we want to select a specific item from the html document, we use querySelector() which returns a single object.

NodeList vs HTMLCollection([FreeCodeCamp](https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/))

->Similarities->
They both aren't arrays even though they look like one. But they have features that make them have some behaviors of arrays.
You can access the contents of both using zero-based indexing like you would with an array. And you can also use the length property to find the length of both an HTMLCollection and a NodeList.
->Differences->
Live Collections vs Static Collections
The concepts of "live" and "static" refer to how an HTMLCollection and NodeList behave in response to changes in the document structure.

An HTMLCollection is always live
What does it mean to say an HTMLCollection is always live? It means when there is a change in the document, it will be automatically updated to reflect the change.

A NodeList is sometimes static
A NodeList is not always live. It can be static or live depending on how it is generated. For example, a NodeList generated with the querySelectorAll method is static. A change in the document isn't reflected in the NodeList.

How to Access Items in the Collection->
<div id="container">
  <button id="btn1" name="first-name">First Button</button>
  <button id="btn2">Second Button</button>
  <button id="btn3">Third Button</button>
</div>
Example with HTMLCollection:
const container = document.querySelector('#container')
const buttons = container.children // returns HTMLCollection

console.log(buttons[0])// using the index
console.log(buttons.namedItem("btn1")) // using the id attribute
console.log(buttons.namedItem("first-name")) // using the name attribute

Example with NodeList:
const container = document.querySelector('#container')
const buttons = container.childNodes // returns a NodeList

console.log(buttons[1])// using the index
console.log(buttons.namedItem("btn1")) // throws an error
console.log(buttons.namedItem("first-name")) // throws an error

How to loop through the collection->
You cannot loop through an HTMLCollection with any of the array methods. Unless you first create an array from the collection.you can use the for...of statement.

But with a NodeList, you can use the forEach method to loop through it. But you cannot use other array methods like map, filter, and others without first creating an array from it.


Which One Should You Use?
The question of whether you should use an HTMLCollection or a NodeList depends on the use case or specific context.
If you want a live collection that automatically updates when there's a change in the document, then you should use an HTMLCollection. But if you prefer a static collection that doesn't update with a change in the document, then you should use a NodeList.


properties
tagName: returns tag for element nodes
innerText: returns the text content of the element and all its children.
innerHTML: returns the plain text or HTML contents in the element.
textContent: returns textual content even for hidden elements.


firstChild->
The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.
<p id="para-01">
  <span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
In the above, the console will show '#text' because a text node is inserted to maintain the whitespace between the end of the opening <p> and <span> tags. Any whitespace will create a #text node, from a single space to multiple spaces, returns, tabs, and so on.

Another #text node is inserted between the closing </span> and </p> tags.

If this whitespace is removed from the source, the #text nodes are not inserted and the span element becomes the paragraph's first child.
<p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script>
Now the console will show 'SPAN'.

To avoid the issue with node.firstChild returning #text or #comment nodes, Element.firstElementChild can be used to return only the first element node.

lastChild ->
The read-only lastChild property of the Node interface returns the last child of the node, or null if there are no child nodes.

Changing a value of an attribute->
document.getElementsByTag(“img”).src = “test.jpg”;

Adding and deleting elements->
var div = document.createElement(‘div’);
var newContent = document.createTextNode("Hello World!"); 
div.appendChild(newContent);

Inserting elements->
node.append() //add at the end of node element.
node.prepend() //add at the beginning of node element.
node.before() //add before the the node element.
node.after() //add after the node element.

Deleting elements->
node.remove();
var elem = document.querySelector('#header');
elem.parentNode.removeChild(elem);

Replace elements->
var div = document.querySelector('#div');
var newDiv = document.createElement(‘div’);
newDiv.innerHTML = "Hello World2"
div.parentNode.replaceChild(newDiv, div);

Writing directly into the HTML output stream->
document.write(“<h1>Hello World!</h1><p>This is a paragraph!</p>”);

getAttribute(attr) //returns a string.
Now if we only want to get the class we can use classList property which returns a array like object.

Example->
<li id="myPlace" class="important-places first-place fav-place">place 1</li>

//js classList property
const place=document.getElementById('myPlace');
const classList=place.classList //getting an array like object called DOMTokenList. We can loop through it.
console.log(classList)

//js getAttribute property
const classes=place.getAttribute('class') //returns a string
console.log(classes)
setAttribute(attr, val)->
<p class="myP"></p>
let nP=document.querySelector('.myP');
nP.setAttribute('class', 'myPara');
parentDiv.append(nP);
Using classList->
nP.classList.remove('myPara')
nP.classList.add('newPara')
toggle(className): Adds the class if it's not present, or removes it if it is.
element.classList.toggle('toggle-class');



Matches, Closest, and Contains:

matches() checks if an element matches a certain style rule. For example, if you have a button and you want to see if it has a class of "active", you could use button.matches('.active'). It will return true if the button has that class, and false if it doesn't.
const button = document.querySelector('button');
if (button.matches('.active')) {
  console.log('The button is active');
} else {
  console.log('The button is not active');
}

If you have an element and you want to find its nearest parent with a certain class, you can use **closest()** like this: element.closest('.classname').

For instance, if you have a link inside a list item and you want to find the nearest list item, you could do link.closest('li').
const link = document.querySelector('a');
const listItem = link.closest('li');
console.log(listItem);

And contains() checks if one element is inside another. For example, if you have a div and a paragraph inside it, you could check if the div contains the paragraph with div.contains(paragraph). It will return true if the paragraph is inside the div, and false if it's not.
const div = document.querySelector('div');
const paragraph = document.querySelector('p');
if (div.contains(paragraph)) {
  console.log('The div contains a paragraph');
} else {
  console.log('The div does not contain any paragraph');
}
```
difference between childNodes and children
```
Linebreak (text node) will be considered 1st child node of body element, whereas the actual first element will be considered the 1st child(children).
console.log(document.body.childNodes);
console.log(document.body.children);

Example:
<div>
  This is a text
  <p class="paragraph">First paragraph</p>
  <p class="paragraph">First paragraph</p>
</div>
Here is a div with a text node and two element nodes (paragraphs). Each paragraph also has a text node.
Assuming you wanted to get only the element nodes in the div, you can use the children property on the div. And it will return an HTMLCollection containing only the element nodes.
But if you wanted all the nodes and not just the element nodes, then you can use the childNodes property to get all the nodes.
const divElement = document.querySelector('div')

console.log(divElement.children) // returns an HTMLCollection
console.log(divElement.childNodes) // returns a NodeList
```
difference between append and appendChild
```
both append() and appendChild() are used to add elements or content to the DOM, but they have some differences in their behavior. 
1.No, only accepts nodes vs Yes, accepts both nodes and text strings.
2.Moves the node if it's already in the DOM vs Does not replace an existing node; it adds it at the end.
3.No, only one node at a time vs Yes, you can append multiple nodes or text.

Example with Multiple Arguments (append()):

let parent = document.getElementById("parent");
let text = "Hello ";
let child = document.createElement("span");
child.textContent = "World!";
parent.append(text, child);
```

remove() vs removeChild()?
```
removeChild(): A method of a parent node.
let parent = document.getElementById("parent");
let child = document.getElementById("child");
parent.removeChild(child);
Returns: It returns the removed node, allowing you to save or manipulate it if necessary.
Usage: You must call this method on the parent element, passing the child node you want to remove.


remove(): A method of a node (can be called directly on the node itself).
let child = document.getElementById("child");
child.remove();
Returns: It does not return anything.
Usage: You call this method directly on the node you want to remove.


```

Moving elements from one container to another ->
```
<div id="parent1">
    <div id="child">This is a child.</div>
</div>

<div id="parent2"></div>

let child = document.getElementById('child');
let parent2 = document.getElementById('parent2');

// Move the child from parent1 to parent2
parent2.append(child);

console.log(child.parentElement); // Logs the new parent element, parent2

```


Events
```
<!-- Different ways to set event -->
     <!-- option 1 -->
     <button onclick="document.body.style.backgroundColor='red'">Make Red</button>
<!-- option 2 -->
     <button onclick="makeBlue()">Make Blue</button>
     const makeBlue=()=>{
            document.body.style.backgroundColor='blue';
        }
<!-- option 3 -->
     <button id="makeYellow">Make Yellow</button>
        const makeYellow=document.getElementById('makeYellow');
        makeYellow.onclick=makeYellowBg;
        function makeYellowBg(){
            document.body.style.backgroundColor='yellow';
        }
<!-- option 4 -->
     <button id="makePink">Make Pink</button>
     const makePinkBtn=document.getElementById('makePink');
        makePinkBtn.addEventListener("click",()=>{
            document.body.style.backgroundColor='pink';
        })
```