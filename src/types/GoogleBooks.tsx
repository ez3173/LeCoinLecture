// src/types/GoogleBooks.ts
export interface GoogleBookVolumeInfo {
    title: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
    isbn?: string[];
  }
  