# 参考来源说明 — backup 资料怎么用

> **原则**：`backup/` 与 `docs/source/` 中的接手文档，是**产品方向与技术决策**的首要参考；`coding-legacy/` 是可运行的**实现快照**。  
> `coding-dev/` 在**不复制旧代码**的前提下，按 backup 裁定的栈与架构重建，并做前后端分离。

---

## 参考层级

| 优先级 | 来源 | 参考什么 | 不参考什么 |
|:---:|---|---|---|
| 1 | `docs/source/project-books/` 最新项目书 | 产品定位、功能范围、商业模式、页面设计 | 竞赛文档里的「远景架构」（Spark/MongoDB 等）直接当 MVP |
| 2 | `docs/source/process/Web组目标企划.docx` | Web 端分工、SEO、AI 接口、前后端职责 | 内部 deadline、人名分工 |
| 3 | `docs/source/process/APP组目标企划.docx` | App 方向（若后续做移动端） | 当前 coding-dev 暂不含 App |
| 4 | `../backup/try/` + `../coding-legacy/code/` | **已验证的技术栈**、数据模型、路由与页面清单 | 旧代码结构（单体 Jinja 模板） |
| 5 | `docs/source/manuals/` | 用户中心、操作说明 | — |
| 6 | `docs/source/presentations/` | 路演叙事、功能卖点 | — |

---

## 从 backup 提炼的技术方向（已裁定 MVP）

### 产品（项目书 + 旧版）

- **形态**：B/S **Web 平台**（项目书称 Web 平台 1.0）
- **核心功能**：注册登录、反馈、关键词搜索、**智能路线推荐**（天数 / 类型 / 预算）、路线详情（含每日行程 JSON）、餐饮 / 住宿 / 费用
- **品牌**：乡海云途 / 乡旅与海 e 模式（对外统一为「乡海云途」）
- **AI 叙事**：智能推荐、对话式规划、路线摘要生成（Web 组企划明确 **百度文心一言 API**）

### 技术栈 — MVP（与 legacy 代码一致）

| 层 | 选型 | 依据 |
|---|---|---|
| 后端语言 | **Python 3** | 项目书团队能力 + legacy `app.py` |
| Web 框架 | **Flask** | `backup/try/requirements.txt`、legacy 全量实现 |
| ORM | **Flask-SQLAlchemy** | legacy |
| 表单 / CSRF | **Flask-WTF + WTForms** | legacy（分离后 API 层可换 Pydantic，见 ADR-0002） |
| 密码 | **Flask-Bcrypt** | legacy |
| 数据库 | **SQLite**（开发） | 项目书 §3.3.2.2 + legacy `database.db` |
| 前端（重建） | **HTML / CSS / JavaScript** | 项目书团队分工 + Web 组企划；**独立 `frontend/` 目录**，通过 REST 调 backend |
| AI（规划） | **百度文心一言 API** | Web 组目标企划 |

### 技术栈 — 远景（项目书竞赛表述，**非 MVP**）

项目书 §3.3.3.5 提到的 TensorFlow Serving、Hugging Face、Spark、MongoDB、Elasticsearch 等，用于**商业计划书叙事**；MVP 阶段**不纳入** coding-dev，除非新开 ADR。

---

## 架构决策：前后端分离 vs legacy 单体

| | legacy（backup/try） | coding-dev（重建） |
|---|---|---|
| 结构 | Flask 渲染 Jinja 模板（单体） | **Flask REST API** + **frontend 静态/SPA** |
| 页面 | `templates/*.html` | `frontend/` |
| 数据 | SQLite + SQLAlchemy 模型 | 同模型语义，API 暴露 JSON |
| 参考方式 | 抄业务逻辑与字段，不抄目录结构 | ADR-0002 |

---

## Web 组企划中的增量能力（按优先级）

1. **SEO**：meta、JSON-LD、sitemap.xml、robots.txt、关键词 URL
2. **AI 服务层**：统一调用封装、文心一言鉴权、限流与错误重试
3. **AI 接口**：智能对话推荐、路线摘要生成、NLP 嵌入展示
4. **性能**：静态资源压缩、图片优化、CSS/JS 合并

以上写入 PRD 时按 theme 拆分，不在 project-init 阶段实现。

---

## 数据模型（来自 legacy，作为重建契约）

与 `coding-legacy/code/app.py` 对齐：

- **User**：username, password(hash)
- **Feedback**：content, user_id
- **TravelRoute**：keyword, days, day_range, route_type, budget_level, route_details, daily_schedule(JSON), dining, accommodation, cost_estimation, tags

---

## 页面 / 路由（legacy 对照）

| 页面 | legacy 路由 | 重建后（frontend） |
|---|---|---|
| 首页 + 智能推荐表单 | `/` | `/` |
| 注册 | `/register` | `/register` |
| 登录 | `/login` | `/login` |
| 登出 | `/logout` | —（API + 前端清 token） |
| 搜索 | `/search` | `/search` |
| 智能搜索 | `/smart_search` | `/smart-search` |
| 路线详情 | `/route_detail/<id>` | `/routes/:id` |
| 反馈 | `/feedback` | `/feedback` |

---

## 与 project-init 阶段的关系

| Phase | 状态 | 与 backup 的关系 |
|---|---|---|
| **A** 资产初始化 | ✅ 完成 | 骨架 + `docs/source/` 归档 |
| **B** README 配图 | ⬜ 待做 | 用 `assets/` 现有 Logo/Banner + 生成 architecture 图 |
| **C** Showcase 截图 | ⬜ 待做 | 功能就绪后 Playwright；对照 legacy 演示路径 |
| **Gate** | ⬜ 待 Review | 通过后开第一个业务 PRD（建议 `mvp-platform`） |

---

## 下一步建议（第一个 business theme）

`docs/output/reports/mvp-platform/prd.md`（draft）应覆盖：

1. Flask API 脚手架 + SQLite 模型迁移
2. frontend 脚手架 + 首页 / 登录 / 智能推荐
3. 种子路线数据（可参考 legacy 样例，改品牌与地域）
4. （可选 Wave 2）文心一言 API 接入
