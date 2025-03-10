import { type ReactNode } from "react";

interface SectionWrapperProps {
    id?: string;
    children: ReactNode;
    title: string;
}

export function SectionWrapper({ title, children, id }: SectionWrapperProps) {
    return (
        <section className="space-y-4" id={id}>
            <h2 className="font-medium text-gray-800 dark:text-neutral-200">
                {title}
            </h2>
            {children}
        </section >
    )
}