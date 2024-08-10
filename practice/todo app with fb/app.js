import {
  db,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  increment,
} from "./firebase.js";

let list = document.getElementById("list");

const add = async () => {
  let todo = document.getElementById("todo");
  let ref = collection(db, "todos");
  await addDoc(ref, {
    id: increment(1),
    todo: todo.value,
  });

  console.log("todo added");
  //   list.innerHTML += `<li>${todo.value}</li>`;
  todo.value = "";
};

const addtodo = document.getElementById("addtodo");
addtodo.addEventListener("click", add);
