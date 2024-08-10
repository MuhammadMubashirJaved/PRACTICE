import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user", user);
  } else {
    console.log("User not exist");
  }
});

let signup = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      const user = res.user;
      console.log("response", user);
    })    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorCode);
    });
};

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);
