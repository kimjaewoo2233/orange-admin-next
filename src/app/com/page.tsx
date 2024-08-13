import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/ui/menu-item";



export default function ComPage() {
    return (
        <div className="flex flex-row gap-4 h-screen items-center justify-center p-5">
            <Sidebar/>

            <div className="grow bg-slate-600 h-full space-y-7">
                <section className="w-full h-[50px] bg-black">
                    {/* <Text>Search Bar</Text> */}
                </section>

               <section className="w-full flex flex-row justify-center max-md:flex-col gap-8 2xl:gap-40">
                    <Card kind="sales"/>
                    <Card kind="customers"/>
                    <Card kind="avg"/>
               </section>
            </div>
        </div>
    )
}