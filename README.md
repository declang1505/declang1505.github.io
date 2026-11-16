# Dec Gavin — Website V10

This version integrates the **three exported Notion projects** plus the three existing completed university projects.

## Publishing to GitHub Pages
Upload the **contents of this folder** into the root of `declang1505.github.io`, preserving the `/projects/` directory and its `/projects/images/` directory.

## Project management
All public project information is in `projects/data.js`. Edit that file to update tags, tools, dates, statuses, descriptions, and Printables links. `published: true` makes a project public. The homepage automatically displays the latest three entries using their `sort` values; `/projects/` offers All / University / Personal filters. University dates remain year-level where the specific date is not known; their sort values are deliberately behind dated Notion entries.

Photos from the Notion export are optimised as `.webp` in `projects/images/`; they are real project photographs and CAD screenshots, not illustrations. The detailed pages preserve the Notion section headings and text. A blank, unpublished Notion template was excluded.

The third personal project is **In progress**, as in the export; it is not represented as completed.

No framework, build tools, Notion API, or paid subscription is needed.

## V9 updates
- The **Currently / Up next** card links to LinkedIn and names the **Technical Engineering Graduate Scheme** at the Submarine Delivery Agency. This is the title on the official SDA graduate scheme page; it deliberately does not imply the role has started.
- Removed the separate Get in touch panel. Contact icons remain in the header.
- Where original photography is present, archive cards display a full-width cover photo above the metadata. University projects and the Xperia teardown have no image yet, so no placeholder or stock image has been invented. To add photos, put optimized assets in `projects/images/` and set each record's `image` value in `projects/data.js`.

## V10 updates
- Removed the cartoon portrait and condensed the hero.
- Combined the About text and Currently information in the left card. Up next remains a separate LinkedIn-linked card without artificially stretching About.
- Added The Silent Deep by Peter Hennessy and James Jinks to the Currently reading section; both books link to Amazon.
- Removed the now-unused memoji.png from this distribution.


V11: Improved mobile vertical spacing. Homepage latest project cards are embedded in HTML as a progressive-enhancement fallback, and continue to be dynamically refreshed from projects/data.js when JavaScript runs.


V12: Fixed mobile horizontal gutter disappearing on homepage sections. The `.section` padding shorthand was overriding the `.wrap` left/right padding; replaced with `padding-block` on all HTML pages.
