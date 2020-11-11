<?php
          $servername = "localhost";
          $username = "root";
          $password = "";
          $dbname = "infotec";
      // Create connection
          $conn = new mysqli($servername, $username, $password, $dbname);
      // Acertando UTF 8 //
          $conn->query("set names utf8");
      
      // Check connection
      if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
      }
       // Fim de Conexão com Banco de Dados 
?>