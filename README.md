# PayAPI multi-page website

A solution to the [PayAPI multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e).

![](./screenshot.webp)

- Live site: https://payapi-multi-page-website.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/payapi-multi-page-website

## Built with

- Next.js (App Router, static export)
- React
- TypeScript
- Tailwind CSS

## Notes

**Every number came out of the design file, not a screenshot.** The `.fig` was parsed offline,
so each spacing value, type size, fill and corner radius is the design's own. The four pages
land within 2px of the design's total height at 375, 768 and 1440 — three of the twelve
measurements are exact.

**One container rule reproduces all three frames.** `max-w-297.5 px-6 md:px-10` gives 327 at
375, 688 at 768 and 1110 from 1190 up. The max-width carries the padding, which is the part
that is easy to get wrong: capping at the design's 1110 content width leaves 1030 once the
40px gutters are subtracted.

**Contrast was fixed by the minimum deviation that passes.** Seven of the design's ink/backdrop
pairs fail WCAG AA — the muted body copy at 3.57:1, the field underline at 2.32:1, the
unchecked checkbox at 1.48:1. Each was solved by holding hue and saturation and moving only
lightness until the ratio cleared, so the palette still reads as the original. The checkbox
also gained a 1px border, because a fill alone cannot carry a 3:1 boundary at that tone.

**The backdrop for that sum is the decoration, not the page.** The muted ink is measured
against the page tinted by the 15% disc behind it, `#d2dbe3`, not the bare `#edf3f8`; on the
home page the disc sits behind the hero line and, at 768, behind the whole header. An
automated audit cannot catch this — it reads background colour from ancestors, and the disc
is an absolutely-positioned sibling — so every text box overlapping a disc is composited and
scored directly. That is what puts the muted ink at `#51626f`: 4.50:1 over the disc, 5.64:1
off it.

**Availability in the pricing table is encoded twice.** An unavailable row is muted ink _and_
a check mark whose stroke opacity is zero — the design keeps the node and hides it. Rendering
that as colour alone would leave the state invisible to anyone who cannot see it, so the icon
is genuinely absent and each row carries visually-hidden "included" / "not included" text.

**Motion is CSS, with no animation library.** Section blocks rise on
`animation-timeline: view()` and the decorative discs drift, both behind
`prefers-reduced-motion: no-preference` and `@supports (animation-timeline: view())`, so a
browser without view timelines renders the finished state rather than a blank box. Nothing
animates on a hero, and the reveals move `translate` only — a fading `opacity` gets sampled
mid-range by an auditor and reads as a contrast failure.

**The statistics count once, on first sight.** A scroll-linked timeline is the wrong tool for
a counter: it runs the number backwards when you scroll up, and re-runs it every time the
block passes. So the count is an ordinary timed animation over a registered `@property` and a
CSS counter, armed by a one-shot `IntersectionObserver` that disconnects on its first hit.
Until it fires — and for anyone with JavaScript off or reduced motion on — the number renders
at its final value, so nothing is ever missing.

**The code sample's font is a 3.2 KB subset.** Roboto Mono is used for exactly one card, so
only the 39 glyphs that block needs are self-hosted, and it is not preloaded because the card
is below the fold on every breakpoint.

**Forms validate on the client and do not post anywhere.** Errors are derived during render so
they clear as you type, the first invalid control takes focus on submit, and the alert and
status regions are keyed so a repeated identical message is announced again rather than
swallowed.

**Known deviations from the design, all deliberate:**

- The hero phone sits 4px right of its drawn position. It is centred in the 445px column the
  rest of the layout uses, which is a rule rather than a one-off offset.
- The dark band's body copy wraps to six lines at 375px where the design shows five. The
  design's own text box is 327px wide and the string cannot fit five lines at that width, so
  the browser is right and the Figma box is stale.
- The tablet page labels the third About block "Our Business", duplicating the second. Desktop
  and mobile both say "The Culture", which is what ships.
- The tablet contact aside reads "Join thousands of innovators"; mobile and desktop both read
  "Join the thousands of innovators", which is what ships. Where the three frames disagree the
  majority wins, the same rule as the About label above.
- The contact form's Submit button sits 2px right of the form column in the desktop and tablet
  frames — x=167 where every field in the same column starts at x=165. It ships flush with the
  fields, since a 2px indent on one control is a stray nudge rather than a rule. Mobile already
  agrees at x=24.
- The mobile team photograph is a different picture in the supplied assets. It was replaced so
  that all three breakpoints show the same people.
- Social links point at `#`; the design specifies no destinations. The demo, access and submit
  buttons route to `/contact`, which is the only place the site can actually take an enquiry.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
