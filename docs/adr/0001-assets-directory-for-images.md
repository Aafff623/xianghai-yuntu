# ADR-0001: Assets directory for all images

## Status

Accepted

## Context

通用 project-init 规范（见 `docs/knowledge/project-init.md`）默认 README 配图放在 `docs/images/readme/`。

本仓库为前后端分离结构，且用户明确要求：

1. `docs/` 放在 `coding-dev` 根下，遵循 Agent 资产规范
2. **所有图片**统一放在 `assets/`，不放 `docs/` 下

## Decision

- 仓库根 `assets/` 为**唯一**图片根目录
- 子目录约定：
  - `assets/brand/` — Logo
  - `assets/banners/` — 横幅 / 背景
  - `assets/marketing/` — 竞赛封面等
  - `assets/readme/` — README 终稿配图（banner、architecture、tech-stack 等）
  - `assets/misc/` — 占位图等
- README 引用使用相对路径，例如 `assets/readme/banner.png`
- `docs/output/reports/readme-diagrams/` brief 中指向 `assets/readme/`

## Consequences

- 禁止在 `docs/` 下新建 `images/` 目录存放终稿图
- `deliver.md` T9 资产类型维护目标为 `assets/` 而非 `docs/images/readme/`
- 与 tourism-master 参照仓的路径差异以本 ADR 为准
