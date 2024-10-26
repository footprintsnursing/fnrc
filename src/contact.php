<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

// Include PHPMailer and SMTP classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

// Define sensitive SMTP information
define("SMTP_SERVER", "smtp-relay.brevo.com");
define("SMTP_PORT", 587);
define("SMTP_LOGIN", "7ddac4001@smtp-brevo.com");
define("SMTP_PASSWORD", "sZ3kHQz2q9p0YGdV");

// Message limit tracking
define("COUNTER_FILE", "/config/message_limit.txt");
define("DAILY_LIMIT", 300);

// Initialize the counter file if it doesn't exist
if (!file_exists(COUNTER_FILE)) {
    file_put_contents(COUNTER_FILE, "0\n" . date("Y-m-d"));
}

// Read current count and last reset date
list($count, $lastResetDate) = explode("\n", file_get_contents(COUNTER_FILE));

// Reset count daily
if (trim($lastResetDate) !== date("Y-m-d")) {
    $count = 0;
    $lastResetDate = date("Y-m-d");
    file_put_contents(COUNTER_FILE, "$count\n$lastResetDate");
}

// Block new messages if daily limit reached
if ($count >= DAILY_LIMIT) {
    echo json_encode(["success" => false, "message" => "Daily message limit reached. Please try again tomorrow."]);
    exit;
}

// Validate Inputs
$errors = [];

// Check required fields
if (empty($data->firstName) || strlen(trim($data->firstName)) < 2) {
    $errors[] = "First name is required and should be at least 2 characters.";
}
if (empty($data->lastName) || strlen(trim($data->lastName)) < 2) {
    $errors[] = "Last name is required and should be at least 2 characters.";
}
if (empty($data->email) || !filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "A valid email is required.";
}
if (!empty($data->contactNumber) && !preg_match("/^\d{10,15}$/", $data->contactNumber)) {
    $errors[] = "Contact number should be between 10 and 15 digits.";
}
if (empty($data->message) || strlen(trim($data->message)) < 10) {
    $errors[] = "Message is required and should be at least 10 characters.";
}

// If validation errors exist, return error messages
if (!empty($errors)) {
    echo json_encode(["success" => false, "message" => implode(" ", $errors)]);
    exit;
}

// Sanitize inputs
$firstName = filter_var($data->firstName, FILTER_SANITIZE_STRING);
$lastName = filter_var($data->lastName, FILTER_SANITIZE_STRING);
$contactNumber = filter_var($data->contactNumber, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$message = filter_var($data->message, FILTER_SANITIZE_STRING);

// Set up PHPMailer for Brevo SMTP
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = SMTP_SERVER;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_LOGIN;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = 'tls';
    $mail->Port = SMTP_PORT;

    $mail->setFrom($email, "$firstName $lastName");
    $mail->addAddress('footprintsnursing@gmail.com', 'Footprints Nursing Review Center');

    $mail->isHTML(true);
    $mail->Subject = "Message from Website";
    $mail->Body = "<p>Name: {$firstName} {$lastName}</p>
                   <p>Contact Number: {$contactNumber}</p>
                   <p>Email: {$email}</p>
                   <p>Message: {$message}</p>";

    // Send the email
    $mail->send();
    
    // Increment message count and save to file
    $count++;
    file_put_contents(COUNTER_FILE, "$count\n$lastResetDate");

    echo json_encode(["success" => true, "message" => "Email sent successfully."]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Failed to send email: " . $mail->ErrorInfo]);
}
?>
