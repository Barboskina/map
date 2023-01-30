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
        <link href="style.css" rel="stylesheet">

  <script src="https://api-maps.yandex.ru/2.1/?apikey=f175462b-3144-476c-9729-375b68a90e9c&lang=ru_RU" type="text/javascript">
    </script>

    <!-- добавим стили mocha для отображения результатов -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- добавляем сам фреймворк mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    // включаем режим тестирования в стиле BDD
    mocha.setup('bdd');
  </script>
  <!-- добавим chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai предоставляет большое количество функций. Объявим assert глобально
    let assert = chai.assert;
  </script>
</head>

<body>
<!-- <form  method="POST">
    <input type="submit" name="1" value="1 этаж" class="btn btn-primary " />
    <input type="submit" name="2" value="2 этаж" class="btn btn-primary" />
    <input type="submit" name="3" value="3 этаж" class="btn btn-primary" />
    <input type="submit" name="4" value="4 этаж" class="btn btn-primary" />
</form> -->
<!-- <script>
    function pow(x, n) {
      if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
  </script> -->

  <!-- скрипт со спецификацией (describe, it...) -->
  <!-- <script src="test.js"></script> -->

  <!-- элемент с id="mocha" будет содержать результаты тестов -->
  <!-- <div id="mocha"></div> -->

  <!-- запускаем тесты! -->
  <!-- <script>
    mocha.run();
  </script> --> 


    <script src=".core/classLay.js"></script>
    <script src=".core/allPoints.js"></script>
    <script src=".core/search.js"></script>


<header>
  
  <div class="row-buttons">
    <form  method="POST">
      <input type="submit" name="1" value="1 этаж" class="btn btn-primary " />
      <input type="submit" name="2" value="2 этаж" class="btn btn-primary " />
      <input type="submit" name="3" value="3 этаж" class="btn btn-primary " />
      <input type="submit" name="4" value="4 этаж" class="btn btn-primary " />
    </form>
  </div>
  
  <div class="">
    <form  method="POST">
    <div class="in-row">
        <input type="text" id="from" name="from" placeholder="Откуда" class="form-control"  size="10">
        <input type="text" id="to" name="to" placeholder="Куда" class="form-control" size="10">
        <input type="submit" name="path_button" value="Показать" class="btn btn-warning ">
        </div>
    </form>
  </div><!--пусть выполняется пхп алгоритм а потом в зависимости к какого этажа начало будет подгружаться необходимая карта -->
 
  <div class=""> 
    <form  method="POST">
      <div class="in-row">
        <input type="text" id="search" name="search" placeholder="Номер аудитории" value="<?php if(isset($_POST["search"])) echo $_POST["search"] ?>" class="form-control"  size="10">
        <input type="submit" name="search_button" value="Найти" class="btn btn-danger ">
        </div>
    </form>
  </div><!--пусть выполняется пхп алгоритм а потом в зависимости к какого этажа начало будет подгружаться необходимая карта -->
  
</header>

<?php
if(isset($_POST["search_button"])){
  include(".core/search.php");
  
  echo ("<script>
          var x= $x;
          var y= $y;
        </script>");
  
}
else {
  $lay =0;
  $x = null;
  $y = null;
}
?>
<script id="lay">
<?php

if(isset($_POST["1"]) or $lay==1){
      include (".core/lays/lay1.js");
    }
    else if(isset($_POST["2"]) or $lay==2){
      include (".core/lays/lay2.js");
    }
    else if(isset($_POST["3"])){
      include (".core/lays/lay3.js");
    }
    else if(isset($_POST["4"])){
      include (".core/lays/lay4.js");
    }
    
    else{
      include (".core/lays/lay1.js");
    }
  ?></script>



<div id="map" style="width: 100%; height: 680px"></div>



</body>

</html>