## Plan

### 1. Ministries section -- bidirectional scroll animations

Currently, the `useScrollAnimation` hook sets `isVisible` based on `IntersectionObserver.isIntersecting`, which already toggles both ways (true when entering, false when leaving). The `MinistryCard` component applies `translate-y-12 opacity-0` when not visible and `translate-y-0 opacity-100` when visible.

This means the cards should already animate in and out. However, the transition may feel abrupt on exit. Changes:

- **Ministries.tsx**: Change the exit animation from `translate-y-12` to `translate-y-16` for a more pronounced slide-out effect. Increase transition duration to `duration-1000` for smoother movement. Add `ease-in-out` for symmetrical enter/exit feel.
- Ensure each card individually tracks visibility (already the case via per-card `useScrollAnimation`).

### 2. SocialFeed section -- grid layout with rotating images

Replace the sticky stacking card effect with a responsive grid of cards where images cycle with a fade transition:

- **SocialFeed.tsx**: Remove the sticky stacking cards block entirely. Replace with a grid layout (e.g., `grid-cols-2 md:grid-cols-4`) showing 8 tiles.
- Each tile will cycle through a shuffled subset of images using `useState` + `setInterval` (similar to the Hero carousel), with staggered start times so they don't all change at once.
- Each tile fades between its current and next image using opacity transitions (`duration-[1500ms]`).
- Remove the mobile-only grid fallback since the new grid works for all screen sizes.

### Files changed

| File | Change |
|------|--------|
| `src/components/site/Ministries.tsx` | Adjust animation classes for smoother bidirectional slide |
| `src/components/site/SocialFeed.tsx` | Replace sticky cards with grid + rotating fade images |
