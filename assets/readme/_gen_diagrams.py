# -*- coding: utf-8 -*-
"""Generate README diagram SVGs (architecture + workflow)."""
from pathlib import Path

OUT = Path(__file__).resolve().parent

ARCH = r'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" role="img" aria-label="System architecture">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fafb"/><stop offset="1" stop-color="#eef5f8"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0b4f78"/><stop offset="1" stop-color="#147d9b"/></linearGradient>
  <filter id="s" x="-5%" y="-5%" width="110%" height="120%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0a3553" flood-opacity="0.1"/></filter>
  <marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a6eae"/></marker>
</defs>
<rect width="960" height="520" fill="url(#bg)"/>
<text x="48" y="48" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="22" font-weight="700" fill="#0a3553">XiangLv eMode · Architecture</text>
<text x="48" y="74" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#5e7482">Static frontend demo · planned Flask REST + SQLite · assets/ brand media</text>
<g filter="url(#s)">
  <rect x="48" y="110" width="260" height="340" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="48" y="110" width="260" height="44" rx="16" fill="url(#sea)"/>
  <rect x="48" y="138" width="260" height="16" fill="url(#sea)"/>
  <text x="68" y="138" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="15" font-weight="700" fill="#fff">frontend/</text>
  <text x="68" y="180" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#0a3553" font-weight="600">Landing · marketing</text>
  <text x="68" y="208" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">Hero / demo / feedback</text>
  <text x="68" y="248" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#0a3553" font-weight="600">App · product pages</text>
  <text x="68" y="276" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">Smart recommend</text>
  <text x="68" y="296" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">Search · route detail</text>
  <text x="68" y="316" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">Auth · profile · feedback</text>
  <text x="68" y="360" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#0a6eae">HTML / CSS / JS</text>
  <text x="68" y="382" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#0a6eae">localStorage auth demo</text>
  <text x="68" y="404" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#0a6eae">Markdown detail render</text>
</g>
<path d="M330 280 H380" stroke="#0a6eae" stroke-width="2.5" fill="none" marker-end="url(#m)"/>
<g filter="url(#s)">
  <rect x="400" y="110" width="260" height="340" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="400" y="110" width="260" height="44" rx="16" fill="#0a3553"/>
  <rect x="400" y="138" width="260" height="16" fill="#0a3553"/>
  <text x="420" y="138" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="15" font-weight="700" fill="#fff">backend/ (planned)</text>
  <text x="420" y="190" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#0a3553" font-weight="600">Flask REST API</text>
  <text x="420" y="218" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">/auth · /routes · /search</text>
  <text x="420" y="238" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">/recommend · /feedback</text>
  <text x="420" y="278" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#0a3553" font-weight="600">SQLAlchemy · Bcrypt</text>
  <text x="420" y="306" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">Session / JWT TBD</text>
  <text x="420" y="346" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="13" fill="#0a3553" font-weight="600">Rule matching</text>
  <text x="420" y="374" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">days · theme · budget</text>
  <text x="420" y="410" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="11" fill="#c47845">Wave 2: ERNIE Bot API</text>
</g>
<path d="M682 280 H732" stroke="#0a6eae" stroke-width="2.5" fill="none" marker-end="url(#m)"/>
<g filter="url(#s)">
  <rect x="750" y="160" width="170" height="220" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="750" y="160" width="170" height="40" rx="16" fill="#147d9b"/>
  <rect x="750" y="184" width="170" height="16" fill="#147d9b"/>
  <text x="768" y="186" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="14" font-weight="700" fill="#fff">Data</text>
  <text x="768" y="230" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#0a3553" font-weight="600">SQLite (planned)</text>
  <text x="768" y="258" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">users · routes</text>
  <text x="768" y="278" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">feedback</text>
  <text x="768" y="318" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#0a3553" font-weight="600">Current demo</text>
  <text x="768" y="342" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">js/data.js seeds</text>
  <text x="768" y="362" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="12" fill="#5e7482">localStorage</text>
