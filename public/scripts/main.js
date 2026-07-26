(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("motion-ready");
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const navLinks = document.querySelector("[data-nav-links]");
  const sectionLinks = [...document.querySelectorAll("[data-section-link]")];
  const sections = sectionLinks
    .map((link) => document.getElementById(link.dataset.sectionLink))
    .filter(Boolean);

  localStorage.setItem("portfolio-language", document.body.dataset.locale || "en");

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navLinks?.classList.toggle("is-open", !open);
  });

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      navLinks?.classList.remove("is-open");
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el, index) => {
      if (!reduceMotion) el.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
      revealObserver.observe(el);
    });

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          sectionLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.sectionLink === entry.target.id);
          });
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => activeObserver.observe(section));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  const progress = document.querySelector("[data-timeline-progress]");
  const timeline = document.querySelector("[data-timeline]");
  const setProgress = () => {
    if (!timeline || !progress || reduceMotion) return;
    const rect = timeline.getBoundingClientRect();
    const viewport = window.innerHeight;
    const total = rect.height + viewport * 0.35;
    const traveled = viewport * 0.62 - rect.top;
    const ratio = Math.max(0, Math.min(1, traveled / total));
    progress.style.height = `${ratio * 100}%`;
  };
  setProgress();
  window.addEventListener("scroll", setProgress, { passive: true });
  window.addEventListener("resize", setProgress);

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.getAttribute("data-copy-email") || "";
      const label = button.getAttribute("data-copy-label") || "Copy email";
      const copied = button.getAttribute("data-copied-label") || "Copied";
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = copied;
      } catch {
        window.location.href = `mailto:${email}`;
      } finally {
        window.setTimeout(() => {
          button.textContent = label;
        }, 1400);
      }
    });
  });
})();
