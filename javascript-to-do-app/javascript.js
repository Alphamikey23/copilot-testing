/* Add a new task to the list, Add serial numbers to the newly added task , modify the function in such a way if user press enters the task gets added*/

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');   
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');

    // Add serial number
    const taskCount = taskList.children.length + 1;
    const taskSpan = document.createElement('span');
    taskSpan.textContent = `${taskCount}. ${taskText} `;
    li.appendChild(taskSpan);

    // Add complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };
    li.appendChild(completeBtn);

    // Optional: Add a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
        // Update serial numbers after removal
        Array.from(taskList.children).forEach((item, idx) => {
            const text = item.firstChild.textContent.replace(/^(\d+\.\s)/, '');
            item.firstChild.textContent = `${idx + 1}. ${text}`;
        });
    };
    li.appendChild(removeBtn);

    taskList.appendChild(li);
    taskInput.value = '';
}

// Add event listener to input for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if inside a form
            addTask();
        }
    });
});



