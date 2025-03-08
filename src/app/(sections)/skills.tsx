import { SectionWrapper } from "@/components/section-wrapper";
import {
    backEndTools,
    databaseTools,
    frontEndTools,
    otherTools,
    programmingLanguages
} from "../../components/language-badge";
import { SkillSection } from "../../components/skill-section";

export function Skills() {
    return (
        <SectionWrapper title="Skills">
            <ul className="space-y-4">
                <SkillSection
                    label="Languages"
                    items={programmingLanguages}
                />
                <SkillSection
                    label="Front-end"
                    items={frontEndTools}
                />
                <SkillSection
                    label="Back-end"
                    items={backEndTools}
                />
                <SkillSection
                    label="Database"
                    items={databaseTools}
                />
                <SkillSection
                    label="Others"
                    items={otherTools}
                />
            </ul>
        </SectionWrapper>
    )
}