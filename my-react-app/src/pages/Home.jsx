import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '../components/Footer'
import { BoxedLink } from '../components/BoxedLink'
import { ImageCard} from '../components/ui/image-card'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export function Home() {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row pb-4">
                <ImageCard
                    caption="Rowan Fortier"
                    imageUrl='/rowan.png'
                    className="w-full md:w-1/3"
                />

                <Card>
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Fourth-year Computer Science student studying at the University of British Columbia. My interests are in web and app development, and a bit of computer graphics and game development. Some personal hobbies/interests I have are photography, astronomy, juggling, and twisty puzzles.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
                <a href="https://www.youtube.com/watch?v=QTc-rG-nunA" target="_blank">
                    <ImageCard
                        caption="900K+ views..."
                        imageUrl='https://img.youtube.com/vi/QTc-rG-nunA/maxresdefault.jpg'
                        className="w-full pr"
                    />
                </a>

                <div className="flex flex-col justify-between gap-4">
                    <BoxedLink
                        url="https://github.com/blobinaticuber"
                        name="GitHub"
                        handle="@blobinaticuber"
                        icon={<FaGithub/>}
                    />

                    <BoxedLink
                        url="https://www.linkedin.com/in/rowan-fortier-b53261354/"
                        name="LinkedIn"
                        handle="Rowan Fortier"
                        icon={<FaLinkedin/>}
                    />

                    <BoxedLink
                        url="https://www.youtube.com/@RowanFortier"
                        name="YouTube"
                        handle="@rowanfortier"
                        icon={<FaYoutube/>}
                    />
                </div>

            </div>




        </>
    )
}
