import Image from "next/image";

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

export type ProgrammingLanguage = 'JavaScript' | 'TypeScript' | 'Python' | 'Java';
export type FrontEndTool = 'HTML' | 'CSS' | 'React' | 'Next' | 'Angular' | 'Tailwind';
export type MobileTool = 'React Native' | 'Expo';
export type BackEndTool = 'Node' | 'Express' | 'Fastify' | 'Nest';
export type DatabaseTool = 'PostgreSQL' | 'Prisma' | 'Drizzle'
export type OtherTool = 'Vercel' | 'Git' | 'Docker' | 'Firebase' | 'Jest' | 'Vite';

export const programmingLanguages: ProgrammingLanguage[] = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
]

export const frontEndTools: FrontEndTool[] = [
    "HTML",
    "CSS",
    "React",
    "Next",
    "Angular",
    "Tailwind",
];

export const backEndTools: BackEndTool[] = [
    "Node",
    "Express",
    "Fastify",
    "Nest",
];

export const databaseTools: DatabaseTool[] = [
    "PostgreSQL",
    "Prisma",
    "Drizzle",
];

export const otherTools: OtherTool[] = [
    'Git',
    'Docker',
    'Firebase',
    'Vercel',
    'Jest',
    'Vite'
]

const iconMap = {
    JavaScript: {
        icon: <Javascript />,
        label: 'JavaScript',
    },
    TypeScript: {
        icon: <Typescript />,
        label: 'TypeScript',
    },
    Python: {
        icon: <Python />,
        label: 'Python',
    },
    Java: {
        icon: <Java />,
        label: 'Java',
    },
    HTML: {
        icon: <HTML />,
        label: 'HTML',
    },
    CSS: {
        icon: <CSS />,
        label: 'CSS',
    },
    React: {
        icon: <React />,
        label: 'React',
    },
    Next: {
        icon: <Next />,
        label: 'Next.js',
    },
    Angular: {
        icon: <Angular />,
        label: 'Angular',
    },
    Tailwind: {
        icon: <Tailwind />,
        label: 'Tailwind CSS',
    },
    Expo: {
        icon: <Expo />,
        label: 'Expo',
    },
    Node: {
        icon: <Node />,
        label: 'Node.js',
    },
    Express: {
        icon: <Express />,
        label: 'Express.js',
    },
    Fastify: {
        icon: <Fastify />,
        label: 'Fastify',
    },
    Nest: {
        icon: <Nest />,
        label: 'Nest.js',
    },
    PostgreSQL: {
        icon: <PostgreSQL />,
        label: 'PostgreSQL',
    },
    Prisma: {
        icon: <Prisma />,
        label: 'Prisma ORM',
    },
    Drizzle: {
        icon: <Drizzle />,
        label: 'Drizzle ORM',
    },
    Vercel: {
        icon: <Vercel />,
        label: 'Vercel',
    },
    Git: {
        icon: <Git />,
        label: 'Git',
    },
    Docker: {
        icon: <Docker />,
        label: 'Docker',
    },
    Firebase: {
        icon: <Firebase />,
        label: 'Firebase',
    },
    Jest: {
        icon: <Jest />,
        label: 'Jest',
    },
    Vite: {
        icon: <Vite />,
        label: 'Vite',
    },
    'React Native': {
        icon: <React />,
        label: 'React Native',
    }
};

export type Tool = ProgrammingLanguage | FrontEndTool | BackEndTool | DatabaseTool | OtherTool;

export function ToolBadge({ tool }: { tool: Tool }) {
    return (
        <Badge variant="secondary" className="text-xs text-muted-foreground space-x-1">
            {iconMap[tool].icon}
            <span>{iconMap[tool].label}</span>
        </Badge>
    )
}