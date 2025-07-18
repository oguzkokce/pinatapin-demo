import { ChevronUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { CampaignsSection } from "./sections/CampaignsSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { GameOffersSection } from "./sections/GameOffersSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { NewsSection } from "./sections/NewsSection";
import { PaymentMethodsSection } from "./sections/PaymentMethodsSection";
import { PopularCategoriesSection } from "./sections/PopularCategoriesSection";
import { PromotionsSection } from "./sections/PromotionsSection";

export const Anasayfa = (): JSX.Element => {
  console.log('Anasayfa component rendered')
  
  // Discount labels data
  const discountLabels = [
    {
      top: "top-[5px]",
      left: "left-[564px]",
      rotation: "rotate-[15deg]",
      value: "20",
    },
    {
      top: "top-[21px]",
      left: "left-[422px]",
      rotation: "rotate-[-19.90deg]",
      value: "10",
    },
    {
      top: "top-[23px]",
      left: "left-[547px]",
      rotation: "rotate-[-19.90deg]",
      value: "10",
    },
    {
      top: "top-[3px]",
      left: "left-[408px]",
      rotation: "rotate-[15deg]",
      value: "15",
    },
  ];

  // Banner images data
  const bannerImages = [
    {
      width: "w-[893px]",
      height: "h-[407px]",
      top: "top-3.5",
      left: "left-[22px]",
    },
    {
      width: "w-[378px]",
      height: "h-[194px]",
      top: "top-[227px]",
      left: "left-[936px]",
    },
    {
      width: "w-[378px]",
      height: "h-[194px]",
      top: "top-3.5",
      left: "left-[936px]",
    },
  ];

    return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Top Campaign Banner */}
        <CampaignsSection />
        
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Game Offers Section - Category filters */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <GameOffersSection />
        </div>

        {/* PayPal Banner Section */}
        <div className="w-[1344px] h-[435px] mx-auto mt-8 bg-[#f2f2f2] rounded-[10px] overflow-hidden relative">
          {bannerImages.map((image, index) => (
            <img
              key={`banner-${index}`}
              className={`absolute ${image.width} ${image.height} ${image.top} ${image.left} object-cover`}
              alt="PayPal Banner"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/whatsapp-image-2025-07-07-at-16-18-10-5.png"
            />
          ))}
        </div>

        {/* Popular Categories (Netflix, Amazon, Steam etc.) */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <PaymentMethodsSection />
        </div>

        {/* Products Sections */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <PromotionsSection />
        </div>

        {/* Campaigns Tab Section */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <PopularCategoriesSection />
        </div>

        {/* News Section */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <NewsSection />
        </div>

        {/* Featured Products Section */}
        <div className="w-[1344px] mx-auto mt-8 px-4">
          <FeaturedProductsSection />
        </div>

        {/* Footer Images */}
        <img
          className="w-full h-[91px] mt-8"
          alt="Frame"
          src="https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-33884.svg"
        />

        <img
          className="w-full h-[390px]"
          alt="Screen"
          src="https://c.animaapp.com/md8mfsfaJSDD7I/img/screen-3.png"
        />

        {/* Scroll to Top Button */}
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-12 right-20 bg-[#8918ba] text-white rounded-[4.41px] border-[1.1px] border-solid border-[#e8e8e8] -rotate-90 hover:bg-[#8918ba]"
        >
          <ChevronUpIcon className="h-5 w-5 rotate-90" />
        </Button>
      </div>
    </div>
  );
};
