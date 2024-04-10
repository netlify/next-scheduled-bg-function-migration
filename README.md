# Next.js Advanced API Routes to Netlify Functions migration example

## Migrating Next.js Advanced API Routes to Netlify Functions

### Scheduled Functions

- [Before (Next.js Advanced API Scheduled Route)](/pages/api/scheduled-function.ts)
- [After (Netlify Scheduled Function)](/netlify/functions/scheduled-function.ts)

### Background Functions

- [Before (Next.js Advanced API Background Route)](/pages/api/[slug]/background-function.ts)
- [After (Netlify Background Function)](/netlify/functions/function-background.ts)

_NOTE_: [Netlify background functions file or directory needs to end in `-background` suffix.](https://docs.netlify.com/functions/background-functions/#create-background-functions)

## Next.js APIs

If your scheduled or background functions workloads require access to Next.js APIs (for example for on-demand revalidation like `res.revalidate()`, `revalidatePath` or `revalidateTag`), you will need to author Next.js API route that are invoked from Netlify function. Keep in mind that Next.js API routes will have shorter execution time limit compare to Netlify background function so you might need to distribute workload and call Next.js API multiple times with smaller work payloads.

Examples of invoking Next.js API routes from Netlify function are added to both [Scheduled Function](/netlify/functions/scheduled-function.ts) and [Background Function](/netlify/functions/function-background.ts) examples.
