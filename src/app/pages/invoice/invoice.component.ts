import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header">
        <h2>Reservation Invoice</h2>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Nights</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Room 101 - Deluxe King</td>
              <td>2</td>
              <td>$200</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Room 205 - Ocean View Suite</td>
              <td>3</td>
              <td>$300</td>
              <td>$900</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end"><strong>Total</strong></td>
              <td><strong>$1300</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class InvoiceComponent {}