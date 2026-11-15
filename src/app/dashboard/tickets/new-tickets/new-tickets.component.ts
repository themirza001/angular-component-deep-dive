import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  onSubmit(titleInput: string, textInput: string) {
    console.log(textInput);
    console.log(titleInput)
    this.form().nativeElement.reset()
  }
}
