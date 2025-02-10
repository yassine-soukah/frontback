document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("travelOfferForm");

    function validateField(element, regex, minLength, errorMessage) {
        let feedback = element.nextElementSibling;
        if (!feedback || !feedback.classList.contains("validation-message")) {
            feedback = document.createElement("div");
            feedback.classList.add("validation-message");
            element.parentNode.insertBefore(feedback, element.nextSibling);
        }

        if (element.value.trim().length >= minLength && regex.test(element.value.trim())) {
            feedback.textContent = "✔ Correct";
            feedback.style.color = "green";
            element.classList.remove("is-invalid");
            return true;
        } else {
            feedback.textContent = "❌ " + errorMessage;
            feedback.style.color = "red";
            element.classList.add("is-invalid");
            return false;
        }
    }

    function validateDateFields() {
        let departure = document.getElementById("departure");
        let returnDate = document.getElementById("return");

        if (!departure.value || !returnDate.value) return; // Exit if either field is empty

        let today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to midnight to compare only the date

        let depDate = new Date(departure.value);
        let retDate = new Date(returnDate.value);

        let depFeedback = departure.nextElementSibling;
        let retFeedback = returnDate.nextElementSibling;

        if (!depFeedback || !depFeedback.classList.contains("validation-message")) {
            depFeedback = document.createElement("div");
            depFeedback.classList.add("validation-message");
            departure.parentNode.insertBefore(depFeedback, departure.nextSibling);
        }

        if (!retFeedback || !retFeedback.classList.contains("validation-message")) {
            retFeedback = document.createElement("div");
            retFeedback.classList.add("validation-message");
            returnDate.parentNode.insertBefore(retFeedback, returnDate.nextSibling);
        }

        // Validate departure date (must be today or in the future)
        if (depDate < today) {
            depFeedback.textContent = "❌ Departure date cannot be in the past.";
            depFeedback.style.color = "red";
            departure.classList.add("is-invalid");
        } else {
            depFeedback.textContent = "✔ Correct";
            depFeedback.style.color = "green";
            departure.classList.remove("is-invalid");
        }

        // Validate return date (must be later than departure)
        if (retDate <= depDate) {
            retFeedback.textContent = "❌ Return date must be later than departure date.";
            retFeedback.style.color = "red";
            returnDate.classList.add("is-invalid");
        } else {
            retFeedback.textContent = "✔ Correct";
            retFeedback.style.color = "green";
            returnDate.classList.remove("is-invalid");
        }
    }

    function validatePrice() {
        let price = document.getElementById("price");
        let feedback = price.nextElementSibling;

        if (!feedback || !feedback.classList.contains("validation-message")) {
            feedback = document.createElement("div");
            feedback.classList.add("validation-message");
            price.parentNode.insertBefore(feedback, price.nextSibling);
        }

        let priceValue = parseFloat(price.value);

        if (isNaN(priceValue) || priceValue <= 0) {
            feedback.textContent = "❌ The price must be a positive number.";
            feedback.style.color = "red";
            price.classList.add("is-invalid");
            return false;
        } else {
            feedback.textContent = "✔ Correct";
            feedback.style.color = "green";
            price.classList.remove("is-invalid");
            return true;
        }
    }

    function validateForm(event) {
        let isValid = true;

        // Title Validation (min length 3)
        let title = document.getElementById("title");
        if (!validateField(title, /.*/, 3, "The title must contain at least 3 characters.")) isValid = false;

        // Destination Validation (only letters & spaces, min 3 chars)
        let destination = document.getElementById("destination");
        let destinationRegex = /^[A-Za-z\s]{3,}$/;
        if (!validateField(destination, destinationRegex, 3, "The destination must contain only letters and spaces.")) isValid = false;

        // Date Validation
        let departure = document.getElementById("departure");
        let returnDate = document.getElementById("return");

        if (!departure.value) {
            validateField(departure, /.*/, 1, "Departure date is required.");
            isValid = false;
        }

        if (!returnDate.value) {
            validateField(returnDate, /.*/, 1, "Return date is required.");
            isValid = false;
        }

        // Check if departure is in the past
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let depDate = new Date(departure.value);

        if (depDate < today) {
            validateField(departure, /.*/, 1, "Departure date cannot be in the past.");
            isValid = false;
        }

        // Check if return date is later than departure date
        if (departure.value && returnDate.value) {
            let retDate = new Date(returnDate.value);
            if (retDate <= depDate) {
                validateField(returnDate, /.*/, 1, "Return date must be later than departure date.");
                isValid = false;
            }
        }

        // Price Validation (must be a positive number)
        if (!validatePrice()) isValid = false;

        // Category Validation (must be selected)
        let category = document.getElementById("category");
        if (!category.value) {
            validateField(category, /.*/, 1, "Please select a category.");
            isValid = false;
        }

        // ❗ Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    // Attach real-time validation
    document.getElementById("title").addEventListener("keyup", function () {
        validateField(this, /.*/, 3, "The title must contain at least 3 characters.");
    });

    document.getElementById("destination").addEventListener("keyup", function () {
        validateField(this, /^[A-Za-z\s]{3,}$/, 3, "The destination must contain only letters and spaces.");
    });

    document.getElementById("departure").addEventListener("change", validateDateFields);
    document.getElementById("return").addEventListener("change", validateDateFields);
    document.getElementById("price").addEventListener("keyup", validatePrice); // Real-time price validation

    // Attach submit event listener
    form.addEventListener("submit", validateForm);
});