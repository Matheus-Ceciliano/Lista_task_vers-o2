let task = JSON.parse(localStorage.getItem("task")) || [];


function renderTask() {
    const lista = document.getElementById("list");
    const counter = document.getElementById("contador");

    lista.innerHTML = "";

    counter.innerHTML = `${task.length} ${task.length === 1 ? 'Tarefa' : 'Tarefas'}`;

    if (task.length === 0) {
        lista.innerHTML = `
                    <div class="task_zero">
                        <i class="clipboar fas fa-clipboard-list text-5xl mb-3"></i>
                        <p>Nenhuma tarefa por aqui ainda.</p>
                    </div>`;
        return;
    }

    task.forEach((task, index) => {

        const isCompleted = task.status === "Concluído";

        lista.innerHTML += `
        <div class="listContainer" id="${isCompleted ? 'completo_list' : ''}">
                    <div class="coluna1_task">
                        <div class="info ">
                            <h3 class="${isCompleted ? 'completo' : ''}" >${task.name}</h3>
                            <span class="statuss ${isCompleted ? 'completed' : 'noCompleted'}">
                                ${task.status}
                            </span>
                        </div>
                        <p class="text-sm text-slate-400 mt-1 datas">
                             <i class="far fa-calendar-alt mr-1"></i> ${formatDate(task.date)}
                        </p>
                    </div>

                    <div class="coluna2">
                        <button  onclick="toggleTask(${index})"   class=" confimed ${isCompleted ? 'completo_botton' : 'nocompleto_botton'}">
                                <i class="fas ${isCompleted ? 'fa-undo' : 'fa-check'}"></i>
                        
                        </button>



                        <button onclick="deleteTask(${index})"
                             class="delete">
                                <i class="fas fa-trash-can"></i>
                        </button>
                    </div>

                </div>
        
   
        
        
        
        
        
        
        `;



    });

}





function addTask() {
    const nameInput = document.getElementById("input_task");
    const dateInput = document.getElementById("data_task");


    if (!nameInput.value || !dateInput.value) {
        alert("Preencha todos os campos!");
        return;
    }

    const newsTask = {
        name: nameInput.value,
        date: dateInput.value,
        status: "Pendente"
    };



    task.push(newsTask);


    salvarDados();

    nameInput.value = "";
    dateInput.value = "";


}






function toggleTask(index) {
    task[index].status = task[index].status === 'Pendente' ? 'Concluído' : 'Pendente';
    salvarDados();
}

function deleteTask(index) {
    if (confirm("Deseja mesmo excluir?")) {
        task.splice(index, 1);
        salvarDados();
    }

}

function formatDate(datestr) {
    const [ano, mes, dia] = datestr.split("-");
    return `${dia}/${mes}/${ano}`;
}


function salvarDados() {
    localStorage.setItem("task", JSON.stringify(task));
    renderTask();

}

renderTask();
