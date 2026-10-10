import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://xhookahstore.com/sitemap.xml",
    host: "https://xhookahstore.com",
  };
}
