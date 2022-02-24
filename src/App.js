import "./scss/main.scss";
import Scroll from "./components/Scroll";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Scroll />
      <Intro />
      <Gallery />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
