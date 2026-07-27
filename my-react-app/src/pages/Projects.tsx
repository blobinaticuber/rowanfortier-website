import { Card } from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import { Skeleton } from '@/components/ui/skeleton.tsx'
import { Button } from '@/components/ui/button.tsx'


import {useState, useEffect} from 'react';
import { CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.js";

export function Projects() {

    type image = {
        shape: string,
        path: string
    }

    type link = {
        name: string,
        url: string
    }

    type project = {
        key: number,
        image: image,
        title: string,
        description: string,
        links?: link[]
        categories: string[],
        created: string
    }

    const [data, setData] = useState<project[]>([]);
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
            setData((data.projects as project[]).sort((a,b) => a.key - b.key))
            setLoading(false);
        })

    }, [])



    if (loading) return (
        <>
        <h1 className="text-3xl pb-6">Projects</h1>
        <Card>
            <CardHeader>
                <Skeleton className="h-6 w-1/4"/>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <Skeleton
                    className="w-full md:w-2/3 aspect-video"
                    />
                </div>
                <Skeleton className="h-4 w-full"/>
            </CardContent>
        </Card>
        </>
    )

    return (
        <>
            <h1 className="text-3xl pb-6">Projects</h1>
            <div className="flex flex-col h-[calc(100vh-9rem)]">
                <ScrollArea>
                    <div className="flex flex-col gap-4 p-4">
                    {data.length>0 ? data.map((project) => (
                        <Card key={project.key}>
                            <CardHeader className="flex flex-col md:flex-row md:justify-between">
                                <CardTitle className="text-2xl">{project.title}</CardTitle>
                            {project.links && project.links.length>0 ?
                                <CardAction className="flex gap-4">
                                {project.links.map((item) => (
                                    <Button variant="accent"><a target="_blank" href={item.url}>{item.name}</a></Button>
                                ))}
                                </CardAction>
                                :
                                <></>
                            }
                            </CardHeader>

                            <CardContent className="flex flex-col gap-4">
                                <div className="flex justify-center">
                                    <img
                                    className="rounded-base w-full md:w-2/3 shadow-shadow border-border border-2"
                                    src={`${project.image.path}`}
                                    alt="name"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {project.categories.map((item, index) => (
                                        <Badge variant="accent" key={index}>{item}</Badge>
                                    ))}
                                </div>
                                <p>{project.description}</p>
                            </CardContent>
                        </Card>
                    )) : <p>No projects found</p>}
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}
