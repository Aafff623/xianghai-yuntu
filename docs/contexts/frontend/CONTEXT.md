# Frontend CONTEXT

> 用户端 UI。共享产品事实见根 [`CONTEXT.md`](../../CONTEXT.md)。

## 范围

| 路径 | 职责 |
|------|------|
| `frontend/landing/` | 营销落地页（全国乡村旅游叙事） |
| `frontend/app/` | **功能页演示** — 注册登录、首页推荐、搜索、详情、反馈 |

## 当前状态

- Landing：已交付，全国口径。
- 功能页：`frontend/app/` Wave 1 演示（本地种子数据 + localStorage 鉴权，可后续接 Flask API）。
- PRD：`docs/output/reports/mvp-platform/prd.md`（approved）。

## 约束

1. 功能页通过 API 或本地 `data.js` 取路线；正式版接 `backend/` REST。
2. 品牌「**乡旅e模式**」；视觉素材从 `assets/` 引用。
3. 主色海洋蓝 `#0077BE` / `#00B4D8`（不用 legacy 山地绿）。
4. **全国**路线示意；搜索与推荐不锁单城。
5. 响应式：桌面优先 + 移动可用。

## 页面清单（7 页 + 全局壳）

| # | 页面 | 文件 / 路由 | 需登录 |
|---|------|-------------|--------|
| P1 | 首页（推荐表单） | `app/index.html` | 否 |
| P2 | 登录 | `app/login.html` | 否 |
| P3 | 注册 | `app/register.html` | 否 |
| P4 | 智能推荐结果 | `app/smart-search.html` | 演示可放宽；正式 **是** |
| P5 | 关键词搜索 | `app/search.html` | 演示可放宽；正式 **是** |
| P6 | 路线详情 | `app/route-detail.html` | 演示可放宽；正式 **是** |
| P7 | 反馈 | `app/feedback.html` | 否 |

**全局壳**：顶栏（Logo、搜索框、用户态）、Flash、页脚、返回导航。

## 表单与枚举（与任务书对齐）

| 字段 | 选项 |
|------|------|
| 计划天数 | 1-2天 · 3-5天 · 6-7天 |
| 兴趣主题 | 文化体验 · 自然观光 · 亲子休闲 · 乡村旅游 |
| 规划风格 | 经济型 · 舒适型 · 豪华型 |

## 种子数据原则

- 区域类型模板：江南水乡、西南梯田、华北河谷、徽州山地等。
- `keyword` 支持全国主题词检索；**禁止**仅维护单一城市景点列表。

## 相关资产

| 资产 | 路径 |
|------|------|
| Landing | `frontend/landing/index.html` |
| 功能页 | `frontend/app/` |
| 插图 | `assets/landing/` |
| Logo | `assets/brand/logo-primary.jpg` |
| PRD | `docs/output/reports/mvp-platform/prd.md` |
| 产品规格 | `docs/knowledge/mvp-product-spec.md` |
