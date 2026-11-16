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

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<NewTicket>();

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(titleInput: string, textInput: string) {
    this.add.emit({
      title: titleInput,
      text: textInput
    });
    this.form().nativeElement.reset();
  }

}
