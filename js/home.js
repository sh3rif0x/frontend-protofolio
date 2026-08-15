function startTypingAnimation() {

    const typingText = document.getElementById("typing-text");

    if (!typingText) {
        console.log("typing-text not found");
        return;
    }

    const text = "Front-End Developer";

    let index = 0;
    let deleting = false;

    function animate() {

        if (!deleting) {

            // Write text
            typingText.textContent = text.substring(0, index);

            index++;

            // Finished writing
            if (index > text.length) {

                deleting = true;

                // Wait before deleting
                setTimeout(animate, 1800);

                return;
            }

            setTimeout(animate, 100);

        } else {

            // Delete text
            typingText.textContent = text.substring(0, index);

            index--;

            // Finished deleting
            if (index < 0) {

                index = 0;
                deleting = false;

                // Wait before typing again
                setTimeout(animate, 500);

                return;
            }

            setTimeout(animate, 60);
        }
    }

    animate();
}