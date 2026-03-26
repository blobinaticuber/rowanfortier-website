import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"

import {useState, useEffect} from 'react';

export function Projects() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        })

    }, [])

    if (loading) return (
        <>
        <h1>Projects</h1>
        <p>Loading...</p>
        <Footer/>
        </>
    )

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

            <Footer/>
        </>
    )
}
