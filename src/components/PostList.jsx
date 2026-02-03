import { Link, useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export function PostList() {
  const { tag } = useParams();

  const filteredPosts = tag
    ? posts.filter((post) => post.tags.includes(tag))
    : posts;

  return (
    <div className="post-list">
      {tag && (
        <div style={{ marginBottom: "20px" }}>
          <span>
            Filtering by: <strong>{tag}</strong>
          </span>
          <Link to="/posts" style={{ marginLeft: "10px", fontSize: "0.8rem" }}>
            (Clear)
          </Link>
        </div>
      )}

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <article key={post.slug} style={{ marginBottom: "20px" }}>
            <Link to={`/${post.slug}`}>
              <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
            </Link>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
              {post.dateposted} •{" "}
              {post.tags.map((t) => (
                <Link key={t} to={`/posts/${t}`} style={{ marginRight: "5px" }}>
                  {t}
                </Link>
              ))}
            </p>
          </article>
        ))
      ) : (
        <p>No posts found with the tag "{tag}".</p>
      )}
    </div>
  );
}

export default PostList;
