import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { ImageShape } from '../components/ImageShape'

export function Home() {
    return (
        <>
            <h1>Rowan Fortier </h1>
            <Card color="var(--yellow)">
                <div className="hstack">
                    <ImageShape border shape="square" path="/src/assets/rowan.png"/>
                    <div className="vstack">
                        <h2>About me</h2>
                        <p>I'm a Computer Science student studying at the University of British Columbia. My interests are in web and app development, and a bit of computer graphics and game development. Some personal hobbies/interests I have are photography, astronomy, juggling, and twisty puzzles.</p>
                    </div>
                </div>
            </Card>
            <Footer/>
        </>
    )
}
