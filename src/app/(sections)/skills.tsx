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
        <section className="space-y-4">
            <h2 className="font-medium text-gray-800 dark:text-neutral-200">
                Skills
            </h2>
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
        </section>
    )
}