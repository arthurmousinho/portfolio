import Image from "next/image";

import JavaScript from '@/assets/javascript.svg';
import TypeScript from '@/assets/typescript.svg';
import Python from '@/assets/python.svg';
import Java from '@/assets/java.svg';
import HTML from '@/assets/html.svg';
import CSS from '@/assets/css.svg';
import React from '@/assets/react.svg';
import Next from '@/assets/next.svg';
import Angular from '@/assets/angular.svg';
import Tailwind from '@/assets/tailwindcss.svg';
import Expo from '@/assets/expo.svg';
import Node from '@/assets/node.svg';
import Express from '@/assets/express.svg';
import Fastify from '@/assets/fastify.svg';
import Nest from '@/assets/nest.svg';
import PostgreSQL from '@/assets/postgresql.svg';
import Prisma from '@/assets/prisma.svg';
import Drizzle from '@/assets/drizzle.svg';
import Vercel from '@/assets/vercel.svg';
import Git from '@/assets/git.svg';
import Docker from '@/assets/docker.svg';
import Firebase from '@/assets/firebase.svg';
import GraphQL from '@/assets/graphql.svg';
import Vite from '@/assets/vite.svg';
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
            />
            <span>{language}</span>
        </Badge>
    )
}