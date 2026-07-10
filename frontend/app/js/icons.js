/** 内联 SVG 指标图标 */
window.XLYIcons = {
  flame: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c2 3 1 5 1 5s3-1 4 2c1 3-1 6-5 8-4-2-6-5-5-8 1-3 4-2 4-2s-1-2 1-5z"/></svg>`,
  star: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z"/></svg>`,
  heart: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z"/></svg>`,
  chart: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/></svg>`,
  pin: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>`,
  spark: `<svg class="stat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  statsHTML(r) {
    const score = window.XLYData ? XLYData.rankScore(r).toFixed(1) : "—";
    return `<div class="stats-row">
      <span class="stat-pill">${this.flame}<em>热度</em><strong>${r.popularity}</strong></span>
      <span class="stat-pill">${this.star}<em>评分</em><strong>${r.rating}</strong></span>
      <span class="stat-pill">${this.heart}<em>点赞</em><strong>${r.likes}</strong></span>
      <span class="stat-pill stat-pill--accent">${this.chart}<em>综合</em><strong>${score}</strong></span>
    </div>`;
  },
  tagsHTML(r) {
    const region = r.region_tag
      ? `<span class="tag tag--region">${this.pin}<i>${r.region_tag}</i></span>`
      : "";
    const hots = (r.hot_tags || [])
      .map((t) => `<span class="tag tag--hot">${this.spark}<i>${t}</i></span>`)
      .join("");
    const base = [
      `<span class="tag">${r.days}天</span>`,
      `<span class="tag">${r.route_type}</span>`,
      `<span class="tag">${r.budget_level}</span>`,
    ].join("");
    return `<div class="tags">${base}${region}${hots}</div>`;
  },
};
