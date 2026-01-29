import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export function PostList() {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <article key={post.slug}>
          <Link to={`/${post.slug}`}>
            <h2>{post.title}</h2>
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
