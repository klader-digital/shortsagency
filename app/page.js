"use client"

import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {
    Bar,
    BarChart,
    CartesianGrid, Label,
    LabelList, Line, LineChart,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
    XAxis
} from "recharts";
import {Overview} from "@/components/overview";
import {useEffect, useState} from "react";

export default function Home() {
    const [currentClient, setCurrentClient] = useState(0)
    const clients = [
        'BIJBASSIE',
        'Dunkin Donuts',
        'Bol.com',
        'Coolblue',
    ]

    const viewsPerVideoChartData = [
        {month: "January", desktop: 186},
        {month: "February", desktop: 305},
        {month: "March", desktop: 237},
        {month: "April", desktop: 73},
        {month: "May", desktop: 209},
        {month: "June", desktop: 214},
    ]

    const viewsPerVideoChartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
    }

    const videoChartData = [
        {browser: "safari", visitors: 6, fill: "var(--color-safari)"},
    ]

    const videoChartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-1))",
        },
    }

    const followersChartData = [
        {month: "January", desktop: 4120, mobile: 80},
        {month: "February", desktop: 8021, mobile: 200},
        {month: "March", desktop: 18691, mobile: 120},
        {month: "April", desktop: 24806, mobile: 190},
        {month: "May", desktop: 32600, mobile: 130},
        {},
        {month: "June", desktop: 45000, mobile: 140},
    ]

    const followersChartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClient((currentClient + 1) % clients.length)
            // every 2 minutes,
        }, 120000)

        return () => clearInterval(interval)
    }, [clients.length, currentClient])


    return (
        <main id="wrapper">
            <div>
                <div className="px-8 pt-12 mx-auto grid items-start gap-y-8">
                    <div className="flex items-end justify-between">
                        <h1 className="text-3xl font-display uppercase">Dashboard</h1>
                        <div className="flex items-center gap-x-12">
                            <div className="flex items-center gap-x-4">
                                <div
                                    className="size-20 bg-[#FB5643] rounded-full border-white border-2 relative grid place-items-center">
                                    <Image src={'/bassie.svg'} alt={'placeholder'} width={80} height={80}
                                           className="object-contain size-14"/>
                                </div>
                                <div className="leading-snug">
                                    <p className="text-[#A3A3A3]">Account</p>
                                    <p className="text-xl font-display">{clients[currentClient]}</p>
                                </div>
                            </div>
                            <p className="text-xl font-display uppercase -rotate-6 opacity-20">SHORTS<br/>AGENCY</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Likes</CardTitle>
                                    <CardDescription>7.800</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs text-green-400 mb-2">+9.2% ten opzichte van vorige periode</p>
                                    <Progress value={65} aria-label="65% increase"/>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs">Goal: 12.000</p>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Comments</CardTitle>
                                    <CardDescription>1.843</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs text-red-400 mb-2">-4.1% ten opzichte van vorige periode</p>
                                    <Progress value={37} aria-label="37% increase"/>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs">Goal: 5.000</p>
                                </CardFooter>
                            </Card>

                            <Card className="col-span-full">
                                <CardHeader>
                                    <CardTitle>Views</CardTitle>
                                    <CardDescription>1.694.200</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs text-green-400 mb-2">+2.4% ten opzichte van vorige periode</p>
                                    <Progress value={90} aria-label="90% increase"/>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-xs">Goal: 2.000.000</p>
                                </CardFooter>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Volgers</CardTitle>
                                <CardDescription>45.000</CardDescription>
                            </CardHeader>
                            <CardContent className="grow">
                                <ChartContainer config={followersChartConfig}>
                                    <LineChart
                                        accessibilityLayer
                                        data={followersChartData}
                                        margin={{
                                            top: 20,
                                            left: 20,
                                            right: 20,
                                        }}
                                    >
                                        <CartesianGrid vertical={false}/>
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent indicator="line"/>}
                                        />
                                        <Line
                                            dataKey="desktop"
                                            type="natural"
                                            stroke="var(--color-desktop)"
                                            strokeWidth={2}
                                            dot={{
                                                fill: "var(--color-desktop)",
                                            }}
                                            activeDot={{
                                                r: 6,
                                            }}
                                        >
                                            <LabelList
                                                position="top"
                                                offset={12}
                                                className="fill-foreground"
                                                fontSize={12}
                                            />
                                        </Line>
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs">Goal: 50.000</p>
                            </CardFooter>
                        </Card>


                        <Card>
                            <CardHeader>
                                <CardTitle>Views per video</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={viewsPerVideoChartConfig}>
                                    <BarChart
                                        accessibilityLayer
                                        data={viewsPerVideoChartData}
                                        margin={{
                                            top: 20,
                                        }}
                                    >
                                        <CartesianGrid vertical={false}/>
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            tickMargin={10}
                                            axisLine={false}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel/>}
                                        />
                                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                                            <LabelList
                                                position="top"
                                                offset={12}
                                                className="fill-foreground"
                                                fontSize={12}
                                            />
                                        </Bar>
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Video&#39;s</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer
                                    config={videoChartConfig}
                                    className="mx-auto aspect-square max-h-[250px]"
                                >
                                    <RadialBarChart
                                        data={videoChartData}
                                        startAngle={180}
                                        endAngle={0}
                                        innerRadius={80}
                                        outerRadius={110}
                                    >
                                        <PolarGrid
                                            gridType="circle"
                                            radialLines={false}
                                            stroke="none"
                                            polarRadius={[86, 74]}
                                        />
                                        <RadialBar dataKey="visitors" background cornerRadius={10}/>
                                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                            <Label
                                                content={({viewBox}) => {
                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                        return (
                                                            <text
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="middle"
                                                            >
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={viewBox.cy}
                                                                    className="fill-foreground text-4xl font-bold"
                                                                >
                                                                    {videoChartData[0].visitors}/12
                                                                </tspan>
                                                                <tspan
                                                                    x={viewBox.cx}
                                                                    y={(viewBox.cy || 0) + 24}
                                                                    className="fill-muted-foreground"
                                                                >
                                                                    Video&#39;s
                                                                </tspan>
                                                            </text>
                                                        )
                                                    }
                                                }}
                                            />
                                        </PolarRadiusAxis>
                                    </RadialBarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Adspend</CardTitle>
                                <CardDescription>€250</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={50} aria-label="50% increase"/>
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs">Budget: €450</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <div className="px-8 pt-12 mx-auto grid items-start gap-y-4">
                    <div className="flex items-baseline justify-between gap-x-32">
                        <h1 className="text-3xl font-display uppercase">Leaderboard</h1>
                        <div className="flex items-center gap-x-4 grow pr-6">
                            <p className="basis-full leading-none tracking-tight text-[#A3A3A3]">Volgers</p>
                            <p className="basis-full leading-none tracking-tight text-[#A3A3A3]">Likes</p>
                            <p className="basis-full leading-none tracking-tight text-[#A3A3A3]">Views</p>
                            <p className="basis-full leading-none tracking-tight text-[#A3A3A3] whitespace-nowrap">Totaal
                                aantal views</p>
                        </div>
                    </div>

                    <Overview/>
                </div>
            </div>
        </main>
    );
}
