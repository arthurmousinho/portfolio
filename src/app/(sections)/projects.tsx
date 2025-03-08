import { ProjectCard } from "@/components/project-card";
import { SectionWrapper } from "@/components/section-wrapper";

import image1 from "@/assets/project-dimmy.jpeg";
import image2 from "@/assets/project-klab.jpeg";

export function Projects() {
    return (
        <SectionWrapper title="Projects">
            <main className="flex flex-col gap-2">
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    category="WORK"
                    imageUrl={image1.src}
                    tools={["TypeScript", "React", "Vite", "Tailwind"]}
                />
                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    category="WORK"
                    imageUrl={image2.src}
                    tools={["TypeScript", "React", "Vite", "Tailwind", "Nest", "Prisma", "Docker", "PostgreSQL", "Jest"]}
                />
                <ProjectCard
                    title="Project 3"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    category="WORK"
                    imageUrl={image1.src}
                    tools={["TypeScript", "Next", "Tailwind"]}
                />
            </main>
        </SectionWrapper>
    )
}