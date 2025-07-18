import React from "react";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const PaymentMethodsSection = (): JSX.Element => {
  // Define payment methods data for mapping
  const paymentMethods = [
    {
      name: "Netflix",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/netflix-mobile-application-logo-free-png-1.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
    {
      name: "Free Fire",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/garena-free-fire-6589783-960-720.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
    {
      name: "Valorant",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/valorant-logo--high-resolution---hd--by-mineboxpc-dduxd55-pre.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
    {
      name: "Razer Gold",
      imageUrl: "https://c.animaapp.com/md8mfsfaJSDD7I/img/75832.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
    {
      name: "Apple",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/logo-apple-icon-information-png-favpng-lgla8kmealfaye0ikbrnajtne.png",
      width: "w-[44.18px]",
      height: "h-[41.48px]",
    },
    {
      name: "Xbox",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/xbox--app--logo-wine.png",
      width: "w-[44.18px]",
      height: "h-[29.45px]",
    },
    {
      name: "Pubg Mobile",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/pubg-mobile-thumbnail.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
    {
      name: "LoL",
      imageUrl: "https://c.animaapp.com/md8mfsfaJSDD7I/img/lol-symbol.png",
      width: "w-[44.18px]",
      height: "h-[24.85px]",
    },
    {
      name: "Playstation",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/playstation-logo-1.png",
      width: "w-[44.18px]",
      height: "h-[34.39px]",
    },
    {
      name: "Amazon",
      imageUrl:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/amazon-icon-logo-logo-brandlogos-net-fgndw-5.png",
      width: "w-[44.18px]",
      height: "h-[44.18px]",
    },
  ];

  return (
    <div className="w-full py-6">
      <h2 className="text-xl font-bold text-black mb-6">Popüler Kategoriler</h2>
      <ScrollArea className="w-full">
        <div className="flex items-start gap-8 pb-4">
          {paymentMethods.map((method, index) => (
            <div
              key={`payment-method-${index}`}
              className="flex flex-col w-20 items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex w-[77.31px] h-[77.31px] items-center justify-center gap-[11.04px] relative rounded-[55.22px] bg-gradient-to-br from-[#c58bd9] to-[#8918ba] p-1">
                <div className="w-[66px] h-[66px] bg-white rounded-[33px] flex items-center justify-center">
                  <div
                    className={`relative ${method.width} ${method.height} bg-cover bg-[50%_50%]`}
                    style={{ backgroundImage: `url(${method.imageUrl})` }}
                  />
                </div>
              </div>
              <div className="relative w-fit font-bold text-black text-sm text-center tracking-[0] leading-normal whitespace-nowrap font-sans mt-2">
                {method.name}
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
