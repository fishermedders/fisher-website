import fs from "fs";
import path from "path";
import matter from "gray-matter";
import RSS from "rss";

const POSTS_DIR = path.join(process.cwd(), "src/posts");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SITE_URL = "https://fishers.blog";

async function generateRSS() {
  const feed = new RSS({
    title: "Fisher's Blog",
    description: "Latest posts from my corner of the web",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: "en",
  });

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(source);
    return {
      ...data,
      content,
    };
  });

  posts.sort((a, b) => new Date(b.dateposted) - new Date(a.dateposted));

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description.substring(0, 200) + "...",
      url: `${SITE_URL}/${post.slug}`,
      categories: post.tags,
      date: post.dateposted,
    });
  });

  fs.writeFileSync(
    path.join(PUBLIC_DIR, "rss.xml"),
    feed.xml({ indent: true }),
  );
  console.log("RSS Feed generated successfully at /public/rss.xml");
}

generateRSS();
