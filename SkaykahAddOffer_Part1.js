document.getElementById("travelOfferForm").addEventListener("submit", function (event) {
    let isValid = true;
    let messages = [];

    // Title validation (min length 3)
    let title = document.getElementById("title");
    if (title.value.trim().length < 3) {
        title.classList.add("is-invalid");
        messages.push("❌ The title must contain at least 3 characters.");
        isValid = false;
    } else {
        title.classList.remove("is-invalid");
    }

    // Destination validation (only letters and spaces, min 3 chars)
    let destination = document.getElementById("destination");
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    if (!destinationRegex.test(destination.value.trim())) {
        destination.classList.add("is-invalid");
        messages.push("❌ The destination must contain only letters and spaces, and at least 3 characters.");
        isValid = false;
    } else {
        destination.classList.remove("is-invalid");
    }

    // Date validation
    let departure = document.getElementById("departure");
    let returnDate = document.getElementById("return");

    if (!departure.value) {
        departure.classList.add("is-invalid");
        messages.push("❌ Departure date is required.");
        isValid = false;
    } else {
        departure.classList.remove("is-invalid");
    }

    if (!returnDate.value) {
        returnDate.classList.add("is-invalid");
        messages.push("❌ Return date is required.");
        isValid = false;
    } else {
        returnDate.classList.remove("is-invalid");
    }

    // ✅ Check if return date is earlier than departure date
    if (departure.value && returnDate.value) {
        let depDate = new Date(departure.value);
        let retDate = new Date(returnDate.value);

        if (retDate <= depDate) {
            returnDate.classList.add("is-invalid");
            messages.push("❌ The return date must be later than the departure date.");
            isValid = false;
        } else {
            returnDate.classList.remove("is-invalid");
        }
    }

    // Price validation (positive number)
    let price = document.getElementById("price");
    if (parseFloat(price.value) <= 0 || isNaN(price.value)) {
        price.classList.add("is-invalid");
        messages.push("❌ The price must be a positive number.");
        isValid = false;
    } else {
        price.classList.remove("is-invalid");
    }

    // Category validation (must be selected)
    let category = document.getElementById("category");
    if (!category.value) {
        category.classList.add("is-invalid");
        messages.push("❌ Please select a category.");
        isValid = false;
    } else {
        category.classList.remove("is-invalid");
    }

    // ❗ Display alert messages if invalid
    if (!isValid) {
        alert(messages.join("\n\n"));
        event.preventDefault();
        event.stopPropagation();
    }
});