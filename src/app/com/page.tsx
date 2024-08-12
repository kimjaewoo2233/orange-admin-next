import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/ui/menu-item";



export default function ComPage() {
    return (
        <div className="flex flex-row gap-4 h-screen items-center justify-center p-5">
            <Sidebar/>

            <div className="grow bg-slate-600 h-full">
                <section className="w-full">
                    {/* <Text>Search Bar</Text> */}
                </section>

               <section className="w-full flex flex-row justify-center gap-8">
                    <Card kind="sales"/>
                    <Card kind="customers"/>
                    <Card kind="avg"/>
               </section>
            </div>
        </div>
    )
}