import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

type props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}

      <div className="flex-1 container mx-auto py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
