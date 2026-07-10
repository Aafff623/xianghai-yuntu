# CONTEXT.md

## 项目定位

**乡海云途**（乡旅与海 e 模式）— AI 定制化乡村旅游规划平台。

从 roommate 交接的旧 Flask 原型（见 `../coding-legacy/`）**按 backup 资料裁定的技术方向重建**：前后端分离，统一品牌与数据模型。

**参考来源优先级**：`docs/source/` 项目书与企划 → `backup/` / `coding-legacy/` 实现快照。详见 [`docs/knowledge/reference-from-backup.md`](docs/knowledge/reference-from-backup.md)。

核心能力方向（来自项目书与旧版参考，**待 PRD 裁定**）：

- 用户注册 / 登录
- 旅游路线关键词搜索
- 智能路线推荐（天数、类型、预算等维度）
- 路线详情与每日行程展示
- 用户反馈

## 领域术语表

| 术语 | 英文 | 定义 |
|---|---|---|
| 乡海云途 | Xianghai Yuntu | 产品品牌名（对外统一使用，替代旧名「乡旅与山 e 模式」等） |
| 路线 | Travel Route | 一条可检索、可推荐的旅游行程实体 |
| 智能推荐 | Smart Recommendation | 按天数 / 路线类型 / 预算等条件筛选并返回路线 |
| 路线类型 | Route Type | 如文化探索、自然景观、美食之旅等分类维度 |
| 预算级别 | Budget Level | 经济型 / 舒适型 / 豪华型 |
| 每日行程 | Daily Schedule | 按天组织的活动安排（结构化 JSON 或等价模型） |
| 用户反馈 | Feedback | 登录用户提交的意见与建议 |
| 接手原始文档 | Source Materials | `docs/source/` 下的项目书、PPT、手册等，非运行时真相源 |

## 关键约束

1. **按 backup 方向重建**：不复制 legacy 代码；技术栈与业务模型以 `docs/knowledge/reference-from-backup.md` 与 ADR-0002 为准。
2. **前后端分离**：`frontend/` 与 `backend/` 独立开发与部署；API 契约以 ADR / OpenAPI 为准。
3. **文档与图片分离**：Agent 流程文档在 `docs/`；**所有图片**在 `assets/`（见 ADR-0001）。
4. **单一事实源**：领域术语与硬约束以本文件及分端 CONTEXT 为准；`README.md` 只做人读摘要。
5. **PRD 门禁**：功能开发前须有 `docs/output/reports/{theme}/prd.md` 且 `status: approved`（纯文档 / project-init 除外）。
6. **密钥不入库**：数据库密码、JWT Secret、第三方 API Key 等仅环境变量或本地配置。
7. **品牌统一**：UI 与文案逐步替换旧原型中的「乡旅与山 e 模式」「中北大学」等不一致内容。

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
