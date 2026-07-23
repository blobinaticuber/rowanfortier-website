import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js"

type LinkProps = {
    url: string,
    name: string,
    handle: string,
    icon?: React.ReactElement
    imageurl?: string
}

function BoxedLink(link: LinkProps) {
    return (
        <a href={link.url} target="_blank">
            <Card className="md:min-w-xs">
                <CardContent className="hover:underline flex flex-row md:flex-col items-center justify-evenly md:justify-start md:items-start">
                    {link.icon? link.icon : link.imageurl? <img className="h-[2em] w-[2em]" src={link.imageurl}/> : ""}
                    <p className="font-heading mt-3 text-lg sm:text-xl">
                        {link.name}
                    </p>
                    <p className="font-base mt-1 text-sm sm:text-base hidden md:block">
                        {link.handle}
                    </p>
                </CardContent>
            </Card>
        </a>


    )
}

export {BoxedLink}
