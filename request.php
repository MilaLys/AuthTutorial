<?php
$connection = @new mysqli('localhost', 'root', '', 'auth_tutorial');
if ($connection->connect_error) {
    die($connection->connect_error);
}

$content = file_get_contents('php://input');
$data = json_decode($content, true);

$insert = $connection->query("INSERT INTO `request` SET 
  `name` = '{$data['name']}', 
  `email` = '{$data['email']}', 
  `phone` = '{$data['phone']}', 
  `message` = '{$data['msg']}'");

if(!$insert){
    die($connection->error);
}
echo 'OK';