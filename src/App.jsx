import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import FooterBar from "./components/FooterBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
        <FooterBar />
      </BrowserRouter>
    </>
  );
}

export default App;
