import {Card, CardHeader} from "@/components/ui/card";
import Image from "next/image";

export function Overview() {
    const rating = (rating) => {
        // 1: 🏆
        // 2: 🥈
        // 3: 🥉
        // 4+: rating

        if (rating === 1) {
            return '<strong class="text-2xl">🏆</strong>'
        } else if (rating === 2) {
            return '<strong class="text-2xl">🥈</strong>'
        } else if (rating === 3) {
            return '<strong class="text-2xl">🥉</strong>'
        } else {
            return '<strong class="text-sm">' + rating + '</strong>'
        }
    }
    return (
        <div className="space-y-2">
            {Array.from({length: 8}).map((_, index) => (
                <Card key={index}>
                    <CardHeader>
                        <div className="flex items-center gap-x-8">
                            <div className="w-8 text-center" dangerouslySetInnerHTML={{__html: rating(index + 1)}}/>
                            <div className="flex items-center gap-x-6">
                                <div
                                    className="size-10 bg-[#FB5643] rounded-full border-white border-2 relative grid place-items-center">
                                    <Image src={'/bassie.svg'} alt={'placeholder'} width={40} height={40}
                                           className="object-contain size-7"/>
                                </div>
                                <div className="leading-snug">
                                    <p className="text-lg font-display">BIJBASSIE</p>
                                </div>
                            </div>
                            <div className="flex grow ml-16 items-center">
                                <p className="basis-full">1.280
                                    <span className="text-xs text-red-400 ml-2">-0.4%</span>
                                </p>
                                <p className="basis-full">6.768</p>
                                <p className="basis-full">120.000
                                    <span className="text-xs text-green-400 ml-2">+8.9%</span>
                                </p>
                                <p className="basis-full">130.000.000</p>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}
