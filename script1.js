document.addEventListener('DOMContentLoaded', function() {
    // Event listener for login form submission
    const loginFrom = document.getElementById('loginForm');
    if (loginFrom) {
        loginFrom.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate successful login
            window.location.href = 'valide.php';
        });
    }

    // Event listener for sending a message
    const sendMessageButton = document.getElementById('sendMessageButton');
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', function() {
            const messageInput = document.getElementById('messageInput');
            const messageText = messageInput.value.trim();

            if (messageText !== "") {
                const messageContainer = document.createElement('div');
                messageContainer.classList.add('message', 'sent');
                messageContainer.textContent = messageText;

                document.querySelector('.messages').appendChild(messageContainer);
                messageInput.value = "";
                messageInput.focus();

                // Simulate receiving a message
                setTimeout(function() {
                    const receivedMessage = document.createElement('div');
                    receivedMessage.classList.add('message', 'received');
                    receivedMessage.textContent = "Ceci est une réponse automatique.";
                    document.querySelector('.messages').appendChild(receivedMessage);
                }, 1000);
            }
        });
    }

    // Event listener for selecting a contact
    const contacts = document.querySelectorAll('.contact');
    contacts.forEach(contact => {
        contact.addEventListener('click', function() {
            document.querySelector('.contact.active').classList.remove('active');
            contact.classList.add('active');
            const contactName = contact.querySelector('.contact-name').textContent;
            document.querySelector('.message-header .contact-name').textContent = contactName;
            
            // Load new conversation (simulated for now)
            const messagesContainer = document.querySelector('.messages');
            messagesContainer.innerHTML = '';

            const sentMessage = document.createElement('div');
            sentMessage.classList.add('message', 'sent');
            sentMessage.textContent = `Bonjour ${contactName}!`;

            const receivedMessage = document.createElement('div');
            receivedMessage.classList.add('message', 'received');
            receivedMessage.textContent = `Bonjour, comment ça va ${contactName}?`;

            messagesContainer.appendChild(sentMessage);
            messagesContainer.appendChild(receivedMessage);
        });
    });

    // Event listeners for navbar icons
    const homeIcon = document.getElementById('homeIcon');
    if (homeIcon) {
        homeIcon.addEventListener('click', function() {
            window.location.href = 'dis.html';
        });
    }

    const profileIcon = document.getElementById('profileIcon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            window.location.href = 'online.html';
        });
    }

    const trashIcon = document.getElementById('trashIcon');
    if (trashIcon) {
        trashIcon.addEventListener('click', function() {
            window.location.href = 'cor.html';
        });
    }

    const settingsIcon = document.getElementById('settingsIcon');
    if (settingsIcon) {
        settingsIcon.addEventListener('click', function() {
            window.location.href = 'set.html';
        });
    }

    const logoutIcon = document.getElementById('logoutIcon');
    if (logoutIcon) {
        logoutIcon.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
