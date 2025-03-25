import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/router";

export const trpc = createTRPCReact<AppRouter>();

export const trpcClientConfig = {
    links: [
        httpBatchLink({
            url: "/api/trpc",
        }),
    ],
};
