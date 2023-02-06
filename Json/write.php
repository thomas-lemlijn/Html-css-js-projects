<?php
    $text = "Bonjour tout le monde, j'écris dans les fichiers .json";

    file_put_contents('text.json', json_encode($text));

    header('Location: index.php');
    exit;
?>