import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/api/mockServer";

type TVoidMethod = () => void;

/**
 * Utility function that mocks the `ResizeObserver` API.
 * Required when testing e.g. dropdown components.
 */
export function setupMockResizeObserver() {
  class MockResizeObserver implements ResizeObserver {
    observe: TVoidMethod = () => null;
    unobserve: TVoidMethod = () => null;
    disconnect: TVoidMethod = () => null;
  }

  window.ResizeObserver = MockResizeObserver;
}

beforeAll(() => {
  server.listen();
  setupMockResizeObserver();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
