# 乡海云途静态 UI 原型

基于已确认的视觉方向制作的纯 HTML / CSS / JavaScript 静态资产。页面不是截图背景，而是由可编辑的布局、卡片、表单、路线时间轴和本地素材组合实现。

## 快速预览

直接打开 `index.html`，或运行：

```bash
./start-server.sh
# 浏览器访问 http://localhost:8080
```

Windows 可双击 `start-server.bat`。

## 页面

- `index.html`：首页 / 智能推荐入口
- `login.html`：登录
- `register.html`：注册
- `smart-search.html`：智能推荐结果
- `smart-search-empty.html`：推荐空状态
- `search.html`：关键词搜索结果
- `route-detail.html`：路线详情
- `feedback.html`：反馈

## 目录说明

- `assets/css/styles.css`：整套设计系统与响应式布局
- `assets/js/app.js`：Toast、表单跳转、搜索演示交互
- `assets/icons/`：可编辑 SVG Logo 与装饰
- `assets/images/`：页面实际使用的本地图片
- `assets/reference/`：已确认的高保真参考图
- `previews/`：真实浏览器渲染截图

这是静态 UI 原型，不连接后端 API。
