<?php
require_once 'TravelOfferController.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!isset($_POST['id'], $_POST['title'], $_POST['destination'], $_POST['departure_date'], $_POST['return_date'], $_POST['price'], $_POST['disponible'], $_POST['category'])) {
        die("Données incomplètes.");
    }

    $OfferData = [
        'id' => $_POST['id'], // L'ID est juste utilisé pour identifier l'utilisateur, pas pour le modifier
        'title' => $_POST['title'],
        'destination' => $_POST['destination'],
        'departure_date' => $_POST['departure_date'],
        'return_date' => $_POST['return_date'],
        'price' => $_POST['price'],
        'disponible' => $_POST['disponible'],
        'category' => $_POST['category']
    ];

    $TravelOfferController = new TravelOfferController();
    $TravelOfferController->updateTravelOffer($OfferData);

    // Rediriger vers la liste des utilisateurs après mise à jour
    header("Location: ../View/Back Office/ListOffers.php");
    exit;
}
?>