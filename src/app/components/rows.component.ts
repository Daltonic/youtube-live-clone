import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css'],
})
export class RowsComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() selected: boolean = false;
  @Input() live: boolean = false;
  @Input() svg: string = '';
}
