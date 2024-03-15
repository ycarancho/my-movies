import { Route, Routes } from "react-router-dom";
import About from "./Views/About";
import Home from "./Views/Home";
import Header from "./components/Header";
import Details from "./Views/Details";

export default function MainRoutes() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}
