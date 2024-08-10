let input = document.getElementById("input");
let list = document.getElementById("list");

function Add() {
  list.innerHTML += `<div>
    <h1>${input.value}</h1>
        <button onclick="Delete()">Delete</button>
        </div>
        `;
  input.value = "";
}

function Delete(e) {
  e.parentElement.remove()
}
