<div align="center">

# 乡海云途 · 海洋乡村旅游智能规划 Web 平台

*"东临碣石，以观沧海。"* —— 曹操《观沧海》

🌊 山东沿海七市：青岛金滩、即墨古城、威海刘公岛、日照渔港、灵山赶海……  
面向城市中产家庭与亲子研学用户，用 **Web 平台** 讲清**路线故事**与**可执行的每日行程**——先读懂海岸与乡村，再出发山东。

<p>
  <strong>中文</strong>
</p>

</div>

<p align="center">
  <img src="assets/banners/qingdao-sunset-banner.jpg" alt="乡海云途 Banner — 青岛海岸" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Wave_1-MVP_In_Progress-yellow?style=for-the-badge" alt="Wave 1">
  <img src="https://img.shields.io/badge/Stack-Flask_%7C_HTML_%7C_SQLite-blue?style=for-the-badge" alt="Stack">
  <img src="https://img.shields.io/badge/Platform-Web-0077BE?style=for-the-badge" alt="Platform">
  <img src="https://img.shields.io/badge/UI_Prototype-WIP-orange?style=for-the-badge" alt="UI Prototype">
  <img src="https://img.shields.io/badge/Docs-project--init_Done-brightgreen?style=for-the-badge" alt="Docs">
  <a href="https://github.com/Aafff623/xianghai-yuntu/stargazers"><img src="https://img.shields.io/github/stars/Aafff623/xianghai-yuntu?style=for-the-badge" alt="GitHub stars"></a>
</p>

<p align="center">
  <a href="#为什么需要本系统">🌊 为什么</a> ·
  <a href="#功能">✨ 功能</a> ·
  <a href="#演示">📱 演示</a> ·
  <a href="#快速开始">🚀 快速开始</a> ·
  <a href="#架构">🏗️ 架构</a> ·
  <a href="#路线图">🗺️ 路线图</a> ·
  <a href="#文档">📚 文档</a> ·
  <a href="#license">License</a>
</p>

---

## 为什么需要本系统

规划山东「海洋 + 乡村」行程时，用户通常会遇到以下信息与决策障碍：

- 景点、渔家体验与交通信息分散在多个平台，难以一次拼成完整路线；
- 通用 OTA 更关注票务与酒店，对**渔家文化、亲子研学、预算分级**支持不足；
- 用户有 AI 定制意愿（调研：非常 + 比较愿意 **80%**），但缺少可解释、可落地的规则推荐入口；
- 竞赛与展示场景需要**统一品牌**与**可演示的 Web 闭环**，而非散落的多份旧原型。

乡海云途因此将 Wave 1 主线收敛为：**注册登录、智能路线推荐、详情展示、关键词搜索与用户反馈**。

| 能力 | 产品职责 |
|---|---|
| 智能推荐 | 按行程天数、路线类型、预算级别规则匹配路线 |
| 路线详情 | 概述、每日行程时间轴、餐饮 / 住宿 / 费用估算 |
| 关键词搜索 | 路线名称与标签模糊检索（重建版补全顶栏入口） |
| 用户反馈 | 文本意见入库，Flash 提示提交结果 |
| 统一导航 | 登录态、返回首页、全局消息提示 |
| 数据与地域 | MVP 种子路线对齐**山东沿海 / 青岛**主题（非旧版平遥样本） |

---

## 功能

<p align="center">
  <img src="assets/readme/features.png" alt="乡海云途 核心功能模块" width="80%">
</p>

> **Phase B 占位：** 上图为 `assets/readme/features.png` 契约路径；终稿信息图生成说明见 [`assets/readme/README.md`](assets/readme/README.md)。

| 功能 | 说明 |
|---|---|
| **注册 / 登录 / 登出** | Bcrypt 密码哈希；顶栏显示用户名与注销 |
| **首页智能推荐表单** | 三下拉：行程天数 · 路线类型 · 预算级别 → 提交智能推荐 |
| **智能推荐结果** | 路线卡片列表、「查看详细行程」、同天数相关推荐 ≤3 |
| **路线详情** | 元信息胶囊、概述、`daily_schedule` 每日时间轴、饮食 / 住宿 / 费用 |
| **关键词搜索** | 顶栏搜索框 → 结果列表（**不含**旧原型「搜用户」） |
| **用户反馈** | 多行文本提交；成功 / 失败 Flash |
| **响应式 Web** | 桌面优先 + 移动浏览器自适应（海洋蓝主色 `#0077BE`） |

> **业务边界（Wave 1）：** 不覆盖真实支付、特产电商、门票库存、政府端、AR/VR、文心一言对话（Wave 2）、App 小程序。产品主线保持为 **Web 路线推荐与展示**。

完整验收清单 → [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md)

---

## 演示

### 推荐演示路径

```
注册 → 登录 → 首页三下拉智能推荐 → 结果列表 → 路线详情（每日行程）
  → 顶栏关键词搜索 → 提交反馈（主链路：推荐 / 详情需登录）
```

