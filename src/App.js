// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
import Footer from "./components/Footer";
// import Info from "./components/Info";
// import Interests from "./components/Interests";

// import HeroAirBnb from "./components/HeroAirBnb";
// import NavbarAirBnb from "./components/NavbarAirBnb";
// import Card from "./components/Card";
// import Props from "./components/TimeOfDay";
import CardCat from "./components/CardCat";

function App() {
  return (
    <div className="App">
      {/*
      <Info />
      <About />
      <Interests />
      <Footer />
     <Navbar />
      <Main /> 
      <NavbarAirBnb />
      <HeroAirBnb />
      <Card />
      <Footer />
      <Props />*/}
      <div id="cats">
        <CardCat
          img="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60}"
          name="Butterfly"
          tel="(404) 345-1234"
          email="butterfly@cat.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          name="Mr. Whiskaz"
          tel="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Oscar"
          tel="(404) 345-1234"
          email="oscar@cat.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          name="Fluffy"
          tel="(404) 345-1234"
          email="fluffy@cat.meow"
        />
      </div>
    </div>
  );
}

export default App;
