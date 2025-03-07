import {
    LanguageBadge,
    type BackEndTool,
    type DatabaseTool,
    type FrontEndTool,
    type OtherTool,
    type ProgrammingLanguage
} from "./language-badge";

type SkillSectionProps = {
    label: string;
    items: ProgrammingLanguage[] | FrontEndTool[] | BackEndTool[] | DatabaseTool[] | OtherTool[];
}

export function SkillSection({
    label,
    items
}: SkillSectionProps) {
    return (
        <li className="flex items-center space-x-2 font-medium">
            <span className="text-sm text-gray-500 dark:text-neutral-500 w-[77px]">
                {label}:
            </span>
            <div className="space-x-2">
                {items.map((language) => (
                    <LanguageBadge key={language} language={language} />
                ))}
            </div>
        </li>
    )
}