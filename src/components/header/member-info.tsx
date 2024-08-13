"use client"

import Image from "next/image";
import Text from "@/components/ui/text";
import { useState } from "react";
import clsx from "clsx";

export default function MemberInfo() {
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

    const handleDropDown = () => {
        setDropDownOpen(isOpen => !isOpen);
    }
    return (
        <div className="flex flex-row gap-4 items-center relative max-md:hidden">
            <Image src="/lading_1.png" width={45} height={45} alt="v" className="rounded-[100%]"/>

            <div onClick={handleDropDown} className="cursor-pointer flex flex-row items-center gap-2">
                <Text>
                    Kim Uc ware
                </Text>

                <Image src="/icons/mini-arrow.svg" width={12} height={12} alt="v"/>

            </div>
            <ul className={clsx("border border-solid bg-white w-[150px] absolute -right-2 top-10 rounded-md shadow-dropdown",{
                "hidden":!dropDownOpen,
            })}>
                <li className="text-center border-b-[1px]">drop down1</li>
                <li className="text-center border-b-[1px]">drop down2</li>
                <li className="text-center border-b-[1px]">drop down3</li>
            </ul>
        </div>
    )
}