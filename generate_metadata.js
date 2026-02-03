import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RSS from "rss";

const POSTS_DIR = path.join(process.cwd(), "src/posts");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SITE_URL = "https://fishers.blog";

async function generateMetadata() {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(source);
    return { ...data, content };
  });

  posts.sort((a, b) => new Date(b.dateposted) - new Date(a.dateposted));

  const feed = new RSS({
    title: "Fisher's Blog",
    description: "Latest posts from my corner of the web",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description.substring(0, 250) + "...",
      url: `${SITE_URL}/${post.slug}`,
      categories: post.tags,
      date: post.dateposted,
    });
  });

  fs.writeFileSync(
    path.join(PUBLIC_DIR, "rss.xml"),
    feed.xml({ indent: true }),
  );
  console.log("RSS Feed generated.");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/fisher</loc>
    <changefreq>yearly</changefreq>
    <priority>0.99</priority>
  </url>
  <url>
    <loc>${SITE_URL}/music</loc>
    <changefreq>daily</changefreq>
    <priority>0.98</priority>
  </url>
  <url>
    <loc>${SITE_URL}/movies</loc>
    <changefreq>daily</changefreq>
    <priority>0.97</priority>
  </url>
  <url>
    <loc>${SITE_URL}/television</loc>
    <changefreq>daily</changefreq>
    <priority>0.96</priority>
  </url>
  <url>
    <loc>${SITE_URL}/site</loc>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/${post.slug}</loc>
    <lastmod>${new Date(post.dateposted).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("Sitemap generated.");
}

generateMetadata();
