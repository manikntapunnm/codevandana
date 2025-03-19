document.addEventListener("DOMContentLoaded", function() {
    window.addTask = function() {
        const taskInput = document.getElementById("taskInput");
        const userName = document.getElementById("userName");
        const userImage = document.getElementById("userImage");
        const taskPriority = document.getElementById("taskPriority");
        const pendingTasks = document.getElementById("pendingTasks");
        const taskText = taskInput.value.trim();
        const nameText = userName.value.trim();
        const imageUrl = userImage.value.trim();
        const priorityClass = taskPriority.value;
        const timestamp = new Date().toLocaleTimeString();

        if (taskText !== "" && nameText !== "" && imageUrl !== "") {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <img src="${imageUrl}" alt="avatar" style="width: 45px; height: auto;">
                    <span class="ms-2">${nameText}</span>
                </td>
                <td class="align-middle">${taskText} <small class='text-muted'>(${timestamp})</small></td>
                <td class="align-middle">
                    <h6 class="mb-0"><span class="badge ${priorityClass}">${taskPriority.options[taskPriority.selectedIndex].text}</span></h6>
                </td>
                <td class="align-middle">
                    <button class='btn btn-warning btn-sm' onclick='editTask(this)'>Edit</button>
                    <button class='btn btn-success btn-sm' onclick='completeTask(this)'>Complete</button>
                    <button class='btn btn-danger btn-sm' onclick='removeTask(this)'>Remove</button>
                </td>
            `;
            pendingTasks.appendChild(row);
            taskInput.value = "";
            userName.value = "";
            userImage.value = "";
        }
    };

    window.editTask = function(button) {
        const row = button.closest("tr");
        const taskCell = row.cells[1];
        const newText = prompt("Edit your task:", taskCell.textContent.trim());
        if (newText !== null && newText.trim() !== "") {
            taskCell.innerHTML = `${newText} <small class='text-muted'>(${new Date().toLocaleTimeString()})</small>`;
        }
    };

    window.completeTask = function(button) {
        const row = button.closest("tr");
        document.getElementById("completedTasks").appendChild(row);
        row.cells[3].innerHTML = `
            <button class='btn btn-primary btn-sm' onclick='moveToPending(this)'>Pending</button>
            <button class='btn btn-danger btn-sm' onclick='removeTask(this)'>Remove</button>
        `;
    };

    window.moveToPending = function(button) {
        const row = button.closest("tr");
        document.getElementById("pendingTasks").appendChild(row);
        row.cells[3].innerHTML = `
            <button class='btn btn-warning btn-sm' onclick='editTask(this)'>Edit</button>
            <button class='btn btn-success btn-sm' onclick='completeTask(this)'>Complete</button>
            <button class='btn btn-danger btn-sm' onclick='removeTask(this)'>Remove</button>
        `;
    };

    window.removeTask = function(button) {
        button.closest("tr").remove();
    };
});