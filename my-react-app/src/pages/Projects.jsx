import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"
import { MdDeveloperBoard } from "react-icons/md";

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
                        <MdDeveloperBoard style={{width: `10em`, height: `10em`, margin: `0.5em`}}/>
                        <div className="vstack">
                            <h2>Canvas Connect</h2>
                            <p>First place winning project of the C<sup>2</sup> Hacks 2025 hackathon. Canvas Connect is a browser extension that adds new ways to discover clubs, school events, and group chat with classmates directly in Canvas!</p>
                        </div>
                    </Card>

                </div>

                <h2>Personal Projects</h2>

                <div className="grid">
                    
                    <Card color="var(--purple)">
                        <ImageShape shape="squircle" path="/src/assets/projects/HSC2.svg"/>
                        <div className="vstack">
                            <h2>Hypercubing.xyz</h2>
                            <p>A wiki and leaderboard for the hypercubing community. I worked on the content and organization for many of the pages, as well as the frontend of the new leaderboard and verifying submissions.</p>
                        </div>
                    </Card>

                </div>


            <Footer/>
        </>
    )
}
