# 共享语言

Agent 输出（issue 标题、重构名、测试名、注释）必须使用下表词汇。完整定义见根目录 `CONTEXT.md` §领域术语表。

## Issue tracker

| 术语 | 定义 | 避免 |
|---|---|---|
| **Issue tracker** | 本仓库的 GitHub Issues | backlog manager、ticket 系统 |
| **Issue** | tracker 中的单条工作单元 | ticket（除非引用外部系统原文） |
| **Triage role** | issue 上的 canonical 状态角色 | 自定义状态名 |

Triage 角色与标签字符串映射见 `triage-labels.md`。

## 任务流

| 术语 | 定义 |
|---|---|
| **主题** | theme；一个 Epic / 倡议，`reports/{theme}/` 与 `handoff/{theme}/` 同名 |
| **任务** | task；PRD 拆分后的工作单元，对应子 Issue + `handoff/{theme}/{task}.md` |
| **PRD** | 需求文档；`reports/{theme}/prd.md`，用户确认前 `draft` |
| **Handoff** | 任务接力文件；一任务一文件，持续更新 |
| **Review** | 用户确认交付；通过前 Agent 停止 |
| **Archive** | `reports/archive/`、`handoff/archive/`；已确认完结 |
| **Knowledge** | `docs/knowledge/`；跨项目可迁移经验；写入须用户 Review |

流程详见 `workflow.md`。

## 领域（乡海云途）

| 术语 | 英文 | 简述 |
|---|---|---|
| 乡海云途 | Xianghai Yuntu | 产品品牌 |
| 路线 | Travel Route | 可检索、可推荐的旅游行程 |
| 智能推荐 | Smart Recommendation | 按条件筛选路线 |
| 路线类型 | Route Type | 文化探索、自然景观等分类 |
| 预算级别 | Budget Level | 经济型 / 舒适型 / 豪华型 |
| 每日行程 | Daily Schedule | 按天组织的活动安排 |
| 用户反馈 | Feedback | 登录用户提交的意见 |
| 接手原始文档 | Source Materials | `docs/source/` 下的项目书等 |

## 目录

| 术语 | 路径 |
|---|---|
| 前端 | `frontend/` |
| 后端 | `backend/` |
| 图片资产 | `assets/`（**禁止**放 `docs/`） |
| README 配图 | `assets/readme/` |
| 接手文档 | `docs/source/` |
