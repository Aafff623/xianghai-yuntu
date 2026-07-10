(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav ---------- */
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("navDrawer");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const open = drawer.hasAttribute("hidden");
      if (open) {
        drawer.removeAttribute("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
      } else {
        drawer.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.setAttribute("hidden", "");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveal ---------- */
  const items = document.querySelectorAll(".reveal");
  if (items.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
      );
      items.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 5, 4) * 0.04}s`;
        io.observe(el);
      });
    }
  }

  /* ---------- City carousel ---------- */
  const carousel = document.getElementById("cityCarousel");
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
    const dotsWrap = document.getElementById("carouselDots");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");
    let index = 0;
    let timer = null;
    const intervalMs = 4500;

    const goTo = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((slide, n) => {
        slide.classList.toggle("is-active", n === index);
      });
      if (dotsWrap) {
        dotsWrap.querySelectorAll(".carousel__dot").forEach((dot, n) => {
          dot.classList.toggle("is-active", n === index);
          dot.setAttribute("aria-selected", n === index ? "true" : "false");
        });
      }
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    if (dotsWrap) {
      slides.forEach((_, n) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel__dot" + (n === 0 ? " is-active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `第 ${n + 1} 张`);
        dot.setAttribute("aria-selected", n === 0 ? "true" : "false");
        dot.addEventListener("click", () => {
          goTo(n);
          restart();
        });
        dotsWrap.appendChild(dot);
      });
    }

    prevBtn?.addEventListener("click", () => {
      prev();
      restart();
    });
    nextBtn?.addEventListener("click", () => {
      next();
      restart();
    });

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const start = () => {
      if (reduceMotion || slides.length < 2) return;
      stop();
      timer = setInterval(next, intervalMs);
    };

    const restart = () => {
      stop();
      start();
    };

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    start();
  }

  /* ---------- Demo data ---------- */
  const ROUTES = [
    {
      id: "jimo",
      title: "即墨古城非遗漫游",
      days: "1-2",
      type: "文化探索",
      budget: "经济型",
      blurb: "县衙、文庙与老街手作，一天走完古城文化轴。",
      img: "../../assets/landing/dest-town.jpg",
      summary: "从县衙到文庙，再走老街手作铺，一天完成古城文化主轴，节奏舒缓、预算可控。",
      dining: "即墨老酒配海鲜小炒，古城内老字号面馆。",
      stay: "当日往返；若过夜可选古城客栈或近郊民宿。",
      cost: "约 ¥100-180 / 人（不含远程交通）",
      timeline: [
        { time: "09:00-12:00", title: "县衙与文庙", desc: "参观即墨古城核心文保点，了解地方治理与儒家教育脉络。" },
        { time: "12:00-14:00", title: "老街午餐", desc: "本地面食与海鲜小馆，人均约 40-60 元。" },
        { time: "14:00-17:30", title: "非遗手作与市集", desc: "走访剪纸、面塑等工坊，可选择体验课。" },
      ],
    },
    {
      id: "beach",
      title: "金沙滩海滨休闲",
      days: "1-2",
      type: "海洋风光",
      budget: "舒适型",
      blurb: "浅海漫步、海鲜与落日，适合周末放松。",
      img: "../../assets/landing/dest-beach.jpg",
      summary: "上午赶海与沙滩散步，下午海鲜与日落，适合不赶场的周末。",
      dining: "海边烧烤与鲜活海鲜餐厅。",
      stay: "海景酒店或近沙滩民宿，舒适型预算。",
      cost: "约 ¥280-450 / 人（含一顿海鲜正餐）",
      timeline: [
        { time: "09:30-12:00", title: "金沙滩漫步", desc: "浅海戏水、捡贝壳，注意潮汐时间。" },
        { time: "12:00-14:00", title: "海鲜午餐", desc: "当地渔家菜，人均约 80-120 元。" },
        { time: "16:00-18:30", title: "日落观景", desc: "栈道或沙滩观日落，节奏放松。" },
      ],
    },
    {
      id: "island",
      title: "灵山岛赶海体验",
      days: "1-2",
      type: "亲子休闲",
      budget: "经济型",
      blurb: "潮间带探索与渔村过夜，适合亲子短途。",
      img: "../../assets/landing/dest-island.jpg",
      summary: "两日一夜的海岛亲子线：赶海、渔村夜宿与环岛缓行。",
      dining: "渔家宴、岛上小馆，口味偏家常。",
      stay: "岛上渔家客栈，经济型双床或家庭房。",
      cost: "约 ¥350-520 / 人（含一夜住宿）",
      timeline: [
        { time: "第1天 10:00", title: "登岛与赶海", desc: "乘船登岛，潮间带探索，适合亲子。" },
        { time: "第1天 18:00", title: "渔家晚餐与夜宿", desc: "海鲜家常菜，住渔家客栈。" },
        { time: "第2天 09:00", title: "环岛缓行", desc: "海岸步道与返程，避免赶点。" },
      ],
    },
    {
      id: "heritage",
      title: "刘公岛历史半日线",
      days: "1-2",
      type: "历史遗迹",
      budget: "舒适型",
      blurb: "威海刘公岛半日历史遗迹与海湾风光。",
      img: "../../assets/landing/slide-weihai.jpg",
      summary: "以刘公岛核心展陈为主，兼顾海湾景观，适合 1 日舒适型。",
      dining: "威海海鲜与本地面食。",
      stay: "威海市区酒店，当日可返。",
      cost: "约 ¥220-360 / 人（含船票门票参考）",
      timeline: [
        { time: "09:00-11:30", title: "登岛参观", desc: "历史展陈与核心纪念点。" },
        { time: "12:00-13:30", title: "午餐", desc: "市区或码头附近海鲜馆。" },
        { time: "14:00-16:00", title: "海湾散步", desc: "海边步道放松收尾。" },
      ],
    },
  ];

  const matchRoutes = (day, type, budget) => {
    let list = ROUTES.filter((r) => {
      const dayOk = !day || r.days === day;
      const typeOk = !type || r.type === type;
      const budgetOk = !budget || r.budget === budget;
      return dayOk && typeOk && budgetOk;
    });
    if (!list.length) {
      list = ROUTES.filter((r) => r.days === day || r.type === type).slice(0, 2);
    }
    if (!list.length) list = ROUTES.slice(0, 2);
    return list.slice(0, 3);
  };

  const renderDetail = (route) => {
    const title = document.getElementById("detailTitle");
    const tags = document.getElementById("detailTags");
    const summary = document.getElementById("detailSummary");
    const dining = document.getElementById("detailDining");
    const stay = document.getElementById("detailStay");
    const cost = document.getElementById("detailCost");
    const timeline = document.getElementById("detailTimeline");
    if (!title || !route) return;

    title.textContent = route.title;
    if (tags) {
      tags.innerHTML = `<span>${route.days === "1-2" ? "1-2 天" : route.days}行程</span><span>${route.type}</span><span>${route.budget}</span>`;
    }
    if (summary) summary.textContent = route.summary;
    if (dining) dining.textContent = route.dining;
    if (stay) stay.textContent = route.stay;
    if (cost) cost.textContent = route.cost;
    if (timeline) {
      const ol = timeline.querySelector("ol");
      if (ol) {
        ol.innerHTML = route.timeline
          .map(
            (t) => `<li>
              <time>${t.time}</time>
              <div>
                <strong>${t.title}</strong>
                <p>${t.desc}</p>
              </div>
            </li>`
          )
          .join("");
      }
    }
  };

  const renderResultCards = (list) => {
    const box = document.getElementById("smartResult");
    if (!box) return;
    if (!list.length) {
      box.innerHTML = `<div class="demo__empty">未找到匹配的路线。请尝试调整搜索条件。</div>`;
      return;
    }
    box.innerHTML = `<div class="demo__cards">${list
      .map(
        (r) => `<article class="demo__card">
          <img src="${r.img}" alt="" loading="lazy" />
          <div>
            <h4>${r.title}</h4>
            <p>${r.type} · ${r.budget} · ${r.blurb}</p>
          </div>
          <button type="button" class="btn btn--ghost" data-open-detail="${r.id}">查看详细行程</button>
        </article>`
      )
      .join("")}</div>`;

    box.querySelectorAll("[data-open-detail]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const route = ROUTES.find((r) => r.id === btn.getAttribute("data-open-detail"));
        renderDetail(route);
        document.getElementById("detail")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  };

  document.getElementById("smartForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const list = matchRoutes(
      String(fd.get("day_range") || ""),
      String(fd.get("route_type") || ""),
      String(fd.get("budget_level") || "")
    );
    renderResultCards(list);
    if (list[0]) renderDetail(list[0]);
  });

  document.querySelectorAll(".route-card__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const card = e.currentTarget.closest("[data-route]");
      const id = card?.getAttribute("data-route");
      const route = ROUTES.find((r) => r.id === id);
      if (route) renderDetail(route);
    });
  });

  /* ---------- Search demo ---------- */
  document.getElementById("searchForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = String(document.getElementById("searchInput")?.value || "")
      .trim()
      .toLowerCase();
    const out = document.getElementById("searchOut");
    if (!out) return;
    if (!q) {
      out.textContent = "请输入关键词，例如：金沙滩。";
      return;
    }
    const hits = ROUTES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.type.includes(q) ||
        r.blurb.includes(q) ||
        r.id.includes(q)
    );
    if (!hits.length) {
      out.textContent = `未找到与「${q}」匹配的路线。`;
      return;
    }
    out.innerHTML = `找到 ${hits.length} 条路线：` + hits.map((h) => h.title).join("、");
  });

  /* ---------- Feedback demo ---------- */
  document.getElementById("feedbackForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("feedbackMsg");
    const text = document.getElementById("feedbackText");
    if (msg) {
      msg.hidden = false;
    }
    if (text) text.value = "";
  });
})();
