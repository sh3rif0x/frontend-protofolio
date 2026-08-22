import { initContact } from "./contact.js";
async function loadSections() {
    try {
        const files = [
            ["home", "../sections/home.html"],
            ["about", "./sections/about.html"],
            ["projects", "./sections/projects.html"],
            ["skills", "./sections/skills.html"],
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

    } catch (error) {
        console.error("Loading error:", error);
    }
}

loadSections();