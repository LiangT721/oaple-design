import Header from "./component/header/header.component";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

const Page2 = () => <div>Page2</div>;

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
