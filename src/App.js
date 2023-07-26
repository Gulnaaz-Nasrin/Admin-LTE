import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import menuRoutes from "./routes/menuRouts";

function App() {
  const auth =
    "/themes/v3/pages/examples/contacts.html" ||
    "/themes/v3/pages/examples/contact-us.html";
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <Menu />
        {window.location.pathname !== auth && <Dashboard />}
        <BrowserRouter>
          <Routes>
            {menuRoutes.map((routes, i) => (
              <Route key={i} path={routes.path} element={routes.component} />
            ))}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
