export const Tag: Set<string> = new Set([
  'Angular',
  'Ionic',
  'React',
  'Next',
  'Nest',
  'Node'
]);

export const tagFilters: string[] = Array.from(Tag);

export type TagName = (typeof tagFilters)[number];

export function isValidTag(tag: string): tag is TagName {
  return Tag.has(tag);
}
