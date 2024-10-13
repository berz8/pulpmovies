# PulpMovies Monorepo 

This is the official PulpMovies monorepo based on Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `api`: a [ElysiaJS](https://elysiajs.com/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Develop

To develop all apps and packages, run the following command:

```
cd pulpmovies 
bun dev
```
