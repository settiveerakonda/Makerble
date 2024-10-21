// Function to show the relevant section
function showSection(sectionId) {
    const sections = ['eventsSection', 'contentSection', 'projectsSection', 'feedbackSection', 'taskSection', 'organizationsSection'];
    sections.forEach(section => {
        document.getElementById(section).classList.toggle('hidden', section !== sectionId);
    });
}

// Handle Tab Switching with Event Delegation
document.querySelector('aside').addEventListener('click', function(event) {
    if (event.target.matches('[id$="Tab"]')) {
        showSection(event.target.id.replace('Tab', 'Section'));
    }
});

// Handle New Event Modal
function toggleModal(modalId, display) {
    document.getElementById(modalId).style.display = display;
}

document.getElementById('newEventBtn').onclick = function() {
    toggleModal('eventModal', 'block');
};

document.getElementById('closeEventModal').onclick = function() {
    toggleModal('eventModal', 'none');
};

// Add Event Button Functionality
document.getElementById('addEventBtn').onclick = function() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;

    if (eventName && eventDate) {
        const eventsList = document.getElementById('eventsList');
        const newEventCard = document.createElement('div');
        newEventCard.className = 'event-card bg-white p-4 rounded shadow';
        newEventCard.innerHTML = `
            <h3 class="text-xl font-semibold">${eventName}</h3>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Description:</strong> ${eventDescription}</p>
            <div class="flex items-center mt-2">
                <button class="like-btn bg-green-500 text-white rounded px-2 py-1 mr-2">👍 Like</button>
                <span class="like-count">0 Likes</span>
                <button class="comment-btn bg-blue-500 text-white rounded px-2 py-1 ml-4">💬 Comment</button>
            </div>`;

        // Adding like functionality
        newEventCard.querySelector('.like-btn').onclick = function() {
            let likeCount = parseInt(newEventCard.querySelector('.like-count').innerText) || 0;
            likeCount += 1;
            newEventCard.querySelector('.like-count').innerText = `${likeCount} Likes`;
        };

        // Adding comment functionality
        newEventCard.querySelector('.comment-btn').onclick = function() {
            const comment = prompt('Enter your comment:');
            if (comment) {
                alert(`Comment added: ${comment}`);
            }
        };

        // Insert the new event card at the beginning of the list
        eventsList.insertBefore(newEventCard, eventsList.firstChild);

        // Clear the input fields and close the modal
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
        document.getElementById('eventDescription').value = '';
        toggleModal('eventModal', 'none');
    } else {
        alert('Please fill in all fields.');
    }
};

// Close modal on clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        toggleModal('eventModal', 'none');
    }
};
