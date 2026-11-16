import { AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { NewTicket } from '../ticket.model';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {

  @Output() add = new EventEmitter<NewTicket>();

  enteredTitle: string = '';
  enteredText: string = '';

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText
    });
    this.enteredText = ''
    this.enteredTitle = ''
  }

}
