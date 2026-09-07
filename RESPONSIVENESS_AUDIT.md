# Tablet and mobile responsiveness audit

## Scope and result

**Result: responsive checks pass after the fixes below.** No remaining blockers were found in the tested scope.

- Environment: local Vite production preview at `http://127.0.0.1:4174`.
- Pages: `/en` and `/es`, including the product explorer, profile, books, career, navigation, and footer.
- Engines: Chrome and WebKit, with browser-emulated touch input and viewport sizes. These are not physical-device results.
- Design reference: `DESIGN.md`.

## Findings and changes

| Priority | Confirmed finding | Change | Result |
| --- | --- | --- | --- |
| Medium | Labels, project domains, book categories, career tags, and footer text dropped to 8–9px. | Raised functional utility text to at least 11px, navigation to 12px, and body copy to at least 14px. Removed breakpoint rules that shrank this text again. Decorative chip microprint is excluded. | Pass |
| Medium | At 390px, the English Books target was 30×44px and Profile was 42×44px. The home wordmark was 43px tall. | Added the shared `touch-target` token and minimum hit areas of 44×44px. The visible glyphs do not need to fill the target. | Pass |
| Medium | Selecting a product on a phone updated a heading below the visible screen. This also occurred in landscape. | Added a named “View [product] details” link on stacked layouts. It uses the existing native anchor behavior and focuses the inspector when followed. | Addressed; verified with touch and keyboard |
| Medium | With web fonts blocked, tablet widths of 768px and 1024px overflowed by approximately 29px and 27px. The English footer also overflowed at 320px. Some product and principle labels exceeded their containers. | Let the decorative hero arrow shrink. Let long product names and footer headings wrap. Made the narrow-screen principle columns fluid. No overflow-hiding workaround was added. | Pass |
| Low | At 414px, the highlighted biography phrase exceeded its paragraph by 3px. | Removed the cloned inline highlight padding while retaining the highlight color. | Pass |

The 44px touch target is a usability standard for this project, not a claim that every smaller target violated WCAG AA. Likewise, the text-size changes improve readability; WCAG does not prescribe a universal minimum font size.

The inspector intentionally stays below the circuit on stacked layouts. Selecting a radio does not force scrolling. The explicit details link provides the next step.

## Verification

### Layout sweep

Checked 29 widths in both languages: 320, 360, 375, 390, 414, 430, 519, 520, 521, 600, 699, 700, 701, 744, 768, 810, 820, 834, 899, 900, 901, 999, 1000, 1001, 1024, 1100, 1101, 1180, and 1366px.

This includes widths immediately on either side of the main breakpoints. Across the 58 viewport/language cases after the fixes:

- No page or tested text-container overflow.
- No interactive hit areas below 44×44px.
- No functional labels below the documented minimum.

### Touch and orientation

Tested these portrait sizes and their landscape equivalents in both languages and engines:

- 320×568
- 375×667
- 390×664
- 393×851
- 600×900
- 768×1024
- 834×1194
- 1024×1366

The 64 browser/orientation/language cases verify:

- Touch selection and project state retention during rotation.
- Correct selected-product details and navigation.
- Explicit details-link scrolling and focus placement.
- Single-tap product and book link activation.
- No mobile viewport auto-shrinking to conceal horizontal overflow.
- Automated axe checks for applicable WCAG A/AA rules.

### Additional checks

- All six project states, section anchors, language switching, browser history, book images, skip navigation, and reduced motion pass the existing regression checks.
- Keyboard flow passes in both engines: radio selection → details link → inspector → selected external action. WebKit uses Option+Tab for native link navigation.
- Both languages fit at 320, 390, 768, 1024, and 1366px with all web fonts blocked in both engines.
- Circuit-node hit areas do not overlap in the additional normal/fallback-font sweep.
- `npm run build`, design-system lint, and `git diff --check` pass.

## Limits and follow-up

- Physical iPhone, Android, and iPad testing remains recommended, particularly browser toolbars, safe areas, pinch zoom, and OS text enlargement.
- Screen-reader output was not manually tested. Automated accessibility checks are not a complete conformance assessment.
- External destinations were intercepted during tap tests to verify the intended URL and single-tap behavior. Third-party uptime, login, and purchase flows were not audited.
- Production hosting/CDN behavior and field performance metrics were not audited.

Local QA scripts and before/after measurements are in `/tmp/mendozajesus-browser-qa/`. They are temporary artifacts, not a repository CI suite. Repeat the responsive checks after changes to fonts, translations, navigation, or the product explorer.
