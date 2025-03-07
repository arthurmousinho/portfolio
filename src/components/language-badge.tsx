import Image from "next/image";

import JavaScript from '@/assets/techs/javascript.svg';
import TypeScript from '@/assets/techs/typescript.svg';
import Python from '@/assets/techs/python.svg';
import Java from '@/assets/techs/java.svg';
import HTML from '@/assets/techs/html.svg';
import CSS from '@/assets/techs/css.svg';
import React from '@/assets/techs/react.svg';
import Next from '@/assets/techs/next.svg';
import Angular from '@/assets/techs/angular.svg';
import Tailwind from '@/assets/techs/tailwindcss.svg';
import Expo from '@/assets/techs/expo.svg';
import Node from '@/assets/techs/node.svg';
import Express from '@/assets/techs/express.svg';
import Fastify from '@/assets/techs/fastify.svg';
import Nest from '@/assets/techs/nest.svg';
import PostgreSQL from '@/assets/techs/postgresql.svg';
import Prisma from '@/assets/techs/prisma.svg';
import Drizzle from '@/assets/techs/drizzle.svg';
import Vercel from '@/assets/techs/vercel.svg';
import Git from '@/assets/techs/git.svg';
import Docker from '@/assets/techs/docker.svg';
import Firebase from '@/assets/techs/firebase.svg';
import GraphQL from '@/assets/techs/graphql.svg';
import Vite from '@/assets/techs/vite.svg';
import { Badge } from "./ui/badge";

export type ProgrammingLanguage = 'JavaScript' | 'TypeScript' | 'Python' | 'Java';
export type FrontEndTool = 'HTML' | 'CSS' | 'React' | 'Next' | 'Angular' | 'Tailwind';
export type MobileTool = 'React Native' | 'Expo';
export type BackEndTool = 'Node' | 'Express' | 'Fastify' | 'Nest';
export type DatabaseTool = 'PostgreSQL' | 'Prisma' | 'Drizzle'
export type OtherTool = 'Vercel' | 'Git' | 'Docker' | 'Firebase' | 'GraphQL' | 'Vite';

type LanguageBadgeProps = {
    language:
    ProgrammingLanguage |
    FrontEndTool |
    MobileTool |
    BackEndTool |
    DatabaseTool |
    OtherTool
}

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
    'GraphQL',
    'Vite'
]

const iconMap = {
    JavaScript,
    TypeScript,
    Python,
    Java,
    HTML,
    CSS,
    React,
    Next,
    Angular,
    Tailwind,
    Expo,
    Node,
    Express,
    Fastify,
    Nest,
    PostgreSQL,
    Prisma,
    Drizzle,
    Vercel,
    Git,
    Docker,
    Firebase,
    GraphQL,
    Vite,
    'React Native': React
};

export function LanguageBadge({ language }: LanguageBadgeProps) {
    return (
        <Badge variant="secondary" className="text-xs text-muted-foreground space-x-1">
            <Image
                src={iconMap[language]}
                alt={language}
                width={15}
                height={15}
                className="size-[15]"
            />
            <span>{language}</span>
        </Badge>
    )
}