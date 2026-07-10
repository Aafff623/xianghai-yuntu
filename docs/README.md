# docs/ — 资产目录

本目录存放**文档、决策、Agent 约定与产物**，不放应用源码。  
**图片资源不在此目录**，统一见仓库根 [`assets/`](../assets/)。

设计参照 [`knowledge/project-init.md`](knowledge/project-init.md) 与 [`knowledge/ai-coding-asset-design.md`](knowledge/ai-coding-asset-design.md)（后者为概要说明）。

## 目录结构

```
docs/
├── README.md              ← 本文件
├── adr/                   架构决策（ADR-0000 …）
├── agents/                Agent 规则
│   ├── workflow.md        ★ 任务流
│   ├── deliver.md         交付层
│   ├── archive.md         归档层
│   ├── context.md         文档地图
│   ├── language.md        共享词汇
│   ├── domain.md          领域消费规则
│   ├── issue-tracker.md
│   └── triage-labels.md
├── contexts/              分端 CONTEXT（frontend / backend）
├── knowledge/             可迁移知识
├── history/               攒批 commit 记录
├── source/                ★ 接手原始文档（项目书 / PPT / 手册 / 协议）
│   ├── project-books/
│   ├── presentations/
│   ├── manuals/
│   ├── contracts/
│   └── process/
└── output/
    ├── reports/
    │   ├── archive/{theme}/
    │   └── {theme}/           prd.md、brief
    ├── handoff/
    │   ├── archive/{theme}/
    │   └── {theme}/{task}.md
    └── decks/
```

## 仓库其他分区（非 docs）

| 路径 | 用途 |
|---|---|
| `/` 根目录 | 入口文档（`README.md`、`CONTEXT.md`、`AGENTS.md` 等） |
| `frontend/` | 前端源码 |
| `backend/` | 后端源码 |
| `assets/` | **全部图片**（含 `assets/readme/` README 配图） |

## GitHub Issues ↔ 本地 docs 映射

| GitHub | 本地 |
|---|---|
| Epic Issue | `docs/output/reports/{theme}/prd.md` |
| 子 Issue | `docs/output/handoff/{theme}/{task}.md` |
| 已完结 | `docs/output/{reports,handoff}/archive/{theme}/` |

> 仓库尚未初始化 Git remote 时，可仅在 `docs/output/` 本地维护，绑定后同步 Issue。

## 接手原始文档（source/）

| 子目录 | 内容 |
|---|---|
| `project-books/` | 项目书（最新：`乡旅与海e模式项目书-25国创-最新.docx`） |
| `presentations/` | PPT 路演稿 |
| `manuals/` | 用户中心、操作手册等 |
| `contracts/` | 合作开发协议、程序鉴别材料 |
| `process/` | 目标企划、修改计划等过程材料 |

## 待建清单

| 路径 | 用途 | 状态 |
|---|---|---|
| `docs/adr/0000-…` | 采用 ADR | **Accepted** |
| `docs/adr/0001-…` | 图片放 assets/ | **Accepted** |
| `docs/output/reports/mvp-platform/prd.md` | Wave 1 PRD | 已有草稿 |
| `docs/output/reports/readme-diagrams/` | README 配图主题状态 | ✅ 见 `readme-diagram-status.md` |
| `assets/readme/` | README 配图（Showcase + GPT 信息图 v2） | ✅ 已落地 |
| `frontend/` | Landing + App 静态演示 | ✅ 可本地演示 |
| `backend/` | Flask REST | 🔜 规划 / 待脚手架 |
