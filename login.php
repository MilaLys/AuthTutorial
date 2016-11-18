<?php
session_start();

$content = file_get_contents('php://input');
$data = json_decode($content, true);

if(empty($data["username"])) {
    echo "Login is required!";
    exit();
}
if (empty($data["password"])) {
    echo "Password is required!";
    exit();
}
$db = @new mysqli('localhost', 'root', '', 'auth_tutorial');

$query = mysqli_query($db, "SELECT * FROM users WHERE `name` = '{$data["username"]}' AND `password` = '{$data["password"]}'");
$row = mysqli_fetch_assoc($query);

//var_dump($row);

mysqli_free_result($query);
if(empty($row)) {
    echo 'User is not exist!';
    exit();
}
$_SESSION["loggedin"] = true;

echo 'OK';