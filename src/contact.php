<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");

require 'vendor/autoload.php';

use SendinBlue\Client\Configuration;
use SendinBlue\Client\Api\TransactionalEmailsApi;
use GuzzleHttp\Client;

// Define message limit file and daily limit
define("COUNTER_FILE", __DIR__ . "/config/message_limit.txt");
define("DAILY_LIMIT", 300);

// Use file locking for safe read/write operations
$counterFile = fopen(COUNTER_FILE, "c+");
if (!$counterFile) {
    echo json_encode(["success" => false, "message" => "Error accessing message limit file."]);
    exit;
}

flock($counterFile, LOCK_EX);
$contents = stream_get_contents($counterFile);
list($count, $lastResetDate) = explode("\n", $contents ?: "0\n" . date("Y-m-d"));

// Reset count daily
if (trim($lastResetDate) !== date("Y-m-d")) {
    $count = 0;
    $lastResetDate = date("Y-m-d");
}

// Check if daily limit is reached
if ($count >= DAILY_LIMIT) {
    echo json_encode(["success" => false, "message" => "Daily message limit reached. Please try again tomorrow."]);
    exit;
}

// Increment count and write back to file
$count++;
ftruncate($counterFile, 0);
rewind($counterFile);
fwrite($counterFile, "$count\n$lastResetDate");
fflush($counterFile);
flock($counterFile, LOCK_UN);
fclose($counterFile);

// Process request data
$data = json_decode(file_get_contents("php://input"));
if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid request data."]);
    exit;
}

// Validate inputs
$errors = [];
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
if (empty($data->agreed) || !$data->agreed) { // Check if user agreed to terms
    $errors[] = "You must agree to the data policy.";
}

if (!empty($errors)) {
    echo json_encode(["success" => false, "message" => implode(" ", $errors)]);
    exit;
}

// Brevo API setup and email sending
$config = Configuration::getDefaultConfiguration()->setApiKey('api-key', 'YOUR_BREVO_API_KEY');
$apiInstance = new TransactionalEmailsApi(new Client(), $config);

$sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail([
    'to' => [['email' => 'footprintsnursing@gmail.com', 'name' => 'Footprints Nursing Review Center']],
    'sender' => ['email' => 'info@fnrc.ca', 'name' => "FNRC Website"],
    'subject' => "Message from Website Contact Form",
    'htmlContent' => "<p>Name: {$data->firstName} {$data->lastName}</p>
                      <p>Email: {$data->email}</p>
                      <p>Contact Number: {$data->contactNumber}</p>
                      <p>Message: {$data->message}</p>"
]);

try {
    $apiInstance->sendTransacEmail($sendSmtpEmail);
    echo json_encode(["success" => true, "message" => "Email sent successfully."]);
} catch (Exception $e) {
    error_log("Mailer Error: " . $e->getMessage());
    echo json_encode(["success" => false, "message" => "Failed to send email: " . $e->getMessage()]);
}
?>
