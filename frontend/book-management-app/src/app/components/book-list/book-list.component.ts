import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks()
      .subscribe((books: Book[]) => this.books = books);
  }

  editBook(book: Book): void {
    this.selectedBook = { ...book };
  }

  deleteBook(id: number): void {
    if (id) {
      this.bookService.deleteBook(id)
        .subscribe(() => {
          this.books = this.books.filter(book => book.id !== id);
        });
    }
  }
}