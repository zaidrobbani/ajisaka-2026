import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://ajisaka2026.com/",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: "https://ajisaka2026.com/home",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: "https://ajisaka2026.com/competition",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://ajisaka2026.com/lensa-ajisaka",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://ajisaka2026.com/about-us",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        }, 
        {
            url: "https://ajisaka2026.com/faq",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        }
    ]
}