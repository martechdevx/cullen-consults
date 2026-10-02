# Cullen Consults — Premium Ecommerce Growth Agency

React / Express / tRPC / Drizzle starter, adapted from the Sandbox web-db-user template.

- `pnpm dev`: development server; honors `PORT` (default 3000).
- `pnpm build` / `pnpm start`: build and serve `dist/index.js` and `dist/public/`.
- `pnpm db:migrate`: apply checked-in migrations. `pnpm db:push`: generate and apply new schema changes.
- `pnpm check` / `pnpm test`: types and application tests.

For SEO, set `VITE_SITE_URL` in the build environment to the chosen public HTTPS origin, with no path or trailing slash. The value is intentionally not tied to any domain. If it is unset or invalid, generated pages include `noindex`, omit canonical URLs, and contain an empty sitemap until a public origin is configured.

The contact form uses Web3Forms. Set `VITE_WEB3FORMS_ACCESS_KEY` to the Access Key created for the verified `cullenconsults@gmail.com` inbox in Web3Forms. Web3Forms documents this Access Key as public and intended for browser use; submissions are sent directly from the browser, so no sending domain or server mail credentials are required. Vite embeds `VITE_` values at build time, so set it in the root `.env` before `pnpm dev`, or in the deployment's build environment before rebuilding and redeploying.

Start with the Webdev skill's default-template guide. Platform login, storage, payments and service contracts live in its shared references; read the relevant capability before extending its helper.

`server/_core/publicConfig.ts` exposes only named public runtime values. Private keys stay server-side. The platform serves managed `/manus-storage/` assets; the application does not register a second proxy.

Platform configuration is readable and editable through `webdev.config`. Default settings are initial values, not enforced constraints. The agent may modify the files, commands and configuration or follow the flexible guide for another stack.
