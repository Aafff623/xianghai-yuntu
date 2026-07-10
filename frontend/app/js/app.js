/** 全局壳：顶栏用户态、Flash、搜索跳转、受保护页检查 */
(() => {
  const AUTH_PAGES = ["smart-search.html", "search.html", "route-detail.html", "profile.html"];

  function pageName() {
    const p = location.pathname.split("/").pop() || "index.html";
    return p || "index.html";
  }

  function flashConsume() {
    const raw = sessionStorage.getItem("xly_flash");
    if (!raw) return;
    sessionStorage.removeItem("xly_flash");
    try {
      const { type, text } = JSON.parse(raw);
      showFlash(type || "info", text || "");
    } catch {
      /* ignore */
    }
  }

  function showFlash(type, text) {
    const el = document.getElementById("flash");
    if (!el) return;
    el.className = `flash flash--${type} is-on`;
    el.textContent = text;
    clearTimeout(showFlash._t);
    showFlash._t = setTimeout(() => {
      el.classList.remove("is-on");
    }, 3000);
  }

  function avatarHtml(user, size) {
    const px = size || 34;
    const label = user?.displayName || user?.username || "?";
    const initial = escapeHtml(String(label).slice(0, 1));
    if (user?.username === "admin") {
      return `<img class="avatar avatar--img" src="../../assets/brand/avatar-admin.svg" alt="${escapeHtml(label)}" width="${px}" height="${px}" style="width:${px}px;height:${px}px;border-radius:50%;object-fit:cover;display:block;box-shadow:0 0 0 1px rgba(10,53,83,0.08)" />`;
    }
    return `<span class="avatar" style="width:${px}px;height:${px}px;border-radius:50%;background:linear-gradient(135deg,#e6c897,#0a5a82);display:grid;place-items:center;color:#fff;font-weight:700;font-size:${Math.max(12, Math.round(px * 0.38))}px">${initial}</span>`;
  }

  window.XLYUI = { showFlash, avatarHtml };

  function renderAuthSlot() {
    const slot = document.getElementById("authSlot");
    if (!slot || !window.XLYAuth) return;
    const user = XLYAuth.current();
    if (user) {
      const label = user.displayName || user.username || "?";
      slot.innerHTML = `<a class="user-chip" href="profile.html" title="个人资料" style="display:flex;align-items:center;gap:10px;text-decoration:none">
          ${avatarHtml(user, 34)}
          <span class="nav-user">欢迎，${escapeHtml(label)}</span>
        </a>
        <a class="btn btn--ghost btn--sm" href="profile.html">资料</a>
        <button type="button" class="btn btn--ghost btn--sm" id="logoutBtn">退出</button>`;
      document.getElementById("logoutBtn")?.addEventListener("click", () => {
        XLYAuth.logout();
        sessionStorage.setItem(
          "xly_flash",
          JSON.stringify({ type: "info", text: "您已成功注销" })
        );
        location.href = "index.html";
      });
    } else {
      slot.innerHTML = `<a class="btn btn--ghost btn--sm" href="login.html">登录</a>
        <a class="btn btn--sm" href="register.html">注册</a>`;
    }
  }

  function paintBrand() {
    document.querySelectorAll(".app-nav__brand img").forEach((img) => {
      img.src = "../../assets/brand/logo.svg";
      img.alt = "乡旅e模式";
      img.removeAttribute("width");
      img.removeAttribute("height");
    });
    document.querySelectorAll('.app-nav__search input[type="search"]').forEach((input) => {
      if (!input.placeholder || input.placeholder.includes("关键词")) {
        input.placeholder = "搜索目的地 / 玩法 / 攻略";
      }
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function wireHeaderSearch() {
    const form = document.getElementById("headerSearch");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = new FormData(form).get("q");
      if (AUTH_PAGES.includes("search.html") && !XLYAuth.current()) {
        XLYAuth.requireLogin(`search.html?q=${encodeURIComponent(String(q || ""))}`);
        return;
      }
      location.href = `search.html?q=${encodeURIComponent(String(q || ""))}`;
    });
  }

  function guard() {
    const page = pageName();
    if (AUTH_PAGES.includes(page) && !XLYAuth.current()) {
      XLYAuth.requireLogin(page + location.search);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    paintBrand();
    guard();
    renderAuthSlot();
    wireHeaderSearch();
    flashConsume();
  });
})();
