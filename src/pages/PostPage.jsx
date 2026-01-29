import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { posts } from "../lib/posts";
import { PostList } from "../components/PostList";

function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found!</div>;

  const Content = post.component;
  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <small>
        {post.dateposted} * {post.tags.join(", ")}
      </small>
      <Content />
    </div>
  );
}

export default PostPage;
