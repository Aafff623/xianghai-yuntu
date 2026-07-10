# CONTEXT-MAP

本仓库为**多上下文**布局：产品域事实在根 `CONTEXT.md`；前后端实现约定分文件维护。

| Context | 路径 | 范围 |
|---|---|---|
| **product**（共享） | [`CONTEXT.md`](CONTEXT.md) | 乡海云途产品定位、术语、跨端约束 |
| **frontend** | [`docs/contexts/frontend/CONTEXT.md`](docs/contexts/frontend/CONTEXT.md) | 用户端 UI（`frontend/`） |
| **backend** | [`docs/contexts/backend/CONTEXT.md`](docs/contexts/backend/CONTEXT.md) | API 与服务（`backend/`） |

## 阅读规则

1. 任何任务先读根 [`CONTEXT.md`](CONTEXT.md)。
2. 改动落在某一端时，再读对应 context 的 `CONTEXT.md`。
3. 跨端改动（如路线 API 字段贯通前后端）→ 读 product + 涉及的全部 context。
4. 架构决策 → [`docs/adr/`](docs/adr/)；系统级 ADR 优先于单端约定。

消费规则详见 [`docs/agents/domain.md`](docs/agents/domain.md)。
