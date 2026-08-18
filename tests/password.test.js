import { describe, expect, test } from "vitest";
import { isStrongPassword } from "../src/password.js";

describe("isStrongPassword", () => {
  test("accepts a strong password", () => {
    expect(isStrongPassword("Hello123!")).toBe(true);
  });

  test("rejects a weak password", () => {
    expect(isStrongPassword("hello")).toBe(false);
  });
});
