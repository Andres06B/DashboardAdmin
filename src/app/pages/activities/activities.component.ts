import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h2>Suggested Activities</h2>
      </div>
      <div class="card-body">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Beach Volleyball</h5>
              <small>10:00 AM</small>
            </div>
            <p class="mb-1">Join us for a fun beach volleyball game!</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Sunset Cruise</h5>
              <small>6:00 PM</small>
            </div>
            <p class="mb-1">Enjoy a relaxing cruise while watching the sunset.</p>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Spa Treatment</h5>
              <small>2:00 PM</small>
            </div>
            <p class="mb-1">Pamper yourself with our luxurious spa treatments.</p>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ActivitiesComponent {}