# Fullstack Flashcard Apps With Turborepo

## Tech Stack

- Turborepo
- TypeScript
- Next.js
- GraphQL
- Prisma
- MySQL
- Jest
- Cypress
- Testing Library
- ESLint
- Prettier

## Dependencies

- `Node.js`: see .node-version
- `docker-compose`: for local development

## Get Started

Set up:

```bash
$ npm ci
$ npm run setup
```

Initialize database for `api`:

```bash
$ npm run db:local -w=api
$ npm run db:migrate:dev -w=api

# optional when getting prisma error
$ npm run db:client:gen -w=api

# optional to use dummy data
$ npm run db:seed -w=api
```

Run dev:

```bash
$ npm run dev
```

## Generating types for `api`

```bash
$ npm run codegen -w=api
```

## Testing

```bash
$ npm test
```
