import { gql } from "@apollo/client";
import { apolloClient } from "@/lib/apollo";

type Tech =
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

type Category = 'work' | 'study';

type Project = {
    id: string;
    title: string;
    url: string;
    description: string;
    image: {
        url: string;
    };
    techs: Tech[];
    category: Category;
}

interface GetProjectsResponse {
    projects: Project[];
}

const GET_PROJECTS_QUERY = gql`
    query getProjects {
        projects {
            id,
            title, 
            url,
            description,
            image {
                url
            }
            techs,
            category
        }
    }
`

export async function getProjects() {
    return await apolloClient.query<GetProjectsResponse>(
        { query: GET_PROJECTS_QUERY },
    );
}