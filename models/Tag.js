export const Tag: Set<string> = new Set([
  'Angular',
  'Ionic',
  'React',
  'Next',
  'Nest',
  'Node'
]);

export const tagFilters: string[] = Array.from(Tag);

// Function to validate if a tag exists
export function isValidTag(tag: string): boolean {
  return Tag.has(tag);
}