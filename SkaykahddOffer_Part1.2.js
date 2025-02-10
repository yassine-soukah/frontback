// Fonction de validation du formulaire
function validerFormulaire(event) {
    // Empêche l'envoi du formulaire si la validation échoue
    event.preventDefault();

    // Récupération des valeurs des champs
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const price = document.getElementById('price').value;

    // Vérification du titre (minimum 3 caractères)
    if (title.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    // Vérification de la destination (lettres et espaces, minimum 3 caractères)
    const destinationPattern = /^[A-Za-z\s]+$/;
    if (!destinationPattern.test(destination) || destination.length < 3) {
        alert("La destination doit contenir uniquement des lettres et des espaces et avoir au moins 3 caractères.");
        return false;
    }
        // Récupération de la date actuelle (au format YYYY-MM-DD)
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Réinitialiser l'heure à minuit pour éviter les erreurs
    
        // Vérification que la date de départ n'est pas dépassée
        if (new Date(departureDate) < today) {
            alert("La date de départ ne peut pas être dans le passé.");
            return false;
        }

    // Vérification de la date de retour (doit être après la date de départ)
    if (new Date(returnDate) <= new Date(departureDate)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }

    // Vérification du prix (doit être un nombre positif)
    if (parseFloat(price) <= 0 || isNaN(price)) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }

    // Si toutes les validations sont réussies, le formulaire est soumis
    alert("Offre de voyage ajoutée avec succès !");
    return true;
}

