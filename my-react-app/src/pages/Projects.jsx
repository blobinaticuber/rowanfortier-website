import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import './Projects.css'
import { ImageShape } from "../components/ImageShape"

import { FaFilter } from "react-icons/fa6";

import {useState, useEffect} from 'react';

export function Projects() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching JSON');
            }
            return response.json();
        })
        .then(data => {
            data.projects.sort((a,b) => new Date(b.created) - new Date(a.created))
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
            <div className="controls">
                <button className="filter-button" onClick={()=> setFilterOpen(!filterOpen)}><FaFilter /> Filter</button>
                <div className={ filterOpen ? "filter-dropdown-open" : "filter-dropdown"}>
                    <p>Website ({data.filter(c => c.categories.includes("Website")).length})</p>
                    <p>Hackathon ({data.filter(c => c.categories.includes("Hackathon")).length})</p>
                    <p>Browser extension ({data.filter(c => c.categories.includes("Browser extension")).length})</p>
                    <p>Program ({data.filter(c => c.categories.includes("Program")).length})</p>
                    <p>Mod ({data.filter(c => c.categories.includes("Mod")).length})</p>
                </div>
                <input onKeyDown={searchUpdate} onInput={searchUpdate} type="text" placeholder="Search..."></input>
            </div>

                <div className="grid">
                {filteredData.length>0 ? filteredData.map((projects) => (
                    <Card className="project-card" key={projects.key} link={projects.link} color={projects.color}>
                        <div className="vstack">
                            <ImageShape shape={projects.image.shape} path={projects.image.path}/>
                            <h2 className="project-card-h2">{projects.title}</h2>
                            <div className="pillbox">
                                {projects.categories.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                            <p className="desc">{projects.description}</p>
                        </div>
                    </Card>
                )) : <p>no results for that search :(</p>}
                </div>

            <Footer/>
        </>
    )
}
