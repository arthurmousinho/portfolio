import Image from "next/image";
import {
    Timeline,
    TimelineItem,
} from "@/components/timeline";
import { BriefcaseBusiness } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

import icevLogo from "@/assets/logos/icev-logo.jpeg";
import klabLogo from "@/assets/logos/klab-logo.svg";

export function Experiences() {
    return (
        <SectionWrapper title="Experiences">
            <Timeline>
                <TimelineItem
                    icon={<Image src={icevLogo} alt="somosicev" className="rounded-full" />}
                    dateRange="iCEV - Instituto de Ensino Superior • Mar 2025 - Present"
                    title="Undergraduate Teaching Assistant"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
                <TimelineItem
                    icon={<BriefcaseBusiness />}
                    dateRange="Freelance • Oct 2023 - Present"
                    title="Web Developer"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
                <TimelineItem
                    icon={<Image src={klabLogo} alt="klab" className="rounded-full" />}
                    dateRange="KLAB • Jul 2023 - Present"
                    title="Front-end Developer Intern"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course"
                />
            </Timeline>
        </SectionWrapper>
    )
}