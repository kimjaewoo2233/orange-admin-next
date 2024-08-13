import Input from "../ui/input";
import Image from "next/image";

export default function SearchBox(){

    return (
        <div className="relative w-fit h-fit">
            <Input variant="home" className="" placeholder="Search..."/>
            <span className="absolute inset-y-0 right-2 flex items-center h-full">
                <Image src={"/icons/magnifier.svg"} height={20} width={20} alt="magnifier"/>
            </span>
        </div>
    )
}