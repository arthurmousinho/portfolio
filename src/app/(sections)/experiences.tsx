import Image from "next/image";
import {
    Timeline,
    TimelineItem,
    TimelineList,
} from "@/components/timeline";
import { BriefcaseBusiness } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

import klabLogo from "@/assets/logos/klab-logo.svg";


export function Experiences() {
    return (
        <SectionWrapper title="Experiences" id="experiences-section">
            <Timeline>
                <TimelineItem
                    icon={
                        <Image
                            src={'https://media.licdn.com/dms/image/v2/C4E0BAQEbbWArvARdRw/company-logo_100_100/company-logo_100_100/0/1654202656271/somosicev_logo?e=1749686400&v=beta&t=Yhxgl_YW-1YJW5Rp4IWXGks8nZi9-TctEkCKV5VqGxc'}
                            width={100}
                            height={100}
                            alt="somosicev"
                            className="rounded-full"
                        />
                    }
                    dateRange="iCEV - Instituto de Ensino Superior • Mar 2025 - Present"
                    title="Undergraduate Teaching Assistant"
                    description="Undergraduate Teaching Assistant in the Bachelor's Degree in Software Engineering for the Requirements and Software Modeling course, helping steudents with reviews and doubts."
                />
                <TimelineItem
                    icon={<BriefcaseBusiness />}
                    dateRange="Freelance • Oct 2023 - Present"
                    title="Web Developer"
                >
                    <TimelineList
                        items={[
                            "Developed customized websites for diverse clients using Next.js and TailwindCSS.",
                            "Integrated CMS solutions to enable clients to easily manage and update website content independently.",
                            "Built dynamic web applications with React and Firebase, prioritizing intuitive user experiences",
                        ]}
                    />
                </TimelineItem>
                <TimelineItem
                    icon={<Image src={klabLogo} alt="klab" className="rounded-full" />}
                    dateRange="KLAB • Jul 2023 - Present"
                    title="Front-end Developer Intern"
                >
                    <TimelineList items={[
                        "Developed responsive web interfaces for education sector solution using the Angular framework, ensuring a seamless and optimized user experience.",
                        "Integrated AI-driven REST APIs to enhance communication and functionality within the applications.",
                        "Designed and implemented dynamic and responsive landing pages using React and TailwindCSS, which included integrations with CMS platforms based on GraphQL, contributing to improved user engagement.",
                        "Collaborated closely with the team, utilizing the Kanban methodology to manage projects efficiently and ensure timely delivery of tasks."
                    ]} />
                </TimelineItem>
            </Timeline>
        </SectionWrapper>
    )
}