document.addEventListener('DOMContentLoaded', function() {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeText = document.getElementById('jokeText');

    // Fonction pour charger les blagues depuis le fichier texte
    async function loadJokes() {
        try {
            const response = await fetch('jokes.txt');
            const data = await response.text();
            return data.split('/').map(joke => joke.trim());
        } catch (error) {
            console.error('Error loading jokes:', error);
            return [];
        }
    }

    // Afficher une blague aléatoire
    async function displayRandomJoke() {
        const jokes = await loadJokes();
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        jokeText.textContent = randomJoke;
    }

    // Gérer le clic sur le bouton "Joke"
    jokeBtn.addEventListener('click', displayRandomJoke);

    // Charger une blague aléatoire au chargement de la page
    displayRandomJoke();
});
