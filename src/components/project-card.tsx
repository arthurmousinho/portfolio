import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { ToolBadge, type Tool } from "./tool-badge";
import Image from "next/image";
import { Button } from "./ui/button";

type ProjectCategory = 'work' | 'study';

export function ProjectCategory({ category }: { category: ProjectCategory }) {
    return (
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
            {category === 'work' && <BriefcaseBusiness size={15} />}
            {category === 'study' && <GraduationCap size={15} />}
            <span>{category[0].toUpperCase() + category.slice(1)}</span>
        </div>
    )
}

type ProjectCardProps = {
    title: string;
    description: string;
    category: ProjectCategory;
    imageUrl: string;
    tools: Tool[];
    url: string;
}

export function ProjectCard({
    title,
    description,
    category,
    imageUrl,
    tools,
    url
}: ProjectCardProps) {
    return (
        <Card className="p-0 flex flex-col sm:flex-row gap-0 group">
            <CardHeader className="p-0 m-0 min-w-[40%] min-h-full relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={500}
                    className="size-full sm:rounded-l-xl sm:rounded-t-none rounded-t-xl min-h-full min-w-full"
                />
                <a href={url} target="_blank" rel="noreferrer"> 
                    <Button
                        className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        size="sm"
                        variant="secondary"
                    >
                        <ArrowUpRight size={15} />
                        Access
                    </Button>
                </a>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 justify-between p-4">
                <div className="space-y-3">
                    <header className="flex items-center justify-between">
                        <CardTitle>
                            {title}
                        </CardTitle>
                        <ProjectCategory 
                            category={category} 
                        />
                    </header>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                        {description}
                    </CardDescription>
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
    )
}