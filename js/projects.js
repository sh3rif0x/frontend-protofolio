async function initProjects() {
    const projectsGrid = document.getElementById("projects-grid");

    if (!projectsGrid) {
        console.log("projects-grid not found");
        return;
    }

    const response = await fetch("./data/projects.json");
    const projects = await response.json();

    projectsGrid.innerHTML = projects.map(project => `
        <article class="project-card">

            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">

                <div class="project-overlay">

                    <a
                        href="${project.github}"
                        target="_blank"
                        class="project-btn github-btn"
                    >
                        GitHub
                    </a>

                    ${
                        project.live
                            ? `
                                <a
                                    href="${project.live}"
                                    target="_blank"
                                    class="project-btn live-btn"
                                >
                                    Live Preview
                                </a>
                            `
                            : ""
                    }

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
    `).join("");
}
