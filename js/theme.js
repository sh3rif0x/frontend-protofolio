(function () {
    "use strict";

    const STORAGE_KEY = "portfolio-theme";
    const root = document.documentElement;

    const icons = {
        sun: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
        `,
        moon: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
            </svg>
        `
    };

    function getTheme() {
        return localStorage.getItem(STORAGE_KEY) || "dark";
    }

    function updateTheme(theme) {
        root.dataset.theme = theme;

        localStorage.setItem(STORAGE_KEY, theme);

        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            const isLight = theme === "light";

            button.innerHTML = isLight ? icons.moon : icons.sun;

            button.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );

            button.setAttribute(
                "title",
                isLight ? "Dark mode" : "Light mode"
            );
        });
    }

    function toggleTheme() {
        const current = root.dataset.theme || "dark";
        updateTheme(current === "dark" ? "light" : "dark");
    }

    updateTheme(getTheme());

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            button.addEventListener("click", toggleTheme);
        });

        updateTheme(getTheme());
    });
})();
