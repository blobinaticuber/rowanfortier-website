import { cn } from "@/lib/utils.js"

type Props = {
  imageUrl: string
  caption: string
  className?: string
}

function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-text border-border p-4">
        {caption}
      </figcaption>
    </figure>
  )
}

export {ImageCard}
