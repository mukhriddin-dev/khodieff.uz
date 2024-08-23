import { z, defineCollection } from "astro:content";

const episodeSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    episode: z.number().optional(),
    season: z.number().optional(),
    episodeType: z.string().optional(),
    duration: z.coerce.string().optional(), 
    size: z.number(), 
});


const postSchema = z.object({
    title: z.string(),
    audioUrl: z.string(),
    pubDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    explicit: z.boolean().optional(),
    episode: z.number().optional(),
    season: z.number().optional(),
    episodeType: z.string().optional(),
    duration: z.coerce.string().optional(), 
    size: z.number(), 
});

export type episodeSchema = z.infer<typeof episodeSchema>;
export type postSchema = z.infer<typeof postSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });
const postCollection = defineCollection({ schema: postSchema });

export const collections = {
    'episode': episodeCollection,
    'posts': postCollection
}