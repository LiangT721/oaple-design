import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.scss";

import Header from "./component/header/header.component";
import Footer from './component/footer/footer.component';
import Landingpage from "./pages/landingpage/landingpage.component";
import AboutUsPage from "./pages/aboutUsPage/aboutUsPage.component";
import MyServicePage from "./pages/myServicePage/myServicePage.component";
import PortfolioPage from "./pages/portfolioPage/portfolioPage.component";
import ContactPage from "./pages/contactPage/contactPage.component";
import ProjectPage from "./pages/projectPage/projectPage.component";

function App({test}) {
  const pathname = useLocation().pathname;
  const footerDisplay = pathname !== '/';

  return (
    <div className={`${footerDisplay? "footer-padding-bottom":""} holder`} >
      <Header />
      {test}
      <Routes>
        <Route path="/" element={ <Landingpage />} exact />
        <Route path="/aboutus" element={ <AboutUsPage />} />
        <Route path="/myservice" element={ <MyServicePage />} />
        <Route path="/portfolio" element={ <PortfolioPage />} exact />
        <Route path="/portfolio/:projectId" element={ <ProjectPage />} />
        <Route path="/contact" element={ <ContactPage />} />
      </Routes>
      {footerDisplay? 
        <Footer />: ''
      }
    </div>
  );
}


export default App;
