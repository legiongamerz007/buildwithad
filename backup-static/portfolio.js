function renderPortfolioGrid(filter = "all") {
  const grid = document.getElementById("portfolio-projects-grid");
  if (!grid || typeof PORTFOLIO_PROJECTS === "undefined") return;

  grid.innerHTML = "";
  const projects = PORTFOLIO_PROJECTS.filter((p) => filter === "all" || p.category === filter);

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", project.category);

    const imgSrc = project.image || "";
    const linkHtml = project.url
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link" title="Visit"><i class="fas fa-arrow-up-right-from-square"></i></a>`
      : "";

    const thumbInner = imgSrc
      ? `<img src="${imgSrc}" alt="${project.name}" loading="lazy">`
      : `<div style="display:grid;place-items:center;height:100%;color:var(--dim);font-size:2rem;"><i class="fas fa-globe"></i></div>`;

    card.innerHTML = `
      <div class="project-thumb">
        ${thumbInner}
        ${linkHtml ? `<div class="project-overlay">${linkHtml}</div>` : ""}
      </div>
      <div class="project-body">
        <h3>${project.name}</h3>
        <p class="project-meta">${project.externalNote || `${project.niche} · ${project.region}`}</p>
        <div class="project-tags">
          <span class="tag">${project.niche}</span>
          <span class="tag">${project.region}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("portfolio-projects-grid")) return;
  renderPortfolioGrid("all");
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      renderPortfolioGrid(button.getAttribute("data-filter") || "all");
    });
  });
});
