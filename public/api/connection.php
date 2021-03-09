<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, HEAD, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

$servername = "localhost";
$username = "yuri";
$password = "898522";
$dbname = "infotec";

/* $servername = "sql307.epizy.com";
$username = "epiz_27995740";
$password = "9bfizSL39Pq";
$dbname = "epiz_27995740_infotec"; */

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$router = "http://localhost:3000/";

/* $router = "http://infotec.infinityfreeapp.com/"; */


