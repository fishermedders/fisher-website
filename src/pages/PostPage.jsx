import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found!</div>;

  const Content = post.component;

  return (
    <div className="prose">
      <div style={{ marginBottom: "14px" }} className="post-metadata">
        <h1 style={{ marginBottom: "0px", marginTop: "0px" }}>{post.title}</h1>
        <small>
          {post.dateposted} {"• by fisher • "}
          {post.tags.map((tag, index) => (
            <span key={tag}>
              <Link
                to={`/posts/${tag}`}
                className="tag-link"
                style={{
                  fontWeight: "bold",
                }}
              >
                {tag}
              </Link>
              {index < post.tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </small>
      </div>
      <hr />
      <Content />
    </div>
  );
}

export default PostPage;
