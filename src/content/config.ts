import { z, defineCollection, reference } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

const slideSets = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const slides = defineCollection({
  type: "content",
  schema: z.object({ slideSet: reference("slideSets") }),
});

export const collections = {
  events,
  slideSets,
  slides,
};
