<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM orders";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_string($path[3])) {
            $sql .= " WHERE username= :username";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':username', $path[3]);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $cart = json_decode( file_get_contents('php://input') );
        echo $cart[0];
        
        $sql = "INSERT INTO orders(PROD_ID, username) VALUES(:PROD_ID, :username)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':PROD_ID', $cart[0]);
        $stmt->bindParam(':username', $cart[1]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
        case "DELETE":
        
            $sql = "DELETE FROM orders WHERE ProductName = :ProductName";
            $path = explode('/', $_SERVER['REQUEST_URI']);
           
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ProductName', $path[3]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
}