</g>
<text x="48" y="490" font-family="Segoe UI, Microsoft YaHei, sans-serif" font-size="11" fill="#8a9eab">assets/ media · docs/ specs &amp; ADRs · no secrets in repo</text>
</svg>
'''

# Chinese labels version for README display
ARCH_CN = r'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" role="img" aria-label="乡旅e模式系统架构">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fafb"/><stop offset="1" stop-color="#eef5f8"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#0b4f78"/><stop offset="1" stop-color="#147d9b"/></linearGradient>
  <filter id="s" x="-5%" y="-5%" width="110%" height="120%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0a3553" flood-opacity="0.1"/></filter>
  <marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a6eae"/></marker>
</defs>
<rect width="960" height="540" fill="url(#bg)"/>
<text x="48" y="46" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="24" font-weight="700" fill="#0a3553">乡旅e模式 · 系统架构</text>
<text x="48" y="74" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#5e7482">静态前端演示 · 规划中 Flask REST + SQLite · assets 统一媒体</text>
<g filter="url(#s)">
  <rect x="48" y="110" width="260" height="360" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="48" y="110" width="260" height="48" rx="16" fill="url(#sea)"/>
  <rect x="48" y="142" width="260" height="16" fill="url(#sea)"/>
  <text x="68" y="142" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#fff">frontend/</text>
  <text x="68" y="190" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" fill="#0a3553" font-weight="600">Landing 营销落地页</text>
  <text x="68" y="218" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">Hero / 推荐演示 / 反馈</text>
  <text x="68" y="258" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" fill="#0a3553" font-weight="600">App 功能页</text>
  <text x="68" y="286" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">智能推荐 · 关键词搜索</text>
  <text x="68" y="306" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">路线详情 · 意见反馈</text>
  <text x="68" y="326" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">登录注册 · 个人资料</text>
  <text x="68" y="370" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#0a6eae">HTML / CSS / JavaScript</text>
  <text x="68" y="392" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#0a6eae">localStorage 鉴权演示</text>
  <text x="68" y="414" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#0a6eae">Markdown 行程文档</text>
  <text x="68" y="436" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#0a6eae">全国区域类型种子</text>
</g>
<path d="M330 290 H380" stroke="#0a6eae" stroke-width="2.5" fill="none" marker-end="url(#m)"/>
<g filter="url(#s)">
  <rect x="400" y="110" width="260" height="360" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="400" y="110" width="260" height="48" rx="16" fill="#0a3553"/>
  <rect x="400" y="142" width="260" height="16" fill="#0a3553"/>
  <text x="420" y="142" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#fff">backend/（规划）</text>
  <text x="420" y="195" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" fill="#0a3553" font-weight="600">Flask REST API</text>
  <text x="420" y="223" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">/auth · /routes · /search</text>
  <text x="420" y="243" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">/recommend · /feedback</text>
  <text x="420" y="285" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" fill="#0a3553" font-weight="600">SQLAlchemy · Bcrypt</text>
  <text x="420" y="313" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">Session / JWT（待定）</text>
  <text x="420" y="355" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" fill="#0a3553" font-weight="600">规则匹配引擎</text>
  <text x="420" y="383" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">天数 · 主题 · 风格</text>
  <text x="420" y="420" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#c47845">Wave 2：文心一言 API</text>
</g>
<path d="M682 290 H732" stroke="#0a6eae" stroke-width="2.5" fill="none" marker-end="url(#m)"/>
<g filter="url(#s)">
  <rect x="750" y="160" width="170" height="240" rx="16" fill="#fff" stroke="#dce5e9"/>
  <rect x="750" y="160" width="170" height="44" rx="16" fill="#147d9b"/>
  <rect x="750" y="188" width="170" height="16" fill="#147d9b"/>
  <text x="768" y="190" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="15" font-weight="700" fill="#fff">数据层</text>
  <text x="768" y="240" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#0a3553" font-weight="600">SQLite（规划）</text>
  <text x="768" y="268" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">users · routes</text>
  <text x="768" y="288" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">feedback</text>
  <text x="768" y="330" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#0a3553" font-weight="600">当前演示</text>
  <text x="768" y="358" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">js/data.js 种子</text>
  <text x="768" y="378" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">localStorage</text>
</g>
<text x="48" y="510" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="11" fill="#8a9eab">assets/ 媒体 · docs/ 规格与 ADR · 密钥不入库</text>
</svg>
'''

FLOW = r'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 420" role="img" aria-label="用户主链路">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbfaf7"/><stop offset="1" stop-color="#f0f6f8"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b4f78"/><stop offset="1" stop-color="#147d9b"/></linearGradient>
  <filter id="s"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0a3553" flood-opacity="0.1"/></filter>
  <marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a6eae"/></marker>
