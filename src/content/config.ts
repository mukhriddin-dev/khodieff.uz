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

const englishPostSchema = z.object({
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

const arabicPostSchema = z.object({
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
export type englishPostSchema = z.infer<typeof englishPostSchema>;
export type arabicPostSchema = z.infer<typeof arabicPostSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });
const postCollection = defineCollection({ schema: postSchema });
const englishPostCollection = defineCollection({ schema: englishPostSchema });
const arabicPostCollection = defineCollection({ schema: arabicPostSchema });

export const collections = {
    'episode': episodeCollection,
    'posts': postCollection,
    'english': englishPostCollection,
    'arabic': arabicPostCollection,
}