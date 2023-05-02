import { useState } from "react";
import { Scrollchor } from "react-scrollchor";

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
          <a target="_blank" href="/rules.pdf" className="hidden xl:block mt-[17px] ml-[28px] text-[17px]">Условия акции</a>

          <figure className="hidden md:block mt-[36px] xl:mt-[25px] mr-[118px] ml-auto max-w-[75px] md:max-w-[120px]">
            <img src="/promo-banner/promo-banner-vodka@2x.png" alt="" />
          </figure>
          <a className="hidden xl:block xl:mt-[17px] text-[17px]" href="https://wa.me/79164026288">Поддержка</a>
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
                    <li className="mt-[17px] md:mt-[20px] text-[15px] md:text-[38px] lowercase"><Scrollchor to="#main" onClick={()=>setShowMenu(!showMenu)} className="flex items-center"><svg className="mr-2" width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_269_2)">
<path d="M5.69249 7.91394C5.78952 7.91394 5.8861 7.91394 5.98314 7.91394C11.0509 7.91394 16.1182 7.91394 21.1859 7.91394C21.8359 7.91394 22.3885 8.108 22.7452 8.66375C23.4028 9.68862 22.711 10.95 21.5543 11.0631C21.3912 11.0791 21.2272 11.0899 21.0637 11.0899C16.0337 11.0912 11.0033 11.0912 5.97325 11.0912C5.87847 11.0912 5.78368 11.0912 5.64127 11.0912C5.72663 11.1796 5.77829 11.2363 5.8331 11.2892C7.52129 12.9174 9.21039 14.5449 10.8972 16.1744C11.1403 16.4092 11.3415 16.6661 11.4395 16.9996C11.7463 18.0444 10.8595 19.0849 9.73913 18.9956C9.29709 18.9601 8.93995 18.7778 8.63807 18.4871C5.94181 15.8916 3.24644 13.2952 0.556019 10.694C-0.1888 9.97408 -0.184757 9.02674 0.562758 8.30422C3.24869 5.70868 5.93821 3.11661 8.62909 0.525842C9.22521 -0.0481045 9.96554 -0.152498 10.6888 0.217427C11.5194 0.642364 11.7773 1.84657 11.1627 2.52621C10.7854 2.94335 10.3743 3.3332 9.96868 3.72608C8.5954 5.05547 7.21761 6.38139 5.84028 7.70688C5.78413 7.76103 5.71001 7.79828 5.64442 7.84376C5.66059 7.86715 5.67676 7.89098 5.69294 7.91437L5.69249 7.91394Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_269_2">
<rect width="23" height="19" fill="white"/>
</clipPath>
</defs>
</svg>
На главную</Scrollchor></li>
                  </ul>
                  <ul className="mt-[40px]">
                    <li className="text-[23px] md:text-[38px] font-bold"><a target="_blank" href="https://wa.me/79164026288">Поддержка</a></li>
                    <li className="mt-[13px] md:mt-[20px] text-[15px] md:text-[24px]"><a target="_blank" href="/rules.pdf">Политика</a></li>
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