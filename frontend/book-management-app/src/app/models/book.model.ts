export interface Book {
    id?: number;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date | string;
}