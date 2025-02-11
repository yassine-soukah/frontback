document.getElementById("travelOfferForm").addEventListener("submit", function(event) {
    let form = event.target;
    let isValid = true;

    // Fonction pour afficher un message d'erreur ou de succès
    function validateField(field, condition, errorMessage = "", successMessage = "") {
        let feedback = field.nextElementSibling; // Récupère l'élément .invalid-feedback

        if (condition) {
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
            feedback.textContent = errorMessage;
            feedback.classList.add("text-danger"); // Couleur rouge pour les erreurs
            feedback.classList.remove("text-success"); // Supprime la couleur verte
            isValid = false;
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
            feedback.textContent = successMessage;
            feedback.classList.add("text-success"); // Couleur verte pour la validation
            feedback.classList.remove("text-danger"); // Supprime la couleur rouge
        }
    }

    // Récupération des champs
    let title = document.getElementById("title");
    let destination = document.getElementById("destination");
    let departure = document.getElementById("departure");
    let returnDate = document.getElementById("return");
    let price = document.getElementById("price");
    let category = document.getElementById("category");

    // Expressions régulières et valeurs
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    let today = new Date().toISOString().split("T")[0]; // Date d'aujourd'hui au format YYYY-MM-DD

    // Validation des champs avec messages de succès
    validateField(title, title.value.trim().length < 3, 
        "Title must be at least 3 characters long.", 
        "Title is valid ✅");

    validateField(destination, !destinationRegex.test(destination.value.trim()), 
        "Destination must be at least 3 letters and contain only letters and spaces.", 
        "Destination is valid ✅");

    // Validation de la date de départ (ne doit pas être vide et doit être >= aujourd'hui)
    validateField(departure, !departure.value, "Please select a valid departure date.", 
        "Departure date is valid ✅");
    validateField(departure, departure.value && departure.value < today, 
        "The departure date cannot be in the past.", "");

    // Validation de la date de retour (doit être après la date de départ)
    validateField(returnDate, !returnDate.value, "Please select a valid return date.", 
        "Return date is valid ✅");
    validateField(returnDate, returnDate.value && returnDate.value <= departure.value, 
        "The return date must be later than the departure date.", "");

    // Validation du prix (doit être un nombre positif)
    validateField(price, parseFloat(price.value) <= 0 || isNaN(price.value), 
        "Price must be a positive number.", 
        "Price is valid ✅");

    // Validation de la catégorie (doit être sélectionnée)
    validateField(category, !category.value, 
        "Please select a category.", 
        "Category is valid ✅");

    // Empêcher la soumission si le formulaire est invalide
    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
    }
});