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
       

  <script src="https://api-maps.yandex.ru/2.1/?apikey=f175462b-3144-476c-9729-375b68a90e9c&lang=ru_RU" type="text/javascript">
    </script>

    
</head>

<body>
<!-- <form  method="POST">
    <input type="submit" name="1" value="1 этаж" class="btn btn-primary " />
    <input type="submit" name="2" value="2 этаж" class="btn btn-primary" />
    <input type="submit" name="3" value="3 этаж" class="btn btn-primary" />
    <input type="submit" name="4" value="4 этаж" class="btn btn-primary" />
</form> -->

    
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


<div id="map" style="width: 100%; height: 740px"></div>
</body>

</html>