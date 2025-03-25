import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server/trpc/router";
import { createContext } from "@/server/trpc/context";

const handler = (request: Request) => {
    console.log("Incoming request:", request.url);
    try {
        return fetchRequestHandler({
            endpoint: "/api/trpc",
            req: request,
            router: appRouter,
            createContext,
        });
    } catch (error) {
        console.error("Error handling request:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};

export { handler as GET, handler as POST };
