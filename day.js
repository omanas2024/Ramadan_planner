function addTask() {
    let taskSelect = document.getElementById("taskSelect");
    let taskList = document.getElementById("taskList");

    if (taskSelect.value !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = taskSelect.value;
        taskList.appendChild(listItem);
    }
}

function increaseCount() {
    let count = document.getElementById("tasbeehCount");
    count.innerText = parseInt(count.innerText) + 1;
}

function decreaseCount() {
    let count = document.getElementById("tasbeehCount");
    if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1;
    }
}

function resetCount() {
    document.getElementById("tasbeehCount").innerText = "0";
}
