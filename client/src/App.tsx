import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Gallery from "./pages/Gallery";
import Create from "./pages/Create";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/report"} element={<Report />} />
      <Route path={"/gallery"} element={<Gallery />} />
      <Route path={"/create"} element={<Create />} />
    </Routes>
  );
};

export default App;
