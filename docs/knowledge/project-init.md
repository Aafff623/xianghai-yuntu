# project-init — 接手 / 新建仓库的体系化初始化

> **本仓适配说明**：图片统一放 [`assets/`](../../assets/)（见 ADR-0001），**不使用** `docs/images/readme/`。  
> **完整规范原文**见参照仓 `tourism-master/docs/knowledge/project-init.md`。

---

## 适用范围

| 场景 | 是否跑 project-init |
|---|---|
| 新接手、尚无 Agent 资产 | **必须** |
| 自己从零开项目 | **必须** |
| 已规范仓库上开业务功能 | 不必重复 |
| 仅改一行文案 | 不必 |

## 本仓 Phase A 完成项（2026-07-10）

- [x] 根入口：`AGENTS.md`、`CLAUDE.md`、`CONTEXT.md`、`CONTEXT-MAP.md`、`README.md`
- [x] `docs/agents/` 流程件（workflow · deliver · archive · context · language · domain · issue-tracker · triage-labels）
- [x] `docs/adr/0000`、`0001`
- [x] `docs/contexts/{frontend,backend}/CONTEXT.md`
- [x] `docs/output/` · `docs/knowledge/` · `docs/history/` 骨架
- [x] `docs/source/` 接手原始文档归类
- [x] `assets/` 图片规范子目录
- [x] `docs/knowledge/reference-from-backup.md` + ADR-0002 技术栈（来自 backup）
- [ ] GitHub remote + Issue tracker（待绑定）
- [~] Phase B README 配图 — **仅占位**（`assets/readme/README.md`），待 UI 定稿后出图
- [~] Phase C Showcase — **仅占位**（见根 `README.md`），待功能跑通后 Playwright

## 目录约定（本仓差异）

| 规范默认 | 本仓 |
|---|---|
| `docs/images/readme/` | **`assets/readme/`**（ADR-0001） |
| 三端 weapp/admin/api | **frontend / backend** |
| 业务文档散落 | **`docs/source/`** 按类型分子目录 |

## 阶段总览

```text
Phase A  资产初始化（本文件 §完成项）
    ↓
Phase B  README 美化 + assets/readme/ 配图
    ↓
Phase C  Showcase 占位 → Playwright 截图
    ↓
Gate     Review init 产物 → 开第一个业务 theme
```

## Phase B 配图清单（文件名契约）

| 文件 | 用途 |
|---|---|
| `assets/readme/banner.png` | 页首横幅 |
| `assets/readme/features.png` | 核心功能模块 |
| `assets/readme/architecture.png` | 系统架构 |
| `assets/readme/tech-stack.png` | 技术栈 |
| `assets/readme/workflow.png` | 用户主链路 |
| `assets/readme/structure.png` | 仓库目录 |

brief 写到 `docs/output/reports/readme-diagrams/readme-diagram-brief.md`。

## 日常业务流（init 完成后）

```text
Issue(Epic) → reports/{theme}/prd.md (approved)
  → handoff/{theme}/{task}.md
  → 实施 → awaiting-review → 用户 Review
  → archive
```

详见 [`../agents/workflow.md`](../agents/workflow.md) 与根 [`AGENTS.md`](../../AGENTS.md)。

## 相关路径

| 资源 | 路径 |
|---|---|
| 本规范 | `docs/knowledge/project-init.md` |
| 任务流 | `docs/agents/workflow.md` |
| 接手文档 | `docs/source/` |
| 图片根 | `assets/` |
| init 报告 | `docs/output/reports/project-init/` |
