import { formatUtcDate } from "./date.ts";

describe("formatUtcDate", () => {
  it("formats date correctly", () => {
    const date = "2024-08-27T23:16:10.554Z";
    expect(formatUtcDate(date)).toEqual("Aug 27, 2024");
  });
});
