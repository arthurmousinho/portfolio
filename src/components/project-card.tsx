import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { ToolBadge, type Tool } from "./tool-badge";
import { Safari } from "./magicui/safari";

type ProjectCategory = 'work' | 'study';

export function ProjectCategory({ category }: { category: ProjectCategory }) {
    return (
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
            {category === 'work' && <BriefcaseBusiness size={15} />}
            {category === 'study' && <GraduationCap size={15} />}
            <span>Work</span>
        </div>
    )
}

type ProjectCardProps = {
    title: string;
    description: string;
    category: ProjectCategory;
    imageUrl: string;
    tools: Tool[];
}

export function ProjectCard({
    title,
    description,
    category,
    imageUrl,
    tools
}: ProjectCardProps) {
    return (
        <Card className="p-0 flex flex-row gap-0">
            <CardHeader className="p-0 m-0 max-w-[40%] min-h-full">
                <Safari
                    url={'adasdasdada'}
                    className="size-full rounded-l-xl min-h-full"
                    imageSrc={imageUrl}
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-3 justify-between p-4">
                <div className="space-y-3">
                    <header className="flex items-center justify-between">
                        <CardTitle>
                            {title}
                        </CardTitle>
                        <ProjectCategory category={category} />
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