<?php
require_once '../../Controller/TravelOfferController.php';

// Vérifier si un ID est passé en paramètre
if (!isset($_GET['id'])) {
    die("ID utilisateur manquant.");
}

$TravelOfferController = new TravelOfferController();
$Offers = $TravelOfferController->listOffers();

// Rechercher l'utilisateur par ID
$user = null;
foreach ($Offers as $u) {
    if ($u['id'] == $_GET['id']) {
        $user = $u;
        break;
    }
}

if (!$user) {
    die("Offre introuvable.");
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier Offre</title>
    <style>
        :root {
            --bg-color: #f0f0f5;
            --text-color: #333;
            --table-bg: #fff;
            --primary-color: #4CAF50;
            --danger-color: #f44336;
            --hover-color: #f1f1f1;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        .container {
            width: 90%;
            max-width: 800px;
            background: var(--table-bg);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-size: 14px;
        }

        input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }

        button[type="submit"] {
            background-color: var(--primary-color);
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-right: 15px; /* Décalage à droite */
        }

        button[type="submit"]:hover {
            background-color: #388E3C;
        }

        .btn-cancel {
            background-color: var(--danger-color);
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 15px; /* Décalage vers le bas */
        }

        .btn-cancel:hover {
            background-color: #D32F2F;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Modifier l'offre</h1>
        <form action="../../Controller/updateOffer.php" method="POST">
            <input type="hidden" name="id" value="<?php echo htmlspecialchars($user['id']); ?>">
            
            <label for="title">title :</label>
            <input type="title" id="title" name="title" value="<?php echo htmlspecialchars($user['title']); ?>" required>

            <label for="destination">destination :</label>
            <input type="destination" id="destination" name="destination" value="<?php echo htmlspecialchars($user['destination']); ?>" required>

            <label for="departure_date">departure_date :</label>
            <input type="departure_date" id="departure_date" name="departure_date" value="<?php echo htmlspecialchars($user['departure_date']); ?>" required>
            
            <label for="return_date">return_date :</label>
            <input type="return_date" id="return_date" name="return_date" value="<?php echo htmlspecialchars($user['return_date']); ?>" required>

            <label for="price">price :</label>
            <input type="price" id="price" name="price" value="<?php echo htmlspecialchars($user['price']); ?>" required>

            <label for="disponible">disponible :</label>
            <input type="disponible" id="disponible" name="disponible" value="<?php echo htmlspecialchars($user['disponible']); ?>" required>

            <label for="category">category :</label>
            <input type="category" id="category" name="category" value="<?php echo htmlspecialchars($user['category']); ?>" required>


            <div style="display: flex; justify-content: space-between; width: 100%;">
                <button type="submit">Mettre à jour</button>
                <a href="ListOffers.php" class="btn-cancel">Annuler</a>
            </div>
        </form>
    </div>
</body>
</html>