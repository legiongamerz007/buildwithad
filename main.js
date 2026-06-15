/** BuildWithAD — site interactions + dynamic home sections */

(function () {
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 16);
    }, { passive: true });
  }

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // Render services on home
  const servicesGrid = document.getElementById("home-services");
  if (servicesGrid && typeof CLIENT_SERVICES !== "undefined") {
    CLIENT_SERVICES.forEach((s) => {
      const iconClass = s.iconBrand ? `fab ${s.icon}` : `fas ${s.icon}`;
      const card = document.createElement("article");
      card.className = "service-card";
      card.innerHTML = `
        <div class="service-icon"><i class="${iconClass}"></i></div>
        <h3>${s.title}</h3>
        <p class="card-desc">${s.summary}</p>
        <ul>${s.points.slice(0, 3).map((p) => `<li>${p}</li>`).join("")}</ul>
        <a href="${s.href}" class="link-arrow">Learn more <i class="fas fa-arrow-right"></i></a>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // Render products on home
  const productsGrid = document.getElementById("home-products");
  if (productsGrid && typeof OWN_PRODUCTS !== "undefined") {
    OWN_PRODUCTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "product-card";
      const link = p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener" class="product-link">Visit site <i class="fas fa-arrow-up-right-from-square"></i></a>`
        : "";
      card.innerHTML = `
        <div class="product-top">
          <h3>${p.name}</h3>
          <span class="status-badge ${p.tagClass}">${p.tag}</span>
        </div>
        <p>${p.desc}</p>
        <div class="product-stack">${p.stack}</div>
        ${link}
      `;
      productsGrid.appendChild(card);
    });
  }

  // Render tech stack
  const techRow = document.getElementById("tech-row");
  if (techRow && typeof TECH_STACK !== "undefined") {
    TECH_STACK.forEach((t) => {
      const pill = document.createElement("span");
      pill.className = "tech-pill";
      pill.textContent = t;
      techRow.appendChild(pill);
    });
  }

  // Portfolio preview (first 6 with images)
  const previewGrid = document.getElementById("portfolio-preview");
  if (previewGrid && typeof PORTFOLIO_PROJECTS !== "undefined") {
    const items = PORTFOLIO_PROJECTS.filter((p) => p.image).slice(0, 6);
    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="project-body">
          <h3>${p.name}</h3>
          <p class="project-meta">${p.niche} · ${p.region}</p>
          <div class="project-tags"><span class="tag">${p.category === "shopify-store" ? "Live store" : "Theme"}</span></div>
        </div>
      `;
      if (p.url) {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => window.open(p.url, "_blank"));
      }
      previewGrid.appendChild(card);
    });
  }

  // Stats counter
  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (counters.length) {
    const run = () => {
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        if (Number.isNaN(target)) return;
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };
    const band = document.querySelector(".stats-band");
    if (band && "IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          run();
          obs.disconnect();
        }
      }, { threshold: 0.25 });
      obs.observe(band);
    } else {
      run();
    }
  }

  // Contact form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name?.value?.trim() || "";
      const email = form.email?.value?.trim() || "";
      const service = form.service?.value || "General";
      const message = form.message?.value?.trim() || "";
      const subject = encodeURIComponent(`BuildWithAD — ${service} (${name})`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
      const mail = (typeof SITE !== "undefined" && SITE.email) ? SITE.email : "i.am.adeelee@gmail.com";
      window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Opening your email app…";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    });
  }
})();
