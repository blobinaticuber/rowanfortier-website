import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"
import { MdDeveloperBoard } from "react-icons/md";

import {useState, useEffect} from 'react';
import jsonData from '/public/projects.json'

export function Projects() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching JSON');
            }
            return response.json();
        })
        .then(data => {
            setData(data.projects);
            console.log(data);
        })

    }, [])


    return (
        <>
            <h1>Projects</h1>
                <div className="grid">
                {data.map((projects) => (
                    <Card link={projects.link} color={projects.color}>
                        <div className="vstack">
                            <ImageShape shape={projects.image.shape} path={projects.image.path}/>
                            <h2>{projects.title}</h2>
                            <p>{projects.description}</p>
                        </div>
                    </Card>
                ))}
                </div>

                {/*

                    <Card color="var(--blue)">
                        <div className="vstack">
                            <MdDeveloperBoard style={{width: `10em`, height: `10em`, margin: `0.5em`}}/>
                            <h2>Canvas Connect</h2>
                            <p>First place winning project of the C<sup>2</sup> Hacks 2025 hackathon. Canvas Connect is a browser extension that adds new ways to discover clubs, school events, and group chats with classmates directly in Canvas!</p>
                        </div>
                    </Card>

                </div>

                    <Card link="https://hypercubing.xyz/" color="var(--purple)">
                        <div className="vstack">
                            <ImageShape shape="squircle" path="/projects/HSC2.svg"/>
                            <h2>Hypercubing.xyz</h2>
                            <p>A wiki and leaderboard for the hypercubing community. I worked on the content and organization for many of the pages, as well as the frontend of the new leaderboard and verifying submissions.</p>
                        </div>
                    </Card>

                    <Card link="https://github.com/blobinaticuber/3x3x3-simulator" color="var(--gray)">
                        <div className="vstack">
                            <ImageShape shape="squircle" path="/projects/processing-3x3x3.png"/>
                            <h2>3x3x3 Simulator</h2>
                            <p>My first ever functioning Rubik's Cube simulator program without spaghetti code! It uses linear algebra to keep track of the puzzle state and draw the graphics. There are keybinds for twists and rotations, as well as mouse controls to view the puzzle from different angles.</p>
                        </div>
                    </Card>

                */}


            <Footer/>
        </>
    )
}
