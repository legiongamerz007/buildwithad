/** BuildWithAD — minimal site JS */

(function () {
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
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

  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (counters.length) {
    const run = () => {
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        if (Number.isNaN(target)) return;
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * eased);
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
      }, { threshold: 0.3 });
      obs.observe(band);
    } else {
      run();
    }
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name?.value?.trim() || "";
      const email = form.email?.value?.trim() || "";
      const message = form.message?.value?.trim() || "";
      const subject = encodeURIComponent(`BuildWithAD inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:i.am.adeelee@gmail.com?subject=${subject}&body=${body}`;
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = "Opening your email app…";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    });
  }
})();
