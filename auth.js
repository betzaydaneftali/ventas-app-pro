import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFebjxsRb4wV8rLYmsIVe2cY0BAVmwtsU",
    authDomain: "ventas-app-pro-a6b1c.firebaseapp.com",
    projectId: "ventas-app-pro-a6b1c",
    storageBucket: "ventas-app-pro-a6b1c.firebasestorage.app",
    messagingSenderId: "143223445351",
    appId: "1:143223445351:web:50d1f1ec3adf67454cc1c2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "index.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};
