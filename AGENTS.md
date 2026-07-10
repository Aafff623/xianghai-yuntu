# AGENTS.md

跨 Agent 工具的项目入口。**流程规范 → [`docs/agents/workflow.md`](docs/agents/workflow.md)。**

## 速览

- 产品：**乡海云途** — AI 定制化乡村旅游规划平台（前后端分离，从零重建）
- 任务流程：[`docs/agents/workflow.md`](docs/agents/workflow.md)
- 领域上下文：[`CONTEXT.md`](CONTEXT.md) · 地图 [`CONTEXT-MAP.md`](CONTEXT-MAP.md)
- 文档索引：[`docs/README.md`](docs/README.md)
- 接手初始化：[`docs/knowledge/project-init.md`](docs/knowledge/project-init.md)

## 仓库布局（硬约束）

| 路径 | 职责 |
|---|---|
| `frontend/` | 前端 UI 源码 |
| `backend/` | 后端 API / 服务源码 |
| `docs/` | Agent 资产、PRD、handoff、ADR、**接手原始文档**（不放源码） |
| `assets/` | **全部图片资源**（Logo、Banner、README 配图等；**禁止**放到 `docs/` 下） |

## 任务流（硬约束）

```
Issue(Epic) → reports/{theme}/prd.md → 用户确认
  → 子 Issue + handoff/{theme}/{task}.md
  → 实施 → awaiting-review → 用户 Review 通过
  → handoff/archive/ + reports/archive/
```

| 规则 | 说明 |
|---|---|
| 一任务一 handoff | `handoff/{theme}/{task}.md` 原地迭代，**不用** 01/02 版本号 |
| Review 门禁 | 交付后 `status: awaiting-review`，**停止**；用户确认后才继续 |
| **Review 说明** | 交付前**必须**说明：做了什么、改了哪些文件、**Review 重点** |
| PRD 门禁 | `prd.md` 为 `approved` 前，禁止拆任务写功能代码 |
| 主题同名 | `reports/{theme}/` ↔ `handoff/{theme}/` |

## 产物归位

| 产物 | 路径 |
|---|---|
| PRD / brief | `docs/output/reports/{theme}/` |
| 任务 handoff | `docs/output/handoff/{theme}/{task}.md` |
| 已完结 | `docs/output/{reports,handoff}/archive/{theme}/` |
| 改动记录（攒批） | `docs/history/{YYYY-MM-DD}/commit-history.md` |
| README / 产品配图 | `assets/readme/` |
| 品牌 / Banner 等 | `assets/{brand,banners,marketing,misc}/` |
| 接手原始文档 | `docs/source/` |
| 分端 CONTEXT | `docs/contexts/{frontend,backend}/CONTEXT.md` |

## Commit 攒批（硬约束）

任务完成的**默认终点是 Review，不是 commit**。

| 规则 | 说明 |
|---|---|
| Review 先于 commit | 任务做完**先写 history 条目**，**禁止**未经用户同意自动 `git commit` |
| 一天一文件 | 同一天多个任务追加到同一个 `commit-history.md` |
| 只管自己改的 | Agent **只提交本轮对话自己改动的文件** |

## Review 说明（全局硬约束）

交付 Review 前，Agent **必须先输出 Review 说明**，再停止等待确认：

```
做了什么（要点列表）
改了哪些文件（路径）
Review 重点（用户应重点看什么、怎么验、有何风险/未决项）
```

## 会话开始

1. 本文件
2. 用户给的 **theme + task** 或 **Issue 号**
3. `workflow.md` 规定的 PRD + handoff
4. 按需 `CONTEXT.md`、`CONTEXT-MAP.md`、相关分端 CONTEXT、ADR

## 会话结束

| 条件 | 动作 |
|---|---|
| 有交付待 Review | handoff → `awaiting-review`，**停止** |
| Review 已通过 | **物理移动** handoff → `archive/`；主题完结移 reports |
| 新规范 | 追加 `CLAUDE.md` §已归档偏好 |
| 可迁移知识 | **仅用户要求**；草稿 → Review → 写入 `docs/knowledge/` |

## Agent skills

### Issue tracker

Issues 以 GitHub Issues 跟踪（`gh` CLI）。详见 [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md)。  
**当前状态**：仓库尚未初始化 Git remote；Epic/任务可先在 `docs/output/` 本地维护，绑定 remote 后同步 Issue。

### Triage labels

使用 canonical 标签词汇。详见 [`docs/agents/triage-labels.md`](docs/agents/triage-labels.md)。

### Domain docs

多上下文布局：根 `CONTEXT.md` + `CONTEXT-MAP.md` + `docs/contexts/*/CONTEXT.md` + `docs/adr/`。见 [`docs/agents/domain.md`](docs/agents/domain.md)。

详细维护协议 → [`CLAUDE.md`](CLAUDE.md)。
