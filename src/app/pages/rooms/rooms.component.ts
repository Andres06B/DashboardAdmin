import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h2>Reserved Rooms</h2>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Room 101 - Deluxe King
            <span class="badge bg-primary rounded-pill">2 nights</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Room 205 - Ocean View Suite
            <span class="badge bg-primary rounded-pill">3 nights</span>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class RoomsComponent {}