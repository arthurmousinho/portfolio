import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, GraduationCap } from "lucide-react"
import { ToolBadge, type Tool } from "@/components/tool-badge"
import Image from "next/image";

type ProjectCategory = "work" | "study";

export function ProjectCategory({ category }: { category: ProjectCategory }) {
    return (
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
            {category === "work" && <BriefcaseBusiness size={15} />}
            {category === "study" && <GraduationCap size={15} />}
            <span>{category[0].toUpperCase() + category.slice(1)}</span>
        </div>
    )
}

type ProjectCardProps = {
    title: string
    description: string
    category: ProjectCategory
    backgroundColor: string
    imageUrl: string
    tools: Tool[]
    url: string
}

export async function ProjectCard({
    title,
    description,
    category,
    imageUrl,
    tools,
    backgroundColor,
    url
}: ProjectCardProps) {

    return (
        <a href={url} target="_blank" rel="noreferrer">
            <Card className="p-0 flex flex-col sm:flex-row gap-0 hover:shadow-lg transition-all duration-300">
                <CardHeader 
                    className="m-0 min-w-[40%] sm:max-w-[40%] min-h-full max-w-full p-4 
                    sm:rounded-l-lg sm:rounded-t-none rounded-t-lg rounded-bl-none"
                    style={{ backgroundColor }}
                >
                    <Image
                        src={imageUrl}
                        width={500}
                        height={500}
                        alt={title}
                        className="w-full h-full object-fill rounded-md shadow-xl"
                    />
                </CardHeader>
                <CardContent className="flex flex-col gap-3 justify-between p-4">
                    <div className="space-y-3">
                        <header className="flex items-center justify-between">
                            <CardTitle>{title}</CardTitle>
                            <ProjectCategory category={category} />
                        </header>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">{description}</CardDescription>
                    </div>
                    <footer>
                        <div className="space-x-1.5 space-y-1.5">
                            {tools.map((tool, index) => (
                                <ToolBadge key={index} tool={tool} />
                            ))}
                        </div>
                    </footer>
                </CardContent>
            </Card>
        </a>
    )
}