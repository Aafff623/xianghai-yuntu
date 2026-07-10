# README 配图主题 · 状态说明

**theme**: `readme-diagrams`  
**status**: done（Wave 1 演示 README 所需图已齐）  
**date**: 2026-07-10

## 产出落点

全部物理文件在 `assets/readme/`（不进 `docs/`，符合 ADR-0001）。

| 类别 | 文件 | 状态 |
|------|------|:----:|
| Banner | `banner.png` | ✅ GPT v2 |
| 架构图 | `architecture.png` | ✅ GPT v2 |
| 主链路 | `workflow.png` | ✅ GPT v2 |
| 功能模块 | `features.png` | ✅ GPT v2 |
| 技术栈 | `tech-stack.png` | ✅ GPT v2 |
| Showcase | `showcase-*.png` ×5 | ✅ Playwright |
| 目录树信息图 | `structure.png` | ⬜ 可选未做 |

## 消费方

- 根 [`README.md`](../../../../README.md)
- 契约 [`assets/readme/README.md`](../../../../assets/readme/README.md)

## 备注

- SVG 基线（`architecture.svg` 等）保留作对照，GitHub 主展示以 PNG 为准。
- 本目录不再重复存图；仅作主题状态 brief。
