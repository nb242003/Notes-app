const notescon=document.querySelector(".notes");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notescon.innerHTML = localStorage.getItem("notes");
}

shownotes();

function updateStorage(){
    localStorage.setItem("notes", notescon.innerHTML);
}


createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    notescon.appendChild(inputBox).appendChild(img);
})


notescon.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown", event =>{
    if(event.key === "ENTER"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
