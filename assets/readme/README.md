# assets/readme/ — GitHub README 配图契约

本目录服务根目录 [`README.md`](../../README.md)。  
**原则：** 图片只放 `assets/`，不进 `docs/`（ADR-0001）。

---

## 1. 当前已落地（可渲染）

| 文件 | 类型 | 来源 | README 用途 |
|------|------|------|-------------|
| `banner.jpg` | 横幅 | 自 `banners/qingdao-sunset-banner.jpg` 复制 | 页首 |
| `showcase-landing.png` | 截图 | Playwright 1440×900 | Landing 相册 |
| `showcase-home.png` | 截图 | Playwright | App 首页 |
| `showcase-smart-search.png` | 截图 | Playwright | 智能推荐 |
| `showcase-route-detail.png` | 截图 | Playwright | 路线详情 |
| `showcase-auth.png` | 截图 | Playwright | 登录页 |
| `architecture.svg` | 架构图 | 脚本生成基线 | 架构节 |
| `workflow.svg` | 链路图 | 脚本生成基线 | 主链路节 |
| `features.svg` | 功能图 | 脚本生成基线 | 功能节 |

本地复现截图：

```bash
python -m http.server 8765
# 浏览器 / Playwright 打开 frontend/landing 与 frontend/app 各页截取
```

重生成 SVG 基线：

```bash
python assets/readme/_gen_diagrams.py
```

---

## 2. Playwright 截图（Showcase 相册）— 要素清单

给 GPT / 设计师 **不需要生成假界面** 时，优先使用真实 Playwright 截图。  
若要「高级海报化」二次处理，按下列槽位处理：

| 槽位 | 文件名 | 页面 URL（本地） | 画面应包含 | 建议构图 |
|------|--------|------------------|------------|----------|
| A | `showcase-landing.png` | `/frontend/landing/index.html` | 圆角导航、Hero 标题、统计卡、圆形轮播 | 整页视口，浅色海洋/纸色 |
| B | `showcase-home.png` | `/frontend/app/index.html`（已登录） | 三维筛选表单、热门标签、顶栏「返回首页」 | 表单居中偏上 |
| C | `showcase-smart-search.png` | 智能推荐结果页 | 路线卡片列表、价格/标签、主按钮 | 2–3 张卡入镜 |
| D | `showcase-route-detail.png` | `route-detail.html?id=…` | 标题、标签、Markdown 正文、超链接 | 文档感、可读正文 |
| E | `showcase-auth.png` | `login.html` | 登录表单、演示账号提示、分栏视觉 | 左右分栏完整 |

**统一视觉：** 海洋蓝 `#0a6eae` / 墨色 `#0a3553` / 砂纸底；中文字体清晰；无乱码水印。

---

## 3. 架构图 — 要素清单（给 GPT）

**输出文件：** `architecture.png`（建议 1920×1080 或 1600×900，扁平矢量感）

**必须画出的模块：**

1. **左侧 · frontend/**
   - Landing（营销落地页）
   - App（首页筛选 / 智能推荐 / 搜索 / 详情 / 反馈 / 登录 / 资料）
   - 技术标注：HTML · CSS · JS · localStorage 鉴权 · Markdown 渲染
2. **中部 · backend/（标注「规划 / planned」）**
   - Flask REST：`/auth` `/routes` `/search` `/recommend` `/feedback`
   - SQLAlchemy · Bcrypt
   - 规则匹配：天数 · 主题 · 风格
   - 虚线标注 Wave 2：文心一言 API
3. **右侧 · 数据层**
   - SQLite（规划）
   - 当前演示：`js/data.js` 全国区域种子 + localStorage
4. **底部脚注：** assets 统一媒体 · docs 规格 ADR · 密钥不入库
5. **箭头：** Browser → API → DB；并保留「当前演示直读种子」旁路箭头

**风格建议：** 深海蓝标题条 + 白卡片 + 细阴影；中文为主，可中英双语小字。

**Prompt 骨架（可直接喂 GPT 生图）：**

> 画一张专业 SaaS 系统架构信息图，三栏：frontend 静态乡村旅游 Web、planned Flask REST 后端、SQLite/本地种子数据。海洋蓝与白卡片，扁平现代，中文标注「乡旅e模式」，分辨率 16:9，无水印。

---

## 4. 链路图 — 要素清单（给 GPT）

**输出文件：** `workflow.png`（建议 1920×800 横向流程）

**主路径 6 步（从左到右）：**

| 步骤 | 标题 | 副文案 |
|------|------|--------|
| 01 | Landing | 营销认知 · 主题场景 / 演示 |
| 02 | 注册登录 | admin / 123456 · 演示账号 |
| 03 | 首页筛选 | 天数 · 主题 · 风格 |
| 04 | 智能推荐 | 排序结果卡片 · 需登录 |
| 05 | 路线详情 | Markdown 行程 · 餐饮住宿费用 |
| 06 | 反馈 | 意见提交 · 本地提示 |

**旁路（底部条）：** 顶栏关键词搜索 · 个人资料偏好 · 收藏（演示）· 返回 Landing

**风格建议：** 横向步骤卡 + 箭头；主色海洋蓝；底部浅底信息条。

**Prompt 骨架：**

> 横向用户旅程信息图，6 步卡片：Landing→登录→筛选→智能推荐→路线详情→反馈，底部旁路搜索与个人资料。中国乡村旅游 SaaS 风格，海洋蓝，扁平，16:9 宽幅。

---

## 5. 其它可选高级图

| 文件 | 要素 |
|------|------|
| `features.png` | 四宫格：智能推荐 / 路线详情 / 关键词搜索 / 账号与反馈 |
| `tech-stack.png` | 分层：Browser · Flask · SQLite · Wave2 AI |
| `structure.png` | 仓库树：frontend / backend / assets / docs |
| `banner.png` | 3:1 乡村自然风光 + 品牌词「乡旅e模式」 |

---

## 6. 替换流程

1. GPT 生成 PNG → 覆盖本目录同名文件（或新增 `.png` 后改 README 扩展名）  
2. 检查 GitHub 预览是否裂图（路径必须相对仓库根 `assets/readme/...`）  
3. 更新本文件状态表  

---

## 状态

| 项目 | 状态 |
|------|:----:|
| Playwright Showcase | ✅ 已截取 |
| SVG 架构 / 链路 / 功能基线 | ✅ 可显示 |
| GPT 高级 PNG | ⬜ 按上文规格生成后替换 |
