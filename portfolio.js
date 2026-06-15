function renderPortfolioGrid(filter = "all") {
  const grid = document.getElementById("portfolio-projects-grid");
  if (!grid || typeof PORTFOLIO_PROJECTS === "undefined") return;

  grid.innerHTML = "";

  const projects = PORTFOLIO_PROJECTS.filter((p) => filter === "all" || p.category === filter);

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", project.category);
    card.style.animationDelay = `${index * 0.05}s`;

    const imgSrc = project.image || "https://via.placeholder.com/400x300/00d4ff/0a0a0a?text=BuildWithAD";
    const linkHtml = project.url
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link" title="Visit store"><i class="fas fa-external-link-alt"></i></a>`
      : "";

    card.innerHTML = `
      <div class="project-image">
        <img src="${imgSrc}" alt="${project.name} — Shopify store by BuildWithAD" loading="lazy">
        <div class="project-overlay">
          <div class="project-links">${linkHtml}</div>
        </div>
      </div>
      <div class="project-info">
        <h3>${project.name}</h3>
        <p>${project.externalNote || `Shopify ${project.category === "shopify-theme" ? "theme & customization" : "store"} — ${project.niche} · ${project.region}`}</p>
        <div class="project-tags">
          <span class="tag">${project.niche}</span>
          <span class="tag">${project.region}</span>
          <span class="tag">Shopify</span>
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
