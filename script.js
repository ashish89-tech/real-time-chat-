const socket = io('http://localhost:3000');

const messages = document.getElementById('messages');
const input = document.getElementById('message-input');
const button = document.getElementById('send-button');

button.addEventListener('click', () => {
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
