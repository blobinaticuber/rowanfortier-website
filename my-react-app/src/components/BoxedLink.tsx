import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js"

type LinkProps = {
    url: string,
    name: string,
    handle: string,
    icon: React.ReactElement
}

function BoxedLink(link: LinkProps) {
    return (
        <Card className="w-fit">
            <a href={link.url} target="_blank">
                <CardContent className="hover:underline">
                    {link.icon}
                    <p className="font-heading mt-3 text-lg sm:text-xl">
                        {link.name}
                    </p>
                    <p className="font-base mt-1 text-sm sm:text-base">
                        {link.handle}
                    </p>
                </CardContent>
            </a>

        </Card>
    )
}

export {BoxedLink}
