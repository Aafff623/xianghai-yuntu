# CLAUDE.md

本文件包含 Claude Code 在本仓库中工作时的项目级指令。Cursor 等工具见 [`AGENTS.md`](AGENTS.md)。

## 项目速览

- **产品**：乡海云途 — AI 定制化乡村旅游规划平台
- **形态**：前后端分离（`frontend/` + `backend/`）
- **阶段**：project-init 已完成；业务功能待 PRD 后实施
- **参照规范**：[`docs/knowledge/project-init.md`](docs/knowledge/project-init.md)

## 新队友阅读顺序

| 顺序 | 路径 | 目的 |
|---|---|---|
| 1 | `README.md` | 项目定位、目录、如何开始 |
| 2 | `CONTEXT.md` | 产品域事实、术语、约束 |
| 3 | `CONTEXT-MAP.md` | 前后端上下文地图 |
| 4 | `docs/agents/language.md` | 共享命名词汇 |
| 5 | `docs/agents/workflow.md` | 任务流（做功能时） |
| 6 | `docs/agents/context.md` | 文档地图 |
| 7 | `CLAUDE.md` | Agent 工作纪律（本文件） |
| 8 | 对应端源码 + `docs/contexts/*/CONTEXT.md` | 实施 |
| 9 | `docs/adr/` | 架构决策记录 |

## 目录分工

| 路径 | 职责 |
|---|---|
| `frontend/` | 前端 UI 源码 |
| `backend/` | 后端 API / 服务源码 |
| `assets/` | **全部图片**（Logo、Banner、README 配图 → `assets/readme/`） |
| `docs/` | Agent 规则、PRD、handoff、ADR、接手原始文档 |
| `docs/source/` | 项目书、PPT、手册等（非运行时真相源） |
| `docs/adr/` | 架构决策（ADR） |
| `docs/agents/` | Agent 规则；**任务流 → `workflow.md`** |
| `docs/contexts/` | 分端 CONTEXT |
| `docs/output/reports/{theme}/` | PRD、brief |
| `docs/output/handoff/{theme}/` | 任务 handoff |
| `docs/knowledge/` | 可迁移知识沉淀 |
| `docs/history/{YYYY-MM-DD}/` | 当日改动记录（攒批合并用） |
| 根目录 | 入口文档：`README` / `CONTEXT` / `CONTEXT-MAP` / `CLAUDE` / `AGENTS` |

完整索引 → [`docs/README.md`](docs/README.md)。

## Agent skills

### Issue tracker

Issues 以 GitHub issue 的形式跟踪。详见 `docs/agents/issue-tracker.md`。  
仓库尚未绑定 remote 时，先在 `docs/output/` 本地维护 PRD / handoff。

### Triage labels

使用 canonical 标签词汇。详见 `docs/agents/triage-labels.md`。

### Domain docs

多上下文布局：根目录 `CONTEXT.md` + `CONTEXT-MAP.md` + `docs/contexts/*/CONTEXT.md` + `docs/adr/`。消费规则见 `docs/agents/domain.md`、`docs/agents/context.md`；命名见 `docs/agents/language.md`。

## 工作纪律

1. **PRD 未 approved 不写功能代码**（project-init / 纯文档除外）。
2. **Review 先于 commit**；任务默认终点是 Review，不是 commit。
3. **图片只放 `assets/`**，不放 `docs/`（ADR-0001）。
4. **术语一致**：输出使用 `CONTEXT.md` 词汇表。
5. **最小改动**：不扩大 PRD 范围；不迁移 `coding-legacy` 代码。

## 已归档偏好

（Agent 与用户 Review 通过后，在此追加条目。）

- **2026-07-10**：图片统一放 `assets/` 子目录，README 配图用 `assets/readme/`；接手文档放 `docs/source/`。
