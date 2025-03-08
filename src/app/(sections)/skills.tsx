import { SectionWrapper } from "@/components/section-wrapper";
import {
    backEndTools,
    databaseTools,
    frontEndTools,
    otherTools,
    programmingLanguages
} from "../../components/tool-badge";

import { SkillSection } from "../../components/skill-section";

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