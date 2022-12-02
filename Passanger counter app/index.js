//document.getElementById("count-el").innerText=5


let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0
function increment(){
  count+=1
countEl.textContent=count
   console.log(count)
}
  function save(){
    console.log(count)
  }
let welcomeEl=document.getElementById("welcome-el")
let name="joe "
let greeting="FANTASY STATION "

welcomeEl.textContent=greeting 


let saveEL=document.getElementById("save-el")
console.log(saveEl)
function save(){
let countStr=count+ " - "
    saveEL.textContent+=countStr
  countEl.textContent=0
  count=0
    console.log(count)
}



