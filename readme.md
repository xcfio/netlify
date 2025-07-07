# Netlify Fastify Serverless Starter

A minimal Fastify server template for deploying serverless APIs on Netlify.

## Features

-   ⚡️ Fastify for high-performance HTTP APIs
-   🚀 Deployable as a Netlify Function
-   🛠 TypeScript support
-   🔒 Environment variable typings

## Getting Started

### Clone the Template

You can quickly scaffold a new project using [`degit`](https://github.com/Rich-Harris/degit):

```sh
pnpx degit https://github.com/xcfio/netlify my-netlify-app
cd my-netlify-app
pnpm install
```

### Development

To run the Fastify server locally:

```sh
pnpm dev
```

### Deploy to Netlify

Push your repository to GitHub and connect it to Netlify. Netlify will automatically detect the function in `netlify/functions/api.ts`.

## Project Structure

```
.
├── netlify/
│   └── functions/
│       └── api.ts         # Netlify Function entrypoint
├── src/
│   ├── index.ts           # Fastify server definition
│   └── type.ts            # TypeScript environment variable typings
├── package.json
├── tsconfig.json
└── readme.md
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

-   `SECRET`

## License

[MIT](LICENSE)
