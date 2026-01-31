<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the form
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Recipient - your new authenticated address
    $to = "admin@topmodeloftheworldaustralia.com.au";
    $subject = "New Website Inquiry from: $name";

    // Email Headers
    $headers = "From: admin@topmodeloftheworldaustralia.com.au\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email Body
    $body = "You have received a new inquiry from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Success: Redirect to your contact-success.html page
        header("Location: contact-success.html");
        exit;
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>