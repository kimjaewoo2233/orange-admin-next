import MenuItem from "./ui/menu-item";
import Image from "next/image";

export default function Sidebar() {

    return (
        <div className="flex flex-col gap-5 bg-[#FFF] w-[218px] h-[100%] items-center rounded-[20px] shadow-orange max-md:hidden">
           <div className="py-[56px]">
                <Image src={"/logo.svg"} height={500} width={150} alt="LOGO"/>
           </div>
           
           <div>
                <MenuItem/>
                <MenuItem/>  <MenuItem/>  <MenuItem/>
           </div>
        </div>
    )
}