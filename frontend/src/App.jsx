import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Texts from "./pages/Texts/Texts";
import Views from "./pages/Views/Views";
import Works from "./pages/Works/Works";
import Details from "./pages/Detail/Details";
import "./App.css";
import Aberle from "./pages/Texts/Textpages/Aberle/Aberle";
import Donauer from "./pages/Texts/Textpages/Donauer/Donauer";
import Heym from "./pages/Texts/Textpages/Heym/Heym";
import Hirsch from "./pages/Texts/Textpages/Hirsch/Hirsch";
import Uhr from "./pages/Texts/Textpages/Uhr/Uhr";
import Music from "./pages/Music/Music";
import Imprint from "./pages/Imprint/Imprint";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/aberle" element={<Aberle />} />
          <Route path="/donauer" element={<Donauer />} />
          <Route path="/heym" element={<Heym />} />
          <Route path="/hirsch" element={<Hirsch />} />
          <Route path="/uhr" element={<Uhr />} />
          <Route path="/views" element={<Views />} />
          <Route path="/works" element={<Works />} />
          <Route path="/imprint" element={<Imprint />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
