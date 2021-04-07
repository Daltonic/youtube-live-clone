import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <app-rows selected="true" title="Home" icon="home"></app-rows>
    <app-rows title="Trending" icon="whatshot"></app-rows>
    <app-rows title="Subscription" icon="subscriptions"></app-rows>
    <hr class="sidebar__hr" />
    <app-rows title="Library" icon="video_library"></app-rows>
    <app-rows title="History" icon="history"></app-rows>
    <app-rows title="Your Videos" icon="tv"></app-rows>
    <app-rows title="Watch Later" icon="watch_ater"></app-rows>
    <app-rows title="Liked Vedios" icon="thumb_up_alt_outlined"></app-rows>
    <app-rows title="Show More" icon="expand_more_outlined"></app-rows>
    <hr class="sidebar__hr" />
  `,
  styles: [
    `
      .sidebar__hr {
        height: 1px;
        border: 0;
        background-color: lightgray;
        margin-top: 10px;
        margin-bttom: 10px;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
