# CONTEXT.md

## 项目定位

**乡旅e模式**（对外亦称乡海云途）— 轻量化乡村旅游路线规划 Web 系统。

课程任务书与竞赛材料为需求来源；从 roommate 交接的旧 Flask 原型（见 `../coding-legacy/`）**按 backup 技术方向重建**：前后端分离，统一数据模型。

**参考来源优先级**：创新创业实践项目任务书 → `docs/source/` 项目书与企划 → `backup/` / `coding-legacy/` 实现快照。

**地域范围（已裁定）**：**全国**乡村旅游 / 短途 / 亲子 / 自然 / 文化场景。种子数据用**区域类型模板**（江南水乡、西南梯田、华北河谷、徽州山地等），**不**绑定单一城市景点库。历史「山东沿海七市」仅为旧竞赛叙事，不再作为产品数据边界。

核心能力（Wave 1，见 `docs/output/reports/mvp-platform/prd.md`）：

- 用户注册 / 登录 / 登出
- 按计划天数、兴趣主题、规划风格筛选路线
- 路线结果与详情（概述、每日安排、餐饮/住宿/参考成本）
- 关键词搜索（仅路线）
- 用户反馈

## 领域术语表

| 术语 | 英文 | 定义 |
|---|---|---|
| 乡旅e模式 | Rural Travel e-Mode | 任务书项目名；产品对外主品牌 |
| 乡海云途 | Xianghai Yuntu | 历史/竞赛别名，可与乡旅e模式互指 |
| 路线 | Travel Route | 一条可检索、可推荐的旅游行程实体 |
| 智能推荐 | Smart Recommendation | 按天数 / 兴趣主题 / 规划风格筛选并返回路线 |
| 兴趣主题 | Route Type / Theme | 文化体验 · 自然观光 · 亲子休闲 · 乡村旅游 等 |
| 规划风格 | Budget Level | 经济型 / 舒适型 / 豪华型（任务书称规划风格） |
| 每日行程 | Daily Schedule | 按天组织的活动安排（结构化 JSON 或等价模型） |
| 区域类型 | Region Template | 全国多区域示意模板，非单城 POI 库 |
| 用户反馈 | Feedback | 用户提交的意见与建议 |
| 接手原始文档 | Source Materials | `docs/source/` 下的项目书、PPT、手册等，非运行时真相源 |

## 关键约束

1. **按 backup 方向重建**：不复制 legacy 代码；技术栈与业务模型以 `docs/knowledge/reference-from-backup.md` 与 ADR-0002 为准。
2. **前后端分离**：`frontend/` 与 `backend/` 独立开发与部署；API 契约以 ADR / OpenAPI 为准。
3. **文档与图片分离**：Agent 流程文档在 `docs/`；**所有图片**在 `assets/`（见 ADR-0001）。
4. **单一事实源**：领域术语与硬约束以本文件及分端 CONTEXT 为准；`README.md` 只做人读摘要。
5. **PRD 门禁**：功能开发前须有 `docs/output/reports/{theme}/prd.md` 且 `status: approved`（纯文档 / project-init 除外）。
6. **密钥不入库**：数据库密码、JWT Secret、第三方 API Key 等仅环境变量或本地配置。
7. **品牌与地域**：UI 统一「乡旅e模式」；数据与文案按**全国**场景，禁止再写死单一城市库。
8. **功能演示入口**：营销页 `frontend/landing/`；功能页 `frontend/app/`。

## 技术栈（ADR-0002，来自 backup）

| 层 | 选型 | 路径 / 说明 |
|---|---|---|
| 后端 | **Python 3 + Flask** REST API | `backend/` |
| ORM | Flask-SQLAlchemy | 与 legacy 模型语义一致 |
| 鉴权 | Flask-Bcrypt | 密码哈希；session 或 JWT 待 backend CONTEXT 细化 |
| 数据库 | **SQLite**（开发） | 项目书 + legacy；生产换库另开 ADR |
| 前端 | **HTML / CSS / JavaScript** | `frontend/`，通过 JSON API 通信 |
| AI（Wave 2） | 百度文心一言 API | Web 组企划；MVP 可先 mock |

**竞赛文档远景**（Spark / MongoDB / TensorFlow Serving 等）**不是** MVP 范围。

## 文件结构（仓库级）

```
coding-dev/
├── AGENTS.md
├── CLAUDE.md
├── CONTEXT.md
├── CONTEXT-MAP.md
├── README.md
├── assets/                 # 全部图片（含 README 配图）
├── docs/                   # Agent 资产 + 接手原始文档
├── frontend/               # 前端源码
└── backend/                # 后端源码
```

## 参考材料索引

| 材料 | 路径 |
|---|---|
| **MVP 规格** | `docs/knowledge/mvp-product-spec.md` |
| **backup 参考** | `docs/knowledge/reference-from-backup.md` |
| 最新项目书 | `docs/source/project-books/乡旅与海e模式项目书-25国创-最新.docx` |
| Web 组企划（AI/SEO） | `docs/source/process/Web组目标企划.docx` |
| 路演 PPT | `docs/source/presentations/` |
| 说明书 / 手册 | `docs/source/manuals/` |
| 主 Logo | `assets/brand/logo-primary.jpg` |
| 旧代码参考 | `../coding-legacy/code/` |
| backup 原始树 | `../backup/` |
