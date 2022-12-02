// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Footer from "./components/Footer";
// import Info from "./components/Info";
// import Interests from "./components/Interests";
// import Props from "./components/TimeOfDay";
// import Cats from "./components/Cats";
// import AirbnbPage from "./components/AirbnbPage";
// import Joke from "./components/Joke";
// import jokesData from "./jokesData";

import TravelJournal from "./components/TravelJournal";

function App() {
  // console.log(jokesData);
  // const jokeElements = jokesData.map((joke) => {
  //   return (
  //     <Joke
  //       key={joke.punchline}
  //       setup={joke.setup}
  //       punchline={joke.punchline}
  //     />
  //   );
  // });

  return (
    <div className="App">
      {/*
      <Info />
      <About />
      <Interests />
      <Footer />
      <Navbar />
      <Footer />
      <Props />
      <Cats />
      <Main />
      
      <AirbnbPage />
      {jokeElements}*/}
      <TravelJournal />
    </div>
  );
}

export default App;
