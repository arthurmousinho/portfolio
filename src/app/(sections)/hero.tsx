import { StatusBar } from "@/components/status-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Paperclip } from "lucide-react";

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
                    As a software developer, I am dedicated to build efficient and scalable solutions that seamlessly blend technical precision, user experience, and business objectives.
                </p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-neutral-400">
                    I'm passionate about solving complex challenges, quickly adapting to new technologies, and collaborating strategically to deliver high-impact products.
                </p>
            </main>
            <footer className="space-y-2 text-muted-foreground">
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Github size={16} />
                    <a href="https://github.com/arthurmousinho" target="_blank">
                        github.com/arthurmousinho
                    </a>
                </div>
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Linkedin size={16} />
                    <a href="https://www.linkedin.com/in/arthurmousinho/" target="_blank">
                        linkedin.com/in/arthurmousinho
                    </a>
                </div>
                <div className="flex flex-row gap-3 items-center text-sm hover:text-blue-500 hover:underline hover:underline-offset-4">
                    <Paperclip size={16} />
                    <a href="">Resume</a>
                </div>
            </footer>
        </section >
    )
}