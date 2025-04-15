import { MetaData } from './MetaData.interface';

export interface Post {
  slug: string; // Slug must be a valid URL slug
  metaData: MetaData;
}

// Function to validate slug format
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}