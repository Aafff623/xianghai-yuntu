(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav ---------- */
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("navDrawer");

  const onScroll = () => {
    if (!nav) return;
    const wrap = nav.closest(".nav-wrap") || nav;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
    wrap.classList.toggle("is-scrolled", window.scrollY > 8);
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
    let index = 0;
    let timer = null;
    const intervalMs = 5000;

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

    // Auto-play only; no prev/next arrows. Pause on hover for readability.
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    start();
  }

  /* ---------- Demo data ---------- */
  /* 示意路线覆盖多区域类型（江南 / 西南 / 华北 / 徽州等），不锁单一城市 */
  const ROUTES = [
    {
      id: "town",
      title: "江南水乡古镇非遗日",
      region: "华东 · 江南水乡型",
      days: "1-2",
      type: "文化体验",
      budget: "经济型",
      blurb: "水巷古桥与手作市集，全国水乡型古镇通用一日结构。",
      img: "../../assets/landing/dest-culture.jpg",
      summary: "适用于江南一带水乡古镇：上午水巷，中午老街，下午非遗手作，节奏舒缓、预算可控。",
      dining: "本帮小菜与河鲜，古镇内老字号面馆。",
      stay: "当日往返；过夜可选古镇客栈。",
      cost: "约 ¥100-180 / 人（不含城际交通）",
      timeline: [
        { time: "09:00-12:00", title: "水巷与古桥", desc: "沿河道漫步，了解水乡建筑与市井格局。" },
        { time: "12:00-14:00", title: "老街午餐", desc: "本地面食与河鲜小馆，人均约 40-60 元。" },
        { time: "14:00-17:30", title: "非遗手作与市集", desc: "走访剪纸、染布等工坊，可选择体验课。" },
      ],
    },
    {
      id: "nature",
      title: "西南梯田山乡慢行",
      region: "西南 · 梯田山乡型",
      days: "1-2",
      type: "自然观光",
      budget: "舒适型",
      blurb: "梯田观景与村落慢行，覆盖西南山乡自然观光场景。",
      img: "../../assets/landing/dest-nature.jpg",
      summary: "适用于西南梯田与山乡聚落：上午观景，下午村落，周末自然观光友好。",
      dining: "农家土菜与时令蔬果。",
      stay: "山景民宿或乡村客栈，舒适型预算。",
      cost: "约 ¥220-380 / 人（含一顿农家餐）",
      timeline: [
        { time: "09:30-12:00", title: "梯田观景", desc: "沿观景步道慢行，注意防晒与补给。" },
        { time: "12:00-14:00", title: "农家午餐", desc: "当地家常菜，人均约 50-90 元。" },
        { time: "15:00-17:30", title: "村落漫步", desc: "走访民居与田埂小径，节奏放松。" },
      ],
    },
    {
      id: "family",
      title: "华北河谷亲子研学",
      region: "华北 · 河谷乡野型",
      days: "1-2",
      type: "亲子休闲",
      budget: "经济型",
      blurb: "自然步道与乡野过夜，适合京津冀等近郊亲子短途。",
      img: "../../assets/landing/dest-family.jpg",
      summary: "两日一夜亲子自然线：河谷步道、乡野夜宿与轻量研学，不绑定单一景区门票体系。",
      dining: "农家宴与河鲜家常菜。",
      stay: "乡村家庭房或亲子民宿，经济型。",
      cost: "约 ¥320-480 / 人（含一夜住宿）",
      timeline: [
        { time: "第1天 10:00", title: "河谷步道", desc: "沿河道步道探索，适合亲子节奏。" },
        { time: "第1天 18:00", title: "农家晚餐与夜宿", desc: "家常菜，住乡村家庭房。" },
        { time: "第2天 09:00", title: "轻量研学", desc: "自然观察与返程，避免赶点。" },
      ],
    },
    {
      id: "village",
      title: "徽州山地古村两日",
      region: "华东 · 徽州山地型",
      days: "1-2",
      type: "乡村旅游",
      budget: "舒适型",
      blurb: "石板巷、民居与近村山径，山地古村慢住模板。",
      img: "../../assets/landing/slide-mountain.jpg",
      summary: "适用于徽州及同类山地古村：兼顾乡俗体验与自然山径。",
      dining: "山货与本地面食。",
      stay: "村内精品民宿，舒适型。",
      cost: "约 ¥260-420 / 人（含一晚住宿参考）",
      timeline: [
        { time: "第1天 11:00", title: "入村漫步", desc: "石板巷与民居外观导览。" },
        { time: "第1天 17:00", title: "村晚与夜宿", desc: "农家晚餐，住村内民宿。" },
        { time: "第2天 08:30", title: "山径轻行", desc: "近村山径与返程。" },
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
      out.textContent = "请输入关键词，例如：古镇。";
      return;
    }
    const hits = ROUTES.filter((r) => {
      const bag = [r.title, r.type, r.blurb, r.id, r.region || "", r.summary || ""]
        .join(" ")
        .toLowerCase();
      return bag.includes(q);
    });
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

  /* ---------- Orbit slow rotate (GSAP) ---------- */
  const rotor = document.getElementById("orbitRotor");
  if (rotor && window.gsap && !reduceMotion) {
    gsap.to(rotor, {
      rotation: 360,
      duration: 48,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
    // 内层按初始角反向 + 同步反转，文字始终正向
    document.querySelectorAll(".orbit__item").forEach((item) => {
      const spin = item.querySelector(".orbit__spin");
      if (!spin) return;
      const a = parseFloat(getComputedStyle(item).getPropertyValue("--a")) || 0;
      gsap.set(spin, { rotation: -a, transformOrigin: "50% 50%" });
      gsap.to(spin, {
        rotation: -a - 360,
        duration: 48,
        ease: "none",
        repeat: -1,
      });
    });
  }
})();
