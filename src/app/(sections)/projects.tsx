import { ProjectCard } from "../projects/project-card";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/graphql/get-projects";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export async function Projects() {

    const { data } = await getProjects();

    return (
        <SectionWrapper title="Projects" id="projects-section">
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
            <footer className="flex justify-end">
                <Link href="/projects">
                    <Button size="sm" variant="outline">
                        See all projects
                        <ChevronRight />
                    </Button>
                </Link>
            </footer>
        </SectionWrapper>
    )
}