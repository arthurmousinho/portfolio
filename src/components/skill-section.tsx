import {
    ToolBadge,
    type Tool
} from "./tool-badge";

type SkillSectionProps = {
    label: string;
    tools: Tool[];
}

export function SkillSection({
    label,
    tools
}: SkillSectionProps) {
    return (
        <li className="flex sm:flex-row flex-col sm:items-center items-start space-y-2 space-x-2 font-medium">
            <span className="text-sm text-gray-500 dark:text-neutral-500 w-[77px]">
                {label}:
            </span>
            <div className="space-x-2 space-y-2">
                {tools.map((language) => (
                    <ToolBadge key={language} tool={language} />
                ))}
            </div>
        </li>
    )
}