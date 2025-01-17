import { Routes, Route } from "react-router-dom";

/*
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Gallery from "./pages/Gallery";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/report"} element={<Report />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
*/

import Layout from './v2/components/layout/Layout'
import Home from './v2/pages/Home'
import NotFound from './v2/pages/NotFound'
import Faq from './v2/pages/Faq'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/faq'} element={<Faq />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App;
