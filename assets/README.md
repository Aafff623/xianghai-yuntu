# assets/ — 全局图片与品牌资产

仓库**唯一**图片根目录（见 `docs/adr/0001-assets-directory-for-images.md`）。前端与文档一律用相对路径引用此处资源。

## 目录一览

| 子目录 | 用途 | 主要消费方 |
|--------|------|------------|
| `brand/` | Logo、管理员头像、波浪装饰 | Landing 导航/Footer；App 顶栏；个人资料 |
| `landing/` | 营销落地页轮播与场景插图 | `frontend/landing/` |
| `routes/` | 路线卡片与详情配图（全国区域类型） | `frontend/app/` 智能推荐 / 搜索 / 详情 |
| `app/` | 功能页背景与图标集 | App 首页 / 详情背景 |
| `prototype/` | GPT HTML 原型风光与参考截图 | Landing 反馈视觉；App 鉴权/反馈分栏 |
| `banners/` | 横幅 / 海岸题材 | README / 营销 |
| `marketing/` | 竞赛封面等 | 对外材料 |
| `readme/` | README 配图（Showcase 截图 + GPT 信息图 v2） | 根 `README.md` |
| `misc/` | 占位图 | 兜底 |

## 品牌（`brand/`）

| 文件 | 说明 |
|------|------|
| `logo.svg` | 主标识「乡旅e模式」词标 + 三角 e 意象（透明底） |
| `logo-primary.jpg` | 原始三角 e 标志（深灰底） |
| `logo-alt.png` | 备用标志图 |
| `avatar-admin.svg` | 演示账号 `admin` 专业头像 |
| `wave.svg` | 装饰用海浪 |

## 使用约定

1. **不要**把业务图片放进 `docs/`。
2. 新插图按场景入子目录，并更新**该子目录** `README.md`（若有）与本文件表格。
3. Landing 与 App 路径示例：
   - Landing → `../../assets/brand/logo.svg`
   - App → `../../assets/brand/logo.svg`、`../../assets/routes/*.jpg`
4. 演示账号：`admin` / `123456`，头像固定为 `brand/avatar-admin.svg`。

## 近期维护

| 日期 | 变更 |
|------|------|
| 2026-07-10 | 新增 `avatar-admin.svg`；`logo.svg` 改为乡旅e模式词标；引入 prototype 风光与路线独立配图 |
| 2026-07-10 | `readme/`：Playwright Showcase 五图 + architecture/workflow/features.svg；根 README 重写 |
| 2026-07-10 | 导入 GPT 资产包 v2：`banner/architecture/workflow/features/tech-stack.png` |
| 2026-07-10 | Deliver 收尾：资产索引与 `docs/README` 状态同步；Wave 1 前端演示资产齐备 |

### `readme/` 契约文件（当前主用）

| 文件 | 说明 |
|------|------|
| `banner.png` | 页首横幅 |
| `architecture.png` | 系统架构 |
| `workflow.png` | 用户主链路 |
| `features.png` | 核心功能 |
| `tech-stack.png` | 技术栈分层 |
| `showcase-landing.png` | Playwright · Landing |
| `showcase-home.png` | Playwright · App 首页 |
| `showcase-smart-search.png` | Playwright · 智能推荐 |
| `showcase-route-detail.png` | Playwright · 路线详情 |
| `showcase-auth.png` | Playwright · 登录 |

> 细节与替换流程见 [`readme/README.md`](readme/README.md)。SVG 基线（`*.svg`）可保留作对照，根 README 已优先引用 PNG。

子目录说明：

- [`brand/README.md`](brand/README.md)
- [`landing/README.md`](landing/README.md)
- [`routes/README.md`](routes/README.md)
- [`prototype/README.md`](prototype/README.md)
- [`readme/README.md`](readme/README.md)
