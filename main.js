// Liste des titres que nous voulons afficher
const titles = [
    "Développeur front-end",
    "Développeur back-end",
    "Développeur web Fullstack Junior"
];

let currentTitleIndex = 0; // Index du titre actuel
let currentCharIndex = 0; // Index du caractère actuel
let isDeleting = false; // Indicateur pour savoir si on supprime les lettres ou si on les ajoute
const typingSpeed = 90; // Vitesse d'apparition des lettres (ms)
const erasingSpeed = 90; // Vitesse d'effacement des lettres (ms)
const pauseBetweenWords = 1000; // Pause entre les mots (ms)

// Sélectionne l'élément où le texte changera
const typingTextElement = document.querySelector(".typing-text span");

// Fonction pour animer le texte
function typeWriterEffect() {
    const currentTitle = titles[currentTitleIndex];
    
    if (!isDeleting) {
        // Ajoute une lettre
        typingTextElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        // Si le mot est complètement écrit, active le mode "suppression" après une pause
        if (currentCharIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeWriterEffect, pauseBetweenWords); // Pause avant de commencer à effacer
            return;
        }
    } else {
        // Supprime une lettre
        typingTextElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        // Si le mot est complètement effacé, passe au mot suivant
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Passe au titre suivant
        }
    }

    // Rappelle la fonction avec la vitesse appropriée
    setTimeout(typeWriterEffect, isDeleting ? erasingSpeed : typingSpeed);
}

// Initialiser l'animation
typeWriterEffect();