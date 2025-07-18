import { ChevronDownIcon, PlusCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const GameOffersSection = (): JSX.Element => {
  // Category filter options data
  const categoryFilters = [
    { label: "Hediye Kartları", active: false },
    { label: "PC Oyunları", active: false },
    { label: "İndirimdekiler", active: true },
    { label: "Tüm Ürünler", active: false },
  ];

  // Support links data
  const supportLinks = [
    { label: "S.S.S" },
    { label: "Destek" },
    { label: "Blog" },
  ];

    return (
    <nav className="flex w-full items-center justify-between py-4">
      {/* Category filters */}
      <div className="flex items-center gap-3">
        {categoryFilters.map((filter, index) => (
          <Button
            key={`filter-${index}`}
            variant={filter.active ? "default" : "outline"}
            className={`h-9 px-4 py-2 rounded-[10px] border transition-all ${
              filter.active
                ? "bg-red-600 border-red-600 text-white hover:bg-red-700"
                : "bg-white border-[#f1f1f1] text-black hover:bg-gray-50"
            }`}
          >
            <span className="font-medium text-sm">
              {filter.label}
            </span>
            {!filter.active && index < 2 && (
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            )}
          </Button>
        ))}
      </div>

      {/* Support links and balance button */}
      <div className="flex items-center gap-3">
        {supportLinks.map((link, index) => (
          <Button
            key={`link-${index}`}
            variant="outline"
            className="h-9 px-4 py-2 rounded-[10px] border-[#f1f1f1] bg-white hover:bg-gray-50 transition-all"
          >
            <span className="font-medium text-sm text-black">
              {link.label}
            </span>
          </Button>
        ))}

        {/* Balance button with special styling */}
        <Button className="h-9 px-4 py-2 bg-[#7ed957] hover:bg-[#6bc547] rounded-md overflow-hidden shadow-lg relative transition-all">
          {/* Button text and icon */}
          <span className="relative [font-family:'Fredoka',Helvetica] font-semibold text-[#1a5739] text-sm z-10">
            Bakiye Yükle
          </span>
          <PlusCircleIcon className="relative w-4 h-4 ml-2 z-10 text-[#1a5739]" />
        </Button>
      </div>
    </nav>
  );
};
    