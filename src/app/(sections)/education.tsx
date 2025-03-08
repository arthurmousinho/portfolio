import { EducationCard } from "@/components/education-card";
import { SectionWrapper } from "@/components/section-wrapper";

import icevLogo from "@/assets/logos/icev-logo.jpeg";
import wizardLogo from "@/assets/logos/wizard-logo.jpeg";

export function Education() {
    return (
        <SectionWrapper title="Education">
            <main className="grid grid-cols-2 gap-2">
                <EducationCard
                    title="Bachelor's degree in Software Engineering"
                    place="iCEV - Instituto de Ensino Superior"
                    date="2022 - 2025"
                    image={icevLogo.src}
                />
                <EducationCard
                    title="English as a Second Language Course"
                    place="Wizard by Pearson"
                    date="2019 - 2024"
                    image={wizardLogo.src}
                />
            </main>
        </SectionWrapper>
    )
}