import { useState } from "react";
import {Scrollchor} from "react-scrollchor";

function Menu() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <header className="absolute left-0 right-[1vw] md:right-[22px]  text-white">
      <div className="container">
        <div className="flex justify-between items-start">
          <figure className="w-[20vw] xl:w-[195px]">
            <img src="/header-logo.png" alt="Mamont camp" />
          </figure>

          <Scrollchor to="#promo-code" className="hidden xl:block mt-[17px] ml-[28px] text-[17px]">Загрузить чек</Scrollchor>
          <Scrollchor to="#promo-code" className="hidden xl:block mt-[17px] ml-[28px] text-[17px]">Условия акции</Scrollchor>

          <figure className="hidden md:block mt-[36px] xl:mt-[25px] mr-[118px] ml-auto max-w-[75px] md:max-w-[120px]">
            <img src="/promo-banner/promo-banner-vodka@2x.png" alt="" />
          </figure>
          <a className="hidden xl:block xl:mt-[17px] text-[17px]" href="/">Поддержка</a>
          <div className="mt-[5vw] md:mt-[32px] cursor-pointer xl:hidden" onClick={()=>setShowMenu(!showMenu)}>
            <span className="block w-[40px] h-[6px] rounded-full bg-white"></span>
            <span className="block ml-auto mt-[6px] w-[25px] h-[6px] rounded-full bg-white"></span>
            <span className="block ml-auto mt-[6px] w-[17px] h-[6px] rounded-full bg-white"></span>
          </div>
        </div>

        { showMenu &&
          <div className="fixed top-0 left-0 right-0 bottom-0 z-10 text-white bg-promo-banner-bg">
            <div className="container h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center">
                    <figure className="max-w-[128px] md:max-w-[202px]">
                      <img className="w-full" src="/header-logo.png" alt="Mamont camp" />
                    </figure>
                    <figure className="max-w-[75px] md:max-w-[120px]">
                      <img src="/promo-banner/promo-banner-vodka@2x.png" alt="" />
                    </figure>
                  </div>
                  <ul className="mt-[30px] md:mt-[50px]">
                    <li className="mt-[13px] md:mt-[20px] text-[23px] md:text-[38px] font-bold"><Scrollchor to="#benefits" onClick={()=>setShowMenu(!showMenu)}>Приключения начинаются</Scrollchor></li>
                    <li className="mt-[13px] md:mt-[20px] text-[23px] md:text-[38px] font-bold"><Scrollchor to="#promo-code" onClick={()=>setShowMenu(!showMenu)}>Загрузить чек</Scrollchor></li>
                    <li className="mt-[13px] md:mt-[20px] text-[23px] md:text-[38px] font-bold"><Scrollchor to="#promo-code" onClick={()=>setShowMenu(!showMenu)}>Условия акции</Scrollchor></li>
                  </ul>
                  <ul className="mt-[40px]">
                    <li className="text-[23px] md:text-[38px] font-bold"><a href="/">Поддержка</a></li>
                    <li className="mt-[13px] md:mt-[20px] text-[15px] md:text-[24px]"><a href="/">Политика</a></li>
                  </ul>
                </div>
                <div className="mt-auto text-[17px] md:text-[27px] uppercase mx-auto mb-[40px]">
                  <a className="flex items-center " href="tel:+7 (916) 402-62-88">
                    <img className="mr-[15px] md:w-[60px]" src="/wa-icon.svg" alt="Телефон" />
                    +7 (916) 402-62-88
                  </a>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </header>
  )
}

export default Menu;