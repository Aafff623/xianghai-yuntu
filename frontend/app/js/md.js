/** 轻量 Markdown → HTML（标题/列表/引用/表格/粗体/段落） */
window.XLYMd = {
  render(src) {
    if (!src) return "";
    const lines = String(src).replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let i = 0;
    let inUl = false;
    let inTable = false;

    const flushUl = () => {
      if (inUl) {
        out.push("</ul>");
        inUl = false;
      }
    };
    const flushTable = () => {
      if (inTable) {
        out.push("</tbody></table>");
        inTable = false;
      }
    };

    const inline = (t) =>
      t
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>");

    while (i < lines.length) {
      const raw = lines[i];
      const line = raw.trimEnd();
      const trim = line.trim();

      if (!trim) {
        flushUl();
        flushTable();
        i++;
        continue;
      }

      // table
      if (trim.startsWith("|") && trim.endsWith("|")) {
        flushUl();
        const cells = trim
          .slice(1, -1)
          .split("|")
          .map((c) => c.trim());
        const next = (lines[i + 1] || "").trim();
        const isSep = /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(next);
        if (!inTable) {
          out.push('<table class="md-table"><thead><tr>');
          cells.forEach((c) => out.push(`<th>${inline(c)}</th>`));
          out.push("</tr></thead><tbody>");
          inTable = true;
          if (isSep) {
            i += 2;
            continue;
          }
        } else if (isSep) {
          i += 2;
          continue;
        } else {
          out.push("<tr>");
          cells.forEach((c) => out.push(`<td>${inline(c)}</td>`));
          out.push("</tr>");
        }
        i++;
        continue;
      } else {
        flushTable();
      }

      if (/^###\s+/.test(trim)) {
        flushUl();
        out.push(`<h3>${inline(trim.replace(/^###\s+/, ""))}</h3>`);
      } else if (/^##\s+/.test(trim)) {
        flushUl();
        out.push(`<h2>${inline(trim.replace(/^##\s+/, ""))}</h2>`);
      } else if (/^#\s+/.test(trim)) {
        flushUl();
        out.push(`<h1>${inline(trim.replace(/^#\s+/, ""))}</h1>`);
      } else if (/^>\s?/.test(trim)) {
        flushUl();
        out.push(`<blockquote>${inline(trim.replace(/^>\s?/, ""))}</blockquote>`);
      } else if (/^[-*]\s+/.test(trim)) {
        if (!inUl) {
          out.push("<ul>");
          inUl = true;
        }
        out.push(`<li>${inline(trim.replace(/^[-*]\s+/, ""))}</li>`);
      } else {
        flushUl();
        out.push(`<p>${inline(trim)}</p>`);
      }
      i++;
    }
    flushUl();
    flushTable();
    return out.join("\n");
  },
};
