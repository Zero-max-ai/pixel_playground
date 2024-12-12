import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-lightBg text-textColor min-h-[100vh] w-full">
      <Navbar />
      <div className="w-10/12 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
