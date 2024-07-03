<?php
session_start(); // Start the session
$curent_user = "";
include("auth.php");
$txt_email=$_POST["mail"];
$txt_pw=$_POST["pw"];
$req=$con->query("select * from user where email='".$txt_email."'");
if($ligne=$req->fetch()){
    $login=$ligne['email'];
    $pass=$ligne['passeword'];
    if(!empty($txt_email) and !empty($txt_pw)){
        if($login==$txt_email and $pass==$txt_pw){
            $curent_user=$login;
            // put curentuser in session
            $_SESSION['curent_user'] = $curent_user;
            header("Location: dis.html");
            exit();
        }else{
            echo "<script>alert('mot de passe incorrect')</script>";
        }
    }else{
        echo "<script>alert('vide non autoriser')</script>";
    }
}else{
    echo "<script>alert('Utilisateur inconu')</script>";
}
?>
