'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

interface NavLinKProps extends ComponentProps<typeof Link> { };

export function NavLink(props: NavLinKProps) {

    const pathname = usePathname();
    const isCurrent = pathname === props.href.toString();

    return (
        <Link
            {...props}
            data-current={isCurrent}
            className="
                font-medium
                text-sm
                text-muted-foreground
                data-[current=true]:text-blue-500 
                data-[current=true]:underline
                data-[current=true]:underline-offset-8
                data-[current=true]:decoration-blue-500
            "
        />
    )
}