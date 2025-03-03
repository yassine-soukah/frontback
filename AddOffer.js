document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("travelOfferForm");
    
    function afficherErreur(element, message) {
        const feedback = element.nextElementSibling;
        feedback.textContent = message;
        feedback.style.color = "red";
        feedback.classList.remove("text-succes"); // Supprime le rouge
        feedback.classList.add("text-danger");   // Ajoute le vert
    }

    function afficherSucces(element,message) {
        const feedback = element.nextElementSibling;
        feedback.style.color = "green";
    feedback.classList.remove("text-danger"); // Supprime le rouge
    feedback.classList.add("text-success");   // Ajoute le vert
    feedback.textContent = message;
}
    

    function validerFormulaire(event) {
        event.preventDefault();
        
        let isValid = true;
        let title = document.getElementById("title");
        let destination = document.getElementById("destination");
        let departure = document.getElementById("departure");
        let returnDate = document.getElementById("return");
        let price = document.getElementById("price");
        let category = document.getElementById("category");
        
        if (title.value.length < 3) {
            alert("Le titre doit contenir au moins 3 caractères.");
            afficherErreur(title, "Le titre doit contenir au moins 3 caractères.");
            isValid = false;
        } else {
            afficherSucces(title,"✔Correct");
        }
        
        if (!/^[a-zA-Z\s]{3,}$/.test(destination.value)) {
            alert("La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.");
            afficherErreur(destination, "Destination invalide.");
            isValid = false;
        } else {
            afficherSucces(destination,"✔Correct");
        }
        
         // ✅ Check if departure date is in the past
         let today = new Date();
         today.setHours(0, 0, 0, 0);  // Réinitialiser l'heure pour éviter des erreurs
         if (!departure.value || new Date(departure.value) < today) {
            alert("Departure date must not be in the past");
            afficherErreur(departure, "Departure date must not be in the past");
            isValid = false;
         } else {
             afficherSucces(departure,"✔Correct");
         }
 
        
        if (!returnDate.value || returnDate.value <= departure.value) {
            alert("La date de retour doit être ultérieure à la date de départ.");
            afficherErreur(returnDate, "Date de retour invalide.");
            isValid = false;
        } else {
            afficherSucces(returnDate,"✔Correct");
        }
        
        if (price.value <= 0 || isNaN(price.value)) {
            alert("Le prix doit être un nombre positif.");
            afficherErreur(price, "Prix invalide.");
            isValid = false;
        } else {
            afficherSucces(price,"✔Correct");
        }
        if (!category.value) {
            alert("Veuillez sélectionner une catégorie.");
            afficherErreur(category, "catégorie requise.");
            isValid = false;
        } else {
            afficherSucces(category,"✔Correct");
        }

        if (isValid) {
            alert("Formulaire validé avec succès !");
            form.submit();
        }
    }
    function validerTitle() {
        if (title.value.length < 3) {
            afficherErreur(title, "Le titre doit contenir au moins 3 caractères.");
        } else {
            afficherSucces(title, "✔Correct");
        }
    }

    function validerDestination() {
        if (!/^[a-zA-Z\s]{3,}$/.test(destination.value)) {
            afficherErreur(destination, "Destination invalide.");
        } else {
            afficherSucces(destination, "✔Correct");
        }
    }
    title.addEventListener("keyup", validerTitle);
    destination.addEventListener("keyup", validerDestination);
    form.addEventListener("submit", validerFormulaire);
});
