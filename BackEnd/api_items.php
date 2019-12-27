<?php

error_reporting(E_ALL);
ini_set('display_errors', true);

include_once('Database.php');
include_once('Items.php');

$dbConnection = new Database();
$db = $dbConnection->getConnection();

header('Content-type: application/json');

$items = new Items($db);
$id = str_replace('/items/', '', $_SERVER['REQUEST_URI']);

if($_SERVER["REQUEST_METHOD"] == "GET") {
    $items_json = json_encode($items->get());
    header('Content-length: ' . strlen($items_json));
    echo $items_json;        
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $item = (object) json_decode(file_get_contents('php://input'), true);

    $items_json = json_encode($id > 0 ? $items->update($item) : $items->insert($item));
    header('Content-length: ' . strlen($items_json));
    echo $items_json;
}

if($_SERVER["REQUEST_METHOD"] == "PUT") {
    $updateItem = (object) json_decode(file_get_contents('php://input'), true);
    
    $items_json = json_encode($items->update($updateItem));
    header('Content-length: ' . strlen($items_json));
    echo $items_json;
}

if($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $items_json = json_encode($items->delete($id));
    header('Content-length: ' . strlen($items_json));
    echo $items_json;    
}

?>