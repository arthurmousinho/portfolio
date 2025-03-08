import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const footerLinks = [
    {
        label: "Github",
        icon: <Github size={16} />,
        href: "https://github.com/arthurmousinho"
    },
    {
        label: "LinkedIn",
        icon: <Linkedin size={16} />,
        href: "https://www.linkedin.com/in/arthurmousinho/"
    },
    {
        label: "Email",
        icon: <Mail size={16} />,
        href: "mailto:arthurmousinho@teste.com"
    }
]

export function Footer() {
    return (
        <>
            <Separator className="mb-4" />
            <footer className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} arthurmousinho
                </span>
                <nav className="flex items-center gap-1">
                    {footerLinks.map((link, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="sm" className="rounded-full text-muted-foreground">
                                    {link.icon}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{link.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-full text-muted-foreground">
                                <ArrowUp size={16} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Back to top</p>
                        </TooltipContent>
                    </Tooltip>
                </nav>
            </footer>
        </>

    )
}