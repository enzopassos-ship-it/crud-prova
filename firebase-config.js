import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"; // Importa a função de inicialização da aplicação Firebase
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"; // Importa a função para aceder à base de dados em tempo real


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSIa9FOFeT9ku39inFJmRE-QRZPX-_pPU",
  authDomain: "lu-calculadora.firebaseapp.com",
  databaseURL: "https://lu-calculadora-default-rtdb.firebaseio.com",
  projectId: "lu-calculadora",
  storageBucket: "lu-calculadora.firebasestorage.app",
  messagingSenderId: "188075316110",
  appId: "1:188075316110:web:532b5a7329c07a984f8adf",
  measurementId: "G-1ZYL060N0Z"
};
const app = initializeApp(firebaseConfig); // Inicializa a instância da aplicação Firebase com a configuração
export const db = getDatabase(app); // Exporta a referência da base de dados pronta a ser utilizada noutros móduloso