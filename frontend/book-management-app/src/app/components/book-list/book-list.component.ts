import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;
  isEditing = false;

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
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.selectedBook = null;
    this.isEditing = false;
  }

  updateSelectedBookField(field: keyof Book, value: any): void {
    if (this.selectedBook) {
      this.selectedBook = {
        ...this.selectedBook,
        [field]: value
      };
    }
  }

  updateBook(): void {
    if (this.selectedBook) {
      this.bookService.updateBook(this.selectedBook)
        .subscribe({
          next: () => {
            const index = this.books.findIndex(b => b.id === this.selectedBook?.id);
            if (index !== -1 && this.selectedBook) {
              this.books[index] = { ...this.selectedBook };
            }
            this.cancelEdit();
            this.loadBooks(); // Refresh the list
          },
          error: (error) => {
            console.error('Error updating book:', error);
            // Here you could add error handling UI feedback
          }
        });
    }
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