import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { inferAsyncReturnType } from "@trpc/server";

export async function createContext() {
    const session: Session | null = await getServerSession(authOptions);

    return { session };
}

export type Context = inferAsyncReturnType<typeof createContext>;
