<?php

$connection = @new mysqli('localhost', 'root', '', 'auth_tutorial');

if($connection->connect_error){
    die($connection->connect_error);
}

$content = file_get_contents('php://input');
$data = json_decode($content, true);

// проверить наличие юзера в БД, если нет - внести его в БД

//внести usera в бд(создать)
$insertUser = $connection->query("INSERT INTO `users` SET 
  `name` = '{$data['name']}', 
  `password` = '{$data['password']}'");

if(!$insertUser){
    die($connection->error);
}
echo 'OK';
