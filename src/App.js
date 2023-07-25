import "./App.css";
import Dashboard from "./dashboard";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
