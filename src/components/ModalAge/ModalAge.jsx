import { useState, useEffect } from "react";

function ModalAge() {
  let [showModalAge, setShowModalAge] = useState(true);
  const visible = localStorage.getItem("formModal");

  useEffect(() => {
    if (visible) setShowModalAge(false)
  }, [visible]);

  const handleSubmit = (e) => {
    localStorage.setItem("formModal", 1);
    setShowModalAge(false);
  };

  return (
    <div>
      { showModalAge &&
        <div className='fixed z-30 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-60'>
          <div className="bg-black text-white text-center pt-[12.8vw] xl:pt-[100px] pb-[5.12vw] xl:pb-[60px] px-[10.7vw] xl:px-[80px] rounded-[10px] border-[3px] border-[#A18A66] xl:max-w-[720px] w-full mx-[30px]">
            <h2 className="mb-[12.3vw] xl:mb-[100px] text-[5.28vw] xl:text-[42px] uppercase font-bold">вам есть 18?</h2>
            <div className="flex justify-center mb-[6.9vw] xl:mb-[60px]">
              <a className="flex-1 py-[8px] md:py-[12px] text-[3.5vw] xl:text-[29px] uppercase md:text-[29px] font-bold text-white bg-secondary rounded-[10px] xl:max-w-[324px] hover:bg-primary hover:text-secondary cursor-pointer">еще нет</a>
              <a className="flex-[2] py-[8px] ml-[3.3vw] lx:ml-[25px] md:py-[12px] text-[3.5vw]  md:text-[29px] uppercase font-bold text-white bg-secondary rounded-[10px] xl:max-w-[324px] hover:bg-primary hover:text-secondary cursor-pointer" onClick={ ()=>{ handleSubmit() } }>да, конечно</a>
            </div>
            <p className="text-[2.6vw] xl:text-[22px]">
              Заходя на сайт, вы соглашаетесь<br/> c &nbsp;
              <a href="/" className="underline text-[#A18A66]">политикой использования файлов cookie</a>
            </p>
          </div>
        </div>
      }
    </div>
  )
}

export default ModalAge;