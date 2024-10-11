import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

export const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'activities', component: ActivitiesComponent },
];