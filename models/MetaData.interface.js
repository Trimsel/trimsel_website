import { Tag } from './Tag';

export interface MetaData {
  title: string;
  date: Date; // Ensure proper date format
  mainImageUrl: string;
  excerpt: string;
  tags: Tag[];
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}