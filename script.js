let listElement = document.querySelector("#input_task");
let dataTask = document.querySelector("#data_task");

lista = []

function addTask() {


    if (listElement == "" || dataTask == "") {
        alert("Preencha todos os campos para proseguir!");
    }
    else {

        let listTask = listElement.value;
        let data = dataTask.value;

        const newTask = {

            nome: listTask,
            dataTask: data,
            status: "Pendente"

        };
        lista.push(newTask);




        alert(list)
        renderTask();
    }
}


function renderTask() {

    if (lista.length === 0) {
        list.innerHTML += `
        
        <div class = "task_zero">
        <i class="fas fa-clipboard-list text-9xl mb-3 clipboar" ></i>
                        <p>Nenhuma tarefa por aqui ainda.</p>
        
        </div>
        
        
        
        
        `;
    }

    else {
        list.innerHTML = `<div class ="card_task">`;

    }

}

renderTask();

function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}