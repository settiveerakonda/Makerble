// Get elements
const newOrganizationBtn = document.getElementById('newOrganizationBtn');
const organizationModal = document.getElementById('organizationModal');
const closeOrganizationModal = document.getElementById('closeOrganizationModal');
const addOrganizationBtn = document.getElementById('addOrganizationBtn');
const organizationName = document.getElementById('organizationName');
const organizationDescription = document.getElementById('organizationDescription');
const organizationsList = document.getElementById('organizationsList');

// Open Organization Modal
newOrganizationBtn.addEventListener('click', () => {
  organizationModal.classList.remove('hidden'); // Show modal
});

// Close Organization Modal
closeOrganizationModal.addEventListener('click', () => {
  organizationModal.classList.add('hidden'); // Hide modal
});

// Add Organization
addOrganizationBtn.addEventListener('click', () => {
  const name = organizationName.value.trim(); // Get organization name
  const description = organizationDescription.value.trim(); // Get organization description

  // Check if all fields are filled
  if (name && description) {
    // Create a new organization card
    const organizationCard = document.createElement('div');
    organizationCard.classList.add('organization-card', 'bg-white', 'p-4', 'rounded', 'shadow', 'mb-2');
    organizationCard.innerHTML = `<p><strong>Organization:</strong> ${name}</p>
                                  <p><strong>Description:</strong> ${description}</p>`;

    // Insert new organization at the beginning of the organizations list
    organizationsList.insertBefore(organizationCard, organizationsList.firstChild); // Insert before the first child

    // Clear inputs
    organizationName.value = ''; // Clear name input
    organizationDescription.value = ''; // Clear description input
    organizationModal.classList.add('hidden'); // Hide modal after submission
  } else {
    alert("Please fill in both the name and description."); // Alert if fields are empty
  }
});
