import { NewClient } from "@/db/schema/clients";
import { getCurrentUser } from "@/lib/session";
import { AuthenticationError } from "../errors";
import { createClient, getClientByEmail } from "@/data-access/client";

export async function createClientUseCase(input: NewClient) {
    const user = await getCurrentUser();
    if (!user) {
        throw new AuthenticationError();
    }
    const existingUser = await getClientByEmail(input.email);
    if (existingUser) {
        throw new Error("User already exists");
    }
    return await createClient(input)
}