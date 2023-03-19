import React from "react";
import { logo } from "../../assets";
import { getContext } from "../../Context";
const Footer = () => {
  const { socialMedia } = getContext();
  return (
    <footer className={`w-full pt-5 hidden md:block`}>
      <div className="container">
        <div className={`py-5 flex justify-between items-start`}>
          <div className={`flex items-center`}>
            <div className={`w-[70px] mr-[100px]`}>
              <img src={logo} alt="logo" className={`w-full object-contain`} />
            </div>
            <div className={``}>
              <h4
                className={`text-[18px] font-medium leading-[24px] text-white mb-3`}
              >
                Контакты
              </h4>
              <div className={`flex flex-col items-start gap-3`}>
                <a
                  href="mailto:GtStore@gmail.com"
                  className={`font-light text-[14px]`}
                >
                  GtStore@gmail.com
                </a>
                <a href="tel:998941231234" className={`font-light text-[14px]`}>
                  +99894 123 12 34
                </a>
              </div>
            </div>
          </div>
          <div className={``}>
            <h4
              className={`text-[18px] font-medium leading-[24px] text-white mb-5`}
            >
              Мы в социальных сетях
            </h4>
            <div className={` flex items-start justify-center gap-5`}>
              {socialMedia.map(({ id, path, icon }) => (
                <a href={path} key={id}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center pb-3">
        <p className={`font-light text-[13px]`}>
          {new Date().getFullYear()} &copy; Ahror Kurban
        </p>
      </div>
    </footer>
  );
};

export default Footer;
