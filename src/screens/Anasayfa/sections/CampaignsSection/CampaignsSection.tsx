import React from "react";

export const CampaignsSection = (): JSX.Element => {
  // Campaign features data for mapping
  const campaignFeatures = [
    {
      id: 1,
      text: "%100 Güvenlik Garantisi",
      position: "left-12",
      icon: (
        <div className="relative w-5 h-5">
          <div className="relative w-[15px] h-[18px] top-px left-0.5">
            <img
              className="absolute w-2 h-1.5 top-[5px] left-1"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-3.svg"
            />
            <img
              className="absolute w-[15px] h-[18px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector.svg"
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      text: "7/24 Canlı Destek",
      position: "left-[260px]",
      icon: (
        <div className="relative w-[19.57px] h-[19.57px] bg-[url(https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-2.svg)] bg-[100%_100%]" />
      ),
    },
    {
      id: 3,
      text: "Anında Teslimat",
      position: "left-[420px]",
      icon: (
        <div className="relative w-5 h-5">
          <div className="relative w-3.5 h-[18px] top-px left-[3px]">
            <img
              className="absolute w-[9px] h-1.5 top-1 left-0.5"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-12.svg"
            />
            <img
              className="absolute w-3.5 h-[18px] top-0 left-0"
              alt="Vector"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/vector-20.svg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-11 bg-[linear-gradient(90deg,rgba(137,24,186,1)_0%,rgba(197,139,217,1)_50%,rgba(137,24,186,1)_100%)] relative">
      <div className="max-w-[1440px] mx-auto h-full relative">
        {campaignFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`inline-flex items-center gap-[7px] absolute top-3 ${feature.position}`}
          >
            {feature.icon}
            <div className="relative w-fit font-semibold text-white text-sm tracking-wide">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
