import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export function PostList() {
  return (
    <div className="post-list">
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <article key={post.slug}>
          <Link to={`/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>
            {post.dateposted} • {post.tags.join(", ")}
          </p>
        </article>
      ))}
    </div>
  );
}

export default PostList;
