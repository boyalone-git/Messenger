<?php
    $con1=new PDO("mysql:host=localhost;dbname=bddiscussion;port=3306","root","@)@$") or die ("error with database");

    if (isset($_SESSION['curent_user'])) {
        $curent_user= $_SESSION['curent_user'];
        $sender=$curent_user;
        $receiver = $id_friend;//get id friend
        $message=$_POST['commentaire'];
        $isreceive = false;
        $timestamp = date('Y-m-d H:i:s'); // Get the current timestamp
        if(isset($owner,$message)){
            $con1->exec("INSERT INTO message (receiver, sender, isreceive, text, timestamp) values('".$receiver."','".$owner."','".$isreceive."','".$message."','".$timestamp."')") or die("Error sending message");
            echo "<script>alert('Enregistrement effectué!!!')</script>";
        }else{
            echo"<script>alert('Erreur')</script>";
        }
    } else {
        echo"<script>alert('aucune donnees')</script>";
    }
?>
