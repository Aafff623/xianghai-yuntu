# Backend CONTEXT

> API 与服务层。共享产品事实见根 [`CONTEXT.md`](../../CONTEXT.md)。

## 范围

- 路径：`backend/`（待初始化）
- 职责：REST/JSON API、鉴权、路线 CRUD、智能推荐逻辑、用户反馈、数据库访问

## 当前状态

**未选定框架。** project-init 已完成；脚手架待第一个业务 PRD + 技术栈 ADR 后实施。

## 约束（草案）

1. 对外暴露 JSON API；前端通过 HTTP 调用
2. 密码必须哈希存储，禁止明文
3. 路线模型需支持：关键词、天数、类型、预算、详情、每日行程（结构化）、餐饮 / 住宿 / 费用等字段
4. 密钥与数据库连接串仅环境变量，不入库

## 数据模型（规划，来自旧版参考）

| 实体 | 说明 |
|---|---|
| User | 用户名、密码哈希 |
| TravelRoute | 路线主表 |
| Feedback | 用户反馈，关联 User |

智能推荐：按 `days` / `route_type` / `budget_level` 等维度筛选 `TravelRoute`。

## API 清单（规划）

| 方法 | 路径（待定） | 说明 |
|---|---|---|
| POST | `/api/auth/register` | 注册 |
| POST | `/api/auth/login` | 登录 |
| GET | `/api/routes/search` | 关键词搜索 |
| POST | `/api/routes/smart-search` | 智能推荐 |
| GET | `/api/routes/:id` | 路线详情 |
| POST | `/api/feedback` | 提交反馈（需鉴权） |

具体路径与字段以 OpenAPI / ADR 为准。

## 参考

- 旧 Flask 实现：`../coding-legacy/code/app.py`（业务逻辑与种子数据参考，不迁移代码）
