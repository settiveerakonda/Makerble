// Get elements
const feedbackTab = document.getElementById('feedbackTab');
const feedbackSection = document.getElementById('feedbackSection');
const newFeedbackBtn = document.getElementById('newFeedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const closeFeedbackModal = document.getElementById('closeFeedbackModal');
const addFeedbackBtn = document.getElementById('addFeedbackBtn');
const feedbackText = document.getElementById('feedbackText');
const feedbackList = document.getElementById('feedbackList');

// Show Feedback Section
feedbackTab.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  feedbackSection.classList.remove('hidden'); // Show feedback section
});

// Open Feedback Modal
newFeedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.remove('hidden'); // Show modal
});

// Close Feedback Modal
closeFeedbackModal.addEventListener('click', () => {
  feedbackModal.classList.add('hidden'); // Hide modal
});

// Add Feedback
addFeedbackBtn.addEventListener('click', () => {
  const feedback = feedbackText.value; // Get feedback text
  if (feedback) {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-card bg-white p-4 rounded shadow mb-2'; // Use existing card classes
    feedbackItem.innerHTML = `<p>${feedback}</p>`; // Use template literals to insert feedback

    // Insert new feedback at the beginning of the feedback list
    feedbackList.insertBefore(feedbackItem, feedbackList.firstChild); // Insert before the first child

    feedbackText.value = ''; // Clear input field
    feedbackModal.classList.add('hidden'); // Hide modal after submission
  }
});
