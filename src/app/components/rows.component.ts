import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rows',
  template:  `
    <div class="streams">
      <p>Sidebar rows</p>
    </div>
  `,
  styles: [`
    .streams {
      color: red;
    }
  `]
})
export class RowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
