"use client"
import { UICommonProps } from "@/@types";
import { ElementType, useState } from "react";
import Image from "next/image";
import Text from "./text";
import clsx from "clsx";

type MenuKind = "home" | "application";

const menuIcon: { [key in MenuKind]: {
    src: string;
    text: string;
    clickedImage: string;
    children?: {
        link: string;
        text: string;
    }
}} = {
    home:{
        src: "/icons/home-menu.svg",
        text: "Home",
        clickedImage:"/icons/event/home-menu.svg"
    },
    application: {
        src: "",
        text: "",
        clickedImage:""
    }
}

export default function MenuItem<T extends ElementType = "section">({
    as,
    children,
    variant,
    ...props
}:UICommonProps<T, MenuKind>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const menuIconSrc = menuIcon[variant || "home"].src;
    const menuText = menuIcon[variant || "home"].text;

    const menuClickedIconSrc = menuIcon[variant || "home"].clickedImage;


    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
      <section>
          <section onClick={toggleOpen} className={clsx("flex flex-row justify-between w-[175px] h-[45px] items-center transform duration-400 cursor-pointer px-4 relative",{
            "bg-[#FF8E29] rounded-t-lg": isOpen
            })}>
                <div className="flex flex-row gap-2 items-center">
                    <Image src={menuIconSrc} height={20} width={20} alt={menuIconSrc} 
                        className={clsx("transition-opacity duration-300 ease-in-out",{
                            "opacity-0 absolute": isOpen,
                            "opacity-100": !isOpen, 
                    })}/>
                    <Image src={menuClickedIconSrc} height={20} width={20} alt={menuIconSrc}
                        className={clsx("transition-opacity duration-300 ease-in-out", {
                            "opacity-0 absolute": !isOpen,
                            "opacity-100": isOpen
                        })}
                    />
                    
                    <Text variant="normal" className={clsx("pt-1",{"text-white": isOpen})}>{menuText}</Text>
                </div>

                <div className="">
                    <Image src={"/icons/bottom-arrow.svg"} height={15} width={15} alt={"bottom-arrow"}
                        className={clsx("transition-transform duration-300 ease-in-out",{
                            "rotate-0 opacity-100": !isOpen,
                            "rotate-180 opacity-0 absolute": isOpen
                        })}
                    />
                    <Image src={"/icons/event/top-arrow.svg"} height={15} width={15} alt={"bottom-arrow"}
                        className={clsx("transition-transform duration-300 ease-in-out",{
                            "rotate-180 opacity-0 absolute": !isOpen,
                            "rotate-0 opacity-100": isOpen
                        })}
                    />  
                </div>
        </section>
        
        <ul className={clsx("bg-[#FF8E29] rounded-b-lg overflow-hidden transition-all duration-500 ease-in-out",{
             "max-h-0 py-0 px-0": !isOpen,
             "max-h-[500px] py-4 px-10": isOpen,
        })}>
            <li
                className={clsx(
                    "overflow-hidden transition-all duration-100 ease-in-out max-h-0", // 기본적으로 숨김 처리
                    {
                    "max-h-[50px]": isOpen, // isOpen 상태에 따라 높이 조정
                    }
                )}
            >
                <Text variant="normal" className={clsx("pt-1", {
                    "text-white": isOpen
                })}>
                    {menuText}
                </Text>
            </li>
        </ul>
      </section>
    )
}