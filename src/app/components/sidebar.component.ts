import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
      <app-rows selected="true" title="Home" icon="home"></app-rows>
      <app-rows title="Trending" icon="whatshot"></app-rows>
      <app-rows title="Subscription" icon="subscriptions"></app-rows>
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
