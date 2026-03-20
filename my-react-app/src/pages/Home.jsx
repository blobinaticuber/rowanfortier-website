import { Card } from '../components/Card'
import { ImageCircle } from '../components/ImageCircle'

export function Home() {
    return (
        <>
            <h1>Rowan Fortier </h1>
            <Card color= "#FF6B6B"
            title="About me"
            text="Hi there! I'm an undergraduate Computer Science student studying at the University of British Columbia. My interests are in web/app development, and computer graphics. Outside of school, I enjoy exploring nature, working out, and astronomy."
            img="/src/assets/rowan.png"
            />
            {/* <ImageCircle img="a" path="/src/assets/rowan.png"/> */}
        </>
    )
}
