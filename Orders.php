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
            $sql .= " WHERE Order_ID = :Order_ID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':Order_ID', $path[3]);
            $stmt->execute();
            $Orders = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $Orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $Orders = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO orders(Order_ID, Prod_ID, Quantity, Price, User_ID, Order_Date) VALUES(:Order_ID, :Prod_ID, :Quantity, :Price,:User_ID ,:Order_Date)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Order_ID', $Orders->Order_ID);
        $stmt->bindParam(':Prod_ID', $Orders->Prod_ID);
        $stmt->bindParam(':Quantity', $Orders->Quantity);
        $stmt->bindParam(':Price', $Orders->Price);
        $stmt->bindParam(':User_ID', $Orders->User_ID);
        $stmt->bindParam(':Order_Date', $Orders->Order_Date);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}