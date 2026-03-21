import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"

export function Projects() {
    return (
        <>
            <h1>Projects</h1>
                <h2>Hackathons</h2>
                <div className="grid">
                    <Card color="var(--pink)">
                        <ImageShape border shape="circle" path="/src/assets/projects/helloStarsLogo.png"/>
                        <div className="vstack">
                            <h2>Hello, Stars!</h2>
                            <p>First place project of the 2025 Girls in Tech Hackathon. Hello, Stars! is a gamified platform to learn about stargazing - complete with user accounts, image recognition, database integration, and more.</p>
                        </div>
                    </Card>

                    <Card color="var(--blue">
                        <ImageShape shape="squircle" path="/src/assets/projects/canvasConnectLogo.png"/>
                        <div className="vstack">
                            <h2>Canvas Connect</h2>
                            <p>First place winning project of the C<sup>2</sup> Hacks 2025 hackathon. Canvas Connect is a browser extension that adds new ways to discover clubs, school events, and group chat with classmates directly in Canvas!</p>
                        </div>
                    </Card>

                </div>
                <h2>Personal Projects</h2>

            <Footer/>
        </>
    )
}
