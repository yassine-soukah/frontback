<?php
require_once 'TravelOfferController.php';

// Vérifier si un ID est passé
if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];
    
    $TravelOffer = new TravelOfferController();
    $TravelOffer->deleteTravelOffer($id);
    
    // Rediriger après suppression
    header("Location: ../View/Back Office/ListOffers.php");
    exit();
} else {
    echo "ID utilisateur non spécifié.";
}
?>