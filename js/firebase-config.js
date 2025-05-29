import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAc2ixiSG4qw-susD9fvp4D99TpG5lF1jA",
  authDomain: "loja-maquiagem-nota10.firebaseapp.com",
  projectId: "loja-maquiagem-nota10",
  storageBucket: "loja-maquiagem-nota10.firebasestorage.app",
  messagingSenderId: "95748073133",
  appId: "1:95748073133:web:c93bae36984f20a358c824",
  databaseURL: "https://nota10-56108-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

window.salvarPedido = function(produto) {
  push(ref(db, 'pedidos'), {
    produto,
    data: new Date().toLocaleString()
  });
};

window.loginEmail = function() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  signInWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Login feito com sucesso"))
    .catch(e => alert("Erro: " + e.message));
};

window.loginGoogle = function() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => alert("Login com Google feito com sucesso"))
    .catch(e => alert("Erro: " + e.message));
};