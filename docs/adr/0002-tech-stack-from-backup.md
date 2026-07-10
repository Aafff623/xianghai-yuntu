# ADR-0002: Tech stack baseline from backup materials

## Status

Accepted

## Context

`coding-dev/` 从零重建，但须与 roommate 交接的 **backup 资料**及 **coding-legacy** 实现保持一致的产品方向与技术选型。

参考来源：

- `docs/source/project-books/乡旅与海e模式项目书-25国创-最新.docx`
- `docs/source/process/Web组目标企划.docx`
- `backup/try/requirements.txt`、`coding-legacy/code/app.py`

用户要求：按 backup 中的**核心技术栈与架构方向**开发，而非随意另选栈。

## Decision

### MVP 技术栈（Phase 1）

| 层 | 选型 |
|---|---|
| Backend | **Python 3 + Flask** |
| ORM | **Flask-SQLAlchemy** |
| Auth | **Flask-Bcrypt** + session 或 JWT（实现时在 backend CONTEXT 细化） |
| DB | **SQLite**（开发）；生产换库另开 ADR |
| Frontend | **HTML / CSS / JavaScript**（独立 `frontend/` 目录） |
| 通信 | **REST JSON API**（前后端分离，区别于 legacy 单体 Jinja） |
| AI（Wave 2） | **百度文心一言 API**（Web 组企划；MVP 可 mock） |

### 架构

```
frontend/  ──HTTP JSON──▶  backend/ (Flask API)
                              │
                              ▼
                         SQLite (+ SQLAlchemy models)
```

- **不迁移** legacy 的 `templates/` 与单体路由结构
- **迁移** legacy 的数据模型语义、业务规则、种子路线逻辑

### 明确排除（竞赛远景，非 MVP）

TensorFlow Serving、Spark、MongoDB、Elasticsearch 等仅出现在项目书商业计划章节，**不作为** coding-dev MVP 依赖。

## Consequences

- `CONTEXT.md` 技术栈表以本 ADR 为准
- 换栈（如 FastAPI、Vue、MySQL）须新 ADR 并说明与 backup 的偏差
- 详细参考索引见 `docs/knowledge/reference-from-backup.md`
