# assets/readme/ — GitHub README 配图

服务根目录 [`README.md`](../../README.md)。图片只放 `assets/`（ADR-0001）。

---

## 当前文件

### GPT 高级信息图（v2 包已落地）

| 契约文件名 | 包内源文件 | 用途 |
|------------|------------|------|
| `banner.png` | `01-banner-coastal-rural-travel-demo.png` | 页首横幅 |
| `architecture.png` | `02-architecture-system-overview.png` | 系统架构 |
| `workflow.png` | `03-workflow-user-journey.png` | 用户主链路 |
| `features.png` | `04-features-core-capabilities.png` | 核心功能 |
| `tech-stack.png` | `05-tech-stack-layered-diagram.png` | 技术栈分层 |

来源压缩包示例：`xianglv-e-mode-readme-assets-v2.zip` → 解压后按上表复制到本目录。

### Playwright Showcase 截图

| 文件 | 页面 |
|------|------|
| `showcase-landing.png` | Landing |
| `showcase-home.png` | App 首页筛选 |
| `showcase-smart-search.png` | 智能推荐 |
| `showcase-route-detail.png` | 路线详情 |
| `showcase-auth.png` | 登录 |

### 基线 SVG（可选保留）

| 文件 | 说明 |
|------|------|
| `architecture.svg` / `workflow.svg` / `features.svg` | 早期矢量基线；README 已优先引用 PNG |
| `_gen_diagrams.py` | 重生成 SVG 基线的脚本 |
| `banner.jpg` | 旧横幅副本（已由 `banner.png` 替代） |

---

## 替换流程

1. 解压 GPT 资产包  
2. 映射到上表「契约文件名」覆盖本目录  
3. 确认 `README.md` 使用 `assets/readme/*.png` 相对路径  
4. commit / push 后检查 GitHub 预览  

---

## 状态

| 项目 | 状态 |
|------|:----:|
| Playwright Showcase | ✅ |
| GPT 架构 / 链路 / 功能 / 技术栈 / Banner PNG | ✅ v2 |
| structure.png（目录树信息图） | ⬜ 可选（README 用文字树代替） |
| Deliver 资产目录同步 | ✅ 2026-07-10 |

**主题 brief：** [`docs/output/reports/readme-diagrams/readme-diagram-status.md`](../../docs/output/reports/readme-diagrams/readme-diagram-status.md)
