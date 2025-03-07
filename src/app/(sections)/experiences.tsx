import Image from "next/image";
import {
    Timeline,
    TimelineItem,
} from "@/components/timeline";

import icevLogo from "@/assets/logos/icev-logo.jpeg";
import klabLogo from "@/assets/logos/klab-logo.svg";
import { BriefcaseBusiness } from "lucide-react";

export function Experiences() {
    return (
        <section className="space-y-4">
            <h2 className="font-medium text-gray-800 dark:text-neutral-200">
                Work experience
            </h2>
            <Timeline>
                <TimelineItem
                    icon={<Image src={icevLogo} alt="somosicev" className="rounded-full" />}
                    dateRange="Mar 2025 - Present"
                    title="Undergraduate Teaching Assistant"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
                <TimelineItem
                    icon={<BriefcaseBusiness />}
                    dateRange="Oct 2023 - Present"
                    title="Freelance Web Developer"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
                <TimelineItem
                    icon={<Image src={klabLogo} alt="klab" className="rounded-full" />}
                    dateRange="Jul 2023 - Present"
                    title="Front-end Developer Intern"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
            </Timeline>
        </section >
    )
}