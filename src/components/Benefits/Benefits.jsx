import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import styles from "./Benefits.module.css";

function Benefits() {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} bg-white"></span>`;
    },
  };

  return (
    <section id='benefits' className='pt-[55px] md:pt-[81px] xl:relative xl:pt-0 pb-[68px] md:pb-[32px] xl:pb-0 bg-black text-white xl:h-[730px]'>
      <div className="container">
        <h2 className="md:hidden mb-[45px] text-[10vw] leading-[1] font-extrabold uppercase">
          <span className="block text-[#A19165]">приключения</span>
          начинаются
        </h2>
      </div>

      <div className="md:hidden xl:block mb-[37px]">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >

          { Array(7).fill('').map((_, index)=>(
              (<SwiperSlide key={index}>
                <img className="w-full xl:h-[730px] object-cover" src={`/benefits/DJI_0125 ${index}.png`} alt="Природа mamont camp" />
              </SwiperSlide>
          ))) }
          
        </Swiper>
      </div>

      <div className="container xl:absolute xl:top-0
      xl:bottom-0 xl:left-0 xl:right-0">
        <div className="md:flex xl:block xl:absolute xl:top-0 xl:bottom-0 xl:right-0 xl:z-10 md:items-end md:space-x-[50px] xl:space-x-0 xl:bg-black xl:bg-opacity-50 xl:w-[475px] xl:px-[35px] xl:pt-[50px] xl:pb-[40px]">
          <div className="md:w-8/12 xl:w-full">
            <h2 className="hidden md:block mb-[45px] md:mb-[37px] xl:mb-[18px] text-[40px] md:text-[50px] leading-[1] font-extrabold uppercase xl:leading-[52px]">
              <span className="block text-[#A19165]">приключения</span>
              начинаются
            </h2>
            <p className="text-[12px] md:text-[14px] xl:leading-[21px]">Увлекательные путешествия начинается с истории. Более 20 лет назад 12 полярников, совершив аварийную посадку в Антарктиде, всерьез задумались о поиске мамонтов в Сибири, и спустя год в Якутии был обнаружен юкагирский мамонт. Это вдохновило путешественников на создание уникального чистого продукта — водки MAMONT, которая создается в одном из самых экологичных мест России — на Алтае. В 2018 году здесь обосновался лагерь MAMONT CAMP, куда может попасть каждый желающий открыть для себя новые  впечатления и, возможно, найти мамонтов...</p>
            <p className="mt-[10px] text-[17px] md:text-[22px] uppercase font-extrabold text-secondary md:mb-[6px] xl:leading-[25px]">Откройте для себя мир горного Алтая, вдохновитесь энергией дикой природы, отправьтесь в путешествие вместе с MAMONT.</p>
          </div>



          <div className="md:w-4/12 xl:w-full">
            <div className="xl:flex xl:items-center">
              <figure className="md:hidden xl:block mt-[32px] xl:mt-[10px] xl:min-w-[190px] xl:max-w-[190px] xl:mr-[21px]">
                <img className="w-full" src="/benefits/map@2x.png" alt="Указатель местоположения" />
              </figure> 
              <div className="mt-[32px] xl:mt-0">
                <p className="text-[45px] md:text-[25px] uppercase font-black text-[#A19165]">Где?</p>
                <p className="text-[16px] md:text-[13px]">Горный Алтай, Усть-Коксинский район, на берегу реки Кокса</p>
                <div className="flex items-end mt-[16px] md:mt-[13px]">
                  <img className={`${styles['pot']} mr-[8px] md:w-[25px]`} src="/marker.svg" alt="Указатель местоположения" />
                  <a className="text-[16px] md:text-[13px] underline" target="_blank" href="https://yandex.ru/maps/org/mamont_camp/29947806408/?ll=84.986107%2C50.422202&mode=search&sctx=ZAAAAAgBEAAaKAoSCcMN%2BPwwbVVAEXqKHCJuDElAEhIJbuAO1CmvB0AR5iDoaFUL9T8iBgABAgMEBSgKOABA909IAWIrcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9FbmFibGVCZWF1dHlGaWx0ZXI9MWoCcnWdAc3MTD2gAQCoAQC9AfNEf0jCAQXIhZ3Ib%2BoBAPIBAPgBAIICC21hbW9udCBjYW1wigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=84.986107%2C50.422202&sspn=2.960529%2C1.306274&text=mamont%20camp&z=9.15">50.466872 84.68487</a>
                </div>
                <figure className="hidden md:block xl:hidden mt-[32px] md:mt-[60px]">
                  <img className="w-full" src="/benefits/map@2x.png" alt="" />
                </figure> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block xl:hidden mt-[58px]">
        <Swiper       
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          { Array(11).fill('').map((_, index)=>(
              (<SwiperSlide key={index}>
                <img className="w-full" src={`/benefits/DJI_0125 ${++index}.png`} alt="Природа mamont camp" />
              </SwiperSlide>
          ))) } 
        </Swiper>
      </div>
    </section>
  )
}

export default Benefits;