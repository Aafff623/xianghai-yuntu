/** 本地演示鉴权（localStorage）；正式版改接 Flask Session/JWT */
window.XLYAuth = (() => {
  const USERS_KEY = "xly_users_v1";
  const SESSION_KEY = "xly_session_v1";
  const PROFILE_KEY = "xly_profiles_v1";

  /** 演示默认账号（写死，方便体验） */
  const DEMO_USER = { username: "admin", password: "123456" };

  const hash = (pwd) => {
    // 演示用简易哈希，非生产安全；正式版用 Bcrypt 在服务端
    let h = 0;
    const s = String(pwd);
    for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    return "demo_" + (h >>> 0).toString(16);
  };

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

  const ensureDemoUser = () => {
    const users = readUsers();
    const idx = users.findIndex((u) => u.username === DEMO_USER.username);
    const seeded = {
      username: DEMO_USER.username,
      password: hash(DEMO_USER.password),
      displayName: "演示管理员",
      bio: "乡旅e模式演示账号，用于体验智能推荐与行程详情。",
      city: "全国",
      joinedAt: "2026-01-01",
      isDemo: true,
    };
    if (idx < 0) users.push(seeded);
    else users[idx] = { ...users[idx], ...seeded };
    writeUsers(users);
  };

  ensureDemoUser();

  const readProfiles = () => {
    try {
      return JSON.parse(localStorage.getItem(PROFILE_KEY) || "{}");
    } catch {
      return {};
    }
  };

  const writeProfiles = (map) => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(map));
  };

  const defaultProfile = (username) => {
    if (username === DEMO_USER.username) {
      return {
        username,
        displayName: "演示管理员",
        bio: "乡旅e模式演示账号，用于体验智能推荐与行程详情。",
        city: "全国",
        email: "admin@demo.local",
        joinedAt: "2026-01-01",
        prefs: { day_range: "1-2", route_type: "自然观光", budget_level: "舒适型" },
      };
    }
    return {
      username,
      displayName: username,
      bio: "还没有填写个人简介。",
      city: "未设置",
      email: "",
      joinedAt: new Date().toISOString().slice(0, 10),
      prefs: { day_range: "", route_type: "", budget_level: "" },
    };
  };

  return {
    DEMO_USER,
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
      if (name === DEMO_USER.username) return { ok: false, msg: "该用户名为系统演示账号，请换一个" };
      const users = readUsers();
      if (users.some((u) => u.username === name)) {
        return { ok: false, msg: "该用户名已被注册" };
      }
      users.push({ username: name, password: hash(pwd) });
      writeUsers(users);
      const profiles = readProfiles();
      profiles[name] = defaultProfile(name);
      writeProfiles(profiles);
      return { ok: true, msg: "注册成功！请登录" };
    },
    login(username, password) {
      ensureDemoUser();
      const name = String(username || "").trim();
      const pwd = String(password || "");
      // 演示账号明文校验兜底（即使用户清过 localStorage 也能登）
      if (name === DEMO_USER.username && pwd === DEMO_USER.password) {
        sessionStorage.setItem(
          SESSION_KEY,
          JSON.stringify({ username: DEMO_USER.username, displayName: "演示管理员" })
        );
        return { ok: true, msg: "登录成功（演示账号）" };
      }
      const users = readUsers();
      const user = users.find((u) => u.username === name && u.password === hash(pwd));
      if (!user) return { ok: false, msg: "用户名或密码错误" };
      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ username: user.username, displayName: user.displayName || user.username })
      );
      return { ok: true, msg: "登录成功" };
    },
    logout() {
      sessionStorage.removeItem(SESSION_KEY);
    },
    getProfile(username) {
      const name = username || this.current()?.username;
      if (!name) return null;
      const profiles = readProfiles();
      if (!profiles[name]) {
        profiles[name] = defaultProfile(name);
        writeProfiles(profiles);
      }
      return profiles[name];
    },
    saveProfile(patch) {
      const user = this.current();
      if (!user) return { ok: false, msg: "请先登录" };
      const profiles = readProfiles();
      const prev = profiles[user.username] || defaultProfile(user.username);
      const next = {
        ...prev,
        displayName: String(patch.displayName || prev.displayName || user.username).trim() || user.username,
        bio: String(patch.bio || "").slice(0, 200),
        city: String(patch.city || "").slice(0, 40),
        email: String(patch.email || "").slice(0, 80),
        prefs: {
          day_range: String(patch.day_range || prev.prefs?.day_range || ""),
          route_type: String(patch.route_type || prev.prefs?.route_type || ""),
          budget_level: String(patch.budget_level || prev.prefs?.budget_level || ""),
        },
      };
      profiles[user.username] = next;
      writeProfiles(profiles);
      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ username: user.username, displayName: next.displayName })
      );
      return { ok: true, msg: "资料已保存", profile: next };
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
