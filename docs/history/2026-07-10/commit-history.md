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

## landing-page — 营销落地页 + AI 插图

- **时间**: 2026-07-10
- **改动**:
  - 新增 `frontend/landing/` 单页落地页（HTML/CSS/JS）
  - 新增 `assets/landing/` AI 生成插图 6 张 + logo 副本
- **状态**: awaiting-review
- **说明**: 未 git commit，待用户 Review


## landing-page-v3 — 加长营销页 + 轮播/轨道卡 + 演示模块

- **时间**: 2026-07-10
- **改动**:
  - Hero 城市风光轮播（青岛/烟威/日照/东营潍坊滨州）
  - 体验类型等宽圆形轨道排版
  - 扩充模块：七市、推荐演示表单、详情时间轴、调研、人群、搜索、路线图、反馈
  - 导航项扩充；assets/landing 新增 slide 图
- **测试**（第 1 轮）:
  - 资源路径全通过；JS syntax OK
  - Playwright: 轮播切换、智能推荐出卡、搜索「金沙滩」、反馈提示
  - 三圆 disc 宽高均为 148px；页面高度约 8.3 屏
- **状态**: committed after test

