function Footer() {

  return (
    <footer className="pt-[48px] pb-[24px] bg-black text-white text-center">
      <div className="container">
        <p className="text-[37px] font-bold font-serif "><span className="text-secondary text-[40px]">18+ </span>ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ</p>
        <div className="md:flex justify-between">
          <div className="mb-[15px] mt-[32px]">
            <ul className="flex justify-between">
              <li className="text-[14px]">Условия акции</li>
              <li className="text-[14px] md:ml-[38px]">Политика</li>
              <li className="text-[14px] md:ml-[38px]">Поддержка</li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <figure className="w-[55px]">
              <img className="w-full" src="/wa-icon.svg" alt="" />
            </figure>
            <a href='tel:+79164026288' className="text-[17px] md:ml-[38px]">+7 (916) 402-62-88</a>
            <figure className="w-[90px] md:ml-[38px]">
              <img src="/footer-logo.png" alt="" />  
            </figure>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;