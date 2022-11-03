<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover">
    <title>Volgu navigation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>
       
    <link rel="stylesheet" href="style.css">

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=f175462b-3144-476c-9729-375b68a90e9c"></script>
    
</head>

<body>




<script src='<?php
    if(isset($_POST["1"])){
        echo ("post1.js");    
    }
    else if(isset($_POST["2"])){
        echo ("post2.js");
    }
    else if(isset($_POST["3"])){
        echo ("post1.js");
    }
    else if(isset($_POST["4"])){
        echo ("post1.js");
    }
    else{
        echo ("post1.js");
    }
?>' type='text/javascript'></script>





<div id="map" style="width: 100%; height: 100%; padding: 0% 0% 0% 0%;">



</div>
        
    <!-- <script src="list_box_layout.js" type="text/javascript"></script> -->
    <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>	
</body>


