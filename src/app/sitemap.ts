import { MetadataRoute } from "next";

export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://datacooking.net";

    const routes = [
        "/",
        "/services",
        "/products",
        "/what-we-do",
        "/how-we-work",
        "/contact",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));
}
