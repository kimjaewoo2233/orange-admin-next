import Sidebar from "@/components/sidebar";
import MenuItem from "@/components/ui/menu-item";



export default function ComPage() {
    return (
        <div className="flex flex-row gap-4 h-screen items-center justify-center p-10">
            <Sidebar/>

            <div className="grow bg-slate-600 h-full">
                text
            </div>
        </div>
    )
}