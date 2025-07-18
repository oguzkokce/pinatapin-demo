import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsSection = (): JSX.Element => {
  // Create an array of news items to map over
  const newsItems = [
    {
      id: 1,
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-1000011544.svg",
      date: "9 Temmuz 2025",
      title: "Mobile-First Design: Why It's More Important Than Ever!",
      description:
        "Mobile-First Design: Why It's More Important Than Ever! Mobile-First Design: Why It's More Important Than Ever!Mobile-First Design: Why It's More Important Than Ever!",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-1000011544.svg",
      date: "9 Temmuz 2025",
      title: "Mobile-First Design: Why It's More Important Than Ever!",
      description:
        "Mobile-First Design: Why It's More Important Than Ever! Mobile-First Design: Why It's More Important Than Ever!Mobile-First Design: Why It's More Important Than Ever!",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-1000011544.svg",
      date: "9 Temmuz 2025",
      title: "Mobile-First Design: Why It's More Important Than Ever!",
      description:
        "Mobile-First Design: Why It's More Important Than Ever! Mobile-First Design: Why It's More Important Than Ever!Mobile-First Design: Why It's More Important Than Ever!",
    },
    {
      id: 4,
      image: "https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-1000011544.svg",
      date: "9 Temmuz 2025",
      title: "Mobile-First Design: Why It's More Important Than Ever!",
      description:
        "Mobile-First Design: Why It's More Important Than Ever! Mobile-First Design: Why It's More Important Than Ever!Mobile-First Design: Why It's More Important Than Ever!",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-6 py-6">
      <h2 className="text-xl font-bold text-black">Haberler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {newsItems.map((item) => (
          <Card key={item.id} className="w-full border-none cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative w-full">
                <div
                  className="w-full h-[196px] rounded-[20px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="w-full mt-[8px] text-right font-l-10 text-[#666666] text-[10px]">
                  {item.date}
                </div>

                <div className="w-full mt-[12px] font-sm18 text-black text-[16px] font-semibold line-clamp-2">
                  {item.title}
                </div>

                <div className="w-full mt-[8px] font-r14 text-[#6c7278] text-[14px] line-clamp-3">
                  {item.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
