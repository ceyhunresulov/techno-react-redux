import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Basket from "./pages/Basket";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-11/12 sm:w-4/6 md:w-10/12 xl:w-11/12 mx-auto pb-4 box-border">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Details />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
