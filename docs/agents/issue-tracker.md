# Issue tracker: GitHub（待绑定）

本仓库的 issue 和 PRD 以 GitHub issue 的形式存在。绑定 remote 后，所有操作通过 `gh` CLI 进行。

**当前状态**：`coding-dev/` 尚未初始化 Git 仓库与 remote。init 阶段可在 `docs/output/` 本地维护 PRD / handoff；绑定 GitHub 后按下列约定同步 Issue。

## 约定

- **创建 issue**：`gh issue create --title "..." --body "..."`
- **查看 issue**：`gh issue view <number> --comments`
- **列出 issue**：`gh issue list --state open`
- **评论 issue**：`gh issue comment <number> --body "..."`
- **添加 / 移除标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭 issue**：`gh issue close <number> --comment "..."`

## 与 docs/output 的映射

| Issue 角色 | 本地文档 |
|---|---|
| Epic（主题） | `docs/output/reports/{theme}/prd.md` |
| 子 Issue（任务） | `docs/output/handoff/{theme}/{task}.md` |
| 完结 | 物理移动至 `docs/output/{reports,handoff}/archive/{theme}/` |

任务流详见 [`workflow.md`](workflow.md)。
