import { Scrollchor } from "react-scrollchor";
import styles from "./PromoBanner.module.css";

function PromoBanner() {
  return (
    <section className="bg-promo-banner-bg bg-[top_right_-15rem] md:bg-right bg-no-repeat bg-cover pt-[25vw] md:pt-[295px] xl:pt-[216px] pb-[14px] md:pb-[160px] h-[100vh] md:h-[initial]">
      <div className="container">
        <div className="md:max-w-[442px] xl:max-w-none md:ml-auto xl:flex xl:space-x-[200px] xl:items-center">
          <div className="xl:w-1/2">
            <figure className={`transition-all mx-auto mb-[10vw] md:mb-[123px] ${styles['fade-in']}`}>
              <img className="w-[60vw] mx-auto md:w-full" src="/promo-banner/promo-banner-slogan.png" alt="Mamont camp'23 | Приключения начинаются здесь | В сердце Алтая" />
            </figure>
          </div>
          <div className="xl:w-1/2 text-white text-center uppercase">
            <p className="uppercase text-[2vh] md:text-[16px] font-bold bg-[#030303] leading-[20px] bg-opacity-60 py-[17px] px-[10px] max-w-[343px] mx-auto rounded-[10px] drop-shadow-2xl">Покупайте продукты бренда<br/> Mamont:<br/> Mamont, Mamont Blood,<br/> Mamont Ivory.<br/> Регистрируйте чек, получите<br/> гарантированную скидку<br/> на поездку в Mamont Camp<br/> и откройте для себя территорию уникального отдыха</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[3vw] left-[50%] translate-x-[-50%]">
        <Scrollchor to="#benefits">
          <img src="/promo-banner/arrow_down.svg" alt="" />
        </Scrollchor>
      </div>
    </section>
  )
}

export default PromoBanner;