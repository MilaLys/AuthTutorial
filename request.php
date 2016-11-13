<?php
$connection = new mysqli('localhost', 'root', '', 'auth_tutorial');
if ($connection->connect_error) {
    die($connection->connect_error);
}

$insert = $connection->query("INSERT INTO `request` SET 
  `name` = '{$_GET['name']}', 
  `email` = '{$_GET['email']}', 
  `phone` = '{$_GET['phone']}', 
  `message` = '{$_GET['message']}'");

if(!$insert){
    die($connection->error);
}
echo 'OK';