UI 原型出图 brief（Grok CLI 用）→ [`docs/output/reports/ui-prototype/ui-prototype-brief.md`](docs/output/reports/ui-prototype/ui-prototype-brief.md)

### Showcase

Web 界面高保真原型与真机截图将在 Grok 出图、前端实现与视觉验收完成后补充 📸，本节暂时保留展示位。

| 槽位 | 文件 | 状态 |
|---|---|---|
| 首页 | `assets/readme/showcase-home.png` | 原型出图中 |
| 智能推荐 | `assets/readme/showcase-smart-search.png` | 原型出图中 |
| 路线详情 | `assets/readme/showcase-route-detail.png` | 原型出图中 |
| 登录 / 注册 | `assets/readme/showcase-auth.png` | 原型出图中 |

<!--
后续建议使用三列相册：

1. 首页 / 智能推荐表单
2. 智能推荐结果 / 路线卡片
3. 路线详情 / 反馈
-->

<details>
<summary>查看 UI 页面清单（7 页 + 全局壳）</summary>

| # | 页面 | 路由 |
|---|---|---|
| P1 | 首页 | `/` |
| P2 | 登录 | `/login` |
| P3 | 注册 | `/register` |
| P4 | 智能推荐结果 | `/smart-search` |
| P5 | 关键词搜索 | `/search` |
| P6 | 路线详情 | `/routes/:id` |
| P7 | 反馈 | `/feedback` |

全局壳：顶栏（Logo · 用户态 · 搜索框）、Flash 消息、页脚、「返回首页」/「返回推荐」。

</details>

### 首批路线（Seed / Mock 参考）

| 关键词 | 路线示例 | 天数 | 类型 |
|---|---|---|---|
| 即墨 | 即墨古城非遗漫游 | 1-2 | 文化探索 |
| 金沙滩 | 金沙滩海滨休闲 | 1-2 | 海洋风光 |
| 灵山岛 | 灵山岛赶海体验 | 1-2 | 亲子休闲 |

地域叙事主参考：山东沿海 **7 市**（青岛、烟台、威海、日照、东营、潍坊、滨州）。详见项目书 `docs/source/project-books/`。

---

## 快速开始

### 当前阶段（文档 + 资产就绪）

**`frontend/` 与 `backend/` 尚未初始化代码。** 接手后建议按下列顺序阅读，再开 PRD 与脚手架。

1. 读本 README — 定位、边界、演示路径  
2. [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md) — Wave 1 验收真相源  
3. [`docs/output/reports/ui-prototype/ui-prototype-brief.md`](docs/output/reports/ui-prototype/ui-prototype-brief.md) — UI 原型与 Grok 出图  
4. 开 PRD：`docs/output/reports/mvp-platform/prd.md`（待撰写）  
5. 初始化 `backend/` → `frontend/`

### 前置环境（全栈开发时）

| 组件 | 版本建议 | 备注 |
|---|---|---|
| Python | 3.10+ | Flask REST API |
| pip / venv | 近期版 | 后端依赖隔离 |
| SQLite | 3 | 开发库（随 Python / 系统） |
| 浏览器 | 近期版 | 前端静态页 + API 联调 |
| Node.js | 18+ | 可选；若前端引入构建工具链 |

### 后端（`backend/`，待初始化）

```bash
git clone https://github.com/Aafff623/xianghai-yuntu.git
cd xianghai-yuntu
# 待 backend/ 脚手架合并后补充：
# python -m venv .venv && .venv\Scripts\activate   # Windows
# pip install -r backend/requirements.txt
# flask run
```

技术栈裁定 → [`docs/adr/0002-tech-stack-from-backup.md`](docs/adr/0002-tech-stack-from-backup.md)

### 前端（`frontend/`，待初始化）

独立目录通过 REST JSON 调用 `backend/`；视觉与交互以 UI brief 与 `assets/brand/` 为准。

<details>
<summary>新成员阅读顺序</summary>

| 顺序 | 路径 | 目的 |
|---|---|---|
| 1 | `README.md` | 定位、跑起来、边界 |
| 2 | `CONTEXT.md` · `CONTEXT-MAP.md` | 术语与分端地图 |
| 3 | `AGENTS.md` · `CLAUDE.md` | 任务流与 Agent 纪律 |
| 4 | `docs/knowledge/mvp-product-spec.md` | MVP 验收与字段枚举 |
| 5 | `docs/output/reports/ui-prototype/ui-prototype-brief.md` | 7 页 UI 与 Grok prompt |
| 6 | `docs/adr/0002-tech-stack-from-backup.md` | 技术栈裁定 |
| 7 | `docs/contexts/*/CONTEXT.md` + 对应端源码 | 实施 |

</details>

---

## 架构

<p align="center">
  <img src="assets/readme/architecture.png" alt="系统架构图" width="80%">
</p>

