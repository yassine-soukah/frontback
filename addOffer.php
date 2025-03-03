<?php
require __DIR__.'/../../Controller/TravelOfferController.php';

// Vérifier si les données sont envoyées via POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Vérification de la validité des données (email, mot de passe)
    if (!isset($_POST['title'], $_POST['destination'], $_POST['departure_date'], $_POST['return_date'], $_POST['price'], $_POST['disponible'], $_POST['category'])) {
        die("Données manquantes.");
    }

    // Préparer les données de l'utilisateur
    $OfferData = [
        'title' => $_POST['title'],
        'destination' => $_POST['destination'],
        'departure_date' => $_POST['departure_date'],
        'return_date' => $_POST['return_date'],
        'price' => $_POST['price'],
        'disponible' => $_POST['disponible'],
        'category' => $_POST['category']
    ];

    // Créer une instance du contrôleur
    $TravelOfferController = new TravelOfferController();

    // Ajouter l'utilisateur
    $TravelOfferController->addTravelOffer($OfferData);

    // Rediriger après l'ajout (par exemple vers la liste des utilisateurs)
    header("Location:  ListOffers.php");
    exit;
}
?>
<form method="POST">
    <input type="text" name="title" placeholder="Title" required>
    <input type="text" name="destination" placeholder="Destination" required>
    <input type="date" name="departure_date" required>
    <input type="date" name="return_date" required>
    <input type="number" name="price" step="0.01" required>
    <input type="checkbox" name="disponible"> Available
    <input type="text" name="category" placeholder="Category" required>
    <button type="submit">Add Offer</button>
</form>
