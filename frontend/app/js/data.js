/**
 * 乡旅e模式 — 全国区域类型种子 + 热度排序字段
 * rankScore = popularity*0.4 + rating*10*0.35 + likesNorm*0.25
 */
window.XLY_ROUTES = [
  {
    id: "jiangnan-town",
    keyword: "江南水乡古镇非遗日",
    region: "华东 · 江南水乡型",
    region_tag: "江南水乡",
    days: 1,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "经济型",
    route_details:
      "适用于江南一带水乡古镇：上午水巷，中午老街，下午非遗手作。节奏舒缓、预算可控。",
    dining: "本帮小菜与河鲜，古镇内老字号面馆。",
    accommodation: "当日往返；过夜可选古镇客栈。",
    cost_estimation: "约 ¥100-180 / 人（不含城际交通）",
    tags: "水乡,古镇,非遗,文化,江南,热门",
    image: "../../assets/landing/dest-culture.jpg",
    popularity: 96,
    rating: 4.8,
    likes: 1280,
    ai_summary:
      "一日文化体验线，适合第一次走水乡的人。核心三站：水巷—老街—手作，预算友好，不赶场。",
    daily_schedule: [
      { day: 1, time: "09:00-12:00", title: "水巷与古桥", desc: "沿河道漫步，了解水乡建筑与市井格局。" },
      { day: 1, time: "12:00-14:00", title: "老街午餐", desc: "本地面食与河鲜小馆，人均约 40-60 元。" },
      { day: 1, time: "14:00-17:30", title: "非遗手作与市集", desc: "走访剪纸、染布等工坊，可选择体验课。" },
    ],
  },
  {
    id: "southwest-terrace",
    keyword: "西南梯田山乡慢行",
    region: "西南 · 梯田山乡型",
    region_tag: "西南梯田",
    days: 1,
    day_range: "1-2",
    route_type: "自然观光",
    budget_level: "舒适型",
    route_details:
      "适用于西南梯田与山乡聚落：上午观景，下午村落，周末自然观光友好。",
    dining: "农家土菜与时令蔬果。",
    accommodation: "山景民宿或乡村客栈，舒适型预算。",
    cost_estimation: "约 ¥220-380 / 人（含一顿农家餐）",
    tags: "梯田,山乡,自然,西南,观光",
    image: "../../assets/landing/dest-nature.jpg",
    popularity: 88,
    rating: 4.7,
    likes: 960,
    ai_summary:
      "自然观光向的一日慢行。观景与村落对半开，适合想拍风景又不想高强度徒步的人。",
    daily_schedule: [
      { day: 1, time: "09:30-12:00", title: "梯田观景", desc: "沿观景步道慢行，注意防晒与补给。" },
      { day: 1, time: "12:00-14:00", title: "农家午餐", desc: "当地家常菜，人均约 50-90 元。" },
      { day: 1, time: "15:00-17:30", title: "村落漫步", desc: "走访民居与田埂小径，节奏放松。" },
    ],
  },
  {
    id: "north-family",
    keyword: "华北河谷亲子研学",
    region: "华北 · 河谷乡野型",
    region_tag: "华北河谷",
    days: 2,
    day_range: "1-2",
    route_type: "亲子休闲",
    budget_level: "经济型",
    route_details:
      "两日一夜亲子自然线：河谷步道、乡野夜宿与轻量研学，适合京津冀等近郊短途。",
    dining: "农家宴与河鲜家常菜。",
    accommodation: "乡村家庭房或亲子民宿，经济型。",
    cost_estimation: "约 ¥320-480 / 人（含一夜住宿）",
    tags: "亲子,河谷,研学,华北,乡野,热门",
    image: "../../assets/landing/dest-family.jpg",
    popularity: 92,
    rating: 4.6,
    likes: 1105,
    ai_summary:
      "亲子友好的两日线。白天探索、晚上住乡野，研学强度低，适合带娃第一次短途过夜。",
    daily_schedule: [
      { day: 1, time: "10:00-17:00", title: "河谷步道", desc: "沿河道步道探索，适合亲子节奏。" },
      { day: 1, time: "18:00-20:00", title: "农家晚餐与夜宿", desc: "家常菜，住乡村家庭房。" },
      { day: 2, time: "09:00-12:00", title: "轻量研学", desc: "自然观察与返程，避免赶点。" },
    ],
  },
  {
    id: "huizhou-village",
    keyword: "徽州山地古村两日",
    region: "华东 · 徽州山地型",
    region_tag: "徽州山地",
    days: 2,
    day_range: "1-2",
    route_type: "乡村旅游",
    budget_level: "舒适型",
    route_details: "适用于徽州及同类山地古村：石板巷、民居与近村山径慢住。",
    dining: "山货与本地面食。",
    accommodation: "村内精品民宿，舒适型。",
    cost_estimation: "约 ¥260-420 / 人（含一晚住宿参考）",
    tags: "徽州,古村,山地,乡村,民宿",
    image: "../../assets/landing/slide-mountain.jpg",
    popularity: 85,
    rating: 4.9,
    likes: 870,
    ai_summary:
      "高评分乡村慢住。第一天沉浸村落，第二天山径轻行，适合想「住下来」而不是赶景点的人。",
    daily_schedule: [
      { day: 1, time: "11:00-16:00", title: "入村漫步", desc: "石板巷与民居外观导览。" },
      { day: 1, time: "17:00-20:00", title: "村晚与夜宿", desc: "农家晚餐，住村内民宿。" },
      { day: 2, time: "08:30-12:00", title: "山径轻行", desc: "近村山径与返程。" },
    ],
  },
  {
    id: "northwest-nature",
    keyword: "西北丹霞乡野三日",
    region: "西北 · 丹霞乡野型",
    region_tag: "西北丹霞",
    days: 3,
    day_range: "3-5",
    route_type: "自然观光",
    budget_level: "舒适型",
    route_details: "三日自然观光模板：丹霞地貌观景 + 周边乡村夜宿，强调补给与防晒。",
    dining: "西北面食与当地炖菜。",
    accommodation: "景区外乡村客栈或县城酒店。",
    cost_estimation: "约 ¥680-980 / 人（含两晚住宿参考）",
    tags: "西北,丹霞,自然,三日,乡野,热门",
    image: "../../assets/landing/slide-terrace.jpg",
    popularity: 90,
    rating: 4.7,
    likes: 1420,
    ai_summary:
      "三日自然线。第一天适应、第二天主景、第三天收尾，适合想看西北地貌又想住乡村的人。",
    daily_schedule: [
      { day: 1, time: "全天", title: "抵达与近村适应", desc: "入住、补给、傍晚轻徒步。" },
      { day: 2, time: "全天", title: "丹霞主景区观景", desc: "核心观景点，注意补水与防晒。" },
      { day: 3, time: "上午", title: "乡野收尾与返程", desc: "周边村落短访后离开。" },
    ],
  },
  {
    id: "south-culture",
    keyword: "岭南墟市文化两日",
    region: "华南 · 岭南墟市型",
    region_tag: "岭南墟市",
    days: 2,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "豪华型",
    route_details: "岭南墟市与宗祠文化两日线，适合文化体验与美食并行。",
    dining: "早茶、糖水与地道粤菜。",
    accommodation: "设计型民宿或精品酒店。",
    cost_estimation: "约 ¥900-1400 / 人（含一晚住宿）",
    tags: "岭南,墟市,文化,美食,华南",
    image: "../../assets/landing/slide-jiangnan.jpg",
    popularity: 78,
    rating: 4.5,
    likes: 640,
    ai_summary:
      "偏享受的文化美食线。墟市与宗祠为主，住宿升级，适合想「吃得好住得好」的两日假期。",
    daily_schedule: [
      { day: 1, time: "10:00-17:00", title: "墟市与宗祠", desc: "市井街区与宗祠参观。" },
      { day: 1, time: "晚上", title: "夜市与住宿", desc: "夜市街巷与精品民宿。" },
      { day: 2, time: "09:00-13:00", title: "手作与返程", desc: "短时非遗体验后离开。" },
    ],
  },
];

