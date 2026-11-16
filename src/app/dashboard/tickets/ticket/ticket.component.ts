import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  detailsVisible = signal(false);
  @Output() ticketId = new EventEmitter<string>();

  onToggleDatails() {
    this.detailsVisible.update((wasDetailsVisible) => !wasDetailsVisible);
  }
  onComplete() {
    this.ticketId.emit(this.data.id);
  }
}
