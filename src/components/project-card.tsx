import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { ToolBadge, type Tool } from "./tool-badge";

type ProjectCategory = 'WORK' | 'STUDY';

export function ProjectCategory({ category }: { category: ProjectCategory }) {
    return (
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
            {category === 'WORK' && <BriefcaseBusiness size={15} />}
            {category === 'STUDY' && <GraduationCap size={15} />}
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
            <CardHeader className="p-0 m-0 min-w-[40%] min-h-[200px] relative">
                <Image
                    src={imageUrl}
                    fill
                    alt="Arthur Mousinho"
                    className="rounded-l-xl object-cover"
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