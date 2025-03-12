import { ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/section-wrapper";
import { getProjects } from "@/graphql/get-projects";

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
                    />
                ))}
            </main>
        </SectionWrapper>
    )
}