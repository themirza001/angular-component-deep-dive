import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketsComponent } from './new-tickets/new-tickets.component';
import { NewTicket, Ticket } from './ticket.model';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketsComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  ticket: Ticket[] = []
  onAdd(newTicket: NewTicket) {
    this.ticket = [{ ...newTicket, id: new Date().getMilliseconds().toString(), status: 'open' }, ...this.ticket]
  }
}
