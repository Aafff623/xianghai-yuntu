/** 全局壳：顶栏用户态、Flash、搜索跳转、受保护页检查 */
(() => {
  const AUTH_PAGES = ["smart-search.html", "search.html", "route-detail.html"];

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

  window.XLYUI = { showFlash };

  function renderAuthSlot() {
    const slot = document.getElementById("authSlot");
    if (!slot || !window.XLYAuth) return;
    const user = XLYAuth.current();
    if (user) {
      slot.innerHTML = `<span class="nav-user">欢迎，${escapeHtml(user.username)}</span>
        <button type="button" class="btn btn--ghost btn--sm" id="logoutBtn">注销</button>`;
      document.getElementById("logoutBtn")?.addEventListener("click", () => {
        XLYAuth.logout();
        sessionStorage.setItem(
          "xly_flash",
          JSON.stringify({ type: "info", text: "您已成功注销" })
        );
        location.href = "index.html";
      });
    } else {
      slot.innerHTML = `<a class="nav-link" href="register.html">注册</a>
        <a class="btn btn--primary btn--sm" href="login.html">登录</a>`;
    }
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
    guard();
    renderAuthSlot();
    wireHeaderSearch();
    flashConsume();
  });
})();
