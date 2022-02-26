import "./scss/main.scss";
import Scroll from "./components/Scroll";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Info from "./components/Info";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { heroContentAnimation } from "./scripts/animations";
import { heroAvatarsAnimation } from "./scripts/animations";
import { dividerAnimationOne } from "./scripts/animations";
import { featureImgsAnimation } from "./scripts/animations";
import { featureContentAnimation } from "./scripts/animations";
import { dividerAnimationTwo } from "./scripts/animations";
import { footerAnimation } from "./scripts/animations";

function App() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    heroContentAnimation();
    heroAvatarsAnimation();
    dividerAnimationOne();
    featureImgsAnimation();
    featureContentAnimation();
    dividerAnimationTwo();
    footerAnimation();
  }, []);
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
