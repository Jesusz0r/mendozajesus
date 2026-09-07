---
name: Mendoza Workbench
colors:
  background: "#e9ede7"
  foreground: "#182b28"
  primary: "#244be8"
  accent: "#244be8"
  signal: "#efff6a"
  muted-foreground: "#586b65"
  border: "#aebdb4"
typography:
  display:
    fontFamily: Teko
    fontWeight: 500
    lineHeight: 0.9
  body:
    fontFamily: DM Sans
    fontWeight: 400
    lineHeight: 1.65
  utility:
    fontFamily: IBM Plex Mono
    fontWeight: 400
    lineHeight: 1.5
---

# Mendoza Workbench

## Direction
A software engineer’s working apparatus, not a wellness retreat, a generic SaaS page, or a pretend terminal. The audience is collaborators, engineering teams, and readers. The job is to let them inspect Jesús Mendoza’s actual products, technical writing, and career.

The signature is a functioning circuit-map product explorer. A central JM package connects to six real products. Selecting a node highlights its trace and changes the adjacent inspector. The links open the actual products. These are authorship connections, not claims about dependencies between products.

The industrial type and equipment-like construction reference the interfaces, logistics, finance, and production systems in Jesús’s background. A cobalt casing surrounds a drafting-paper work surface. Books are presented as technical manuals. Career entries form a chronological route from Madrid to Mexico City.

## Palette
- `background` / Drafting paper: #e9ede7
- `foreground` / Carbon: #182b28
- `accent` and `primary` / Cobalt: #244be8
- `signal` / Highlighter: #efff6a
- `muted-foreground` / Graphite: #586b65
- `border` / Construction line: #aebdb4

All CSS and inline SVG colors reference these tokens. `secondary` is a mix of 92% Paper and 8% Carbon. Inverse sections use Paper text on Carbon or Cobalt; their local muted and rule colors derive from Paper. Highlighter marks active controls and short points of emphasis. Do not use it as small text on Paper. Book covers keep their original colors.

No lavender, serif italics, floating landscapes, soft halos, glass panels, or decorative gradients. Shadows are short, hard construction offsets. Dot grids and orthogonal traces belong to the product map, not every surface.

## Typography
- `font-display`: locally hosted Teko, weight 500. Condensed uppercase display typography recalls equipment labels and shipping marks. The opening name is 100–218px on desktop and 82–120px on phones. Section titles are 54–96px.
- `font-sans`: locally hosted DM Sans. Body text is 14–17px with a 1.65 line height.
- `font-mono`: locally hosted IBM Plex Mono, regular. Labels, dates, and domains are at least 11px. Navigation is 12px. Responsive rules do not reduce functional labels below 11px or body copy below 14px. The decorative JM package may use smaller microprint; it contains no unique information and stays hidden from assistive technology. Never invent logs, commands, telemetry, or status values as decoration.
- Text must fit when fonts are delayed or unavailable. The nameplate arrow can shrink, long product names and footer headings can wrap, and profile principle columns are fluid on phones.

## Layout
- `content-width`: 1280px.
- `page-gutter`: fluid 20–56px.
- `section-space`: fluid 72–112px.
- `touch-target`: 44px minimum width and height for interactive targets. A smaller icon or label must sit inside this larger hit area.
- Header: a square JM wordmark, section destinations, and an explicit language switch.
- Opening: a full-width typographic nameplate on Cobalt, a brief profile statement, and the working product explorer. This replaces the decorative hero and separate project directory.
- Workbench: Paper toolbar; a circuit map beside a Carbon inspector. Radio controls provide native keyboard selection. Below 1000px, the inspector moves below the map. On narrow phones, the same nodes become a two-column selector without the decorative wiring.
- Profile: an asymmetric dossier with a short biography, engineering principles, and the existing tools.
- Books: two columns of technical-manual records. Each record contains one external link, a real cover, a title, a description, and existing publication metadata. Reflow to one column on tablets and stack the cover above the text on narrow phones.
- Career: four connected entries, oldest to newest. The route becomes vertical below 900px.
- Footer: a Highlighter surface with Carbon text, a direct invitation to build, existing social links, and a return-to-top control.

## Components
- `wordmark`: square, typographic JM mark. No decorative arch.
- `workbench`: one canonical product explorer. Project data stays in `LiveProjects`; there is no second project list or separate project detail implementation.
- `project-node`: native radio input with an equipment-label surface. Selected nodes use Cobalt. Keyboard focus has a distinct outline.
- `connection-map`: decorative SVG paths derived from each node’s coordinates. Selection draws only the selected trace.
- `project-inspector`: the selected product’s category, description, domain, and external action. Announce detail changes politely without moving focus. When the inspector stacks below the map, show a native link labelled with the selected product’s name. This link takes the user to the details and moves focus to the inspector. Do not scroll or move focus just because a radio selection changes.
- `action-link`: rectangular action with an arrow and a hard offset hover state. No pill buttons.
- `book-link`: manual record with original artwork, an index tab, and an explicit Gumroad action. No floating covers.
- `experience-list`: a chronological connected rail with dates, companies, locations, roles, and tools. Only the actual current job gets a current label.

## Motion and access
Motion responds to actual input: a short trace-draw on selection and small control hover offsets. Nothing loops indefinitely. Do not hide content behind entrance animations. Keep native scrolling, all section links, a skip link, semantic headings, contrast, and visible focus. Respect reduced motion. The map is optional to understanding the page and never requires dragging, sound, hover, or a keyboard shortcut. All controls work on touch screens and at 320px width.
