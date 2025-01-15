import { Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Gallery from "./pages/Gallery";
// import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/report"} element={<Report />} />
        <Route path={"/gallery"} element={<Gallery />} />
        {/* <Route path={"/create"} element={<Create />} /> */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
