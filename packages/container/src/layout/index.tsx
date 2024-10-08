import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const Layout = () => (
  <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  </>
);

export default Layout;
