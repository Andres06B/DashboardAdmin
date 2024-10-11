import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" routerLink="/profile" routerLinkActive="active">
              <i class="bi bi-person"></i> Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/reservation" routerLinkActive="active">
              <i class="bi bi-calendar-check"></i> Reservation Info
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/rooms" routerLinkActive="active">
              <i class="bi bi-house-door"></i> Rooms
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/invoice" routerLinkActive="active">
              <i class="bi bi-receipt"></i> Invoice
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/activities" routerLinkActive="active">
              <i class="bi bi-list-task"></i> Activities
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      padding: 48px 0 0;
      box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
    .sidebar-sticky {
      position: relative;
      top: 0;
      height: calc(100vh - 48px);
      padding-top: .5rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `]
})
export class SidebarComponent {}