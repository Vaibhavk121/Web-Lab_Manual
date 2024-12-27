<?php
$servername = "localhost";
$username = "root"; // Update with your database username
$password = "1234"; // Update with your database password
$dbname = "college";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
?>