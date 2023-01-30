<?php

$allPoints = array('4_29Г' => [70, 100, 2], '3_06А' => [70, 200, 2], 'Музей' => [70, 0, 1]);


if (isset($_POST['search_button']) ){
    if (isset($_POST['search'])){
        $finded = false;
        foreach($allPoints as $text => $coord) {
            if ($text == $_POST['search']) {
                $lay = $coord[2];
                $x = $coord[0];
                $y = $coord[1];
                $finded = true;
            }
        }

        if (!$finded) {
            $lay = 0;
            $x = null;
            $y = null;
        }
    }
    else {
        $lay = 0;
        $x = null;
        $y = null;
    }
    
}



?>