</defs>
<rect width="980" height="420" fill="url(#bg)"/>
<text x="40" y="42" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#0a3553">乡旅e模式 · 用户主链路</text>
<text x="40" y="68" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#5e7482">Landing 认知 → 注册登录 → 三维筛选推荐 → 详情文档 → 反馈</text>
'''

# boxes for flow
steps = [
    (40, 120, "01 Landing", "营销认知", "主题场景 / 演示"),
    (200, 120, "02 注册登录", "admin / 123456", "演示账号可用"),
    (360, 120, "03 首页筛选", "天数·主题·风格", "热门标签可选"),
    (520, 120, "04 智能推荐", "排序结果卡片", "需登录"),
    (680, 120, "05 路线详情", "Markdown 行程", "餐饮住宿费用"),
    (840, 120, "06 反馈", "意见提交", "本地演示提示"),
]

# rewrite FLOW fully
parts = ['''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 420" role="img" aria-label="用户主链路">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbfaf7"/><stop offset="1" stop-color="#f0f6f8"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b4f78"/><stop offset="1" stop-color="#147d9b"/></linearGradient>
  <filter id="s"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0a3553" flood-opacity="0.1"/></filter>
  <marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0a6eae"/></marker>
</defs>
<rect width="980" height="420" fill="url(#bg)"/>
<text x="40" y="42" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#0a3553">乡旅e模式 · 用户主链路</text>
<text x="40" y="68" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#5e7482">Landing 认知 → 注册登录 → 三维筛选推荐 → 详情文档 → 反馈</text>
''']

for i, (x, y, t1, t2, t3) in enumerate(steps):
    parts.append(f'''<g filter="url(#s)">
  <rect x="{x}" y="{y}" width="130" height="150" rx="14" fill="#fff" stroke="#dce5e9"/>
  <rect x="{x}" y="{y}" width="130" height="8" rx="4" fill="url(#sea)"/>
  <text x="{x+14}" y="{y+42}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" font-weight="700" fill="#0a6eae">{t1}</text>
  <text x="{x+14}" y="{y+72}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="14" font-weight="700" fill="#0a3553">{t2}</text>
  <text x="{x+14}" y="{y+100}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="11" fill="#5e7482">{t3}</text>
</g>
''')
    if i < len(steps) - 1:
        x2 = x + 130
        parts.append(f'<path d="M{x2+4} {y+75} H{x2+26}" stroke="#0a6eae" stroke-width="2" fill="none" marker-end="url(#a)"/>\n')

parts.append('''
<rect x="40" y="310" width="900" height="70" rx="12" fill="#fff" stroke="#e4eaed"/>
<text x="60" y="342" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" font-weight="600" fill="#0a3553">旁路能力</text>
<text x="60" y="366" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="12" fill="#5e7482">顶栏关键词搜索 · 个人资料偏好 · 收藏（演示）· 返回 Landing 首页</text>
</svg>
''')

FEATURES = r'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 360" role="img" aria-label="核心功能模块">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fafb"/><stop offset="1" stop-color="#eef5f8"/></linearGradient>
  <filter id="s"><feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0a3553" flood-opacity="0.08"/></filter>
</defs>
<rect width="960" height="360" fill="url(#bg)"/>
<text x="40" y="44" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="22" font-weight="700" fill="#0a3553">核心功能模块 · Wave 1</text>
'''

feats = [
    (40, 80, "智能推荐", "天数 · 主题 · 风格\n软匹配排序"),
    (280, 80, "路线详情", "概述 · 日程\n餐饮住宿费用"),
    (520, 80, "关键词搜索", "全国区域模板\n模糊检索"),
    (760, 80, "账号与反馈", "注册登录资料\n意见提交演示"),
]
feat_parts = [FEATURES]
for x, y, title, body in feats:
    lines = body.split("\n")
    feat_parts.append(f'''<g filter="url(#s)">
  <rect x="{x}" y="{y}" width="200" height="200" rx="16" fill="#fff" stroke="#dce5e9"/>
  <circle cx="{x+36}" cy="{y+42}" r="14" fill="#0a6eae"/>
  <text x="{x+64}" y="{y+48}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#0a3553">{title}</text>
  <text x="{x+24}" y="{y+100}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#5e7482">{lines[0]}</text>
  <text x="{x+24}" y="{y+124}" font-family="Microsoft YaHei, Segoe UI, sans-serif" font-size="13" fill="#5e7482">{lines[1]}</text>
</g>
''')
feat_parts.append("</svg>\n")

(OUT / "architecture.svg").write_text(ARCH_CN, encoding="utf-8")
(OUT / "workflow.svg").write_text("".join(parts), encoding="utf-8")
(OUT / "features.svg").write_text("".join(feat_parts), encoding="utf-8")
# also write png-compatible names as svg aliases noted in readme
print("wrote", OUT / "architecture.svg")
print("wrote", OUT / "workflow.svg")
print("wrote", OUT / "features.svg")
