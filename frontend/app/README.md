# frontend/app — 功能页演示

乡旅e模式 Wave 1 功能演示（本地种子数据 + localStorage 鉴权）。

## 打开方式

直接打开 `index.html`，或：

```bash
# 在 coding-dev 根目录
python -m http.server 8765
# 浏览器访问 http://127.0.0.1:8765/frontend/app/
```

## 演示路径

1. 注册 → 登录  
2. 首页选「计划天数 / 兴趣主题 / 规划风格」→ 智能推荐  
3. 查看详细行程（每日安排 + 餐饮/住宿/费用）  
4. 顶栏关键词搜索（水乡 / 梯田 / 徽州 / 亲子 / 西北…）  
5. 提交反馈  

## 数据原则

全国区域类型模板，不锁单一城市景点库。见 `js/data.js`。

## 后续

接 `backend/` Flask REST（ADR-0002），替换 `auth.js` / `data.js` 本地实现。
