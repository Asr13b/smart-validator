import { describe, expect, test } from "vitest";
import { isEmail } from "../src/email.js";

describe("isEmail", () => {
  test("returns true for a valid email", () => {
    expect(isEmail("test@gmail.com")).toBe(true);
  });

  test("returns false for an invalid email", () => {
    expect(isEmail("test@gmail")).toBe(false);
  });

  test("returns false for non-string values", () => {
    expect(isEmail(123)).toBe(false);
  });
});
