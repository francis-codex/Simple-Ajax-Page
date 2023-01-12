<?php
if($_GET['request_type']=='Home Page'){
  $home = file_get_contents('home.html');
  echo json_encode($home);
}

elseif($_GET['request_type']=='About Page'){
    $home = file_get_contents('about.html');
    echo json_encode($home);
}

elseif($_GET['request_type']=='Contact Page'){
    $home = file_get_contents('contact.html');
    echo json_encode($home);
}
?>