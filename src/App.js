import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./component/header/header.component";
import Landingpage from "./pages/landingpage/landingpage.component";
import AboutUsPage from "./pages/aboutUsPage/aboutUsPage.component";
import MyServicePage from "./pages/myServicePage/myServicePage.component";
import PortfolioPage from "./pages/portfolioPage/portfolioPage.component";
import ContactPage from "./pages/contactPage/contactPage.component";

function App({test}) {
  return (
    <div>
      <Header />
      {test}
      <Routes>
        <Route path="/" element={ <Landingpage />} />
        <Route path="/aboutus" element={ <AboutUsPage />} />
        <Route path="/myservice" element={ <MyServicePage />} />
        <Route path="/portfolio" element={ <PortfolioPage />} />
        <Route path="/contact" element={ <ContactPage />} />
      </Routes>
    </div>
  );
}


export default App;
