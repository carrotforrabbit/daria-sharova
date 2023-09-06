<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'assets/PHPMailer-6.8.1/src/Exception.php';
require 'assets/PHPMailer-6.8.1/src/PHPMailer.php';
require 'assets/PHPMailer-6.8.1/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

//from whom
