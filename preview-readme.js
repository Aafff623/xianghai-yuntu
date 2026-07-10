(function () {
  const cfg = window.__PREVIEW_README__ || {
    readmeFile: 'README.md',
    pageLang: 'zh-CN',
    title: '乡海云途 — README Preview',
    toolbarTitle: '乡海云途 · README Preview',
    hint: '本地预览 <code>README.md</code>，改完点「重新加载」即可，无需频繁 commit',
    reloadLabel: '重新加载 README',
    openLabel: '打开 README.md',
    loading: '正在加载 README…',
    loadedPrefix: '已加载',
    fileProtocolError:
      '请用本地 HTTP 服务打开（file:// 无法 fetch README）。在仓库根目录执行：python -m http.server 8080，然后访问 http://localhost:8080/preview-readme.html',
    fetchError: '加载失败：',
    footerNote:
      '预览页：preview-readme.html · 配图：assets/readme/ · 裂图多为文件尚未生成或未 push。',
  };

  document.documentElement.lang = cfg.pageLang;
  document.title = cfg.title;

  const contentEl = document.getElementById('content');
  const statusEl = document.getElementById('status');
  const reloadBtn = document.getElementById('reload-btn');
  const toolbarTitle = document.getElementById('toolbar-title');
  const toolbarHint = document.getElementById('toolbar-hint');
  const openLink = document.getElementById('open-readme-link');
  const footerNote = document.getElementById('footer-note');

  if (toolbarTitle) toolbarTitle.textContent = cfg.toolbarTitle;
  if (toolbarHint) toolbarHint.innerHTML = cfg.hint;
  if (reloadBtn) reloadBtn.textContent = cfg.reloadLabel;
  if (openLink) {
    openLink.href = './' + cfg.readmeFile;
    openLink.textContent = cfg.openLabel;
  }
  if (footerNote) footerNote.textContent = cfg.footerNote;

  marked.setOptions({ gfm: true, breaks: false });

  function setStatus(type, message) {
    statusEl.className = 'status ' + type;
    statusEl.textContent = message;
  }

  async function loadReadme() {
    if (location.protocol === 'file:') {
      setStatus('error', cfg.fileProtocolError);
      contentEl.innerHTML =
        '<p>无法在 <code>file://</code> 下加载 README，请先启动本地 HTTP 服务。</p>';
      return;
    }

    setStatus('ok', cfg.loading);
    reloadBtn.disabled = true;

    try {
      const res = await fetch('./' + cfg.readmeFile + '?ts=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const md = await res.text();
      contentEl.innerHTML = marked.parse(md);
      const locale = cfg.pageLang.startsWith('zh') ? 'zh-CN' : 'en-US';
      setStatus('ok', cfg.loadedPrefix + ' ' + cfg.readmeFile + ' · ' + new Date().toLocaleString(locale));
    } catch (err) {
      setStatus('error', cfg.fetchError + ' ' + err.message);
      contentEl.innerHTML =
        '<p>无法读取 <code>' + cfg.readmeFile + '</code>，请确认已在仓库根目录启动 HTTP 服务。</p>';
    } finally {
      reloadBtn.disabled = false;
    }
  }

  reloadBtn.addEventListener('click', loadReadme);
  loadReadme();
})();
