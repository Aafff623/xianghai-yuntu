# CONTEXT.md

## 项目定位

**乡旅e模式**（主品牌）— 全国乡村短途智能路线规划 Web 系统；「乡海云途」为竞赛别名，可互指（仓库名沿用 `xianghai-yuntu`）。

- 形态：B/S Web 演示系统。当前为**纯静态前端演示**（零构建），后端未实施。
- 来源：课程任务书与竞赛材料（`docs/source/`）为需求输入；早期旧 Flask 单体实现（Flask + SQLAlchemy + Bcrypt + SQLite + Jinja，快照在本仓之外）仅作业务模型语义参考，代码不迁移。
- 地域：**全国**乡村旅游 / 短途 / 亲子 / 自然 / 文化场景；种子数据用**区域类型模板**（江南水乡、西南梯田、华北河谷、徽州山地、西北丹霞、岭南墟市、东北林乡、巴蜀古镇），不绑定单一城市景点库。历史「山东沿海七市」叙事已退出。
- 页脚署名：中北大学软件学院 · 乡旅e模式（Landing 与 App 一致）。

## Wave 1 范围

**In**：注册 / 登录 / 登出；按计划天数、兴趣主题、规划风格筛选路线；路线结果与详情（概述、每日安排、餐饮 / 住宿 / 参考成本）；关键词搜索（仅路线）；用户反馈；个人资料（演示增强）。

**Out**：AI 对话、电商 / 预订 / 支付、地图全屏、管理后台、APP；Spark / MongoDB / TensorFlow Serving 等竞赛远景不进 MVP。

## 枚举与视觉

| 项 | 取值 |
|---|---|
| 计划天数 | 1-2 · 3-5 · 6-7 天 |
| 兴趣主题 | 文化体验 · 自然观光 · 亲子休闲 · 乡村旅游 |
| 规划风格 | 经济型 · 舒适型 · 豪华型 |
| 主色 | 海洋蓝 `#0077BE` / `#00B4D8`（不用旧原型山地绿） |

## 鉴权与演示口径

- 演示账号 `admin` / `123456`（写死在 `frontend/app/js/auth.js`，本地 localStorage 鉴权 + 自制 hash，**仅演示**）。
- 需登录：`profile.html`；演示可免登录：智能推荐 / 搜索 / 路线详情；免登：首页 / 登录 / 注册 / 反馈。正式版接后端后再收紧。
- 密钥不入库：数据库密码、JWT Secret、第三方 Key 仅环境变量或本地配置。

## 技术栈（ADR-0002 规划，未实施）

后端 Python 3 + Flask + Flask-SQLAlchemy + Flask-Bcrypt + SQLite（开发库），REST JSON API；前端 HTML / CSS / JavaScript，通过 API 通信；AI（Wave 2）为百度文心一言 API。换栈须新 ADR。

## 文档与资产结构

| 路径 | 内容 |
|---|---|
| `docs/adr/` | 0000 采用 ADR · 0001 图片只放 assets/ · 0002 技术栈基线 |
| `docs/knowledge/mvp-product-spec.md` | MVP 与产品规划核对清单（验收真相源） |
| `docs/knowledge/reference-from-backup.md` | 旧实现参考的沉淀记录（历史） |
| `docs/contexts/{frontend,backend}/CONTEXT.md` | 分端约定 |
| `docs/output/reports/` | mvp-platform PRD（approved）· ui-prototype brief · readme-diagrams 状态 |
| `docs/source/` | 竞赛原始材料（项目书 / PPT / 手册）：**本地保留、不再入库**，已入 .gitignore；`docs/README.md`、`docs/agents/`、`docs/history/` 等流程件已于本次治理移除，有效导航并入本文件 |

## Backlog

- `docs/source/` 移出仓库或转 Git LFS；.git 历史瘦身（需主控执行 git 操作）。
- `assets/readme/*.png` 压缩（README 引用资产，暂保留）。
- Landing `main.js` 内置 ROUTES 与 `frontend/app/js/data.js` 双数据源合并。
- 后端 Flask 脚手架 + 数据模型落地（对齐 mvp-spec §4）；Wave 2：文心一言 API、SEO。
- 搜索页筛选按钮（智能排序 / 天数 / 主题）目前为静态占位，可接真筛选。

## 待确认项

- 反馈页正式版是否强制登录（演示现状：不强制）。
- 正式鉴权 Session vs JWT。
- 页脚署名口径：mvp-spec 曾裁定「不用中北大学」，当前实现为「中北大学软件学院 · 乡旅e模式」，两处需统一。
