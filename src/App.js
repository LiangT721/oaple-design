import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./component/header/header.component";
import Landingpage from "./pages/landingpage/landingpage.component";

function App({test}) {
  return (
    <div>
      <Header />
      {test}
      <Routes>
        <Route path="/" element={ <Landingpage />} />
      </Routes>
    </div>
  );
}


export default App;
