# Deployment checklist

- Install dependencies with `pnpm install`.
- Copy `.env.example` to `.env.local` and set the required values.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` locally.
- Deploy to Vercel and configure the project domain.
- Set the `CONTACT_EMAIL_TO` secret if you want the contact form to send messages through an external service.
- Add analytics IDs in the environment if you want privacy-friendly tracking.
