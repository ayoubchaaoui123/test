eruda.init();

eruda.show();

const p = document.querySelector("div")
let text = p.textContent
let arr = text.split("\n").filter(el=>el !== "").map(el=>`<p>${el}</p>`)
let newText = ""
arr.forEach(el=>{
newText += el
})
p.innerHTML = newText
