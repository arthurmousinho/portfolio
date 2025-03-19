import { gql } from "@apollo/client";
import type { Project } from "./get-projects";
import { apolloClient } from "@/lib/apollo";

interface GetTopProjectsResponse {
    projects: Project[];
}

const GET_PROJECTS_QUERY = gql`
    query getTopProjects {
        projects(where: { id_in: [
            "cm85u0omm21w607n2wgxh26x2",
            "cm87a3x4m4tiq07n2runa4c44",
            "cm8eiilrapkdp07n3vyz7q0t5",
            "cm8ejcz91s80y07n36tdb073u"
        ] }) {
            id,
            title, 
            url,
            description,
            image {
                url
            }
            techs,
            category,
            backgroundColor {
                hex
            }
        }
    }
`

export async function getTopProjects() {
    return await apolloClient.query<GetTopProjectsResponse>(
        { query: GET_PROJECTS_QUERY },
    );
}