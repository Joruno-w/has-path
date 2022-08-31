import { describe, expect, it } from "vitest";
import { hasPath, hasPathSync } from "../src";
import { fileURLToPath } from "node:url";

describe("path exist", () => {
  it("async", async () => {
    expect(await hasPath(fileURLToPath(import.meta.url))).toBe(true);
  });
  it("sync", () => {
    expect(hasPathSync(fileURLToPath(import.meta.url))).toBe(true);
  });
});
