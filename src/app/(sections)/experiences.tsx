import Image from "next/image";
import {
    Timeline,
    TimelineItem,
} from "@/components/timeline";
import { BriefcaseBusiness } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

import klabLogo from "@/assets/logos/klab-logo.svg";

export function Experiences() {
    return (
        <SectionWrapper title="Experiences" id="experiences-section">
            <Timeline>
                <TimelineItem
                    icon={<Image 
                        src={'https://media.licdn.com/dms/image/v2/C4E0BAQEbbWArvARdRw/company-logo_100_100/company-logo_100_100/0/1654202656271/somosicev_logo?e=1749686400&v=beta&t=Yhxgl_YW-1YJW5Rp4IWXGks8nZi9-TctEkCKV5VqGxc'} 
                        width={100}
                        height={100}
                        alt="somosicev"
                        className="rounded-full"
                    />}
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