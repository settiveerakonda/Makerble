// Select DOM elements
const newProjectBtn = document.getElementById('newProjectBtn');
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const addProjectBtn = document.getElementById('addProjectBtn');
const projectNameInput = document.getElementById('projectName');
const projectDescriptionInput = document.getElementById('projectDescription');
const projectsList = document.getElementById('projectsList');

// Function to open the modal
newProjectBtn.addEventListener('click', () => {
  projectModal.classList.remove('hidden');
});

// Function to close the modal
closeProjectModal.addEventListener('click', () => {
  projectModal.classList.add('hidden');
});

// Function to add a new project
addProjectBtn.addEventListener('click', () => {
  const projectName = projectNameInput.value.trim();
  const projectDescription = projectDescriptionInput.value.trim();

  if (projectName === "" || projectDescription === "") {
    alert("Please fill out both fields.");
    return;
  }

  // Create new project card
  const projectCard = document.createElement('div');
  projectCard.classList.add('border', 'p-4', 'rounded', 'shadow', 'mb-2');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('text-xl', 'font-bold', 'mb-2');
  projectTitle.textContent = projectName;

  const projectDesc = document.createElement('p');
  projectDesc.textContent = projectDescription;

  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDesc);

  // Insert new project at the beginning of the projects list
  projectsList.insertBefore(projectCard, projectsList.firstChild); // Insert before the first child

  // Clear the form
  projectNameInput.value = '';
  projectDescriptionInput.value = '';

  // Hide the modal
  projectModal.classList.add('hidden');
});
