This is the example of [@saleor/app-sdk](https://github.com/saleor/app-sdk) usage with a simple SPA based on Vite.js

## Usage

### With Saleor Platform

1. Run [Platform](https://github.com/saleor/saleor-platform) container
2. Serve app `pnpm run dev`
3. Install the app via `http://host.docker.internal:5173/register.json`. This allows connecting from docker container to host machine.

### With tunnel 

1. Access any Cloud Saleor instance.
2. Serve app `pnpm run dev`
3. Run tunnel and map it to the vite port (5173 by default).
4. Copy tunelled URL
5. Edit `/public/manifest.json` and set `tokenTargetUrl` to be `{{tunel address}}/register.json` and `appUrl` to be `{{tunnel address}}`
6. Install app with `{{tunnel address}}/manifest.json`

### Explainer

Since SPA do not have a backend layer:
- Manifest must be set statically or pre-built
- Registration workflow doesnt work (server side) -> json responds empty 200 with `{}`. App will not be able to save a token. Only frontend/client/dashboard logic will work
- Reason of this POC is to check if app-sdk works with other stack than next.js
