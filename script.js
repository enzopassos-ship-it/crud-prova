import { db } from "./firebase-config.js";
import { ref, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const itensRef = ref(db, "itens");
const input = document.getElementById("campoTexto");
const lista = document.getElementById("listaItens");
let idSelecionado = null;

function adicionarItem() {
    push(itensRef, { texto: input.value });
    input.value = "";
}

onValue(itensRef, (snapshot) => {
    lista.innerHTML = "";
    const dados = snapshot.val();

    if (dados) {
        Object.keys(dados).forEach((id) => {
            const li = document.createElement("li");
            li.textContent = dados[id].texto;

            li.onclick = () => {
                idSelecionado = id;
                input.value = dados[id].texto;
            };

            lista.appendChild(li);
        });
    }
});

function editarItem() {
    if (idSelecionado) {
        update(ref(db, `itens/${idSelecionado}`), { texto: input.value });
        input.value = "";
        idSelecionado = null;
    }
}

function deletarItem() {
    if (idSelecionado) {
        remove(ref(db, `itens/${idSelecionado}`));
        input.value = "";
        idSelecionado = null;
    }
}

window.adicionarItem = adicionarItem;
window.editarItem = editarItem;
window.deletarItem = deletarItem;