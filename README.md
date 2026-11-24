# Carmel Works

Portfolio site for [carmel.works](https://carmel.works), built with [Astro](https://astro.build).

## Development

```bash
pnpm install
pnpm dev      # start local dev server
pnpm check    # type-check and build
pnpm preview  # preview production build
```

## Adding a project

1. Put the app icon in `public/icons/` and an optional preview screenshot in `public/screenshots/`.
2. Add an entry to `projects` in `src/data/projects.ts`.

Projects without a `screenshot` automatically render a minimal icon stage. Category filter tabs and catalog numbers are generated automatically from `projects`.
