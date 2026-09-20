async function initProjects() {
    const projectsGrid = document.getElementById("projects-grid");

    if (!projectsGrid) {
        console.log("projects-grid not found");
        return;
    }

    const response = await fetch("./data/projects.json");
    const projects = await response.json();

    projectsGrid.innerHTML = projects.map(project => {
        const hasGithub = Boolean(project.github && project.github.trim());
        const hasLive = Boolean(project.live && project.live.trim());

        const buttons = [];

        if (hasGithub) {
            buttons.push(`
                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noreferrer"
                    class="project-btn github-btn"
                >
                    GitHub
                </a>
            `);
        }

        if (hasLive) {
            buttons.push(`
                <a
                    href="${project.live}"
                    target="_blank"
                    rel="noreferrer"
                    class="project-btn live-btn"
                >
                    Live Preview
                </a>
            `);
        }

        return `
            <article class="project-card">

                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">

                    <div class="project-overlay">
                        ${buttons.join("") || ""}
                    </div>
                </div>

                <div class="project-info">
                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span>${tag}</span>
                        `).join("")}
                    </div>
                </div>

            </article>
        `;
    }).join("");
}
