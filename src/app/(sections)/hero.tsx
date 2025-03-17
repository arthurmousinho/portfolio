import { StatusBar } from "@/components/status-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Paperclip } from "lucide-react";

export function Hero() {
    return (
        <section className="space-y-6">
            <header className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-4">
                <div className="flex items-center gap-4">
                    <Avatar className="size-16">
                        <AvatarFallback>AM</AvatarFallback>
                        <AvatarImage
                            src="https://github.com/arthurmousinho.png"
                            alt="Arthur Mousinho"
                        />
                    </Avatar>
                    <div>
                        <h1 className="text-lg font-medium text-gra-600 dark:text-neutral-200">
                            Arthur Mousinho
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Software Engineer
                        </p>
                    </div>
                </div>
                <StatusBar />
            </header>
            <Separator orientation="horizontal" />
            <main className="space-y-2">
                <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-400">
                    I am dedicated to crafting impactful, high-quality solutions that seamlessly combine technical precision with a strong understanding of both user needs and business goals.
                </p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-400">
                    I am driven by a proactive and adaptable approach, thriving in fast-paced environments where clear communication and collaboration are essential.
                </p>
            </main>
            <footer className="space-y-2 text-muted-foreground">
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Mail size={16} />
                    <a href="">arthurmousinho</a>
                </div>
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Github size={16} />
                    <a href="">@arthurmousinho</a>
                </div>
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Linkedin size={16} />
                    <a href="">arthurmousinho</a>
                </div>
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Paperclip size={16} />
                    <a href="">Resume</a>
                </div>
            </footer>
        </section >
    )
}