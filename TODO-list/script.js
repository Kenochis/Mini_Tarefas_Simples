const lista = document.getElementById('lista');
const input = document.getElementById('campo');

// input.value → texto digitado.
// trim() → remove espaços extras.
const btnAdd = document.getElementById('btnAdd').addEventListener("click", () => {
    if (input.value.trim() === "") { 
        input.focus();
    } else {
        const tarefaNova = document.createElement('li');
        tarefaNova.classList.add('tarefa');

        tarefaNova.innerHTML = `
        <div class="esquerda">
            <input type="checkbox" class="checkbox">
            <span class="txt">${input.value}</span>
        </div>

        <button class="btnDelete">Delete</button>
        `

        lista.appendChild(tarefaNova);
    }
});

lista.addEventListener("click", (event) => {

    // pega o <li> mais próximo (a tarefa clicada).
    const tarefa = event.target.closest('.tarefa');

    // se não clicou dentro de uma tarefa, ignora.
    if (!tarefa) return;

    // Clicou no checkbox → risca o texto.
    if (event.target.tagName === "INPUT") {

        // pega o span SOMENTE dessa tarefa.
        const txt = tarefa.querySelector('.txt');

        // adiciona/remove o risco.
        txt.classList.toggle('risco');
    } 
    
    // Clicou no botão → remove a tarefa.
    if (event.target.tagName === "BUTTON") {
        tarefa.remove();
    }
});