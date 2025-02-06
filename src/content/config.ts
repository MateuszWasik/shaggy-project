import { defineCollection, z } from 'astro:content';

const sectionSchema = z.object({
    imageSrc: z.string(),
    text: z.string(),
});

const pageCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        heroText: z.string(),
        sections: z.array(z.object({
            type: z.string(),
            contentFile: z.string(),
        })),
    }),
});

const sectionCollection = defineCollection({
    schema: sectionSchema,
});

export const collections = {
    pages: pageCollection,
    sections: sectionCollection,
};
