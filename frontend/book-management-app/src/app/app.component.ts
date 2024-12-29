import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">BookManager</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/books" routerLinkActive="active"
                >Books</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/add-book"
                routerLinkActive="active"
                >Add Book</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'book-management-app';
}
