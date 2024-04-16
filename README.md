# Migrating Next.js Advanced API Routes to Netlify Functions

## Why do I need to do this?

Starting with [version 5](https://docs.netlify.com/frameworks/next-js/overview/) of Netlify's Next.js Runtime (applicable for Next.js 13.5+), 
support for background and scheduled functions implemented as Next.js API Routes (a.k.a. [Advanced API routes](https://docs.netlify.com/frameworks/next-js/runtime-v4/advanced-api-routes/)) is deprecated. 

Instead, use regular [background](https://docs.netlify.com/functions/background-functions/) or [scheduled](https://docs.netlify.com/functions/scheduled-functions/) Netlify Functions for the same purposes.

The main reason for dropping support is to improve robustness of the runtime: with v5, our goal is to simplify the runtime codebase as possible, and avoid adding or overriding functionality to built-in constructs of Next.js. This also allows us to focus on improving the core framework-agnostic features, which are applicable for all frameworks.

Here are annotated examples of advanced API routes and their framework-agnostic counterparts:

### Scheduled Functions

- [Before (Next.js Advanced API Scheduled Route)](/pages/api/scheduled-function.ts)
- [After (Netlify Scheduled Function)](/netlify/functions/scheduled-function.ts)

### Background Functions

- [Before (Next.js Advanced API Background Route)](/pages/api/[slug]/background-function.ts)
- [After (Netlify Background Function)](/netlify/functions/function-background.ts)

_NOTE_: [Netlify background functions file or directory needs to end in `-background` suffix.](https://docs.netlify.com/functions/background-functions/#create-background-functions)

## Using Next.js APIs

If your scheduled or background functions require access to Next.js APIs (e.g. on-demand revalidation via `revalidatePath` or `revalidateTag`), you will need to create a Next.js API route / Route Handler that is called from your Netlify function and has access to these APIs. 

The above examples both showcase this.
