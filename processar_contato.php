<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require('credentials.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $destinatario = $mailUsername;
    $assunto = "Mensagem do formulário de contato";

    $mensagem_email = "Nome: $nome\n";
    $mensagem_email .= "Email: $email\n";
    $mensagem_email .= "Mensagem:\n$mensagem";

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Username = $mailUsername;
        $mail->Password = $mailPassword; // Use a senha de aplicativo ou sua senha do Gmail aqui

        $mail->setFrom($email, $nome);
        $mail->addAddress($destinatario);
        $mail->Subject = $assunto;
        $mail->Body = $mensagem_email;

        $mail->send();
        echo 'E-mail enviado com sucesso!';

        header("Location: index.html?enviado=sim");
    } catch (Exception $e) {
        echo 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo;
    }
}
?>
