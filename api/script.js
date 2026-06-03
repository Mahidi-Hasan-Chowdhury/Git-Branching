const userContainer = document.getElementById('user-container');
const userForm = document.getElementById('user-form');

// Local state to store users after the initial fetch
let localUsers = [];

/**
 * Initial API Call
 */
async function init() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        // Load API data into our local state
        localUsers = await response.json();
        renderUsers();
    } catch (error) {
        userContainer.innerHTML = `<p class="status-msg" style="color:red;">Error: ${error.message}</p>`;
    }
}

/**
 * UI Render Function
 * Clears the container and rebuilds it based on the current localUsers array
 */
function renderUsers() {
    userContainer.innerHTML = '';

    if (localUsers.length === 0) {
        userContainer.innerHTML = '<p class="status-msg">The list is empty. Add a user above!</p>';
        return;
    }

    localUsers.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <div class="user-info">
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>ID:</strong> ${user.id}</p>
            </div>
            <button class="delete-btn" onclick="deleteUser(${user.id})">Remove User</button>
        `;
        userContainer.appendChild(card);
    });
}

/**
 * Handle Add User Form Submission
 */
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const newUser = {
        id: Date.now(), // Generate a unique ID using timestamp
        name: nameInput.value,
        email: emailInput.value
    };

    // Add new user to the top of our local list
    localUsers.unshift(newUser);

    // Refresh the UI and clear inputs
    renderUsers();
    userForm.reset();
    nameInput.focus();
});

/**
 * Handle Delete User
 * @param {number} userId - The unique ID of the user to remove
 */
window.deleteUser = function(userId) {
    // Filter the array to remove the specific user
    localUsers = localUsers.filter(user => user.id !== userId);
    
    // Refresh the UI to show the updated list
    renderUsers();
};

// Start the application
init();