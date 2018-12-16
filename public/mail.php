
<?php
if (isset ( $_POST ['name'] ) && isset ( $_POST ['mail'] ) && isset ( $_POST ['message'] )) {
	$to = 'Roni691986@gmail.com';
	$name = $_POST ['name'];
	$mail = $_POST ['mail'];
	$message = $_POST ['message'];
	
	'X-Mailer: PHP/' . phpversion ();
	$mail = mail($to,'New mail from RoniChabra.com','From: ' . $name  .  ', Mail: ' . $mail  . ', Message: ' . $message);
	if ($mail)
		echo 'Email sent successfully!';
	else
		echo 'Error, Please send mail to Roni6ch@gmail.com , Thanks!';
	exit ();
}
?>
