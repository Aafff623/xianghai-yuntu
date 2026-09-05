# AGENTS.md

跨 Agent 工具的项目入口。产品域事实、术语与 backlog → [`CONTEXT.md`](CONTEXT.md)。

## 定位

- **乡旅e模式**（主品牌；竞赛别名「乡海云途」）— 全国乡村短途智能路线规划演示。
- 纯静态前端：`frontend/landing/` 营销页 + `frontend/app/` 7 功能页，HTML/CSS/原生 JS 零构建。
- 演示账号 `admin` / `123456`（localStorage 本地鉴权，仅演示）；后端为规划态（ADR-0002），未实施。

## 目录地图

| 路径 | 职责 |
|---|---|
| `frontend/landing/` | 营销落地页 |
| `frontend/app/` | 功能页：首页筛选 / 智能推荐 / 搜索 / 详情 / 登录注册 / 资料 / 反馈 |
| `backend/` | 占位（`.gitkeep`），待 Flask REST 脚手架 |
| `assets/` | **全部图片**（品牌 / 路线 / README 配图；禁止放 `docs/`，ADR-0001） |
| `docs/` | ADR、产品规格、分端 CONTEXT、PRD |
| `docs/source/` | 竞赛原始材料：**本地保留、不再入库**（已在 .gitignore，解除跟踪由主控执行） |
| `scripts/` | 本地维护脚本（README 配图 SVG 生成） |
| `temp/` | 本地草稿 / 临时产物，不入库 |

## 验证方式

```bash
# 仓库根起静态服务
python -m http.server 8765
```

冒烟路径：`/frontend/landing/index.html`、`/frontend/app/index.html`、`/frontend/app/search.html` 均 200；
JS 改动跑 `node --check <file>`；页面改动走一遍主链路（筛选 → 推荐 → 详情 → 搜索 → 反馈）。

## 约定

1. UI 统一「乡旅e模式」；数据与文案按**全国区域类型模板**，禁止写死单一城市景点库。
2. 主色海洋蓝 `#0077BE` / `#00B4D8`；枚举与鉴权口径见 `CONTEXT.md`，术语不得另造。
3. 密钥不入库；文档与图片分离（ADR-0001）；技术栈变更须先补 ADR。
4. 改动最小化、匹配现有风格；**禁止 git 写操作**（含 `rm --cached`，只改 .gitignore 并汇报）。
5. Wave 1 Out（AI 对话、电商、地图全屏、支付）不实现。
