// Get elements
const newTaskBtn = document.getElementById('newTaskBtn');
const taskModal = document.getElementById('taskModal');
const closeTaskModal = document.getElementById('closeTaskModal');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const taskStatus = document.getElementById('taskStatus');
const taskList = document.getElementById('taskList');

// Open Task Modal
newTaskBtn.addEventListener('click', () => {
  taskModal.classList.remove('hidden'); // Show modal
});

// Close Task Modal
closeTaskModal.addEventListener('click', () => {
  taskModal.classList.add('hidden'); // Hide modal
});

// Add Task
addTaskBtn.addEventListener('click', () => {
  const title = taskTitle.value.trim(); // Get task title
  const description = taskDescription.value.trim(); // Get task description
  const status = taskStatus.value; // Get task status

  // Check if all fields are filled
  if (title && description) {
    // Create a new task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card', 'bg-white', 'p-4', 'rounded', 'shadow', 'mb-2');
    taskCard.innerHTML = `<p><strong>Task:</strong> ${title}</p>
                          <p><strong>Description:</strong> ${description}</p>
                          <p><strong>Status:</strong> ${status}</p>`;

    // Insert new task at the beginning of the task list
    taskList.insertBefore(taskCard, taskList.firstChild); // Insert before the first child

    // Clear inputs
    taskTitle.value = ''; // Clear title input
    taskDescription.value = ''; // Clear description input
    taskStatus.selectedIndex = 0; // Reset status to default
    taskModal.classList.add('hidden'); // Hide modal after submission
  } else {
    alert("Please fill in both the title and description."); // Alert if fields are empty
  }
});
