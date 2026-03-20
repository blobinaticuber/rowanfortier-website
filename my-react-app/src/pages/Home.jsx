import { Card } from '../components/Card'
import { ImageCircle } from '../components/ImageCircle'
import { Footer } from '../components/Footer'

export function Home() {
    return (
        <>
            <h1>Rowan Fortier </h1>
            <Card color= "#FF6B6B">
                <div className="hstack">
                    <ImageCircle path="/src/assets/rowan.png"/>
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
