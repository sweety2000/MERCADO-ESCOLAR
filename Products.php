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
        $sql = "SELECT * FROM products";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_string($path[3])) {
            $sql .= " WHERE ProductName = :ProductName";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ProductName', $path[3]);
            $stmt->execute();
            $prods = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $prods = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($prods);
        break;
    case "POST":
        $product = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO products(ProductName,Price) VALUES(:ProductName, :Price)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ProductName', $product->ProductName);
        $stmt->bindParam(':Price', $product->Price);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $product = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE products SET PRoductName= :name, Price =:price WHERE Prod_ID = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $product->id);
        $stmt->bindParam(':name', $product->name);
        $stmt->bindParam(':Price', $product->price);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        
        $sql = "DELETE FROM products WHERE ProductName = :ProductNametoDelete";
        $path = explode('/', $_SERVER['REQUEST_URI']);
       
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ProductNametoDelete', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
        

               
}