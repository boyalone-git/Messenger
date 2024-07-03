<?php
try{ 
    $con=new PDO("mysql:host=localhost;dbname=messengerdb;port=3306","root","@)@$");
    $req=$con->query("select * from user");
    if($auth=$req->fetch()){
        
    }
}
catch(PDOException $e){
    echo"error getting user".$e->getMessage();
}

?>