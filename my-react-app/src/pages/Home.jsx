import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { ImageShape } from '../components/ImageShape'

export function Home() {
    return (
        <>
            <h1>Rowan Fortier</h1>

            {/* <div className="vstack"> */}
                <Card color="var(--yellow)">
                    <div className="hstack">
                        <ImageShape border shape="square" path="/rowan.png"/>
                        <div className="vstack">
                            <h2>About me</h2>
                            <p>I'm a Computer Science student studying at the University of British Columbia. My interests are in web and app development, and a bit of computer graphics and game development. Some personal hobbies/interests I have are photography, astronomy, juggling, and twisty puzzles.</p>
                        </div>
                    </div>
                </Card>

                <h2>Featured Projects</h2>

                <div className="grid3">

                    <Card color="var(--red)" link="https://decimaltime.rowanfortier.com/">
                        <div className="vstack">
                                <ImageShape path="/projects/decimaltime.svg"/>
                                <div className="vstack">
                                    <h2>Decimal Time</h2>
                                </div>
                        <p>Explores a system of telling time based on decimally related units.</p>
                        </div>
                    </Card>

                    <Card color="var(--purple)" link="https://hypercubing.xyz/">
                        <div className="vstack">
                                <ImageShape path="/projects/HSC2.svg"/>
                                <div className="vstack">
                                    <h2>Hypercubing.xyz</h2>
                                </div>
                        <p>Wiki and leaderboard system for the hypercubing community.</p>
                        </div>
                    </Card>

                    <Card color="var(--gray)" link="https://github.com/blobinaticuber/3x3x3-simulator">
                        <div className="vstack">
                                <ImageShape shape="squircle" path="/projects/processing-3x3x3.png"/>
                                <div className="vstack">
                                    <h2>3x3x3 Simulator</h2>
                                </div>
                        <p>Rubik's Cube simulator that uses linear algebra for graphics and puzzle state.</p>
                        </div>
                    </Card>

                </div>


            {/* </div> */}

            <Footer/>
        </>
    )
}
