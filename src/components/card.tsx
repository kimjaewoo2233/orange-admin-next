import Image from "next/image";
import Text from "@/components/ui/text";
import { formattedDateForENUS } from "@/lib/formatting";

type CardKind = "sales" | "customers" | "avg";

const cardKind: { [key in CardKind]: { src: string; title: string} } = {
    sales: {
        src: "/icons/sales-icon.svg",
        title: "Sales"
    },
    customers:{
        src: "/icons/customers.svg",
        title: "Customers"
    },
    avg: {
        src: "/icons/money.svg",
        title: "Avg Revenue"
    },
}

type CardProps = {
    kind: CardKind;
}

export default function Card({
    kind
}: CardProps) {

    const cardSrcWithTitle = cardKind[kind];

    return (
        <section className="w-[15em] h-[5em] bg-white rounded-lg flex items-center px-2 gap-3">
            <Image src={cardSrcWithTitle.src} width={55} height={55} alt={"sales"} />
            
            <div className="flex flex-col gap-0 grow">
                <div className="flex flex-row justify-between items-center">
                    <Text className="font-normal" size="15px">{cardSrcWithTitle.title}</Text>
                    
                    <Text className="text-[12px]" size="10px">
                        {formattedDateForENUS({ date: new Date()})}
                    </Text>
                </div>
                <Text className="font-normal" size="12px">$230,220</Text>
                <div className="flex flex-row items-center">
                    <Image src="/icons/increse-arrow.svg" width={20} height={20} alt={"increse"}/>
                    <Text size="12px" color="#FF8E29"> +55% last month</Text>
                </div>
            </div>
        </section>
    )
}