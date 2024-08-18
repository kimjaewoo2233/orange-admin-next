import Card from "@/components/card";
import MemberInfo from "@/components/header/member-info";
import SearchBox from "@/components/header/search-box";
import LincChart from "@/components/line-chart";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/ui/menu-item";



export default function ComPage() {
    return (
        <div className="flex flex-row gap-4 h-screen items-center justify-center p-5">
            <Sidebar/>

            <div className="grow bg-[#fce1c7] h-full space-y-7 p-4 rounded-[20px]">
                <section className="w-full h-[50px] bg-gray-300 flex flex-row justify-between items-center px-6">
                    <SearchBox/>
                    <MemberInfo/>
                </section>

               <section className="w-full flex flex-row justify-center max-md:flex-col gap-8 2xl:gap-40">
                    <Card kind="sales"/>
                    <Card kind="customers"/>
                    <Card kind="avg"/>
               </section>

               <section>
                <LincChart/>
               </section>
            </div>
        </div>
    )
}