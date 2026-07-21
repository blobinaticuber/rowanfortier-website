import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '../components/Footer'
import { ImageShape } from '../components/ImageShape'
import { ImageCard} from '../components/ui/image-card'

export function Home() {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row">
                <ImageCard
                    caption="Rowan Fortier"
                    imageUrl='/rowan.png'
                    className="w-1/3"
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

            <Footer/>
        </>
    )
}
