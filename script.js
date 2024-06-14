document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu');
    const numberOfSymbols = 15; // Número de símbolos X y O que quieres mostrar

    // Crear elementos y añadir a la página
    for (let i = 0; i < numberOfSymbols; i++) {
        const symbol = document.createElement('div');
        symbol.classList.add('symbol');
        symbol.textContent = i % 2 === 0 ? 'X' : 'O'; // Alternar entre X y O

        // Posición y rotación aleatoria
        symbol.style.left = `${Math.random() * 95}vw`;
        symbol.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para efecto escalonado

        menuContainer.appendChild(symbol);
    }

    // Función para redireccionar a la página de juego
    function startTwoPlayers() {
    window.location.href = "_game_/pvp/game.html"; // Redirige a la página de juego para dos jugadores
}

function startToIA() {
    // Aquí puedes redirigir a la página donde se selecciona la dificultad de la IA
    window.location.href = "_game_/ia/ia/dificultad.html";
}

    // Asignar la función al botón "Dos Jugadores"
    const startButton = document.querySelector('.menu-button');
    startButton.addEventListener('click', startTwoPlayers);
});