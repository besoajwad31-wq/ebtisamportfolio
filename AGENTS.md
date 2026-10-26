<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All portfolio copy lives in `src/content/` (site.ts, projects.ts); routes and components only render it, so facts are edited in one place.
- Add a project by appending to `projects` in `src/content/projects.ts`; `/projects/$slug` renders any entry, no new route needed.
- Project images and the resume PDF are CDN assets referenced via `.asset.json` pointers in `src/assets/`.
- `src/test/content-rules.test.ts` guards the naming rule for the major; run `bunx vitest run` after copy changes.
