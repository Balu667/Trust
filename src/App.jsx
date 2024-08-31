import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import "./App.scss";
import Header from "./components/Header";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import Contact from "./views/ContactUs";
import Events from "./views/Events";
import Donations from "./views/Donations";
import Gallery from "./views/Gallery";
import Footer from "./components/Footer";

function App() {
  const routes = [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/about",
      element: AboutUs,
    },
    {
      path: "/services",
      element: Services,
    },
    {
      path: "/contact",
      element: Contact,
    },
    {
      path: "/events",
      element: Events,
    },
    {
      path: "/donations",
      element: Donations,
    },
    {
      path: "/gallery",
      element: Gallery,
    },
  ];

  return (
    <>
      <Header />
      <div style={{ minHeight: "45vh" }}>
        <Routes>
          {routes.map((ele, i) => {
            return <Route key={i} path={ele.path} element={<ele.element />} />;
          })}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
