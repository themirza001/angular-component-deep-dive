import { Component, Input } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  @Input({ required: true }) dummyTrafficData!: {
    id: string,
    value: number,
  }[];

  @Input({ required: true }) maxTraffic!: number;
}
