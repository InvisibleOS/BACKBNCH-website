type ClassValue = string | number | false | null | undefined;

/**
 * Joins truthy class-name fragments into a single space-separated string.
 * Lets conditional classes be written inline without `[...].join(' ')` noise.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
