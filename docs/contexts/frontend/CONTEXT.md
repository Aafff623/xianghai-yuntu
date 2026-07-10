# Frontend CONTEXT

> 用户端 UI。共享产品事实见根 [`CONTEXT.md`](../../CONTEXT.md)。

## 范围

- 路径：`frontend/`（待初始化）
- 职责：用户可见的全部界面 — 注册登录、首页、搜索、智能推荐、路线详情、反馈等

## 当前状态

**未选定框架。** project-init 已完成；脚手架待第一个业务 PRD + 技术栈 ADR 后实施。

UI 审计与出图 brief 已完成：`docs/output/reports/ui-prototype/ui-prototype-brief.md`

## 约束（重建裁定）

1. 通过 HTTP API 与 `backend/` 通信，不直连数据库
2. 品牌统一为「**乡海云途**」；视觉素材从 `assets/` 引用
3. 主色 **海洋蓝** `#0077BE` / `#00B4D8`（不用 legacy 山地绿）
4. 响应式布局，优先桌面 + 移动浏览器（是否做小程序另开 ADR）
5. 鉴权方式与后端 ADR 一致（JWT / Session 等待定）
6. legacy 模板仅作交互参考，**不**沿用错品牌、错配色、搜用户、缺搜索入口

## 页面清单（7 页 + 全局壳）

| # | 页面 | 路由 | legacy | 需登录 |
|---|------|------|--------|--------|
| P1 | 首页 | `/` | index.html | 否 |
| P2 | 登录 | `/login` | login.html | 否 |
| P3 | 注册 | `/register` | register.html | 否 |
| P4 | 智能推荐结果 | `/smart-search` | smart_search.html | **是** |
| P5 | 关键词搜索 | `/search` | search.html | **是** |
| P6 | 路线详情 | `/routes/:id` | route_detail.html | **是** |
| P7 | 反馈 | `/feedback` | feedback.html | 否（legacy） |

**全局壳**：顶栏（Logo、用户态、**关键词搜索框**）、Flash  toast、页脚、「返回首页」/「返回推荐」

## 功能流程

```
注册 → 登录 → 首页
首页 + 已登录 → 智能推荐 → 路线详情 ↔ 相关推荐
顶栏搜索 → 关键词结果 → 路线详情
首页 → 反馈 → 提交 → 首页
未登录访问 P4/P5/P6 → 登录 + Flash
任意页 → 注销 → 首页
```

详见 `ui-prototype-brief.md` §2.2 Mermaid 图。

## 表单与枚举（须与 API 一致）

| 字段 | 选项 |
|------|------|
| 行程天数 | 1-2天 · 3-5天 · 6-7天 |
| 路线类型 | 文化探索 · **海洋风光** · 自然景观 · 美食之旅 · 亲子休闲 · 历史遗迹 |
| 预算级别 | 经济型 · 舒适型 · 豪华型 |

## 相关资产

| 资产 | 路径 |
|---|---|
| 主 Logo | `assets/brand/logo-primary.jpg` |
| Banner | `assets/banners/qingdao-sunset-banner.jpg` |
| 背景插画 | `assets/banners/scenic-coastal-village.jpg` |
| UI 出图 brief | `docs/output/reports/ui-prototype/ui-prototype-brief.md` |

## 参考

- 旧 Flask 模板：`../../coding-legacy/code/templates/`（仅 UI 与交互参考，不迁移代码）
- 产品规格：`docs/knowledge/mvp-product-spec.md` §6
