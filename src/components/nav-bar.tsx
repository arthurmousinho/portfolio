'use client'

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { scrollToSection } from "@/helpers/scroll-to-section";
import { BriefcaseBusiness, Code, Github, GraduationCap, Home, Linkedin, Send } from "lucide-react";

const navigationOptions = [
    {
        icon: <Home size={16} />,
        label: "Home",
        id: "top-section"
    },
    {
        icon: <BriefcaseBusiness size={16} />,
        label: "Works",
        id: "experiences-section"
    },
    {
        icon: <Code size={16} />,
        label: "Projects",
        id: "projects-section"
    },
    {
        icon: <GraduationCap size={16} />,

        label: "Education",
        id: "education-section"
    },
    {
        icon: <Send size={16} />,
        label: "Contact",
        id: "contact-section"
    }
];

const socialOptions = [
    {
        icon: <Linkedin size={16} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arthurmousinho/"
    },
    {
        icon: <Github size={16} />,
        label: "GitHub",
        href: "https://github.com/arthurmousinho"
    }
]

export function Navbar() {
    return (
        <div className="my-auto flex h-auto max-w-14">
            <Dock
                className="flex flex-col min-w-full w-full items-center py-2 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                direction="vertical"
            >
                {navigationOptions.map((option, index) => (
                    <DockIcon key={index} onClick={() => scrollToSection(option.id)}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" type="button" size="icon">
                                    {option.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>{option.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="horizontal" className="w-full px-2" />
                {socialOptions.map((option, index) => (
                    <DockIcon key={index} onClick={() => window.open(option.href, "_blank")}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" type="button" size="icon">
                                    {option.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>{option.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="horizontal" className="w-full px-2" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    );
}