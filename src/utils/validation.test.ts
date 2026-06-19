import { expect, test, describe } from "bun:test";
import { isValidEmail, isValidPhone } from "./validation";

describe("Validation Utils", () => {
  describe("isValidEmail", () => {
    test("should return true for valid emails", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.in")).toBe(true);
      expect(isValidEmail("user+suffix@domain.com")).toBe(true);
      expect(isValidEmail("123@domain.org")).toBe(true);
    });

    test("should return false for invalid emails", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("@domain.com")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
      expect(isValidEmail("user@domain")).toBe(false);
      expect(isValidEmail("user @domain.com")).toBe(false);
    });

    test("should trim input before validation", () => {
      expect(isValidEmail("  test@example.com  ")).toBe(true);
    });
  });

  describe("isValidPhone", () => {
    test("should return true for valid phone numbers", () => {
      expect(isValidPhone("+91 9876543210")).toBe(true);
      expect(isValidPhone("9876543210")).toBe(true);
      expect(isValidPhone("+1-555-010-9999")).toBe(true);
      expect(isValidPhone("123 456 7890")).toBe(true);
    });

    test("should return false for invalid phone numbers", () => {
      expect(isValidPhone("12345")).toBe(false); // too short
      expect(isValidPhone("abc-def-ghij")).toBe(false); // no digits
      expect(isValidPhone("123456789")).toBe(false); // 9 digits (too short)
      expect(isValidPhone("+91-12345")).toBe(false); // 7 digits (too short)
    });

    test("should trim input before validation", () => {
      expect(isValidPhone("  9876543210  ")).toBe(true);
    });
  });
});
