// JavaScript for interactivity

// Buy Now Button
document.getElementById("buyButton").addEventListener("click", function () {
    alert("Thank you for your interest! Redirecting to the payment page...");
    // Redirect to a payment page (replace with your payment gateway link)
    window.location.href = "https://example.com/payment";
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show a confirmation message
    alert(`Thank you, ${name}! Your message has been sent. We will contact you at ${email}.`);

    // Clear the form
    document.getElementById("contactForm").reset();
});
