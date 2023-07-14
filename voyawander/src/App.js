import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Hotels from "./Components/Hotels";
import Flights from "./Components/Flights";
import Holidays from "./Components/Holidays";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Hotels />
      <Flights />
      <Holidays />
      <Contact />
      <Footer />
      {/* <Navbar2 /> */}
    </div>
  );
}

export default App;
