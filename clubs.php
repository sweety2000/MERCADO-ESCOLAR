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
        $sql = "SELECT * FROM clubs";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_string($path[3])) {
            $sql .= " WHERE Username = :Username";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':Username', $path[3]);
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
        $club = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO clubs(ClubName,Username) VALUES(:ClubName, :Username)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ClubName', $club->ClubName);
        $stmt->bindParam(':Username', $club->Username);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    
    case "DELETE":
        
        
        
        $sql = "DELETE FROM clubs WHERE Username = :Username ";
       
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
    
        $stmt->bindParam(':Username', $path[3]);
        //console.log($stmt);

        if($stmt->execute()) {
            $response = ['status' => 1,'message' => 'Record deleted successfully.','Query' => $stmt];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
        

               
}