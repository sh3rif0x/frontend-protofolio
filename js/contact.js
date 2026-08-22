export function initContact() {

    emailjs.init({
        publicKey: "T4q3X01a7zpo86Yr0"
    });

    const form = document.querySelector("#contact-form");

    if (!form) {
        console.error("Contact form not found!");
        return;
    }

    form.addEventListener("submit", async(e) => {

        e.preventDefault();

        const button = form.querySelector("button[type='submit']");
        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "Sending...";

        try {

            const response = await emailjs.sendForm(
                "service_uktrd6r",
                "template_24n1c58",
                form
            );

            console.log("EmailJS success:", response);

            alert("Message sent successfully!");

            form.reset();

        } catch (error) {

            console.error("EmailJS error:", error);

            alert("Failed to send message. Please try again.");

        } finally {

            button.disabled = false;
            button.textContent = originalText;

        }

    });
}