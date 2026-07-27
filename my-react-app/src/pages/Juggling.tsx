import { BoxedLink } from "@/components/BoxedLink.tsx";
import { ImageCard } from "@/components/ui/image-card.tsx";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { FaTrophy } from 'react-icons/fa'


export function Juggling() {
    return (
        <>
            <h1 className="text-3xl pb-6">Juggling</h1>
            <div className="flex flex-col md:flex-row justify-evenly gap-4 pb-4">
                <BoxedLink
                    url="https://www.juggling-records.com/juggler_page?j=0mf"
                    name="juggling-records.com"
                    handle="Rowan Fortier"
                    icon={<FaTrophy/>}
                    // imageurl="https://assets.worldcubeassociation.org/assets/7c6601d/assets/WCA%20Logo-4ef000323c6a9a407cdf07647a31c0ef4dc847f2352a9a136ef3e809e95bdeab.svg"
                />
            </div>
            <p>I learned how to juggle in the summer of 2020. Since then it hasn't quite taken over my life like cubing has, but I still pick it up every now and then to learn some new tricks.</p>


            <div className="flex flex-col md:flex-row justify-evenly gap-4 pt-4">
                <a href="https://www.youtube.com/watch?v=DfZzdu1bLbU " target="_blank" className="w-full md:w-1/3">
                    <ImageCard
                        caption='How I Learned To Juggle...'
                        imageUrl='https://img.youtube.com/vi/DfZzdu1bLbU/maxresdefault.jpg'
                        className="w-full"
                    />
                </a>

                <a href="https://www.youtube.com/watch?v=bOKdRMi4sjo " target="_blank" className="w-full md:w-1/3">
                    <ImageCard
                        caption='I Learned How To Juggle While Cubing One Handed!'
                        imageUrl='https://img.youtube.com/vi/bOKdRMi4sjo/maxresdefault.jpg'
                        className="w-full"
                    />
                </a>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <Table className="w-full">
                    <TableCaption className="text-text">
                        A list of 2-ball juggling patterns that I can do
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>2-ball Pattern</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Fountain</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Reverse fountain</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Columns</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="w-full">
                    <TableCaption className="text-text">
                        A list of 3-ball juggling patterns that I can do
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>3-ball Pattern</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Cascade</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Reverse cascade</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tennis</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Half shower</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Shower</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Columns</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mills Mess</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Windmill</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Factory</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

                <Table className="w-full">
                    <TableCaption className="text-text">
                        A list of 4-ball juggling patterns that I can do
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>4-ball Pattern</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Fountain</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sync fountain</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Columns</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
