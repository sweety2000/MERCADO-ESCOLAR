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
        $sql = "SELECT * FROM posts";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_string($path[3])) {
            $sql .= " WHERE PostName = :PostName";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':PostName', $path[3]);
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
        $post = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO posts(PostName,comments) VALUES(:PostName, :Comments)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':PostName', $post->PostName);
        $stmt->bindParam(':Comments', $post->Comments);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $post = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE posts SET PostName= :name, Comments =:Comments WHERE Post_ID = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $post->id);
        $stmt->bindParam(':name', $post->name);
        $stmt->bindParam(':Price', $post->price);
       

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        
        $sql = "DELETE FROM posts WHERE PostName = :PostNametoDelete";
        $path = explode('/', $_SERVER['REQUEST_URI']);
       
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':PostNametoDelete', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
        

               
}