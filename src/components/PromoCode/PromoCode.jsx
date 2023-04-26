import React, { useRef, useState } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';


function PromoCode() {
  const {
    createFormData,
  } = useFileUpload();

  const [file, setFile] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [load, setLoad] = useState(0);


  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!promoCode) {
      
      const formData = createFormData();
      formData.append("promo", file);

      let timer = setInterval(()=>{
        setLoad(load + 10)
      }, 10);

      try {
        let res = await axios.post('http://81.200.145.226:3000/api/uploadfile', formData, {
        // let res = await axios.post('http://localhost:3000/api/uploadfile', formData, {
          'content-type': 'multipart/form-data',
        });

        setPromoCode(res.data.promo)
      } catch (error) {
        console.error('Failed to submit files.');
      }

        setLoad(100);
        clearInterval(timer);
        setFile(null);
      }

    };

  return ( 
    <section id='promo-code' className='py-[40px] md:py-[55px] text-center xl:text-left'>
      <div className='container md:max-w-[460px] xl:max-w-none'>
        <div className="xl:flex xl:items-end xl:justify-center xl:space-x-[74px]">
          <div className="xl:w-[444px]">
            <h2 className="mb-[24px] xl:mb-[31px] text-[24px] md:text-[46px] uppercase font-bold">Как получить приз?</h2>
            <div>
              <ul>
                <li className="mb-[10px] pb-[10px] border-b-[1px] border-secondary">
                  <h3 className="text-[18px] md:text-[24px] text-secondary font-bold uppercase">Шаг 1:</h3>
                  <p className="text-[14px] md:text-[18px]">Нажмите кнопку «Загрузить чек».</p>
                </li>
                <li className="mb-[10px] pb-[10px] border-b-[1px] border-secondary">
                  <h3 className="text-[18px] md:text-[24px] text-secondary font-bold uppercase">Шаг 2: </h3>
                  <p className="text-[14px] md:text-[18px]">Загрузите фотографию чека от покупки <span className='uppercase'>Mamont</span>, <span className='uppercase'>Mamont Blood</span> или <span className='uppercase'>Mamont Ivory</span>.</p>
                </li>
                <li className="mb-[10px] pb-[10px] border-b-[1px] border-secondary">
                  <h3 className="text-[18px] md:text-[24px] text-secondary font-bold uppercase">Шаг 3: </h3>
                  <p className="text-[14px] md:text-[18px]">После загрузки и проверки чека, вы получитепромокод на 15 000₽ на поездку в MAMONT CAMP. </p>
                </li>
                <li className="mb-[10px] pb-[10px]  border-secondary">
                  <h3 className="text-[18px] md:text-[24px] text-secondary font-bold uppercase">Шаг 4:</h3>
                  <p className="text-[14px] md:text-[18px]">Нажмите «применить код» и перейдите в WhatsApp для оформления тура в MAMONT CAMP со скидкой.</p>
                </li>
              </ul>
              <p className='text-[16px] font-bold mt-[20px]'>
                Узнать больше о MAMONT CAMP на сайте:
                <a target='_blank' href='https://mamontcamp.ru' className='text-[21px] block underline text-secondary'>mamontcamp.ru</a>
              </p>
              <div className="hidden xl:inline-flex items-center mt-[35px] text-left">
                <img className="mr-[16px]" src="/message.svg" alt="Телефон" />
                <p className="text-[15px] md:text-[20px] font-bold uppercase">Возникли вопросы?<br/> свяжитесь с нами</p>
              </div>
            </div>
          </div>
          <div className="xl:w-[415px] xl:text-center">

            <div className='mt-[50px] text-center relative h-[24px] bg-[#D9D9D9] rounded-[5px] overflow-hidden'>
              <span style={{width: load + '%'}} className='block absolute left-0 top-0 bottom-0  bg-secondary transition-all'></span>
              <span className='block absolute left-0 right-0 text-[15px]'>{load}%</span>  
            </div> 

            <button className='block w-full mt-[20px] mb-[24px] py-[8px] md:py-[12px] text-[26px] uppercase md:text-[42px] font-bold text-secondary bg-primary rounded-[10px]  xl:mx-auto  hover:bg-secondary hover:text-primary transition-all' onClick={!file ? () => inputRef.current.click() : handleSubmit}>{file? 'Отправить' : 'Загрузить чек'}</button>

            {/* Hide the crappy looking default HTML input */}
            <input
              ref={inputRef}
              type="file"
              name='promo'
              style={{ display: 'none' }}
              onChange={(e) => {
                setFile(e.target.files[0]);
                setPromoCode(null);
                setLoad(0);
                inputRef.current.value = null;
              }}
            />

            <div className="mt-[32px] md:mt-[45px] py-[18px] md:py-[20px] xl:py-[25px] mb-[8px] md:mb-[15px] bg-[#D9D9D9] bg-opacity-30 rounded-[10px]">
              <p className="text-[13] md:text-[17px]">Ваш код: <span className="font-semibold"> { promoCode ? promoCode : 'XXXXXXXXXXXXXXXXXXXXX' }</span></p>
            </div>

            <p className="text-[12px] md:text-[15px]">
              <span className="mb-[5px] block text-[13px] md:text-[17px] font-semibold">Скопируйте или сохраните ваш уникальный код.</span>
              Акция действует с ХХ.04.2023 по ХХ.ХХ.2023<br/> при оформлении тура на сайте mamontcamp.ru
            </p>

            <a 
              className="block mt-[16px] md:mt-[35px] mb-[24px] py-[8px] md:py-[12px] text-[26px] uppercase md:text-[29px] font-bold text-white bg-secondary rounded-[10px] xl:max-w-[324px] xl:mx-auto xl:mt-[88px] hover:bg-primary hover:text-secondary  transition-all" 
              target='_blank' href={`https://wa.me/79164026288?text=Я%20получил%20приз%20-%20хочу%20тур%20в%20Кэмп%20со%20скидкой.%20Мой%20промокод:%20${promoCode}`}
            >применить код</a>
            
            <div className="inline-flex xl:hidden items-center mx-auto text-left">
              <img className="mr-[16px]" src="/message.svg" alt="Телефон" />
              <p className="text-[15px] md:text-[20px] font-bold uppercase">Возникли вопросы?<br/> свяжитесь с нами</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PromoCode;