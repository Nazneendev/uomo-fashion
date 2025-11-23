import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Blog from "./components/pages/Blog";
import Pages from "./components/pages/Pages";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Notfound from "./components/pages/Notfound";
import Login from "./components/pages/Login";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="pages" element={<Pages />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
           <Route path="/notfound" element={<Notfound/>} />
        <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
     
    </>
  );
}

export default App;
