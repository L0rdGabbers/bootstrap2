function sendMail(contactForm) {
    emailjs.send("service_sax44eb","template_rnmursh", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILURE", error);
        }
    );
    return false;
}