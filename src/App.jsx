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
          <div className="fixed bottom-[3vw] left-[45vw] w-8 md:w-[initial] z-50 animate-bounce">
            <img src="/promo-banner/arrow_down.svg" alt="" />
          </div>
        </HashRouter>
      </main>
    </div>
  )
}

export default MamontCampApp
