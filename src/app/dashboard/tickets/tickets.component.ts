import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketsComponent } from './new-tickets/new-tickets.component';
import { NewTicket, Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketsComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []

  onAdd(newTicket: NewTicket) {
    this.tickets = [{ ...newTicket, id: new Date().getMilliseconds().toString(), status: 'open' }, ...this.tickets]
  }

  onComplete(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        ticket.status = 'closed'
      }
      return ticket;
    })
  }
}
