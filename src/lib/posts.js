const postFiles = import.meta.glob("../posts/*.mdx", { eager: true });

export const posts = Object.values(postFiles)
  .map((post) => {
    return {
      ...post.frontmatter,
      component: post.default,
    };
  })
  .sort((a, b) => new Date(b.dateposted) - new Date(a.dateposted));
