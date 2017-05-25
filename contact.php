<?php

$client = $_POST['client'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

mail("nartak85@gmail.com", $subject, $message, "From: $email\r\n")

?>
