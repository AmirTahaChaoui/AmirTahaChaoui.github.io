const video = document.getElementById('video');
const subtitle = document.getElementById('subtitle');

// Écoutez l'événement 'timeupdate' pour vérifier la position actuelle de la vidéo  
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;

    // Afficher le sous-titre "Je m'appelle Kirua" à 7 secondes  
    if (currentTime >= 7 && currentTime < 8) {
        subtitle.innerText = "Je m'appelle Kirua"; // Définit le texte du sous-titre  
        subtitle.style.display = 'block'; // Affiche le sous-titre  
    } 
    // Afficher le sous-titre "Je m'appelle Gon" à 11 secondes  
    else if (currentTime >= 10 && currentTime < 12) {
        subtitle.innerText = "Je m'appelle Gon"; // Définit le texte du sous-titre  
        subtitle.style.display = 'block'; // Affiche le sous-titre  
    } 
    else {
        subtitle.style.display = 'none'; // Masque le sous-titre  
    }
});