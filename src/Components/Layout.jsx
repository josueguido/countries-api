import ThemeColor from "./ThemeColor";
import { Countries } from "./Countries";
import Header from "./Header"
import Footer from "./Footer"
function Layout() {
  return (
    <>
     <ThemeColor>
        <Header/>
        <Countries />
        
        <Footer/>
      </ThemeColor>
    </>
  );
}


export default Layout;
