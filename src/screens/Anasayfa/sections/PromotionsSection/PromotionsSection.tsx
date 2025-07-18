import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const PromotionsSection = (): JSX.Element => {
  // Popular categories data
  const popularCategories = [
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/netflix-2.png",
      title: "Netflix Hediye Kartları",
    },
    {
      image:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/amazon-icon-logo-logo-brandlogos-net-fgndw-5.png",
      title: "Amazon Hediye Kartları",
    },
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/steam-2.png",
      title: "Steam Hediye Kartları",
    },
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/netflix-2.png",
      title: "Netflix Hediye Kartları",
    },
    {
      image:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/amazon-icon-logo-logo-brandlogos-net-fgndw-5.png",
      title: "Amazon Hediye Kartları",
    },
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/steam-2.png",
      title: "Steam Hediye Kartları",
    },
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/netflix-2.png",
      title: "Netflix Hediye Kartları",
    },
    {
      image:
        "https://c.animaapp.com/md8mfsfaJSDD7I/img/amazon-icon-logo-logo-brandlogos-net-fgndw-5.png",
      title: "Amazon Hediye Kartları",
    },
    {
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/steam-2.png",
      title: "Steam Hediye Kartları",
    },
  ];

  // Discounted games data
  const discountedGames = [
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-11.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-1.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-9.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-2.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-13.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-3.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-10.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-4.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-4.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-5.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-12.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-6.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-7.svg",
    },
  ];

  // Popular PC games data
  const popularPCGames = [
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-7.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-8.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-8.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-9.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-6.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-10.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-3.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-11.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-5.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-12.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-2.svg",
    },
    {
      background: "https://c.animaapp.com/md8mfsfaJSDD7I/img/mask-group-13.png",
      button: "https://c.animaapp.com/md8mfsfaJSDD7I/img/button-1.svg",
    },
  ];

  // Section header component
  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center justify-between w-full">
      <h2 className="font-BOLD-20 font-[number:var(--BOLD-20-font-weight)] text-black text-[length:var(--BOLD-20-font-size)] tracking-[var(--BOLD-20-letter-spacing)] leading-[var(--BOLD-20-line-height)] whitespace-nowrap [font-style:var(--BOLD-20-font-style)]">
        {title}
      </h2>
      <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto">
        <span className="font-sm12 font-[number:var(--sm12-font-weight)] text-black text-[length:var(--sm12-font-size)] tracking-[var(--sm12-letter-spacing)] leading-[var(--sm12-line-height)] [font-style:var(--sm12-font-style)]">
          Tümünü Gör
        </span>
        <ChevronRightIcon className="h-2.5 w-[5px]" />
      </Button>
    </div>
  );

    // Game card component
  const GameCard = ({
    background,
    button,
  }: { background: string; button: string }) => (
    <div className="w-[163px] h-[239px] relative cursor-pointer hover:scale-105 transition-transform">
      <div
        className="w-full h-full bg-cover bg-center rounded-[12px] overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-gradient-to-t from-black/80 to-transparent rounded-b-[12px] p-3">
          <div className="flex items-center justify-between h-full">
            <div className="flex-1">
              <div className="text-white font-semibold text-sm mb-1">
                GTA 5
              </div>
              
              <div className="flex items-center gap-2 mb-1">
                <img
                  className="w-3 h-3 object-cover"
                  alt="Platform icon"
                  src="https://c.animaapp.com/md8mfsfaJSDD7I/img/whatsapp-image-2025-07-07-at-17-07-15--1--13.png"
                />
                <img
                  className="w-3 h-3 object-cover"
                  alt="Platform icon"
                  src="https://c.animaapp.com/md8mfsfaJSDD7I/img/whatsapp-image-2025-07-07-at-17-07-15-1-13.png"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-red-400 text-xs line-through">
                  370 ₺
                </span>
                <span className="font-bold text-white text-sm">
                  320 ₺
                </span>
              </div>
            </div>

            <img
              className="w-[45px] h-[45px] hover:scale-110 transition-transform"
              alt="Add to cart"
              src={button}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col w-full gap-8 py-8">
      {/* Discounted Items */}
      <div className="flex flex-col gap-6 w-full">
        <SectionHeader title="İndirimdekiler" />

        <ScrollArea className="w-full">
          <div className="flex gap-[20px] pb-4">
            {discountedGames.map((game, index) => (
              <div key={`discount-game-${index}`} className="flex-shrink-0">
                <GameCard
                  background={game.background}
                  button={game.button}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Popular PC Games */}
      <div className="flex flex-col gap-6 w-full">
        <SectionHeader title="Popüler PC Oyunları" />

        <ScrollArea className="w-full">
          <div className="flex gap-[20px] pb-4">
            {popularPCGames.map((game, index) => (
              <div key={`pc-game-${index}`} className="flex-shrink-0">
                <GameCard
                  background={game.background}
                  button={game.button}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
