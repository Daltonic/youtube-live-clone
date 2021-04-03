import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
      <app-rows></app-rows>
    </div>
  `,
  styles: [
    `
      .sidebar {
        flex: 0.2;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
