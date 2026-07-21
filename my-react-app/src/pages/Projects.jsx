import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ImageShape } from "../components/ImageShape"

import { FaFilter } from "react-icons/fa6";

import {useState, useEffect} from 'react';
import { CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function Projects() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let categoriesList = [
        {id: 0, category: "Website"},
        {id: 1, category: "Hackathon"},
        {id: 2, category: "Browser extension"},
        {id: 3, category: "Program"},
        {id: 4, category: "Mod"}
    ]

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
            setLoading(false);
        })

    }, [])

    if (loading) return (
        <>
        <h1>Projects</h1>
        <p>Loading...</p>
        </>
    )

    return (
        <>
            <div className="flex flex-col h-[calc(100vh-9rem)]">
                <ScrollArea>
                    <div className="flex flex-col gap-4 p-4">
                    {data.length>0 ? data.map((projects) => (
                        <Card key={projects.key} link={projects.link} color={projects.color}>
                            <CardHeader>
                                <CardTitle>{projects.title}</CardTitle>
                                <CardDescription>{projects.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="vstack">
                                    <ImageShape shape={projects.image.shape} path={projects.image.path}/>

                                    <div className="flex flex-row gap-4">
                                        {projects.categories.map((item, index) => (
                                            <Badge variant="accent" key={index}>{item}</Badge>
                                        ))}
                                    </div>

                                </div>
                            </CardContent>

                        </Card>
                    )) : <p>no results for that search :(</p>}
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}
