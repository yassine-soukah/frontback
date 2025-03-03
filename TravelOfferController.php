<?php 
require __DIR__.'/../config.php';
class TravelOfferController 
{
    public function showTravelOffer($offer) {
        echo '<table border=1 width="100%">
            <tr align="center">
                <td>Title</td>
                <td>Destination</td>
                <td>Departure Date</td>
                <td>Return Date</td>
                <td>Price</td>
                <td>Disponibility</td>
                 <td>category</td>
            </tr>
            <tr>
                <td>'. $offer->getTitle() .'</td>
                <td>'. $offer->getDestination() .'</td>
                <td>'. $offer->getDepartureDate() .'</td>
                <td>'. $offer->getReturnDate() .'</td>
                <td>'. $offer->getPrice() .'</td>
                <td>'. $offer->isDisponible() .'</td>
                 <td>'. $offer->getCategory() .'</td>
            </tr>
        </table>';
    }
    public function listOffers(){
        $db = config::getConnexion();
        $sql = "SELECT * FROM traveloffer";
        try {
            $query = $db->prepare($sql);
            $query->execute();
            $offers = $query->fetchAll();
            return $offers;
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }
    }
    public function addTravelOffer($offer){
        $db = config::getConnexion();
        $sql = "INSERT INTO traveloffer (title, destination, departure_date, return_date, price, disponible, category) VALUES (:title, :destination, :departure_date, :return_date, :price, :disponible, :category)";
        try {
            $query = $db->prepare($sql);
            $query->execute([
                'title' => $offer['title'],
                'destination' => $offer['destination'],
                'departure_date' => $offer['departure_date'],
                'return_date' => $offer['return_date'],
                'price' => $offer['price'],
                'disponible' => $offer['disponible'],
                'category' => $offer['category']
            ]);
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }
    }
    public function updateTravelOffer($offer){
        $db = config::getConnexion();
        $sql = "UPDATE traveloffer SET title = :title, destination = :destination, departure_date = :departure_date, return_date = :return_date, price = :price, disponible = :disponible, category = :category WHERE id = :id";
        try {
            $query = $db->prepare($sql);
            $query->execute([
                'title' => $offer['title'],
                'destination' => $offer['destination'],
                'departure_date' => $offer['departure_date'],
                'return_date' => $offer['return_date'],
                'price' => $offer['price'],
                'disponible' => $offer['disponible'],
                'category' => $offer['category'],
                'id' => $offer['id']
            ]);
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }
    }
    public function deleteTravelOffer($id){
        $db = config::getConnexion();
        $sql = "DELETE FROM traveloffer WHERE id = :id";
        try {
            $query = $db->prepare($sql);
            $query->execute([
                'id' => $id
            ]);
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }
    }
}
