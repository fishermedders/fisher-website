import { Link } from "react-router-dom";
import { posts } from "../lib/posts";
import "./categories.css";

export function Categories({
  priorityOrder = ["writing", "react", "vite", "cloudflare"],
}) {
  const groups = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(post);
    });
    return acc;
  }, {});

  const sortedTags = Object.keys(groups).sort((a, b) => {
    const indexA = priorityOrder.indexOf(a);
    const indexB = priorityOrder.indexOf(b);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="post-categories">
      {/* 1. The "Latest Posts" Square - Always First */}
      <section className="post-categories-post">
        <h2
          style={{
            textTransform: "uppercase",
            fontSize: "1.2rem",
          }}
        >
          Latest Posts
        </h2>
        <hr />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.slice(0, 5).map((post) => (
            <li key={`latest-${post.slug}`} style={{ marginBottom: "12px" }}>
              <Link
                to={`/${post.slug}`}
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {post.title}
              </Link>
              <div style={{ fontSize: "0.8rem", color: "#888" }}>
                {post.dateposted}
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/posts"
          style={{
            fontSize: "0.8rem",
            display: "block",
            marginTop: "10px",
            textDecoration: "underline",
            color: "#666",
          }}
        >
          See All
        </Link>
      </section>

      {/* 2. The Tag-Based Squares */}
      {sortedTags.map((tag) => (
        <section key={tag} className="post-categories-post">
          <h2
            style={{
              textTransform: "uppercase",
              fontSize: "1.2rem",
            }}
          >
            {tag}
          </h2>
          <hr />
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groups[tag].slice(0, 5).map((post) => (
              <li key={`${tag}-${post.slug}`} style={{ marginBottom: "12px" }}>
                <Link
                  to={`/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  {post.title}
                </Link>
                <div style={{ fontSize: "0.8rem", color: "#888" }}>
                  {post.dateposted}
                </div>
              </li>
            ))}
          </ul>

          {/* Tag-specific "See All" or count info */}
          {groups[tag].length > 5 && (
            <div
              style={{
                fontSize: "0.8rem",
                marginTop: "10px",
                fontStyle: "italic",
                color: "#666",
              }}
            >
              + {groups[tag].length - 5} more posts in {tag}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default Categories;
