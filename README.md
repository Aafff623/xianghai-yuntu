# 乡海云途 · coding-dev

AI 定制化海洋与乡村旅游规划平台。前后端分离重建，技术方向来自 backup 资料（见 [`docs/knowledge/reference-from-backup.md`](docs/knowledge/reference-from-backup.md)）。

> Agent 入口 [`AGENTS.md`](AGENTS.md) · 领域事实 [`CONTEXT.md`](CONTEXT.md) · **MVP 规格 [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md)**

<!-- Phase B 配图占位：终稿图放入 assets/readme/，功能就绪后再替换 -->

![Banner 占位 — 待替换为 assets/readme/banner.png](assets/banners/qingdao-sunset-banner.jpg)

## 一句话

聚焦山东沿海 7 市「海洋 + 乡村」场景，用 **Web 平台** 提供路线智能推荐、详情展示与用户反馈；MVP 对齐已跑通的 Flask + SQLite 原型，逐步接入文心一言等 AI 能力。

## 核心功能

| 模块 | MVP（Wave 1） | 后续（Wave 2+） |
|------|---------------|-----------------|
| 用户 | 注册 / 登录 / 登出（Bcrypt） | 会员、积分 |
| 推荐 | 按天数 · 类型 · 预算规则匹配 | 文心一言对话推荐、NLP 语义搜索 |
| 路线 | 详情、每日行程 JSON、餐饮/住宿/费用 | 关键词 URL、JSON-LD |
| 反馈 | 文本提交入库 | 情感分析 API |
| 搜索 | 路线关键词搜索 | 向量检索、用户搜索 |

完整验收清单 → [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md)

## 演示 / Showcase

<!-- Phase C 占位：功能就绪后替换为 assets/readme/showcase-*.png -->

**推荐演示路径：**

1. 注册 → 登录  
2. 首页选天数 / 类型 / 预算 → 智能推荐结果  
3. 进入路线详情（每日行程）  
4. 提交反馈  

| 槽位 | 文件（待生成） | 状态 |
|------|----------------|------|
| 首页 | `assets/readme/showcase-home.png` | 占位 |
| 智能推荐 | `assets/readme/showcase-smart-search.png` | 占位 |
| 路线详情 | `assets/readme/showcase-route-detail.png` | 占位 |
| 登录注册 | `assets/readme/showcase-auth.png` | 占位 |

## 架构一览

<!-- 占位：assets/readme/architecture.png -->

```text
frontend/  ── REST JSON ──▶  backend/ (Flask API)
                              │
                              ▼
                         SQLite + SQLAlchemy
```

| 层 | MVP 选型 |
|----|----------|
| 后端 | Python 3 · Flask · SQLAlchemy · Bcrypt |
| 数据库 | SQLite |
| 前端 | HTML / CSS / JavaScript（独立目录） |
| AI | Wave 2：百度文心一言 API |

## 目录结构

```text
coding-dev/
├── frontend/          # 前端 UI
├── backend/           # Flask REST API
├── assets/            # 全部图片（含 readme/ 配图）
├── docs/              # Agent 资产 + source/ 接手文档
├── AGENTS.md · CONTEXT.md · README.md
```

## 快速开始

**当前阶段：** project-init 完成；前端未开工；Phase B/C 配图与 Showcase **仅占位**。

1. 读 [`docs/knowledge/mvp-product-spec.md`](docs/knowledge/mvp-product-spec.md)  
2. 读 [`docs/source/project-books/`](docs/source/project-books/) 最新项目书  
3. 开 PRD：`docs/output/reports/mvp-platform/prd.md`  
4. 初始化 `backend/` → `frontend/`

旧 Flask 单体见 [`../coding-legacy/`](../coding-legacy/)，**只参考业务，不迁移代码**。

## 文档索引

| 文档 | 说明 |
|------|------|
| [MVP 产品规格](docs/knowledge/mvp-product-spec.md) | 功能分层、字段、页面、缺口核对 |
| [backup 参考说明](docs/knowledge/reference-from-backup.md) | 资料怎么用 |
| [ADR-0002 技术栈](docs/adr/0002-tech-stack-from-backup.md) | 栈裁定 |
| [docs 索引](docs/README.md) | 完整资产目录 |

## 路线图

- [x] Phase A：project-init + backup 提炼
- [ ] Phase B：README 配图（**占位中，待前端/UI 定稿**）
- [ ] Phase C：Showcase 截图（**待功能跑通**）
- [ ] Wave 1 MVP：API + 前端 + 种子路线
- [ ] Wave 2：文心一言 + SEO
- [ ] Wave 3：特产电商 / AR / 政府端（竞赛远景，非近期）
