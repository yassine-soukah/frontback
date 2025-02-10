document.getElementById("travelOfferForm").addEventListener("submit", function (event) {
    let isValid = true;

    function setValidation(element, message, isCorrect) {
        let feedback = element.nextElementSibling;
        if (!feedback || !feedback.classList.contains("validation-message")) {
            feedback = document.createElement("div");
            feedback.classList.add("validation-message");
            element.parentNode.insertBefore(feedback, element.nextSibling);
        }

        if (isCorrect) {
            feedback.textContent = "✔ Correct";
            feedback.style.color = "green";
            element.classList.remove("is-invalid");
        } else {
            feedback.textContent = "❌ " + message;
            feedback.style.color = "red";
            element.classList.add("is-invalid");
            isValid = false;
        }
    }

    // Title validation (min length 3)
    let title = document.getElementById("title");
    title.value.trim().length < 3
        ? setValidation(title, "The title must contain at least 3 characters.", false)
        : setValidation(title, "", true);

    // Destination validation (only letters and spaces, min 3 chars)
    let destination = document.getElementById("destination");
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    !destinationRegex.test(destination.value.trim())
        ? setValidation(destination, "The destination must contain only letters and spaces.", false)
        : setValidation(destination, "", true);

    // Date validation
    let departure = document.getElementById("departure");
    let returnDate = document.getElementById("return");

    !departure.value
        ? setValidation(departure, "Departure date is required.", false)
        : setValidation(departure, "", true);

    !returnDate.value
        ? setValidation(returnDate, "Return date is required.", false)
        : setValidation(returnDate, "", true);

    // ✅ Check if departure date is in the past
        let today = new Date();
        today.setHours(0, 0, 0, 0);  // Réinitialiser l'heure pour éviter des erreurs
        if (departure.value && new Date(departure.value) < today) {
            setValidation(departure, "Departure date must not be in the past.", false);
        } else {
            setValidation(departure, "", true);
        }

    // ✅ Check if return date is earlier than departure date
    if (departure.value && returnDate.value) {
        let depDate = new Date(departure.value);
        let retDate = new Date(returnDate.value);
        retDate <= depDate
            ? setValidation(returnDate, "Return date must be later than departure date.", false)
            : setValidation(returnDate, "", true);
    }

    // Price validation (positive number)
    let price = document.getElementById("price");
    parseFloat(price.value) <= 0 || isNaN(price.value)
        ? setValidation(price, "The price must be a positive number.", false)
        : setValidation(price, "", true);

    // Category validation (must be selected)
    let category = document.getElementById("category");
    !category.value
        ? setValidation(category, "Please select a category.", false)
        : setValidation(category, "", true);

    // ❗ Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
    }
});