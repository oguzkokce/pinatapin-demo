import { ChevronDownIcon, SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Input } from "../../../../components/ui/input";

export const NavigationBarSection = (): JSX.Element => {
  return (
    <header className="relative w-full h-[100px] border-b border-[#e8e8e8]">
      <div className="flex items-center justify-between px-12 h-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <img
          className="w-[218px] h-[50px] object-cover"
          alt="Pinatapin white"
          src="https://c.animaapp.com/md8mfsfaJSDD7I/img/pinatapin-white.png"
        />

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          {/* SearchIcon Bar */}
          <div className="flex items-center gap-2 w-[552px]">
            <div className="flex flex-col w-[458px] h-9">
              <div className="flex h-9 items-center relative w-full bg-primary-0 rounded-[10px] overflow-hidden border border-solid border-[#edf1f3] shadow-[0px_1px_2px_#e4e5e73d]">
                <div className="inline-flex h-12 items-center gap-[7px] px-3.5 py-[27px] relative flex-[0_0_auto] mt-[-33.00px] mb-[-33.00px] bg-white border border-solid border-[#edf1f3]">
                  <div className="relative w-6 h-6 mt-[-15.00px] mb-[-15.00px]">
                    <SearchIcon className="absolute w-5 h-5 top-0.5 left-0.5" />
                  </div>
                </div>
                <Input
                  className="border-none shadow-none h-9 pl-2 font-body-small-medium text-secondary-500 text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)]"
                  placeholder="Arama"
                />
              </div>
            </div>
            <img
              className="w-[29.59px]"
              alt="Frame"
              src="https://c.animaapp.com/md8mfsfaJSDD7I/img/frame-33888.svg"
            />
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="flex items-center gap-2.5 p-0 h-auto"
            >
              <img
                className="h-6"
                alt="Shopping Cart"
                src="https://c.animaapp.com/md8mfsfaJSDD7I/img/icons.svg"
              />
              <span className="font-body-small-medium text-black text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)]">
                Sepet
              </span>
            </Button>
          </div>

          {/* Currency and Balance */}
          <div className="flex items-center gap-2">
            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-9 px-1.5 py-[15px] bg-[#8c52ff] rounded-md shadow-[0px_6px_6px_#00000040,inset_0px_6px_6px_#ffffff40,0px_1.5px_0px_#1c9304] hover:bg-[#8c52ff]">
                  <div className="flex items-center gap-1.5">
                    <img
                      className="w-4 h-4"
                      alt="Circle flags lang tr"
                      src="https://c.animaapp.com/md8mfsfaJSDD7I/img/circle-flags-lang-tr.svg"
                    />
                    <span className="[font-family:'Fredoka',Helvetica] font-semibold text-[#f4fafb] text-lg">
                      TRY
                    </span>
                    <ChevronDownIcon className="w-4 h-4 text-[#f4fafb]" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>TRY</DropdownMenuItem>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Balance */}
            <Button className="h-9 px-1.5 py-[15px] bg-[#8c52ff] rounded-md shadow-[0px_6px_6px_#00000040,inset_0px_6px_6px_#ffffff40,0px_1.5px_0px_#1c9304] hover:bg-[#8c52ff]">
              <span className="[font-family:'Fredoka',Helvetica] font-semibold text-[#f4fafb] text-lg">
                0.00 ₺
              </span>
            </Button>
          </div>

          {/* Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center justify-between w-[148px] h-9 px-2 py-1 rounded-[10px] border border-solid border-[#f1f1f1] bg-transparent"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-6 h-6">
                    <UserIcon className="w-4 h-4 absolute top-1 left-1" />
                  </div>
                  <span className="font-body-small-medium text-black text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)]">
                    Hesabım
                  </span>
                </div>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Siparişlerim</DropdownMenuItem>
              <DropdownMenuItem>Çıkış</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
