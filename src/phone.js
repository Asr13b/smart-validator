export function isPhone(value) {
  if (typeof value !== "string") {
    return false;
  }

  return /^\+?[0-9]{9,15}$/.test(value);
}
