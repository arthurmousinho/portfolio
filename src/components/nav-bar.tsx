import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { BriefcaseBusiness, Code, Github, Home, Linkedin } from "lucide-react";

const navigationOptions = [
    {
        icon: <Home size={16} />,
        label: "Home"
    },
    {
        icon: <BriefcaseBusiness size={16} />,
        label: "Works"
    },
    {
        icon: <Code size={16} />,
        label: "Projects"
    }
]

const socialOptions = [
    {
        icon: <Github size={16} />,
        label: "Github"
    },
    {
        icon: <Linkedin size={16} />,
        label: "Linkedin"
    }
]

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <Dock 
                className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            >
                {navigationOptions.map((option, index) => (
                    <DockIcon key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    type="button"
                                    size="icon"
                                >
                                    {option.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{option.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                {socialOptions.map((option, index) => (
                    <DockIcon key={index}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    type="button"
                                    size="icon"
                                >
                                    {option.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{option.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2" />
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