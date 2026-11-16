# Dec Gavin — personal website (Version 7)

Upload the **contents** of this folder to the root of your GitHub Pages repository (`declang1505.github.io`). Keep the `projects` directory intact.

## Project archive

- `/` — homepage, showing the three latest *published* records
- `/projects/` — project archive with All / University / Personal filters
- `/projects/project.html?id=...` — project details, including status, topics, tools, dates and external links

The data is in `projects/data.js`. Add a project by duplicating a record, changing its unique `id`, and filling in the fields. Set `published` to `true` when ready. Use `sort` as `YYYYMMDD` to control the newest-three order. Image filenames can be placed in `/projects/images/` and referenced via `image: "images/photo.jpg"`. Images are optional.

**Notion migration status:** The original Notion gallery could not be read automatically. One known entry (Arduino UNO R3 clone case) and the three completed university projects are populated. Two **unpublished** placeholder records are present for the other Notion entries, so the public website does not present invented content. The Arduino entry's original Printables URL has not been provided, so its external link is not yet populated. Dates for university projects are currently year-only; sort order is provisional.

Projects can be updated by editing `projects/data.js`; no frameworks, builds or subscriptions required. The pages also work when opened directly as local files.
