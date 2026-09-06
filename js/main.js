import { initContact } from "./contact.js";
async function loadSections() {
    try {
        const files = [
            ["home", "./sections/home.html"],
            ["about", "./sections/about.html"],
            ["skills", "./sections/skills.html"],
            ["projects", "./sections/projects.html"],
            ["contact", "./sections/contact.html"],
            ["footer", "./sections/footer.html"]
        ];

        await Promise.all(
            files.map(async([id, file]) => {
                const response = await fetch(file);

                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }

                document.getElementById(id).innerHTML =
                    await response.text();
            })
        );

        startTypingAnimation();
        initProjects();
        initContact();

        const hash = window.location.hash;

        if (hash) {
            requestAnimationFrame(() => {
                document.querySelector(hash)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }

    } catch (error) {
        console.error("Loading error:", error);
    }
}

loadSections();