import { describe, expect, test } from "vitest";
import { isPhone } from "../src/phone.js";

describe("isPhone", () => {
  test("accepts a valid phone number", () => {
    expect(isPhone("+251911234567")).toBe(true);
  });

  test("rejects an invalid phone number", () => {
    expect(isPhone("abc123")).toBe(false);
  });
});
