import "./App.css";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return <div className="App">
    <Navbar />
    <Intro />
    <Services />
  </div>;
}

export default App;
