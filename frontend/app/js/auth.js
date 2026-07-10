/** 本地演示鉴权（localStorage）；正式版改接 Flask Session/JWT */
window.XLYAuth = (() => {
  const USERS_KEY = "xly_users_v1";
  const SESSION_KEY = "xly_session_v1";

  const readUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    } catch {
      return [];
    }
  };

  const writeUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const hash = (pwd) => {
    // 演示用简易哈希，非生产安全；正式版用 Bcrypt 在服务端
    let h = 0;
    const s = String(pwd);
    for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    return "demo_" + (h >>> 0).toString(16);
  };

  return {
    current() {
      try {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
      } catch {
        return null;
      }
    },
    register(username, password) {
      const name = String(username || "").trim();
      const pwd = String(password || "");
      if (name.length < 2) return { ok: false, msg: "用户名至少 2 个字符" };
      if (pwd.length < 4) return { ok: false, msg: "密码至少 4 个字符" };
      const users = readUsers();
      if (users.some((u) => u.username === name)) {
        return { ok: false, msg: "该用户名已被注册" };
      }
      users.push({ username: name, password: hash(pwd) });
      writeUsers(users);
      return { ok: true, msg: "注册成功！请登录" };
    },
    login(username, password) {
      const name = String(username || "").trim();
      const users = readUsers();
      const user = users.find((u) => u.username === name && u.password === hash(password));
      if (!user) return { ok: false, msg: "用户名或密码错误" };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ username: user.username }));
      return { ok: true, msg: "登录成功" };
    },
    logout() {
      sessionStorage.removeItem(SESSION_KEY);
    },
    requireLogin(redirectFrom) {
      if (this.current()) return true;
      const q = redirectFrom ? `?next=${encodeURIComponent(redirectFrom)}` : "";
      sessionStorage.setItem("xly_flash", JSON.stringify({ type: "danger", text: "请先登录后再使用该功能" }));
      location.href = `login.html${q}`;
      return false;
    },
  };
})();
