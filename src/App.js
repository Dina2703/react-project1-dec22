// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
import Footer from "./components/Footer";
// import Info from "./components/Info";
// import Interests from "./components/Interests";

import HeroAirBnb from "./components/HeroAirBnb";
import NavbarAirBnb from "./components/NavbarAirBnb";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {/*
      <Info />
      <About />
      <Interests />
      <Footer />
     <Navbar />
      <Main /> */}
      <NavbarAirBnb />
      <HeroAirBnb />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
