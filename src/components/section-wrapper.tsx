import type { ReactNode } from "react";

type SectionWrapperProps = {
    children: ReactNode;
    title: string;
};

export function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (
        <section className="space-y-4">
            <h2 className="font-medium text-gray-800 dark:text-neutral-200">
                {title}
            </h2>
            {children}
        </section >
    )
}