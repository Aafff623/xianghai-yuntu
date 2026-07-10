/**
 * 乡旅e模式 — 全国区域类型 Mock
 * region_tag: 全国区域（唯一）
 * hot_tags: 热门选择（可多个）
 * rankScore = popularity*0.4 + rating*10*0.35 + likesNorm*0.25
 */
window.XLY_HOT_TAGS = ["水乡", "梯田", "亲子", "徽州", "丹霞", "非遗", "周末", "慢住", "美食", "古镇", "山径", "海岛感"];
window.XLY_REGION_TAGS = ["江南水乡", "西南梯田", "华北河谷", "徽州山地", "西北丹霞", "岭南墟市", "东北林乡", "巴蜀古镇"];

window.XLY_ROUTES = [
  {
    id: "jiangnan-town",
    keyword: "江南水乡古镇非遗日",
    region: "华东 · 江南水乡型",
    region_tag: "江南水乡",
    hot_tags: ["水乡", "非遗", "古镇", "周末"],
    days: 1,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "经济型",
    route_details:
      "适用于江南一带水乡古镇：上午水巷，中午老街，下午非遗手作。节奏舒缓、预算可控。",
    body_md: `## 路线概述\n\n这是一条**一日文化体验线**，模板可套用到江南多座水乡古镇。\n\n- 适合第一次走水乡的人\n- 不赶场，步行量中等\n- 预算友好，城际交通另计\n\n> 建议雨天备伞，石板路较滑。`,
    dining_md: `## 饮食推荐\n\n### 午餐\n- **老街面馆**：本地面 + 时令小菜，人均 40-60 元\n- **河鲜小馆**：清蒸鱼、油爆虾（按季节）\n\n### 茶歇\n- 桂花糕 / 定胜糕\n- 现磨豆浆或青团（视时令）\n\n| 时段 | 建议 | 人均 |\n| --- | --- | --- |\n| 午餐 | 面馆 + 小菜 | ¥40-60 |\n| 下午 | 糕点茶歇 | ¥15-30 |`,
    stay_md: `## 住宿建议\n\n- **当日往返**：最省，适合周边城市出发\n- **古镇客栈**：河景房优先，注意隔音\n- **近郊民宿**：适合想安静过夜的人\n\n> 节假日提前 1-2 周预订。`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 餐饮 | ¥55-90 |\n| 手作体验（可选） | ¥40-80 |\n| 门票/船票（如有） | ¥0-60 |\n| **合计（不含城际）** | **约 ¥100-180 / 人** |`,
    image: "../../assets/landing/dest-culture.jpg",
    popularity: 96,
    rating: 4.8,
    likes: 1280,
    ai_summary:
      "一日文化体验线，适合第一次走水乡。核心三站：水巷—老街—手作，预算友好，不赶场。",
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
    hot_tags: ["梯田", "周末", "山径"],
    days: 1,
    day_range: "1-2",
    route_type: "自然观光",
    budget_level: "舒适型",
    route_details: "西南梯田与山乡聚落：上午观景，下午村落，周末自然观光友好。",
    body_md: `## 路线概述\n\n自然观光向的**一日慢行**。观景与村落对半开，适合想拍风景又不想高强度徒步的人。\n\n- 海拔与温差注意加衣\n- 观景台人流高峰：10:00-11:30`,
    dining_md: `## 饮食推荐\n\n- **农家土菜**：时令蔬菜、腊味（按地区）\n- **竹筒饭 / 酸汤**（西南常见）\n\n人均约 **50-90 元**。`,
    stay_md: `## 住宿建议\n\n- 山景民宿（舒适型首选）\n- 村内客栈（更安静）\n\n当日可往返；过夜建议住半山腰观景带。`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 餐饮 | ¥50-90 |\n| 交通接驳 | ¥30-80 |\n| **合计** | **约 ¥220-380 / 人** |`,
    image: "../../assets/landing/dest-nature.jpg",
    popularity: 88,
    rating: 4.7,
    likes: 960,
    ai_summary: "自然观光一日慢行。观景与村落对半开，适合周末出片，强度不高。",
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
    hot_tags: ["亲子", "周末", "慢住"],
    days: 2,
    day_range: "1-2",
    route_type: "亲子休闲",
    budget_level: "经济型",
    route_details: "两日一夜亲子自然线：河谷步道、乡野夜宿与轻量研学。",
    body_md: `## 路线概述\n\n专为**亲子短途过夜**设计：白天探索、晚上住乡野，研学强度低。\n\n适合京津冀等城市近郊 1.5-3 小时车程范围。`,
    dining_md: `## 饮食推荐\n\n- 农家宴：炖菜、烙饼、时令蔬菜\n- 儿童友好：少辣、可分餐\n\n人均约 **60-100 元**（含晚餐）。`,
    stay_md: `## 住宿建议\n\n- **家庭房 / 亲子房**优先\n- 确认有热水与取暖（秋冬）\n- 院子可活动的民宿更合适`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 住宿（一晚） | ¥180-280 / 间起 |\n| 餐饮两日 | ¥120-180 / 人 |\n| **合计** | **约 ¥320-480 / 人** |`,
    image: "../../assets/landing/dest-family.jpg",
    popularity: 92,
    rating: 4.6,
    likes: 1105,
    ai_summary: "亲子友好两日线。白天探索、晚上住乡野，适合带娃第一次短途过夜。",
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
    hot_tags: ["徽州", "慢住", "古镇", "山径"],
    days: 2,
    day_range: "1-2",
    route_type: "乡村旅游",
    budget_level: "舒适型",
    route_details: "徽州及同类山地古村：石板巷、民居与近村山径慢住。",
    body_md: `## 路线概述\n\n高评分**乡村慢住**模板。第一天沉浸村落，第二天山径轻行。\n\n适合想「住下来」而不是赶景点清单的人。`,
    dining_md: `## 饮食推荐\n\n- 臭鳜鱼、毛豆腐（按口味选择）\n- 山货小炒、笋干汤\n\n建议人均 **80-130 元**。`,
    stay_md: `## 住宿建议\n\n- 村内精品民宿（白墙马头墙景观）\n- 避开主街喧闹区的巷内房源更安静`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 住宿 | ¥260-450 / 晚 |\n| 餐饮 | ¥80-130 / 人/天 |\n| **合计** | **约 ¥260-420 / 人** |`,
    image: "../../assets/landing/slide-mountain.jpg",
    popularity: 85,
    rating: 4.9,
    likes: 870,
    ai_summary: "高评分乡村慢住。第一天沉浸村落，第二天山径轻行。",
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
    hot_tags: ["丹霞", "周末", "山径"],
    days: 3,
    day_range: "3-5",
    route_type: "自然观光",
    budget_level: "舒适型",
    route_details: "三日自然观光：丹霞观景 + 周边乡村夜宿，强调补给与防晒。",
    body_md: `## 路线概述\n\n**三日结构**：适应 → 主景 → 收尾。\n\n- 紫外线强，务必防晒\n- 昼夜温差大，带薄羽绒或抓绒`,
    dining_md: `## 饮食推荐\n\n- 拉面、炒拨拉、手抓羊肉（按地区）\n- 多补水，少吃过于油腻方便赶路`,
    stay_md: `## 住宿建议\n\n- 景区外乡村客栈（性价比）\n- 县城酒店（设施更稳）`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 住宿两晚 | ¥360-600 |\n| 餐饮三天 | ¥180-280 |\n| **合计** | **约 ¥680-980 / 人** |`,
    image: "../../assets/landing/slide-terrace.jpg",
    popularity: 90,
    rating: 4.7,
    likes: 1420,
    ai_summary: "三日自然线。第一天适应、第二天主景、第三天收尾。",
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
    hot_tags: ["美食", "非遗", "周末"],
    days: 2,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "豪华型",
    route_details: "岭南墟市与宗祠文化两日线，文化体验与美食并行。",
    body_md: `## 路线概述\n\n偏享受的**文化 + 美食**线。墟市与宗祠为主，住宿升级。`,
    dining_md: `## 饮食推荐\n\n- 早茶：虾饺、凤爪、肠粉\n- 糖水、双皮奶\n- 地道粤菜晚餐\n\n人均餐饮预算偏高：**120-200 元/天**。`,
    stay_md: `## 住宿建议\n\n- 设计型民宿或精品酒店\n- 靠近旧城步行圈，方便夜游`,
    cost_md: `## 费用估算\n\n| 项目 | 参考 |\n| --- | --- |\n| 住宿 | ¥500-900 / 晚 |\n| 餐饮 | ¥120-200 / 人/天 |\n| **合计** | **约 ¥900-1400 / 人** |`,
    image: "../../assets/landing/slide-jiangnan.jpg",
    popularity: 78,
    rating: 4.5,
    likes: 640,
    ai_summary: "偏享受的文化美食线。适合想吃得好住得好的两日假期。",
    daily_schedule: [
      { day: 1, time: "10:00-17:00", title: "墟市与宗祠", desc: "市井街区与宗祠参观。" },
      { day: 1, time: "晚上", title: "夜市与住宿", desc: "夜市街巷与精品民宿。" },
      { day: 2, time: "09:00-13:00", title: "手作与返程", desc: "短时非遗体验后离开。" },
    ],
  },
  {
    id: "northeast-forest",
    keyword: "东北林乡秋色两日",
    region: "东北 · 林乡秋色型",
    region_tag: "东北林乡",
    hot_tags: ["周末", "慢住", "山径"],
    days: 2,
    day_range: "1-2",
    route_type: "自然观光",
    budget_level: "舒适型",
    route_details: "林区步道与乡野夜宿，秋季彩叶季体验最佳。",
    body_md: `## 路线概述\n\n面向东北林区与林下乡村的**两日自然线**。\n\n- 秋季 9 月下旬-10 月中为彩叶窗口\n- 防滑鞋必备`,
    dining_md: `## 饮食推荐\n\n- 锅包肉、杀猪菜、黏豆包（按季节）\n- 山野菜、蘑菇炖（注意正季来源）`,
    stay_md: `## 住宿建议\n\n- 林场改造民宿\n- 乡镇商务酒店（设施更稳）`,
    cost_md: `## 费用估算\n\n合计约 **¥380-620 / 人**（含一晚）。`,
    image: "../../assets/landing/slide-mountain.jpg",
    popularity: 74,
    rating: 4.4,
    likes: 520,
    ai_summary: "林乡秋色两日。步道 + 乡野夜宿，适合想看东北自然又不想高强度徒步的人。",
    daily_schedule: [
      { day: 1, time: "10:00-16:00", title: "林区步道", desc: "沿木栈道与缓坡步道观景。" },
      { day: 1, time: "晚上", title: "乡镇夜宿", desc: "热餐 + 休息。" },
      { day: 2, time: "09:00-13:00", title: "林缘村落", desc: "短访村落与返程。" },
    ],
  },
  {
    id: "bashu-town",
    keyword: "巴蜀古镇慢食两日",
    region: "西南 · 巴蜀古镇型",
    region_tag: "巴蜀古镇",
    hot_tags: ["美食", "古镇", "周末", "慢住"],
    days: 2,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "经济型",
    route_details: "巴蜀古镇街巷 + 火锅/小吃，文化与美食并重。",
    body_md: `## 路线概述\n\n以**古镇街巷 + 慢食**为核心，适合喜欢烟火气的旅行者。`,
    dining_md: `## 饮食推荐\n\n- 火锅 / 串串（按辣度调整）\n- 担担面、抄手、冰粉\n\n人均 **70-120 元/天**。`,
    stay_md: `## 住宿建议\n\n- 古镇内客栈（有氛围）\n- 镇外连锁酒店（睡眠质量）`,
    cost_md: `## 费用估算\n\n合计约 **¥280-450 / 人**。`,
    image: "../../assets/landing/dest-culture.jpg",
    popularity: 83,
    rating: 4.5,
    likes: 790,
    ai_summary: "烟火气古镇两日。街巷漫步 + 慢食，适合想轻松玩吃的人。",
    daily_schedule: [
      { day: 1, time: "11:00-17:00", title: "古镇街巷", desc: "主街与背巷对照漫步。" },
      { day: 1, time: "晚上", title: "慢食夜", desc: "火锅或小吃集中区域。" },
      { day: 2, time: "09:00-12:00", title: "江边/茶馆", desc: "一杯茶收尾后返程。" },
    ],
  },
  {
    id: "jiangnan-night",
    keyword: "水乡夜色摄影半日+",
    region: "华东 · 江南水乡型",
    region_tag: "江南水乡",
    hot_tags: ["水乡", "周末"],
    days: 1,
    day_range: "1-2",
    route_type: "文化体验",
    budget_level: "舒适型",
    route_details: "偏傍晚至夜景的水乡摄影向行程，适合进阶访客。",
    body_md: `## 路线概述\n\n把重点放在**黄金时段与夜景**，白天可轻装补睡或茶馆发呆。`,
    dining_md: `## 饮食推荐\n\n- 傍晚简餐：面/粉\n- 夜游后甜品：糖藕、酒酿圆子`,
    stay_md: `## 住宿建议\n\n强烈建议**过夜**，方便拍完夜景再回房。选河景房注意蚊虫。`,
    cost_md: `## 费用估算\n\n合计约 **¥260-420 / 人**（含一晚）。`,
    image: "../../assets/landing/slide-jiangnan.jpg",
    popularity: 71,
    rating: 4.6,
    likes: 430,
    ai_summary: "摄影向水乡线，重点在黄昏与夜景。建议过夜。",
    daily_schedule: [
      { day: 1, time: "15:00-17:30", title: "预踩点", desc: "找机位、看光线。" },
      { day: 1, time: "17:30-19:00", title: "黄金时段", desc: "河道与古桥连拍。" },
      { day: 1, time: "19:00-21:00", title: "夜景", desc: "灯带与倒影，注意安全。" },
    ],
  },
  {
    id: "terrace-family",
    keyword: "梯田亲子轻徒步两日",
    region: "西南 · 梯田山乡型",
    region_tag: "西南梯田",
    hot_tags: ["亲子", "梯田", "慢住"],
    days: 2,
    day_range: "1-2",
    route_type: "亲子休闲",
    budget_level: "舒适型",
    route_details: "降低徒步强度的梯田亲子线，观景为主、轻度步行。",
    body_md: `## 路线概述\n\n把成人线的强度砍半，保留**观景与村落互动**，适合 6 岁以上儿童。`,
    dining_md: `## 饮食推荐\n\n- 少辣、可分餐\n- 备零食与电解质饮料`,
    stay_md: `## 住宿建议\n\n- 亲子房 + 有院子\n- 靠近观景台 10 分钟车程内`,
    cost_md: `## 费用估算\n\n合计约 **¥450-720 / 人**。`,
    image: "../../assets/landing/dest-nature.jpg",
    popularity: 80,
    rating: 4.5,
    likes: 680,
    ai_summary: "亲子友好的梯田两日。强度低、观景多，适合带娃看山看田。",
    daily_schedule: [
      { day: 1, time: "11:00-16:00", title: "观景台短走", desc: "固定观景平台，少走野路。" },
      { day: 1, time: "晚上", title: "民宿夜", desc: "休息，可做简单手工。" },
      { day: 2, time: "09:00-12:00", title: "村落互动", desc: "短访后返程。" },
    ],
  },
  {
    id: "huizhou-photo",
    keyword: "徽州清晨薄雾半日线",
    region: "华东 · 徽州山地型",
    region_tag: "徽州山地",
    hot_tags: ["徽州", "周末"],
    days: 1,
    day_range: "1-2",
    route_type: "自然观光",
    budget_level: "经济型",
    route_details: "清晨薄雾与白墙马头墙，摄影向半日+午餐。",
    body_md: `## 路线概述\n\n**早起线**：5:30-6:30 出门抢薄雾，中午前结束主拍摄。`,
    dining_md: `## 饮食推荐\n\n- 早点自备\n- 中午村口面馆即可`,
    stay_md: `## 住宿建议\n\n前一晚住村内，才能赶上清晨。`,
    cost_md: `## 费用估算\n\n合计约 **¥150-260 / 人**（不含前一晚住宿则更低）。`,
    image: "../../assets/landing/slide-mountain.jpg",
    popularity: 69,
    rating: 4.7,
    likes: 390,
    ai_summary: "早起摄影线。薄雾 + 马头墙，适合有一定摄影基础的人。",
    daily_schedule: [
      { day: 1, time: "05:30-08:30", title: "薄雾时段", desc: "村口与高处机位。" },
      { day: 1, time: "08:30-11:00", title: "巷弄补拍", desc: "细节与人文（注意礼貌）。" },
      { day: 1, time: "11:00-12:30", title: "午餐返程", desc: "面馆后离开。" },
    ],
  },
  {
    id: "lingnan-family",
    keyword: "岭南宗祠亲子半日+",
    region: "华南 · 岭南墟市型",
    region_tag: "岭南墟市",
    hot_tags: ["亲子", "非遗", "美食"],
    days: 1,
    day_range: "1-2",
    route_type: "亲子休闲",
    budget_level: "经济型",
    route_details: "宗祠文化轻讲解 + 糖水点心，亲子友好半日延伸。",
    body_md: `## 路线概述\n\n用**故事化讲解**代替枯燥导览，配合糖水奖励机制，孩子更易接受。`,
    dining_md: `## 饮食推荐\n\n- 糖水、双皮奶\n- 简餐：肠粉、云吞面`,
    stay_md: `## 住宿建议\n\n半日线，通常当日往返。`,
    cost_md: `## 费用估算\n\n合计约 **¥120-200 / 人**。`,
    image: "../../assets/landing/dest-family.jpg",
    popularity: 76,
    rating: 4.3,
    likes: 510,
    ai_summary: "亲子文化半日。宗祠故事 + 糖水，轻松不赶。",
    daily_schedule: [
      { day: 1, time: "10:00-12:00", title: "宗祠参观", desc: "轻讲解，控制在 90 分钟内。" },
      { day: 1, time: "12:00-13:30", title: "糖水午餐", desc: "附近老字号。" },
      { day: 1, time: "13:30-15:30", title: "墟市闲逛", desc: "买手信后返程。" },
    ],
  },
];

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
  const rating = (r.rating || 0) * 10;
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
      const reg = !region_tag || r.region_tag === region_tag;
      const hot =
        !hot_tag ||
        (Array.isArray(r.hot_tags) && r.hot_tags.includes(hot_tag)) ||
        (r.keyword || "").includes(hot_tag);
      return d && t && b && reg && hot;
    });
    if (!list.length) {
      // 放宽：去掉风格限制，保留天数或主题或标签
      list = window.XLY_ROUTES.filter((r) => {
        const d = !day_range || r.day_range === day_range;
        const t = !route_type || r.route_type === route_type;
        const reg = !region_tag || r.region_tag === region_tag;
        const hot =
          !hot_tag || (Array.isArray(r.hot_tags) && r.hot_tags.includes(hot_tag));
        return (d || t) && (reg || !region_tag) && (hot || !hot_tag);
      });
    }
    if (!list.length) list = window.XLY_ROUTES.slice();
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
      const bag = [
        r.keyword,
        r.region,
        r.region_tag,
        r.route_type,
        ...(r.hot_tags || []),
        r.route_details,
      ]
        .join(" ")
        .toLowerCase();
      return bag.includes(s);
    }).sort((a, b) => rankScore(b) - rankScore(a));
  },
};
