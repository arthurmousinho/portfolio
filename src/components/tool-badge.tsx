import { Badge } from "./ui/badge";

import { Javascript } from "./techs/javascript";
import { Typescript } from "./techs/typescript";
import { Python } from "./techs/python";
import { Java } from "./techs/java";
import { HTML } from "./techs/html";
import { CSS } from "./techs/css";
import { React } from "./techs/react";
import { Next } from "./techs/next";
import { Angular } from "./techs/angular";
import { Tailwind } from "./techs/tailwind";
import { Expo } from "./techs/expo";
import { Node } from "./techs/node";
import { Express } from "./techs/express";
import { Fastify } from "./techs/fastify";
import { Nest } from "./techs/nest";
import { PostgreSQL } from "./techs/postgresql";
import { Prisma } from "./techs/prisma";
import { Drizzle } from "./techs/drizzle";
import { Vercel } from "./techs/vercel";
import { Git } from "./techs/git";
import { Docker } from "./techs/docker";
import { Firebase } from "./techs/firebase";
import { Jest } from "./techs/jest";
import { Vite } from "./techs/vite";

const iconMap = {
    javascript: {
        icon: <Javascript />,
        label: 'JavaScript',
    },
    typescript: {
        icon: <Typescript />,
        label: 'TypeScript',
    },
    python: {
        icon: <Python />,
        label: 'Python',
    },
    java: {
        icon: <Java />,
        label: 'Java',
    },
    html: {
        icon: <HTML />,
        label: 'HTML',
    },
    css: {
        icon: <CSS />,
        label: 'CSS',
    },
    react: {
        icon: <React />,
        label: 'React',
    },
    next: {
        icon: <Next />,
        label: 'Next.js',
    },
    angular: {
        icon: <Angular />,
        label: 'Angular',
    },
    tailwind: {
        icon: <Tailwind />,
        label: 'Tailwind CSS',
    },
    expo: {
        icon: <Expo />,
        label: 'Expo',
    },
    node: {
        icon: <Node />,
        label: 'Node.js',
    },
    express: {
        icon: <Express />,
        label: 'Express.js',
    },
    fastify: {
        icon: <Fastify />,
        label: 'Fastify',
    },
    nest: {
        icon: <Nest />,
        label: 'Nest.js',
    },
    postgresql: {
        icon: <PostgreSQL />,
        label: 'PostgreSQL',
    },
    prisma: {
        icon: <Prisma />,
        label: 'Prisma ORM',
    },
    drizzle: {
        icon: <Drizzle />,
        label: 'Drizzle ORM',
    },
    vercel: {
        icon: <Vercel />,
        label: 'Vercel',
    },
    git: {
        icon: <Git />,
        label: 'Git',
    },
    docker: {
        icon: <Docker />,
        label: 'Docker',
    },
    firebase: {
        icon: <Firebase />,
        label: 'Firebase',
    },
    jest: {
        icon: <Jest />,
        label: 'Jest',
    },
    vite: {
        icon: <Vite />,
        label: 'Vite',
    },
    reactNative: {
        icon: <React />,
        label: 'React Native',
    }
};

export type Tool = 
    'javascript'
    | 'typescript'
    | 'python'
    | 'java'
    | 'html'
    | 'css'
    | 'react'
    | 'next'
    | 'angular'
    | 'tailwind'
    | 'node'
    | 'express'
    | 'fastify'
    | 'nest'
    | 'prisma'
    | 'drizzle'
    | 'docker'
    | 'postgresql'
    | 'vite'
    | 'jest'
    | 'vercel'
    | 'firebase'
    | 'git'
;

export function ToolBadge({ tool }: { tool: Tool }) {
    return (
        <Badge variant="secondary" className="text-xs text-muted-foreground space-x-1">
            {iconMap[tool].icon}
            <span>{iconMap[tool].label}</span>
        </Badge>
    )
}