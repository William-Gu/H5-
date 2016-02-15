<?php
header('Content-type: text/json');

$user_id=$_POST["user_id"];
$realname=$_POST["realname"];
$id=$_POST["id"];
$mobile=$_POST["mobile"];
$ckecksum=$_POST["ckecksum"];

$data = array (
    "user_id"  => array($user_id),
    "realname" => array($realname),
    "id" => array($id),
    "mobile" => array($mobile),
    "checksum" => array($checksum)
);

 echo $str=json_encode($data);
?>