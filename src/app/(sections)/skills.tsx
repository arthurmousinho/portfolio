import { SectionWrapper } from "@/components/section-wrapper";
import { SkillSection } from "../../components/skill-section";
import type { Tool } from "@/components/tool-badge";

const programmingLanguages = [
    'javascript',
    'typescript',
    'python',
    'java'
] as Tool[]

const frontEndTools = [
    'html',
    'css',
    'react',
    'angular',
    'tailwind'
] as Tool[]

const backEndTools = [
    'node',
    'express',
    'fastify',
    'nest'
] as Tool[]

const databaseTools = [
    'postgresql',
    'prisma',
    'drizzle'
] as Tool[]

const otherTools = [
    'jest',
    'vercel',
    'docker',
    'firebase',
] as Tool[]

export function Skills() {
    return (
        <SectionWrapper title="Skills">
            <ul className="space-y-4">
                <SkillSection
                    label="Languages"
                    tools={programmingLanguages}
                />
                <SkillSection
                    label="Front-end"
                    tools={frontEndTools}
                />
                <SkillSection
                    label="Back-end"
                    tools={backEndTools}
                />
                <SkillSection
                    label="Database"
                    tools={databaseTools}
                />
                <SkillSection
                    label="Others"
                    tools={otherTools}
                />
            </ul>
        </SectionWrapper>
    )
}