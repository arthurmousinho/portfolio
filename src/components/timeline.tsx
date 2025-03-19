import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

interface TimelineProps {
    children: ReactNode
    className?: string
}

export function Timeline({ children, className = "" }: TimelineProps) {
    return <div className={`${className}`}>{children}</div>
}

interface TimelineListProps {
    items: string[]
}

export function TimelineList({ items }: TimelineListProps) {
    return (
        <ul className="list-disc ms-3 mt-3 space-y-1.5">
            {items.map((item, index) => (
                <li key={index} className="ps-1 text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {item}
                </li>
            ))}
        </ul>
    )
}

interface TimelineItemProps {
    icon: ReactNode
    dateRange: string
    title: string
    description?: string
    children?: ReactNode
    isLast?: boolean
}

export function TimelineItem({
    icon,
    dateRange,
    title,
    description,
    children,
    isLast = false
}: TimelineItemProps) {
    return (
        <div className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">{icon}</div>
            </div>

            <div className={`grow ${isLast ? "" : "pb-8"} group-last:pb-0`}>
                <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">{dateRange}</h3>

                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">{title}</p>

                {description && <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">{description}</p>}

                {children}
            </div>
        </div>
    )
}

interface TimelineCardProps {
    imageUrl: string
    title: string
    description: string
    href: string
}

export function TimelineCard({ imageUrl, title, description, href }: TimelineCardProps) {
    return (
        <div className="mt-3">
            <Link
                className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700"
                href={href}
            >
                <div className="relative flex items-center overflow-hidden">
                    <Image
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src={imageUrl || ""}
                        alt={title}
                        width={560}
                        height={280}
                    />

                    <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                            <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">{title}</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}