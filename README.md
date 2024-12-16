<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hunter x Hunter - Anime Streaming</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0f0f0f;
            color: white;
            margin: 0;
            padding: 0;
        }
        header {
            background: url('hunterxhunter-header.jpg') no-repeat center center;
            background-size: cover;
            height: 300px;
            text-align: center;
            padding-top: 60px;
            color: white;
        }
        header h1 {
            font-size: 60px;
        }
        header p {
            font-size: 20px;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            padding: 14px 20px;
            text-align: center;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .main-content {
            padding: 20px;
        }
        .episode-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 20px;
        }
        .episode {
            background-color: #222;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        .episode img {
            max-width: 100%;
            border-radius: 8px;
        }
        .episode h3 {
            margin: 10px 0;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

<header>
    <h1>Hunter x Hunter</h1>
    <p>Regardez tous les épisodes en streaming</p>
</header>

<div class="navbar">
    <a href="#">Accueil</a>
    <a href="#">Épisodes</a>
    <a href="#">Films</a>
    <a href="#">À propos</a>
    <a href="#">Contact</a>
</div>

<div class="main-content">
    <h2>Liste des Épisodes</h2>

    <div class="episode-list">
        <!-- Exemple d'un épisode -->
        <div class="episode">
            <img src="hunterxhunter-ep1.jpg" alt="Épisode 1">
            <h3>Épisode 1: Le départ</h3>
            <a href="#">Regarder</a>
        </div>
        <div class="episode">
            <img src="hunterxhunter-ep2.jpg" alt="Épisode 2">
            <h3>Épisode 2: L'examen de Hunter</h3>
            <a href="#">Regarder</a>
        </div>
        <div class="episode">
            <img src="hunterxhunter-ep3.jpg" alt="Épisode 3">
            <h3>Épisode 3: Le combat avec Hisoka</h3>
            <a href="#">Regarder</a>
        </div>
        <div class="episode">
            <img src="hunterxhunter-ep4.jpg" alt="Épisode 4">
            <h3>Épisode 4: Le défi de l'examen</h3>
            <a href="#">Regarder</a>
        </div>
    </div>
</div>

<footer>
    <p>&copy; 2024 Hunter x Hunter Streaming - Tous droits réservés</p>
</footer>

</body>
</html>
