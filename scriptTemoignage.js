// Fonction pour faire défiler vers la gauche
function scrolll() {
    const container = document.querySelector('.scroll-images');
    container.scrollBy({ left: -250, behavior: 'smooth' }); // Défile vers la gauche
}

// Fonction pour faire défiler vers la droite
function scrollr() {
    const container = document.querySelector('.scroll-images');
    container.scrollBy({ left: 250, behavior: 'smooth' }); // Défile vers la droite
}
