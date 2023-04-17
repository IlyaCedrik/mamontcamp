
import { Scrollchor } from "react-scrollchor";
import styles from "./PromoBanner.module.css";

function PromoBanner() {


  return (
    <section className="bg-promo-banner-bg bg-center md:bg-right bg-no-repeat bg-cover pt-[25vw] md:pt-[295px] xl:pt-[216px] pb-[14px] md:pb-[160px] h-[100vh] md:h-[initial]">
      <div className="container">
        <div className="md:max-w-[442px] xl:max-w-none md:ml-auto xl:flex xl:space-x-[200px] xl:items-center">
          <div className="xl:w-1/2">
            <figure className={`transition-all mx-auto mb-[15vw] md:mb-[123px] ${styles['fade-in']}`}>
              <img className="w-[60vw] mx-auto md:w-full" src="/promo-banner/promo-banner-slogan.png" alt="Mamont camp'23 | Приключения начинаются здесь | В сердце Алтая" />
            </figure>
          </div>
          <div className="xl:w-1/2 text-white text-center uppercase">
            <p className="font-bold text-[10vw] md:text-[42px] xl:mt-[30px]">ЗАРЕГИСТРИРУЙТЕ ЧЕК</p>
            <p className="text-[4vw] md:text-[22px]">откройте для себя территорию<br/> уникального отдыха</p>
            <Scrollchor to="#promo-code">
              <div className={`${styles['blob']} block md:rounded-[10px] mt-[6vw] md:mt-[66px] border-[3px] border-[#E2CA8A] px-[20px] py-[5vw] md:py-[20px] md:pb-[15px] text-[5vw] md:text-[30px] font-bold bg-[#090909] bg-opacity-80 hover:bg-white hover:bg-opacity-70 hover:text-primary`} href="#promo-code">
                <span className="block md:leading-[.8] text-[6vw] md:text-[38px] md:no-underline text-[#E2CA8A] font-black underline ">получить</span>
                гарантированный приз
              </div>
            </Scrollchor>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner;