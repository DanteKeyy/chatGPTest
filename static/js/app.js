document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userInput = document.getElementById('user-input').value;
    const chatWindow = document.getElementById('chat-window');

    // Exibe a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerText = userInput;
    chatWindow.appendChild(userMessage);

    // Resposta automática do bot
    const botResponse = document.createElement('div');
    botResponse.classList.add('message', 'bot-message');
    botResponse.innerText = gerarResposta(userInput);
    chatWindow.appendChild(botResponse);

    // Limpa o campo de input
    document.getElementById('user-input').value = '';

    // Faz scroll para a última mensagem
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

function gerarResposta(input) {
    // Respostas simples baseadas em palavras-chave
    if (input.toLowerCase().includes('html')) {
        return 'HTML é a linguagem de marcação usada para criar páginas web.';
    } else if (input.toLowerCase().includes('css')) {
        return 'CSS é usado para estilizar o layout das páginas web.';
    } else if (input.toLowerCase().includes('javascript')) {
        return 'JavaScript é uma linguagem de programação usada para adicionar interatividade nas páginas web.';
    } else {
        return 'Desculpe, não entendi. Você pode perguntar algo sobre HTML, CSS ou JavaScript.';
    }
}
