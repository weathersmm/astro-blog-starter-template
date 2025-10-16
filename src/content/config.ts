import { defineCollection, z } from 'astro:content';

// Define a content collection for products.
// Each product has a slug, name, tagline and audience to
// differentiate EMS vs enterprise offerings. Additional
// metadata like description, features and optional
// call‑to‑action fields are included to drive the
// corresponding pages in our InCheck site.
const product = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    tagline: z.string(),
    audience: z.array(z.enum(['ems', 'enterprise'])),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    ),
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
    cta: z
      .object({
        label: z.string(),
        href: z.string(),
      })
      .optional(),
    hero: z
      .object({
        title: z.string(),
        sub: z.string(),
      })
      .optional(),
  }),
});

export const collections = { product };