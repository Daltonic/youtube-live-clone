import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rows',
  template:  `
    <div [ngClass]="['sidebarRow', selected ? 'selected' : '']">
    <mat-icon class="rows__icon">{{icon}}</mat-icon>
      <p class="rows__title">{{title}}</p>
    </div>
  `,
  styles: [`
    .sidebarRow {
      display: flex;
      align-items: center;
      padding: 10px 20px;
    }

    .rows__icon {
      color: #606060;
      font-size: large !important;
    }

    .rows__title {
      flex: 1;
      margin-left: 20px;
      font-size: 12px;
      font-weight: 500;
    }

    .sidebarRow:hover {
      background-color: lightgray;
      cursor: pointer;
    }

    .sidebarRow:hover > .rows__icon {
      color: red;
    }

    .sidebarRow:hover > .rows__title {
      font-weight: bold;
    }

    .sidebarRow.selected {
      background-color: lightgray;
    }

    .sidebarRow.selected > .rows__icon {
      color: red;
    }

    .sidebarRow.selected > .rows__title {
      font-weight: bold;
    }
  `]
})
export class RowsComponent {

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() selected: boolean = false;
}