window.XLY_HOT_TAGS = ["水乡", "梯田", "亲子", "徽州", "丹霞", "非遗", "周末", "慢住"];
window.XLY_REGION_TAGS = ["江南水乡", "西南梯田", "华北河谷", "徽州山地", "西北丹霞", "岭南墟市"];

window.XLY_ENUM = {
  day_range: [
    { value: "1-2", label: "1-2天" },
    { value: "3-5", label: "3-5天" },
    { value: "6-7", label: "6-7天" },
  ],
  route_type: ["文化体验", "自然观光", "亲子休闲", "乡村旅游"],
  budget_level: ["经济型", "舒适型", "豪华型"],
};

function rankScore(r) {
  const maxLikes = Math.max(...window.XLY_ROUTES.map((x) => x.likes || 1), 1);
  const likesNorm = ((r.likes || 0) / maxLikes) * 100;
  const pop = r.popularity || 0;
  const rating = (r.rating || 0) * 10; // 0-50 scale-ish, then weight
  return pop * 0.4 + rating * 0.35 + likesNorm * 0.25;
}

window.XLYData = {
  rankScore,
  all() {
    return window.XLY_ROUTES.slice().sort((a, b) => rankScore(b) - rankScore(a));
  },
  byId(id) {
    return window.XLY_ROUTES.find((r) => r.id === id) || null;
  },
  smartSearch({ day_range, route_type, budget_level, region_tag, hot_tag }) {
    let list = window.XLY_ROUTES.filter((r) => {
      const d = !day_range || r.day_range === day_range;
      const t = !route_type || r.route_type === route_type;
      const b = !budget_level || r.budget_level === budget_level;
      const reg = !region_tag || r.region_tag === region_tag || (r.region || "").includes(region_tag);
      const hot =
        !hot_tag ||
        (r.tags || "").includes(hot_tag) ||
        (r.keyword || "").includes(hot_tag);
      return d && t && b && reg && hot;
    });
    // 无精确匹配时放宽：保留天数或主题，再按热度排
    if (!list.length) {
      list = window.XLY_ROUTES.filter(
        (r) =>
          (!day_range || r.day_range === day_range) ||
          (!route_type || r.route_type === route_type)
      );
    }
    return list.sort((a, b) => rankScore(b) - rankScore(a));
  },
  related(route, limit = 3) {
    if (!route) return [];
    return window.XLY_ROUTES.filter((r) => r.id !== route.id && r.day_range === route.day_range)
      .sort((a, b) => rankScore(b) - rankScore(a))
      .slice(0, limit);
  },
  keywordSearch(q) {
    const s = String(q || "").trim().toLowerCase();
    if (!s) return [];
    return window.XLY_ROUTES.filter((r) => {
      const bag = [r.keyword, r.region, r.region_tag, r.route_type, r.tags, r.route_details]
        .join(" ")
        .toLowerCase();
      return bag.includes(s);
    }).sort((a, b) => rankScore(b) - rankScore(a));
  },
};
