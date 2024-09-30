import { setupServer } from "msw/node";
import { handlers } from "./workos.api.handlers.ts";

export const server = setupServer(...handlers);
