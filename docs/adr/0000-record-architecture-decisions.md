# ADR-0000: Record architecture decisions

## Status

Accepted

## Context

乡海云途从零重建，前后端分离。技术选型、数据模型与资产布局会随 PRD 演进，需要可追溯的决策记录。

## Decision

采用 Architecture Decision Records，存放于 `docs/adr/`，编号 `000N-kebab-title.md`。

## Consequences

- 重大技术分叉必须先补 ADR 再大规模改代码
- Agent 输出若与已有 ADR 冲突须显式标注
