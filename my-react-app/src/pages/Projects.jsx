import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"

import {useState, useEffect} from 'react';

export function Projects() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

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
            setFilteredData(data.projects);
            setLoading(false);
        })

    }, [])

    const searchUpdate = (event) => {
        setSearch(event.target.value);
        setFilteredData(data.filter((project) => (project.description.toUpperCase().includes(search.toUpperCase()))));
    }

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
            <input onChange={searchUpdate} type="text" placeholder="Search..."></input>
                <div className="grid">
                {filteredData.map((projects) => (
                    <Card key={projects.key} link={projects.link} color={projects.color}>
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