- **`frontend/`**：HTML / CSS / JavaScript；7 个用户页 + 全局壳；REST 调用后端 API
- **`backend/`**：Flask REST API；SQLAlchemy 模型；Bcrypt 鉴权；SQLite 开发库
- **`assets/`**：品牌 Logo、Banner、README 配图、UI 原型图（ADR-0001：**图片不进 docs/**）
- **数据路径**：浏览器 → JSON API → SQLite；Wave 2 接入文心一言 API（Web 组企划）

### 技术栈

<p align="center">
  <img src="assets/readme/tech-stack.png" alt="技术栈分层图" width="80%">
</p>

| 层级 | 技术 | 路径 |
|---|---|---|
| 用户端 | HTML · CSS · JavaScript | `frontend/` |
| 后端 | Python 3 · Flask · SQLAlchemy · Bcrypt | `backend/` |
| 数据库 | SQLite（开发） | 后端配置 / 本地文件 |
| AI（Wave 2） | 百度文心一言 API | 独立 ADR / PRD |

### 用户主链路

<p align="center">
  <img src="assets/readme/workflow.png" alt="用户主链路流程图" width="80%">
</p>

**实现要点：**

- 智能推荐 / 搜索 / 路线详情 **需登录**；首页、注册、登录、反馈可匿名访问（反馈是否强制登录待 PRD）
- 路线卡展示 **天 / 类型 / 预算** 三标签；详情页渲染 `daily_schedule` JSON 时间轴
- 品牌统一 **乡海云途** + 海洋蓝主题；密钥与 API Key **不入库**

### 目录结构

<p align="center">
  <img src="assets/readme/structure.png" alt="仓库目录结构图" width="80%">
</p>

```text
xianghai-yuntu/
├── frontend/              # 用户端 Web UI
├── backend/               # Flask REST API
├── assets/                # 全部图片（brand · banners · readme · prototype）
├── docs/                  # Agent 资产 + source/ 接手文档
├── AGENTS.md · CONTEXT.md · README.md
```

---

## 路线图

| 阶段 | 状态 | 说明 |
|---|:---:|---|
| Phase A project-init + backup 提炼 | ✅ | docs 骨架、ADR、MVP 规格、assets 归类 |
| UI 原型调研 brief | ✅ | `ui-prototype-brief.md`（Grok 出图） |
| Phase B README 信息图 | 🔜 | `assets/readme/*.png`（见 `assets/readme/README.md`） |
| Phase C Showcase 截图 | 🔜 | 待前后端跑通 |
| Wave 1 MVP：API + 前端 + 种子路线 | 🔜 | 待 PRD approved |
| Wave 2：文心一言 + SEO | ⚪ | Web 组企划 |
| Wave 3：特产电商 / AR / 政府端 | ⚪ | 竞赛远景，非近期 |

---

## 文档

| 文档 | 说明 |
|---|---|
| [`CONTEXT.md`](CONTEXT.md) | 产品域事实、术语、约束 |
| [`CONTEXT-MAP.md`](CONTEXT-MAP.md) | 分端上下文地图 |
| [`AGENTS.md`](AGENTS.md) · [`CLAUDE.md`](CLAUDE.md) | Agent 入口与维护协议 |
| [`docs/README.md`](docs/README.md) | 文档资产索引 |
| [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md) | MVP 功能、字段、页面、API 规划 |
| [`docs/knowledge/reference-from-backup.md`](docs/knowledge/reference-from-backup.md) | 接手资料怎么用 |
| [`docs/adr/0001-assets-directory-for-images.md`](docs/adr/0001-assets-directory-for-images.md) | 图片放 `assets/` |
| [`docs/adr/0002-tech-stack-from-backup.md`](docs/adr/0002-tech-stack-from-backup.md) | 技术栈裁定 |
| [`docs/contexts/`](docs/contexts/) | frontend / backend 分端 CONTEXT |
| [`docs/output/reports/ui-prototype/ui-prototype-brief.md`](docs/output/reports/ui-prototype/ui-prototype-brief.md) | UI 原型出图 brief |
| [`assets/readme/README.md`](assets/readme/README.md) | README 配图文件名契约 |

任务流：GitHub Issues + `docs/output/handoff/`；接手原始文档见 `docs/source/`（项目书、PPT、企划）。

---

## 项目来源与说明

本项目基于 roommate 交接的乡旅与海 e 模式竞赛资料与多版 Flask 原型快照，在 **`xianghai-yuntu` 仓库从零前后端分离重建**。旧版单体代码与 `backup/` 原始压缩包**不在本仓库**，仅 `docs/source/` 与 `docs/knowledge/` 中的提炼文档作为接手参考。

重建版统一品牌为 **乡海云途**，地域聚焦 **山东沿海**，视觉采用 **海洋蓝** 主色；不代表任何旧原型中的错名、错校徽或山西平遥样本数据。

---

## License

见根目录 [`LICENSE`](LICENSE)（MIT）。
