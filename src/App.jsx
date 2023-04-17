import PromoBanner from "./components/PromoBanner/PromoBanner";
import Menu from "./components/Menu/Menu";
import Benefits from "./components/Benefits/Benefits";
import PromoCode from "./components/PromoCode/PromoCode";
import Footer from "./components/FooterMenu/FooterMenu";
import ModalAge from "./components/ModalAge/ModalAge";
import { HashRouter } from "react-router-dom";
import './App.css'

function MamontCampApp() {

  return (
    <div className="App">
      <main>
      <HashRouter>
        <Menu />
        <PromoBanner />
        <Benefits />
        <PromoCode />
        <Footer />
        <ModalAge />
      </HashRouter>
      </main>
    </div>
  )
}

export default MamontCampApp
