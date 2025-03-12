import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
        uri: process.env.NEXT_HYGRAPH_ENDPOINT, 
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
        }
    }),
    cache: new InMemoryCache(),
    ssrForceFetchDelay: 100, // in milliseconds
});