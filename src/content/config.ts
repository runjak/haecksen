import { z, defineCollection } from "astro:content";

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const slideCollection = defineCollection({
  type: "content",
  schema: z.object({ slideSet: z.string() }),
});

export const collections = {
  events: eventCollection,
  slides: slideCollection,
};
