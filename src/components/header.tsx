import { Card, CardHeader } from "@/components/ui/card";
import { Braces, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";

export function Header() {
    return (
        <Card className="px-4 py-3">
            <CardHeader className="p-0 flex flex-row justify-between items-center">
                <div className="bg-primary text-slate-50 rounded-md p-2 w-min">
                    <Braces />
                </div>
                <nav className="flex flex-row gap-6 items-center">
                    <NavLink href={`/`}>
                        Home
                    </NavLink>
                    <NavLink href={`/projects`}>
                        Projects
                    </NavLink>
                    <NavLink href={`/projects`}>
                        Work
                    </NavLink>
                    <NavLink href={`/projects`}>
                        Blog
                    </NavLink>
                    <Button variant="ghost" size="icon">
                        <Sun size={15} />
                    </Button>
                </nav>
            </CardHeader>
        </Card>
    )
}