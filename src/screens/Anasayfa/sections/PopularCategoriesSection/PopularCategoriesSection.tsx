import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const PopularCategoriesSection = (): JSX.Element => {
  // Define the navigation items
  const navItems = [
    { id: "kampanyalar", label: "Kampanyalar", isActive: true },
    { id: "haberler", label: "Haberler", isActive: false },
    { id: "rehberler", label: "Rehberler", isActive: false },
    { id: "blog", label: "Blog", isActive: false },
  ];

    return (
    <div className="w-full py-6">
      <Tabs defaultValue="kampanyalar" className="w-full">
        <TabsList className="w-full h-12 bg-[#c58bd9] rounded-lg p-1">
          {navItems.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className={`h-10 px-6 text-white font-semibold text-lg transition-all rounded-md flex-1 ${
                item.isActive
                  ? "bg-[#500c6e] text-white shadow-md"
                  : "text-white hover:bg-[#500c6e]/20"
              }`}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
