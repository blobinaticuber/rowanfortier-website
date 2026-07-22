import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ImageShape } from "../components/ImageShape"
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'


import { FaFilter } from "react-icons/fa6";

import {useState, useEffect} from 'react';
import { CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";

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
        <Card>
            <CardContent className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <Skeleton
                    className="w-full md:w-2/3 aspect-video"
                    />
                </div>
                <Skeleton className="h-6 w-1/4"/>
                <Skeleton className="h-4 w-full"/>
            </CardContent>
        </Card>
        </>
    )

    return (
        <>
            <div className="flex flex-col h-[calc(100vh-9rem)]">
                <ScrollArea>
                    <div className="flex flex-col gap-4 p-4">
                    {data.length>0 ? data.map((projects) => (
                        <Card>
                            <CardHeader>
                                <CardAction>
                                    <Button variant="accent">View on GitHub</Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <div className="flex justify-center">
                                    <img
                                    className="rounded-base w-full md:w-2/3 shadow-shadow border-2"
                                    src={`${projects.image.path}`}
                                    alt="name"
                                    />
                                </div>
                                <p className="text-2xl">{projects.title}</p>
                                <div className="flex gap-2">
                                    {projects.categories.map((item, index) => (
                                        <Badge variant="accent" key={index}>{item}</Badge>
                                    ))}
                                </div>
                                <p>{projects.description}</p>
                            </CardContent>
                        </Card>
                    )) : <p>No projects found</p>}
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}
