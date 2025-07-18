import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedProductsSection = (): JSX.Element => {
  // Feature cards data for mapping
  const featureCards = [
    {
      id: 1,
      icon: (
        <div className="relative w-[37.27px] h-[37.27px]">
          <img
            className="absolute w-4 h-[11px] top-[3px] left-1.5"
            alt="Vector"
            src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-17.svg"
          />
          <div className="absolute w-[25px] h-5 top-3.5 left-0.5 bg-[url(https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-25.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[5px] h-[5px] top-2 left-2.5"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-10.svg"
            />
          </div>
        </div>
      ),
      text: "Güvenli Alışverişi, Güvenlik ticaret sistemi ve 3D Secure & SSL Güvenlik sistemleriyle sorunsuz alışveriş yapın!",
      width: "230.17px",
    },
    {
      id: 2,
      icon: (
        <div className="relative w-[37.27px] h-[37.27px]">
          <div className="relative w-[19px] h-[31px] top-[3px] left-[5px] bg-[url(https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-14.svg)] bg-[100%_100%]">
            <div className="absolute w-3.5 h-6 top-0.5 left-0.5 bg-[url(https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-18.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[11px] h-2 top-2.5 left-0.5"
                alt="Vector"
                src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-8.svg"
              />
            </div>
            <img
              className="absolute w-0.5 h-0.5 top-7 left-2"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-10.svg"
            />
          </div>
        </div>
      ),
      text: "7/24 Canlı Destek hizmetimize, Whatsapp üzerinden ulaşabilirsiniz.",
      width: "195px",
    },
    {
      id: 3,
      icon: (
        <div className="relative w-[35.41px] h-[35.41px]">
          <img
            className="absolute w-6 h-[22px] top-[7px] left-1.5"
            alt="Vector"
            src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-23.svg"
          />
        </div>
      ),
      text: "Müşterimize kalite hizmeti vermenin mutluluğunu yaşıyoruz.",
      width: "183px",
    },
    {
      id: 4,
      icon: (
        <div className="relative w-[29.82px] h-[29.82px]">
          <div className="relative w-6 h-[22px] top-1 left-[3px]">
            <img
              className="absolute w-5 h-[19px] top-1 left-[5px]"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-7.svg"
            />
            <img
              className="absolute w-6 h-[21px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-19.svg"
            />
          </div>
        </div>
      ),
      text: "Stok problemi yaşamadan, Epin kodlarınız saniyeler içinde elinizde.",
      width: "205px",
    },
  ];

    return (
    <section className="flex flex-col w-full gap-6 py-12">
      <h2 className="text-xl font-bold text-black">Özellikler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {featureCards.map((card) => (
          <Card
            key={card.id}
            className="flex items-center gap-4 p-4 rounded-[12px] border-[2px] border-solid border-[#c58bd9] shadow-[0px_4px_16px_rgba(137,24,186,0.2)] hover:shadow-[0px_6px_20px_rgba(137,24,186,0.3)] transition-shadow bg-white"
          >
            <CardContent className="flex items-center gap-4 p-0 w-full">
              <div className="flex-shrink-0">
                {card.icon}
              </div>
              <div className="font-['Inter',Helvetica] font-normal text-black text-[12px] text-left tracking-[0] leading-normal flex-1">
                {card.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
