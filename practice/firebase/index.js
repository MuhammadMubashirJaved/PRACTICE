import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./firebase.js";

const notify = document.getElementById("notify");

// signup
const signup = (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "" || password == "") {
    notify.innerText = "Enter an email and password";
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log("response", user);
        if (user) {
          notify.innerText = "User Created successfully";
        } else {
          notify.innerText = "SorrySomething Wrong";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notify.innerText = errorMessage;
      });
  }
};

let signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signup);

// login

const login = (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "" || password == "") {
    notify.innerText = "Enter an email and password";
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log("response", user);
        if (user) {
          // notify.innerText = "User login successfully";
        } else {
          notify.innerText = "Sorry Something Wrong";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        notify.innerText = errorCode;
      });
  }
};

let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", login);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector(".user-form").classList.add("hide");
    document.querySelector(".admin-page").classList.add("show");
  }
});

// logout

const logOut = (event) => {
  event.preventDefault();
  signOut(auth)
    .then(() => {
      document.querySelector(".user-form").classList.remove("hide");
      document.querySelector(".admin-page").classList.remove("show");
    })
    .catch((error) => {
      console.log(error);
    });
};

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logOut);
