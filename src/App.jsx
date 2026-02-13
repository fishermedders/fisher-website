import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.mdx";
import Navbar from "./components/Navbar.jsx";
import Fisher from "./pages/Fisher.mdx";
import Music from "./pages/Music.mdx";
import Movies from "./pages/movies/Movies.mdx";
import Site from "./pages/Site.mdx";
import Posts from "./pages/Posts.mdx";
import Television from "./pages/Television.mdx";
import Todo from "./pages/Todo.mdx";
import PostPage from "./pages/PostPage.jsx";
import Tweets from "./pages/Tweets.mdx";

export default function App() {
  useEffect(() => {
    const savedStatus = localStorage.getItem("rainbowEnabled");
    if (savedStatus === "true") {
      document.documentElement.classList.add("rainbow-mode");
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fisher" element={<Fisher />} />
          <Route path="/music" element={<Music />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/site" element={<Site />} />
          <Route path="/television" element={<Television />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/posts/:tag?" element={<Posts />} />
          <Route path="/site/todo" element={<Todo />} />
          <Route path="/:slug" element={<PostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
