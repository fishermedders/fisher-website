import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.mdx";
import Navbar from "./components/Navbar.jsx";
import Fisher from "./pages/Fisher.mdx";
import Music from "./pages/Music.mdx";
import Movies from "./pages/Movies.mdx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fisher" element={<Fisher />} />
          <Route path="/music" element={<Music />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
