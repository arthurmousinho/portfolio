import { EducationCard } from "@/components/education-card";
import { SectionWrapper } from "@/components/section-wrapper";

export function Education() {
    return (
        <SectionWrapper title="Education" id="education-section">
            <main className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <EducationCard
                    title="Bachelor's degree in Software Engineering"
                    place="iCEV - Instituto de Ensino Superior"
                    date="2022 - 2025"
                    image={'https://media.licdn.com/dms/image/v2/C4E0BAQEbbWArvARdRw/company-logo_100_100/company-logo_100_100/0/1654202656271/somosicev_logo?e=1749686400&v=beta&t=Yhxgl_YW-1YJW5Rp4IWXGks8nZi9-TctEkCKV5VqGxc'}
                />
                <EducationCard
                    title="English as a Second Language Course"
                    place="Wizard by Pearson"
                    date="2019 - 2024"
                    image={'https://media.licdn.com/dms/image/v2/C4E0BAQHqTiBwDyyYpQ/company-logo_100_100/company-logo_100_100/0/1630581133985/wizard_by_pearson_logo?e=1749686400&v=beta&t=9tU6485JQVQE17J3VU2H0GyJVZIMGEWHZDmjRMbJLM4'}
                />
            </main>
        </SectionWrapper>
    )
}