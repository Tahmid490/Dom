const root=document.getElementById("root")

//create element

const box=document.createElement("div")
box.classList.add("box")

const heading=document.createElement("h1")
const para=document.createElement("p")
const button=document.createElement("button")

const headingText=document.createTextNode("Hello World")
const paraText=document.createTextNode("I love JS")
const buttonText=document.createTextNode("Read More")

heading.appendChild(headingText)
para.appendChild(paraText)
button.appendChild(buttonText)



box.appendChild(heading)
box.appendChild(para)
box.appendChild(button)

root.appendChild(box)

box.replaceChild(heading)
console.log(box)


//string hisabe pass
// root.innerHTML=`<div class="box">
//           <h2 onclick="alert()">Hello</h2>     
//           <p>My name is Tahmid</p>      
//           <button>Click me</button>         
// </div>`