# Commit History — 2026-07-10

## 1. project-init

**类型**：T5 规范 / project-init

**做了什么**

- 按 project-init Phase A 初始化 `coding-dev/` docs 骨架与根入口文档
- 接手原始文档迁入 `docs/source/` 子目录
- 图片迁入 `assets/` 规范子目录（ADR-0001）
- 创建 `frontend/`、`backend/` 空目录待开发

**改了哪些文件**

- 根：`AGENTS.md`、`CLAUDE.md`、`CONTEXT.md`、`CONTEXT-MAP.md`、`README.md`
- `docs/**` 骨架与 agents / adr / contexts / knowledge / output / source
- `assets/**` 重组
- `frontend/.gitkeep`、`backend/.gitkeep`

**Review 重点**

- 确认 `docs/source/` 分类与 `assets/` 命名
- 确认未带入旧代码
- Gate 通过后可开第一个业务 PRD

**建议 commit 信息（未执行）**

```
chore(init): project-init Phase A for coding-dev
```
