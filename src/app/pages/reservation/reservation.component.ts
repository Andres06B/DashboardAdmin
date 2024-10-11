import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h2>Reservation Information</h2>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="checkIn" class="form-label">Check-in Date</label>
            <input type="date" class="form-control" id="checkIn">
          </div>
          <div class="mb-3">
            <label for="checkOut" class="form-label">Check-out Date</label>
            <input type="date" class="form-control" id="checkOut">
          </div>
          <div class="mb-3">
            <label for="guests" class="form-label">Number of Guests</label>
            <input type="number" class="form-control" id="guests" min="1" value="2">
          </div>
          <button type="submit" class="btn btn-primary">Update Reservation</button>
        </form>
      </div>
    </div>
  `,
})
export class ReservationComponent {}