import { BoxedLink } from "@/components/BoxedLink.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart.tsx";
import { ImageCard } from "@/components/ui/image-card.tsx";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { FaTrophy } from 'react-icons/fa'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-text)",
  },
} satisfies ChartConfig

const chartData = [
    {x: '2016-09-22', y: 20.296},
    {x: '2016-09-26', y: 19.889},
    {x: '2016-09-28', y: 19.047},
    {x: '2016-10-01', y: 15.696},
    {x: '2016-11-20', y: 15.017},
    {x: '2016-12-11', y: 11.485},
    {x: '2018-01-10', y: 10.71},
    {x: '2020-03-17', y: 9.695},
    {x: '2020-03-30', y: 9.694},
    {x: '2020-12-26', y: 9.548},
    {x: '2021-01-05', y: 8.574},
    {x: '2021-02-23', y: 8.182},
    {x: '2025-07-11', y: 7.09},
]

export function Cubing() {
    return (
        <>
            <h1 className="text-3xl pb-6">Cubing</h1>
            <div className="flex flex-col md:flex-row justify-evenly gap-4">
                <BoxedLink
                    url="https://www.worldcubeassociation.org/persons/2016FORT03"
                    name="WCA Profile"
                    handle="2016FORT03"
                    imageurl="https://assets.worldcubeassociation.org/assets/7c6601d/assets/WCA%20Logo-4ef000323c6a9a407cdf07647a31c0ef4dc847f2352a9a136ef3e809e95bdeab.svg"
                />
                <BoxedLink
                    url="https://cubepb.com/user?id=643&expand=0"
                    name="cubepb.com"
                    handle="2016FORT03"
                    icon={<FaTrophy/>}
                />
                <BoxedLink
                    url="http://www.thecubicle.com"
                    name="thecubicle.com"
                    handle="Code Rowan for 5% off"
                    imageurl="/cubing/cubicle.png"
                />
                <BoxedLink
                    url="https://www.speedsolving.com/wiki/index.php?title=Rowan_Fortier"
                    name="speedsolving.com wiki"
                    handle="Rowan Fortier"
                    imageurl="https://www.speedsolving.com/wiki/images/ss-wiki-logo.png"
                />
            </div>

            <h2 className="text-xl pt-6 pb-6">History</h2>

            <div className="*:pb-4">

                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">January 2016</h3>
                        <p>We always had a few Rubik's Cubes around the house when I was a kid, but in January 2016 I noticed my mom playing with a Rubik's Cube every now and then. She challenged me to see who could build a side of a single colour the fastest. She always won...</p>
                    </div>
                        <ImageCard
                        caption="Trying to build a side of a single colour"
                        imageUrl='/cubing/jan2016.png'
                        className="w-full md:w-1/2"
                    />
                </div>

                <div className="flex flex-col md:flex-row-reverse">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">March 2016</h3>
                        <p>One day I looked up a full tutorial on how to solve the cube, and pretended like I had figured it out myself to show off to my mom. My first ever timed solve was about 10 minutes. This was the beginning of an obsession thas has lasted for over a decade.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">April 2016</h3>
                        <p>By April I had ordered several cubes and accessories online such as 2x2, 4x4, pyraminx, and a gear cube. My 3x3 PB was 31.7 seconds, and I averaged 38 seconds.</p>
                    </div>
                        <ImageCard
                        caption="Solving a 3x3x3 with a stackmat timer"
                        videoUrl='/cubing/april2016.mp4'
                        className="w-full md:w-1/2"
                    />
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">August 2016</h3>
                        <p>By August I had a small collection of puzzles I ordered, as well as a couple of hand-made mods and inventions.</p>
                    </div>
                        <ImageCard
                        caption="August 2016 cube collection"
                        imageUrl='/cubing/collection_2016.JPG'
                        className="w-full md:w-2/3"
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">December 2016</h3>
                        <p>My mom took me to my first speedsolving competition (Eugene Fall 2016). I placed 29th in the second round of 3x3, with a time of 21.55 seconds.</p>
                    </div>
                        <ImageCard
                        caption="Competing in pyraminx at my first competition"
                        imageUrl='/cubing/eugene_fall_2016.jpg'
                        className="w-full md:w-2/3"
                    />
                </div>

                <div className="flex flex-col md:flex-row-reverse">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">2017-2019</h3>
                        <p>During this time I went to 10 more competitions, including the Northwest Championships 2017 which was the biggest competition I had attended so far. I never got very good at speedsolving, so I developed other interests like developing new methods and collecting many puzzles.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">2020-2024</h3>
                        <p>I began making more and more cubing videos on YouTube as COVID-19 lockdowns hit. My channel started to get noticed more and more until I landed a sponsorship with the online puzzle retailer TheCubicle. This is also when I discovered hypercubing (higher dimensional puzzles) and became extremely active in that community.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg pt-6 pb-6">July 2025</h3>
                        <p>The Rubik's WCA World Championship 2025. I went as just a spectator, but I got to meet my online hypercubing friends, try out crazy puzzles, and watch world records holders speedsolve.</p>
                    </div>
                        <ImageCard
                        caption="Hypercubers meet up at Worlds 2025"
                        imageUrl='/cubing/worlds_2025.jpg'
                        className="w-full md:w-2/3"
                    />
                </div>



            </div>

            <h2 className="text-xl pt-6 pb-6">Speedsolving</h2>
            <p>I've competed in 11 official competitions, and spectated at the 2025 World Championships. Check out my <a target="_blank" className="underline text-accent" href="https://www.worldcubeassociation.org/persons/2016FORT03">World Cube Association</a> profile to see my official results and rankings.</p>

            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>3x3x3 personal best (seconds)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                            left: 12,
                            right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                            dataKey="x"
                            // scale="time"
                            // type="number"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            stroke="var(--color-text)"
                            // tickFormatter={(value) => value.slice(0, 4)}
                            />
                            <YAxis
                            dataKey="y"
                            stroke="var(--color-text)"
                            />
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                            />
                            <Line
                            dataKey="y"
                            type="stepAfter"
                            stroke="var(--color-accent)"
                            strokeWidth={2}
                            dot={{stroke: "var(--color-text)", fill: "var(--color-text)"}}
                            />

                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            <div className="flex flex-col md:flex-row mt-4">
                <a href="https://www.youtube.com/watch?v=g5kLpQLFnHs" target="_blank" className="w-full md:w-1/3">
                        <ImageCard
                            caption='My fastest solve on camera: "7.71 3x3 w/ CMLL, 4a, and 4b skip"'
                            imageUrl='https://img.youtube.com/vi/g5kLpQLFnHs/maxresdefault.jpg'
                            className="w-full"
                        />
                    </a>
                <div className="flex flex-col justify-center pl-4">
                    <h3 className="text-lg pt-6 pb-6">Fastest solve (on camera)</h3>
                    <p>Generated By csTimer on 2025-07-14</p>
                    <p>single: 7.71</p>
                    <p>Time List:</p>
                    <p>1. 7.71   D2 L2 B' D2 R2 B R2 B L2 B2 U' B2 D2 R U2 F R D L'</p>
                    <p>Reconstruction:</p>
                    <p>y z // inspection</p>
                    <p>L U R' Uw L U L' U L U' L' // FB</p>
                    <p>U R' M R U' R' U M2 U R' U2 R // SB</p>
                    <p>// CMLL, 4a, & 4b skip</p>
                    <p>U' M U2 M' // 4c</p>
                </div>
            </div>

            <h2 className="text-xl pt-6 pb-6">Hypercubing</h2>

            <p>Hypercubing is the hobby of solving twisty puzzles in a higher amount of spatial dimensions rather than the usual 3D space. These puzzles are mathematically well defined, and can be visualized and simulated using computer software. </p>

            <Table>
                <TableCaption className="text-text">
                    My personal hypercubing achievements
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Puzzle</TableHead>
                        <TableHead>First Solve</TableHead>
                        <TableHead>Solution Ranking</TableHead>
                        <TableHead>Fastest Solve</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>3x3x3x3</TableCell>
                        <TableCell>2021-03-06</TableCell>
                        <TableCell>432</TableCell>
                        <TableCell>3m 00.31s</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Physical 2x2x2x2</TableCell>
                        <TableCell>2021-11-04</TableCell>
                        <TableCell>22</TableCell>
                        <TableCell>1m 18.24s</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3x3x3x3x3</TableCell>
                        <TableCell>2024-03-21</TableCell>
                        <TableCell>99</TableCell>
                        <TableCell>58m 47.79s</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3x3x3x3x3x3</TableCell>
                        <TableCell>2024-06-24</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>47h 23m 16.08s</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
