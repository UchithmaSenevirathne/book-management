import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/books">Books</a> |
      <a routerLink="/add-book">Add Book</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'book-management-app';
}