import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ProjectCard } from "./project-card";
import { getProjects } from "@/graphql/get-projects";
import { Separator } from "@/components/ui/separator";

export default async function ProjectsPage() {

    const { data } = await getProjects();

    return (
        <div className="space-y-4" id="top-section">
            <header className="flex justify-between items-center">
                <h1 className="text-lg font-medium text-gra-600 dark:text-neutral-200">
                    All projects
                </h1>
                <Link href="/">
                    <Button size="sm" variant="outline">
                        <ChevronLeft />
                        Home
                    </Button>
                </Link>
            </header>
            <Separator orientation="horizontal" />
            <main className="flex flex-col gap-2">
                {data.projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        imageUrl={project.image.url}
                        tools={project.techs}
                        url={project.url}
                    />
                ))}
            </main>
        </div>
    )
}